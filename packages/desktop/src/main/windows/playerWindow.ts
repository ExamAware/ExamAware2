import { ipcMain, powerSaveBlocker, type BrowserWindow } from 'electron'
import * as fs from 'fs'
import { is } from '@electron-toolkit/utils'
import { windowManager } from './windowManager'
import { appLogger } from '../logging/winstonLogger'
import { setSharedConfig } from '../state/sharedConfigStore'
import { isHarmonyOS } from '../platform'

interface PlayerConfigStatus {
  ok: boolean
  examName?: string
  examCount?: number
  message?: string
}

const CONFIG_ACK_TIMEOUT_MS = 5000

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
        let displaySleepBlockerId: number | null = null
        const keepHarmonyDisplayAwake = () => {
          if (!isHarmonyOS || displaySleepBlockerId !== null) return
          try {
            displaySleepBlockerId = powerSaveBlocker.start('prevent-display-sleep')
            appLogger.info('[player] HarmonyOS display sleep blocker started', {
              id: displaySleepBlockerId
            })
          } catch (error) {
            appLogger.warn('[player] failed to keep HarmonyOS display awake', error as Error)
          }
        }
        playerWindow.on('show', keepHarmonyDisplayAwake)

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
          if (status?.ok) {
            appLogger.info('[player] renderer loaded configuration', {
              path: configPath,
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
        ipcMain.on('player:config-status', onConfigStatus)

        const sendConfigWhenReady = () => {
          if (!rendererReady || !configData || configSent || playerWindow.isDestroyed()) return
          try {
            playerWindow.webContents.send('load-config', configData)
            configSent = true
            appLogger.debug('[player] configuration sent to renderer (len=%d)', configData.length)
            clearConfigAckTimer()
            configAckTimer = setTimeout(() => {
              configAckTimer = undefined
              appLogger.error('[player] renderer did not acknowledge configuration', {
                path: configPath,
                length: configData?.length ?? 0,
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
        ipcMain.on('renderer:ready', onRendererReady)

        fs.readFile(configPath, 'utf-8', (err, data) => {
          if (err) {
            appLogger.error('Failed to read config file', err as Error)
            return
          }
          if (playerWindow.isDestroyed()) return

          configData = data
          setSharedConfig(data)
          appLogger.debug(
            '[player] configuration file read (path=%s, len=%d)',
            configPath,
            data.length
          )
          sendConfigWhenReady()
        })

        // 返回清理函数供 WindowManager 调用
        return () => {
          playerWindow.off('show', keepHarmonyDisplayAwake)
          if (displaySleepBlockerId !== null) {
            try {
              if (powerSaveBlocker.isStarted(displaySleepBlockerId)) {
                powerSaveBlocker.stop(displaySleepBlockerId)
              }
              appLogger.info('[player] HarmonyOS display sleep blocker stopped', {
                id: displaySleepBlockerId
              })
            } catch (error) {
              appLogger.warn(
                '[player] failed to release HarmonyOS display sleep blocker',
                error as Error
              )
            }
            displaySleepBlockerId = null
          }
          ipcMain.off(exitChannel, onRendererExit)
          ipcMain.off('renderer:ready', onRendererReady)
          ipcMain.off('player:config-status', onConfigStatus)
          clearConfigAckTimer()
        }
      }
    }),
    true
  ) as unknown as BrowserWindow
}
