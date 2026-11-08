import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'
import {
  applyTitleBarOverlay,
  attachTitleBarOverlayLifecycle,
  buildTitleBarOverlay
} from './titleBarOverlay'

export function createQuickStartWindow(): BrowserWindow {
  return windowManager.open(({ commonOptions }) => ({
    id: 'quick-start',
    route: 'quick-start',
    options: {
      ...commonOptions(),
      width: 1120,
      height: 780,
      minWidth: 900,
      minHeight: 640,
      ...(process.platform !== 'linux'
        ? {
            titleBarStyle: 'hidden' as const,
            titleBarOverlay: buildTitleBarOverlay()
          }
        : {}),
      title: '快速开始'
    },
    setup(win) {
      applyTitleBarOverlay(win)
      attachTitleBarOverlayLifecycle(win)
    }
  }))
}
