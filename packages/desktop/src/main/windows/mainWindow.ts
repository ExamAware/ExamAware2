import { BrowserWindow } from 'electron'
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
    }
  })) as unknown as BrowserWindow
}
