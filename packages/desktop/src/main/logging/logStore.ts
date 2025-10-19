import { BrowserWindow } from 'electron'

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
  // 广播到所有窗口
  BrowserWindow.getAllWindows().forEach((w) => {
    try { w.webContents.send('logs:push', e) } catch {}
  })
}

export function getLogs(): LogEntry[] {
  return logs.slice()
}

export function clearLogs() {
  logs.splice(0, logs.length)
}
