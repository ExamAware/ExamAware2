@echo off
chcp 65001 >nul
echo ==========================================
echo   ExamAware Windows 打包脚本
echo ==========================================
echo.

REM 检查 pnpm 是否安装
where pnpm >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 未找到 pnpm，请先安装：
    echo   npm install -g pnpm@10.18.2
    echo.
    echo 或者使用 corepack 启用：
    echo   corepack enable
    echo   corepack prepare pnpm@10.18.2 --activate
    pause
    exit /b 1
)

REM 检查 Node.js 版本
node -v >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 未找到 Node.js，请先安装 Node.js 22+
    pause
    exit /b 1
)

echo [1/6] 安装依赖...
call pnpm install --frozen-lockfile
if %errorlevel% neq 0 (
    echo [错误] 依赖安装失败
    pause
    exit /b 1
)

echo [2/6] 构建 rpc 包...
call pnpm rpc:build
if %errorlevel% neq 0 (
    echo [错误] rpc 构建失败
    pause
    exit /b 1
)

echo [3/6] 构建 core 包...
call pnpm core:build
if %errorlevel% neq 0 (
    echo [错误] core 构建失败
    pause
    exit /b 1
)

echo [4/6] 构建 player 包...
call pnpm player:build
if %errorlevel% neq 0 (
    echo [错误] player 构建失败
    pause
    exit /b 1
)

echo [5/6] 构建 plugin-sdk 包...
call pnpm --filter @dsz-examaware/plugin-sdk build
if %errorlevel% neq 0 (
    echo [错误] plugin-sdk 构建失败
    pause
    exit /b 1
)

echo [6/6] 构建桌面端并打包 Windows EXE...
call pnpm desktop:build:win
if %errorlevel% neq 0 (
    echo [错误] 桌面端打包失败
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   打包成功！
echo ==========================================
echo 输出文件：packages/desktop/out/ExamAware-1.3.0-setup.exe
echo.
pause
