import { BrowserWindow, ipcMain } from 'electron'
import * as fs from 'fs'
import { is } from '@electron-toolkit/utils'
import { windowManager } from './windowManager'
import { appLogger } from '../logging/winstonLogger'

// 导入配置数据设置函数
import { setCurrentConfigData } from '../ipcHandlers'

export function createPlayerWindow(configPath: string): BrowserWindow {
  return windowManager.open(({ commonOptions }) => ({
    id: 'player',
    route: 'playerview',
    options: {
      ...commonOptions(),
      width: 1920,
      height: 1080,
      fullscreen: !is.dev,
      kiosk: !is.dev
    },
    setup: (playerWindow) => {
      if (!is.dev) {
        playerWindow.setAlwaysOnTop(true, 'screen-saver')
      }

      let allowClose = false
      const handleClose = (e: Electron.Event) => {
        if (!allowClose) {
          e.preventDefault()
          playerWindow.focus()
          return false
        }
        return true
      }
      playerWindow.on('close', handleClose)

      const exitChannel = 'player-window-exit'
      const onRendererExit = (event: Electron.IpcMainEvent) => {
        if (event.sender === playerWindow.webContents) {
          allowClose = true
          playerWindow.close()
        }
      }
      ipcMain.on(exitChannel, onRendererExit)

      playerWindow.on('ready-to-show', () => {
        playerWindow.show()
      })

      // windowManager 已统一设置外链打开处理

      playerWindow.webContents.on('before-input-event', (event, input) => {
        const key = (input.key || '').toLowerCase()
        const ctrlOrCmd = input.control || input.meta
        const alt = input.alt
        const shift = input.shift

        const block =
          // 退出/关闭/刷新
          (ctrlOrCmd && (key === 'q' || key === 'w' || key === 'r')) ||
          // 开发者工具
          (ctrlOrCmd && shift && key === 'i') ||
          // 最小化
          (ctrlOrCmd && key === 'm') ||
          // 切换全屏
          key === 'f11' ||
          // Windows 下的 Alt+F4（跨平台防御）
          (alt && key === 'f4')

        if (block) {
          event.preventDefault()
        }
      })

      fs.readFile(configPath, 'utf-8', (err, data) => {
        if (err) {
          appLogger.error('Failed to read config file', err as Error)
          return
        }

        // 通知主进程存储配置数据
        setCurrentConfigData(data)

        setTimeout(() => {
          playerWindow.webContents.send('load-config', data)
          appLogger.debug('Config file loaded and sent to renderer (len=%d)', data?.length ?? 0)
        }, 1000)
      })

      // 返回清理函数供 WindowManager 调用
      return () => {
        ipcMain.off(exitChannel, onRendererExit)
      }
    }
  })) as unknown as BrowserWindow
}
