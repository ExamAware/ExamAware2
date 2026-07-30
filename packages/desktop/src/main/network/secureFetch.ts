import { promises as dns } from 'node:dns'
import { isIP } from 'node:net'
import { PluginApiError } from '@dsz-examaware/plugin-sdk'

const DEFAULT_TIMEOUT_MS = 30_000
const DEFAULT_MAX_BYTES = 2 * 1024 * 1024
const MAX_REDIRECTS = 5

export interface SecureFetchOptions {
  method?: string
  headers?: Readonly<Record<string, string>>
  body?: string | Uint8Array
  timeoutMs?: number
  maxBytes?: number
  allowLocalNetwork?: boolean
  signal?: AbortSignal
}

export interface SecureFetchResult {
  status: number
  headers: Record<string, string>
  body: Uint8Array
  url: string
}

export async function secureFetch(
  input: string,
  options: SecureFetchOptions = {}
): Promise<SecureFetchResult> {
  let current = parseHttpUrl(input)
  const timeoutMs = normalizePositiveInteger(options.timeoutMs, DEFAULT_TIMEOUT_MS, 300_000)
  const maxBytes = normalizePositiveInteger(options.maxBytes, DEFAULT_MAX_BYTES, 10 * 1024 * 1024)
  const controller = new AbortController()
  const onExternalAbort = () => controller.abort(options.signal?.reason)
  options.signal?.addEventListener('abort', onExternalAbort, { once: true })
  const timer = setTimeout(() => controller.abort(new Error('request timeout')), timeoutMs)

  try {
    for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects += 1) {
      await assertNetworkTargetAllowed(current, options.allowLocalNetwork === true)
      let response: Response
      try {
        response = await fetch(current, {
          method: options.method ?? 'GET',
          headers: options.headers,
          body:
            typeof options.body === 'string' || options.body === undefined
              ? options.body
              : new Uint8Array(options.body).buffer,
          redirect: 'manual',
          signal: controller.signal
        })
      } catch (error) {
        if (controller.signal.aborted) {
          throw new PluginApiError(
            options.signal?.aborted ? 'cancelled' : 'timeout',
            'network',
            options.signal?.aborted ? '网络请求已取消' : `网络请求超时（${timeoutMs}ms）`,
            { url: current.toString(), timeoutMs },
            error
          )
        }
        throw new PluginApiError(
          'network-error',
          'network',
          error instanceof Error ? error.message : '网络请求失败',
          { url: current.toString() },
          error
        )
      }

      if (isRedirect(response.status)) {
        const location = response.headers.get('location')
        if (!location) {
          throw new PluginApiError('network-error', 'network', '重定向响应缺少 Location', {
            url: current.toString(),
            status: response.status
          })
        }
        if (redirects === MAX_REDIRECTS) {
          throw new PluginApiError('network-error', 'network', '网络请求重定向次数过多', {
            url: current.toString(),
            maxRedirects: MAX_REDIRECTS
          })
        }
        current = parseHttpUrl(new URL(location, current).toString())
        continue
      }

      const contentLength = Number(response.headers.get('content-length') ?? 0)
      if (Number.isFinite(contentLength) && contentLength > maxBytes) {
        throw new PluginApiError('invalid-argument', 'network', '响应内容超过大小限制', {
          url: current.toString(),
          contentLength,
          maxBytes
        })
      }

      return {
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        body: await readLimitedBody(response, maxBytes),
        url: current.toString()
      }
    }
  } finally {
    clearTimeout(timer)
    options.signal?.removeEventListener('abort', onExternalAbort)
  }

  throw new PluginApiError('internal-error', 'network', '网络请求未产生响应')
}

function parseHttpUrl(input: string) {
  let url: URL
  try {
    url = new URL(input)
  } catch (error) {
    throw new PluginApiError('invalid-argument', 'network', 'URL 格式不正确', { input }, error)
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new PluginApiError('invalid-argument', 'network', '仅支持 http/https URL', {
      protocol: url.protocol
    })
  }
  if (url.username || url.password) {
    throw new PluginApiError('invalid-argument', 'network', 'URL 不得包含内嵌凭据')
  }
  return url
}

async function assertNetworkTargetAllowed(url: URL, allowLocalNetwork: boolean) {
  if (allowLocalNetwork) return
  const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, '')
  if (host === 'localhost' || host.endsWith('.localhost') || isPrivateAddress(host)) {
    throw new PluginApiError(
      'permission-denied',
      'network',
      '访问本机或局域网地址需要 network.local 权限',
      {
        host
      }
    )
  }

  let addresses: Array<{ address: string }> = []
  try {
    addresses = await dns.lookup(host, { all: true, verbatim: true })
  } catch (error) {
    throw new PluginApiError('network-error', 'network', '无法解析目标主机', { host }, error)
  }
  if (addresses.some(({ address }) => isPrivateAddress(address))) {
    throw new PluginApiError(
      'permission-denied',
      'network',
      '访问本机或局域网地址需要 network.local 权限',
      {
        host,
        addresses: addresses.map(({ address }) => address)
      }
    )
  }
}

function isPrivateAddress(input: string) {
  const address = input.toLowerCase()
  if (!isIP(address)) return false
  if (address === '::1' || address === '::' || address.startsWith('fe80:')) return true
  if (address.startsWith('fc') || address.startsWith('fd')) return true
  if (address.startsWith('::ffff:')) return isPrivateAddress(address.slice(7))
  const parts = address.split('.').map(Number)
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part))) return false
  return (
    parts[0] === 10 ||
    parts[0] === 127 ||
    (parts[0] === 169 && parts[1] === 254) ||
    (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
    (parts[0] === 192 && parts[1] === 168) ||
    parts[0] === 0
  )
}

async function readLimitedBody(response: Response, maxBytes: number) {
  if (!response.body) return new Uint8Array()
  const reader = response.body.getReader()
  const chunks: Uint8Array[] = []
  let length = 0
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      length += value.byteLength
      if (length > maxBytes) {
        await reader.cancel()
        throw new PluginApiError('invalid-argument', 'network', '响应内容超过大小限制', {
          maxBytes
        })
      }
      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }
  const result = new Uint8Array(length)
  let offset = 0
  for (const chunk of chunks) {
    result.set(chunk, offset)
    offset += chunk.byteLength
  }
  return result
}

function isRedirect(status: number) {
  return status === 301 || status === 302 || status === 303 || status === 307 || status === 308
}

function normalizePositiveInteger(value: number | undefined, fallback: number, maximum: number) {
  if (value === undefined) return fallback
  if (!Number.isFinite(value) || value <= 0) {
    throw new PluginApiError('invalid-argument', 'network', '限制值必须是正数', { value })
  }
  return Math.min(Math.floor(value), maximum)
}
