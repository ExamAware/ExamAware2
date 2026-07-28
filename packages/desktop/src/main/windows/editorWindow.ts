import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'

export function createEditorWindow(filePath?: string): BrowserWindow {
  return windowManager.open(({ commonOptions }) => {
    const winOptions: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 920,
      height: 700,
      title: '考试编辑器'
    }

    return {
      id: 'editor',
      route: 'editor',
      options: winOptions,
      setup(win) {
        const FORCE_CLOSE_FLAG = '__ea_force_close__'

        // Intercept close to ask renderer; renderer will call back with window-close IPC when confirmed
        win.on('close', (e) => {
          if ((win as any)[FORCE_CLOSE_FLAG]) {
            delete (win as any)[FORCE_CLOSE_FLAG]
            return
          }
          e.preventDefault()
          try {
            win.webContents.send('editor:request-close')
          } catch {}
        })

        win.on('ready-to-show', () => {
          if (filePath) {
            win.webContents.send('open-file-at-startup', filePath)
          }
        })
      }
    }
  }) as unknown as BrowserWindow
}
