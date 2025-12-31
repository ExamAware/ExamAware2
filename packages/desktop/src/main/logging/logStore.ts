import { BrowserWindow } from 'electron'
import { appLogger, logWithLevel, type LogLevel as WinstonLevel } from './winstonLogger'

export type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug'

export interface LogEntry {
  id: number
  timestamp: number
  level: LogLevel
  process: 'main' | 'renderer'
  windowId?: number
  message: string
  stack?: string
  source?: string
}

const MAX_LOGS = 2000
let counter = 1
const logs: LogEntry[] = []

export function addLog(entry: Omit<LogEntry, 'id'>) {
  const e: LogEntry = { id: counter++, ...entry }
  logs.push(e)
  if (logs.length > MAX_LOGS) {
    logs.splice(0, logs.length - MAX_LOGS)
  }
  try {
    const mapped = (entry.level === 'log' ? 'info' : entry.level) as WinstonLevel
    logWithLevel(mapped, entry.message, {
      process: entry.process,
      windowId: entry.windowId,
      source: entry.source,
      stack: entry.stack
    })
  } catch {}
  // 广播到所有窗口
  BrowserWindow.getAllWindows().forEach((w) => {
    try {
      w.webContents.send('logs:push', e)
    } catch {}
  })
}

export function getLogs(): LogEntry[] {
  return logs.slice()
}

export function clearLogs() {
  logs.splice(0, logs.length)
}
