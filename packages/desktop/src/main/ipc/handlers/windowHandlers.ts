import { BrowserWindow, nativeTheme } from 'electron'
import { ipcChannels } from '../../../shared/ipc/channels'
import { sendIpcEvent } from '../../../shared/ipc/sender'
import { appLogger } from '../../logging/logger'
import { applyTitleBarOverlay, type OverlayTheme } from '../../windows/titleBarOverlay'
import { createBindControlWindow } from '../../windows/bindControlWindow'
import { createCastWindow } from '../../windows/castWindow'
import { createEditorWindow } from '../../windows/editorWindow'
import { createLogsWindow } from '../../windows/logsWindow'
import { playerSessionService } from '../../player/playerSessionService'
import { createPluginStoreWindow } from '../../windows/pluginStoreWindow'
import { createSettingsWindow } from '../../windows/settingsWindow'
import { windowManager } from '../../windows/windowManager'
import type { IpcRegistrar } from '../ipcRegistrar'

export function registerWindowHandlers(ipc: IpcRegistrar) {
  ipc.on(ipcChannels.windows.openEditor, (_event, filePath) => createEditorWindow(filePath))
  ipc.on(ipcChannels.windows.openCast, () => createCastWindow())
  ipc.on(ipcChannels.player.openWindow, (_event, configPath) => {
    void playerSessionService
      .start({ kind: 'file', path: configPath })
      .catch((error) => appLogger.error('[player] failed to open player window', error as Error))
  })
  ipc.on(ipcChannels.windows.openLogs, () => createLogsWindow())
  ipc.on(ipcChannels.windows.openSettings, (_event, page) => createSettingsWindow(page))
  ipc.on(ipcChannels.windows.openBindControl, () => createBindControlWindow())
  ipc.on(ipcChannels.windows.openPluginStore, () => createPluginStoreWindow())

  ipc.handle(
    ipcChannels.windows.open,
    async (
      _event,
      payload?: {
        id?: string
        route?: string
        options?: Electron.BrowserWindowConstructorOptions
      }
    ) => {
      const route = (payload?.route ?? '/').replace(/^#/, '')
      const id = payload?.id ?? `plugin-win-${Date.now()}`
      const window = await windowManager.open(({ commonOptions }) => ({
        id,
        route,
        options: {
          ...commonOptions(),
          ...(payload?.options ?? {}),
          show: payload?.options?.show ?? false
        }
      }))
      return { id, browserWindowId: window.id }
    }
  )
  ipc.handle(ipcChannels.windows.close, (_event, id) => {
    windowManager.close(id)
  })
  ipc.handle(ipcChannels.windows.get, (_event, id) => {
    const window = windowManager.get(id)
    return window && !window.isDestroyed() ? { id, browserWindowId: window.id } : undefined
  })
  ipc.handle(ipcChannels.windows.focus, (_event, id) => {
    const window = windowManager.get(id)
    if (!window || window.isDestroyed()) return
    if (window.isMinimized()) window.restore()
    if (!window.isVisible()) window.show()
    window.focus()
  })
  ipc.handle(
    ipcChannels.windows.getCurrentId,
    (event) => BrowserWindow.fromWebContents(event.sender)?.id
  )

  ipc.on(ipcChannels.windows.minimize, (event) => {
    BrowserWindow.fromWebContents(event.sender)?.minimize()
  })
  ipc.on(ipcChannels.windows.closeCurrent, (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (!window) return
    ;(window as any).__ea_force_close__ = true
    window.close()
  })
  ipc.on(ipcChannels.windows.toggleMaximize, (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (!window) return
    if (window.isMaximized()) window.unmaximize()
    else window.maximize()
  })
  ipc.handle(ipcChannels.windows.isMaximized, (event) => {
    return BrowserWindow.fromWebContents(event.sender)?.isMaximized() ?? false
  })
  ipc.on(ipcChannels.windows.setTitleBarTheme, (event, theme: OverlayTheme) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) applyTitleBarOverlay(window, theme)
  })
  ipc.on(ipcChannels.windows.setNativeTheme, (_event, source) => {
    if (source !== 'light' && source !== 'dark' && source !== 'system') return
    try {
      nativeTheme.themeSource = source
    } catch (error) {
      appLogger.warn('[ipc] set nativeTheme failed', error as Error)
    }
  })
  ipc.on(ipcChannels.windows.setupStateListeners, (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (!window) return
    window.on('maximize', () => sendIpcEvent(window.webContents, ipcChannels.windows.maximized))
    window.on('unmaximize', () => sendIpcEvent(window.webContents, ipcChannels.windows.unmaximized))
  })
}
