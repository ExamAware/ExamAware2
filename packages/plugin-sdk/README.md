# ExamAware Plugin SDK

ExamAware 官方插件 SDK，提供 `HostBuilder`、依赖注入容器以及脚手架，方便插件开发者以与 `Microsoft.Extensions.Hosting` 类似的方式组织插件生命周期。

## 功能特性

- ✅ `ServiceCollection` + `ServiceProvider`：支持 `singleton / scoped / transient` 生命周期
- ✅ `HostBuilder`：配置服务、注册中间件、Hosted Service、对外暴露宿主服务
- ✅ `defineExamAwarePlugin`：一行包裹插件入口，自动执行 `build()` / `run()` 并返回 disposer
- ✅ CLI：`pnpm dlx create-examaware-plugin my-plugin` 快速创建可发布的插件模板
- ✅ TypeScript 类型：开箱即用的 `PluginRuntimeContext`、`HostedService`、`PluginMiddleware` 等定义

## 快速开始

```bash
pnpm dlx create-examaware-plugin examaware-plugin-demo
cd examaware-plugin-demo
pnpm install
pnpm build

# 打包发布 .ea2x
pnpm pack
```

生成的模板默认包含：

- `src/main.ts`：示例主进程入口，使用 `defineExamAwarePlugin`
- `src/renderer.ts`：渲染进程设置页示例
- `tsup.config.ts`：构建 main / renderer Bundle
- `examaware` 清单：自动指向 `dist/main/index.cjs` 与 `dist/renderer/index.mjs`
- `pnpm pack`：输出 `dist/<name>-<version>.ea2x` 可分发插件包

## 基础用法

```ts
import { defineExamAwarePlugin } from '@examaware/plugin-sdk';

export default defineExamAwarePlugin((builder) => {
  builder.configureServices((services, ctx) => {
    services.addSingleton('hello.message', () => ({
      text: ctx.config?.message ?? 'Hello from SDK',
      timestamp: Date.now()
    }));
  });

  builder.exposeHostService('hello.message', { token: 'hello.message' });

  builder.use(async ({ ctx }, next) => {
    ctx.logger.info('插件初始化完成');
    await next();
  });
});
```

更多示例与 API 参考见 `docs/plugin-system-plan.md` 中的 Phase 4.5 章节。
