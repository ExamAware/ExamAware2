# 插件开发总览

插件可以插入 ExamAware 软件里，扩展软件的功能，实现一些很有意思的事情。

## 我们要做什么

- 在 `package.json` 里用 `examaware` 字段说明清楚入口和依赖。
- **main 入口**：主进程扩展（服务、IPC、托盘、时间线）。
- **renderer 入口（可选）**：提供前端 UI（设置页、播放器工具栏、浮层）。
- **服务**：`services.provide` / `services.inject` 让宿主按依赖顺序加载，卸载时逆序收尾。

## 一些开发套路

1. 不要使用 SDK 的模板。GPT 生成的那坨跑不起来。直接拷贝模板代码即可。
2. 补上 `examaware` 配置和主/渲染代码。
3. `pnpm dev` 或 `pnpm build`，然后开一个 ExamAware 在设置里点击“解压缩插件”指向你插件的目录（含 `package.json` ）。
4. 看日志、重载、调整，满意后打包 `.ea2x` 分发。
