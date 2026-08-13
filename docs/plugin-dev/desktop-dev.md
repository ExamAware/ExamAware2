# Desktop 主程序开发指南

这篇给想改桌面端主程序（而不是写插件）的开发者：先讲技术栈和目录分布，再讲怎么跑起来、有哪些代码规矩。

## 1. 技术栈

| 层        | 选型                                                                       |
| --------- | -------------------------------------------------------------------------- |
| 桌面框架  | Electron，用 electron-vite 组织 main / preload / renderer 三端构建         |
| 渲染层    | Vue 3 + TypeScript + Pinia                                                 |
| UI 组件库 | tdesign-vue-next（样式用 scoped + 主题变量 `var(--td-*)`，避免硬编码颜色） |
| 测试      | vitest（根目录 `pnpm test`）                                               |
| 包管理    | pnpm workspace（根目录 monorepo）                                          |

## 2. 目录分布：先认识 src 下这四个目录

`packages/desktop/src/` 按进程分成四块：

```
src/
├── main/      # 主进程：Electron 原生能力、服务、生命周期
├── preload/   # 预加载脚本：唯一的 IPC 客户端，暴露成 window.api.*
├── renderer/  # 渲染进程：Vue 应用（界面 + 前端逻辑 + 渲染侧插件宿主）
└── shared/    # 三个进程共享：IPC 频道定义、跨进程类型、插件 API
```

一句话分工：**main 干重活，preload 是唯一的桥，renderer 只调 `window.api`，shared 定协议**。

### src/main —— 主进程，按领域分目录

主进程按"领域优先、技术角色其次"组织。`index.ts` 只是可执行入口（负责装配各服务），业务逻辑不进根目录：

| 目录             | 干什么                                                                      |
| ---------------- | --------------------------------------------------------------------------- |
| `cast/`          | 局域网投送服务 + 对应 IPC 控制器                                            |
| `config/`        | 应用配置持久化 + 内存里的共享考试配置                                       |
| `control/`       | 集控中心接入：设备注册、加密凭据、HTTP API、WSS 长连接                      |
| `deepLink/`      | 深链（`examaware://`）解析、分发、路由                                      |
| `fileSystem/`    | 暴露给 preload / IPC 层的复用文件系统 API                                   |
| `httpApi/`       | 内置 HTTP API 服务、路由类型、swagger、IPC 控制器                           |
| `ipc/`           | IPC 注册原语 + 按领域分组的函数式 handler（`registerIpcHandlers` 统一注册） |
| `logging/`       | logger 实现、日志存储、控制台捕获、日志 IPC 控制器                          |
| `network/`       | 传输无关的地址/端口工具 + 带 SSRF 防护的请求封装（`secureFetch`）           |
| `player/`        | 播放会话服务、集控会话守卫                                                  |
| `plugins/`       | 插件发现、加载、宿主（`PluginHost`）、偏好、安装                            |
| `reminderSound/` | 提醒铃声包存储 + IPC / 协议集成                                             |
| `runtime/`       | 进程生命周期、共享上下文（`mainContext`）、disposal、关闭协调、下载管理     |
| `timeSync/`      | NTP 客户端、时间配置、时间服务、IPC handlers                                |
| `windows/`       | Electron 窗口创建/协调、标题栏集成、托盘 UI                                 |
| `assets/`        | 主进程静态资源                                                              |

命名约定（主进程 `README.md` 里有完整版）：`*Service` = 长生命周期能力，`*Store` = 状态所有权，`*Controller` = 装饰器路由，`*Handlers` = 函数式注册，`*Manager` = 资源协调。文件名一律 `lowerCamelCase`，复数目录名只用于集合（`plugins`、`windows`、`assets`）。别在根目录造 `utils.ts` / `service.ts` 这类大杂烩。

### src/preload —— 唯一的桥

preload 是**唯一**的固定 IPC 客户端，把主进程能力暴露成领域化的 `DesktopBridge`——渲染层拿到的就是 `window.api.files`、`window.api.player`、`window.api.windows`、`window.api.plugins` 等。渲染层代码**不允许** import `src/main`，也不允许绕过桥去碰裸 IPC。

### src/renderer —— Vue 应用

```
src/renderer/src/
├── views/        # 页面级组件：PlayerView（播放）、EditorView（编辑器）、SettingsShell、
│                 # HomeView、CastWindow、PluginStoreWindow、LogsView、tray/、home/
├── components/   # 通用组件（窗口框架、设置面板、考试卡片、验证面板…）
├── composables/  # 组合式函数（useConfigLoader、useExamEditor、useTheme、usePages…）
├── stores/       # Pinia store（settingsStore、editorPluginStore…）
├── core/         # 无 UI 的纯逻辑：configLoader、文件操作、历史记录、主题、菜单、消息服务
├── services/     # 服务：playerLauncher、reminderSound
├── runtime/      # 桌面 API 桥（desktopApi）、渲染侧插件宿主（desktopPluginHost）、EAUI
├── router/       # 路由与路由表
├── app/          # 应用装配（createDesktopApp + modules）
├── adapters/     # 环境适配（ElectronTimeProvider 等）
├── utils/ types/ assets/
└── main.ts       # 渲染进程入口
```

### src/shared —— 跨进程契约

- `ipc/channels.ts`：**所有** IPC 频道字符串的唯一定义点。主进程、preload、renderer 都不许自己拼频道名。
- `types/`：跨进程类型（插件列表、注册表进度等）。
- `pluginApi/`、`pluginSource.ts`、`appInfo.ts`、`reminderSoundPack.ts`：插件 API 与共享常量。

## 3. 跑起来

首次安装依赖：

```bash
pnpm i
```

日常开发（桌面端）：

```bash
pnpm dev          # electron-vite dev：main / preload / renderer 三端开发模式
```

改了 `@dsz-examaware/core` / `player` / `rpc` 的代码时（它们是 workspace 依赖，需要先构建）：
先跑一次 `pnpm dev:prebuild` 构建出产物，再开一个终端跑 `pnpm dev:watch` 监听重建，桌面端就能吃到最新改动。

检查代码：

```bash
pnpm --filter @dsz-examaware/desktop type-check   # tsc + vue-tsc 双端类型检查
pnpm --filter @dsz-examaware/desktop lint         # eslint
pnpm test                                          # 全仓 vitest
```

## 4. 进程间通信的规矩

- 新增频道：先在 `src/shared/ipc/channels.ts` 定义端点；主进程用 `IpcRegistrar` 或 `@IpcHandle(ipcChannels.*)` 注册 handler，preload 里加到对应的 domain 分组。
- 主进程 → 渲染进程的事件用 `sendIpcEvent`。
- 渲染层一律走 `window.api.*`，不 import main、不碰裸 IPC。
- 插件的动态跨进程服务走 `@dsz-examaware/rpc`（JSON-RPC），和固定桌面 API 的 Electron invoke 是两条独立的路。

## 5. 内置插件目录

`packages/desktop/plugins/` 是应用内置/示例插件目录，dev 模式下被直接扫描加载（**不复制**）。`examaware-plugin-example` 是 V2 插件的现成参考。注意 `pnpm-workspace.yaml` 把 `packages/desktop/plugins/*` 也纳入了 workspace，可以单独 `pnpm --filter <plugin名> dev` 开发某个示例插件。

## 6. 构建与打包

```bash
pnpm build                # 只构建（electron-vite build）
pnpm desktop:build:mac    # 构建 + 打 macOS 包
pnpm desktop:build:win    # Windows 包（建议在真实 Windows CI 上验证）
pnpm desktop:build:linux  # Linux 包（另有 appimage / deb / snap 变体）
pnpm desktop:dist         # 当前平台默认打包
```

打包流程：`electron-vite build` → `prepare:packdeps`（把 workspace 依赖收进包里）+ `prepare:workspace-deps` → `verify:packdeps`（校验依赖闭包）→ electron-builder。electron-builder 配置在 `electron-builder.yml`。

## 7. 相关文档

- 主进程内部约定：`packages/desktop/src/main/README.md`
- 插件 API 全量：`docs/插件开发接口指南.md`
- 插件开发环境与工作流：[环境准备与开发工作流](./setup)
