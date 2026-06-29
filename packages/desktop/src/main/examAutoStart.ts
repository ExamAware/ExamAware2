import { app } from 'electron'
import { parseExamConfig, validateExamConfig, getSortedExamInfos } from '@dsz-examaware/core'
import type { ExamConfig } from '@dsz-examaware/core'
import { getConfig, setConfig, onConfigChanged } from './configStore'
import { getCurrentTimeMs } from './ntpService/timeService'
import { getSharedConfigPayload, loadPersistedSharedConfig } from './state/sharedConfigStore'
import { getSystemAutoStart, setSystemAutoStart } from './system/autoStart'
import { appLogger } from './logging/winstonLogger'

const CHECK_INTERVAL_MS = 60 * 1000 // 每分钟检查一次
const PRE_EXAM_MINUTES = 15
const PRE_EXAM_MS = PRE_EXAM_MINUTES * 60 * 1000

let checkTimer: NodeJS.Timeout | null = null
let configUnsubscribe: (() => void) | null = null

export function isExamAutoStartEnabled(): boolean {
  return getConfig('behavior.examAutoStart.enabled', true)
}

function getCurrentExamConfig(): ExamConfig | null {
  const payload = getSharedConfigPayload()
  if (!payload) return null
  const config = parseExamConfig(payload)
  if (!config || !validateExamConfig(config)) return null
  return config
}

export interface ExamAutoStartEvaluation {
  shouldEnable: boolean
  reason: string
  firstStartMs?: number
  lastEndMs?: number
}

export function evaluateExamAutoStart(): ExamAutoStartEvaluation {
  if (!isExamAutoStartEnabled()) {
    return { shouldEnable: getSystemAutoStart(), reason: '考试关联自启已关闭' }
  }

  const config = getCurrentExamConfig()
  if (!config || !config.examInfos || config.examInfos.length === 0) {
    return { shouldEnable: false, reason: '没有可用的考试配置' }
  }

  const sorted = getSortedExamInfos(config)
  const firstStart = new Date(sorted[0].start).getTime()
  const lastEnd = new Date(sorted[sorted.length - 1].end).getTime()

  if (!Number.isFinite(firstStart) || !Number.isFinite(lastEnd) || firstStart >= lastEnd) {
    return { shouldEnable: false, reason: '考试时间无效' }
  }

  const now = getCurrentTimeMs()
  const windowStart = firstStart - PRE_EXAM_MS
  const windowEnd = lastEnd - PRE_EXAM_MS

  // 考前 15 分钟（含）到最后一科结束前 15 分钟（不含）之间启用
  if (now >= windowStart && now < windowEnd) {
    return {
      shouldEnable: true,
      reason: '处于考试关联自启时间窗口内',
      firstStartMs: firstStart,
      lastEndMs: lastEnd
    }
  }

  const reason =
    now < windowStart
      ? '距离首场考试开始还有超过 15 分钟'
      : '最后一科考试已剩余不足 15 分钟或已结束'
  return {
    shouldEnable: false,
    reason,
    firstStartMs: firstStart,
    lastEndMs: lastEnd
  }
}

export function applyExamAutoStart(): boolean {
  const { shouldEnable, reason } = evaluateExamAutoStart()
  const current = getSystemAutoStart()

  // 同步配置项，让设置界面显示当前状态
  try {
    if (getConfig('behavior.autoStart', false) !== shouldEnable) {
      setConfig('behavior.autoStart', shouldEnable)
    }
  } catch (e) {
    appLogger.warn('[examAutoStart] sync config failed', e as Error)
  }

  if (current !== shouldEnable) {
    const ok = setSystemAutoStart(shouldEnable)
    if (ok) {
      appLogger.info(`[examAutoStart] 已将系统开机自启设为 ${shouldEnable}，原因：${reason}`)
    } else {
      appLogger.warn(`[examAutoStart] 设置系统开机自启失败，目标：${shouldEnable}`)
    }
  } else {
    appLogger.debug(`[examAutoStart] 系统开机自启状态无需变更：${shouldEnable}，原因：${reason}`)
  }

  return shouldEnable
}

export function startExamAutoStartLoop(): void {
  stopExamAutoStartLoop()

  // 监听设置开关变化
  if (!configUnsubscribe) {
    configUnsubscribe = onConfigChanged((cfg) => {
      const enabled = cfg?.behavior?.examAutoStart?.enabled
      if (enabled === false) {
        stopExamAutoStartLoop()
      } else if (enabled === true && !checkTimer) {
        applyExamAutoStart()
        startInterval()
      }
    })
  }

  if (!isExamAutoStartEnabled()) {
    return
  }

  applyExamAutoStart()
  startInterval()
}

function startInterval(): void {
  if (checkTimer) return
  checkTimer = setInterval(() => {
    if (!isExamAutoStartEnabled()) {
      stopExamAutoStartLoop()
      return
    }
    applyExamAutoStart()
  }, CHECK_INTERVAL_MS)
  if (checkTimer.unref) {
    checkTimer.unref()
  }
}

export function stopExamAutoStartLoop(): void {
  if (checkTimer) {
    clearInterval(checkTimer)
    checkTimer = null
  }
}

export function disposeExamAutoStart(): void {
  stopExamAutoStartLoop()
  if (configUnsubscribe) {
    configUnsubscribe()
    configUnsubscribe = null
  }
}

/**
 * 启动时检查。若通过开机自启启动且当前不再需要自启，则取消并退出应用。
 */
export function runExamAutoStartBootCheck(isAutoStartLaunch: boolean): boolean {
  // 确保能读取到上次使用的考试配置
  loadPersistedSharedConfig()

  const { shouldEnable, reason } = evaluateExamAutoStart()

  if (shouldEnable) {
    appLogger.info(`[examAutoStart] 启动检查：保持开机自启，原因：${reason}`)
    // 确保系统状态与评估结果一致
    applyExamAutoStart()
    return true
  }

  appLogger.info(`[examAutoStart] 启动检查：取消开机自启，原因：${reason}`)
  setSystemAutoStart(false)
  try {
    setConfig('behavior.autoStart', false)
  } catch {}

  if (isAutoStartLaunch) {
    appLogger.info('[examAutoStart] 本次为开机自启且已无后续考试，应用将退出')
    // 延迟退出，让日志落盘
    setTimeout(() => {
      app.quit()
    }, 500)
  }

  return false
}
