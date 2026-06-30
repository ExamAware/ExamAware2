import { getConfig, setConfig } from '../configStore'

export interface SharedConfigEntry {
  id: string
  examName: string
  examCount: number
  updatedAt: number
  payload: string
}

type SharedConfigMap = Record<string, SharedConfigEntry>

let sharedConfigs: SharedConfigMap = {}

const LAST_EXAM_CONFIG_KEY = 'behavior.lastExamConfig'

function persistLastExamConfig(entry?: SharedConfigEntry | null) {
  try {
    if (!entry?.payload) {
      setConfig(LAST_EXAM_CONFIG_KEY, null)
      return
    }
    setConfig(LAST_EXAM_CONFIG_KEY, {
      id: entry.id,
      examName: entry.examName,
      examCount: entry.examCount,
      updatedAt: entry.updatedAt,
      payload: entry.payload
    })
  } catch (e) {
    // ignore persistence errors
  }
}

export function loadPersistedSharedConfig(): void {
  try {
    const raw = getConfig(LAST_EXAM_CONFIG_KEY, null)
    if (!raw || typeof raw !== 'object' || !raw.payload) {
      return
    }
    const entry: SharedConfigEntry = {
      id: String(raw.id || 'legacy'),
      examName: String(raw.examName || '未命名考试'),
      examCount: Number(raw.examCount || 0),
      updatedAt: Number(raw.updatedAt || Date.now()),
      payload: String(raw.payload)
    }
    sharedConfigs[entry.id] = entry
  } catch {
    // ignore load errors
  }
}

export function setSharedConfigs(entries: SharedConfigEntry[]) {
  const next: SharedConfigMap = {}
  entries.forEach((e) => {
    if (!e?.id || !e?.payload) return
    next[e.id] = {
      ...e,
      updatedAt: e.updatedAt || Date.now()
    }
  })
  sharedConfigs = next
  // 持久化最新的考试配置，供开机自启等主进程逻辑使用
  const first = listSharedConfigs()[0]
  persistLastExamConfig(first)
}

export function upsertSharedConfig(entry: SharedConfigEntry) {
  if (!entry?.id || !entry?.payload) return
  const prev = sharedConfigs[entry.id]
  sharedConfigs[entry.id] = {
    ...entry,
    updatedAt: entry.updatedAt || prev?.updatedAt || Date.now()
  }
  const first = listSharedConfigs()[0]
  persistLastExamConfig(first)
}

export function removeSharedConfig(id: string) {
  delete sharedConfigs[id]
}

export function listSharedConfigs(): SharedConfigEntry[] {
  return Object.values(sharedConfigs).sort((a, b) => b.updatedAt - a.updatedAt)
}

export function getSharedConfigPayload(id?: string): string | null {
  if (id && sharedConfigs[id]) return sharedConfigs[id].payload
  const first = listSharedConfigs()[0]
  return first?.payload ?? null
}

// Legacy compatibility: single shared config helpers
export function setSharedConfig(data: string | null) {
  if (!data) {
    setSharedConfigs([])
    return
  }
  try {
    const parsed = JSON.parse(data)
    const examName = parsed?.examName || parsed?.examInfos?.[0]?.name || '未命名考试'
    const examCount = Array.isArray(parsed?.examInfos) ? parsed.examInfos.length : 0
    setSharedConfigs([
      {
        id: 'legacy',
        examName,
        examCount,
        updatedAt: Date.now(),
        payload: data
      }
    ])
  } catch {
    setSharedConfigs([
      {
        id: 'legacy',
        examName: '未命名考试',
        examCount: 0,
        updatedAt: Date.now(),
        payload: data
      }
    ])
  }
}

export function getSharedConfig(): string | null {
  return getSharedConfigPayload()
}
