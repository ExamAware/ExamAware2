export interface SharedConfigEntry {
  id: string
  examName: string
  examCount: number
  updatedAt: number
  payload: string
}

type SharedConfigMap = Record<string, SharedConfigEntry>

let sharedConfigs: SharedConfigMap = {}

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
}

export function upsertSharedConfig(entry: SharedConfigEntry) {
  if (!entry?.id || !entry?.payload) return
  const prev = sharedConfigs[entry.id]
  sharedConfigs[entry.id] = {
    ...entry,
    updatedAt: entry.updatedAt || prev?.updatedAt || Date.now()
  }
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
