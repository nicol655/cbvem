$ErrorActionPreference = "Stop"

function Resolve-NodePath {
  $candidates = @(
    $env:CURSOR_NODE_EXE,
    "D:\cursor\resources\app\resources\helpers\node.exe",
    "$env:LOCALAPPDATA\Programs\cursor\resources\app\resources\helpers\node.exe"
  ) | Where-Object { $_ -and $_.Trim().Length -gt 0 }

  foreach ($path in $candidates) {
    if (Test-Path $path) {
      return $path
    }
  }

  $nodeCmd = Get-Command node -ErrorAction SilentlyContinue
  if ($nodeCmd) {
    return $nodeCmd.Source
  }

  throw "No se encontro node.exe. Define CURSOR_NODE_EXE o instala Node."
}

function Test-ProxyHealth {
  param([string]$HealthUrl)

  try {
    $response = Invoke-RestMethod -Uri $HealthUrl -Method Get -TimeoutSec 2
    return $response.ok -eq $true
  } catch {
    return $false
  }
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Split-Path -Parent $scriptDir
$proxyScript = Join-Path $scriptDir "stitch-mcp-http-proxy.js"
$verifyScript = Join-Path $scriptDir "verify-stitch-proxy.js"

$proxyPort = if ($env:STITCH_HTTP_PROXY_PORT) { [int]$env:STITCH_HTTP_PROXY_PORT } else { 7337 }
$proxyUrl = "http://127.0.0.1:$proxyPort/mcp"
$healthUrl = "http://127.0.0.1:$proxyPort/health"

$nodePath = Resolve-NodePath

if (-not $env:STITCH_API_KEY) {
  $cursorConfig = "C:\Users\nicol\.cursor\stitch-mcp-http-proxy.config.json"
  if (Test-Path $cursorConfig) {
    $cfg = Get-Content $cursorConfig -Raw | ConvertFrom-Json
    if ($cfg.apiKey) {
      $env:STITCH_API_KEY = $cfg.apiKey
    }
  }
}

if (-not $env:STITCH_API_KEY) {
  throw "No se encontro STITCH_API_KEY. Define variable de entorno o agrega apiKey en C:\Users\nicol\.cursor\stitch-mcp-http-proxy.config.json"
}

$proxyRunning = Test-ProxyHealth -HealthUrl $healthUrl
if (-not $proxyRunning) {
  Write-Host "Iniciando proxy local Stitch en $proxyUrl ..."
  Start-Process -FilePath $nodePath `
    -ArgumentList "`"$proxyScript`"" `
    -WorkingDirectory $repoRoot `
    -WindowStyle Hidden | Out-Null

  $maxAttempts = 20
  $ready = $false
  for ($i = 0; $i -lt $maxAttempts; $i++) {
    Start-Sleep -Milliseconds 500
    if (Test-ProxyHealth -HealthUrl $healthUrl) {
      $ready = $true
      break
    }
  }

  if (-not $ready) {
    throw "El proxy no levanto en $proxyUrl"
  }
} else {
  Write-Host "Proxy ya activo en $proxyUrl"
}

Write-Host "Verificando tools de Stitch via proxy..."
Push-Location $repoRoot
try {
  & $nodePath $verifyScript
} finally {
  Pop-Location
}
