import type { ExamConfig, ExamInfo } from '@renderer/core/configTypes'
import { formatLocalDateTime } from '@renderer/utils/dateFormat'
import { getSyncedTime } from '@renderer/utils/timeUtils'

export interface QuickStartSubject {
  id: string
  name: string
  enabled: boolean
  duration: number
}

export interface QuickStartExamRow {
  id: string
  subjectIds: string[]
  durationOverride: number | null
  startOverride: string | null
  selected: boolean
}

export interface QuickStartPreset {
  id: string
  name: string
  examsPerDay: number
  firstExamTime: string
  gapMinutes: number
}

export interface QuickStartScheduledExam {
  id: string
  row: QuickStartExamRow
  indexInDay: number
  dayIndex: number
  date: string
  startMinutes: number
  endMinutes: number
  startText: string
  period: string
  name: string
  duration: number
  gapMinutes: number | null
  startDate: Date
  endDate: Date
}

export interface QuickStartCompletedResult {
  config: ExamConfig
  examCount: number
  dayCount: number
  dateRange: string
  totalMinutes: number
}

export const QUICK_START_PRESET_STORAGE_KEY = 'eaQuickStartSchedulePresets'
export const LUNCH_START_MINUTES = 12 * 60
export const LUNCH_END_MINUTES = 14 * 60

export const BUILTIN_QUICK_START_PRESETS: QuickStartPreset[] = [
  {
    id: 'builtin-standard',
    name: '标准作息',
    examsPerDay: 4,
    firstExamTime: '08:00',
    gapMinutes: 30
  },
  {
    id: 'builtin-compact',
    name: '紧凑作息',
    examsPerDay: 6,
    firstExamTime: '08:00',
    gapMinutes: 10
  },
  {
    id: 'builtin-afternoon',
    name: '下午开考',
    examsPerDay: 4,
    firstExamTime: '14:00',
    gapMinutes: 20
  }
]

export function createQuickStartId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function padQuickStartNumber(value: number): string {
  return String(value).padStart(2, '0')
}

export function clampQuickStartNumber(
  value: unknown,
  min: number,
  max: number,
  fallback: number
): number {
  const numeric = Math.round(Number(value))
  if (!Number.isFinite(numeric)) return fallback
  return Math.min(max, Math.max(min, numeric))
}

export function todayQuickStartDate(): string {
  const now = new Date(getSyncedTime())
  return `${now.getFullYear()}-${padQuickStartNumber(now.getMonth() + 1)}-${padQuickStartNumber(
    now.getDate()
  )}`
}

export function normalizeQuickStartDate(value: string): string {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : ''
}

export function addQuickStartDays(date: string, days: number): string {
  const parsed = new Date(`${date}T00:00:00`)
  parsed.setDate(parsed.getDate() + days)
  return `${parsed.getFullYear()}-${padQuickStartNumber(
    parsed.getMonth() + 1
  )}-${padQuickStartNumber(parsed.getDate())}`
}

export function normalizeQuickStartTime(value: unknown, fallback = ''): string {
  if (value === undefined || value === null) return fallback
  const match = String(value)
    .trim()
    .match(/^(\d{1,2}):(\d{2})/)
  if (!match) return fallback
  const hour = Number(match[1])
  const minute = Number(match[2])
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return fallback
  return `${padQuickStartNumber(hour)}:${padQuickStartNumber(minute)}`
}

export function quickStartTimeToMinutes(value: string): number {
  const [hour, minute] = value.split(':').map(Number)
  return (hour || 0) * 60 + (minute || 0)
}

export function quickStartMinutesToTime(totalMinutes: number): string {
  const normalized = ((totalMinutes % 1440) + 1440) % 1440
  return `${padQuickStartNumber(Math.floor(normalized / 60))}:${padQuickStartNumber(
    normalized % 60
  )}`
}

export function formatQuickStartDate(date: string): string {
  return date.replace(/-/g, '/')
}

export function formatQuickStartWeekday(date: string): string {
  const weekdays = ['日', '一', '二', '三', '四', '五', '六']
  return `周${weekdays[new Date(`${date}T00:00:00`).getDay()]}`
}

export function formatQuickStartGap(minutes: number | null): string {
  if (minutes === null) return '—'
  if (minutes < 0) return `重叠 ${Math.abs(minutes)} 分钟`
  if (minutes < 60) return `${minutes} 分钟`
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  return rest ? `${hours} 小时 ${rest} 分` : `${hours} 小时`
}

export function quickStartRowName(
  row: QuickStartExamRow,
  subjectMap: ReadonlyMap<string, QuickStartSubject>
): string {
  return row.subjectIds
    .map((id) => subjectMap.get(id)?.name)
    .filter((name): name is string => Boolean(name))
    .join(' + ')
}

export function quickStartRowDuration(
  row: QuickStartExamRow,
  subjectMap: ReadonlyMap<string, QuickStartSubject>
): number {
  if (row.durationOverride !== null) return row.durationOverride
  return row.subjectIds.reduce((total, id) => total + (subjectMap.get(id)?.duration ?? 0), 0)
}

interface BuildQuickStartScheduleOptions {
  baseDate: string
  startMinutes: number
  examsPerDay: number
  gapMinutes: number
  subjectMap: ReadonlyMap<string, QuickStartSubject>
}

export function buildQuickStartSchedule(
  rows: readonly QuickStartExamRow[],
  options: BuildQuickStartScheduleOptions
): QuickStartScheduledExam[] {
  const { baseDate, startMinutes, examsPerDay, gapMinutes, subjectMap } = options
  if (!rows.length) return []

  const result: QuickStartScheduledExam[] = []
  let dayIndex = 0
  let indexInDay = 0
  let cursor = startMinutes
  let previousEnd: number | null = null

  for (const row of rows) {
    if (indexInDay >= examsPerDay) {
      dayIndex += 1
      indexInDay = 0
      cursor = startMinutes
      previousEnd = null
    }

    let start = row.startOverride ? quickStartTimeToMinutes(row.startOverride) : cursor
    if (!row.startOverride && start >= LUNCH_START_MINUTES && start < LUNCH_END_MINUTES) {
      start = LUNCH_END_MINUTES
    }

    const duration = quickStartRowDuration(row, subjectMap)
    const end = start + duration
    const date = addQuickStartDays(baseDate, dayIndex)
    const startDate = new Date(`${date}T00:00:00`)
    startDate.setMinutes(start)
    const endDate = new Date(`${date}T00:00:00`)
    endDate.setMinutes(end)

    result.push({
      id: row.id,
      row,
      indexInDay: indexInDay + 1,
      dayIndex,
      date,
      startMinutes: start,
      endMinutes: end,
      startText: quickStartMinutesToTime(start),
      period: start < LUNCH_START_MINUTES ? '上午' : start < 18 * 60 ? '下午' : '晚上',
      name: quickStartRowName(row, subjectMap),
      duration,
      gapMinutes: previousEnd === null ? null : start - previousEnd,
      startDate,
      endDate
    })

    previousEnd = end
    cursor = end + gapMinutes
    indexInDay += 1
  }

  return result
}

export function buildQuickStartExamConfig(
  title: string,
  message: string,
  scheduled: readonly QuickStartScheduledExam[]
): ExamConfig {
  const examInfos: ExamInfo[] = scheduled.map((item) => ({
    name: item.name,
    start: formatLocalDateTime(item.startDate),
    end: formatLocalDateTime(item.endDate),
    alertTime: 15,
    materials: []
  }))
  return {
    examName: title,
    message: message || '请遵守考场纪律',
    examInfos
  }
}

export function loadStoredQuickStartPresets(): QuickStartPreset[] {
  try {
    const raw = localStorage.getItem(QUICK_START_PRESET_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (item): item is QuickStartPreset =>
        item &&
        typeof item.id === 'string' &&
        typeof item.name === 'string' &&
        Number.isFinite(Number(item.examsPerDay)) &&
        typeof item.firstExamTime === 'string' &&
        Number.isFinite(Number(item.gapMinutes))
    )
  } catch {
    return []
  }
}

export function persistQuickStartPresets(presets: readonly QuickStartPreset[]): void {
  try {
    localStorage.setItem(QUICK_START_PRESET_STORAGE_KEY, JSON.stringify(presets))
  } catch (error) {
    console.warn('[quick-start] failed to persist presets', error)
  }
}
