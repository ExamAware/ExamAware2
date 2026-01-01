import { app, shell } from 'electron'
import fs from 'fs'
import { promises as fsp } from 'fs'
import path from 'path'
import winston from 'winston'
import { getConfig, patchConfig } from '../configStore'

export type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug'

export interface LoggingConfig {
  level: winston.LoggerOptions['level']
  consoleLevel?: winston.LoggerOptions['level']
  fileLevel?: winston.LoggerOptions['level']
  enableConsole?: boolean
  enableFile?: boolean
  maxSizeMB?: number
  maxFiles?: number
  retentionDays?: number
}

const levelMap: Record<LogLevel, winston.LoggerOptions['level']> = {
  log: 'info',
  info: 'info',
  warn: 'warn',
  error: 'error',
  debug: 'debug'
}

const defaultConfig: LoggingConfig = {
  level: 'info',
  consoleLevel: 'info',
  fileLevel: 'info',
  enableConsole: true,
  enableFile: true,
  maxSizeMB: 5,
  maxFiles: 3,
  retentionDays: 7
}

function resolveLogDir() {
  try {
    return path.join(app.getPath('userData'), 'logs')
  } catch {
    return path.join(process.cwd(), 'logs')
  }
}

function ensureLogDir() {
  const dir = resolveLogDir()
  try {
    fs.mkdirSync(dir, { recursive: true })
  } catch {}
  return dir
}

const logDir = ensureLogDir()

function getDatedLogFile() {
  const date = new Date().toISOString().slice(0, 10) // YYYY-MM-DD (UTC)
  return path.join(logDir, `examaware-${date}.log`)
}

const baseFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.printf((info) => {
    const { timestamp, level, message, stack } = info
    const splat = (info as any)[Symbol.for('splat')] as any[] | undefined

    // Collect extra payloads but avoid spreading strings into { 0: 'c', ... }
    const metaParts: any[] = []
    if (Array.isArray(splat) && splat.length) metaParts.push(...splat)

    const rest: Record<string, any> = { ...info }
    delete rest.timestamp
    delete rest.level
    delete rest.message
    delete rest.stack
    delete rest[Symbol.for('splat') as unknown as string]

    if (Object.keys(rest).length) metaParts.push(rest)

    const metaStr = metaParts.length
      ? ' ' +
        metaParts
          .map((m) => {
            if (m instanceof Error) return m.stack ?? m.message
            if (typeof m === 'string') return m
            if (m === undefined || m === null) return ''
            try {
              return JSON.stringify(m)
            } catch {
              return String(m)
            }
          })
          .filter(Boolean)
          .join(' ')
      : ''

    const body = stack ? `${message}\n${stack}` : message
    return `${timestamp} [${level}] ${body}${metaStr}`
  })
)

let currentConfig: LoggingConfig = { ...defaultConfig }

function buildTransports(cfg: LoggingConfig): winston.transport[] {
  const transports: winston.transport[] = []
  if (cfg.enableConsole !== false) {
    transports.push(
      new winston.transports.Console({
        level: cfg.consoleLevel ?? cfg.level,
        format: winston.format.combine(winston.format.colorize({ all: true }), baseFormat)
      })
    )
  }
  if (cfg.enableFile !== false) {
    transports.push(
      new winston.transports.File({
        filename: getDatedLogFile(),
        level: cfg.fileLevel ?? cfg.level,
        maxsize: Math.max(1, cfg.maxSizeMB ?? defaultConfig.maxSizeMB!) * 1024 * 1024,
        maxFiles: Math.max(1, cfg.maxFiles ?? defaultConfig.maxFiles!)
      })
    )
  }
  return transports
}

export const appLogger = winston.createLogger({
  levels: winston.config.npm.levels,
  level: currentConfig.level,
  format: baseFormat,
  transports: buildTransports(currentConfig)
})

function applyLoggingConfig(cfg: LoggingConfig) {
  currentConfig = { ...defaultConfig, ...cfg }
  appLogger.configure({
    levels: winston.config.npm.levels,
    level: currentConfig.level,
    format: baseFormat,
    transports: buildTransports(currentConfig)
  })
}

export function initLoggingConfig() {
  try {
    const saved = (getConfig('logging') ?? {}) as Partial<LoggingConfig>
    applyLoggingConfig({ ...defaultConfig, ...saved })
  } catch {
    applyLoggingConfig(defaultConfig)
  }
}

export function getLoggingConfig(): LoggingConfig {
  return { ...currentConfig }
}

export async function setLoggingConfig(cfg: Partial<LoggingConfig>) {
  const next = { ...currentConfig, ...cfg }
  applyLoggingConfig(next)
  try {
    await patchConfig({ logging: next })
  } catch {}
}

export async function openLogFolder() {
  try {
    await shell.openPath(logDir)
  } catch (error) {
    appLogger.warn('Failed to open log folder', error as Error)
  }
}

export async function clearLogFiles() {
  try {
    const files = await fsp.readdir(logDir)
    await Promise.all(
      files
        .filter((f) => f.startsWith('examaware'))
        .map((f) => fsp.rm(path.join(logDir, f), { force: true }))
    )
  } catch (error) {
    appLogger.warn('Failed to clear log files', error as Error)
  }
}

let consolePatched = false
export function patchConsoleWithLogger() {
  if (consolePatched) return
  const original: Partial<Record<LogLevel, (...args: any[]) => void>> = {}
  ;(['log', 'info', 'warn', 'error', 'debug'] as LogLevel[]).forEach((lvl) => {
    const orig = console[lvl] as (...args: any[]) => void
    original[lvl] = orig
    console[lvl] = (...args: any[]) => {
      try {
        const msg = args.map((a) => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ')
        appLogger.log({ level: levelMap[lvl] ?? 'info', message: msg, source: 'main-console' })
      } catch {}
      try {
        orig?.apply(console, args as any)
      } catch {}
    }
  })
  consolePatched = true
}

export function logWithLevel(level: LogLevel, message: string, meta?: Record<string, any>) {
  const mapped = levelMap[level] ?? 'info'
  appLogger.log({ level: mapped, message, ...(meta ? { meta } : {}) })
}
