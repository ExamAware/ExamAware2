import {
  ipcMain,
  dialog,
  BrowserWindow,
  app,
  nativeTheme,
  type MessageBoxOptions,
  type WebContents,
  type OpenDialogOptions
} from 'electron'
import * as fs from 'fs'
import * as path from 'path'
import { addLog } from '../logging/logStore'
import { appLogger } from '../logging/winstonLogger'
import type { MainContext } from '../runtime/context'
import { createEditorWindow } from '../windows/editorWindow'
import { createPlayerWindow } from '../windows/playerWindow'
import { createCastWindow } from '../windows/castWindow'
import { fileApi } from '../fileUtils'
import { createLogsWindow } from '../windows/logsWindow'
import {
  getAllConfig,
  getConfig as cfgGet,
  setConfig as cfgSet,
  patchConfig as cfgPatch
} from '../configStore'
import { applyTimeConfig } from '../ntpService/timeService'
import { createSettingsWindow } from '../windows/settingsWindow'
import { createMainWindow } from '../windows/mainWindow'
import { applyTitleBarOverlay, OverlayTheme } from '../windows/titleBarOverlay'
import { applyIpcControllers } from '../ipc/decorators'
import { LoggingIpcController } from '../ipc/loggingController'
import { HttpApiController } from '../ipc/httpApiController'
import { CastController } from '../ipc/castController'
import { getSharedConfig, setSharedConfig } from '../state/sharedConfigStore'

// minimal disposer group for main process
function createDisposerGroup() {
  const disposers: Array<() => void> = []
  let disposed = false
  return {
    add(d?: () => void) {
      if (!d) return
      if (disposed) {
        try {
          d()
        } catch {}
        return
      }
      disposers.push(() => {
        try {
          d()
        } catch {}
      })
    },
    disposeAll() {
      if (disposed) return
      disposed = true
      for (let i = disposers.length - 1; i >= 0; i--) disposers[i]()
    }
  }
}

// disposable ipc helpers
function on(channel: string, listener: Parameters<typeof ipcMain.on>[1]) {
  ipcMain.on(channel, listener)
  return () => ipcMain.removeListener(channel, listener)
}
function handle(channel: string, listener: Parameters<typeof ipcMain.handle>[1]) {
  ipcMain.handle(channel, listener)
  return () => ipcMain.removeHandler(channel)
}

export function registerIpcHandlers(ctx?: MainContext): () => void {
  const group = createDisposerGroup()
  const disposeIpcDecorators = applyIpcControllers(
    [new LoggingIpcController(), new HttpApiController(), new CastController()],
    ctx
  )
  group.add(disposeIpcDecorators)
  const createTempPlayerConfig = async (data: string) => {
    const tempDir = path.join(app.getPath('temp'), 'examaware-player')
    await fs.promises.mkdir(tempDir, { recursive: true })
    const tempFile = path.join(
      tempDir,
      `editor-${Date.now()}-${Math.random().toString(16).slice(2)}.ea2`
    )
    await fs.promises.writeFile(tempFile, data, 'utf-8')
    return tempFile
  }

  const openPlayerFromEditor = async (data: string) => {
    if (typeof data !== 'string' || !data.trim()) {
      throw new Error('无效的考试配置数据')
    }
    const filePath = await createTempPlayerConfig(data)
    createPlayerWindow(filePath)
    return filePath
  }

  const showMessageBox = (event: { sender: WebContents }, options: MessageBoxOptions) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      return dialog.showMessageBox(window, options)
    }
    return dialog.showMessageBox(options)
  }

  // 拦截主进程 console 输出
  const originalConsole: Partial<Record<'log' | 'info' | 'warn' | 'error' | 'debug', any>> = {}
  ;(['log', 'info', 'warn', 'error', 'debug'] as const).forEach((level) => {
    const orig = console[level]
    originalConsole[level] = orig
    // @ts-ignore
    console[level] = (...args: any[]) => {
      try {
        addLog({
          timestamp: Date.now(),
          level,
          process: 'main',
          message: args.map((a) => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ')
        })
      } catch {}
      try {
        orig.apply(console, args as any)
      } catch {}
    }
  })
  group.add(() => {
    ;(['log', 'info', 'warn', 'error', 'debug'] as const).forEach((level) => {
      const orig = originalConsole[level]
      if (orig) {
        // @ts-ignore
        console[level] = orig
      }
    })
  })
  // IPC test
  if (ctx) ctx.ipc.on('ping', () => appLogger.debug('[ipc] pong'))
  else group.add(on('ping', () => appLogger.debug('[ipc] pong')))

  // Handle get current config data
  if (ctx)
    ctx.ipc.handle('get-config', () => {
      const config = getSharedConfig()
      appLogger.debug('[ipc] get-config requested (len=%d)', config?.length ?? 0)
      return config
    })
  else
    group.add(
      handle('get-config', () => {
        const config = getSharedConfig()
        appLogger.debug('[ipc] get-config requested (len=%d)', config?.length ?? 0)
        return config
      })
    )

  // 应用信息
  if (ctx) ctx.ipc.handle('app:get-version', () => app.getVersion())
  else group.add(handle('app:get-version', () => app.getVersion()))

  // Handle set config data (called from playerWindow)
  if (ctx)
    ctx.ipc.on('set-config', (_event, data: string) => {
      appLogger.debug('[ipc] set-config received via IPC (len=%d)', data?.length ?? 0)
      setSharedConfig(data)
    })
  else
    group.add(
      on('set-config', (_event, data: string) => {
        appLogger.debug('[ipc] set-config received via IPC (len=%d)', data?.length ?? 0)
        setSharedConfig(data)
      })
    )

  // Handle open editor window request
  if (ctx)
    ctx.ipc.on('open-editor-window', () => {
      createEditorWindow()
    })
  else
    group.add(
      on('open-editor-window', () => {
        createEditorWindow()
      })
    )

  if (ctx)
    ctx.ipc.on('open-cast-window', () => {
      createCastWindow()
    })
  else
    group.add(
      on('open-cast-window', () => {
        createCastWindow()
      })
    )

  if (ctx)
    ctx.ipc.on('open-player-window', (_event, configPath) => {
      createPlayerWindow(configPath)
    })
  else
    group.add(
      on('open-player-window', (_event, configPath) => {
        createPlayerWindow(configPath)
      })
    )

  if (ctx)
    ctx.ipc.handle('player:open-from-editor', (_event, data: string) => openPlayerFromEditor(data))
  else
    group.add(
      handle('player:open-from-editor', (_event, data: string) => openPlayerFromEditor(data))
    )

  // 打开日志窗口
  if (ctx)
    ctx.ipc.on('open-logs-window', () => {
      createLogsWindow()
    })
  else
    group.add(
      on('open-logs-window', () => {
        createLogsWindow()
      })
    )

  // ===== 配置存储 IPC =====
  if (ctx) {
    ctx.ipc.handle('config:all', () => getAllConfig())
    ctx.ipc.handle('config:get', (_e, key?: string, def?: any) => cfgGet(key, def))
    ctx.ipc.handle('config:set', (_e, key: string, value: any) => {
      cfgSet(key, value)
      // 将 time.* 的变更同步到时间同步服务
      if (key && key.startsWith('time.')) {
        const field = key.slice(5)
        applyTimeConfig({ [field]: value } as any)
      }
      return true
    })
    ctx.ipc.handle('config:patch', (_e, partial: any) => {
      cfgPatch(partial)
      if (partial && typeof partial === 'object') {
        // 支持 { time: { ... } } 或 扁平键的场景（前者为主）
        if (partial.time && typeof partial.time === 'object') {
          applyTimeConfig(partial.time)
        } else {
          const t: any = {}
          Object.keys(partial).forEach((k) => {
            if (k.startsWith && k.startsWith('time.')) {
              t[k.slice(5)] = (partial as any)[k]
            }
          })
          if (Object.keys(t).length) applyTimeConfig(t)
        }
      }
      return true
    })
  } else {
    group.add(handle('config:all', () => getAllConfig()))
    group.add(handle('config:get', (_e, key?: string, def?: any) => cfgGet(key, def)))
    group.add(
      handle('config:set', (_e, key: string, value: any) => {
        cfgSet(key, value)
        if (key && key.startsWith('time.')) {
          const field = key.slice(5)
          applyTimeConfig({ [field]: value } as any)
        }
        return true
      })
    )
    group.add(
      handle('config:patch', (_e, partial: any) => {
        cfgPatch(partial)
        if (partial && typeof partial === 'object') {
          if (partial.time && typeof partial.time === 'object') {
            applyTimeConfig(partial.time)
          } else {
            const t: any = {}
            Object.keys(partial).forEach((k) => {
              if (k.startsWith && k.startsWith('time.')) t[k.slice(5)] = (partial as any)[k]
            })
            if (Object.keys(t).length) applyTimeConfig(t)
          }
        }
        return true
      })
    )
  }

  if (ctx)
    ctx.ipc.handle('dialog:show-message-box', (event, options: MessageBoxOptions) =>
      showMessageBox(event, options)
    )
  else
    group.add(
      handle('dialog:show-message-box', (event, options: MessageBoxOptions) =>
        showMessageBox(event, options)
      )
    )

  // ===== 自启动（开机启动） =====
  const getAutoStart = () => {
    try {
      // macOS / Windows：内置 API
      if (process.platform === 'darwin' || process.platform === 'win32') {
        const s = app.getLoginItemSettings()
        return !!s.openAtLogin
      }
      // Linux：通过 ~/.config/autostart/*.desktop 判断
      if (process.platform === 'linux') {
        const desktopPath = path.join(app.getPath('home'), '.config', 'autostart')
        const file = path.join(desktopPath, `${sanitizeDesktopFileName(app.getName())}.desktop`)
        return fs.existsSync(file)
      }
    } catch (e) {
      appLogger.error('autostart:get failed', e as Error)
    }
    return false
  }
  const setAutoStart = (enable: boolean) => {
    try {
      if (process.platform === 'darwin' || process.platform === 'win32') {
        app.setLoginItemSettings({ openAtLogin: enable })
        return true
      }
      if (process.platform === 'linux') {
        const desktopDir = path.join(app.getPath('home'), '.config', 'autostart')
        const file = path.join(desktopDir, `${sanitizeDesktopFileName(app.getName())}.desktop`)
        if (!enable) {
          try {
            fs.unlinkSync(file)
          } catch {}
          return true
        }
        fs.mkdirSync(desktopDir, { recursive: true })
        const execPath = process.env.APPIMAGE || process.execPath
        const content = buildDesktopEntry({
          name: app.getName(),
          comment: 'Start this application on login',
          exec: execPath + ' --autostart',
          icon: getLinuxIconPathSafe()
        })
        fs.writeFileSync(file, content, 'utf-8')
        return true
      }
    } catch (e) {
      appLogger.error('autostart:set failed', e as Error)
      return false
    }
    return false
  }

  function sanitizeDesktopFileName(name: string) {
    return name.replace(/\s+/g, '-')
  }

  function buildDesktopEntry(opts: {
    name: string
    comment?: string
    exec: string
    icon?: string
  }) {
    // 注意：Exec 需转义空格
    const execEscaped = opts.exec.replace(/ /g, '\\\ ')
    const iconLine = opts.icon ? `Icon=${opts.icon}\n` : ''
    return (
      [
        '[Desktop Entry]',
        'Type=Application',
        `Name=${opts.name}`,
        `Comment=${opts.comment || ''}`,
        `Exec=${execEscaped}`,
        'Terminal=false',
        'X-GNOME-Autostart-enabled=true',
        iconLine.trimEnd(),
        'Categories=Utility;'
      ]
        .filter(Boolean)
        .join('\n') + '\n'
    )
  }

  function getLinuxIconPathSafe(): string | undefined {
    try {
      // 尝试使用打包资源图标
      const possible = [
        path.join(process.resourcesPath || '', 'icon.png'),
        path.join(__dirname, '../../resources/icon.png')
      ]
      for (const p of possible) {
        if (p && fs.existsSync(p)) return p
      }
    } catch {}
    return undefined
  }

  if (ctx) {
    ctx.ipc.handle('autostart:get', () => getAutoStart())
    ctx.ipc.handle('autostart:set', (_e, enable: boolean) => setAutoStart(enable))
  } else {
    group.add(handle('autostart:get', () => getAutoStart()))
    group.add(handle('autostart:set', (_e, enable: boolean) => setAutoStart(enable)))
  }

  // 打开设置窗口（单例）
  if (ctx)
    ctx.ipc.on('open-settings-window', (_e, page?: string) => {
      createSettingsWindow(page)
    })
  else
    group.add(
      on('open-settings-window', (_e, page?: string) => {
        createSettingsWindow(page)
      })
    )

  // UI：从托盘自绘菜单触发
  const doOpenMain = () => createMainWindow()
  const doQuit = () => {
    ;(app as any).isQuitting = true
    app.quit()
  }
  if (ctx) {
    ctx.ipc.on('ui:open-main', doOpenMain)
    ctx.ipc.on('ui:app-quit', doQuit)
  } else {
    group.add(on('ui:open-main', doOpenMain))
    group.add(on('ui:app-quit', doQuit))
  }

  // 窗口控制处理程序
  if (ctx)
    ctx.ipc.on('window-minimize', (event) => {
      const window = BrowserWindow.fromWebContents(event.sender)
      if (window) {
        window.minimize()
      }
    })
  else
    group.add(
      on('window-minimize', (event) => {
        const window = BrowserWindow.fromWebContents(event.sender)
        if (window) {
          window.minimize()
        }
      })
    )

  if (ctx)
    ctx.ipc.on('window-close', (event) => {
      const window = BrowserWindow.fromWebContents(event.sender)
      if (window) {
        ;(window as any).__ea_force_close__ = true
        window.close()
      }
    })
  else
    group.add(
      on('window-close', (event) => {
        const window = BrowserWindow.fromWebContents(event.sender)
        if (window) {
          ;(window as any).__ea_force_close__ = true
          window.close()
        }
      })
    )

  if (ctx)
    ctx.ipc.on('window-maximize', (event) => {
      const window = BrowserWindow.fromWebContents(event.sender)
      if (window) {
        if (window.isMaximized()) {
          window.unmaximize()
        } else {
          window.maximize()
        }
      }
    })
  else
    group.add(
      on('window-maximize', (event) => {
        const window = BrowserWindow.fromWebContents(event.sender)
        if (window) {
          if (window.isMaximized()) {
            window.unmaximize()
          } else {
            window.maximize()
          }
        }
      })
    )

  // 检查窗口是否最大化
  if (ctx)
    ctx.ipc.handle('window-is-maximized', (event) => {
      const window = BrowserWindow.fromWebContents(event.sender)
      return window ? window.isMaximized() : false
    })
  else
    group.add(
      handle('window-is-maximized', (event) => {
        const window = BrowserWindow.fromWebContents(event.sender)
        return window ? window.isMaximized() : false
      })
    )

  // 更新窗口标题栏主题（Windows overlay 控制按钮）
  const onTitlebarTheme = (event: Electron.IpcMainEvent, theme: OverlayTheme) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (!window) return
    applyTitleBarOverlay(window, theme)
  }

  if (ctx) {
    ctx.ipc.on('window-titlebar-theme', onTitlebarTheme)
  } else {
    group.add(on('window-titlebar-theme', onTitlebarTheme))
  }

  // 由渲染进程设置 nativeTheme，支持跟随应用主题
  const onNativeThemeSet = (_event: Electron.IpcMainEvent, source: 'light' | 'dark' | 'system') => {
    if (source !== 'light' && source !== 'dark' && source !== 'system') return
    try {
      nativeTheme.themeSource = source
    } catch (error) {
      appLogger.warn('[ipc] set nativeTheme failed', error as Error)
    }
  }

  if (ctx) {
    ctx.ipc.on('native-theme:set', onNativeThemeSet)
  } else {
    group.add(on('native-theme:set', onNativeThemeSet))
  }

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
  if (ctx)
    ctx.ipc.on('setup-window-listeners', (event) => {
      const window = BrowserWindow.fromWebContents(event.sender)
      if (window) {
        setupWindowStateListeners(window)
      }
    })
  else
    group.add(
      on('setup-window-listeners', (event) => {
        const window = BrowserWindow.fromWebContents(event.sender)
        if (window) {
          setupWindowStateListeners(window)
        }
      })
    )

  if (ctx)
    ctx.ipc.handle('select-file', async () => {
      const result = await dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
          { name: 'ExamAware 档案文件', extensions: ['ea2'] },
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
  else
    group.add(
      handle('select-file', async () => {
        const result = await dialog.showOpenDialog({
          properties: ['openFile'],
          filters: [
            { name: 'ExamAware 档案文件', extensions: ['ea2'] },
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
    )

  if (ctx)
    ctx.ipc.handle('read-file', async (_event, filePath: string) => {
      try {
        const content = await fileApi.readFile(filePath)
        return content
      } catch (error) {
        appLogger.error('Error reading file', error as Error)
        return null
      }
    })
  else
    group.add(
      handle('read-file', async (_event, filePath: string) => {
        try {
          const content = await fileApi.readFile(filePath)
          return content
        } catch (error) {
          appLogger.error('Error reading file', error as Error)
          return null
        }
      })
    )

  if (ctx)
    ctx.ipc.handle('save-file', async (_e, filePath: string, content: string) => {
      try {
        await fileApi.writeFile(filePath, content)
        return true
      } catch (error) {
        appLogger.error('Error saving file', error as Error)
        return false
      }
    })
  else
    group.add(
      handle('save-file', async (_e, filePath: string, content: string) => {
        try {
          await fileApi.writeFile(filePath, content)
          return true
        } catch (error) {
          appLogger.error('Error saving file', error as Error)
          return false
        }
      })
    )

  if (ctx)
    ctx.ipc.handle('save-file-dialog', async () => {
      const result = await dialog.showSaveDialog({
        filters: [
          { name: 'ExamAware 档案文件', extensions: ['ea2'] },
          { name: 'JSON 文件', extensions: ['json'] },
          { name: '所有文件', extensions: ['*'] }
        ],
        defaultPath: 'untitled.ea2'
      })
      if (result.canceled) {
        return null
      } else {
        return result.filePath
      }
    })
  else
    group.add(
      handle('save-file-dialog', async () => {
        const result = await dialog.showSaveDialog({
          filters: [
            { name: 'ExamAware 档案文件', extensions: ['ea2'] },
            { name: 'JSON 文件', extensions: ['json'] },
            { name: '所有文件', extensions: ['*'] }
          ],
          defaultPath: 'untitled.ea2'
        })
        if (result.canceled) {
          return null
        } else {
          return result.filePath
        }
      })
    )

  const openFile = async (options?: OpenDialogOptions) => {
    const baseOptions: OpenDialogOptions = {
      properties: ['openFile'],
      filters: [
        { name: 'ExamAware 档案文件', extensions: ['ea2'] },
        { name: 'JSON 文件', extensions: ['json'] },
        { name: '所有文件', extensions: ['*'] }
      ]
    }
    const merged: OpenDialogOptions = {
      ...baseOptions,
      ...options,
      properties: options?.properties ?? baseOptions.properties,
      filters: options?.filters ?? baseOptions.filters
    }

    const result = await dialog.showOpenDialog(merged)
    if (result.canceled) {
      return null
    }
    return result.filePaths[0]
  }

  if (ctx)
    ctx.ipc.handle('open-file-dialog', (_e, options?: OpenDialogOptions) => openFile(options))
  else group.add(handle('open-file-dialog', (_e, options?: OpenDialogOptions) => openFile(options)))

  return () => group.disposeAll()
}
