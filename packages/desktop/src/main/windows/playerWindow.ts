import { ipcMain, type BrowserWindow } from 'electron'
import * as fs from 'fs'
import { is } from '@electron-toolkit/utils'
import { windowManager } from './windowManager'
import { appLogger } from '../logging/winstonLogger'
import { setSharedConfig } from '../state/sharedConfigStore'

export function createPlayerWindow(configPath: string): BrowserWindow {
  // Prevent the new renderer's get-config fallback from consuming the previous playback data.
  setSharedConfig(null)

  return windowManager.open(
    ({ commonOptions }) => ({
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

        let configData: string | null = null
        let rendererReady = false
        let configSent = false

        const sendConfigWhenReady = () => {
          if (!rendererReady || !configData || configSent || playerWindow.isDestroyed()) return
          configSent = true
          playerWindow.webContents.send('load-config', configData)
          appLogger.debug('Config file loaded and sent to renderer (len=%d)', configData.length)
        }

        const onRendererReady = (event: Electron.IpcMainEvent) => {
          if (event.sender !== playerWindow.webContents) return
          rendererReady = true
          sendConfigWhenReady()
        }
        ipcMain.on('renderer:ready', onRendererReady)

        fs.readFile(configPath, 'utf-8', (err, data) => {
          if (err) {
            appLogger.error('Failed to read config file', err as Error)
            return
          }
          if (playerWindow.isDestroyed()) return

          configData = data
          setSharedConfig(data)
          sendConfigWhenReady()
        })

        // 返回清理函数供 WindowManager 调用
        return () => {
          ipcMain.off(exitChannel, onRendererExit)
          ipcMain.off('renderer:ready', onRendererReady)
        }
      }
    }),
    true
  ) as unknown as BrowserWindow
}
