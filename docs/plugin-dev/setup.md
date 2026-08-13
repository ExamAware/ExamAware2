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

### 方式 A：拷贝仓库里的示例插件（推荐）

现成的 V2 示例在 `packages/desktop/plugins/examaware-plugin-example`（main + renderer 双入口、设置页、权限声明都齐全）。整个拷走当起点：

```bash
cp -r packages/desktop/plugins/examaware-plugin-example ~/dev/my-plugin
cd ~/dev/my-plugin
```

然后改四样东西：

- `package.json` 的 `name`（换成你自己的包名）
- `examaware.displayName` 和 `description`
- `examaware.settings.namespace`（默认跟包名走）
- `@dsz-examaware/plugin-sdk` 的版本：示例里写的是 `workspace:*`（只能在仓库内用），拷出仓库后要改成正式版本，例如 `"@dsz-examaware/plugin-sdk": "^1.5.0"`，然后重新 `pnpm install`。

### 方式 B：用 CLI 生成

```bash
pnpm dlx create-examaware-plugin my-plugin
```

> 提醒：SDK 内置模板历史上出过跑不起来的问题，CLI 生成的项目如果加载报错，直接走方式 A 拷贝示例。

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

- 产物尽量**自包含**：第三方依赖（包括 plugin-sdk、vue）直接打进包里，只把 electron 和 Node 内置模块 external 掉。这样插件不依赖应用里装了什么。
- main 入口：`formats: ['cjs']`、`exports: 'default'`；renderer 入口：`formats: ['es']`、单文件 `index.mjs`（`inlineDynamicImports`）。

## 5. 在应用里加载：没有 HMR，但有一键重载

1. 插件项目里跑 `pnpm dev`（vite 监听，改代码自动重建 dist）。
2. 打开 ExamAware → 设置 → 插件 → 点 **"解压缩插件"**，选择你的插件项目目录（含 `package.json` 的那一层）。
3. 改代码 → vite 自动重建完 → 回到应用，点插件列表里的 **"重载"** 按钮（刷新图标，一键重载）。
4. 应用会先卸载旧实例（执行清理函数、释放资源、撤销服务），清掉模块缓存，再重新加载最新产物。

## 6. 常用命令速查

| 命令             | 干什么                                |
| ---------------- | ------------------------------------- |
| `pnpm install`   | 装依赖                                |
| `pnpm dev`       | 监听模式构建 main + renderer          |
| `pnpm build`     | 一次性构建                            |
| `pnpm pack-ea2x` | 构建 + 打 .ea2x 包（模板里叫 `pack`） |
| `pnpm lint`      | 类型检查（vue-tsc --noEmit）          |

下一篇：[打包与分发](./packaging)，把插件打成 `.ea2x` 给别的机器装。
