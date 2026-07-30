import { BrowserWindow } from 'electron'
import { ipcChannels } from '../../shared/ipc/channels'
import { addLog, clearLogs, getLogs } from './logStore'
import {
  clearLogFiles,
  getLoggingConfig,
  appLogger,
  openLogFolder,
  setLoggingConfig
} from './logger'
import { IpcHandle, IpcOn } from '../ipc/ipcDecorators'

export class LoggingIpcController {
  @IpcOn(ipcChannels.logging.pushRendererLog)
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

  @IpcHandle(ipcChannels.logging.getLogs)
  getLogStore() {
    return getLogs()
  }

  @IpcOn(ipcChannels.logging.clearLogs)
  clearLogStore() {
    clearLogs()
  }

  @IpcHandle(ipcChannels.logging.getConfig)
  getLoggingConfig() {
    return getLoggingConfig()
  }

  @IpcHandle(ipcChannels.logging.setConfig)
  async updateLoggingConfig(_event: Electron.IpcMainInvokeEvent, cfg: any) {
    await setLoggingConfig(cfg)
    return getLoggingConfig()
  }

  @IpcHandle(ipcChannels.logging.openDirectory)
  openLogFolder() {
    return openLogFolder()
  }

  @IpcHandle(ipcChannels.logging.clearFiles)
  clearLogFiles() {
    return clearLogFiles()
  }
}
