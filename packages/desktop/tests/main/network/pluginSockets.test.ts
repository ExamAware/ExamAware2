import dgram from 'node:dgram'
import net from 'node:net'
import { afterEach, describe, expect, it } from 'vitest'
import { WebSocketServer } from 'ws'
import type {
  NetworkSocketState,
  TcpSocketHandle,
  WebSocketHandle
} from '@dsz-examaware/plugin-sdk'
import {
  connectPluginTcp,
  connectPluginWebSocket,
  createPluginUdpSocket
} from '../../../src/main/network/pluginSockets'

const cleanup: Array<() => void | Promise<void>> = []

afterEach(async () => {
  while (cleanup.length) await cleanup.pop()?.()
})

describe('plugin sockets', () => {
  it('exchanges WebSocket text messages and reports connection state', async () => {
    const server = new WebSocketServer({ host: '127.0.0.1', port: 0 })
    await onceListening(server)
    cleanup.push(() => new Promise<void>((resolve) => server.close(() => resolve())))
    server.on('connection', (socket) =>
      socket.on('message', (data, isBinary) => socket.send(data, { binary: isBinary }))
    )
    const address = server.address()
    if (!address || typeof address === 'string')
      throw new Error('WebSocket server has no TCP address')

    const socket = await connectPluginWebSocket(`ws://127.0.0.1:${address.port}`, {
      allowLocalNetwork: true
    })
    cleanup.push(() => socket.dispose())
    await waitForOpen(socket)

    const message = onceValue<string | Uint8Array>((resolve) => socket.onMessage(resolve))
    await socket.send('hello')

    await expect(message).resolves.toBe('hello')
  })

  it('exchanges TCP bytes with a local server', async () => {
    const server = net.createServer((connection) =>
      connection.on('data', (data) => connection.write(data))
    )
    await new Promise<void>((resolve, reject) => {
      server.once('error', reject)
      server.listen(0, '127.0.0.1', () => {
        server.off('error', reject)
        resolve()
      })
    })
    cleanup.push(() => new Promise<void>((resolve) => server.close(() => resolve())))
    const address = server.address()
    if (!address || typeof address === 'string') throw new Error('TCP server has no address')

    const socket = await connectPluginTcp({
      host: '127.0.0.1',
      port: address.port,
      allowLocalNetwork: true
    })
    cleanup.push(() => socket.dispose())
    await waitForOpen(socket)

    const data = onceValue<Uint8Array>((resolve) => socket.onData(resolve))
    await socket.write('hello')

    await expect(data).resolves.toEqual(new TextEncoder().encode('hello'))
  })

  it('sends and receives UDP datagrams', async () => {
    const server = dgram.createSocket('udp4')
    await new Promise<void>((resolve, reject) => {
      server.once('error', reject)
      server.bind(0, '127.0.0.1', () => {
        server.off('error', reject)
        resolve()
      })
    })
    cleanup.push(() => new Promise<void>((resolve) => server.close(() => resolve())))
    server.on('message', (data, remote) => server.send(data, remote.port, remote.address))
    const address = server.address()

    const socket = await createPluginUdpSocket({
      localAddress: '127.0.0.1',
      localPort: 0,
      allowLocalNetwork: true
    })
    cleanup.push(() => socket.dispose())
    expect(socket.localAddress).toMatchObject({ address: '127.0.0.1', family: 'IPv4' })
    expect(socket.localAddress?.port).toBeGreaterThan(0)
    const message = onceValue<Uint8Array>((resolve) =>
      socket.onMessage((value) => resolve(value.data))
    )
    await socket.send('hello', address.port, '127.0.0.1')

    await expect(message).resolves.toEqual(new TextEncoder().encode('hello'))
  })

  it('rejects private targets unless local-network access is enabled', async () => {
    await expect(connectPluginTcp({ host: '127.0.0.1', port: 12345 })).rejects.toMatchObject({
      code: 'permission-denied'
    })
    await expect(connectPluginWebSocket('ws://127.0.0.1:12345')).rejects.toMatchObject({
      code: 'permission-denied'
    })
  })

  it('closes a UDP socket that has not been bound or used', async () => {
    const socket = await createPluginUdpSocket()

    await expect(socket.close()).resolves.toBeUndefined()
    await expect(socket.close()).resolves.toBeUndefined()
  })
})

function waitForOpen(socket: WebSocketHandle | TcpSocketHandle): Promise<void> {
  if (socket.state === 'open') return Promise.resolve()
  return onceValue<NetworkSocketState>((resolve) =>
    socket.onStateChanged((state, error) => {
      if (state === 'error') throw new Error(error ?? 'socket connection failed')
      if (state === 'open') resolve(state)
    })
  ).then(() => undefined)
}

function onceValue<T>(subscribe: (resolve: (value: T) => void) => { dispose(): void }): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timeout = setTimeout(() => {
      subscription.dispose()
      reject(new Error('Timed out waiting for socket event'))
    }, 2_000)
    const subscription = subscribe((value) => {
      clearTimeout(timeout)
      subscription.dispose()
      resolve(value)
    })
  })
}

function onceListening(server: WebSocketServer): Promise<void> {
  if (server.address()) return Promise.resolve()
  return new Promise<void>((resolve, reject) => {
    server.once('listening', resolve)
    server.once('error', reject)
  })
}
