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

export function normalizeTimeSyncConfig(candidate: Partial<TimeSyncConfig>): TimeSyncConfig {
  const config = { ...DEFAULT_TIME_SYNC_CONFIG, ...candidate }
  return {
    ...config,
    syncIntervalMinutes:
      typeof config.syncIntervalMinutes === 'number' &&
      Number.isFinite(config.syncIntervalMinutes) &&
      config.syncIntervalMinutes > 0
        ? config.syncIntervalMinutes
        : DEFAULT_TIME_SYNC_CONFIG.syncIntervalMinutes,
    manualOffsetSeconds: finiteNumberOr(config.manualOffsetSeconds, 0),
    autoIncrementSeconds: finiteNumberOr(config.autoIncrementSeconds, 0)
  }
}

export function mergeTimeSyncConfig(
  current: TimeSyncConfig,
  partial: Partial<TimeSyncConfig>
): TimeSyncConfig {
  return normalizeTimeSyncConfig({ ...current, ...partial })
}
