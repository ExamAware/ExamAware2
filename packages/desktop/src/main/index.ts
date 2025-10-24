import { app, BrowserWindow } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { createMainWindow } from './windows/mainWindow'
import { createEditorWindow } from './windows/editorWindow'
import { windowManager } from './windows/windowManager'
import { registerIpcHandlers } from './ipcHandlers'
import { registerTimeSyncHandlers } from './ipcHandlers/timeServiceHandler'
import { initializeTimeSync } from './ntpService/timeService'
import { createMainContext } from './runtime/context'

// 用于存储启动时的文件路径
let fileToOpen: string | null = null

app.whenReady().then(async () => {
  const { ctx: _mainCtx, dispose: disposeMainCtx } = createMainContext()
  windowManager.setContext(_mainCtx)
  electronApp.setAppUserModelId('org.examaware')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  const disposeIpc = registerIpcHandlers(_mainCtx)
  const disposeTimeIpc = registerTimeSyncHandlers()

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

  // optional: clean up on quit
  app.on('before-quit', () => {
    try { disposeTimeIpc() } catch {}
    try { disposeIpc() } catch {}
    try { disposeMainCtx() } catch {}
  })
})

// 处理打开文件的请求（macOS）
app.on('open-file', (event, path) => {
  event.preventDefault()
  if (path.endsWith('.ea2') || path.endsWith('.json')) {
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
  if (filePath.endsWith('.ea2') || filePath.endsWith('.json')) {
    fileToOpen = filePath
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
