# 快速开始

## 准备好工具

- Node.js 22+
- pnpm latest
- Git

## 拉起一个插件

直接拷贝模板文件夹的模板即可。SDK 内置的那个 GPT 写的模板有问题。

## package.json 里最关键的几行

```json
{
  "name": "@examaware-plugins/my-plugin",
  "main": "dist/main/index.js",
  "examaware": {
    "displayName": "My Plugin",
    "description": "自定义考试扩展",
    "targets": {
      "main": "src/main.ts",
      "renderer": "src/renderer.ts"
    },
    "services": {
      "provide": ["my-service"],
      "inject": ["deeplink"]
    },
    "enabled": true
  }
}
```

## 开发节奏

1. 编译或 watch：`pnpm dev`（或 `pnpm build`）。

2. 在 ExamAware 2 设置页点“解压缩插件”，选你的输出目录（含 `package.json`）。

3. 看日志、改代码、重载。主进程看宿主控制台，渲染入口用 DevTools。

## 常用脚本

- `pnpm build`：产出 main/renderer。
- `pnpm lint`：别让 ESLint 忍不住发火。
- `pnpm test`：如果你写了测试，就让它们常跑。

下一篇：把插件打成 `.ea2x`，分发
