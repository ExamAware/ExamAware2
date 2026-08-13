# 环境准备与开发工作流

这篇讲怎么把插件开发环境搭起来，以及"改代码 → 在应用里看到效果"的日常循环。

## 1. 装 Node.js

仓库要求 **Node.js >= 22.22.1**（根目录 `package.json` 的 `engines` 写死了）。推荐用版本管理器装，以后切版本方便：

```bash
# 方式一：nvm
nvm install 22
nvm use 22
```

装完验证：

```bash
node -v   # 输出 v22.x.x 或更高
```

## 2. 装 pnpm

仓库固定 **pnpm 10.18.2**（根 `package.json` 的 `packageManager` 字段）。两种装法：

```bash
# 方式一：corepack（Node 自带，推荐）
corepack enable
corepack prepare pnpm@10.18.2 --activate

# 方式二：npm 全局装
npm i -g pnpm@10.18.2
```

验证：

```bash
pnpm -v   # 输出 10.x
```

> 国内网络不用额外折腾：仓库根目录的 `.npmrc` 已经配好 electron 的镜像（npmmirror）。卡在 electron 下载时多半是网络问题。

## 3. 初始化一个插件项目

### 方式 A：用 CLI 生成（推荐）

CLI 使用当前 API V2 模板，生成 main + renderer 双入口、权限声明、类型化服务、RPC 和设置页：

```bash
pnpm dlx create-examaware-plugin my-plugin
cd my-plugin
```

生成后按需修改：

- `package.json` 的 `name`、`examaware.displayName` 和 `description`
- `examaware.settings.namespace` 与 `src/shared/contracts.ts` 的令牌命名空间
- `examaware.permissions` 和 `activation.rendererWindows`
- `@dsz-examaware/plugin-sdk` 的版本

### 方式 B：拷贝仓库里的示例插件

仓库内开发也可以复制 `templates/examaware-plugin-template` 或 `packages/desktop/plugins/examaware-plugin-example`。如果复制使用 `workspace:*` 的示例到仓库外，把 SDK 依赖改成正式版本，例如 `"@dsz-examaware/plugin-sdk": "^1.5.0"`。

装依赖：

```bash
pnpm install
```

### manifest 里最关键的几行

```json
{
  "name": "my-plugin",
  "main": "./dist/main/index.cjs",
  "module": "./dist/renderer/index.mjs",
  "examaware": {
    "apiVersion": 2,
    "displayName": "我的插件",
    "targets": {
      "main": "./dist/main/index.cjs",
      "renderer": "./dist/renderer/index.mjs"
    },
    "permissions": ["ui.contribute"],
    "activation": { "rendererWindows": ["main"] }
  }
}
```

注意：`targets` 指向的是**构建产物**（`dist/` 里的文件），不是源码。应用加载时读的就是这些文件。

## 4. vite 配置：一次构建，两个入口

插件不是跑在浏览器里的网页，而是被打成两个独立产物，由应用的主进程和渲染进程分别加载：

- **main 入口** → `dist/main/index.cjs`（CommonJS，Node 环境）
- **renderer 入口** → `dist/renderer/index.mjs`（ESM，浏览器环境）

所以模板里有**两个** vite 配置：`vite.config.ts` 管 renderer、`vite.main.config.ts` 管 main。`pnpm dev` 用 npm-run-all 把它们并行跑起来：

```bash
pnpm dev         # = vite build --watch × 2（监听模式，改代码自动重建）
pnpm build       # 一次性构建
pnpm pack-ea2x   # 构建 + 打成 .ea2x 安装包（模板里叫 pnpm pack）
```

两个配置的关键点：

- 产物尽量**自包含**：第三方依赖（包括 plugin-sdk、vue）直接打进包里，只把 electron 和 Node 内置模块 external 掉。这样插件不依赖应用里装了什么。
- main 入口：`formats: ['cjs']`、`exports: 'default'`；renderer 入口：`formats: ['es']`、单文件 `index.mjs`（`inlineDynamicImports`）。

## 5. 在应用里加载：没有 HMR，但有一键重载

**先说重点：应用内加载的插件不支持 HMR。** 应用不会监听你的源文件；vite 的 `--watch` 只是在本地把 `dist/` 重新生成一遍，应用里跑的还是老代码。想看到新代码，必须手动触发一次重载。

日常开发循环：

1. 插件项目里跑 `pnpm dev`（vite 监听，改代码自动重建 dist）。
2. 打开 ExamAware → 设置 → 插件 → 点 **"解压缩插件"**，选择你的插件项目目录（含 `package.json` 的那一层）。
3. 改代码 → vite 自动重建完 → 回到应用，点插件列表里的 **"重载"** 按钮（刷新图标，一键重载）。
4. 应用会先卸载旧实例（执行清理函数、释放资源、撤销服务），清掉模块缓存，再重新加载最新产物。

效果等同"改完 → 手动刷新"，只是要自己点一下。

### 两个常见坑

- **"解压缩插件"是复制 + 加载**：它会把你的项目目录**复制**到应用的插件目录（安装成功后应用会提示"已安装至 <路径>"，直接告诉你复制到哪了）再加载。每次点都会先删旧副本再复制，所以它既是最初的"安装"，也是改完代码后最保险的"刷新"——重新选一次同一目录，副本一定是新的。改了 `manifest`（`package.json` 里的 `examaware` 字段）、依赖或文件结构之后，建议直接重新点它。
- **在仓库内开发最顺**：把插件放进 `packages/desktop/plugins/<name>`，dev 模式下应用直接扫描这个目录（**不复制**），vite 重建后点"重载"立即生效。仓库外的独立插件项目才需要靠"解压缩插件"的复制来同步。

### 看日志

- 主进程逻辑：应用里的"日志"页面，或宿主控制台（dev 模式）。
- 渲染入口：主窗口 / 插件窗口开 DevTools 看 console。

## 6. 常用命令速查

| 命令             | 干什么                                |
| ---------------- | ------------------------------------- |
| `pnpm install`   | 装依赖                                |
| `pnpm dev`       | 监听模式构建 main + renderer          |
| `pnpm build`     | 一次性构建                            |
| `pnpm pack-ea2x` | 构建 + 打 .ea2x 包（模板里叫 `pack`） |
| `pnpm lint`      | 类型检查（vue-tsc --noEmit）          |

下一篇：[打包与分发](./packaging)，把插件打成 `.ea2x` 给别的机器装。
