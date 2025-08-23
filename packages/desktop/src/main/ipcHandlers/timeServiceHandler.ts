import { ipcMain } from 'electron';
import {
  performTimeSync,
  getTimeSyncInfo,
  saveTimeSyncConfig,
  getSyncedTime
} from '../ntpService/timeService';

export function registerTimeSyncHandlers(): void {
  // 获取同步时间
  ipcMain.handle('time:get-synced-time', async () => {
    return getSyncedTime();
  });

  // 获取时间同步状态
  ipcMain.handle('time:get-sync-info', async () => {
    return getTimeSyncInfo();
  });

  // 执行时间同步
  ipcMain.handle('time:sync-now', async () => {
    try {
      return await performTimeSync();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  });

  // 更新时间同步配置
  ipcMain.handle('time:update-config', async (_, config) => {
    return saveTimeSyncConfig(config);
  });
}
