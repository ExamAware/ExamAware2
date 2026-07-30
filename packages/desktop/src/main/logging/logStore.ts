import { BrowserWindow } from 'electron'
import { appLogger, logWithLevel, type LogLevel as WinstonLevel } from './logger'
import type { LogEntry, LogLevel } from '../../shared/types/desktop'
import { ipcChannels } from '../../shared/ipc/channels'
import { sendIpcEvent } from '../../shared/ipc/sender'

export type { LogEntry, LogLevel } from '../../shared/types/desktop'

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
      sendIpcEvent(w.webContents, ipcChannels.logging.logAdded, e)
    } catch {}
  })
}

export function getLogs(): LogEntry[] {
  return logs.slice()
}

export function clearLogs() {
  logs.splice(0, logs.length)
}
