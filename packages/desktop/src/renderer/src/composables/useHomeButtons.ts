import { getCurrentInstance, inject, ref, onMounted, onBeforeUnmount } from 'vue'
import type { HomeButtonsRegistry } from '@renderer/app/modules/homeButtons'

export function useHomeButtons(): HomeButtonsRegistry {
  const injected = inject<HomeButtonsRegistry>('homeButtons' as any)
  if (injected) return injected
  const inst = getCurrentInstance()
  const gp = inst?.appContext.config.globalProperties as any
  const reg = gp?.$homeButtons as HomeButtonsRegistry | undefined
  if (!reg) throw new Error('HomeButtonsRegistry not available. Did you install homeButtonsModule?')
  return reg
}

export function useHomeButtonsList(reg?: HomeButtonsRegistry) {
  const registry = reg ?? useHomeButtons()
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

  const list = () => {
    void tick.value
    return registry.list()
  }

  return { registry, list }
}
