import { app } from 'electron'
import { appLogger } from '../logging/logger'
import type { DeepLinkHandler, DeepLinkPayload } from '../../shared/types/deepLink'

export type DeepLinkRouteMatcher = string | RegExp | ((payload: DeepLinkPayload) => boolean)

export interface DeepLinkRouteOptions {
  host?: string
  path?: DeepLinkRouteMatcher
}

export interface DeepLinkMiddlewareContext {
  payload: DeepLinkPayload
  route?: DeepLinkRouteOptions
  handled: boolean
}

export type DeepLinkMiddleware = (
  context: DeepLinkMiddlewareContext,
  next: () => Promise<void>
) => void | Promise<void>

export interface DeepLinkService {
  scheme: string
  registerHandler: (name: string, handler: DeepLinkHandler) => () => void
  registerRoute: (name: string, route: DeepLinkRouteOptions, handler: DeepLinkHandler) => () => void
  use: (middleware: DeepLinkMiddleware) => () => void
  dispatch: (url: string) => Promise<void>
}

interface DispatchContext {
  ensureReadyCallback?: () => void
}

interface RegisteredRoute {
  name: string
  options: DeepLinkRouteOptions
  handler: DeepLinkHandler
}

interface RegisteredMiddleware {
  id: number
  handler: DeepLinkMiddleware
}

export class DeepLinkManager {
  private readonly globalHandlers = new Map<string, DeepLinkHandler>()
  private readonly routes = new Map<string, RegisteredRoute>()
  private readonly hostRoutes = new Map<string, Set<string>>()
  private readonly wildcardRoutes = new Set<string>()
  private readonly middlewares: RegisteredMiddleware[] = []
  private middlewareSequence = 0
  private queue: string[] = []
  private readonly scheme: string
  private ensureReadyCallback?: () => void

  constructor(scheme = 'examaware', ctx?: DispatchContext) {
    this.scheme = scheme
    this.ensureReadyCallback = ctx?.ensureReadyCallback
  }

  registerHandler(name: string, handler: DeepLinkHandler) {
    this.globalHandlers.set(name, handler)
    return () => {
      if (this.globalHandlers.get(name) === handler) this.globalHandlers.delete(name)
    }
  }

  registerRoute(name: string, options: DeepLinkRouteOptions, handler: DeepLinkHandler) {
    this.removeRoute(name)
    const route: RegisteredRoute = { name, options: normalizeRouteOptions(options), handler }
    this.routes.set(name, route)
    const bucket = route.options.host
      ? (this.hostRoutes.get(route.options.host) ?? new Set<string>())
      : this.wildcardRoutes
    bucket.add(name)
    if (route.options.host) this.hostRoutes.set(route.options.host, bucket)
    return () => {
      if (this.routes.get(name) === route) this.removeRoute(name)
    }
  }

  use(middleware: DeepLinkMiddleware) {
    const entry = { id: ++this.middlewareSequence, handler: middleware }
    this.middlewares.push(entry)
    return () => {
      const index = this.middlewares.findIndex((candidate) => candidate.id === entry.id)
      if (index >= 0) this.middlewares.splice(index, 1)
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
    void this.dispatch(url)
  }

  async dispatch(url: string) {
    if (!url) return
    if (!app.isReady()) {
      this.queue.push(url)
      return
    }
    const payload = this.parse(url)
    if (!payload) return
    const context: DeepLinkMiddlewareContext = { payload, handled: false }
    const routeMiddleware = async () => {
      await this.runHandlers(payload, context)
    }
    try {
      await composeMiddleware(
        this.middlewares.map((entry) => entry.handler),
        context,
        routeMiddleware
      )
    } catch (error) {
      appLogger.error('[DeepLinkManager] middleware failed', error as Error)
    }
    if (!context.handled && this.ensureReadyCallback) {
      try {
        this.ensureReadyCallback()
      } catch (error) {
        appLogger.error('[DeepLinkManager] ensureReady callback failed', error as Error)
      }
    }
  }

  flushQueue() {
    if (!app.isReady()) return
    const pending = [...this.queue]
    this.queue.length = 0
    pending.forEach((url) => void this.dispatch(url))
  }

  private async runHandlers(payload: DeepLinkPayload, context: DeepLinkMiddlewareContext) {
    for (const handler of this.globalHandlers.values()) {
      if (await this.invokeHandler(handler, payload)) context.handled = true
    }
    const candidates = this.routeCandidates(payload.host)
    for (const name of candidates) {
      const route = this.routes.get(name)
      if (!route || !matchesRoute(route.options, payload)) continue
      context.route = route.options
      if (await this.invokeHandler(route.handler, payload)) context.handled = true
    }
    context.route = undefined
  }

  private routeCandidates(host: string): Iterable<string> {
    const exact = this.hostRoutes.get(host)
    if (!exact?.size) return this.wildcardRoutes
    if (!this.wildcardRoutes.size) return exact
    return mergeRouteNames(exact, this.wildcardRoutes)
  }

  private async invokeHandler(handler: DeepLinkHandler, payload: DeepLinkPayload) {
    try {
      return Boolean(await Promise.resolve(handler(payload)))
    } catch (error) {
      appLogger.error('[DeepLinkManager] handler failed', error as Error)
      return false
    }
  }

  private removeRoute(name: string) {
    const current = this.routes.get(name)
    if (!current) return
    this.routes.delete(name)
    if (!current.options.host) {
      this.wildcardRoutes.delete(name)
      return
    }
    const bucket = this.hostRoutes.get(current.options.host)
    bucket?.delete(name)
    if (!bucket?.size) this.hostRoutes.delete(current.options.host)
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
      appLogger.warn('[DeepLinkManager] invalid url', error as Error)
      return null
    }
  }
}

function normalizeRouteOptions(options: DeepLinkRouteOptions): DeepLinkRouteOptions {
  return {
    ...options,
    host: options.host?.trim().toLowerCase() || undefined,
    path: typeof options.path === 'string' ? normalizePath(options.path) : options.path
  }
}

function matchesRoute(options: DeepLinkRouteOptions, payload: DeepLinkPayload) {
  if (options.host && options.host !== payload.host.toLowerCase()) return false
  const matcher = options.path
  if (!matcher) return true
  if (typeof matcher === 'function') return matcher(payload)
  if (matcher instanceof RegExp) {
    matcher.lastIndex = 0
    return matcher.test(payload.pathname)
  }
  return payload.pathname === matcher
}

function normalizePath(path: string) {
  if (!path || path === '/') return '/'
  return path.startsWith('/') ? path : `/${path}`
}

function* mergeRouteNames(exact: Iterable<string>, wildcard: Iterable<string>) {
  yield* exact
  yield* wildcard
}

async function composeMiddleware(
  middleware: readonly DeepLinkMiddleware[],
  context: DeepLinkMiddlewareContext,
  terminal: () => Promise<void>
) {
  let current = -1
  const dispatch = async (index: number): Promise<void> => {
    if (index <= current) throw new Error('Deep-link middleware called next() more than once')
    current = index
    const handler = middleware[index]
    if (!handler) {
      await terminal()
      return
    }
    await handler(context, () => dispatch(index + 1))
  }
  await dispatch(0)
}

export const deepLinkManager = new DeepLinkManager('examaware')
