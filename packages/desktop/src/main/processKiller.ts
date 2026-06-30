import { execFile } from 'child_process'
import { promisify } from 'util'
import { appLogger } from './logging/winstonLogger'
import { getConfig, onConfigChanged } from './configStore'

const execFileAsync = promisify(execFile)

const DEFAULT_PROCESS_NAME = 'ClassIsland.Desktop.exe'
const DEFAULT_INTERVAL_MINUTES = 10

export interface KillerConfig {
  enabled: boolean
  processName: string
  intervalMinutes: number
}

function getKillerConfig(): KillerConfig {
  try {
    return {
      enabled: Boolean(getConfig('behavior.classialandKiller.enabled', true)),
      processName: String(
        getConfig('behavior.classialandKiller.processName', DEFAULT_PROCESS_NAME)
      ),
      intervalMinutes: Math.max(
        1,
        Math.round(
          Number(getConfig('behavior.classialandKiller.intervalMinutes', DEFAULT_INTERVAL_MINUTES))
        )
      )
    }
  } catch (e) {
    appLogger.error('[processKiller] read config failed', e as Error)
    return {
      enabled: true,
      processName: DEFAULT_PROCESS_NAME,
      intervalMinutes: DEFAULT_INTERVAL_MINUTES
    }
  }
}

async function processExistsWindows(name: string): Promise<boolean> {
  try {
    const { stdout } = await execFileAsync('tasklist', [
      '/FI',
      `IMAGENAME eq ${name}`,
      '/FO',
      'CSV',
      '/NH'
    ])
    const lower = name.toLowerCase()
    return stdout.split('\n').some((line) => line.toLowerCase().includes(lower))
  } catch (e) {
    return false
  }
}

async function killProcessWindows(name: string): Promise<boolean> {
  try {
    await execFileAsync('taskkill', ['/F', '/IM', name])
    return true
  } catch (e) {
    appLogger.warn('[processKiller] taskkill failed', e as Error)
    return false
  }
}

async function processExistsUnix(name: string): Promise<boolean> {
  try {
    // 同时尝试精确匹配与忽略大小写，兼容带/不带 .exe 后缀的进程名
    const candidates = [name, name.replace(/\.exe$/i, '')]
    for (const candidate of candidates) {
      try {
        await execFileAsync('pgrep', ['-i', '-x', candidate])
        return true
      } catch {
        // ignore
      }
    }
    return false
  } catch (e) {
    return false
  }
}

async function killProcessUnix(name: string): Promise<boolean> {
  try {
    const candidates = [name, name.replace(/\.exe$/i, '')]
    for (const candidate of candidates) {
      try {
        await execFileAsync('pkill', ['-9', '-x', candidate])
        return true
      } catch {
        // ignore
      }
    }
    return false
  } catch (e) {
    appLogger.warn('[processKiller] pkill failed', e as Error)
    return false
  }
}

export async function detectProcess(name: string): Promise<boolean> {
  if (process.platform === 'win32') {
    return processExistsWindows(name)
  }
  return processExistsUnix(name)
}

export async function killProcess(name: string): Promise<boolean> {
  if (process.platform === 'win32') {
    return killProcessWindows(name)
  }
  return killProcessUnix(name)
}

export async function checkAndKillOnce(): Promise<{ found: boolean; killed: boolean }> {
  const { enabled, processName } = getKillerConfig()
  if (!enabled || !processName.trim()) {
    return { found: false, killed: false }
  }

  const found = await detectProcess(processName)
  if (!found) {
    return { found: false, killed: false }
  }

  appLogger.info('[processKiller] detected process, killing:', processName)
  const killed = await killProcess(processName)
  if (killed) {
    appLogger.info('[processKiller] killed:', processName)
  } else {
    appLogger.warn('[processKiller] failed to kill:', processName)
  }
  return { found: true, killed }
}

let killerTimer: NodeJS.Timeout | null = null

export function startProcessKillerLoop() {
  stopProcessKillerLoop()

  const cfg = getKillerConfig()
  if (!cfg.enabled) {
    return
  }

  // 启动时立即执行一次
  void checkAndKillOnce()

  const intervalMs = cfg.intervalMinutes * 60 * 1000
  killerTimer = setInterval(() => {
    const current = getKillerConfig()
    if (!current.enabled) {
      stopProcessKillerLoop()
      return
    }
    void checkAndKillOnce()
  }, intervalMs)

  // 允许 Node 事件循环不阻塞退出
  if (killerTimer.unref) {
    killerTimer.unref()
  }
}

export function stopProcessKillerLoop() {
  if (killerTimer) {
    clearInterval(killerTimer)
    killerTimer = null
  }
}

export async function killNow(): Promise<{ found: boolean; killed: boolean }> {
  return checkAndKillOnce()
}

// 配置变更时自动重启/停止循环，使开关和进程名修改即时生效
let configWatcherInitialized = false
export function ensureProcessKillerConfigWatcher() {
  if (configWatcherInitialized) return
  configWatcherInitialized = true
  onConfigChanged((cfg) => {
    const current = cfg?.behavior?.classialandKiller
    const enabled = Boolean(current?.enabled ?? true)
    if (!enabled) {
      stopProcessKillerLoop()
      return
    }
    // 启用时重新启动循环，确保进程名/间隔等配置生效
    startProcessKillerLoop()
  })
}
