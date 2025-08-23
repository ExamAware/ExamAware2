# @examaware/player

ExamAware Player - 考试信息播放器组件，提供考试显示和管理的核心逻辑。

## 功能特性

- 🎯 考试状态管理和自动切换
- ⏰ 智能任务队列和定时提醒
- 🔄 实时时间同步支持
- 📱 跨平台支持 (Desktop & Web)
- 🎨 Vue 3 组合式API设计
- 📦 TypeScript 类型安全

## 安装

```bash
pnpm add @examaware/player @examaware/core
```

## 基础用法

### 使用考试播放器

```typescript
import { useExamPlayer } from '@examaware/player'
import type { ExamConfig } from '@examaware/core'

// 考试配置
const examConfig: ExamConfig = {
  examName: '期中考试',
  message: '请遵守考场纪律',
  examInfos: [
    {
      name: '语文',
      start: '2024-01-15 09:00:00',
      end: '2024-01-15 11:00:00',
      alertTime: 15
    },
    {
      name: '数学',
      start: '2024-01-15 14:00:00',
      end: '2024-01-15 16:00:00',
      alertTime: 15
    }
  ]
}

// 播放器配置
const playerConfig = {
  roomNumber: '101',
  fullscreen: true,
  timeSync: true
}

// 事件处理器
const eventHandlers = {
  onExamStart: (exam) => {
    console.log('考试开始:', exam.name)
  },
  onExamEnd: (exam) => {
    console.log('考试结束:', exam.name)
  },
  onExamAlert: (exam, alertTime) => {
    console.log(`考试提醒: ${exam.name} 将在 ${alertTime} 分钟后结束`)
  },
  onExamSwitch: (fromExam, toExam) => {
    console.log('考试切换:', fromExam?.name, '->', toExam?.name)
  }
}

// 使用播放器
const {
  state,
  currentExam,
  examStatus,
  currentExamName,
  currentExamTimeRange,
  remainingTime,
  formattedCurrentTime,
  updateConfig,
  switchToExam
} = useExamPlayer(examConfig, playerConfig, timeProvider, eventHandlers)
```

### 自定义时间提供者

```typescript
import { useExamPlayer, type TimeProvider } from '@examaware/player'

// 自定义时间提供者（支持时间同步）
const timeProvider: TimeProvider = {
  getCurrentTime: () => {
    // 返回同步后的时间
    return getSyncedTime()
  },
  onTimeChange: (callback) => {
    // 监听时间变化
    addTimeSyncChangeListener(callback)
  },
  offTimeChange: (callback) => {
    // 移除时间变化监听
    removeTimeSyncChangeListener(callback)
  }
}

const player = useExamPlayer(config, playerConfig, timeProvider)
```

### 使用任务队列

```typescript
import { ExamTaskQueue } from '@examaware/player'

// 创建任务队列
const taskQueue = new ExamTaskQueue(() => Date.now())

// 为考试配置创建任务
taskQueue.createTasksForConfig(examConfig, {
  onExamStart: (exam) => console.log('考试开始:', exam.name),
  onExamEnd: (exam) => console.log('考试结束:', exam.name),
  onExamAlert: (exam, alertTime) => console.log('考试提醒:', exam.name)
})

// 启动任务队列
taskQueue.start()

// 获取任务信息
console.log('任务数量:', taskQueue.getTaskCount())
console.log('待执行任务:', taskQueue.getPendingTasks())

// 停止任务队列
taskQueue.stop()
```

## Vue 组件示例

```vue
<template>
  <div class="exam-player">
    <!-- 时钟显示 -->
    <div class="clock">
      {{ formattedCurrentTime }}
    </div>

    <!-- 当前考试信息 -->
    <div class="current-exam" v-if="currentExam">
      <h2>{{ currentExamName }}</h2>
      <p>考试时间: {{ currentExamTimeRange }}</p>
      <p>{{ remainingTime }}</p>
      <p>状态: {{ examStatus.message }}</p>
    </div>

    <!-- 考试列表 -->
    <div class="exam-list">
      <div
        v-for="(exam, index) in sortedExamInfos"
        :key="exam.name"
        :class="{ active: index === state.currentExamIndex }"
        @click="switchToExam(index)"
      >
        {{ exam.name }} - {{ exam.start }} 至 {{ exam.end }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExamPlayer } from '@examaware/player'
import type { ExamConfig } from '@examaware/core'

const props = defineProps<{
  config: ExamConfig
}>()

const {
  state,
  currentExam,
  sortedExamInfos,
  examStatus,
  currentExamName,
  currentExamTimeRange,
  remainingTime,
  formattedCurrentTime,
  switchToExam
} = useExamPlayer(props.config)
</script>
```

## API 文档

### `useExamPlayer(config, playerConfig, timeProvider, eventHandlers)`

主要的组合式函数，提供考试播放器的核心功能。

#### 参数

- `config: ExamConfig | null` - 考试配置
- `playerConfig: PlayerConfig` - 播放器配置
- `timeProvider: TimeProvider` - 时间提供者
- `eventHandlers: PlayerEventHandlers` - 事件处理器

#### 返回值

- `state` - 播放器状态
- `currentExam` - 当前考试信息
- `sortedExamInfos` - 排序后的考试列表
- `examStatus` - 考试状态
- `currentExamName` - 当前考试名称
- `currentExamTimeRange` - 当前考试时间范围
- `remainingTime` - 剩余时间
- `formattedCurrentTime` - 格式化的当前时间
- `updateConfig` - 更新配置方法
- `switchToExam` - 切换考试方法

### `ExamTaskQueue`

考试任务队列管理器，用于处理考试相关的定时任务。

#### 方法

- `addTask(executeTime, type, examInfo, callback)` - 添加任务
- `createTasksForConfig(config, eventHandlers)` - 为配置创建任务
- `start()` - 启动队列
- `stop()` - 停止队列
- `clear()` - 清空队列
- `getTaskCount()` - 获取任务数量
- `getTaskDetails()` - 获取任务详情
- `getPendingTasks()` - 获取待执行任务

## 类型定义

### `PlayerConfig`
```typescript
interface PlayerConfig {
  roomNumber: string
  fullscreen?: boolean
  timeSync?: boolean
  refreshInterval?: number
}
```

### `PlayerState`
```typescript
interface PlayerState {
  currentExamIndex: number
  loading: boolean
  loaded: boolean
  error: string | null
}
```

### `PlayerEventHandlers`
```typescript
interface PlayerEventHandlers {
  onExamStart?: (examInfo: any) => void
  onExamEnd?: (examInfo: any) => void
  onExamAlert?: (examInfo: any, alertTime: number) => void
  onExamSwitch?: (fromExam: any, toExam: any) => void
  onError?: (error: string) => void
}
```

### `TimeProvider`
```typescript
interface TimeProvider {
  getCurrentTime: () => number
  onTimeChange?: (callback: () => void) => void
  offTimeChange?: (callback: () => void) => void
}
```

## 开发

```bash
# 开发模式
pnpm dev

# 构建
pnpm build

# 类型检查
pnpm type-check

# 代码检查
pnpm lint
```

## 许可证

MIT
