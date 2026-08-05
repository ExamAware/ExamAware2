import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'
import {
  applyTitleBarOverlay,
  attachTitleBarOverlayLifecycle,
  buildTitleBarOverlay
} from './titleBarOverlay'

export function createBindControlWindow(): BrowserWindow {
  return windowManager.open(({ commonOptions }) => ({
    id: 'bind-control',
    route: 'bind-control',
    options: {
      ...commonOptions(),
      width: 640,
      height: 720,
      minWidth: 560,
      minHeight: 620,
      ...(process.platform !== 'linux'
        ? {
            titleBarStyle: 'hidden' as const,
            titleBarOverlay: buildTitleBarOverlay()
          }
        : {}),
      title: '绑定学校集控'
    },
    setup(win) {
      applyTitleBarOverlay(win)
      attachTitleBarOverlayLifecycle(win)
    }
  }))
}
