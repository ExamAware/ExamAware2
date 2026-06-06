import { ref, watch, onMounted } from 'vue'

export type ThemeMode = 'light' | 'dark' | 'auto'

/**
 * 主题管理组合式函数
 */
export function useTheme() {
  const STORAGE_KEY = 'theme-mode'

  const themeMode = ref<ThemeMode>('auto')
  const isDark = ref(false)

  // 检测系统主题
  const detectSystemTheme = (): 'light' | 'dark' => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  // 应用主题
  const applyTheme = (mode: ThemeMode) => {
    let actualTheme: 'light' | 'dark'

    if (mode === 'auto') {
      actualTheme = detectSystemTheme()
    } else {
      actualTheme = mode
    }

    isDark.value = actualTheme === 'dark'

    // 更新HTML元素的class
    if (actualTheme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('theme-mode', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('theme-mode', 'light')
    }

    // 更新TDesign主题
    if (window.TDesign) {
      window.TDesign.setTheme(actualTheme)
    }
  }

  // 设置主题模式
  const setThemeMode = (mode: ThemeMode) => {
    themeMode.value = mode
    applyTheme(mode)
    localStorage.setItem(STORAGE_KEY, mode)
  }

  // 切换主题
  const toggleTheme = () => {
    if (themeMode.value === 'light') {
      setThemeMode('dark')
    } else if (themeMode.value === 'dark') {
      setThemeMode('auto')
    } else {
      setThemeMode('light')
    }
  }

  // 从本地存储加载主题设置
  const loadThemeFromStorage = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeMode
    if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
      themeMode.value = savedTheme
    }
  }

  // 监听系统主题变化
  const setupSystemThemeListener = () => {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', () => {
        if (themeMode.value === 'auto') {
          applyTheme('auto')
        }
      })
    }
  }

  // 监听主题模式变化
  watch(
    themeMode,
    (newMode) => {
      applyTheme(newMode)
    },
    { immediate: true }
  )

  // 组件挂载时初始化
  onMounted(() => {
    loadThemeFromStorage()
    setupSystemThemeListener()
    applyTheme(themeMode.value)
  })

  return {
    themeMode,
    isDark,
    setThemeMode,
    toggleTheme,
    detectSystemTheme
  }
}
