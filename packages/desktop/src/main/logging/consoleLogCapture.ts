import { addLog } from './logStore'

const CONSOLE_LEVELS = ['log', 'info', 'warn', 'error', 'debug'] as const

export function captureConsoleLogs(): () => void {
  const originalConsole: Partial<Record<(typeof CONSOLE_LEVELS)[number], any>> = {}

  for (const level of CONSOLE_LEVELS) {
    const original = console[level]
    originalConsole[level] = original
    console[level] = (...args: any[]) => {
      try {
        addLog({
          timestamp: Date.now(),
          level,
          process: 'main',
          message: args
            .map((value) => (typeof value === 'string' ? value : JSON.stringify(value)))
            .join(' ')
        })
      } catch {}
      try {
        original.apply(console, args)
      } catch {}
    }
  }

  return () => {
    for (const level of CONSOLE_LEVELS) {
      const original = originalConsole[level]
      if (original) console[level] = original
    }
  }
}
