@echo off
title PSU-TUYF Development Server
cls

:menu
echo ====================================================
echo             PSU-TUYF Dev Server Launcher            
echo ====================================================
echo.
echo  [1] Run Dev Server (Standard)
echo  [2] Run Dev Server with Infisical (Pull Secrets)
echo  [3] Build Project
echo  [4] Exit
echo.
echo ====================================================
set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" goto standard
if "%choice%"=="2" goto infisical
if "%choice%"=="3" goto build
if "%choice%"=="4" goto exit
echo Invalid choice, please try again.
pause
goto menu

:standard
echo.
echo Starting Standard Development Server...
where pnpm >nul 2>nul
if %errorlevel% equ 0 (
    pnpm dev
) else (
    npm run dev
)
goto end

:infisical
echo.
echo Starting Dev Server with Infisical Secrets...
where pnpm >nul 2>nul
if %errorlevel% equ 0 (
    infisical run -- pnpm dev
) else (
    infisical run -- npm run dev
)
goto end

:build
echo.
echo Building Project...
where pnpm >nul 2>nul
if %errorlevel% equ 0 (
    pnpm build
) else (
    npm run build
)
goto end

:end
pause
goto menu

:exit
exit
