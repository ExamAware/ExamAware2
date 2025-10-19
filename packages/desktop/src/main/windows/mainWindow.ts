import { BrowserWindow } from 'electron'
import { is } from '@electron-toolkit/utils'
import { windowManager } from './windowManager'

export function createMainWindow(): BrowserWindow {
  return windowManager.open(({ commonOptions }) => ({
    id: 'main',
    route: 'mainpage',
    options: {
      ...commonOptions(),
      width: 720,
      height: 480,
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
      // 自动打开开发者工具（仅开发环境）
      // if (is.dev) {
      // win.webContents.openDevTools()
      // }
    }
  })) as unknown as BrowserWindow
}
