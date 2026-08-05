import { ipcChannels } from '../../shared/ipc/channels'
import { controlService } from '../control/controlService'
import { appLogger } from '../logging/logger'
import { IpcRegistrar } from '../ipc/ipcRegistrar'
import {
  performTimeSync,
  getTimeSyncInfo,
  saveTimeSyncConfig,
  getSyncedTime,
  ensureTimeSyncInitialized
} from './timeService'

export function registerTimeSyncHandlers(): () => void {
  const ipc = new IpcRegistrar()

  // 获取同步时间
  ipc.handle(ipcChannels.timeSync.getTime, async () => {
    ensureTimeSyncInitialized()
    return getSyncedTime()
  })

  // 获取时间同步状态
  ipc.handle(ipcChannels.timeSync.getInfo, async () => {
    ensureTimeSyncInitialized()
    return getTimeSyncInfo()
  })

  // 执行时间同步
  ipc.handle(ipcChannels.timeSync.synchronize, async () => {
    try {
      ensureTimeSyncInitialized()
      return await performTimeSync()
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error))
    }
  })

  // 更新时间同步配置
  ipc.handle(ipcChannels.timeSync.updateConfig, async (_event, config) => {
    if (config && typeof config === 'object') {
      const managed = Object.keys(config).find((key) => controlService.isManagedKey(`time.${key}`))
      if (managed) {
        appLogger.warn(`[timeSync] rejected update to managed key time.${managed}`)
        throw new Error('该设置由集控中心管理，无法修改')
      }
    }
    ensureTimeSyncInitialized()
    return saveTimeSyncConfig(config)
  })

  return () => ipc.dispose()
}
