#!/usr/bin/env node

const fs = require("fs");
const http = require("http");
const path = require("path");

const defaultConfigPath = path.resolve(process.cwd(), "scripts/stitch-mcp-http-proxy.config.json");
const configPath = process.env.STITCH_HTTP_PROXY_CONFIG || defaultConfigPath;

let config = {};
if (fs.existsSync(configPath)) {
  config = JSON.parse(fs.readFileSync(configPath, "utf8"));
}

const endpoint = process.env.STITCH_MCP_URL || config.endpoint || "https://stitch.googleapis.com/mcp";
const apiKey = process.env.STITCH_API_KEY || config.apiKey;
const port = Number(process.env.STITCH_HTTP_PROXY_PORT || config.port || 7337);
const logPath =
  process.env.STITCH_HTTP_PROXY_LOG || config.logPath || path.resolve(process.cwd(), "scripts/stitch-mcp-http-proxy.log");

let remoteSessionId = null;
let remoteInitialized = false;
let nextRemoteId = 1;

function log(message) {
  try {
    fs.appendFileSync(logPath, `${new Date().toISOString()} ${message}\n`);
  } catch {
    // Never break request flow because of logging failures.
  }
}

function jsonRpcResult(id, result) {
  return { jsonrpc: "2.0", id, result };
}

function jsonRpcError(id, code, message) {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

function hasRequestId(message) {
  return Object.prototype.hasOwnProperty.call(message, "id");
}

function parseSseOrJson(text) {
  const trimmed = text.trim();
  if (!trimmed) {
    return {};
  }

  if (trimmed.startsWith("{")) {
    return JSON.parse(trimmed);
  }

  const events = [];
  let current = [];

  for (const line of trimmed.split(/\r?\n/)) {
    if (line === "") {
      if (current.length) {
        events.push(current.join("\n"));
        current = [];
      }
      continue;
    }

    if (line.startsWith("data:")) {
      current.push(line.slice(5).trimStart());
    }
  }

  if (current.length) {
    events.push(current.join("\n"));
  }

  for (const event of events.reverse()) {
    if (event && event !== "[DONE]") {
      return JSON.parse(event);
    }
  }

  return {};
}

async function remoteExchange(payload) {
  if (!apiKey) {
    throw new Error("STITCH_API_KEY is not configured");
  }

  const headers = {
    Accept: "application/json, text/event-stream",
    "Content-Type": "application/json",
    "X-Goog-Api-Key": apiKey
  };

  if (remoteSessionId) {
    headers["Mcp-Session-Id"] = remoteSessionId;
  }

  const controller = new AbortController();
  // Screen generation can take minutes; use a generous timeout.
  const timeout = setTimeout(() => controller.abort(), 300000);

  let response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: controller.signal
    });
  } finally {
    clearTimeout(timeout);
  }

  const sessionHeader = response.headers.get("mcp-session-id");
  if (sessionHeader) {
    remoteSessionId = sessionHeader;
  }

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Stitch MCP returned HTTP ${response.status}: ${text}`);
  }

  return parseSseOrJson(text);
}

async function remoteRequest(method, params = {}) {
  const response = await remoteExchange({
    jsonrpc: "2.0",
    id: nextRemoteId++,
    method,
    params
  });

  if (response.error) {
    throw new Error(response.error.message || JSON.stringify(response.error));
  }

  return response.result || {};
}

async function remoteNotification(method, params = {}) {
  await remoteExchange({
    jsonrpc: "2.0",
    method,
    params
  });
}

async function ensureRemoteInitialized(clientProtocolVersion) {
  if (remoteInitialized) {
    return;
  }

  await remoteRequest("initialize", {
    protocolVersion: clientProtocolVersion || "2025-03-26",
    capabilities: {},
    clientInfo: {
      name: "cbvem-stitch-http-proxy",
      version: "1.0.0"
    }
  });
  await remoteNotification("notifications/initialized");
  remoteInitialized = true;
}

function sanitizeTool(tool) {
  const sanitized = { ...tool };
  delete sanitized.outputSchema;
  return sanitized;
}

async function handleMessage(message) {
  const id = message.id;
  const method = message.method || "unknown";
  log(`request ${method}`);

  switch (method) {
    case "initialize":
      return jsonRpcResult(id, {
        protocolVersion: message.params?.protocolVersion || "2025-03-26",
        capabilities: {
          tools: {
            listChanged: false
          }
        },
        serverInfo: {
          name: "stitch-mcp-http-proxy",
          version: "1.0.0"
        }
      });

    case "notifications/initialized":
      return null;

    case "ping":
      return jsonRpcResult(id, {});

    case "tools/list": {
      await ensureRemoteInitialized(message.params?.protocolVersion);
      const result = await remoteRequest("tools/list", message.params || {});
      return jsonRpcResult(id, {
        ...result,
        tools: (result.tools || []).map(sanitizeTool)
      });
    }

    case "tools/call": {
      await ensureRemoteInitialized(message.params?.protocolVersion);
      const result = await remoteRequest("tools/call", message.params || {});
      return jsonRpcResult(id, result);
    }

    case "resources/list":
      return jsonRpcResult(id, { resources: [] });

    case "prompts/list":
      return jsonRpcResult(id, { prompts: [] });

    default:
      if (hasRequestId(message)) {
        return jsonRpcError(id, -32601, `Method not found: ${method}`);
      }
      return null;
  }
}

function sendJson(response, statusCode, payload, sessionId) {
  const body = JSON.stringify(payload);
  response.writeHead(statusCode, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Accept, Mcp-Session-Id",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body, "utf8"),
    "Mcp-Session-Id": sessionId
  });
  response.end(body);
}

function sendEmpty(response, statusCode, sessionId) {
  response.writeHead(statusCode, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Accept, Mcp-Session-Id",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Mcp-Session-Id": sessionId
  });
  response.end();
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });
}

const serverSessionId = `stitch-http-proxy-${Date.now()}`;

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "127.0.0.1"}`);

    if (request.method === "OPTIONS") {
      sendEmpty(response, 204, serverSessionId);
      return;
    }

    if (url.pathname === "/health") {
      sendJson(response, 200, { ok: true }, serverSessionId);
      return;
    }

    if (url.pathname !== "/mcp") {
      sendJson(response, 404, { error: "Not found" }, serverSessionId);
      return;
    }

    if (request.method === "GET") {
      response.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "Content-Type": "text/event-stream",
        "Mcp-Session-Id": serverSessionId
      });
      response.write("event: endpoint\ndata: /mcp\n\n");
      return;
    }

    if (request.method !== "POST") {
      sendJson(response, 405, { error: "Method not allowed" }, serverSessionId);
      return;
    }

    const rawBody = await readBody(request);
    const payload = JSON.parse(rawBody || "{}");
    const messages = Array.isArray(payload) ? payload : [payload];
    const results = [];

    for (const message of messages) {
      try {
        const result = await handleMessage(message);
        if (result) {
          results.push(result);
        }
      } catch (error) {
        results.push(
          jsonRpcError(
            hasRequestId(message) ? message.id : null,
            -32000,
            error instanceof Error ? error.message : String(error)
          )
        );
      }
    }

    if (!results.length) {
      sendEmpty(response, 202, serverSessionId);
      return;
    }

    sendJson(response, 200, Array.isArray(payload) ? results : results[0], serverSessionId);
  } catch (error) {
    sendJson(response, 500, jsonRpcError(null, -32000, error instanceof Error ? error.message : String(error)), serverSessionId);
  }
});

server.listen(port, "127.0.0.1", () => {
  log(`listening http://127.0.0.1:${port}/mcp`);
  console.error(`Stitch MCP proxy listening on http://127.0.0.1:${port}/mcp`);
});

process.on("SIGINT", () => server.close(() => process.exit(0)));
process.on("SIGTERM", () => server.close(() => process.exit(0)));
