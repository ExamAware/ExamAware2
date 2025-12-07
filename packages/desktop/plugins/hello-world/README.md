# Hello World 插件

这是一个最小可运行的 ExamAware 桌面端插件示例，演示如何：

- 在 `package.json` 中通过 `examaware` 字段声明插件元数据；
- 实现主进程入口 `main.cjs`，并在 `ctx.services` 中提供一个简单服务；
- 使用 `ctx.effect` 注册可逆副作用，便于插件卸载时清理资源；
- 通过 `schema.json` 提供插件配置结构，供设置页 UI 读取与编辑；
- 使用 Vite + TypeScript 构建 renderer 入口，动态向设置页注册一个示例页面。

插件安装位置：`packages/desktop/plugins/hello-world`。开发阶段运行 `pnpm dev --filter @dsz-examaware/desktop` 即可自动扫描并加载该插件；生产环境可将整个插件文件夹复制到用户目录 `~/Library/Application Support/ExamAware/plugins/`（macOS）或对应平台的 `userData` 路径下。

## Vite renderer 入口

- 开发：`pnpm run dev`（需要在仓库根目录执行或通过 `-F @examaware/plugin-hello-world` 指定 workspace）。
- 构建：`pnpm run build`，产物输出到 `dist/renderer/index.mjs`，主程序会从该文件加载 renderer 插件。
- 入口源码：`src/renderer/main.ts`，默认示例会向设置页新增「Hello 示例」Tab，展示一个带计数器的按钮。
