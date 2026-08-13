# 插件 API 概览（V2）

插件入口必须使用 API V2 的 `defineMainPlugin` / `defineRendererPlugin`。宿主能力统一从 `ctx.api` 获取；不要直接访问 `window.api`、拼接 IPC 通道或导入 Electron。

完整领域接口见 [插件开发接口指南](../插件开发接口指南)。可运行代码见 `templates/examaware-plugin-template` 和 `packages/plugin-template/template`。

## manifest 示例

```json
{
  "name": "examaware-plugin-template",
  "version": "0.3.0",
  "main": "./dist/main/index.cjs",
  "module": "./dist/renderer/index.mjs",
  "examaware": {
    "apiVersion": 2,
    "displayName": "ExamAware Demo Plugin",
    "description": "演示类型化服务、RPC 与设置页",
    "targets": {
      "main": "./dist/main/index.cjs",
      "renderer": "./dist/renderer/index.mjs"
    },
    "permissions": ["services.provide", "services.consume", "ui.contribute"],
    "activation": {
      "rendererWindows": ["settings"]
    },
    "services": {
      "provide": ["examaware-plugin-template.hello-message"],
      "inject": []
    },
    "settings": {
      "namespace": "examaware-plugin-template",
      "schema": "./schema.json"
    }
  }
}
```

- `apiVersion: 2` 必填；V2 入口必须分别由 `defineMainPlugin`、`defineRendererPlugin` 创建。
- `targets` 指向构建产物，不是 `src` 源文件。
- `permissions` 声明插件实际使用的受控能力。未知权限会导致 V2 manifest 加载失败。
- `activation.rendererWindows` 限制 renderer 入口激活窗口；不写时默认只有 `main`。
- `services.provide` / `services.inject` 参与插件依赖排序；服务 ID 应带插件命名空间。
- 插件设置通过 `settings.namespace` 和可选的 JSON Schema 管理，不再使用旧版 `examaware.config`。

## 共享类型与令牌

跨进程服务必须在 main 和 renderer 共享同一个类型化令牌，不要散落裸字符串：

```ts
import { createPluginTokens } from '@dsz-examaware/plugin-sdk';

const tokens = createPluginTokens('examaware-plugin-template');

export interface DemoSettings {
  demo?: {
    clicks?: number;
    message?: string;
  };
}

export interface HelloMessage {
  text: string;
  timestamp: number;
}

export interface BackService {
  getSomeLocalData(): Promise<{ message: string; at: string }>;
}

export const helloMessageService = tokens.service<HelloMessage>('hello-message');
export const backService = tokens.rpc<BackService>('back-service');
```

`tokens.service()` 用于同进程对象服务；`tokens.rpc()` 用于 main 和 renderer 之间的异步 RPC。manifest 中的 `services.provide` 应与公开 service token 的完整 ID 一致。

## 主进程入口

```ts
import { defineMainPlugin } from '@dsz-examaware/plugin-sdk';
import {
  backService,
  helloMessageService,
  type DemoSettings,
  type HelloMessage
} from '../shared/contracts';

export default defineMainPlugin<DemoSettings>({
  activate(ctx) {
    const message: HelloMessage = {
      text: ctx.initialSettings.demo?.message ?? 'Hello from ExamAware Demo Plugin',
      timestamp: Date.now()
    };

    ctx.api.services.provide(helloMessageService, message);
    ctx.api.services.exposeRpc(backService, {
      async getSomeLocalData() {
        return { message: message.text, at: new Date().toISOString() };
      }
    });

    const heartbeat = setInterval(() => {
      ctx.logger.info(message.text, new Date().toISOString());
    }, 10_000);
    ctx.scope.defer(() => clearInterval(heartbeat));
  }
});
```

要点：

- `ctx.initialSettings` 是激活时的只读设置快照；运行期读写使用 `ctx.api.settings`。
- `ctx.api.services.provide()` 和 `exposeRpc()` 返回的资源会进入插件作用域，卸载时释放。
- 定时器、监听器和其他自建资源通过 `ctx.scope.defer()` 或 `ctx.scope.add()` 注册清理。
- 所有注册和资源清理都使用 V2 生命周期、`ctx.api` 与 `ctx.scope`；不要混用旧入口模型。

## 渲染进程入口

```ts
import { defineComponent, h } from 'vue';
import { defineRendererPlugin } from '@dsz-examaware/plugin-sdk';
import PluginSettingsPage from './components/PluginSettingsPage.vue';
import { backService, type DemoSettings } from '../shared/contracts';

export default defineRendererPlugin<DemoSettings>({
  async activate(ctx) {
    const data = await ctx.api.services.rpc(backService).getSomeLocalData();
    ctx.logger.info('Main-process RPC is ready', data.message, data.at);

    const SettingsEntry = defineComponent({
      setup: () => () => h(PluginSettingsPage, { ctx })
    });

    await ctx.api.ui.settings.registerPage({
      id: 'examaware-plugin-template-settings',
      label: 'Plugin Settings',
      icon: 'extension',
      order: 50,
      component: () => Promise.resolve(SettingsEntry)
    });
  }
});
```

- Renderer UI 统一从 `ctx.api.ui` 注册，受公开类型和 manifest 权限约束。
- `ctx.api.ui.settings.registerPage()` 需要 `ui.contribute` 权限，返回资源在卸载时自动清理。
- `ctx.window.kind` / `ctx.window.route` 可用于同一 renderer 入口里的窗口分流。

## 设置页组件

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { RendererPluginContext } from '@dsz-examaware/plugin-sdk';
import type { DemoSettings } from '../../shared/contracts';

const props = defineProps<{ ctx: RendererPluginContext<DemoSettings> }>();
const settings = props.ctx.api.settings.get();
const clicks = ref(settings.demo?.clicks ?? 0);

const increment = async () => {
  clicks.value += 1;
  await props.ctx.api.settings.patch({ demo: { clicks: clicks.value } });
};
</script>
```

`patch()` 是浅合并；更新嵌套对象时要传入完整的新嵌套值。需要响应其他窗口或进程修改时，使用 `ctx.api.settings.onChanged()` 并把返回的 `Disposable` 加入 `ctx.scope`。

## 生命周期

V2 生命周期顺序：

1. `onLoad(ctx)`：可选，激活前准备。
2. `activate(ctx)`：必填，注册能力并启动插件。
3. `onReady(ctx)`：可选，激活完成后执行。
4. 卸载时依次调用 `deactivate(ctx)`、`activate` 返回的清理资源、`ctx.scope.dispose()`、`onUnload(ctx)`。
5. 生命周期异常会转换为 `PluginApiError`，并交给可选的 `onError(error, ctx)`。

所有资源必须可释放。插件重载和卸载都依赖这条约束，不能留下定时器、监听器、窗口或全局修改。

## 权限与排查

- 权限字符串写在 `examaware.permissions`；代码分支建议使用 `PluginPermissions` 常量和 `ctx.permissions.has()`。
- 缺少权限时 API 会抛出 `PluginApiError`，不要用 `any` 绕过类型检查。
- 使用 `ctx.logger.debug/info/warn/error`；日志自动带插件标识。
- manifest 修改后重新安装插件；只修改构建产物时，在开发目录内可点击“重载”。
- 类型、方法参数和权限以 [`packages/plugin-sdk/src/api`](../../packages/plugin-sdk/src/api) 的公开定义为准。
