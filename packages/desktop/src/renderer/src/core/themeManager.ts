export type ThemeMode = 'light' | 'dark' | 'auto'

let currentMode: ThemeMode = 'auto'
let mediaQuery: MediaQueryList | null = null
let mediaListener: ((e: MediaQueryListEvent) => void) | null = null

function syncTitlebarOverlay(mode: 'light' | 'dark') {
  try {
    if (typeof window === 'undefined') return
    const api = window.electronAPI
    if (!api || api.platform !== 'win32') return
    if (typeof api.setTitlebarTheme !== 'function') return
    api.setTitlebarTheme(mode)
  } catch (error) {
    console.debug('[theme] sync titlebar overlay failed', error)
  }
}

function setDomTheme(mode: 'light' | 'dark') {
  const doc = document.documentElement
  if (mode === 'dark') {
    doc.classList.add('dark')
    doc.setAttribute('theme-mode', 'dark')
  } else {
    doc.classList.remove('dark')
    doc.setAttribute('theme-mode', 'light')
  }
  syncTitlebarOverlay(mode)
}

function teardownAutoListener() {
  if (mediaQuery && mediaListener) {
    try {
      mediaQuery.removeEventListener('change', mediaListener)
    } catch {}
  }
  mediaQuery = null
  mediaListener = null
}

function setupAutoListener() {
  teardownAutoListener()
  if (!window.matchMedia) return
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaListener = (e: MediaQueryListEvent) => {
    setDomTheme(e.matches ? 'dark' : 'light')
  }
  // 初始化一次并监听
  setDomTheme(mediaQuery.matches ? 'dark' : 'light')
  mediaQuery.addEventListener('change', mediaListener)
}

export function applyThemeMode(mode: ThemeMode) {
  currentMode = mode
  if (mode === 'auto') {
    setupAutoListener()
  } else {
    teardownAutoListener()
    setDomTheme(mode)
  }
}

export function getThemeMode(): ThemeMode {
  return currentMode
}
