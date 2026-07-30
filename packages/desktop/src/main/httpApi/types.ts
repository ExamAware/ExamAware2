import type Koa from 'koa'
import type { HttpApiConfig, HttpApiSwaggerConfig } from '../../shared/types/httpApi'

export type {
  HttpApiConfig,
  HttpApiSwaggerConfig,
  HttpApiToken,
  HttpApiTokenRole
} from '../../shared/types/httpApi'

export const API_PREFIX = '/api/v1'
export const DEFAULT_BODY_LIMIT = '256kb'
export const ALLOWED_CONTENT_TYPES = ['application/json', 'text/plain', 'application/octet-stream']
export const DEFAULT_RATE_LIMIT = { enabled: false, burst: 60, windowMs: 60_000 }

export interface RouteRegistration {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  path: string
  requireAuth?: boolean
  namespace?: string // 为插件提供路由命名空间隔离
  summary?: string
  description?: string
  tags?: string[]
  handler: (ctx: Koa.ParameterizedContext) => Promise<any> | any
}

export const DEFAULT_SWAGGER: HttpApiSwaggerConfig = {
  enabled: false,
  title: 'ExamAware HTTP API',
  version: 'v1',
  description: ''
}

export const DEFAULT_CONFIG: HttpApiConfig = {
  enabled: false,
  port: 31234,
  token: undefined,
  allowRemote: false,
  tokenRequired: false,
  cors: { enabled: false, origins: [] },
  rateLimit: { ...DEFAULT_RATE_LIMIT },
  swagger: { ...DEFAULT_SWAGGER },
  tokens: []
}
