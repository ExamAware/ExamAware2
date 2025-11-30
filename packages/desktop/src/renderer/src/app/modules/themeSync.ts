import type { App } from 'vue'
import type { AppModule } from '../types'
import { useSettingsStore } from '@renderer/stores/settingsStore'
import { applyThemeMode } from '@renderer/core/themeManager'

export const themeSyncModule: AppModule = {
  name: 'theme-sync',
  install(_app: App, ctx) {
    const store = useSettingsStore()

    const getMode = () => store.get<'light' | 'dark' | 'auto'>('appearance.theme', 'auto')

    // 初始化
    applyThemeMode(getMode())

    // 监听配置变化
    if (ctx.piniaSubscribe) {
      ctx.piniaSubscribe(store as any, () => applyThemeMode(getMode()))
    } else {
      store.$subscribe(() => applyThemeMode(getMode()))
    }
  }
}
