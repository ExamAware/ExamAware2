import { app, BrowserWindow } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { createMainWindow } from './windows/mainWindow'
import { createEditorWindow } from './windows/editorWindow'
import { registerIpcHandlers } from './ipcHandlers'
import { registerTimeSyncHandlers } from './ipcHandlers/timeServiceHandler'
import { initializeTimeSync } from './ntpService/timeService'

// 用于存储启动时的文件路径
let fileToOpen: string | null = null

app.whenReady().then(async () => {
  electronApp.setAppUserModelId('org.examaware')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  registerIpcHandlers()
  registerTimeSyncHandlers()

  // 初始化时间同步服务
  initializeTimeSync()

  // 如果有文件要打开，直接打开编辑器
  if (fileToOpen) {
    createEditorWindow(fileToOpen)
    fileToOpen = null
  } else {
    createMainWindow()
  }

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})

// 处理打开文件的请求（macOS）
app.on('open-file', (event, path) => {
  event.preventDefault()
  if (path.endsWith('.exam.json') || path.endsWith('.json')) {
    if (app.isReady()) {
      createEditorWindow(path)
    } else {
      fileToOpen = path
    }
  }
})

// 处理从命令行打开文件（Windows/Linux）
if (process.argv.length > 1) {
  const filePath = process.argv[process.argv.length - 1]
  if (filePath.endsWith('.exam.json') || filePath.endsWith('.json')) {
    fileToOpen = filePath
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
