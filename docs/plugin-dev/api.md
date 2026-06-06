# 插件 API 概览

可以看示例插件。

## manifest 示例

```json
{
  "name": "examaware-plugin-template",
  "version": "0.0.1",
  "examaware": {
    "displayName": "ExamAware Demo Plugin",
    "description": "演示服务注册与设置页挂载",
    "enabled": true,
    "targets": {
      "main": "dist/main/index.cjs",
      "renderer": "dist/renderer/main.js"
    },
    "engines": {
      "desktop": ">=1.1.0",
      "sdk": "^1.1.0"
    },
    "services": {
      "provide": ["hello.message", "heartbeat.service"],
      "inject": []
    },
    "config": {
      "message": "Hello from ExamAware Demo Plugin"
    }
  }
}
```

- `examaware.targets.main` 主进程入口必填；`renderer` 可选，用于挂载 UI。
- `services.provide` 声明可被宿主/其他插件使用的服务；`inject` 声明依赖。
- `config` 是插件自定义配置，宿主会注入到上下文中。
- `engines.desktop` / `engines.sdk` 为兼容性声明：宿主在加载前会校验版本，不满足时标记“incompatible”。

## 主进程入口：注册服务 + 托管任务

模板中的主进程入口展示了如何注册服务、暴露给宿主，并启动定时任务：

```ts
import { defineExamAwarePlugin } from '@dsz-examaware/plugin-sdk';
import type { HostedService } from '@dsz-examaware/plugin-sdk';

interface HelloMessage {
  text: string;
  timestamp: number;
}

class HeartbeatService implements HostedService {
  constructor(private readonly message: HelloMessage) {}

  private interval?: ReturnType<typeof setInterval>;

  async start() {
    this.interval = setInterval(() => {
      console.info('[examaware-plugin-template]', this.message.text, new Date().toISOString());
    }, 10_000);
  }

  async stop() {
    if (this.interval) clearInterval(this.interval);
  }
}

export default defineExamAwarePlugin((builder) => {
  builder.configureServices((context, services) => {
    services.addSingleton('hello.message', () => ({
      text: context.ctx.config?.message ?? 'Hello from ExamAware Demo Plugin',
      timestamp: Date.now()
    }));

    services.addSingleton(HeartbeatService, (sp) => new HeartbeatService(sp.get('hello.message')));
    services.tryAddSingleton('heartbeat.service', (sp) => sp.get(HeartbeatService));
    context.ctx.logger.info(
      '[examaware-plugin-template] registered HeartbeatService/heartbeat.service'
    );
  });

  builder.exposeHostService('hello.message', { token: 'hello.message' });
  builder.addHostedService('heartbeat.service');

  builder.use(async ({ ctx }, next) => {
    ctx.logger.info('Plugin boot sequence started');
    await next();
    ctx.logger.info('Plugin boot sequence completed');
  });

  builder.configure((host, app) => {
    host.lifetime.onStarted(() => {
      app.ctx.logger.info('Host lifetime onStarted hook invoked');
    });
  });
});
```

要点：

- `addSingleton` 注册实例，`exposeHostService` 将服务暴露给宿主/其他插件。
- `addHostedService` 声明宿主会在生命周期内调用的后台任务（实现 `HostedService`）。
- 中间件 `builder.use` 可包裹插件启动流程，便于打点。

## 渲染入口

模板中的模板渲染入口会在桌面端设置页注册一个面板：

```ts
import { defineComponent, h } from 'vue';
import type { PluginRuntimeContext } from '@dsz-examaware/plugin-sdk';
import PluginSettingsPage from './components/PluginSettingsPage.vue';

const SETTINGS_PAGE_ID = 'examaware-plugin-template-settings';

export default async function setupRenderer(ctx: PluginRuntimeContext) {
  if (ctx.app !== 'renderer') return;
  const desktopApi = ctx.desktopApi as any;
  const settingsUi = desktopApi?.ui?.settings;
  if (!settingsUi) {
    ctx.logger.warn('Desktop API does not expose settings UI in this build.');
    return;
  }

  const SettingsEntry = defineComponent({
    name: 'ExamAwarePluginSettingsEntry',
    setup() {
      return () => h(PluginSettingsPage, { ctx });
    }
  });

  const handle = await settingsUi.registerPage({
    id: SETTINGS_PAGE_ID,
    label: 'Plugin Settings',
    icon: 'extension',
    order: 50,
    component: () => Promise.resolve(SettingsEntry)
  });

  if (handle) {
    ctx.effect(() => () => handle.dispose());
  }
}
```

要点：

- 通过 `desktopApi.ui.settings.registerPage` 注册面板，返回的 `handle` 在卸载时调用 `dispose` 清理。
- `ctx.effect` 适合绑定清理逻辑，宿主重载/卸载时会自动执行。

其他可用接口可参考 ExamAware Desktop 源码。

## 生命周期速查

- 加载：宿主按依赖拓扑加载，执行主进程入口；若有渲染入口，随后注入到 renderer。
- 重载：触发卸载（运行 `effect` 清理、停止 `HostedService`）后重新执行入口。
- 卸载：先释放依赖 effect，再停止本插件注册的托管服务。

## 服务与依赖

- 在 manifest 的 `services.provide` 列出对外服务名；`services.inject` 列出需要的外部服务，缺失会阻塞加载。
- 服务命名建议带命名空间（如 `examaware.core.*`），避免冲突。

## 配置使用示例

模板主进程通过 `context.ctx.config?.message` 读取配置，并提供默认值。在宿主侧更新配置后重载插件即可生效。

## 日志与排查

- 使用 `ctx.logger` / `context.ctx.logger` 在关键步骤记录：服务注册、配置读取、生命周期钩子进入/退出。
- 遇到缓存或热重载问题，可检查宿主日志中插件 load/reload 的顺序与服务名。
