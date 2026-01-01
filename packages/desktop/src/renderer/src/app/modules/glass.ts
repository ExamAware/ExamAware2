import type { App } from 'vue'
import type { AppModule } from '../types'
import { useSettingsStore } from '@renderer/stores/settingsStore'

export const glassModule: AppModule = {
  name: 'glass-toggle',
  install(_app: App, ctx) {
    const platform = (window as any).electronAPI?.platform || 'unknown'
    const hash = window.location.hash || ''
    const isMacMain = platform === 'darwin' && hash.includes('mainpage')
    if (!isMacMain) return

    const store = useSettingsStore()
    const apply = () => {
      const enabled = !!store.get('appearance.glassMain', false)
      document.documentElement.classList.toggle('is-mac-main', enabled)
    }

    apply()

    if (ctx.piniaSubscribe) {
      ctx.piniaSubscribe(store as any, apply)
    } else {
      const stop = store.$subscribe(apply)
      return () => stop()
    }
  }
}
