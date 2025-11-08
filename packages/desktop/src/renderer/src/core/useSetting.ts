import { computed } from 'vue'
import { useSettingsStore } from './settingsStore'

export interface UseSettingOptions<T = any> {
  debounce?: number
  mapIn?: (raw: any) => T
  mapOut?: (val: T) => any
}

function createDebounce<T extends (...args: any[]) => any>(fn: T, ms = 0) {
  if (!ms) return fn
  let t: any
  return ((...args: any[]) => {
    clearTimeout(t)
    t = setTimeout(() => fn(...args), ms)
  }) as T
}

/**
 * 双向绑定某个配置键，直接用于 v-model。
 * 示例：const theme = useSettingRef('appearance.theme', 'auto');
 * <t-select v-model="theme" .../>
 */
export function useSettingRef<T = any>(key: string, def?: T, options?: UseSettingOptions<T>) {
  const store = useSettingsStore()
  const setter = createDebounce((val: any) => store.set(key, val), options?.debounce)
  return computed<T>({
    get() {
      // 依赖全部数据以获得响应性
      // eslint-disable-next-line no-unused-expressions
      store.all.value
      const raw = store.get<T>(key, def as any)
      return options?.mapIn ? options.mapIn(raw) : (raw as T)
    },
    set(v: T) {
      const out = options?.mapOut ? options.mapOut(v) : v
      setter(out)
    }
  })
}

/**
 * 创建一个带前缀的设置组，便于页面内集中管理同一命名空间下的键。
 */
export function useSettingsGroup(prefix: string) {
  const store = useSettingsStore()
  const k = (sub: string) => (prefix ? `${prefix}.${sub}` : sub)
  return {
    get<T = any>(sub: string, def?: T) {
      return store.get<T>(k(sub), def)
    },
    set(sub: string, value: any) {
      store.set(k(sub), value)
    },
    ref<T = any>(sub: string, def?: T, options?: UseSettingOptions<T>) {
      return useSettingRef<T>(k(sub), def, options)
    }
  }
}

/**
 * 布尔设置的便捷切换与绑定
 */
export function useSettingToggle(key: string, def = false, debounce?: number) {
  const r = useSettingRef<boolean>(key, def, { debounce })
  const toggle = () => (r.value = !r.value)
  return { model: r, toggle }
}
