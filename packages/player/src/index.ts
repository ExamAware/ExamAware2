/**
 * @dsz-examaware/player
 * ExamAware Player - 考试信息播放器组件
 */

// 导出类型定义
export type { PlayerConfig, PlayerState, TaskInfo, PlayerEventHandlers } from './types';

// 导出数据处理相关
export type { FormattedExamInfo, ExamStatus } from './utils/dataProcessor';

// 导出核心功能
// Core composables and logic
export { useExamPlayer } from './useExamPlayer';
export { ExamTaskQueue } from './utils/taskQueue';
export { ExamDataProcessor } from './utils/dataProcessor';
export { useReminderService, ReminderUtils } from './utils/reminderService';

// Vue components
export { default as ExamPlayer } from './components/ExamPlayer.vue';
export { default as BaseCard } from './components/BaseCard.vue';
export { default as InfoCardWithIcon } from './components/InfoCardWithIcon.vue';
export { default as InfoItem } from './components/InfoItem.vue';
export { default as ExamRoomNumber } from './components/ExamRoomNumber.vue';
export { default as CurrentExamInfo } from './components/CurrentExamInfo.vue';
export { default as ExamInfoItem } from './components/ExamInfoItem.vue';
export { default as ActionButtonBar } from './components/ActionButtonBar.vue';
export { providePlayerToolbar, usePlayerToolbar } from './composables/usePlayerToolbar';
export { createPlayerToolbarRegistry, playerToolbarRegistryKey } from './core/toolbarRegistry';
export type { UIDensity, DensityOption } from './types/toolbar';

// Types
export type * from './types';

// 默认导出
export { useExamPlayer as default } from './useExamPlayer';
