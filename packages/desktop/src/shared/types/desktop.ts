export type AppConfig = Record<string, any>

export interface SharedConfigEntry {
  id: string
  examName: string
  examCount: number
  updatedAt: number
  payload: string
}

export interface CastConfig {
  enabled: boolean
  name: string
  port: number
  shareEnabled: boolean
}

export interface CastPeer {
  id: string
  name: string
  host: string
  port: number
  txt?: Record<string, any>
  lastSeen: number
}

export interface CastShareEntry {
  id: string
  examName: string
  examCount: number
  updatedAt: number
  deviceName: string
}

export type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug'

export interface RendererLogPayload {
  level: LogLevel | string
  message: string
  stack?: string
  source?: string
}

export interface LogEntry {
  id: number
  timestamp: number
  level: LogLevel
  process: 'main' | 'renderer'
  windowId?: number
  message: string
  stack?: string
  source?: string
}

export interface LoggingConfig {
  level: string
  consoleLevel?: string
  fileLevel?: string
  enableConsole?: boolean
  enableFile?: boolean
  maxSizeMB?: number
  maxFiles?: number
  retentionDays?: number
}

export interface TimeSyncConfig {
  ntpServer: string
  manualOffsetSeconds: number
  autoSync: boolean
  syncIntervalMinutes: number
  autoIncrementEnabled: boolean
  autoIncrementSeconds: number
  lastIncrementDate?: string
}

export interface TimeSyncInfo {
  offset: number
  roundTripDelay: number
  lastSyncTime: number
  serverAddress: string
  manualOffset: number
  syncStatus: 'success' | 'error' | 'pending' | 'disabled'
  errorMessage?: string
}

export interface PlayerConfigStatus {
  ok: boolean
  message?: string
  examName?: string
  examCount?: number
}
