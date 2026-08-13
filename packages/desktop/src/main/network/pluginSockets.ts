import { EventEmitter } from 'node:events'
import dgram from 'node:dgram'
import net from 'node:net'
import tls from 'node:tls'
import { WebSocket } from 'ws'
import { PluginApiError } from '@dsz-examaware/plugin-sdk'
import type {
  NetworkSocketState,
  TcpConnectOptions,
  TcpSocketHandle,
  UdpMessage,
  UdpSocketHandle,
  UdpSocketOptions,
  WebSocketConnectOptions,
  WebSocketHandle
} from '@dsz-examaware/plugin-sdk'
import { assertPluginNetworkTargetAllowed } from './secureFetch'

const DEFAULT_CONNECT_TIMEOUT_MS = 30_000
const DEFAULT_MAX_MESSAGE_BYTES = 2 * 1024 * 1024

export async function connectPluginWebSocket(
  url: string,
  options: WebSocketConnectOptions = {}
): Promise<WebSocketHandle> {
  const parsed = new URL(url)
  if (parsed.protocol !== 'ws:' && parsed.protocol !== 'wss:') {
    throw new PluginApiError(
      'invalid-argument',
      'network.websocket',
      'WebSocket 地址必须使用 ws 或 wss'
    )
  }
  await assertPluginNetworkTargetAllowed(parsed.hostname, options.allowLocalNetwork === true)
  const socket = new WebSocket(url, options.protocols as string | string[] | undefined, {
    headers: options.headers,
    handshakeTimeout: normalizeTimeout(options.timeoutMs),
    maxPayload: normalizeMaxMessageBytes(options.maxMessageBytes)
  })
  const events = new EventEmitter()
  let state: NetworkSocketState = 'connecting'
  const publishState = (next: NetworkSocketState, error?: string) => {
    state = next
    events.emit('state', next, error)
  }
  socket.on('open', () => publishState('open'))
  socket.on('message', (data, binary) => {
    const bytes =
      data instanceof ArrayBuffer
        ? new Uint8Array(data)
        : new Uint8Array(Buffer.from(data as never))
    events.emit('message', binary ? bytes : new TextDecoder().decode(bytes))
  })
  socket.on('error', (error) => publishState('error', error.message))
  socket.on('close', () => publishState('closed'))

  return {
    get state() {
      return state
    },
    send: async (data) => {
      if (socket.readyState !== WebSocket.OPEN) {
        throw new PluginApiError('conflict', 'network.websocket', 'WebSocket 尚未连接')
      }
      socket.send(typeof data === 'string' ? data : Buffer.from(data))
    },
    close: async (code, reason) => {
      if (socket.readyState === WebSocket.CLOSED) return
      publishState('closing')
      socket.close(code, reason)
    },
    onMessage: (listener) => subscribe(events, 'message', listener),
    onStateChanged: (listener) => subscribe(events, 'state', listener),
    dispose: () => {
      events.removeAllListeners()
      if (socket.readyState === WebSocket.OPEN) socket.close()
      else if (socket.readyState !== WebSocket.CLOSED) socket.terminate()
    }
  }
}

export async function connectPluginTcp(options: TcpConnectOptions): Promise<TcpSocketHandle> {
  validatePort(options.port)
  await assertPluginNetworkTargetAllowed(options.host, options.allowLocalNetwork === true)
  const events = new EventEmitter()
  let state: NetworkSocketState = 'connecting'
  const socket = options.tls
    ? tls.connect({
        host: options.host,
        port: options.port,
        servername: options.serverName ?? options.host
      })
    : net.createConnection({ host: options.host, port: options.port })
  const publishState = (next: NetworkSocketState, error?: string) => {
    state = next
    events.emit('state', next, error)
  }
  const timer = setTimeout(
    () => socket.destroy(new Error('connect timeout')),
    normalizeTimeout(options.timeoutMs)
  )
  socket.once(options.tls ? 'secureConnect' : 'connect', () => {
    clearTimeout(timer)
    publishState('open')
  })
  socket.on('data', (data) => {
    const buffer = typeof data === 'string' ? Buffer.from(data) : data
    events.emit('data', new Uint8Array(buffer))
  })
  socket.on('error', (error) => publishState('error', error.message))
  socket.on('close', () => {
    clearTimeout(timer)
    publishState('closed')
  })

  return {
    get state() {
      return state
    },
    write: (data) => writeSocket(socket, data),
    end: async (data) => {
      if (data !== undefined) await writeSocket(socket, data)
      publishState('closing')
      socket.end()
    },
    onData: (listener) => subscribe(events, 'data', listener),
    onStateChanged: (listener) => subscribe(events, 'state', listener),
    dispose: () => {
      events.removeAllListeners()
      socket.destroy()
    }
  }
}

export async function createPluginUdpSocket(
  options: UdpSocketOptions = {}
): Promise<UdpSocketHandle> {
  if (options.localPort !== undefined) validatePort(options.localPort, true)
  const socket = dgram.createSocket(options.family ?? 'udp4')
  const events = new EventEmitter()
  socket.on('message', (data, remote) => {
    const message: UdpMessage = {
      data: new Uint8Array(data),
      address: remote.address,
      port: remote.port,
      family: remote.family
    }
    events.emit('message', message)
  })
  socket.on('error', (error) => events.emit('error-message', error.message))
  if (options.localAddress !== undefined || options.localPort !== undefined) {
    await new Promise<void>((resolve, reject) => {
      socket.once('error', reject)
      socket.bind(options.localPort ?? 0, options.localAddress, () => {
        socket.off('error', reject)
        resolve()
      })
    })
  }
  let closed = false
  const close = async () => {
    if (closed) return
    closed = true
    const { promise, resolve, reject } = Promise.withResolvers<void>()
    try {
      socket.close(resolve)
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ERR_SOCKET_DGRAM_NOT_RUNNING') return
      reject(error)
    }
    await promise
  }
  return {
    get localAddress() {
      try {
        const address = socket.address()
        return {
          address: address.address,
          port: address.port,
          family: address.family === 'IPv6' ? ('IPv6' as const) : ('IPv4' as const)
        }
      } catch {
        return undefined
      }
    },
    send: async (data, port, host) => {
      validatePort(port)
      await assertPluginNetworkTargetAllowed(host, options.allowLocalNetwork === true)
      const { promise, resolve, reject } = Promise.withResolvers<void>()
      socket.send(typeof data === 'string' ? data : Buffer.from(data), port, host, (error) => {
        if (error) reject(error)
        else resolve()
      })
      await promise
    },
    close,
    onMessage: (listener) => subscribe(events, 'message', listener),
    onError: (listener) => subscribe(events, 'error-message', listener),
    dispose: async () => {
      events.removeAllListeners()
      await close()
    }
  }
}

function subscribe<TArgs extends unknown[]>(
  events: EventEmitter,
  event: string,
  listener: (...args: TArgs) => void
) {
  const eventListener = listener as (...args: unknown[]) => void
  events.on(event, eventListener)
  return {
    dispose: () => {
      events.off(event, eventListener)
    }
  }
}

function writeSocket(socket: net.Socket, data: string | Uint8Array): Promise<void> {
  const { promise, resolve, reject } = Promise.withResolvers<void>()
  socket.write(typeof data === 'string' ? data : Buffer.from(data), (error) => {
    if (error) reject(error)
    else resolve()
  })
  return promise
}

function normalizeTimeout(value?: number) {
  return Number.isFinite(value) && value! > 0
    ? Math.min(Math.floor(value!), 300_000)
    : DEFAULT_CONNECT_TIMEOUT_MS
}

function normalizeMaxMessageBytes(value?: number) {
  return Number.isFinite(value) && value! > 0
    ? Math.min(Math.floor(value!), 10 * 1024 * 1024)
    : DEFAULT_MAX_MESSAGE_BYTES
}

function validatePort(port: number, allowZero = false) {
  const minimum = allowZero ? 0 : 1
  if (!Number.isInteger(port) || port < minimum || port > 65_535) {
    throw new PluginApiError('invalid-argument', 'network', `端口必须在 ${minimum}-${65_535} 之间`)
  }
}
