import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'
import {
  buildTitleBarOverlay,
  applyTitleBarOverlay,
  attachTitleBarOverlayLifecycle
} from './titleBarOverlay'

export function createPluginStoreWindow(): BrowserWindow {
  return windowManager.open(({ commonOptions }) => {
    const options: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 1120,
      height: 780,
      minWidth: 960,
      minHeight: 640,
      ...(process.platform !== 'linux'
        ? {
            titleBarStyle: 'hidden' as const,
            titleBarOverlay: buildTitleBarOverlay()
          }
        : {}),
      title: '插件商店'
    }

    return {
      id: 'plugin-store',
      route: 'plugin-store',
      options,
      setup(win) {
        applyTitleBarOverlay(win)
        attachTitleBarOverlayLifecycle(win)
      }
    }
  }) as unknown as BrowserWindow
}
