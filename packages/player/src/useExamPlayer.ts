import { onMounted, onUnmounted, readonly } from 'vue';
import type { ExamConfig } from '@dsz-examaware/core';
import {
  validateExamConfig,
  hasExamTimeOverlap,
  getSortedExamConfig,
  parseDateTime
} from '@dsz-examaware/core';
import type { PlayerConfig, PlayerEventHandlers } from './types';
import { ExamPlayerCore } from './core/ExamPlayerCore';
import type { TimeProvider } from './core/interfaces';
import { ExamDataProcessor } from './dataProcessor';

export type { TimeProvider };

/**
 * 考试播放器核心逻辑
 */
export function useExamPlayer(
  config: ExamConfig | null,
  playerConfig: PlayerConfig = { roomNumber: '01' },
  timeProvider: TimeProvider = { getCurrentTime: () => Date.now() },
  eventHandlers: PlayerEventHandlers = {}
) {
  // 构造面向对象核心
  const core = new ExamPlayerCore(config, playerConfig, timeProvider, eventHandlers, {
    validate: validateExamConfig,
    hasOverlap: hasExamTimeOverlap,
    getSortedConfig: getSortedExamConfig,
    parse: parseDateTime
  });

  const view = core.view();
  const currentExam = view.currentExam;
  const sortedExamInfos = view.sortedExamInfos;
  const examStatus = view.examStatus;
  const currentExamName = view.currentExamName;
  const currentExamTimeRange = view.currentExamTimeRange;
  const remainingTime = view.remainingTime;
  const formattedCurrentTime = view.formattedCurrentTime;
  const formattedExamInfos = view.formattedExamInfos;
  const state = view.state;
  const examConfigRef = view.examConfig;
  const currentTime = view.currentTime;

  // 更新配置
  const updateConfig = (newConfig: ExamConfig | null) => core.updateConfig(newConfig);

  // 智能更新当前考试
  const updateCurrentExam = () => core.updateCurrentExam();

  // 切换到指定考试
  const switchToExam = (index: number) => core.switchToExam(index);

  // 时间更新定时器
  const startTimeUpdates = () => core.start();
  const stopTimeUpdates = () => core.stop();

  // 使用 core 的 examConfig（保持原返回结构）

  // 生命周期
  onMounted(() => {
    startTimeUpdates();
    if (examConfigRef.value) {
      updateConfig(examConfigRef.value);
    }
  });

  onUnmounted(() => {
    stopTimeUpdates();
  });

  return {
    // 状态
    state: readonly(state),
    examConfig: readonly(examConfigRef),
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
    taskQueue: core.taskQueueApi(),

    // 数据处理工具
    dataProcessor: ExamDataProcessor
  };
}
