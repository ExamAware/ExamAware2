import { BrowserWindow } from 'electron'
import { ipcChannels } from '../../shared/ipc/channels'
import { sendIpcEvent } from '../../shared/ipc/sender'
import { windowManager } from './windowManager'
import {
  buildTitleBarOverlay,
  applyTitleBarOverlay,
  attachTitleBarOverlayLifecycle
} from './titleBarOverlay'

export function createSettingsWindow(page?: string): BrowserWindow {
  const existing = windowManager.get('settings')
  const window = windowManager.open(({ commonOptions }) => {
    const options: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 1280,
      height: 700,
      ...(process.platform !== 'linux'
        ? {
            titleBarStyle: 'hidden' as const,
            titleBarOverlay: buildTitleBarOverlay()
          }
        : {}),
      title: '应用设置'
    }

    return {
      id: 'settings',
      route: page ? `settings/${page}` : 'settings',
      options,
      setup(win) {
        applyTitleBarOverlay(win)
        attachTitleBarOverlayLifecycle(win)
      }
    }
  })
  if (page && existing && !existing.isDestroyed()) {
    sendIpcEvent(window.webContents, ipcChannels.windows.settingsNavigate, page)
  }
  return window
}
