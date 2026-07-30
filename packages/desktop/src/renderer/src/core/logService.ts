import type { LogLevel, RendererLogPayload } from '../../../shared/types/desktop'

const defaultSource = 'renderer'

function serializeArgs(args: any[]): { message: string; stack?: string } {
  const parts: string[] = []
  let stack: string | undefined

  args.forEach((arg) => {
    if (arg instanceof Error) {
      parts.push(arg.message)
      stack = stack || arg.stack
    } else if (typeof arg === 'object') {
      try {
        parts.push(JSON.stringify(arg))
      } catch {
        parts.push(String(arg))
      }
    } else {
      parts.push(String(arg))
    }
  })

  return { message: parts.join(' '), stack }
}

function emit(level: LogLevel, source: string | undefined, ...args: any[]) {
  const { message, stack } = serializeArgs(args)
  const payload: RendererLogPayload = {
    level,
    message,
    stack,
    source: source || defaultSource
  }

  try {
    window.api.logging.pushRendererLog(payload)
    return
  } catch {}

  // Fallback to console to avoid dropping logs
  try {
    const msg = [`[${payload.source}]`, message]
    if (level === 'warn') console.warn(...msg)
    else if (level === 'error') console.error(...msg)
    else if (level === 'debug') console.debug(...msg)
    else console.info(...msg)
  } catch {}
}

export const logService = {
  log: (...args: any[]) => emit('log', undefined, ...args),
  info: (...args: any[]) => emit('info', undefined, ...args),
  warn: (...args: any[]) => emit('warn', undefined, ...args),
  error: (...args: any[]) => emit('error', undefined, ...args),
  debug: (...args: any[]) => emit('debug', undefined, ...args),
  scoped: (source: string) => ({
    log: (...args: any[]) => emit('log', source, ...args),
    info: (...args: any[]) => emit('info', source, ...args),
    warn: (...args: any[]) => emit('warn', source, ...args),
    error: (...args: any[]) => emit('error', source, ...args),
    debug: (...args: any[]) => emit('debug', source, ...args)
  })
}
