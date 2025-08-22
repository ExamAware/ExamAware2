import * as dgram from 'dgram';

// NTP 包结构常量
const NTP_PACKET_SIZE = 48;
const NTP_PORT = 123;
const NTP_MODE = 3; // 客户端模式
const NTP_VERSION = 4;
const NTP_TIMESTAMP_DELTA = 2208988800; // 1970-01-01 到 1900-01-01 的秒数差

// 存储时间同步信息
interface TimeSyncInfo {
  offset: number; // 本地时钟与服务器的偏移量（毫秒）
  roundTripDelay: number; // 往返延迟（毫秒）
  lastSyncTime: number; // 上次同步时间
  serverAddress: string; // NTP 服务器地址
  manualOffset: number; // 用户手动设置的偏移量（毫秒）
  syncStatus: 'success' | 'error' | 'pending' | 'disabled'; // 同步状态
  errorMessage?: string; // 错误信息
}

// 默认 NTP 服务器
const DEFAULT_NTP_SERVER = 'ntp.aliyun.com';

// 初始化时间同步信息
const timeSyncInfo: TimeSyncInfo = {
  offset: 0,
  roundTripDelay: 0,
  lastSyncTime: 0,
  serverAddress: DEFAULT_NTP_SERVER,
  manualOffset: 0,
  syncStatus: 'pending'
};

// 创建 NTP 请求包
function createNTPPacket(): Buffer {
  const packet = Buffer.alloc(NTP_PACKET_SIZE);

  // 设置 LI (Leap Indicator), VN (Version Number), 和 Mode
  packet[0] = (0 << 6) | (NTP_VERSION << 3) | NTP_MODE;

  // 设置发送时间（本地时间）
  const now = Date.now() / 1000.0 + NTP_TIMESTAMP_DELTA;
  const seconds = Math.floor(now);
  const fraction = Math.round((now - seconds) * 0xffffffff);

  // 写入发送时间到包的最后 8 字节
  // transmit time, seconds
  packet.writeUInt32BE(seconds, 40);
  // transmit time, fraction of a second
  packet.writeUInt32BE(fraction, 44);

  return packet;
}

// 解析 NTP 响应包
function parseNTPResponse(packet: Buffer, originateTime: number): { serverTime: number, roundTripDelay: number } {
  // 只获取需要的时间戳
  const receiveTimeSeconds = packet.readUInt32BE(32);
  const receiveTimeFraction = packet.readUInt32BE(36);
  const transmitTimeSeconds = packet.readUInt32BE(40);
  const transmitTimeFraction = packet.readUInt32BE(44);

  // 转换为毫秒时间戳
  const receiveTime = ((receiveTimeSeconds - NTP_TIMESTAMP_DELTA) * 1000) + (receiveTimeFraction * 1000 / 0xffffffff);
  const transmitTime = ((transmitTimeSeconds - NTP_TIMESTAMP_DELTA) * 1000) + (transmitTimeFraction * 1000 / 0xffffffff);
  const destinationTime = Date.now();

  // 计算往返延迟和时钟偏移量
  // 往返延迟 = (到达时间 - 起始时间) - (传输时间 - 接收时间)
  const roundTripDelay = (destinationTime - originateTime) - (transmitTime - receiveTime);
  // 服务器时间 = 接收时间 + (传输时间 - 接收时间) / 2
  const serverTime = receiveTime + ((transmitTime - receiveTime) / 2);

  return { serverTime, roundTripDelay };
}

// 同步时间函数
export async function syncTimeWithNTP(ntpServer: string = timeSyncInfo.serverAddress): Promise<TimeSyncInfo> {
  return new Promise((resolve, reject) => {
    // 更新同步状态
    timeSyncInfo.syncStatus = 'pending';
    timeSyncInfo.serverAddress = ntpServer || DEFAULT_NTP_SERVER;

    const socket = dgram.createSocket('udp4');
    const ntpPacket = createNTPPacket();
    const originateTime = Date.now();

    // 超时处理
    const timeoutId = setTimeout(() => {
      socket.close();
      timeSyncInfo.syncStatus = 'error';
      timeSyncInfo.errorMessage = '与 NTP 服务器通信超时';
      reject(new Error('与 NTP 服务器通信超时'));
    }, 5000);

    // 错误处理
    socket.on('error', (err) => {
      clearTimeout(timeoutId);
      socket.close();
      timeSyncInfo.syncStatus = 'error';
      timeSyncInfo.errorMessage = `NTP 同步错误: ${err.message}`;
      reject(err);
    });

    // 处理 NTP 响应
    socket.on('message', (msg) => {
      clearTimeout(timeoutId);
      try {
        const { serverTime, roundTripDelay } = parseNTPResponse(msg, originateTime);
        const currentLocalTime = Date.now();
        const offset = serverTime - currentLocalTime;

        // 更新时间同步信息
        timeSyncInfo.offset = offset;
        timeSyncInfo.roundTripDelay = roundTripDelay;
        timeSyncInfo.lastSyncTime = currentLocalTime;
        timeSyncInfo.syncStatus = 'success';
        timeSyncInfo.errorMessage = undefined;

        socket.close();
        resolve({ ...timeSyncInfo });
      } catch (err) {
        socket.close();
        timeSyncInfo.syncStatus = 'error';
        timeSyncInfo.errorMessage = '解析 NTP 响应失败';
        reject(new Error('解析 NTP 响应失败'));
      }
    });

    // 发送 NTP 请求
    socket.send(ntpPacket, 0, NTP_PACKET_SIZE, NTP_PORT, timeSyncInfo.serverAddress, (err) => {
      if (err) {
        clearTimeout(timeoutId);
        socket.close();
        timeSyncInfo.syncStatus = 'error';
        timeSyncInfo.errorMessage = `发送 NTP 请求失败: ${err.message}`;
        reject(err);
      }
    });
  });
}

// 设置手动时间偏移
export function setManualOffset(offsetInSeconds: number): void {
  timeSyncInfo.manualOffset = offsetInSeconds * 1000; // 转换为毫秒
}

// 获取当前时间同步状态
export function getTimeSyncInfo(): TimeSyncInfo {
  return { ...timeSyncInfo };
}

// 获取校准后的当前时间
export function getSyncedTime(): number {
  return Date.now() + timeSyncInfo.offset + timeSyncInfo.manualOffset;
}

// 禁用时间同步
export function disableTimeSync(): void {
  timeSyncInfo.syncStatus = 'disabled';
  timeSyncInfo.offset = 0;
}
