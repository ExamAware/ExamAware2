import type { App } from 'vue'
import type { AppModule, ThemeMode } from '../types'

function applyTheme(mode: Exclude<ThemeMode, 'auto'>) {
  document.documentElement.setAttribute('theme-mode', mode)
}

export const themeModule = (mode: ThemeMode = 'dark'): AppModule => ({
  name: 'theme',
  install(_app: App) {
    if (mode === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const set = (isDark: boolean) => applyTheme(isDark ? 'dark' : 'light')
      set(mediaQuery.matches)
      mediaQuery.addEventListener('change', (e) => set(e.matches))
    } else {
      applyTheme(mode)
    }
  }
})
