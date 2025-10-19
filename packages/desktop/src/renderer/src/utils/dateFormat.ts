/**
 * 时间格式化工具函数
 */

import { getSyncedTime } from './timeUtils'
import {
  formatLocalDateTime as coreFormatLocalDateTime,
  formatDisplayTime as coreFormatDisplayTime,
  formatTimeRange as coreFormatTimeRange,
  parseDateTime as coreParseDateTime
} from '@dsz-examaware/core'

// 重新导出 core 包中的函数
export const formatDisplayTime = coreFormatDisplayTime
export const formatTimeRange = coreFormatTimeRange
export const parseDateTime = coreParseDateTime

/**
 * 将 Date 对象格式化为本地时间字符串
 * 格式: YYYY-MM-DD HH:mm:ss
 */
export const formatLocalDateTime = coreFormatLocalDateTime

/**
 * 获取当前本地时间字符串（使用同步时间）
 */
export function getCurrentLocalDateTime(): string {
  return formatLocalDateTime(new Date(getSyncedTime()))
}
