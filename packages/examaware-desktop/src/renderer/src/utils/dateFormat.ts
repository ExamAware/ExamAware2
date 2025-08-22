/**
 * 时间格式化工具函数
 */

import { getSyncedTime } from './timeUtils'

/**
 * 将 Date 对象格式化为本地时间字符串
 * 格式: YYYY-MM-DD HH:mm:ss
 */
export function formatLocalDateTime(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

/**
 * 将 Date 对象格式化为显示用的时间字符串
 * 格式: MM/DD HH:mm
 */
export function formatDisplayTime(date: Date): string {
  return date.toLocaleString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

/**
 * 将 Date 对象格式化为时间段显示字符串
 * 格式: MM/DD HH:mm - HH:mm
 */
export function formatTimeRange(start: Date, end: Date): string {
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return '时间待设置'
  }

  const startStr = formatDisplayTime(start)
  const endStr = end.toLocaleString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })

  return `${startStr} - ${endStr}`
}

/**
 * 解析时间字符串为 Date 对象
 * 支持多种格式
 */
export function parseDateTime(dateStr: string): Date {
  if (!dateStr) return new Date(NaN)

  // 如果是标准的 ISO 字符串
  if (dateStr.includes('T') || dateStr.includes('Z')) {
    return new Date(dateStr)
  }

  // 如果是本地格式 YYYY-MM-DD HH:mm:ss
  // 需要确保浏览器能正确解析
  if (dateStr.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)) {
    // 将空格替换为 T 以符合 ISO 格式，但不添加时区信息
    // 这样会被解析为本地时间
    return new Date(dateStr.replace(' ', 'T'))
  }

  // 其他格式，直接尝试解析
  return new Date(dateStr)
}

/**
 * 获取当前本地时间字符串
 */
export function getCurrentLocalDateTime(): string {
  return formatLocalDateTime(new Date(getSyncedTime()))
}
