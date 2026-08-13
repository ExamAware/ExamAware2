# 插件开发总览

插件可以插入 ExamAware 软件里，扩展软件的功能，实现一些很有意思的事情。

先读：

- [快速开始](./quickstart)：用 API V2 模板创建插件并完成第一次加载。
- [环境准备与开发工作流](./setup)：装 Node / pnpm、初始化插件项目、Vite 配置与“改代码 → 一键重载”的日常循环。
- [插件 API 概览](./api)：V2 manifest、生命周期、类型化服务、RPC、设置和资源释放。
- [桌面端主程序开发](./desktop-dev)：想改主程序（Electron 三进程）时的目录分布、开发命令与代码规矩。

## 我们要做什么

- 在 `package.json` 里声明 `examaware.apiVersion: 2`、入口、权限、激活窗口和服务依赖。
- **main 入口**：使用 `defineMainPlugin` 扩展后台能力。
- **renderer 入口（可选）**：使用 `defineRendererPlugin` 注册设置页、播放器工具栏等 UI。
- **宿主 API**：统一从 `ctx.api` 调用；资源交给 `ctx.scope`，卸载时自动收尾。

## 一些开发套路

1. 运行 `pnpm dlx create-examaware-plugin my-plugin`，或复制仓库内的 V2 模板。
2. 调整 `examaware` manifest、共享令牌和 main / renderer 入口。
3. 运行 `pnpm dev` 或 `pnpm build`，在 ExamAware 设置页点击“解压缩插件”并选择含 `package.json` 的目录。
4. 看日志、重载、调整，完成后打包 `.ea2x` 分发。
