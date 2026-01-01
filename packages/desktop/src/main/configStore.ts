import { app, BrowserWindow } from 'electron'
import * as fs from 'fs'
import { promises as fsp } from 'fs'
import * as path from 'path'
import { appLogger } from './logging/winstonLogger'

type AnyRecord = Record<string, any>

const FILE_NAME = 'config.json'
let cache: AnyRecord | null = null
let writeTimer: NodeJS.Timeout | null = null
let writePromise: Promise<void> | null = null
const listeners = new Set<(cfg: AnyRecord) => void>()

function getConfigPath() {
  const dir = app.getPath('userData')
  return path.join(dir, FILE_NAME)
}

function ensureLoaded() {
  if (cache !== null) return
  const file = getConfigPath()
  try {
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, 'utf-8')
      cache = raw ? JSON.parse(raw) : {}
    } else {
      cache = {}
    }
  } catch (e) {
    appLogger.error('[config] load failed:', e as Error)
    cache = {}
  }
}

function deepSet(obj: AnyRecord, key: string, value: any) {
  const segs = key.split('.')
  let cur: any = obj
  for (let i = 0; i < segs.length - 1; i++) {
    const s = segs[i]
    if (typeof cur[s] !== 'object' || cur[s] == null) cur[s] = {}
    cur = cur[s]
  }
  cur[segs[segs.length - 1]] = value
}

function deepGet(obj: AnyRecord, key: string) {
  const segs = key.split('.')
  let cur: any = obj
  for (const s of segs) {
    if (cur == null) return undefined
    cur = cur[s]
  }
  return cur
}

function deepMerge(target: AnyRecord, src: AnyRecord) {
  for (const k of Object.keys(src)) {
    const v = (src as any)[k]
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      if (!target[k] || typeof target[k] !== 'object') target[k] = {}
      deepMerge(target[k], v)
    } else {
      target[k] = v
    }
  }
}

async function flushWrite() {
  try {
    const file = getConfigPath()
    await fsp.mkdir(path.dirname(file), { recursive: true })
    await fsp.writeFile(file, JSON.stringify(cache ?? {}, null, 2), 'utf-8')
  } catch (e) {
    appLogger.error('[config] write failed:', e as Error)
  } finally {
    writePromise = null
  }
}

function scheduleWrite() {
  if (writeTimer) clearTimeout(writeTimer)
  writeTimer = setTimeout(() => {
    if (writePromise) return
    writePromise = flushWrite()
  }, 100)
}

function broadcastChanged() {
  const full = cache ?? {}
  BrowserWindow.getAllWindows().forEach((w) => {
    try {
      w.webContents.send('config:changed', full)
    } catch {}
  })
  listeners.forEach((fn) => {
    try {
      fn(full)
    } catch {}
  })
}

export function getAllConfig(): AnyRecord {
  ensureLoaded()
  return { ...(cache as AnyRecord) }
}

export function getConfig(key?: string, def?: any): any {
  ensureLoaded()
  if (!key) return getAllConfig()
  const v = deepGet(cache as AnyRecord, key)
  return v === undefined ? def : v
}

export function setConfig(key: string, value: any) {
  ensureLoaded()
  deepSet(cache as AnyRecord, key, value)
  scheduleWrite()
  broadcastChanged()
}

export function patchConfig(partial: AnyRecord) {
  ensureLoaded()
  deepMerge(cache as AnyRecord, partial)
  scheduleWrite()
  broadcastChanged()
}

export function onConfigChanged(listener: (cfg: AnyRecord) => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
