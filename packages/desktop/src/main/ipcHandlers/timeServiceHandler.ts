import { ipcMain } from 'electron';
import {
  performTimeSync,
  getTimeSyncInfo,
  saveTimeSyncConfig,
  getSyncedTime
} from '../ntpService/timeService';

export function registerTimeSyncHandlers(): () => void {
  const disposers: Array<() => void> = []
  const handle = (channel: string, listener: Parameters<typeof ipcMain.handle>[1]) => {
    ipcMain.handle(channel, listener)
    return () => ipcMain.removeHandler(channel)
  }

  // 获取同步时间
  disposers.push(handle('time:get-synced-time', async () => getSyncedTime()))

  // 获取时间同步状态
  disposers.push(handle('time:get-sync-info', async () => getTimeSyncInfo()))

  // 执行时间同步
  disposers.push(handle('time:sync-now', async () => {
    try {
      return await performTimeSync();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  }))

  // 更新时间同步配置
  disposers.push(handle('time:update-config', async (_e, config) => saveTimeSyncConfig(config)))

  return () => {
    for (let i = disposers.length - 1; i >= 0; i--) {
      try { disposers[i]() } catch {}
    }
  }
}
