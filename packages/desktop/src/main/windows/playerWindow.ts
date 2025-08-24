import { BrowserWindow, shell, ipcMain } from 'electron'
import * as path from 'path'
import * as fs from 'fs'
import { is } from '@electron-toolkit/utils'

// 导入配置数据设置函数
import { setCurrentConfigData } from '../ipcHandlers'

export function createPlayerWindow(configPath: string): BrowserWindow {
  const playerWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: true,
    kiosk: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.mjs'),
      sandbox: false
    }
  })

  playerWindow.setAlwaysOnTop(true, 'screen-saver')

  let allowClose = false
  const handleClose = (e: Electron.Event) => {
    if (!allowClose) {
      e.preventDefault()
      playerWindow.focus()
      return false
    }
    return true
  }
  playerWindow.on('close', handleClose)

  const exitChannel = 'player-window-exit'
  const onRendererExit = (event: Electron.IpcMainEvent) => {
    if (event.sender === playerWindow.webContents) {
      allowClose = true
      playerWindow.close()
    }
  }
  ipcMain.on(exitChannel, onRendererExit)

  playerWindow.on('ready-to-show', () => {
    playerWindow.show()
  })

  playerWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  playerWindow.webContents.on('before-input-event', (event, input) => {
    const key = (input.key || '').toLowerCase()
    const ctrlOrCmd = input.control || input.meta
    const alt = input.alt
    const shift = input.shift

    const block =
      // 退出/关闭/刷新
      (ctrlOrCmd && (key === 'q' || key === 'w' || key === 'r')) ||
      // 开发者工具
      (ctrlOrCmd && shift && key === 'i') ||
      // 最小化
      (ctrlOrCmd && key === 'm') ||
      // 切换全屏
      key === 'f11' ||
      // Windows 下的 Alt+F4（跨平台防御）
      (alt && key === 'f4')

    if (block) {
      event.preventDefault()
    }
  })

  const route = 'playerview'

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    const url = process.env['ELECTRON_RENDERER_URL']
    playerWindow.loadURL(`${url}#/${route}`)
  } else {
    playerWindow.loadFile(path.resolve(__dirname, '../renderer/index.html'), { hash: route })
  }

  fs.readFile(configPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Failed to read config file:', err)
      return
    }

    // 通知主进程存储配置数据
    setCurrentConfigData(data)

    setTimeout(() => {
      playerWindow.webContents.send('load-config', data)
      console.log('Config file loaded and sent to renderer:', data)
    }, 1000)
  })

  // 清理事件监听，避免内存泄漏
  playerWindow.on('closed', () => {
    ipcMain.off(exitChannel, onRendererExit)
  })

  return playerWindow
}
