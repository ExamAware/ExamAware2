import { BrowserWindow, shell } from 'electron'
import * as path from 'path'
import { is } from '@electron-toolkit/utils'

export function createMainWindow(): BrowserWindow {
  const mainWindow = new BrowserWindow({
    width: 720,
    height: 480,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon: path.join(__dirname, '../../resources/icon.png') } : {}),
    webPreferences: {
  preload: path.join(__dirname, '../preload/index.mjs'),
      sandbox: false,
      nodeIntegration: true
    }
  })

  mainWindow.setAspectRatio(720 / 480)
  mainWindow.setMinimumSize(720, 480)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  const route = 'mainpage'

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    const url = process.env['ELECTRON_RENDERER_URL']
    mainWindow.loadURL(`${url}#/${route}`)
  } else {
    mainWindow.loadFile(path.resolve(__dirname, '../renderer/index.html'), { hash: route })
  }

  return mainWindow
}
