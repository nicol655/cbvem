@echo off
setlocal
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-stitch-proxy-and-verify.ps1"
set EXIT_CODE=%ERRORLEVEL%
if not "%EXIT_CODE%"=="0" (
  echo.
  echo ERROR: fallo la inicializacion/verificacion del proxy Stitch.
)
exit /b %EXIT_CODE%
