# ExamAware 考试系统

基于 Monorepo 架构的考试系统，支持 Web 和 Desktop 双平台。

## 项目结构

- `packages/player-core` - 核心组件库，包含所有 Player 相关功能
- `packages/examaware-web` - Web 版本
- `packages/examaware-desktop` - Desktop 版本（Electron）

## 开发

```bash
# 安装依赖
pnpm install

# 开发核心组件库
pnpm dev:core

# 开发 Web 版本
pnpm dev:web

# 开发 Desktop 版本
pnpm dev:desktop
```

## 构建

```bash
# 构建所有包
pnpm build:all

# 单独构建
pnpm build:core
pnpm build:web
pnpm build:desktop
```

## 特性

- 🎯 **一套代码，双平台使用** - Player 组件完全共享
- 🔧 **统一维护** - 业务逻辑、样式、交互行为完全一致
- 📦 **类型安全** - 完整的 TypeScript 支持
- ⚡ **开发效率** - 热重载开发，修改一次两平台同时更新
