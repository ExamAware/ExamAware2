import { ipcMain, dialog, BrowserWindow } from 'electron'
import { createEditorWindow } from '../windows/editorWindow'
import { createPlayerWindow } from '../windows/playerWindow'
import { fileApi } from '../fileUtils'

// 存储当前加载的配置数据
let currentConfigData: string | null = null

// 导出函数以供其他模块使用
export function setCurrentConfigData(data: string) {
  console.log('Setting config data via function:', data)
  currentConfigData = data
}

export function getCurrentConfigData(): string | null {
  return currentConfigData
}

export function registerIpcHandlers(): void {
  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  // Handle get current config data
  ipcMain.handle('get-config', () => {
    const config = getCurrentConfigData()
    console.log('get-config requested, returning:', config)
    return config
  })

  // Handle set config data (called from playerWindow)
  ipcMain.on('set-config', (_event, data: string) => {
    console.log('Setting config data via IPC:', data)
    setCurrentConfigData(data)
  })

  // Handle open editor window request
  ipcMain.on('open-editor-window', () => {
    createEditorWindow()
  })

  ipcMain.on('open-player-window', (_event, configPath) => {
    createPlayerWindow(configPath)
  })

  // 窗口控制处理程序
  ipcMain.on('window-minimize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      window.minimize()
    }
  })

  ipcMain.on('window-close', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      window.close()
    }
  })

  ipcMain.on('window-maximize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      if (window.isMaximized()) {
        window.unmaximize()
      } else {
        window.maximize()
      }
    }
  })

  // 检查窗口是否最大化
  ipcMain.handle('window-is-maximized', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    return window ? window.isMaximized() : false
  })

  // 监听窗口状态变化事件
  const setupWindowStateListeners = (window: BrowserWindow) => {
    window.on('maximize', () => {
      window.webContents.send('window-maximize')
    })

    window.on('unmaximize', () => {
      window.webContents.send('window-unmaximize')
    })
  }

  // 为新创建的编辑器窗口设置状态监听
  ipcMain.on('setup-window-listeners', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      setupWindowStateListeners(window)
    }
  })

  ipcMain.handle('select-file', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'ExamAware 档案文件', extensions: ['exam.json'] },
        { name: 'JSON 文件', extensions: ['json'] },
        { name: '所有文件', extensions: ['*'] }
      ]
    })
    if (result.canceled) {
      return null
    } else {
      return result.filePaths[0]
    }
  })

  ipcMain.handle('read-file', async (_event, filePath: string) => {
    try {
      const content = await fileApi.readFile(filePath)
      return content
    } catch (error) {
      console.error('Error reading file:', error)
      return null
    }
  })

  ipcMain.handle('save-file', async (_, filePath: string, content: string) => {
    try {
      await fileApi.writeFile(filePath, content)
      return true
    } catch (error) {
      console.error('Error saving file:', error)
      return false
    }
  })

  ipcMain.handle('save-file-dialog', async () => {
    const result = await dialog.showSaveDialog({
      filters: [
        { name: 'ExamAware 档案文件', extensions: ['exam.json'] },
        { name: 'JSON 文件', extensions: ['json'] },
        { name: '所有文件', extensions: ['*'] }
      ],
      defaultPath: 'untitled.exam.json'
    })
    if (result.canceled) {
      return null
    } else {
      return result.filePath
    }
  })

  ipcMain.handle('open-file-dialog', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'ExamAware 档案文件', extensions: ['exam.json'] },
        { name: 'JSON 文件', extensions: ['json'] },
        { name: '所有文件', extensions: ['*'] }
      ]
    })
    if (result.canceled) {
      return null
    } else {
      return result.filePaths[0]
    }
  })
}
