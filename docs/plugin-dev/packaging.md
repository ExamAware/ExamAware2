# 打包与分发

ExamAware 插件可打包为 `.ea2x`，便于在目标设备快速安装。

## 打包步骤

```bash
# 确保产物已构建
pnpm build

# 使用 SDK 提供的打包脚本
pnpm dlx @dsz-examaware/plugin-sdk pack-examaware-plugin ./dist my-plugin.ea2x
```

- 第一个参数：包含 `package.json` 的插件目录（请确保有构建产物）。
- 第二个参数：输出的包名，默认放在当前工作目录。

## 包内结构

```
my-plugin.ea2x
└── package.json
└── dist/
    ├─ main/...
    └─ renderer/...
```

## 分发与安装

- 在设置页选择“插件包 (.ea2x)”安装。
- 软件会校验依赖并解压到用户插件目录，随后按依赖顺序加载。

## 版本与兼容性

- 遵循语义化版本，记录破坏性变更。
- 如果依赖宿主提供的服务，请在 README 中标注最低宿主版本。
