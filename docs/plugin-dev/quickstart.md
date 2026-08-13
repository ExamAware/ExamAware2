# 快速开始（API V2）

## 准备工具

- Node.js 22+
- pnpm 10+
- Git

仓库内开发请使用根目录声明的精确 Node 和 pnpm 版本。

## 创建插件

推荐直接使用 API V2 模板：

```bash
pnpm dlx create-examaware-plugin my-plugin
cd my-plugin
pnpm install
```

也可以复制仓库内的 `templates/examaware-plugin-template` 或 `packages/desktop/plugins/examaware-plugin-example`。

## package.json 关键字段

```json
{
  "name": "@examaware-plugins/my-plugin",
  "version": "1.0.0",
  "main": "./dist/main/index.cjs",
  "module": "./dist/renderer/index.mjs",
  "examaware": {
    "apiVersion": 2,
    "displayName": "My Plugin",
    "description": "自定义考试扩展",
    "targets": {
      "main": "./dist/main/index.cjs",
      "renderer": "./dist/renderer/index.mjs"
    },
    "permissions": ["ui.contribute"],
    "activation": {
      "rendererWindows": ["main"]
    },
    "services": {
      "provide": [],
      "inject": []
    },
    "settings": {
      "namespace": "@examaware-plugins/my-plugin"
    }
  }
}
```

`targets` 必须指向构建产物。V2 main 和 renderer 入口分别使用：

```ts
import { defineMainPlugin } from '@dsz-examaware/plugin-sdk';

export default defineMainPlugin({
  activate(ctx) {
    ctx.logger.info('Main entry activated');
  }
});
```

```ts
import { defineRendererPlugin } from '@dsz-examaware/plugin-sdk';

export default defineRendererPlugin({
  activate(ctx) {
    ctx.logger.info('Renderer entry activated', ctx.window.kind);
  }
});
```

宿主能力从 `ctx.api` 调用；不要访问应用内部桥接对象、手写 IPC 或直接导入 Electron。

## 开发节奏

1. `pnpm dev` 监听构建，或 `pnpm build` 单次构建。
2. 在 ExamAware 设置页点击“解压缩插件”，选择含 `package.json` 的插件目录。
3. 修改代码，等待 `dist` 重建后在插件列表点击“重载”。
4. 主进程日志看应用日志页或开发控制台；renderer 日志看对应窗口 DevTools。

## 常用脚本

- `pnpm dev`：监听构建 main 和 renderer。
- `pnpm build`：生成 `dist/main/index.cjs` 和 `dist/renderer/index.mjs`。
- `pnpm lint`：运行模板的 TypeScript / Vue 类型检查。
- `pnpm pack`：构建并打包 `.ea2x`。

下一篇：[插件 API 概览](./api)。
