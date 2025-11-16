import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    electronAPI: {
      minimize: () => void
      close: () => void
      maximize: () => void
      isMaximized: () => Promise<boolean>
      setupListeners: () => void
      platform: string
      onOpenFileAtStartup?: (callback: (filePath: string) => void) => void
      setTitlebarTheme?: (theme: 'light' | 'dark') => void
    }
    api: {
      fileApi: any
      readFile: (filePath: string) => Promise<string>
      saveFile: (filePath: string, content: string) => Promise<boolean>
      saveFileDialog: () => Promise<string | undefined>
      openFileDialog: () => Promise<string | undefined>
      config: {
        all: () => Promise<any>
        get: (key?: string, def?: any) => Promise<any>
        set: (key: string, value: any) => Promise<boolean>
        patch: (partial: any) => Promise<boolean>
        onChanged: (listener: (config: any) => void) => () => void
      }
      player: {
        openFromEditor: (data: string) => Promise<string | void>
      }
      system: {
        autostart: {
          get: () => Promise<boolean>
          set: (enable: boolean) => Promise<boolean>
        }
      }
      app: {
        getVersion: () => Promise<string>
      }
      ipc: {
        send: (channel: string, ...args: any[]) => void
        invoke: (channel: string, ...args: any[]) => Promise<any>
        on: (channel: string, listener: (...args: any[]) => void) => void
        off: (channel: string, listener: (...args: any[]) => void) => void
        removeAllListeners: (channel: string) => void
      }
    }
  }
}
