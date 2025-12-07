import {
  contextBridge,
  ipcRenderer,
  type MessageBoxOptions,
  type MessageBoxReturnValue
} from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { fileApi } from '../main/fileUtils'

// Custom APIs for renderer
const api = {
  fileApi,
  readFile: (filePath: string) => ipcRenderer.invoke('read-file', filePath),
  saveFile: (filePath: string, content: string) =>
    ipcRenderer.invoke('save-file', filePath, content),
  saveFileDialog: () => ipcRenderer.invoke('save-file-dialog'),
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  config: {
    all: () => ipcRenderer.invoke('config:all'),
    get: (key?: string, def?: any) => ipcRenderer.invoke('config:get', key, def),
    set: (key: string, value: any) => ipcRenderer.invoke('config:set', key, value),
    patch: (partial: any) => ipcRenderer.invoke('config:patch', partial),
    onChanged: (listener: (config: any) => void) => {
      const wrapped = (_e: any, cfg: any) => listener(cfg)
      ipcRenderer.on('config:changed', wrapped)
      return () => ipcRenderer.off('config:changed', wrapped)
    }
  },
  app: {
    getVersion: () => ipcRenderer.invoke('app:get-version') as Promise<string>
  },
  system: {
    autostart: {
      get: () => ipcRenderer.invoke('autostart:get') as Promise<boolean>,
      set: (enable: boolean) => ipcRenderer.invoke('autostart:set', enable) as Promise<boolean>
    }
  },
  dialog: {
    showMessageBox: (options: MessageBoxOptions) =>
      ipcRenderer.invoke('dialog:show-message-box', options) as Promise<MessageBoxReturnValue>
  },
  player: {
    openFromEditor: (data: string) => ipcRenderer.invoke('player:open-from-editor', data)
  },
  plugins: {
    list: () => ipcRenderer.invoke('plugin:list'),
    toggle: (name: string, enabled: boolean) => ipcRenderer.invoke('plugin:toggle', name, enabled),
    reload: (name: string) => ipcRenderer.invoke('plugin:reload', name),
    services: () => ipcRenderer.invoke('plugin:services'),
    service: (name: string) => ipcRenderer.invoke('plugin:service', name),
    getConfig: (name: string) => ipcRenderer.invoke('plugin:get-config', name),
    setConfig: (name: string, config: Record<string, any>) =>
      ipcRenderer.invoke('plugin:set-config', name, config),
    onState: (listener: (payload: any) => void) => {
      const wrapped = (_event: Electron.IpcRendererEvent, payload: any) => listener(payload)
      ipcRenderer.on('plugin:state', wrapped)
      return () => ipcRenderer.off('plugin:state', wrapped)
    },
    rendererEntry: (name: string) => ipcRenderer.invoke('plugin:renderer-entry', name)
  },
  ipc: {
    send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args),
    invoke: (channel: string, ...args: any[]) => ipcRenderer.invoke(channel, ...args),
    on: (channel: string, listener: (...args: any[]) => void) => ipcRenderer.on(channel, listener),
    off: (channel: string, listener: (...args: any[]) => void) =>
      ipcRenderer.off(channel, listener),
    removeAllListeners: (channel: string) => ipcRenderer.removeAllListeners(channel)
  }
}

// 窗口控制 API
const windowAPI = {
  minimize: () => ipcRenderer.send('window-minimize'),
  close: () => ipcRenderer.send('window-close'),
  maximize: () => ipcRenderer.send('window-maximize'),
  isMaximized: () => ipcRenderer.invoke('window-is-maximized'),
  setupListeners: () => ipcRenderer.send('setup-window-listeners'),
  platform: process.platform, // 在 preload 中可以安全访问 process
  onOpenFileAtStartup: (callback: (filePath: string) => void) => {
    ipcRenderer.on('open-file-at-startup', (_event, filePath) => callback(filePath))
  },
  setTitlebarTheme: (theme: 'light' | 'dark') => ipcRenderer.send('window-titlebar-theme', theme)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('electronAPI', windowAPI)
    contextBridge.exposeInMainWorld('api', api)
    // 拦截渲染进程 console，转发到主进程
    const levels: Array<'log' | 'info' | 'warn' | 'error' | 'debug'> = [
      'log',
      'info',
      'warn',
      'error',
      'debug'
    ]
    const original: any = {}
    levels.forEach((lvl) => {
      original[lvl] = console[lvl]
      // @ts-ignore
      console[lvl] = (...args: any[]) => {
        try {
          const message = args.map((a) => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ')
          ipcRenderer.send('logs:renderer', { level: lvl, message })
        } catch {}
        try {
          original[lvl].apply(console, args as any)
        } catch {}
      }
    })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.electronAPI = windowAPI
  // @ts-ignore (define in dts)
  window.api = api
  // 非隔离模式也拦截 console
  const levels: Array<'log' | 'info' | 'warn' | 'error' | 'debug'> = [
    'log',
    'info',
    'warn',
    'error',
    'debug'
  ]
  const original: any = {}
  levels.forEach((lvl) => {
    original[lvl] = console[lvl]
    // @ts-ignore
    console[lvl] = (...args: any[]) => {
      try {
        const message = args.map((a) => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ')
        ipcRenderer.send('logs:renderer', { level: lvl, message })
      } catch {}
      try {
        original[lvl].apply(console, args as any)
      } catch {}
    }
  })
}
