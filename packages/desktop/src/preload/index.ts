import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { fileApi } from '../main/fileUtils'

// Custom APIs for renderer
const api = {
  fileApi,
  readFile: (filePath: string) => ipcRenderer.invoke('read-file', filePath),
  saveFile: (filePath: string, content: string) => ipcRenderer.invoke('save-file', filePath, content),
  saveFileDialog: () => ipcRenderer.invoke('save-file-dialog'),
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  ipc: {
    send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args),
    invoke: (channel: string, ...args: any[]) => ipcRenderer.invoke(channel, ...args),
    on: (channel: string, listener: (...args: any[]) => void) => ipcRenderer.on(channel, listener),
    off: (channel: string, listener: (...args: any[]) => void) => ipcRenderer.off(channel, listener),
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
  }
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
    const levels: Array<'log'|'info'|'warn'|'error'|'debug'> = ['log','info','warn','error','debug']
    const original: any = {}
    levels.forEach((lvl) => {
      original[lvl] = console[lvl]
      // @ts-ignore
      console[lvl] = (...args: any[]) => {
        try {
          const message = args.map((a) => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ')
          ipcRenderer.send('logs:renderer', { level: lvl, message })
        } catch {}
        try { original[lvl].apply(console, args as any) } catch {}
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
  const levels: Array<'log'|'info'|'warn'|'error'|'debug'> = ['log','info','warn','error','debug']
  const original: any = {}
  levels.forEach((lvl) => {
    original[lvl] = console[lvl]
    // @ts-ignore
    console[lvl] = (...args: any[]) => {
      try {
        const message = args.map((a) => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ')
        ipcRenderer.send('logs:renderer', { level: lvl, message })
      } catch {}
      try { original[lvl].apply(console, args as any) } catch {}
    }
  })
}
