import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'
import {
  buildTitleBarOverlay,
  applyTitleBarOverlay,
  attachTitleBarOverlayLifecycle
} from './titleBarOverlay'

export function createSettingsWindow(page?: string): BrowserWindow {
  return windowManager.open(({ commonOptions }) => {
    const options: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 920,
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
  }) as unknown as BrowserWindow
}
