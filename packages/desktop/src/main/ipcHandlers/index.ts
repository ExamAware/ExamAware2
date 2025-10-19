import { ipcMain, dialog, BrowserWindow } from 'electron'
import { addLog, getLogs, clearLogs } from '../logging/logStore'
import type { MainContext } from '../runtime/context'
import { createEditorWindow } from '../windows/editorWindow'
import { createPlayerWindow } from '../windows/playerWindow'
import { fileApi } from '../fileUtils'
import { createLogsWindow } from '../windows/logsWindow'

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

// minimal disposer group for main process
function createDisposerGroup() {
  const disposers: Array<() => void> = []
  let disposed = false
  return {
    add(d?: () => void) {
      if (!d) return
      if (disposed) {
        try { d() } catch {}
        return
      }
      disposers.push(() => { try { d() } catch {} })
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
  // 拦截主进程 console 输出
  const originalConsole: Partial<Record<'log'|'info'|'warn'|'error'|'debug', any>> = {}
  ;(['log','info','warn','error','debug'] as const).forEach((level) => {
    const orig = console[level]
    originalConsole[level] = orig
    // @ts-ignore
    console[level] = (...args: any[]) => {
      try {
        addLog({
          timestamp: Date.now(),
          level,
          process: 'main',
          message: args.map((a) => (typeof a === 'string' ? a : JSON.stringify(a))).join(' '),
        })
      } catch {}
      try { orig.apply(console, args as any) } catch {}
    }
  })
  group.add(() => {
    ;(['log','info','warn','error','debug'] as const).forEach((level) => {
      const orig = originalConsole[level]
      if (orig) {
        // @ts-ignore
        console[level] = orig
      }
    })
  })
  // IPC test
  if (ctx) ctx.ipc.on('ping', () => console.log('pong'))
  else group.add(on('ping', () => console.log('pong')))

  // Handle get current config data
  if (ctx) ctx.ipc.handle('get-config', () => {
    const config = getCurrentConfigData()
    console.log('get-config requested, returning:', config)
    return config
  })
  else group.add(handle('get-config', () => {
    const config = getCurrentConfigData()
    console.log('get-config requested, returning:', config)
    return config
  }))

  // ===== Logging IPC =====
  if (ctx) ctx.ipc.on('logs:renderer', (event, payload: { level: string; message: string; stack?: string; source?: string }) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    addLog({
      timestamp: Date.now(),
      level: (['log','info','warn','error','debug'] as any).includes(payload.level) ? (payload.level as any) : 'log',
      process: 'renderer',
      windowId: window?.id,
      message: payload.message,
      stack: payload.stack,
      source: payload.source,
    })
  })
  else group.add(on('logs:renderer', (event, payload: { level: string; message: string; stack?: string; source?: string }) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    addLog({
      timestamp: Date.now(),
      level: (['log','info','warn','error','debug'] as any).includes(payload.level) ? (payload.level as any) : 'log',
      process: 'renderer',
      windowId: window?.id,
      message: payload.message,
      stack: payload.stack,
      source: payload.source,
    })
  }))

  if (ctx) ctx.ipc.handle('logs:get', () => getLogs())
  else group.add(handle('logs:get', () => getLogs()))

  if (ctx) ctx.ipc.on('logs:clear', () => clearLogs())
  else group.add(on('logs:clear', () => clearLogs()))

  // Handle set config data (called from playerWindow)
  if (ctx) ctx.ipc.on('set-config', (_event, data: string) => {
    console.log('Setting config data via IPC:', data)
    setCurrentConfigData(data)
  })
  else group.add(on('set-config', (_event, data: string) => {
    console.log('Setting config data via IPC:', data)
    setCurrentConfigData(data)
  }))

  // Handle open editor window request
  if (ctx) ctx.ipc.on('open-editor-window', () => {
    createEditorWindow()
  })
  else group.add(on('open-editor-window', () => {
    createEditorWindow()
  }))

  if (ctx) ctx.ipc.on('open-player-window', (_event, configPath) => {
    createPlayerWindow(configPath)
  })
  else group.add(on('open-player-window', (_event, configPath) => {
    createPlayerWindow(configPath)
  }))

  // 打开日志窗口
  if (ctx) ctx.ipc.on('open-logs-window', () => {
    createLogsWindow()
  })
  else group.add(on('open-logs-window', () => {
    createLogsWindow()
  }))

  // 窗口控制处理程序
  if (ctx) ctx.ipc.on('window-minimize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      window.minimize()
    }
  })
  else group.add(on('window-minimize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      window.minimize()
    }
  }))

  if (ctx) ctx.ipc.on('window-close', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      window.close()
    }
  })
  else group.add(on('window-close', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      window.close()
    }
  }))

  if (ctx) ctx.ipc.on('window-maximize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      if (window.isMaximized()) {
        window.unmaximize()
      } else {
        window.maximize()
      }
    }
  })
  else group.add(on('window-maximize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      if (window.isMaximized()) {
        window.unmaximize()
      } else {
        window.maximize()
      }
    }
  }))

  // 检查窗口是否最大化
  if (ctx) ctx.ipc.handle('window-is-maximized', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    return window ? window.isMaximized() : false
  })
  else group.add(handle('window-is-maximized', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    return window ? window.isMaximized() : false
  }))

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
  if (ctx) ctx.ipc.on('setup-window-listeners', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      setupWindowStateListeners(window)
    }
  })
  else group.add(on('setup-window-listeners', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window) {
      setupWindowStateListeners(window)
    }
  }))

  if (ctx) ctx.ipc.handle('select-file', async () => {
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
  else group.add(handle('select-file', async () => {
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
  }))

  if (ctx) ctx.ipc.handle('read-file', async (_event, filePath: string) => {
    try {
      const content = await fileApi.readFile(filePath)
      return content
    } catch (error) {
      console.error('Error reading file:', error)
      return null
    }
  })
  else group.add(handle('read-file', async (_event, filePath: string) => {
    try {
      const content = await fileApi.readFile(filePath)
      return content
    } catch (error) {
      console.error('Error reading file:', error)
      return null
    }
  }))

  if (ctx) ctx.ipc.handle('save-file', async (_e, filePath: string, content: string) => {
    try {
      await fileApi.writeFile(filePath, content)
      return true
    } catch (error) {
      console.error('Error saving file:', error)
      return false
    }
  })
  else group.add(handle('save-file', async (_e, filePath: string, content: string) => {
    try {
      await fileApi.writeFile(filePath, content)
      return true
    } catch (error) {
      console.error('Error saving file:', error)
      return false
    }
  }))

  if (ctx) ctx.ipc.handle('save-file-dialog', async () => {
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
  else group.add(handle('save-file-dialog', async () => {
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
  }))

  if (ctx) ctx.ipc.handle('open-file-dialog', async () => {
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
  else group.add(handle('open-file-dialog', async () => {
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
  }))

  return () => group.disposeAll()
}
