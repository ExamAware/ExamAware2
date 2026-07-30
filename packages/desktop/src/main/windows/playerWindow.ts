import { ipcMain, type BrowserWindow } from 'electron'
import { is } from '@electron-toolkit/utils'
import { ipcChannels } from '../../shared/ipc/channels'
import { sendIpcEvent } from '../../shared/ipc/sender'
import type { PlayerConfigStatus } from '../../shared/types/desktop'
import { windowManager } from './windowManager'
import { appLogger } from '../logging/logger'
import { setSharedConfig } from '../config/sharedConfigStore'

const CONFIG_ACK_TIMEOUT_MS = 5000

export interface PlayerWindowHooks {
  onConfigStatus?: (status: PlayerConfigStatus | undefined) => void
  onClosed?: () => void
}

export interface PlayerWindowOptions {
  fullscreen?: boolean
  kiosk?: boolean
  alwaysOnTop?: boolean
  displayId?: string
}

export interface PlayerWindowConfig {
  data: string
  source: string
}

export function createPlayerWindow(
  config: PlayerWindowConfig,
  hooks: PlayerWindowHooks = {},
  windowOptions: PlayerWindowOptions = {}
): BrowserWindow {
  // Make getPlayback() useful as soon as the renderer starts, even before its event listener exists.
  setSharedConfig(config.data)

  return windowManager.open(
    ({ commonOptions }) => ({
      id: 'player',
      route: 'playerview',
      options: {
        ...commonOptions(),
        width: 1920,
        height: 1080,
        show: true,
        fullscreen: windowOptions.fullscreen ?? !is.dev,
        kiosk: windowOptions.kiosk ?? !is.dev
      },
      setup: (playerWindow) => {
        if (windowOptions.alwaysOnTop ?? !is.dev) {
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

        const onRendererExit = (event: Electron.IpcMainEvent) => {
          if (event.sender === playerWindow.webContents) {
            allowClose = true
            playerWindow.close()
          }
        }
        ipcMain.on(ipcChannels.player.exitWindow.channel, onRendererExit)

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

        let rendererReady = false
        let configSent = false
        let configAckTimer: ReturnType<typeof setTimeout> | undefined

        const clearConfigAckTimer = () => {
          if (configAckTimer !== undefined) {
            clearTimeout(configAckTimer)
            configAckTimer = undefined
          }
        }

        const onConfigStatus = (event: Electron.IpcMainEvent, status?: PlayerConfigStatus) => {
          if (event.sender !== playerWindow.webContents) return
          clearConfigAckTimer()
          hooks.onConfigStatus?.(status)
          if (status?.ok) {
            appLogger.info('[player] renderer loaded configuration', {
              source: config.source,
              examName: status.examName,
              examCount: status.examCount
            })
            return
          }
          appLogger.error(
            '[player] renderer failed to load configuration',
            new Error(status?.message || 'Renderer returned an unknown configuration error')
          )
        }
        ipcMain.on(ipcChannels.player.configStatus.channel, onConfigStatus)

        const sendConfigWhenReady = () => {
          if (!rendererReady || configSent || playerWindow.isDestroyed()) return
          try {
            sendIpcEvent(playerWindow.webContents, ipcChannels.config.loadPlayback, config.data)
            configSent = true
            appLogger.debug('[player] configuration sent to renderer (len=%d)', config.data.length)
            clearConfigAckTimer()
            configAckTimer = setTimeout(() => {
              configAckTimer = undefined
              appLogger.error('[player] renderer did not acknowledge configuration', {
                source: config.source,
                length: config.data.length,
                timeoutMs: CONFIG_ACK_TIMEOUT_MS
              })
            }, CONFIG_ACK_TIMEOUT_MS)
          } catch (error) {
            appLogger.error('[player] failed to send configuration to renderer', error as Error)
          }
        }

        const onRendererReady = (event: Electron.IpcMainEvent) => {
          if (event.sender !== playerWindow.webContents) return
          rendererReady = true
          sendConfigWhenReady()
        }
        ipcMain.on(ipcChannels.windows.rendererReady.channel, onRendererReady)

        // 返回清理函数供 WindowManager 调用
        return () => {
          ipcMain.off(ipcChannels.player.exitWindow.channel, onRendererExit)
          ipcMain.off(ipcChannels.windows.rendererReady.channel, onRendererReady)
          ipcMain.off(ipcChannels.player.configStatus.channel, onConfigStatus)
          clearConfigAckTimer()
          hooks.onClosed?.()
        }
      }
    }),
    true
  )
}
