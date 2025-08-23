import { app } from 'electron';
import { syncTimeWithNTP, getTimeSyncInfo, setManualOffset, getSyncedTime, disableTimeSync } from './ntpClient';
import fs from 'fs';
import path from 'path';

// 时间同步配置接口
interface TimeSyncConfig {
  ntpServer: string;
  manualOffsetSeconds: number;
  autoSync: boolean;
  syncIntervalMinutes: number;
}

// 默认配置
const DEFAULT_CONFIG: TimeSyncConfig = {
  ntpServer: 'ntp.aliyun.com',
  manualOffsetSeconds: 0,
  autoSync: true,
  syncIntervalMinutes: 60
};

let timeSyncConfig: TimeSyncConfig = { ...DEFAULT_CONFIG };
let syncIntervalId: NodeJS.Timeout | null = null;

// 配置文件路径
const getConfigFilePath = (): string => {
  return path.join(app.getPath('userData'), 'timeSync.json');
};

// 加载配置
export function loadTimeSyncConfig(): TimeSyncConfig {
  try {
    const configPath = getConfigFilePath();
    if (fs.existsSync(configPath)) {
      const configData = fs.readFileSync(configPath, 'utf-8');
      const config = JSON.parse(configData) as TimeSyncConfig;
      timeSyncConfig = { ...DEFAULT_CONFIG, ...config };

      // 应用手动偏移
      if (timeSyncConfig.manualOffsetSeconds !== 0) {
        setManualOffset(timeSyncConfig.manualOffsetSeconds);
      }

      return timeSyncConfig;
    }
  } catch (error) {
    console.error('加载时间同步配置失败:', error);
  }

  return timeSyncConfig;
}

// 保存配置
export function saveTimeSyncConfig(config: Partial<TimeSyncConfig>): TimeSyncConfig {
  try {
    // 更新配置
    timeSyncConfig = { ...timeSyncConfig, ...config };

    // 应用新的手动偏移
    if (config.manualOffsetSeconds !== undefined) {
      setManualOffset(timeSyncConfig.manualOffsetSeconds);
    }

    // 保存到文件
    const configPath = getConfigFilePath();
    fs.writeFileSync(configPath, JSON.stringify(timeSyncConfig, null, 2), 'utf-8');

    // 如果更新了自动同步设置，重新应用
    if (config.autoSync !== undefined || config.syncIntervalMinutes !== undefined) {
      restartAutoSync();
    }

    return timeSyncConfig;
  } catch (error) {
    console.error('保存时间同步配置失败:', error);
    return timeSyncConfig;
  }
}

// 执行时间同步
export async function performTimeSync(): Promise<any> {
  try {
    const result = await syncTimeWithNTP(timeSyncConfig.ntpServer);
    console.log('时间同步成功:', result);
    return result;
  } catch (error) {
    console.error('时间同步失败:', error);
    throw error;
  }
}

// 重启自动同步
function restartAutoSync(): void {
  // 清除现有定时器
  if (syncIntervalId) {
    clearInterval(syncIntervalId);
    syncIntervalId = null;
  }

  // 如果启用了自动同步，设置新的定时器
  if (timeSyncConfig.autoSync) {
    // 首先执行一次同步
    performTimeSync().catch(console.error);

    // 设置定期同步
    const intervalMs = timeSyncConfig.syncIntervalMinutes * 60 * 1000;
    syncIntervalId = setInterval(() => {
      performTimeSync().catch(console.error);
    }, intervalMs);
  } else {
    // 如果禁用了自动同步，重置偏移量
    disableTimeSync();
  }
}

// 初始化时间同步
export function initializeTimeSync(): void {
  loadTimeSyncConfig();
  restartAutoSync();
}

// 获取当前校准时间
export { getSyncedTime, getTimeSyncInfo };
