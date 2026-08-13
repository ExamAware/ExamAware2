# 内置 Deep Link（examaware://）清单与参数

ExamAware 支持用 `examaware://` 自定义协议从外部唤起应用：打开设置、打开考试编辑器、直接开始播放。适合脚本、控制端、浏览器书签或命令行调用。

## 1. 工作原理

一条 deeplink 长这样：

```
examaware://<host><path>?<参数>
```

| 部分       | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| `scheme`   | 固定 `examaware`                                             |
| `host`     | 路由名（`settings` / `editor` / `player`，匹配时忽略大小写） |
| `pathname` | 可选路径（如 `/plugins`），部分路由兜底用                    |
| `query`    | 查询参数，**全部是字符串**                                   |

一条 URL 到达后的处理链路：

1. **中间件**（洋葱模型，按注册顺序执行）：内置中间件对**每条** deeplink 做两件事——唤起并聚焦主窗口、把完整 payload 广播给所有窗口（`deeplink:open` 事件）。渲染层可用 `window.api.deepLink.onOpened()` 订阅，插件用 `ctx.api.deepLinks.onOpened()` 订阅（需要 `events.subscribe` 权限）。
2. **全局监听器**：`onOpened` 之类注册的监听器每条 URL 都会收到，不管 host 是什么。
3. **路由匹配**：按 host 找精确路由，再叠加无 host 的"通配路由"（响应任意 host）；路由还可以绑 `path`，只有 host 和 path 都匹配才触发。匹配是单向的——一个 URL 只触发命中的路由，不再广播给所有路由。

任何 handler 返回真值都会把这条 URL 标记为"已处理"（`handled`）。内置中间件也会标记，所以正常路径下不会走到兜底逻辑。

## 2. 内置路由清单

### `examaware://settings` —— 打开设置窗口

| 项       | 值                                                                       |
| -------- | ------------------------------------------------------------------------ |
| 路由     | host 为 `settings`                                                       |
| 参数     | `page` 或 `tab`：设置页 id；也可用路径形式 `examaware://settings/<页id>` |
| 不传参数 | 打开设置并停靠到第一个页面                                               |
| 复用行为 | 设置窗口已打开则复用并导航到指定页；未打开则新建                         |

内置设置页 id：

| id              | 页面       |
| --------------- | ---------- |
| `basic`         | 基本       |
| `appearance`    | 外观       |
| `control`       | 学校集控   |
| `player`        | 播放器     |
| `time`          | 时间同步   |
| `http-api`      | HTTP API   |
| `cast`          | 共享与投送 |
| `logging`       | 日志       |
| `plugin-source` | 插件源     |
| `plugins`       | 插件       |
| `about`         | 关于       |

插件注册的设置页也能用同样的方式跳转（页面 id 见插件文档）。

示例：

```
examaware://settings/plugins
examaware://settings?page=time
examaware://settings?tab=http-api
```

### `examaware://editor` —— 打开考试编辑器

| 项       | 值                                                                                         |
| -------- | ------------------------------------------------------------------------------------------ |
| 路由     | host 为 `editor`                                                                           |
| 参数     | `file`：考试配置文件的**绝对路径**（URL 编码）；`data`：base64 编码的考试配置 JSON，二选一 |
| 无参数   | 忽略（不处理）                                                                             |
| 复用行为 | 编辑器窗口已打开时**只唤起旧窗口，新的 `file` / `data` 不会生效**；未打开则新建并加载      |

示例：

```
examaware://editor?file=%2FUsers%2Fme%2Fexam.ea2
examaware://editor?data=eyJ2ZXJzaW9uIjoiMS4wIiw...（base64）
```

### `examaware://player` —— 直接开始播放

| 项     | 值                                                                                              |
| ------ | ----------------------------------------------------------------------------------------------- |
| 路由   | host 为 `player`                                                                                |
| 参数   | `file`：配置文件绝对路径；`data`：base64 编码的考试配置 JSON，二选一                            |
| 无目标 | 忽略                                                                                            |
| 行为   | 直接进入统一播放链路（解析 → 校验 → 播放窗口确认 → 会话管理），跟应用内点"开始播放"走同一套逻辑 |

示例：

```
examaware://player?file=%2FUsers%2Fme%2Fexam.ea2
examaware://player?data=<base64>
```

## 3. `data` 参数：base64 编码的配置

`file` 和 `data` 是同一件事的两种给法。`data` 的规则：

- 内容是**考试配置 JSON**（`.ea2` / `.json` 里的内容）的 base64 编码；
- 应用解码后写成 UTF-8 文本，落到系统临时目录再加载，不改动原文件；
- base64 用标准字符集，URL 里的 `+`、`/`、`=` 记得转义（用 `encodeURIComponent` 或 URL-safe 编码）。

命令行生成示例：

```bash
base64 -i exam.json        # macOS / Linux
certutil -encode exam.json # Windows，去掉 PEM 头尾后取中间段
```

## 4. 触发方式

应用是单实例的：没在运行就由系统拉起，已在运行则复用现有实例（走 `second-instance` 入队），所以不用担心重复启动。

| 平台 / 场景      | 方式                                                                 |
| ---------------- | -------------------------------------------------------------------- |
| macOS            | `open "examaware://settings/plugins"`                                |
| Windows          | `start "" "examaware://settings/plugins"`，或浏览器地址栏直接输入    |
| Linux            | `xdg-open "examaware://settings/plugins"`                            |
| 命令行传参       | 启动时把 URL 当参数：`ExamAware "examaware://player?file=..."`       |
| 应用内（渲染层） | `window.api.deepLink.dispatch(url)`                                  |
| 插件             | `ctx.api.deepLinks.dispatch(url)`（需要 `deep-links.dispatch` 权限） |

macOS 上双击 `.ea2` / `.json` 文件也能直接唤起应用打开，走的是文件关联，不是 deeplink。

## 5. 调试环境变量

开发调试时不用凑 URL，直接给环境变量喂 base64 配置，应用启动即执行：

| 变量                        | 效果                                          |
| --------------------------- | --------------------------------------------- |
| `EXAMAWARE_DEEPLINK_PLAYER` | base64 的考试配置 JSON → 启动后立即开始播放   |
| `EXAMAWARE_DEEPLINK_EDITOR` | base64 的考试配置 JSON → 启动后立即打开编辑器 |

示例：

```bash
EXAMAWARE_DEEPLINK_PLAYER=$(base64 -i exam.json) pnpm dev
```

## 6. 插件扩展 deeplink

插件除了用 `dispatch` / `onOpened` 收发，还能在 main 入口**注册自己的路由和中间件**（需要 `deep-links.register` 权限，详细见《插件开发接口指南》的 `deepLinks` 章节）：

- `register({ host, path }, handler)`：注册 host 下的特定路径；`path` 支持精确字符串（自动补前导 `/`）、正则或函数
- `registerHost(host, handler)`：接管整个 host（如 `examaware://my-plugin/...`）
- `register('my-plugin/open', handler)`：字符串简写，等价于 `{ host: 'my-plugin', path: '/open' }`
- `use(middleware)`：注册中间件，可在路由执行前后插手，或自行标记 `context.handled`

插件路由与内置路由平级：谁先注册谁先执行，同样只有 host / path 匹配才触发。

## 7. 注意事项

- 查询参数**都是字符串**，别指望数字/布尔类型；
- `file` 是绝对路径，必须 URL 编码（空格、`#`、中文等字符会出问题）；
- `host` 匹配**不区分大小写**（`examaware://SETTINGS` 也能打开设置）；
- `path` 匹配对字符串是**精确匹配**且要带前导 `/`（`/plugins` 匹配 `examaware://settings/plugins`，不匹配 `examaware://settings/plugins/`）；
- 未知 host（如 `examaware://foo`）不会触发任何内置路由，但通用动作（唤起主窗口 + 广播）依然执行；
- 内置路由在 `packages/desktop/src/main/deepLink/` 下，用 `@DeepLinkHost(host, name)` / `@DeepLinkRoute(host, path)` 装饰器注册，全局动作用 `@UseDeepLinkMiddleware()` 注册中间件。
