import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'
import {
  buildTitleBarOverlay,
  applyTitleBarOverlay,
  attachTitleBarOverlayLifecycle
} from './titleBarOverlay'

export function createEditorWindow(filePath?: string): BrowserWindow {
  return windowManager.open(({ commonOptions }) => {
    const winOptions: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 920,
      height: 700
    }

    if (process.platform !== 'linux') {
      winOptions.titleBarStyle = 'hidden'
      ;(winOptions as any).titleBarOverlay = {
        ...buildTitleBarOverlay()
      }
      // macOS 交通灯位置可选
      if (process.platform === 'darwin') {
        ;(winOptions as any).trafficLightPosition = { x: 10, y: 10 }
      }
    }

    return {
      id: 'editor',
      route: 'editor',
      options: winOptions,
      setup(win) {
        applyTitleBarOverlay(win)
        attachTitleBarOverlayLifecycle(win)
        const FORCE_CLOSE_FLAG = '__ea_force_close__'

        // Intercept close to ask renderer; renderer will call back with window-close IPC when confirmed
        win.on('close', (e) => {
          if ((win as any)[FORCE_CLOSE_FLAG]) {
            delete (win as any)[FORCE_CLOSE_FLAG]
            return
          }
          e.preventDefault()
          try {
            win.webContents.send('editor:request-close')
          } catch {}
        })

        win.on('ready-to-show', () => {
          if (filePath) {
            win.webContents.send('open-file-at-startup', filePath)
          }
        })
      }
    }
  }) as unknown as BrowserWindow
}
