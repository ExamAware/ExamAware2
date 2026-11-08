# @dsz-examaware/player

ExamAware 播放器组件与逻辑包，提供考试信息渲染、提醒服务、任务队列和可扩展工具栏。

## 安装

```bash
pnpm add @dsz-examaware/player
```

## 快速上手（组件模式）

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ExamPlayer } from '@dsz-examaware/player';
import type { ExamConfig } from '@dsz-examaware/core';

const examConfig = ref<ExamConfig | null>(/* your exam config */);
</script>

<template>
  <ExamPlayer :config="examConfig" room-number="01" />
</template>
```

## 快速上手（逻辑模式）

```ts
import { useExamPlayer } from '@dsz-examaware/player'
import type { ExamConfig } from '@dsz-examaware/core'

const config: ExamConfig | null = /* ... */
const player = useExamPlayer(config, { roomNumber: '01' })

player.state.value          // 播放器状态
player.formattedExamInfos   // 已格式化的考试信息
player.remainingTime        // 当前考试剩余时间（ms）
player.startTimeUpdates()   // 启动时间刷新
player.stopTimeUpdates()    // 停止时间刷新
player.switchToExam(1)      // 切换到指定索引的考试
```

## 主要导出

- 组件：`ExamPlayer`（主播放器）、`ActionButtonBar`、`InfoCardWithIcon` 等基础 UI。
- 逻辑与工具：`useExamPlayer`（核心逻辑）、`ExamDataProcessor`、`ExamTaskQueue`、`useReminderService`、`ReminderUtils`。
- 工具栏：`providePlayerToolbar`、`usePlayerToolbar`、`createPlayerToolbarRegistry`，支持在父/子组件中注册可释放的按钮。
- 主题：`defaultPlayerTheme`、`definePlayerTheme`、`PlayerThemeContext`、`PlayerThemeDefinition`。
- 类型：`PlayerConfig`、`PlayerState`、`TaskInfo`、`PlayerEventHandlers`、`UIDensity` 等。

## 播放器主题

`ExamPlayer` 把页面视觉完全交给一个**全屏主题组件**。数据加载、计时、考试切换、提醒和考场号弹窗默认由播放器壳层统一维护；操作栏和提醒层也可以通过主题的 `chrome` 声明接管。主题只负责读取上下文并决定页面结构与壳层呈现，因此可以做成左右分栏、上方时钟下方信息，甚至完全不同的车站大屏布局，而不需要重写一套播放器逻辑。

主题不是 CSS token 注入，也不是默认布局里的局部插槽。每个主题就是一个 Vue 页面组件，拥有完整的根节点和布局空间。

内置主题：

- `default`：左右分栏的经典布局。

火车站大屏主题的源码仍在 `src/themes/train-station`，但尚未完工，暂不注册到内置主题列表。

### 使用主题

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ExamPlayer, definePlayerTheme } from '@dsz-examaware/player';
import StationTheme from './StationTheme.vue';

const stationTheme = definePlayerTheme({
  id: 'station',
  name: '车站大屏',
  description: '上方时钟、下方考试信息',
  component: StationTheme
});

const themes = [stationTheme];
const themeId = ref('default');
</script>

<template>
  <ExamPlayer
    :exam-config="examConfig"
    :themes="themes"
    :theme-id="themeId"
    @theme-change="themeId = $event"
  />
</template>
```

`ExamPlayer` 内置 `default` 主题；`themes` 只做增量注册。用户可以在播放设置中切换主题；组件会发出 `themeChange` 和 `update:themeId`，宿主可自行持久化。若当前主题被移除，会自动回退到 `default`。

### 编写主题组件

```vue
<script setup lang="ts">
import type { PlayerThemeProps } from '@dsz-examaware/player';

const props = defineProps<PlayerThemeProps>();
</script>

<template>
  <main class="station-theme">
    <component :is="props.context.cards.clock" />

    <section class="station-summary">
      <h1>{{ props.context.examConfig.value?.examName }}</h1>
      <p>{{ props.context.currentExamName.value }}</p>
      <p>{{ props.context.currentExamTimeRange.value }}</p>
    </section>

    <component :is="props.context.cards.list" />
  </main>
</template>

<style scoped>
.station-theme {
  width: 100%;
  height: 100%;
  background: #07111f;
  color: #fff;
}
</style>
```

`context` 中的 ref 需要显式 `.value`。常用字段：

- 考试数据：`examConfig`、`currentExam`、`sortedExamInfos`、`formattedExamInfos`、`currentExamName`、`currentExamTimeRange`。
- 时间与状态：`currentTime`、`formattedCurrentTime`、`remainingTime`、`displayedRemainingTime`、`examStatus`。
- 播放状态：`roomNumber`、`timeSyncStatus`、`density`、`largeClockEnabled`、`largeClockScale`、`examInfoLargeFont`。
- 可复用卡片：`cards.clock`、`cards.examInfo`、`cards.room`、`cards.list`。
- 动作：`actions.switchToExam()`、`actions.openRoomNumberDialog()`、`actions.exit()`、`actions.callProctor()`。
- 提醒：`alerts.colorful`、`alerts.notice`、`alerts.closeNotice()`、`alerts.hideColorful()`。
- 壳层：`chrome.showActionBar`、`chrome.allowExit`、`chrome.showCallProctor`、`chrome.callProctorLoading`、`chrome.toolbarItems`。
- 标准壳层组件：`components.actionBar`、`components.colorfulAlert`、`components.notice`。
- 主题选择：`theme.options`、`theme.currentId`、`theme.set(id)`。

主题内部子组件也可以通过 `inject(playerThemeContextKey)` 获取同一份上下文。旧版 `left:logo`、`left:title` 具名插槽会放在 `context.slots`，主题可以选择渲染或忽略；`extra` 插槽仍由播放器壳层渲染。

### 接管操作栏与全屏提醒

火车站等主题可以进一步接管播放器壳层：

```ts
const stationTheme = definePlayerTheme({
  id: 'station',
  name: '车站大屏',
  chrome: {
    actionBar: true,
    colorfulAlert: true,
    notice: true
  },
  component: StationTheme
});
```

对应标记为 `true` 时，`ExamPlayer` 不再渲染默认组件，主题必须自行渲染。最简单的做法是复用标准实现：

```vue
<template>
  <main class="station-theme">
    <!-- 主题自己的页面布局 -->
    <component :is="context.components.colorfulAlert" />
    <component :is="context.components.notice" />
    <component :is="context.components.actionBar" variant="inline" />
  </main>
</template>
```

`components.actionBar` 支持 `variant="fixed"`（默认）或 `variant="inline"`，后者不再使用固定定位，便于放进主题自己的布局。需要完全自绘时，读取：

- `context.alerts.colorful`：彩色提醒的标题、消息、颜色、HDR 标记等；无提醒时为 `null`。
- `context.alerts.notice`：普通公告的 Markdown、HTML、剩余秒数；无公告时为 `null`。
- `context.alerts.closeNotice()` / `context.alerts.hideColorful()`：关闭提醒。
- `context.chrome`：宿主的操作栏可见性、退出/巡考开关和工具栏项。
- `context.actions`：退出、呼叫巡考、切换考试、打开考场号。

插件主题通过 API V2 的 `ctx.api.ui.player.registerTheme()` 注册，详见 [插件 API 概览](../../docs/plugin-dev/api.md#播放器主题)。

## 工具栏注册示例

```ts
import { providePlayerToolbar } from '@dsz-examaware/player';

const toolbar = providePlayerToolbar();

const dispose = toolbar.register({
  id: 'custom-help',
  label: '帮助',
  tooltip: '查看操作指南',
  order: 120,
  onClick: () => openHelpCenter()
});

// 组件卸载时调用 dispose()，或 toolbar.unregister('custom-help')
```

也可以通过 `ExamPlayer` 组件 `ref` 获取 `toolbar.register()`。

## 事件与回调

`useExamPlayer(config, playerConfig, timeProvider, eventHandlers)` 的 `eventHandlers` 支持：

- `onExamStart(exam)`：考试开始时触发。
- `onExamEnd(exam)`：考试结束时触发。
- `onExamSwitch(exam, index)`：切换考试时触发。
- `onTick(state)`：时间刷新 tick。

## 提醒与任务

- `useReminderService`：基于考试时间的提醒工具，返回启动/停止与任务管理接口。
- `ExamTaskQueue`：顺序执行的任务队列，支持添加、取消和清理。

## 数据处理

`ExamDataProcessor` 提供考试数据格式化与状态计算：

- `formatExamInfo(config)`：生成渲染友好的考试信息。
- `getExamStatus(now, exam)`：返回 `ExamStatus`（未开始/进行中/已结束）。

## 类型与密度

- `PlayerConfig`：播放器配置（如 `roomNumber`）。
- `UIDensity` / `DensityOption`：控制按钮/控件密度。

## 许可证

GPL-3.0-only
