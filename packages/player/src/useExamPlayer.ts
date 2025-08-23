import { ref, computed, onMounted, onUnmounted, watch, readonly } from 'vue'
import type { ExamConfig } from '@examaware/core'
import {
  validateExamConfig,
  hasExamTimeOverlap,
  getSortedExamConfig,
  parseDateTime
} from '@examaware/core'
import type { PlayerConfig, PlayerState, PlayerEventHandlers } from './types'
import { ExamTaskQueue } from './taskQueue'
import { ExamDataProcessor } from './dataProcessor'

export interface TimeProvider {
  getCurrentTime: () => number
  onTimeChange?: (callback: () => void) => void
  offTimeChange?: (callback: () => void) => void
}

/**
 * 考试播放器核心逻辑
 */
export function useExamPlayer(
  config: ExamConfig | null,
  playerConfig: PlayerConfig = { roomNumber: '01' },
  timeProvider: TimeProvider = { getCurrentTime: () => Date.now() },
  eventHandlers: PlayerEventHandlers = {}
) {
  // 基础状态
  const state = ref<PlayerState>({
    currentExamIndex: 0,
    loading: false,
    loaded: false,
    error: null
  })

  const examConfig = ref<ExamConfig | null>(config)
  const currentTime = ref(timeProvider.getCurrentTime())

  // 创建任务队列
  const taskQueue = new ExamTaskQueue(timeProvider.getCurrentTime)

  // 当前考试信息
  const currentExam = computed(() => {
    if (!examConfig.value || state.value.currentExamIndex < 0 ||
        state.value.currentExamIndex >= examConfig.value.examInfos.length) {
      return null
    }
    return examConfig.value.examInfos[state.value.currentExamIndex]
  })

  // 排序后的考试信息
  const sortedExamInfos = computed(() => {
    if (!examConfig.value) return []
    return getSortedExamConfig(examConfig.value).examInfos
  })

  // 考试状态计算
  const examStatus = computed(() => {
    return ExamDataProcessor.getExamStatus(currentExam.value, currentTime.value)
  })

  // 当前考试名称
  const currentExamName = computed(() => {
    return currentExam.value?.name || '暂无考试'
  })

  // 当前考试时间范围
  const currentExamTimeRange = computed(() => {
    return ExamDataProcessor.getExamTimeRange(currentExam.value)
  })

  // 剩余时间计算
  const remainingTime = computed(() => {
    return ExamDataProcessor.getRemainingTimeText(currentExam.value, currentTime.value)
  })

  // 格式化的当前时间
  const formattedCurrentTime = computed(() => {
    return ExamDataProcessor.formatCurrentTime(currentTime.value)
  })

  // 格式化的考试信息列表
  const formattedExamInfos = computed(() => {
    return ExamDataProcessor.formatExamInfos(examConfig.value, currentTime.value)
  })

  // 更新配置
  const updateConfig = (newConfig: ExamConfig | null) => {
    if (!newConfig) {
      state.value.error = '配置为空'
      state.value.loaded = false
      taskQueue.clear()
      return false
    }

    // 验证配置
    if (!validateExamConfig(newConfig)) {
      state.value.error = '配置验证失败'
      state.value.loaded = false
      taskQueue.clear()
      return false
    }

    // 检查时间重叠
    if (hasExamTimeOverlap(newConfig)) {
      state.value.error = '考试时间存在重叠'
      state.value.loaded = false
      taskQueue.clear()
      return false
    }

    examConfig.value = newConfig
    state.value.error = null
    state.value.loaded = true

    // 自动选择当前考试
    updateCurrentExam()

    // 创建任务队列中的任务
    taskQueue.createTasksForConfig(newConfig, {
      onExamStart: (exam) => {
        console.log(`考试开始: ${exam.name}`)
        updateCurrentExam() // 更新当前考试状态
        eventHandlers.onExamStart?.(exam)
      },
      onExamEnd: (exam) => {
        console.log(`考试结束: ${exam.name}`)
        updateCurrentExam() // 更新当前考试状态
        eventHandlers.onExamEnd?.(exam)
      },
      onExamAlert: (exam, alertTime) => {
        console.log(`考试提醒: ${exam.name} 将在 ${alertTime} 分钟后结束`)
        eventHandlers.onExamAlert?.(exam, alertTime)
      },
      onExamSwitch: eventHandlers.onExamSwitch
    })

    // 启动任务队列
    taskQueue.start()

    return true
  }

  // 智能更新当前考试
  const updateCurrentExam = () => {
    if (!examConfig.value?.examInfos) return

    const targetIndex = ExamDataProcessor.getCurrentExamIndex(
      examConfig.value,
      currentTime.value
    )

    const oldIndex = state.value.currentExamIndex
    state.value.currentExamIndex = targetIndex

    // 触发考试切换事件
    if (oldIndex !== targetIndex && eventHandlers.onExamSwitch) {
      const sortedExams = sortedExamInfos.value
      const oldExam = sortedExams[oldIndex]
      const newExam = sortedExams[targetIndex]
      eventHandlers.onExamSwitch(oldExam, newExam)
    }
  }

  // 切换到指定考试
  const switchToExam = (index: number) => {
    if (!examConfig.value || index < 0 || index >= examConfig.value.examInfos.length) {
      return false
    }

    const oldIndex = state.value.currentExamIndex
    state.value.currentExamIndex = index

    if (eventHandlers.onExamSwitch && oldIndex !== index) {
      const oldExam = sortedExamInfos.value[oldIndex]
      const newExam = sortedExamInfos.value[index]
      eventHandlers.onExamSwitch(oldExam, newExam)
    }

    return true
  }

  // 时间更新定时器
  let timeInterval: NodeJS.Timeout | null = null

  // 启动时间更新
  const startTimeUpdates = () => {
    if (timeInterval) return

    timeInterval = setInterval(() => {
      currentTime.value = timeProvider.getCurrentTime()
    }, 1000)

    // 如果时间提供者支持变更监听，也注册监听器
    if (timeProvider.onTimeChange) {
      timeProvider.onTimeChange(() => {
        currentTime.value = timeProvider.getCurrentTime()
        // 更新任务队列的时间提供器
        taskQueue.updateTimeProvider(timeProvider.getCurrentTime)
      })
    }
  }

  // 停止时间更新
  const stopTimeUpdates = () => {
    if (timeInterval) {
      clearInterval(timeInterval)
      timeInterval = null
    }

    if (timeProvider.offTimeChange) {
      timeProvider.offTimeChange(() => {
        currentTime.value = timeProvider.getCurrentTime()
      })
    }

    // 停止任务队列
    taskQueue.stop()
  }

  // 监听当前时间变化，定期检查考试状态
  watch(currentTime, () => {
    if (examConfig.value?.examInfos && state.value.loaded) {
      // 每30秒检查一次考试状态
      if (currentTime.value % 30000 < 1000) {
        updateCurrentExam()
      }
    }
  })

  // 生命周期
  onMounted(() => {
    startTimeUpdates()
    if (examConfig.value) {
      updateConfig(examConfig.value)
    }
  })

  onUnmounted(() => {
    stopTimeUpdates()
  })

  return {
    // 状态
    state: readonly(state),
    examConfig: readonly(examConfig),
    currentTime: readonly(currentTime),

    // 计算属性
    currentExam,
    sortedExamInfos,
    formattedExamInfos,
    examStatus,
    currentExamName,
    currentExamTimeRange,
    remainingTime,
    formattedCurrentTime,

    // 方法
    updateConfig,
    updateCurrentExam,
    switchToExam,
    startTimeUpdates,
    stopTimeUpdates,

    // 任务队列相关
    taskQueue: {
      getTaskCount: () => taskQueue.getTaskCount(),
      getTaskDetails: () => taskQueue.getTaskDetails(),
      getPendingTasks: () => taskQueue.getPendingTasks(),
      clear: () => taskQueue.clear(),
      start: () => taskQueue.start(),
      stop: () => taskQueue.stop()
    },

    // 数据处理工具
    dataProcessor: ExamDataProcessor
  }
}
