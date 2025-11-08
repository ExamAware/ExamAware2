import { app, BrowserWindow } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { createMainWindow } from './windows/mainWindow'
import { createEditorWindow } from './windows/editorWindow'
import { windowManager } from './windows/windowManager'
import { registerIpcHandlers } from './ipcHandlers'
import { registerTimeSyncHandlers } from './ipcHandlers/timeServiceHandler'
import { initializeTimeSync } from './ntpService/timeService'
import { createMainContext } from './runtime/context'
import { ensureAppTray, shouldSuppressActivate, isTrayPopoverVisible } from './tray'

// Ensure a friendly app name in development and across platforms (especially macOS About menu)
try {
  if (app.getName() !== 'ExamAware') {
    app.setName('ExamAware')
  }
  // macOS About panel info
  if (process.platform === 'darwin' && (app as any).setAboutPanelOptions) {
    ;(app as any).setAboutPanelOptions({
      applicationName: 'ExamAware',
      applicationVersion: app.getVersion()
    })
  }
} catch {}

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

  // 始终注册托盘
  ensureAppTray()

  const isAutoStart = (() => {
    try {
      if (process.platform === 'darwin' || process.platform === 'win32') {
        const s = app.getLoginItemSettings?.()
        if (s && (s as any).wasOpenedAtLogin) return true
      }
    } catch {}
    // 统一参数开关（Linux .desktop 与通用备用）
    return process.argv.includes('--autostart')
  })()

  // 如果有文件要打开，直接打开编辑器
  if (fileToOpen) {
    createEditorWindow(fileToOpen)
    fileToOpen = null
  } else if (isAutoStart) {
    // 开机自启：不弹主窗口
  } else {
    createMainWindow()
  }

  app.on('activate', function () {
    // 避免由托盘点击引发的 activate 误打开主窗口
    const suppressed = shouldSuppressActivate()
    const trayVisible = isTrayPopoverVisible()
    if (suppressed || trayVisible) {
      try { console.debug('[app] activate suppressed. suppressed =', suppressed, 'trayVisible =', trayVisible) } catch {}
      return
    }
    try { console.debug('[app] activate: window count =', BrowserWindow.getAllWindows().length) } catch {}
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })

  // optional: clean up on quit
  app.on('before-quit', () => {
    ;(app as any).isQuitting = true
    try {
      disposeTimeIpc()
    } catch {}
    try {
      disposeIpc()
    } catch {}
    try {
      disposeMainCtx()
    } catch {}
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
  // 保持常驻（Windows/Linux），不自动退出；macOS 默认也保持常驻
})
