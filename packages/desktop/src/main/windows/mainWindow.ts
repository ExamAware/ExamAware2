import { app, BrowserWindow } from 'electron'
import { windowManager } from './windowManager'

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
            titleBarOverlay: { color: 'rgba(0,0,0,0)', height: 35, symbolColor: '#fff' }
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
      win.setAspectRatio(720 / 480)
      win.setMinimumSize(720, 480)
      // 关闭窗口时仅隐藏，不退出程序（用户从托盘退出）
      win.on('close', (e) => {
        // 当明确退出（例如 托盘“退出”或 Cmd+Q）时放行
        if ((app as any).isQuitting) return
        e.preventDefault()
        win.hide()
      })
      // 自动打开开发者工具（仅开发环境）
      // if (is.dev) {
      // win.webContents.openDevTools()
      // }
    }
  })) as unknown as BrowserWindow
}
