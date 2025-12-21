import { app } from 'electron'
import { DeepLinkPayload, DeepLinkHandler } from '../../shared/types/deepLink'

export interface DeepLinkService {
  scheme: string
  registerHandler: (name: string, handler: DeepLinkHandler) => () => void
  dispatch: (url: string) => Promise<void>
}

interface DispatchContext {
  ensureReadyCallback?: () => void
}

export class DeepLinkManager {
  private handlers = new Map<string, DeepLinkHandler>()
  private queue: string[] = []
  private readonly scheme: string
  private ensureReadyCallback?: () => void

  constructor(scheme = 'examaware', ctx?: DispatchContext) {
    this.scheme = scheme
    this.ensureReadyCallback = ctx?.ensureReadyCallback
  }

  registerHandler(name: string, handler: DeepLinkHandler) {
    this.handlers.set(name, handler)
    return () => {
      this.handlers.delete(name)
    }
  }

  setEnsureReadyCallback(cb: () => void) {
    this.ensureReadyCallback = cb
  }

  enqueue(url: string) {
    if (!url) return
    if (!app.isReady()) {
      this.queue.push(url)
      return
    }
    this.dispatch(url)
  }

  async dispatch(url: string) {
    if (!url) return
    if (!app.isReady()) {
      this.queue.push(url)
      return
    }
    const payload = this.parse(url)
    if (!payload) return
    let handled = false
    for (const handler of this.handlers.values()) {
      try {
        const res = await Promise.resolve(handler(payload))
        if (res) handled = true
      } catch (error) {
        console.error('[DeepLinkManager] handler failed', error)
      }
    }
    if (!handled && this.ensureReadyCallback) {
      try {
        this.ensureReadyCallback()
      } catch (error) {
        console.error('[DeepLinkManager] ensureReady callback failed', error)
      }
    }
  }

  flushQueue() {
    if (!app.isReady()) return
    const pending = [...this.queue]
    this.queue.length = 0
    pending.forEach((url) => this.dispatch(url))
  }

  private parse(raw: string): DeepLinkPayload | null {
    try {
      const parsed = new URL(raw)
      if (parsed.protocol.replace(':', '') !== this.scheme) return null
      const query: Record<string, string> = {}
      parsed.searchParams.forEach((value, key) => {
        query[key] = value
      })
      return {
        raw,
        scheme: parsed.protocol.replace(':', ''),
        host: parsed.host,
        pathname: parsed.pathname || '/',
        search: parsed.search,
        query
      }
    } catch (error) {
      console.warn('[DeepLinkManager] invalid url', raw, error)
      return null
    }
  }
}
export const deepLinkManager = new DeepLinkManager('examaware')
