import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface SettingsRecord {
  [key: string]: any
}

export const useSettingsStore = defineStore('settings', () => {
  const data = ref<SettingsRecord>({})

  const lookup = (key: string): { exists: boolean; value: any } => {
    const segs = key.split('.')
    let cur: any = data.value
    for (const s of segs) {
      if (cur == null || typeof cur !== 'object' || !(s in cur)) {
        return { exists: false, value: undefined }
      }
      cur = cur[s]
    }
    return { exists: true, value: cur }
  }

  // 从主进程加载配置
  async function init() {
    try {
      const all = await window.api.config.all()
      data.value = all || {}
    } catch (e) {
      console.error('加载配置失败', e)
    }
  }
  init()

  // 监听主进程的变更广播，保持同步
  window.api.config.onChanged((cfg) => {
    data.value = cfg || {}
  })

  const get = <T = any>(key: string, def?: T): T => {
    const segs = key.split('.')
    let cur: any = data.value
    for (const s of segs) {
      if (cur == null) return def as any
      cur = cur[s]
    }
    return (cur === undefined ? def : cur) as T
  }

  const set = (key: string, value: any) => {
    const current = lookup(key)
    if (current.exists && Object.is(current.value, value)) {
      return
    }
    // 乐观更新本地
    const segs = key.split('.')
    let cur: any = data.value
    for (let i = 0; i < segs.length - 1; i++) {
      const s = segs[i]
      if (typeof cur[s] !== 'object' || cur[s] == null) cur[s] = {}
      cur = cur[s]
    }
    cur[segs[segs.length - 1]] = value
    // 同步到主进程持久化
    window.api.config.set(key, value).catch((e) => console.error('保存配置失败', e))
  }

  const patch = (obj: SettingsRecord) => {
    Object.assign(data.value, obj)
    window.api.config.patch(obj).catch((e) => console.error('保存配置失败', e))
  }

  const all = computed(() => data.value)

  return { data, all, get, set, patch }
})

// 组合式封装：更便捷的 API
export function useSettingsApi() {
  const store = useSettingsStore()
  return {
    all: store.all,
    get: store.get,
    set: store.set,
    patch: store.patch
  }
}
