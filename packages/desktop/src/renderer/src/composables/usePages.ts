import { getCurrentInstance, inject, ref, onMounted, onBeforeUnmount } from 'vue'
import type { PagesRegistry } from '@renderer/app/modules/pages'

export function usePages(): PagesRegistry {
  const injected = inject<PagesRegistry>('pages' as any)
  if (injected) return injected
  const inst = getCurrentInstance()
  const gp = inst?.appContext.config.globalProperties as any
  const reg = gp?.$pages as PagesRegistry | undefined
  if (!reg) throw new Error('PagesRegistry not available. Did you install pagesModule?')
  return reg
}

export function useSidebarPages(reg?: PagesRegistry) {
  const registry = reg ?? usePages()
  const tick = ref(0)
  let unsub: undefined | (() => void)
  onMounted(() => {
    unsub = registry.subscribe(() => {
      tick.value++
    })
  })
  onBeforeUnmount(() => {
    if (unsub) {
      unsub()
    }
  })
  // 通过 tick 触发依赖收集，但对外仍提供纯方法
  const list = () => {
    void tick.value
    return registry.listSidebar()
  }
  return { registry, list }
}
