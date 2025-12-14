# Hello World 插件

这是一个最小可运行的 ExamAware 桌面端插件示例，演示如何：

- 在 `package.json` 中通过 `examaware` 字段声明插件元数据；
- 使用 `src/main/index.ts` 作为主进程入口，通过 Vite 打包成 `dist/main/index.cjs`，并在 `ctx.services` 中提供一个简单服务；
- 使用 `ctx.effect` 注册可逆副作用，便于插件卸载时清理资源；
- 通过 `schema.json` 提供插件配置结构，供设置页 UI 读取与编辑；
- 借助 `ctx.settings` 读取 / 写入插件命名空间配置，并订阅配置变更；
- 使用 Vite + TypeScript 构建 renderer 入口，动态向设置页注册一个示例页面。

插件安装位置：`packages/desktop/plugins/hello-world`。开发阶段运行 `pnpm dev --filter @dsz-examaware/desktop` 即可自动扫描并加载该插件；生产环境可将整个插件文件夹复制到用户目录 `~/Library/Application Support/ExamAware/plugins/`（macOS）或对应平台的 `userData` 路径下。

## 构建与开发

- `pnpm run dev`：并行执行 renderer/main 的 `vite build --watch`，持续输出到 `dist/renderer` 与 `dist/main`，适合在宿主应用中热重载验证。
- `pnpm run build`：顺序构建两个入口，最终输出 `dist/renderer/index.mjs` 与 `dist/main/index.cjs`，分别供 `plugin://` renderer 协议与主进程 loader 使用。
- renderer 入口源码位于 `src/renderer/main.ts`，主进程入口源码位于 `src/main/index.ts`。
