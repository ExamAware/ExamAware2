import { watch } from 'node:fs'
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { app } from 'electron'
import { MANAGED_SETTING_KEYS } from '@dsz-examaware/control-protocol'
import { setConfig } from '../config/configStore'
import { appLogger } from '../logging/logger'

const MANAGED_FILE_NAME = 'managed-control.json'
const CONFIG_FILE_NAME = 'config.json'
const WATCH_DEBOUNCE_MS = 300
let isSelfWrite = false
let lastManagedValues: Record<string, unknown> = {}

function managedFilePath(): string {
  return path.join(app.getPath('userData'), MANAGED_FILE_NAME)
}

export async function loadManagedValues(): Promise<Record<string, unknown>> {
  try {
    const parsed = JSON.parse(await readFile(managedFilePath(), 'utf8')) as unknown
    lastManagedValues = isRecord(parsed) ? { ...parsed } : {}
    return { ...lastManagedValues }
  } catch (error) {
    if (!isNodeError(error, 'ENOENT')) {
      appLogger.warn('[control] failed to load managed settings', error)
    }
    lastManagedValues = {}
    return {}
  }
}

export async function saveManagedValues(values: Record<string, unknown>): Promise<void> {
  if (Object.keys(values).length === 0) {
    await clearManagedValues()
    return
  }
  const filePath = managedFilePath()
  const temporaryPath = `${filePath}.${process.pid}.tmp`
  isSelfWrite = true
  try {
    await mkdir(path.dirname(filePath), { recursive: true })
    await writeFile(temporaryPath, JSON.stringify(values, null, 2), {
      encoding: 'utf8',
      mode: 0o600
    })
    await rename(temporaryPath, filePath)
    lastManagedValues = { ...values }
  } finally {
    isSelfWrite = false
    await rm(temporaryPath, { force: true }).catch(() => {})
  }
}

export async function clearManagedValues(): Promise<void> {
  isSelfWrite = true
  try {
    await rm(managedFilePath(), { force: true })
    lastManagedValues = {}
  } finally {
    isSelfWrite = false
  }
}

export function startManagedConfigWatch(onTamper: (detail: string) => void): () => void {
  const userData = app.getPath('userData')
  let timer: NodeJS.Timeout | undefined
  let pendingFile: string | undefined
  let disposed = false

  let watcher: ReturnType<typeof watch>
  try {
    watcher = watch(userData, (_eventType, fileName) => {
      const changedFile = fileName == null ? undefined : String(fileName)
      if (changedFile !== CONFIG_FILE_NAME && changedFile !== MANAGED_FILE_NAME) return
      if (changedFile === MANAGED_FILE_NAME && isSelfWrite) return
      pendingFile = changedFile
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = undefined
        const file = pendingFile
        pendingFile = undefined
        if (!disposed && file) void reconcile(file, onTamper)
      }, WATCH_DEBOUNCE_MS)
    })
    watcher.on('error', (error) => appLogger.warn('[control] managed settings watch failed', error))
  } catch (error) {
    appLogger.warn('[control] unable to watch managed settings', error)
    return () => {}
  }

  return () => {
    disposed = true
    if (timer) clearTimeout(timer)
    watcher.close()
  }
}

async function reconcile(changedFile: string, onTamper: (detail: string) => void): Promise<void> {
  if (changedFile === MANAGED_FILE_NAME) {
    try {
      await readFile(managedFilePath(), 'utf8')
    } catch (error) {
      if (!isNodeError(error, 'ENOENT')) {
        appLogger.warn('[control] failed to inspect managed settings', error)
        return
      }
      if (Object.keys(lastManagedValues).length === 0) return
      await saveManagedValues(lastManagedValues)
      onTamper('managed-control.json 被删除')
    }
    return
  }

  const stored = await loadManagedValues()
  if (Object.keys(stored).length === 0) return
  const config = await readConfigFile()
  let repaired = false
  for (const key of Object.values(MANAGED_SETTING_KEYS)) {
    if (!Object.prototype.hasOwnProperty.call(stored, key)) continue
    const desktopKey = toDesktopConfigKey(key)
    if (sameValue(deepGet(config, desktopKey), stored[key])) continue
    setConfig(desktopKey, stored[key])
    repaired = true
  }
  if (repaired) onTamper('config.json 受管键被篡改')
}

async function readConfigFile(): Promise<Record<string, unknown>> {
  try {
    const parsed = JSON.parse(
      await readFile(path.join(app.getPath('userData'), CONFIG_FILE_NAME), 'utf8')
    ) as unknown
    return isRecord(parsed) ? parsed : {}
  } catch (error) {
    if (!isNodeError(error, 'ENOENT')) {
      appLogger.warn('[control] failed to inspect config.json', error)
    }
    return {}
  }
}

function toDesktopConfigKey(key: string): string {
  return key.startsWith('timeSync.') ? `time.${key.slice('timeSync.'.length)}` : key
}

function deepGet(record: Record<string, unknown>, key: string): unknown {
  let value: unknown = record
  for (const segment of key.split('.')) {
    if (!isRecord(value)) return undefined
    value = value[segment]
  }
  return value
}

function sameValue(left: unknown, right: unknown): boolean {
  return Object.is(left, right) || JSON.stringify(left) === JSON.stringify(right)
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isNodeError(error: unknown, code: string): error is NodeJS.ErrnoException {
  return error instanceof Error && (error as NodeJS.ErrnoException).code === code
}
