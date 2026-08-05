import { EventEmitter } from 'node:events'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  COMMAND_RESULT_STATUS,
  CONTROL_CAPABILITY_NAMES,
  CONTROL_HEARTBEAT_INTERVAL_MS,
  CONTROL_MAX_MESSAGE_SIZE_BYTES,
  CONTROL_PROTOCOL_CODEC,
  CONTROL_PROTOCOL_VERSION,
  CONTROL_WEBSOCKET_CLOSE_CODES,
  type ControlCommand,
  type DeviceClientMessage
} from '@dsz-examaware/control-protocol'
import {
  ControlAgentService,
  type ControlSocket
} from '../../../src/main/control/controlAgentService'
import type { ControlRegistration } from '../../../src/main/control/controlTypes'

const deviceId = 'b3df3de8-2da0-4a62-8c4f-2ac4570946a4'
const connectionId = 'bbdd2d49-063f-48ee-918d-aa672477d2ca'
const commandId = '3e4f6856-c8cf-4798-aab0-1bb3717173d6'
const deploymentId = '43408313-512f-4e86-a91b-0a5f58b7ee3e'
const examConfigVersionId = '3b29e587-cf91-4962-9d80-e78fd1471892'

class FakeControlSocket extends EventEmitter implements ControlSocket {
  readyState = 0
  readonly sent: DeviceClientMessage[] = []

  open() {
    this.readyState = 1
    this.emit('open')
  }

  receive(message: object) {
    this.emit('message', Buffer.from(JSON.stringify(message)), false)
  }

  send(data: string) {
    this.sent.push(JSON.parse(data) as DeviceClientMessage)
  }

  close(code = 1000, reason = '') {
    if (this.readyState === 3) return
    this.readyState = 3
    this.emit('close', code, Buffer.from(reason))
  }

  terminate() {
    this.close()
  }
}

function registration(): ControlRegistration {
  return {
    serverUrl: 'http://127.0.0.1:3100/',
    deviceId,
    credential: 'a'.repeat(48),
    websocketUrl: 'ws://127.0.0.1:3100/device/v1/connect',
    protocolVersion: CONTROL_PROTOCOL_VERSION,
    enrolledAt: '2026-08-04T09:00:00.000Z'
  }
}

function createService(
  commandHandler = vi.fn().mockResolvedValue(undefined),
  commandType: ControlCommand['type'] = 'playback.stop'
) {
  const sockets: FakeControlSocket[] = []
  let requestSequence = 0
  const callProctor = vi.fn().mockResolvedValue(undefined)
  const service = new ControlAgentService({
    credentialStore: {
      load: vi.fn().mockResolvedValue(registration()),
      save: vi.fn(),
      clear: vi.fn()
    },
    apiClient: {
      enroll: vi.fn(),
      reportError: vi.fn(),
      callProctor
    },
    createSocket: (_url, options) => {
      expect(options).toEqual({
        maxPayload: CONTROL_MAX_MESSAGE_SIZE_BYTES,
        perMessageDeflate: false,
        handshakeTimeout: 10_000
      })
      const socket = new FakeControlSocket()
      sockets.push(socket)
      return socket
    },
    identity: () => ({
      displayName: 'Room 101',
      platform: 'darwin',
      architecture: 'arm64',
      appVersion: '1.4.4',
      protocolVersion: CONTROL_PROTOCOL_VERSION
    }),
    state: () => ({ player: { status: 'idle' } }),
    capabilities: {
      commands: [{ name: CONTROL_CAPABILITY_NAMES.playback, version: 1 }],
      managedSettings: []
    },
    commandHandlers: { [commandType]: commandHandler },
    logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() },
    now: () => new Date('2026-08-04T09:00:00.000Z'),
    randomUUID: () => `00000000-0000-4000-8000-${String(++requestSequence).padStart(12, '0')}`,
    random: () => 0.5
  })
  return { service, sockets, commandHandler, callProctor }
}

function acceptHello(socket: FakeControlSocket) {
  const hello = socket.sent[0]
  expect(hello.type).toBe('device.hello')
  socket.receive({
    type: 'server.hello-accepted',
    requestId: hello.requestId,
    connectionId,
    serverTime: '2026-08-04T09:00:00.000Z',
    heartbeatIntervalMs: CONTROL_HEARTBEAT_INTERVAL_MS,
    maxMessageSizeBytes: CONTROL_MAX_MESSAGE_SIZE_BYTES,
    protocolVersion: CONTROL_PROTOCOL_VERSION,
    codec: CONTROL_PROTOCOL_CODEC
  })
}

describe('ControlAgentService', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('authenticates, reports state heartbeats and reconnects with bounded backoff', async () => {
    const { service, sockets } = createService()

    await service.start()
    expect(service.getSnapshot().state).toBe('connecting')
    sockets[0].open()
    expect(sockets[0].sent[0]).toMatchObject({
      type: 'device.hello',
      deviceId,
      capabilities: {
        commands: [{ name: 'playback', version: 1 }],
        managedSettings: []
      }
    })

    acceptHello(sockets[0])
    expect(service.getSnapshot()).toMatchObject({ state: 'online', deviceId, connectionId })
    await vi.advanceTimersByTimeAsync(CONTROL_HEARTBEAT_INTERVAL_MS)
    expect(sockets[0].sent.at(-1)).toMatchObject({
      type: 'device.heartbeat',
      state: { player: { status: 'idle' } }
    })

    sockets[0].close(1006, 'network lost')
    expect(service.getSnapshot()).toMatchObject({ state: 'reconnecting' })
    await vi.advanceTimersByTimeAsync(1_000)
    expect(sockets).toHaveLength(2)
  })

  it('submits proctor calls with the enrolled device credential', async () => {
    const { service, callProctor } = createService()
    await service.start()

    await service.callProctor({
      occurredAt: '2026-08-04T09:00:00.000Z',
      roomNumber: 'A-101'
    })

    expect(callProctor).toHaveBeenCalledWith(registration(), {
      occurredAt: '2026-08-04T09:00:00.000Z',
      roomNumber: 'A-101'
    })
  })

  it('acknowledges each supported command once and returns its terminal result', async () => {
    const { service, sockets, commandHandler } = createService()
    await service.start()
    sockets[0].open()
    acceptHello(sockets[0])

    const command = {
      type: 'server.command',
      commandId,
      issuedAt: '2026-08-04T08:59:00.000Z',
      expiresAt: '2026-08-04T09:05:00.000Z',
      command: {
        type: 'playback.stop',
        payload: { deploymentId, reason: 'Exam finished' }
      }
    }
    sockets[0].receive(command)
    await vi.waitFor(() => expect(commandHandler).toHaveBeenCalledTimes(1))
    await vi.waitFor(() =>
      expect(sockets[0].sent.filter((message) => message.type === 'command.result')).toHaveLength(2)
    )
    const results = sockets[0].sent.filter((message) => message.type === 'command.result')
    expect(results.map((result) => result.status)).toEqual([
      COMMAND_RESULT_STATUS.acknowledged,
      COMMAND_RESULT_STATUS.succeeded
    ])

    sockets[0].receive(command)
    await vi.waitFor(() =>
      expect(sockets[0].sent.filter((message) => message.type === 'command.result')).toHaveLength(3)
    )
    expect(commandHandler).toHaveBeenCalledTimes(1)
    expect(sockets[0].sent.at(-1)).toMatchObject({
      type: 'command.result',
      status: COMMAND_RESULT_STATUS.succeeded
    })
  })

  it('returns the playing deployment state after an activate command succeeds', async () => {
    const commandHandler = vi.fn().mockResolvedValue({
      state: {
        player: { status: 'playing', deploymentId, examConfigVersionId }
      }
    })
    const { service, sockets } = createService(commandHandler, 'playback.activate')
    await service.start()
    sockets[0].open()
    acceptHello(sockets[0])

    sockets[0].receive({
      type: 'server.command',
      commandId,
      issuedAt: '2026-08-04T08:59:00.000Z',
      expiresAt: '2026-08-04T09:05:00.000Z',
      command: {
        type: 'playback.activate',
        payload: { deploymentId, examConfigVersionId }
      }
    })

    await vi.waitFor(() =>
      expect(sockets[0].sent).toContainEqual(
        expect.objectContaining({
          type: 'command.result',
          status: COMMAND_RESULT_STATUS.succeeded,
          state: {
            player: { status: 'playing', deploymentId, examConfigVersionId }
          }
        })
      )
    )
  })
  it('does not reconnect after credential rejection', async () => {
    const { service, sockets } = createService()
    await service.start()
    sockets[0].open()
    sockets[0].close(CONTROL_WEBSOCKET_CLOSE_CODES.authenticationRequired, 'credential rotated')

    expect(service.getSnapshot()).toMatchObject({
      state: 'authentication-failed',
      lastError: { code: 'control_authentication_failed' }
    })
    await vi.advanceTimersByTimeAsync(60_000)
    expect(sockets).toHaveLength(1)
  })

  it('preserves the friendly protocol error after the 4406 close', async () => {
    const { service, sockets } = createService()
    await service.start()
    sockets[0].open()
    sockets[0].receive({
      type: 'server.error',
      code: 'protocol_version_unsupported',
      message: 'protocol_version_unsupported',
      fatal: true
    })
    sockets[0].close(
      CONTROL_WEBSOCKET_CLOSE_CODES.protocolVersionUnsupported,
      'protocol_version_unsupported'
    )

    expect(service.getSnapshot()).toMatchObject({
      state: 'incompatible',
      lastError: {
        code: 'protocol_version_unsupported',
        message: '集控服务端协议版本与客户端不兼容，请升级客户端或服务端'
      }
    })
  })
})
