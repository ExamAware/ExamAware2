export type HttpApiTokenRole = 'read' | 'write'

export interface HttpApiToken {
  value: string
  label?: string
  expiresAt?: number
  role?: HttpApiTokenRole
}

export interface HttpApiSwaggerConfig {
  enabled: boolean
  title?: string
  version?: string
  description?: string
}

export interface HttpApiConfig {
  enabled: boolean
  port: number
  token?: string
  allowRemote?: boolean
  tokenRequired?: boolean
  cors?: { enabled: boolean; origins: string[] }
  rateLimit?: { enabled: boolean; burst: number; windowMs: number }
  swagger?: HttpApiSwaggerConfig
  tokens?: HttpApiToken[]
}
