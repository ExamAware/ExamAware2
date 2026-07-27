import { BrowserWindow } from 'electron'
import { addLog, clearLogs, getLogs } from '../logging/logStore'
import {
  clearLogFiles,
  getLoggingConfig,
  appLogger,
  openLogFolder,
  setLoggingConfig
} from '../logging/winstonLogger'
import { IpcHandle, IpcOn } from './decorators'

export class LoggingIpcController {
  @IpcOn('logs:renderer')
  handleRendererLog(
    event: Electron.IpcMainEvent,
    payload: { level: string; message: string; stack?: string; source?: string }
  ) {
    const window = BrowserWindow.fromWebContents(event.sender)
    const level = (['log', 'info', 'warn', 'error', 'debug'] as any).includes(payload.level)
      ? (payload.level as 'log' | 'info' | 'warn' | 'error' | 'debug')
      : 'log'
    addLog({
      timestamp: Date.now(),
      level,
      process: 'renderer',
      windowId: window?.id,
      message: payload.message,
      stack: payload.stack,
      source: payload.source
    })
    if (level === 'error' || level === 'warn') {
      const message = `[renderer:${window?.id ?? 'unknown'}] ${payload.message}`
      appLogger[level](message, payload.stack ? { stack: payload.stack } : undefined)
    }
  }

  @IpcHandle('logs:get')
  getLogStore() {
    return getLogs()
  }

  @IpcOn('logs:clear')
  clearLogStore() {
    clearLogs()
  }

  @IpcHandle('logging:get-config')
  getLoggingConfig() {
    return getLoggingConfig()
  }

  @IpcHandle('logging:set-config')
  async updateLoggingConfig(_event: Electron.IpcMainInvokeEvent, cfg: any) {
    await setLoggingConfig(cfg)
    return getLoggingConfig()
  }

  @IpcHandle('logging:open-dir')
  openLogFolder() {
    return openLogFolder()
  }

  @IpcHandle('logging:clear-files')
  clearLogFiles() {
    return clearLogFiles()
  }
}
