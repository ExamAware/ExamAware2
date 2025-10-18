import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'

export function createEditorWindow(filePath?: string): BrowserWindow {
  return windowManager.open(({ commonOptions }) => {
    const winOptions: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 920,
      height: 700
    }

    if (process.platform === 'linux') {
      winOptions.titleBarStyle = 'default'
    } else {
      winOptions.frame = false
      winOptions.titleBarStyle = 'hidden'
      if (process.platform === 'darwin') {
        winOptions.titleBarStyle = 'hiddenInset'
        ;(winOptions as any).trafficLightPosition = { x: 10, y: 10 }
      }
    }

    return {
      id: 'editor',
      route: 'editor',
      options: winOptions,
      setup(win) {
        win.on('ready-to-show', () => {
          if (filePath) {
            win.webContents.send('open-file-at-startup', filePath)
          }
        })
      }
    }
  }) as unknown as BrowserWindow
}
