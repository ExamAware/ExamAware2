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
- 类型：`PlayerConfig`、`PlayerState`、`TaskInfo`、`PlayerEventHandlers`、`UIDensity` 等。

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
