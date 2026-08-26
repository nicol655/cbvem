#!/usr/bin/env node

const proxyUrl = process.env.STITCH_PROXY_URL || "http://127.0.0.1:7337/mcp";

let reqId = 1;

async function rpc(method, params = {}, withId = true) {
  const payload = withId
    ? { jsonrpc: "2.0", id: reqId++, method, params }
    : { jsonrpc: "2.0", method, params };

  const response = await fetch(proxyUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });

  const body = await response.text();
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${body}`);
  }

  if (!withId) {
    return null;
  }

  const parsed = JSON.parse(body);
  if (parsed.error) {
    throw new Error(parsed.error.message || JSON.stringify(parsed.error));
  }

  return parsed.result;
}

async function main() {
  await rpc("initialize", {
    protocolVersion: "2025-03-26",
    capabilities: {},
    clientInfo: {
      name: "cbvem-local-verifier",
      version: "1.0.0"
    }
  });

  await rpc("notifications/initialized", {}, false);

  const listResult = await rpc("tools/list", {});
  const tools = listResult?.tools || [];
  const names = tools.map((tool) => tool.name || tool.tool).filter(Boolean);

  console.log(`STITCH_PROXY_OK tools=${tools.length}`);
  console.log(`STITCH_PROXY_TOOLS ${names.slice(0, 15).join(", ")}`);
}

main().catch((error) => {
  console.error(`STITCH_PROXY_FAIL ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
});
