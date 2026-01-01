import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'
import {
  buildTitleBarOverlay,
  applyTitleBarOverlay,
  attachTitleBarOverlayLifecycle
} from './titleBarOverlay'

export function createCastWindow(): BrowserWindow {
  return windowManager.open(({ commonOptions }) => {
    const options: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 400,
      height: 300,
      alwaysOnTop: true,
      ...(process.platform !== 'linux'
        ? {
            titleBarStyle: 'hidden' as const,
            titleBarOverlay: buildTitleBarOverlay()
          }
        : {}),
      title: '共享与投送'
    }

    return {
      id: 'cast',
      route: 'cast',
      options,
      setup(win) {
        applyTitleBarOverlay(win)
        attachTitleBarOverlayLifecycle(win)
      }
    }
  }) as unknown as BrowserWindow
}
