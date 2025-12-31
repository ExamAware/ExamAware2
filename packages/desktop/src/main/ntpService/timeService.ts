import { app, BrowserWindow } from 'electron'
import {
  syncTimeWithNTP,
  getTimeSyncInfo,
  setManualOffset,
  getSyncedTime,
  disableTimeSync
} from './ntpClient'
import fs from 'fs'
import path from 'path'
import { getConfig, setConfig } from '../configStore'
import { appLogger } from '../logging/winstonLogger'

// 时间同步配置接口
interface TimeSyncConfig {
  ntpServer: string
  manualOffsetSeconds: number
  autoSync: boolean
  syncIntervalMinutes: number
  // 新增：自动时间偏移
  autoIncrementEnabled: boolean
  autoIncrementSeconds: number
  lastIncrementDate?: string // YYYY-MM-DD，记录上次应用增量的日期
}

// 默认配置
const DEFAULT_CONFIG: TimeSyncConfig = {
  ntpServer: 'ntp.aliyun.com',
  manualOffsetSeconds: 0,
  autoSync: true,
  syncIntervalMinutes: 60,
  autoIncrementEnabled: false,
  autoIncrementSeconds: 0,
  lastIncrementDate: undefined
}

let timeSyncConfig: TimeSyncConfig = { ...DEFAULT_CONFIG }
let syncIntervalId: NodeJS.Timeout | null = null
let autoIncTimer: NodeJS.Timeout | null = null
let initialized = false
let pendingReadyHook = false

// 配置文件路径
const getConfigFilePath = (): string => {
  return path.join(app.getPath('userData'), 'timeSync.json')
}

// 加载配置
export function loadTimeSyncConfig(): TimeSyncConfig {
  try {
    // 优先从统一配置读取
    const cfg = (getConfig('time') || {}) as Partial<TimeSyncConfig>
    if (cfg && Object.keys(cfg).length > 0) {
      timeSyncConfig = { ...DEFAULT_CONFIG, ...cfg }
      if (timeSyncConfig.manualOffsetSeconds !== 0)
        setManualOffset(timeSyncConfig.manualOffsetSeconds)
      // 应用一次自动增量（如果需要）
      applyAutoIncrementIfNeeded()
      return timeSyncConfig
    }

    const configPath = getConfigFilePath()
    if (fs.existsSync(configPath)) {
      const configData = fs.readFileSync(configPath, 'utf-8')
      const config = JSON.parse(configData) as TimeSyncConfig
      timeSyncConfig = { ...DEFAULT_CONFIG, ...config }

      // 应用手动偏移
      if (timeSyncConfig.manualOffsetSeconds !== 0) {
        setManualOffset(timeSyncConfig.manualOffsetSeconds)
      }

      // 兼容旧存储，首次加载时同样检查是否需要应用自动增量
      applyAutoIncrementIfNeeded()

      return timeSyncConfig
    }
  } catch (error) {
    appLogger.error('加载时间同步配置失败', error as Error)
  }

  return timeSyncConfig
}

// 应用来自统一配置或外部变更的部分配置（不落盘到 timeSync.json）
export function applyTimeConfig(partial: Partial<TimeSyncConfig>): TimeSyncConfig {
  try {
    timeSyncConfig = { ...timeSyncConfig, ...partial }
    if (partial.manualOffsetSeconds !== undefined) {
      setManualOffset(timeSyncConfig.manualOffsetSeconds)
    }
    if (
      partial.autoSync !== undefined ||
      partial.syncIntervalMinutes !== undefined ||
      partial.ntpServer !== undefined
    ) {
      restartAutoSync()
    }
    if (
      partial.autoIncrementEnabled !== undefined ||
      partial.autoIncrementSeconds !== undefined ||
      partial.manualOffsetSeconds !== undefined
    ) {
      // 变更后立即评估一次，并重排计划
      applyAutoIncrementIfNeeded()
      scheduleNextAutoIncrement()
    }
    emitTimeSyncChanged()
  } catch (e) {
    appLogger.error('应用时间同步配置失败', e as Error)
  }
  return timeSyncConfig
}

// 保存配置
export function saveTimeSyncConfig(config: Partial<TimeSyncConfig>): TimeSyncConfig {
  try {
    // 更新配置
    timeSyncConfig = { ...timeSyncConfig, ...config }

    // 应用新的手动偏移
    if (config.manualOffsetSeconds !== undefined) {
      setManualOffset(timeSyncConfig.manualOffsetSeconds)
    }

    // 保存到文件
    const configPath = getConfigFilePath()
    fs.writeFileSync(configPath, JSON.stringify(timeSyncConfig, null, 2), 'utf-8')

    // 如果更新了自动同步设置，重新应用
    if (config.autoSync !== undefined || config.syncIntervalMinutes !== undefined) {
      restartAutoSync()
    }

    emitTimeSyncChanged()

    return timeSyncConfig
  } catch (error) {
    appLogger.error('保存时间同步配置失败', error as Error)
    return timeSyncConfig
  }
}

// 执行时间同步
export async function performTimeSync(): Promise<any> {
  try {
    const result = await syncTimeWithNTP(timeSyncConfig.ntpServer)
    appLogger.info('时间同步成功', { server: timeSyncConfig.ntpServer, result })
    emitTimeSyncChanged()
    return result
  } catch (error) {
    appLogger.error('时间同步失败', error as Error)
    throw error
  }
}

// 重启自动同步
function restartAutoSync(): void {
  // 清除现有定时器
  if (syncIntervalId) {
    clearInterval(syncIntervalId)
    syncIntervalId = null
  }

  // 如果启用了自动同步，设置新的定时器
  if (timeSyncConfig.autoSync) {
    // 首先执行一次同步
    performTimeSync().catch((err) => appLogger.error('自动时间同步失败', err as Error))

    // 设置定期同步
    const intervalMs = timeSyncConfig.syncIntervalMinutes * 60 * 1000
    syncIntervalId = setInterval(() => {
      performTimeSync().catch((err) => appLogger.error('自动时间同步失败', err as Error))
    }, intervalMs)
  } else {
    // 如果禁用了自动同步，重置偏移量
    disableTimeSync()
    emitTimeSyncChanged()
  }
}

// 初始化时间同步
export function initializeTimeSync(): void {
  loadTimeSyncConfig()
  restartAutoSync()
  scheduleNextAutoIncrement()
  emitTimeSyncChanged()
  initialized = true
  pendingReadyHook = false
}

export function ensureTimeSyncInitialized(): void {
  if (initialized) return
  if (app.isReady()) {
    initializeTimeSync()
    return
  }
  if (pendingReadyHook) return
  pendingReadyHook = true
  app.once('ready', () => {
    try {
      initializeTimeSync()
    } catch (error) {
      appLogger.error('初始化时间同步服务失败', error as Error)
      initialized = false
      pendingReadyHook = false
    }
  })
}

function getTodayStr() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function daysBetween(a: string, b: string): number {
  try {
    const da = new Date(a + 'T00:00:00')
    const db = new Date(b + 'T00:00:00')
    const diff = Math.floor((db.getTime() - da.getTime()) / (24 * 60 * 60 * 1000))
    return isNaN(diff) ? 0 : diff
  } catch {
    return 0
  }
}

function applyAutoIncrementIfNeeded() {
  if (!timeSyncConfig.autoIncrementEnabled) return
  const inc = Number(timeSyncConfig.autoIncrementSeconds) || 0
  if (!inc) return

  const today = getTodayStr()
  const last = timeSyncConfig.lastIncrementDate
  const d = last ? daysBetween(last, today) : 0

  if (!last) {
    // 首次开启时，记录当日为基线，不进行增量
    timeSyncConfig.lastIncrementDate = today
    try {
      setConfig('time.lastIncrementDate', today)
    } catch {}
    return
  }

  if (d > 0) {
    const added = d * inc
    const nextVal = (Number(timeSyncConfig.manualOffsetSeconds) || 0) + added
    timeSyncConfig.manualOffsetSeconds = nextVal
    timeSyncConfig.lastIncrementDate = today
    try {
      setManualOffset(nextVal)
      setConfig('time.manualOffsetSeconds', nextVal)
      setConfig('time.lastIncrementDate', today)
      emitTimeSyncChanged()
    } catch (e) {
      appLogger.error('写入自动增量配置失败', e as Error)
    }
  }
}

function scheduleNextAutoIncrement() {
  if (autoIncTimer) {
    clearTimeout(autoIncTimer)
    autoIncTimer = null
  }
  // 计算距离次日 00:00:10 的毫秒数
  const now = new Date()
  const next = new Date(now)
  next.setHours(24, 0, 10, 0) // 明天 00:00:10，给 10s 缓冲
  const delay = Math.max(10_000, next.getTime() - now.getTime())
  autoIncTimer = setTimeout(() => {
    try {
      applyAutoIncrementIfNeeded()
    } catch {}
    // 递归安排下一次
    scheduleNextAutoIncrement()
  }, delay)
}

// 获取当前校准时间
export { getSyncedTime, getTimeSyncInfo }

export function getCurrentTimeMs(): number {
  try {
    return getSyncedTime()
  } catch {
    return Date.now()
  }
}

export function isTimeSyncInitialized(): boolean {
  return initialized
}

function emitTimeSyncChanged() {
  const info = getTimeSyncInfo()
  try {
    const windows = BrowserWindow.getAllWindows()
    if (!windows.length) return
    windows.forEach((win) => {
      try {
        win.webContents.send('time:sync-changed', info)
      } catch {}
    })
  } catch {}
}
