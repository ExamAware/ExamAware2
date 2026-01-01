import Koa from 'koa'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'
import type { IncomingMessage } from 'http'
import type { Socket } from 'net'
import { randomUUID } from 'crypto'
import { app } from 'electron'
import { WebSocketServer } from 'ws'
import { appLogger } from '../logging/winstonLogger'
import { getConfig, getAllConfig, patchConfig, setConfig as setConfigValue } from '../configStore'
import { getCurrentTimeMs, getTimeSyncInfo, performTimeSync } from '../ntpService/timeService'
import {
  API_PREFIX,
  ALLOWED_CONTENT_TYPES,
  DEFAULT_BODY_LIMIT,
  DEFAULT_CONFIG,
  DEFAULT_SWAGGER,
  DEFAULT_RATE_LIMIT,
  type HttpApiToken,
  type HttpApiConfig,
  type RouteRegistration
} from './types'
import { findAvailablePort, isLoopback, normalizePath } from './utils'
import { buildSwaggerSpec, renderSwaggerIndex, serveSwaggerAsset } from './swagger'

export type { HttpApiConfig, HttpApiSwaggerConfig, RouteRegistration } from './types'

export class HttpApiService {
  private config: HttpApiConfig = { ...DEFAULT_CONFIG }
  private app: Koa | null = null
  private server: import('http').Server | null = null
  private routes: RouteRegistration[] = []
  private baseRouter: typeof Router | null = null
  private prefix = API_PREFIX
  private limiter = new Map<string, { count: number; resetAt: number }>()
  private swaggerCache: any = null
  private wsServer: WebSocketServer | null = null
  private upgradeHandler: ((req: IncomingMessage, socket: Socket, head: Buffer) => void) | null =
    null

  private getRateLimitKey(ctx: Koa.ParameterizedContext) {
    const auth = ctx.headers.authorization || ''
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : undefined
    return token || ctx.ip || 'unknown'
  }

  private isTokenValid(token: string | undefined, method: string) {
    if (!token) return false

    const single = this.config.token
    if (single && token === single) {
      if (method === 'GET' || method === 'HEAD') return true
      return true
    }

    const list = this.config.tokens || []
    const now = getCurrentTimeMs()
    const matched = list.find((t) => t.value === token && (!t.expiresAt || t.expiresAt > now))
    if (!matched) return false
    const role = matched.role || 'write'
    if (role === 'read' && !['GET', 'HEAD'].includes(method)) return false
    return true
  }

  private ok(ctx: Koa.ParameterizedContext, data: any, extras?: Record<string, any>) {
    ctx.body = { success: true, data, ...(extras ?? {}) }
  }

  private fail(
    ctx: Koa.ParameterizedContext,
    status: number,
    code: string,
    message: string,
    extras?: Record<string, any>
  ) {
    ctx.status = status
    ctx.body = { success: false, code, message, ...(extras ?? {}) }
  }

  private normalizeConfig(partial: Partial<HttpApiConfig>) {
    const merged = { ...DEFAULT_CONFIG, ...partial }
    merged.cors = { ...DEFAULT_CONFIG.cors!, ...(partial.cors ?? merged.cors ?? {}) }
    merged.rateLimit = { ...DEFAULT_RATE_LIMIT, ...(partial.rateLimit ?? merged.rateLimit ?? {}) }
    merged.swagger = { ...DEFAULT_SWAGGER, ...(partial.swagger ?? merged.swagger ?? {}) }
    merged.tokens = Array.isArray(partial.tokens ?? merged.tokens)
      ? (partial.tokens ?? merged.tokens)?.filter((t) => t?.value).map((t) => ({ ...t }))
      : []
    return merged
  }

  private sanitizeConfigInput(raw: any): Partial<HttpApiConfig> {
    const out: Partial<HttpApiConfig> = {}
    if (typeof raw?.enabled === 'boolean') out.enabled = raw.enabled
    if (Number.isFinite(raw?.port)) out.port = Number(raw.port)
    if (typeof raw?.token === 'string') out.token = raw.token || undefined
    if (typeof raw?.allowRemote === 'boolean') out.allowRemote = raw.allowRemote
    if (typeof raw?.tokenRequired === 'boolean') out.tokenRequired = raw.tokenRequired

    if (raw?.cors && typeof raw.cors === 'object') {
      const cors: any = {}
      if (typeof raw.cors.enabled === 'boolean') cors.enabled = raw.cors.enabled
      if (Array.isArray(raw.cors.origins))
        cors.origins = raw.cors.origins.filter((o: any) => typeof o === 'string')
      out.cors = cors
    }

    if (raw?.rateLimit && typeof raw.rateLimit === 'object') {
      const rl: any = {}
      if (typeof raw.rateLimit.enabled === 'boolean') rl.enabled = raw.rateLimit.enabled
      if (Number.isFinite(raw.rateLimit.burst)) rl.burst = Number(raw.rateLimit.burst)
      if (Number.isFinite(raw.rateLimit.windowMs)) rl.windowMs = Number(raw.rateLimit.windowMs)
      out.rateLimit = rl
    }

    if (raw?.swagger && typeof raw.swagger === 'object') {
      const sw: any = {}
      if (typeof raw.swagger.enabled === 'boolean') sw.enabled = raw.swagger.enabled
      if (typeof raw.swagger.title === 'string') sw.title = raw.swagger.title
      if (typeof raw.swagger.description === 'string') sw.description = raw.swagger.description
      if (typeof raw.swagger.version === 'string') sw.version = raw.swagger.version
      out.swagger = sw
    }

    if (Array.isArray(raw?.tokens)) {
      out.tokens = raw.tokens
        .filter((t: any) => typeof t?.value === 'string' && t.value)
        .map((t: any) => ({
          value: t.value,
          label: typeof t.label === 'string' ? t.label : undefined,
          expiresAt: Number.isFinite(t.expiresAt) ? Number(t.expiresAt) : undefined,
          role: t.role === 'read' ? 'read' : t.role === 'write' ? 'write' : undefined
        }))
    }

    return out
  }

  loadConfig() {
    const saved = (getConfig('httpApi') ?? {}) as Partial<HttpApiConfig>
    this.config = this.normalizeConfig(saved)
    this.swaggerCache = null
    return this.config
  }

  getConfig() {
    return { ...this.config }
  }

  async setConfig(partial: Partial<HttpApiConfig>) {
    const prev = this.config
    const next = this.normalizeConfig({ ...prev, ...partial })
    const shouldRestart =
      next.enabled !== prev.enabled ||
      next.port !== prev.port ||
      next.allowRemote !== prev.allowRemote ||
      next.token !== prev.token ||
      next.tokenRequired !== prev.tokenRequired ||
      (next.swagger?.enabled ?? false) !== (prev.swagger?.enabled ?? false)
    this.config = next
    await patchConfig({ httpApi: next })
    this.swaggerCache = null
    if (shouldRestart) {
      await this.restart()
    }
    return this.getConfig()
  }

  private registerCoreRoutes(router: Router) {
    const health = (ctx: Koa.ParameterizedContext) => {
      this.ok(ctx, { status: 'ok', version: app.getVersion(), platform: process.platform })
    }

    const time = (ctx: Koa.ParameterizedContext) => {
      this.ok(ctx, { now: getCurrentTimeMs(), info: getTimeSyncInfo() })
    }

    const syncTime = async (ctx: Koa.ParameterizedContext) => {
      try {
        const result = await performTimeSync()
        this.ok(ctx, { result })
      } catch (error) {
        this.fail(ctx, 500, 'sync_failed', (error as Error).message)
      }
    }

    const appInfo = (ctx: Koa.ParameterizedContext) => {
      this.ok(ctx, {
        version: app.getVersion(),
        platform: process.platform,
        arch: process.arch,
        allowRemote: !!this.config.allowRemote,
        tokenRequired: !!this.config.tokenRequired,
        port: this.config.port,
        cors: this.config.cors,
        rateLimit: this.config.rateLimit,
        swagger: this.config.swagger
      })
    }

    const getHttpConfig = (ctx: Koa.ParameterizedContext) => {
      this.ok(ctx, this.getConfig())
    }

    const patchHttpConfig = async (ctx: Koa.ParameterizedContext) => {
      const body = ctx.request.body ?? {}
      const partial = this.sanitizeConfigInput(body)
      const cfg = await this.setConfig(partial)
      this.ok(ctx, cfg)
    }

    const restartHttp = async (ctx: Koa.ParameterizedContext) => {
      await this.restart()
      this.ok(ctx, this.getConfig())
    }

    const getAppConfig = (ctx: Koa.ParameterizedContext) => {
      this.ok(ctx, getAllConfig())
    }

    const getAppConfigValue = (ctx: Koa.ParameterizedContext) => {
      const key = String(ctx.query.key || '').trim()
      if (!key) return this.fail(ctx, 400, 'bad_request', 'key is required')
      this.ok(ctx, { key, value: getConfig(key) })
    }

    const patchAppConfig = async (ctx: Koa.ParameterizedContext) => {
      const body = ctx.request.body
      if (!body || typeof body !== 'object' || Array.isArray(body)) {
        return this.fail(ctx, 400, 'bad_request', 'Body must be an object')
      }
      await patchConfig(body as any)
      this.ok(ctx, getAllConfig())
    }

    const setAppConfigValue = async (ctx: Koa.ParameterizedContext) => {
      const key = String((ctx.request.body as any)?.key || '').trim()
      if (!key) return this.fail(ctx, 400, 'bad_request', 'key is required')
      const value = (ctx.request.body as any)?.value
      setConfigValue(key, value)
      this.ok(ctx, { key, value })
    }

    // 健康/就绪/存活探针与核心信息
    router.get('/health', health)
    router.get('/healthz', health)
    router.get('/readyz', health)
    router.get('/livez', health)
    router.get('/time', time)
    router.post('/time/sync', syncTime)
    router.get('/app/info', appInfo)
    router.get('/config/http', getHttpConfig)
    router.patch('/config/http', patchHttpConfig)
    router.post('/http/restart', restartHttp)
    router.get('/config/app', getAppConfig)
    router.get('/config/app/value', getAppConfigValue)
    router.patch('/config/app', patchAppConfig)
    router.post('/config/app/value', setAppConfigValue)
  }

  private buildRouter() {
    const router = new Router({ prefix: this.prefix })
    this.registerCoreRoutes(router)

    // swagger 文档路由（仅 JSON 由 router 处理，静态资源在 app 级别处理）
    if (this.config.swagger?.enabled) {
      router.get('/swagger.json', (ctx) => {
        ctx.body = this.getSwaggerSpec()
      })
    }

    this.routes.forEach((route) => {
      const method = route.method.toLowerCase() as keyof Router
      const handler = async (ctx: Koa.ParameterizedContext) => {
        try {
          const res = await route.handler(ctx)
          if (res !== undefined) this.ok(ctx, res)
        } catch (error) {
          appLogger.error('[http] route handler failed', error as Error)
          this.fail(ctx, 500, 'internal_error', 'Internal error')
        }
      }
      const fullPath = normalizePath(route.namespace, route.path)
      ;(router as any)[method](fullPath, handler)
    })

    this.baseRouter = router
    return router
  }

  async start() {
    if (!this.config.enabled) return
    await this.stop()

    const port = await findAvailablePort(this.config.port, 25)
    this.config.port = port
    await patchConfig({ httpApi: this.config })

    this.app = new Koa()

    // 统一错误捕获与访问日志（包含 request-id）
    this.app.use(async (ctx, next) => {
      const requestId = randomUUID()
      ctx.set('X-Request-Id', requestId)
      const start = getCurrentTimeMs()
      try {
        await next()
      } catch (error) {
        appLogger.error('[http] unhandled', error as Error)
        this.fail(ctx, 500, 'internal_error', 'Internal error')
      } finally {
        const ms = getCurrentTimeMs() - start
        appLogger.info(`[http] ${ctx.method} ${ctx.path} -> ${ctx.status} ${ms}ms (${ctx.ip})`)
      }
    })

    // 简易速率限制（IP/Token 粗粒度）
    this.app.use(async (ctx, next) => {
      const { enabled, burst, windowMs } = this.config.rateLimit ?? DEFAULT_RATE_LIMIT
      if (!enabled) return next()
      const key = this.getRateLimitKey(ctx)
      const now = getCurrentTimeMs()
      const bucket = this.limiter.get(key) || { count: 0, resetAt: now + windowMs }
      if (now > bucket.resetAt) {
        bucket.count = 0
        bucket.resetAt = now + windowMs
      }
      bucket.count += 1
      this.limiter.set(key, bucket)
      if (bucket.count > burst) {
        ctx.set('Retry-After', Math.ceil((bucket.resetAt - now) / 1000).toString())
        this.fail(ctx, 429, 'rate_limited', 'Too many requests')
        return
      }
      await next()
    })

    this.app.use(
      bodyParser({
        enableTypes: ['json', 'text'],
        jsonLimit: DEFAULT_BODY_LIMIT,
        textLimit: DEFAULT_BODY_LIMIT
      })
    )

    // 内容类型白名单，防止意外表单/文件上传
    this.app.use(async (ctx, next) => {
      if (ctx.method === 'GET' || ctx.method === 'HEAD') return next()
      const ct = ctx.get('content-type')?.split(';')[0]?.trim().toLowerCase()
      if (!ct || ALLOWED_CONTENT_TYPES.includes(ct)) return next()
      this.fail(ctx, 415, 'unsupported_content_type', 'Unsupported content-type')
    })

    // CORS 白名单
    this.app.use(async (ctx, next) => {
      const cors = this.config.cors ?? DEFAULT_CONFIG.cors!
      const origin = ctx.get('origin') || ''
      if (cors.enabled && origin && cors.origins.includes(origin)) {
        ctx.set('Access-Control-Allow-Origin', origin)
        ctx.set('Vary', 'Origin')
        ctx.set('Access-Control-Allow-Credentials', 'true')
        ctx.set(
          'Access-Control-Allow-Headers',
          ctx.get('Access-Control-Request-Headers') || 'Authorization, Content-Type'
        )
        ctx.set('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS')
      }
      if (ctx.method === 'OPTIONS') {
        ctx.status = 204
        return
      }
      await next()
    })

    this.app.use(async (ctx, next) => {
      if (!this.config.allowRemote && !isLoopback(ctx.ip)) {
        ctx.status = 403
        ctx.body = { success: false, message: 'Remote access disabled' }
        return
      }
      await next()
    })

    this.app.use(async (ctx, next) => {
      const method = ctx.method.toUpperCase()
      const required =
        this.config.tokenRequired || !!this.config.token || (this.config.tokens?.length ?? 0) > 0
      if (!required) return next()
      const provided = ctx.headers.authorization?.startsWith('Bearer ')
        ? ctx.headers.authorization.slice(7)
        : undefined
      if (!provided && !this.config.token && !(this.config.tokens?.length ?? 0)) {
        this.fail(ctx, 401, 'token_required', 'Token required')
        return
      }
      if (this.isTokenValid(provided, method)) return next()
      this.fail(ctx, 401, 'unauthorized', 'Unauthorized')
    })

    // swagger 静态资源与页面（app 级别处理，避免 path-to-regexp 限制）
    if (this.config.swagger?.enabled) {
      this.app.use(async (ctx, next) => {
        if (ctx.method !== 'GET') return next()
        const bases = [`${this.prefix}/swagger`, '/swagger']
        const base = bases.find((b) => ctx.path === b || ctx.path.startsWith(`${b}/`))
        if (!base) return next()
        const rel = ctx.path.slice(base.length) || '/'
        const specUrl =
          base === `${this.prefix}/swagger` ? `${this.prefix}/swagger.json` : '/swagger.json'
        if (rel === '/' || rel === '') {
          ctx.type = 'text/html'
          ctx.body = renderSwaggerIndex(this.config, base, specUrl)
          return
        }
        await serveSwaggerAsset(ctx, base, rel)
      })
    }

    const router = this.buildRouter()
    this.app.use(router.routes())
    this.app.use(router.allowedMethods())

    // 向后兼容短路径（无前缀）核心路由，避免已有调用立刻失效
    const legacyRouter = new Router()
    this.registerCoreRoutes(legacyRouter)
    if (this.config.swagger?.enabled) {
      legacyRouter.get('/swagger.json', (ctx) => {
        ctx.body = this.getSwaggerSpec()
      })
    }
    this.app.use(legacyRouter.routes())
    this.app.use(legacyRouter.allowedMethods())

    this.server = this.app.listen(port, '0.0.0.0', () => {
      appLogger.info(`[http] api listening on ${this.getBaseUrl()}`)
    })

    this.setupWebSocket(this.server)

    this.server.on('error', (error) => {
      appLogger.error('[http] server error', error as Error)
    })
  }

  async stop() {
    if (this.server && this.upgradeHandler) {
      this.server.removeListener('upgrade', this.upgradeHandler)
    }
    if (this.wsServer) {
      await new Promise<void>((resolve) => this.wsServer?.close(() => resolve()))
      this.wsServer = null
    }
    this.upgradeHandler = null
    if (this.server) {
      await new Promise<void>((resolve) => this.server?.close(() => resolve()))
    }
    this.server = null
    this.app = null
  }

  async restart() {
    await this.stop()
    await this.start()
  }

  registerRoute(def: RouteRegistration) {
    this.routes.push(def)
    this.swaggerCache = null
    if (this.app) {
      // rebuild router middleware stack
      const currentConfig = { ...this.config }
      this.stop().then(() => {
        this.config = currentConfig
        this.start()
      })
    }
    return () => {
      this.routes = this.routes.filter((r) => r !== def)
      this.swaggerCache = null
      if (this.app) {
        const currentConfig = { ...this.config }
        this.stop().then(() => {
          this.config = currentConfig
          this.start()
        })
      }
    }
  }

  getBaseUrl() {
    return `http://127.0.0.1:${this.config.port}`
  }

  getApiBaseUrl() {
    return `${this.getBaseUrl()}${this.prefix}`
  }

  private setupWebSocket(server: import('http').Server) {
    this.wsServer = new WebSocketServer({ noServer: true })

    const reject = (socket: Socket, status: number) => {
      socket.write(`HTTP/1.1 ${status} \r\n\r\n`)
      socket.destroy()
    }

    this.upgradeHandler = (req: IncomingMessage, socket: Socket, head: Buffer) => {
      const urlRaw = req.url
      if (!urlRaw) return reject(socket, 400)

      let url: URL
      try {
        url = new URL(urlRaw, `http://${req.headers.host || 'localhost'}`)
      } catch {
        return reject(socket, 400)
      }

      const pathname = url.pathname || ''
      const allowed = pathname === '/ws' || pathname === `${this.prefix}/ws`
      if (!allowed) return reject(socket, 404)

      const remote = req.socket.remoteAddress || ''
      if (!this.config.allowRemote && remote && !isLoopback(remote)) {
        return reject(socket, 403)
      }

      const authHeader = (req.headers['authorization'] as string | undefined) || ''
      const tokenFromHeader = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : undefined
      const tokenFromQuery = url.searchParams.get('token') || undefined
      const provided = tokenFromHeader || tokenFromQuery
      const required =
        this.config.tokenRequired || !!this.config.token || (this.config.tokens?.length ?? 0) > 0
      if (required && !this.isTokenValid(provided, 'GET')) {
        return reject(socket, 401)
      }

      this.wsServer?.handleUpgrade(req, socket, head, (ws) => {
        this.wsServer?.emit('connection', ws, req)
      })
    }

    server.on('upgrade', this.upgradeHandler)

    this.wsServer.on('connection', (ws, req) => {
      ws.send(
        JSON.stringify({
          type: 'welcome',
          ts: getCurrentTimeMs(),
          path: req.url || '',
          apiBase: this.getApiBaseUrl()
        })
      )

      ws.on('message', (data) => {
        try {
          const parsed = JSON.parse(data.toString())
          if (parsed?.type === 'ping') {
            ws.send(JSON.stringify({ type: 'pong', ts: getCurrentTimeMs() }))
          }
        } catch {
          // ignore malformed
        }
      })
    })
  }

  private getSwaggerSpec() {
    if (this.swaggerCache) return this.swaggerCache
    this.swaggerCache = buildSwaggerSpec(this.config, this.routes, this.getApiBaseUrl())
    return this.swaggerCache
  }

  getPublicApi() {
    return {
      config: () => this.getConfig(),
      setConfig: (partial: Partial<HttpApiConfig>) => this.setConfig(partial),
      restart: () => this.restart(),
      url: () => this.getBaseUrl(),
      apiUrl: () => this.getApiBaseUrl(),
      registerRoute: (def: RouteRegistration) => this.registerRoute(def),
      swaggerSpec: () => this.getSwaggerSpec()
    }
  }

  async dispose() {
    await this.stop()
    this.routes = []
    this.baseRouter = null
  }
}

export const httpApiService = new HttpApiService()
