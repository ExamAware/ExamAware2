import { app, BrowserWindow } from 'electron'
import { windowManager } from './windowManager'
import {
  buildTitleBarOverlay,
  applyTitleBarOverlay,
  attachTitleBarOverlayLifecycle
} from './titleBarOverlay'
import { appLogger } from '../logging/winstonLogger'

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
        appLogger.debug('[mainWindow]', ...args)
      }
      const FORCE_CLOSE_FLAG = '__ea_force_close__'
      log('setup start; isDestroyed?', win.isDestroyed())
      applyTitleBarOverlay(win)
      attachTitleBarOverlayLifecycle(win)
      if (process.platform === 'darwin') {
        const ensureDockVisible = (() => {
          let lastInvoke = 0
          return () => {
            try {
              const dock = app.dock
              if (!dock || typeof dock.show !== 'function') return
              const now = Date.now()
              // 避免频繁调用导致窗口聚焦/失焦循环
              if (now - lastInvoke < 1500) return
              lastInvoke = now
              dock.show()
            } catch {}
          }
        })()
        ensureDockVisible()
        win.on('show', ensureDockVisible)
        win.on('restore', ensureDockVisible)
      }
      const isEditorRouteActive = () => {
        try {
          const url = win.webContents.getURL() || ''
          const hashIndex = url.indexOf('#')
          if (hashIndex === -1) return false
          const hash = url.slice(hashIndex + 1)
          const route = hash.startsWith('/') ? hash.slice(1) : hash
          return route.startsWith('editor')
        } catch {
          return false
        }
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
        if ((win as any)[FORCE_CLOSE_FLAG]) {
          delete (win as any)[FORCE_CLOSE_FLAG]
          return
        }
        const shouldConfirmWithEditor = process.platform === 'darwin' && isEditorRouteActive()

        if (shouldConfirmWithEditor) {
          e.preventDefault()
          log('event: close intercepted -> request renderer confirmation')
          if (!win.isDestroyed()) {
            win.webContents.send('editor:request-close')
          }
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
