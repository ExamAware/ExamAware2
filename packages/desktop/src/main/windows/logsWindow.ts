import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'

export function createLogsWindow(): BrowserWindow {
  return windowManager.open(({ commonOptions }) => {
    const options: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 900,
      height: 640,
      title: '日志',
    }

    return {
      id: 'logs',
      route: 'logs',
      options,
    }
  }) as unknown as BrowserWindow
}
