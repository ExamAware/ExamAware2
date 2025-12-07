import { app, BrowserWindow, globalShortcut, Menu } from 'electron'
import path from 'path'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { createMainWindow } from './windows/mainWindow'
import { createEditorWindow } from './windows/editorWindow'
import { createSettingsWindow } from './windows/settingsWindow'
import { windowManager } from './windows/windowManager'
import { registerIpcHandlers } from './ipcHandlers'
import { registerTimeSyncHandlers } from './ipcHandlers/timeServiceHandler'
import { initializeTimeSync } from './ntpService/timeService'
import { createMainContext } from './runtime/context'
import { ensureAppTray, shouldSuppressActivate, isTrayPopoverVisible } from './tray'
import { PluginHost, createFilePreferenceStore } from './plugin'

let pluginHost: PluginHost | null = null

// Ensure a friendly app name in development and across platforms (especially macOS About menu)
try {
  if (app.getName() !== 'ExamAware') {
    app.setName('ExamAware')
  }
  // macOS About panel info
  if (process.platform === 'darwin' && (app as any).setAboutPanelOptions) {
    ;(app as any).setAboutPanelOptions({
      applicationName: 'ExamAware',
      applicationVersion: app.getVersion(),
      copyright: `© ${new Date().getFullYear()} ExamAware Contributors`,
      authors: ['ExamAware Team'],
      website: 'https://github.com/ExamAware2/ExamAware2',
      license: 'GPLv3'
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
  // macOS 常用快捷键：Command+逗号 打开设置（聚焦“关于”页可由二级逻辑决定，这里默认普通设置首页）
  try {
    globalShortcut.register('CommandOrControl+,', () => {
      try {
        createSettingsWindow()
      } catch (e) {
        console.error('open settings via shortcut failed', e)
      }
    })
  } catch (e) {
    console.error('register shortcut failed', e)
  }
  const disposeTimeIpc = registerTimeSyncHandlers()

  // 初始化时间同步服务
  initializeTimeSync()

  // 始终注册托盘
  ensureAppTray()

  try {
    const userPluginDir = path.join(app.getPath('userData'), 'plugins')
    const pluginDirectories = [userPluginDir, path.join(app.getAppPath(), 'plugins')]
    const preferenceStore = createFilePreferenceStore(path.join(userPluginDir, 'plugins.json'))
    pluginHost = new PluginHost({
      ctx: _mainCtx,
      pluginDirectories,
      preferences: preferenceStore,
      logger: {
        info: (...args: any[]) => console.log('[PluginHost]', ...args),
        warn: (...args: any[]) => console.warn('[PluginHost]', ...args),
        error: (...args: any[]) => console.error('[PluginHost]', ...args),
        debug: (...args: any[]) => console.debug?.('[PluginHost]', ...args)
      }
    })
    pluginHost.setupIpcChannels()
    await pluginHost.scan()
    await pluginHost.loadAll()
  } catch (error) {
    console.error('Failed to initialize plugin host', error)
  }

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
      try {
        console.debug(
          '[app] activate suppressed. suppressed =',
          suppressed,
          'trayVisible =',
          trayVisible
        )
      } catch {}
      return
    }
    try {
      console.debug('[app] activate: window count =', BrowserWindow.getAllWindows().length)
    } catch {}
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })

  // 设置应用菜单（macOS）：About/Preferences 等，与设置页联动
  if (process.platform === 'darwin') {
    const template: Electron.MenuItemConstructorOptions[] = [
      {
        label: app.getName(),
        submenu: [
          {
            label: `关于 ${app.getName()}`,
            accelerator: undefined,
            click: () => {
              try {
                createSettingsWindow('about')
              } catch (e) {
                console.error('open about failed', e)
              }
            }
          },
          { type: 'separator' },
          {
            label: '偏好设置…',
            accelerator: 'CommandOrControl+,',
            click: () => {
              try {
                createSettingsWindow()
              } catch (e) {
                console.error('open preferences failed', e)
              }
            }
          },
          { type: 'separator' },
          { role: 'services' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideOthers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
        ]
      },
      { role: 'editMenu' as any },
      { role: 'windowMenu' as any }
    ]
    try {
      const menu = Menu.buildFromTemplate(template)
      Menu.setApplicationMenu(menu)
    } catch (e) {
      console.error('set application menu failed', e)
    }
  }

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
    try {
      pluginHost?.shutdown?.()
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
