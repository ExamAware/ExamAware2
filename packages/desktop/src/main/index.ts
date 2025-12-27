import { app, BrowserWindow, globalShortcut, Menu, protocol } from 'electron'
import fs from 'fs'
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
import { deepLinkManager, type DeepLinkService } from './runtime/deepLink'
import type { DeepLinkPayload } from '../shared/types/deepLink'

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'plugin',
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      corsEnabled: true,
      stream: true,
      bypassCSP: true
    }
  },
  {
    scheme: 'examaware',
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: false,
      corsEnabled: true
    }
  }
])

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
      website: 'https://github.com/ExamAware/ExamAware2',
      license: 'GPLv3'
    })
  }
} catch {}

// 用于存储启动时的文件路径
let fileToOpen: string | null = null

const ensureTempDir = async (dir: string) => {
  await fs.promises.mkdir(dir, { recursive: true })
  return dir
}

const createTempConfigFromBase64 = async (b64: string, prefix: string) => {
  const decoded = Buffer.from(b64, 'base64').toString('utf-8')
  const tempDir = path.join(app.getPath('temp'), 'examaware-deeplink')
  await ensureTempDir(tempDir)
  const file = path.join(tempDir, `${prefix}-${Date.now()}.json`)
  await fs.promises.writeFile(file, decoded, 'utf-8')
  return file
}

// 捕获通过自定义协议传入的初始参数
const initialDeepLink = process.argv.find((arg) => arg.startsWith('examaware://')) || null
if (initialDeepLink) {
  deepLinkManager.enqueue(initialDeepLink)
}

// 支持通过环境变量传入 base64 配置，便于调试：EXAMAWARE_DEEPLINK_PLAYER / EXAMAWARE_DEEPLINK_EDITOR
const envPlayerData = process.env.EXAMAWARE_DEEPLINK_PLAYER
const envEditorData = process.env.EXAMAWARE_DEEPLINK_EDITOR
if (envPlayerData) {
  createTempConfigFromBase64(envPlayerData, 'player').then((file) => {
    deepLinkManager.enqueue(`examaware://player?file=${encodeURIComponent(file)}`)
  })
}
if (envEditorData) {
  createTempConfigFromBase64(envEditorData, 'editor').then((file) => {
    deepLinkManager.enqueue(`examaware://editor?file=${encodeURIComponent(file)}`)
  })
}

// 单实例锁，确保协议调用复用已有实例
const gotLock = app.requestSingleInstanceLock()
if (!gotLock) {
  app.quit()
  process.exit(0)
}

app.on('second-instance', (_event, argv) => {
  const deepLinkArg = argv.find((arg) => arg.startsWith('examaware://'))
  if (deepLinkArg) {
    deepLinkManager.enqueue(deepLinkArg)
  }
  try {
    const main = windowManager.get('main') ?? createMainWindow()
    if (main) {
      if (main.isMinimized()) main.restore()
      if (!main.isVisible()) main.show()
      main.focus()
    }
  } catch (error) {
    console.error('[deeplink] failed to revive main window on second-instance', error)
  }
})

app.whenReady().then(async () => {
  const { ctx: _mainCtx, dispose: disposeMainCtx } = createMainContext()
  windowManager.setContext(_mainCtx)
  electronApp.setAppUserModelId('org.examaware')
  ensurePluginProtocol()
  ensureExamawareProtocol()
  registerDeepLinkCoreHandlers()

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
    // 提前暴露 deeplink 服务，供插件在 main 入口注入使用
    const deeplinkService: DeepLinkService = {
      scheme: 'examaware',
      registerHandler: (name, handler) => deepLinkManager.registerHandler(name, handler),
      dispatch: (url: string) => deepLinkManager.dispatch(url)
    }
    pluginHost.provideService('deeplink', deeplinkService, {
      default: true,
      scope: 'main',
      owner: 'core'
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

let pluginProtocolRegistered = false

function ensureExamawareProtocol() {
  try {
    // Windows 开发环境需要带上可执行路径；生产环境直接注册即可
    if (process.platform === 'win32' && process.defaultApp && process.argv.length >= 2) {
      app.setAsDefaultProtocolClient('examaware', process.execPath, [path.resolve(process.argv[1])])
    } else {
      app.setAsDefaultProtocolClient('examaware')
    }
  } catch (error) {
    console.error('Failed to register examaware:// protocol', error)
  }
}

function focusMainWindowFromDeepLink() {
  const main = windowManager.get('main') ?? createMainWindow()
  if (main) {
    if (main.isMinimized()) main.restore()
    if (!main.isVisible()) main.show()
    main.focus()
  }
  return main
}

function broadcastDeepLink(payload: DeepLinkPayload) {
  BrowserWindow.getAllWindows().forEach((win) => {
    try {
      win.webContents.send('deeplink:open', payload)
    } catch (error) {
      console.warn('[deeplink] broadcast failed', error)
    }
  })
}

function registerDeepLinkCoreHandlers() {
  // 聚焦主窗口并广播给所有渲染进程；返回 true 表示已处理
  deepLinkManager.registerHandler('core:focus-and-broadcast', (payload) => {
    focusMainWindowFromDeepLink()
    broadcastDeepLink(payload)
    return true
  })

  // examaware://settings?page=xxx
  deepLinkManager.registerHandler('core:settings', (payload) => {
    if (payload.host !== 'settings') return false
    const page =
      payload.query.page || payload.query.tab || payload.pathname.replace('/', '') || undefined
    createSettingsWindow(page)
    return true
  })

  // examaware://editor?file=/abs/path OR examaware://editor?data=<b64>
  deepLinkManager.registerHandler('core:editor', async (payload) => {
    if (payload.host !== 'editor') return false
    const file = payload.query.file
    const data = payload.query.data
    let target: string | undefined
    if (file) {
      target = file
    } else if (data) {
      try {
        target = await createTempConfigFromBase64(data, 'editor')
      } catch (error) {
        console.error('[deeplink] failed to create temp editor file', error)
        return false
      }
    }
    createEditorWindow(target)
    return true
  })

  // examaware://player?file=/abs/path OR examaware://player?data=<b64 json>
  deepLinkManager.registerHandler('core:player', async (payload) => {
    if (payload.host !== 'player') return false
    const file = payload.query.file
    const data = payload.query.data
    let target: string | undefined
    if (file) {
      target = file
    } else if (data) {
      try {
        target = await createTempConfigFromBase64(data, 'player')
      } catch (error) {
        console.error('[deeplink] failed to create temp player file', error)
        return false
      }
    }
    if (!target) return false
    createPlayerWindow(target)
    return true
  })
  // App ready 后处理任何在启动前缓存的深链
  deepLinkManager.flushQueue()
}

function ensurePluginProtocol() {
  if (pluginProtocolRegistered) return
  try {
    protocol.registerFileProtocol('plugin', (request, callback) => {
      try {
        if (!pluginHost) {
          callback({ error: -6 })
          return
        }
        const url = new URL(request.url)
        const name = url.searchParams.get('name')
        const relativePath = url.searchParams.get('path') ?? ''
        if (!name) {
          callback({ error: -6 })
          return
        }
        const filePath = pluginHost.resolveAssetPath(name, relativePath)
        if (!filePath) {
          callback({ error: -6 })
          return
        }
        callback({ path: filePath })
      } catch (error) {
        console.error('[plugin://] resolve failed', error)
        callback({ error: -6 })
      }
    })
    pluginProtocolRegistered = true
  } catch (error) {
    console.error('Failed to register plugin:// protocol', error)
  }
}

// 处理打开文件的请求（macOS）
app.on('open-url', (event, url) => {
  event.preventDefault()
  deepLinkManager.enqueue(url)
})

// 处理打开文件的请求（macOS 文件关联）
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
