# ExamAware Plugin SDK

API V2 是 ExamAware 插件的标准开发接口。main 与 renderer 使用同一套领域命名、权限模型、生命周期和强类型 token；固定桌面能力通过 `ctx.api` 使用，跨进程动态服务通过 `@dsz-examaware/rpc` 使用。

## 快速开始

```bash
pnpm dlx create-examaware-plugin examaware-plugin-demo
cd examaware-plugin-demo
pnpm install
pnpm build
pnpm pack
```

插件 manifest 必须显式声明 V2、入口、权限和 renderer 激活窗口：

```json
{
  "examaware": {
    "apiVersion": 2,
    "targets": {
      "main": "./dist/main/index.cjs",
      "renderer": "./dist/renderer/index.mjs"
    },
    "permissions": ["player.start", "files.read", "network.http", "ui.contribute"],
    "activation": {
      "rendererWindows": ["main", "plugin"]
    }
  }
}
```

V2 manifest 采用严格校验。未知权限、未知窗口类型、不支持的 API 版本和越出插件目录的入口路径都会在加载时直接报错。

## 生命周期

```ts
import { defineMainPlugin, defineRendererPlugin } from '@dsz-examaware/plugin-sdk';

export default defineMainPlugin({
  onLoad(ctx) {},
  activate(ctx) {
    ctx.scope.defer(() => stopBackgroundTask());
    return () => releaseActivationResource();
  },
  onReady(ctx) {},
  deactivate(ctx) {},
  onUnload(ctx) {},
  onError(error, ctx) {
    ctx.logger.error(error.message, error.details);
  }
});

export const rendererEntry = defineRendererPlugin({
  activate(ctx) {
    if (ctx.window.kind !== 'main') return;
    ctx.api.ui.home.register({
      id: 'open',
      label: '打开插件',
      icon: 'extension',
      action: () => ctx.api.windows.open({ id: 'workspace', route: 'workspace' })
    });
  }
});
```

激活顺序是 `onLoad -> activate -> onReady`。停用顺序是 `deactivate -> activate 返回的 disposable -> ctx.scope 反向释放 -> onUnload`。某个清理阶段失败不会跳过后续阶段，最终错误统一传给 `onError`。

注册 API 返回的资源会自动归属当前插件 scope。自行创建的计时器、订阅或第三方资源应使用 `ctx.scope.defer()` 或 `ctx.scope.add()` 管理。

## API 目录

main 与 renderer 共有以下领域：

| API                         | 用途                                                |
| --------------------------- | --------------------------------------------------- |
| `app`                       | 应用信息、自启动和退出                              |
| `player`                    | 配置预检、file/config/JSON/URL 放映、会话控制和事件 |
| `exams`                     | 解析、详细校验、规范化和序列化考试配置              |
| `files` / `dialogs`         | 文件选择、读写、状态和监听                          |
| `settings`                  | 当前插件的类型化配置及变更订阅                      |
| `windows`                   | 插件窗口和标准桌面窗口                              |
| `commands` / `events`       | 强类型进程内命令与事件                              |
| `services`                  | 同进程类型化服务和跨进程 RPC                        |
| `time` / `cast` / `network` | 校时、投送和受 SSRF 防护的网络请求                  |
| `http` / `deepLinks`        | HTTP 控制与 deep link                               |
| `logging` / `plugins`       | 日志和插件管理                                      |

renderer 额外提供 `ui.home/pages/settings/editor/player/menus` 贡献点。main 额外提供 `http.registerRoute()` 和 `deepLinks.register()`。

## 播放 API

所有入口最终进入同一条准备、详细校验、窗口 ACK 和会话状态链路：

```ts
const validation = ctx.api.exams.validate(candidate, {
  overlap: 'warning',
  allowEmptyExamInfos: false
});

if (!validation.valid) {
  for (const issue of validation.errors) {
    ctx.logger.error(`${issue.path}: ${issue.message}`);
  }
  return;
}

const fromFile = await ctx.api.player.startFromFile('/path/to/exam.ea2');
const fromConfig = await ctx.api.player.startFromConfig(validation.config!);
const fromJson = await ctx.api.player.startFromJson(json);
const fromUrl = await ctx.api.player.startFromUrl('https://example.com/exam.ea2');

await fromUrl.focus();
const replacement = await fromUrl.replaceSource({ kind: 'config', config: nextConfig });
await replacement.close();
```

file 源需要 `files.read`，URL 源需要 `network.http`，访问本机或私网还需要 `network.local`。URL 请求限制协议、重定向、响应大小和超时，并对每次 DNS/重定向目标重新做私网检查。

## 强类型协议

在 shared contracts 文件中只定义一次命名空间和 token。其余代码导入 token，不传裸服务名或方法名：

```ts
import { createPluginTokens } from '@dsz-examaware/plugin-sdk';

const tokens = createPluginTokens('examaware-plugin-demo');

export const refreshCommand = tokens.command<{ force: boolean }, number>('refresh');
export const configChanged = tokens.event<{ revision: number }>('config-changed');
export const localCache = tokens.service<{ revision: number }>('local-cache');

export interface BackService {
  load(id: string): Promise<{ value: string }>;
}
export const backService = tokens.rpc<BackService>('back-service');
```

```ts
// main
ctx.api.services.exposeRpc(backService, {
  async load(id) {
    return { value: id };
  }
});

// renderer，返回值自动 Promise 化，方法名和参数由 IDE 校验
const back = ctx.api.services.rpc(backService);
const result = await back.load('item-1');
```

`services.provide/use` 只用于同一进程内的对象服务。跨 main/renderer 边界必须使用 `services.exposeRpc/rpc`，函数对象不会通过 Electron structured clone 偷渡。

## 权限

权限在调用点执行，并由 API 模块声明自动预检。主要权限组包括：

- `player.*`, `files.*`, `windows.*`, `app.*`, `ui.*`
- `network.*`, `http.*`, `cast.*`, `time.*`, `deep-links.*`
- `logging.*`, `plugins.*`, `services.*`, `commands.*`, `events.*`

通过 `PluginPermissions` 常量引用权限；不要在 TypeScript 业务代码中重复权限字符串。`ctx.permissions.has()` 可用于可选能力分支，`ctx.permissions.require()` 用于显式前置检查。

## API 模块注册

桌面宿主使用 `definePluginApiModule()` 定义领域模块，并在创建插件 context 时通过显式模块目录自动装配。目录负责依赖排序、进程范围、权限预检、循环检测、字段冲突检测和反向释放。

这里刻意不使用 import-time decorator 或文件系统 glob 自动注册：显式目录可以静态审查、稳定打包和测试，同时仍然避免每个模块手写不同的初始化协议。

旧 `HostBuilder`、`defineExamAwarePlugin` 和字符串 RPC helper 仅为 API V1 兼容保留。新插件应使用 V2 生命周期、`ctx.api`、类型化 token 和 manifest 权限。
