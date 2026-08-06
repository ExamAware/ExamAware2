import type { EnrollDeviceResponse } from '@dsz-examaware/control-protocol'

export interface ControlRegistration extends EnrollDeviceResponse {
  serverUrl: string
  enrolledAt: string
}

export interface ControlProblemDetails {
  status?: number
  code?: string
  message: string
  errors?: unknown
}

export class ControlAgentError extends Error {
  constructor(
    readonly code: string,
    message: string,
    readonly details?: unknown,
    readonly cause?: unknown
  ) {
    super(message)
    this.name = 'ControlAgentError'
  }

  static from(error: unknown, code = 'control_agent_error') {
    if (error instanceof ControlAgentError) return error
    return new ControlAgentError(
      code,
      error instanceof Error ? error.message : String(error),
      undefined,
      error
    )
  }
}

export function normalizeControlServerUrl(input: string): string {
  let url: URL
  try {
    url = new URL(input)
  } catch (error) {
    throw new ControlAgentError('invalid_server_url', '集控服务器地址格式不正确', { input }, error)
  }
  if (url.username || url.password) {
    throw new ControlAgentError('invalid_server_url', '集控服务器地址不得包含内嵌凭据')
  }
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && isLoopbackHost(url.hostname))) {
    throw new ControlAgentError(
      'insecure_server_url',
      '集控服务器必须使用 HTTPS；仅本机开发环境允许 HTTP',
      { protocol: url.protocol, hostname: url.hostname }
    )
  }
  if ((url.pathname !== '/' && url.pathname !== '') || url.search || url.hash) {
    throw new ControlAgentError('invalid_server_url', '集控服务器地址只能包含协议、主机和端口')
  }
  url.pathname = '/'
  return url.toString()
}

export function validateControlWebSocketUrl(input: string): string {
  let url: URL
  try {
    url = new URL(input)
  } catch (error) {
    throw new ControlAgentError(
      'invalid_websocket_url',
      '集控 WebSocket 地址格式不正确',
      { input },
      error
    )
  }
  if (url.username || url.password) {
    throw new ControlAgentError('invalid_websocket_url', '集控 WebSocket 地址不得包含内嵌凭据')
  }
  if (url.protocol !== 'wss:' && !(url.protocol === 'ws:' && isLoopbackHost(url.hostname))) {
    throw new ControlAgentError(
      'insecure_websocket_url',
      '集控连接必须使用 WSS；仅本机开发环境允许 WS',
      { protocol: url.protocol, hostname: url.hostname }
    )
  }
  return url.toString()
}

function isLoopbackHost(hostname: string) {
  const normalized = hostname.toLowerCase().replace(/^\[|\]$/g, '')
  return (
    normalized === 'localhost' ||
    normalized.endsWith('.localhost') ||
    normalized === '127.0.0.1' ||
    normalized === '::1'
  )
}
