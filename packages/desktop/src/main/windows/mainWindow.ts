import { app, BrowserWindow } from 'electron'
import { windowManager } from './windowManager'
import {
  buildTitleBarOverlay,
  applyTitleBarOverlay,
  attachTitleBarOverlayLifecycle
} from './titleBarOverlay'

export function createMainWindow(): BrowserWindow {
  return windowManager.open(({ commonOptions }) => ({
    id: 'main',
    route: 'mainpage',
    options: {
      ...commonOptions(),
      width: 720,
      height: 480,
      // 使用系统自带窗口控制按钮，隐藏默认标题栏并启用 overlay（Windows/macOS）
      ...(process.platform !== 'linux'
        ? {
            titleBarStyle: 'hidden' as const,
            titleBarOverlay: buildTitleBarOverlay()
          }
        : {}),
      webPreferences: {
        ...commonOptions().webPreferences,
        nodeIntegration: true
      },
      ...(process.platform === 'linux'
        ? { icon: require('path').join(__dirname, '../../resources/icon.png') }
        : {})
    },
    setup(win) {
      const log = (...args: any[]) => {
        try {
          console.debug('[mainWindow]', ...args)
        } catch {}
      }
      log('setup start; isDestroyed?', win.isDestroyed())
      applyTitleBarOverlay(win)
      attachTitleBarOverlayLifecycle(win)
      if (process.platform === 'darwin') {
        const ensureDockVisible = () => {
          try {
            const dock = app.dock
            if (dock && typeof dock.show === 'function') {
              dock.show()
            }
          } catch {}
        }
        ensureDockVisible()
        win.on('show', ensureDockVisible)
        win.on('focus', ensureDockVisible)
      }
      win.setAspectRatio(720 / 480)
      win.setMinimumSize(720, 480)
      win.on('show', () => log('event: show'))
      win.on('hide', () => log('event: hide'))
      win.on('focus', () => log('event: focus'))
      win.on('blur', () => log('event: blur'))
      win.on('minimize', () => log('event: minimize'))
      win.on('restore', () => log('event: restore'))
      win.on('move', () => log('event: move', win.getBounds()))
      win.on('resize', () => log('event: resize', win.getBounds()))
      // 关闭窗口时仅隐藏，不退出程序（用户从托盘退出）
      win.on('close', (e) => {
        // 当明确退出（例如 托盘“退出”或 Cmd+Q）时放行
        if ((app as any).isQuitting) return
        if (process.platform === 'darwin') {
          return
        }
        e.preventDefault()
        log('event: close intercepted -> hide instead')
        win.hide()
      })
      // 自动打开开发者工具（仅开发环境）
      // if (is.dev) {
      // win.webContents.openDevTools()
      // }
    }
  })) as unknown as BrowserWindow
}
