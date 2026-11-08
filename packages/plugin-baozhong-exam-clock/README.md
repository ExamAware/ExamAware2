# 宝中考试时钟主题

ExamAware Player 的 API V2 主题插件，移植 [ExamClock](https://github.com/L33Z22L11/ExamClock) 的主界面、按键位置、背景轮换菜单和字体样式。

## 功能

- 播放器主题：科目、时间范围、时钟、倒计时/当前活动和进度条。
- 顶部考试下拉、背景下拉、滤镜、主题菜单和全屏按钮。
- 行动栏由主题接管；主题菜单可切换主题或退出放映。
- 页脚仅保留原项目地址。
- 内置 ExamClock 背景图；插件设置页可管理背景、添加和删除自定义图片。

## 背景源

内置背景来自 ExamClock、一卷图库，按原项目的 CC BY-NC-SA 4.0 方式使用。设置页会列出作者和批次；自定义图片保存在插件设置中。

## 开发

```bash
pnpm install
pnpm --filter examaware-plugin-baozhong-exam-clock build
pnpm --filter examaware-plugin-baozhong-exam-clock run pack
```

`pack` 产物位于 `dist/examaware-plugin-baozhong-exam-clock-0.1.0.ea2x`，在 ExamAware 插件设置中安装。

主题在播放器窗口注册，背景设置页在设置窗口注册；插件 manifest 已声明 `activation.rendererWindows: ["player", "settings"]`。
