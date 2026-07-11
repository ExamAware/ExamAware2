export interface TimeSyncConfig {
  ntpServer: string
  manualOffsetSeconds: number
  autoSync: boolean
  syncIntervalMinutes: number
  autoIncrementEnabled: boolean
  autoIncrementSeconds: number
  lastIncrementDate?: string
}

export const DEFAULT_TIME_SYNC_CONFIG: TimeSyncConfig = {
  ntpServer: 'ntp.aliyun.com',
  manualOffsetSeconds: 0,
  autoSync: true,
  syncIntervalMinutes: 60,
  autoIncrementEnabled: false,
  autoIncrementSeconds: 0,
  lastIncrementDate: undefined
}

function finiteNumberOr(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

function validLastIncrementDate(value: unknown): string | undefined {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined
  const [year, month, day] = value.split('-').map(Number)
  if (year < 1) return undefined
  const date = new Date(0)
  date.setUTCHours(0, 0, 0, 0)
  date.setUTCFullYear(year, month - 1, day)
  return date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
    ? value
    : undefined
}

export function normalizeTimeSyncConfig(candidate: Partial<TimeSyncConfig>): TimeSyncConfig {
  return {
    ntpServer:
      typeof candidate.ntpServer === 'string' && candidate.ntpServer.trim().length > 0
        ? candidate.ntpServer
        : DEFAULT_TIME_SYNC_CONFIG.ntpServer,
    manualOffsetSeconds: finiteNumberOr(candidate.manualOffsetSeconds, 0),
    autoSync:
      typeof candidate.autoSync === 'boolean'
        ? candidate.autoSync
        : DEFAULT_TIME_SYNC_CONFIG.autoSync,
    syncIntervalMinutes:
      typeof candidate.syncIntervalMinutes === 'number' &&
      Number.isInteger(candidate.syncIntervalMinutes) &&
      candidate.syncIntervalMinutes >= 1 &&
      candidate.syncIntervalMinutes <= 35791
        ? candidate.syncIntervalMinutes
        : DEFAULT_TIME_SYNC_CONFIG.syncIntervalMinutes,
    autoIncrementEnabled:
      typeof candidate.autoIncrementEnabled === 'boolean'
        ? candidate.autoIncrementEnabled
        : DEFAULT_TIME_SYNC_CONFIG.autoIncrementEnabled,
    autoIncrementSeconds: finiteNumberOr(candidate.autoIncrementSeconds, 0),
    lastIncrementDate: validLastIncrementDate(candidate.lastIncrementDate)
  }
}

export function mergeTimeSyncConfig(
  current: TimeSyncConfig,
  partial: Partial<TimeSyncConfig>
): TimeSyncConfig {
  const definedPartial = Object.fromEntries(
    Object.entries(partial).filter(([, value]) => value !== undefined)
  ) as Partial<TimeSyncConfig>
  return normalizeTimeSyncConfig({ ...current, ...definedPartial })
}
