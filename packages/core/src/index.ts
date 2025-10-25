/**
 * @dsz-examaware/core
 * ExamAware 核心库 - 考试配置解析和验证
 */

// 导出类型定义
export type { ExamMaterial, ExamInfo, ExamConfig } from './types';

// 导出解析和验证功能
export {
  parseExamConfig,
  validateExamConfig,
  hasExamTimeOverlap,
  getSortedExamInfos,
  getSortedExamConfig
} from './parser';

// 导出工具函数
export {
  formatLocalDateTime,
  formatDisplayTime,
  formatTimeRange,
  parseDateTime,
  getCurrentLocalDateTime,
  isTimeRangeOverlap,
  getMinutesDifference
} from './utils';
