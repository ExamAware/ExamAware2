import type { ExamInfo } from '@renderer/core/configTypes'
import { formatLocalDateTime, parseDateTime } from '@dsz-examaware/core'

const DEFAULT_EXAM_DURATION_MS = 60 * 60 * 1000

function toPickerDate(value: unknown): Date | null {
  if (value instanceof Date) {
    return Number.isFinite(value.getTime()) ? value : null
  }

  if (typeof value === 'string' && value) {
    const date = parseDateTime(value)
    return Number.isFinite(date.getTime()) ? date : null
  }

  return null
}

export function updateExamPickerTime(exam: ExamInfo, field: 'start' | 'end', value: unknown): void {
  if (value == null || value === '') {
    exam[field] = ''
    return
  }

  const nextDate = toPickerDate(value)
  if (!nextDate) return

  if (field === 'end') {
    exam.end = formatLocalDateTime(nextDate)
    return
  }

  const previousStart = parseDateTime(exam.start)
  const previousEnd = parseDateTime(exam.end)
  const previousDuration = previousEnd.getTime() - previousStart.getTime()
  const duration = previousDuration > 0 ? previousDuration : DEFAULT_EXAM_DURATION_MS

  exam.start = formatLocalDateTime(nextDate)

  // Changing the start must not silently leave an equal or reversed range behind.
  if (!Number.isFinite(previousEnd.getTime()) || nextDate.getTime() >= previousEnd.getTime()) {
    exam.end = formatLocalDateTime(new Date(nextDate.getTime() + duration))
  }
}
