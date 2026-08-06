import {
  COMMAND_RESULT_STATUS,
  CONTROL_MAX_MESSAGE_SIZE_BYTES,
  CONTROL_PROTOCOL_ERROR_CODES,
  CONTROL_WEBSOCKET_CLOSE_CODES,
  DEVICE_SERVER_MESSAGE_TYPES,
  createCommandResultMessage,
  createDeviceHeartbeatMessage,
  createDeviceHelloMessage,
  deviceCapabilitiesSchema,
  parseDeviceServerMessageText,
  type CommandResult,
  type ControlCommand,
  type DeviceCapabilities,
  type DeviceIdentity,
  type DeviceServerMessage,
  type DeviceStateSnapshot,
  type ServerCommandMessage
} from '@dsz-examaware/control-protocol'
import type { ControlApiClient } from './controlApiClient'
import type { ControlCredentialStore } from './controlCredentialStore'
import {
  ControlAgentError,
  validateControlWebSocketUrl,
  type ControlRegistration
} from './controlTypes'

const CONTROL_HANDSHAKE_TIMEOUT_MS = 10_000
const CONTROL_RECONNECT_MIN_DELAY_MS = 1_000
const CONTROL_RECONNECT_MAX_DELAY_MS = 30_000
const CONTROL_SOCKET_OPEN = 1

export type ControlAgentConnectionState =
  | 'stopped'
  | 'unenrolled'
  | 'connecting'
  | 'authenticating'
  | 'online'
  | 'reconnecting'
  | 'authentication-failed'
  | 'incompatible'
  | 'connection-replaced'

export interface ControlAgentSnapshot {
  state: ControlAgentConnectionState
  deviceId?: string
  displayName?: string
  serverUrl?: string
  connectionId?: string
  connectedAt?: string
  lastError?: { code: string; message: string }
}

export interface ControlCommandHandlerResult {
  state?: DeviceStateSnapshot
}

export type ControlCommandHandler = (
  command: ControlCommand,
  message: ServerCommandMessage
) => Promise<ControlCommandHandlerResult | void>

export interface ControlSocket {
  readonly readyState: number
  send(data: string): void
  close(code?: number, reason?: string): void
  terminate?(): void
  on(event: 'open', listener: () => void): this
  on(event: 'message', listener: (data: unknown, isBinary: boolean) => void): this
  on(event: 'close', listener: (code: number, reason: Buffer) => void): this
  on(event: 'error', listener: (error: Error) => void): this
  removeAllListeners(): this
}

export interface ControlAgentLogger {
  info(message: string, metadata?: unknown): void
  warn(message: string, error?: unknown): void
  error(message: string, error?: unknown): void
}

export interface ControlAgentServiceOptions {
  credentialStore: Pick<ControlCredentialStore, 'load' | 'save' | 'clear' | 'watch'>
  apiClient: Pick<ControlApiClient, 'enroll' | 'reportError' | 'callProctor'>
  createSocket: (
    url: string,
    options: { maxPayload: number; perMessageDeflate: false; handshakeTimeout: number }
  ) => ControlSocket
  identity: () => DeviceIdentity
  state: () => DeviceStateSnapshot
  logger: ControlAgentLogger
  capabilities?: DeviceCapabilities
  commandHandlers?: Partial<Record<ControlCommand['type'], ControlCommandHandler>>
  now?: () => Date
  randomUUID?: () => string
  random?: () => number
}

export class ControlAgentService {
  private readonly listeners = new Set<(snapshot: ControlAgentSnapshot) => void>()
  private readonly capabilities: DeviceCapabilities
  private readonly commandHandlers: Partial<Record<ControlCommand['type'], ControlCommandHandler>>
  private readonly now: () => Date
  private readonly createRequestId: () => string
  private readonly random: () => number
  private readonly pendingResults = new Map<string, CommandResult>()
  private readonly completedResults = new Map<string, CommandResult>()
  private readonly inFlightCommands = new Set<string>()
  private snapshot: ControlAgentSnapshot = { state: 'stopped' }
  private displayName: string
  private registration?: ControlRegistration
  private socket?: ControlSocket
  private started = false
  private connectionGeneration = 0
  private reconnectAttempt = 0
  private helloRequestId?: string
  private heartbeatTimer?: ReturnType<typeof setInterval>
  private handshakeTimer?: ReturnType<typeof setTimeout>
  private reconnectTimer?: ReturnType<typeof setTimeout>
  private disposeCredentialWatcher?: () => void

  constructor(private readonly options: ControlAgentServiceOptions) {
    this.capabilities = deviceCapabilitiesSchema.parse(
      options.capabilities ?? { commands: [], managedSettings: [] }
    )
    this.commandHandlers = options.commandHandlers ?? {}
    this.now = options.now ?? (() => new Date())
    this.createRequestId = options.randomUUID ?? (() => crypto.randomUUID())
    this.random = options.random ?? Math.random
    this.displayName = options.identity().displayName
  }

  getSnapshot(): ControlAgentSnapshot {
    return cloneSnapshot(this.snapshot)
  }

  getRegistration(): ControlRegistration | undefined {
    return this.registration ? { ...this.registration } : undefined
  }

  onChanged(listener: (snapshot: ControlAgentSnapshot) => void): () => void {
    this.listeners.add(listener)
    listener(this.getSnapshot())
    return () => this.listeners.delete(listener)
  }

  async start(): Promise<void> {
    if (this.started) return
    this.started = true
    try {
      this.registration = await this.options.credentialStore.load()
    } catch (error) {
      const controlError = ControlAgentError.from(error, 'credential_load_failed')
      this.updateSnapshot('unenrolled', controlError)
      this.options.logger.error('[control] failed to load device credential', controlError)
      return
    }
    if (!this.registration) {
      this.updateSnapshot('unenrolled')
      return
    }
    this.startCredentialWatcher()
    this.connect(false)
  }

  async enroll(
    serverUrl: string,
    enrollmentCode: string,
    displayName?: string
  ): Promise<ControlAgentSnapshot> {
    try {
      const identity = this.options.identity()
      const enrollmentDisplayName = displayName?.trim() || identity.displayName
      const registration = await this.options.apiClient.enroll(serverUrl, enrollmentCode, {
        ...identity,
        displayName: enrollmentDisplayName
      })
      this.displayName = enrollmentDisplayName
      await this.options.credentialStore.save(registration)
      this.registration = registration
      this.startCredentialWatcher()
      this.started = true
      this.reconnectAttempt = 0
      this.closeSocket(CONTROL_WEBSOCKET_CLOSE_CODES.normal, 'device re-enrolled')
      this.connect(false)
      return this.getSnapshot()
    } catch (error) {
      if (
        error instanceof ControlAgentError &&
        error.code === 'device_protocol_version_unsupported'
      ) {
        this.updateSnapshot('incompatible', error)
      }
      throw error
    }
  }

  async reportError(input: Parameters<ControlApiClient['reportError']>[1]): Promise<void> {
    if (!this.registration) {
      throw new ControlAgentError('device_not_enrolled', '设备尚未接入集控服务器')
    }
    await this.options.apiClient.reportError(this.registration, input)
  }

  async callProctor(input: Parameters<ControlApiClient['callProctor']>[1]): Promise<void> {
    if (!this.registration) {
      throw new ControlAgentError('device_not_enrolled', '设备尚未接入集控服务器')
    }
    await this.options.apiClient.callProctor(this.registration, input)
  }
  reportState(): boolean {
    if (this.snapshot.state !== 'online') return false
    return this.send(
      createDeviceHeartbeatMessage({
        requestId: this.createRequestId(),
        sentAt: this.now().toISOString(),
        state: this.options.state()
      })
    )
  }

  async clearEnrollment(): Promise<void> {
    this.disposeCredentialWatcher?.()
    this.disposeCredentialWatcher = undefined
    await this.options.credentialStore.clear()
    this.registration = undefined
    this.pendingResults.clear()
    this.completedResults.clear()
    this.inFlightCommands.clear()
    this.closeSocket(CONTROL_WEBSOCKET_CLOSE_CODES.normal, 'device enrollment cleared')
    this.updateSnapshot('unenrolled')
  }

  async dispose(): Promise<void> {
    this.disposeCredentialWatcher?.()
    this.disposeCredentialWatcher = undefined
    this.started = false
    this.clearTimers()
    this.closeSocket(CONTROL_WEBSOCKET_CLOSE_CODES.normal, 'application shutting down')
    this.pendingResults.clear()
    this.completedResults.clear()
    this.inFlightCommands.clear()
    this.updateSnapshot('stopped')
    this.listeners.clear()
  }

  private startCredentialWatcher(): void {
    this.disposeCredentialWatcher?.()
    this.disposeCredentialWatcher = this.options.credentialStore.watch(async () => {
      const registration = this.registration
      if (registration) await this.options.credentialStore.save(registration)
    })
  }

  private connect(reconnecting: boolean) {
    if (!this.started || !this.registration || this.socket) return
    let websocketUrl: string
    try {
      websocketUrl = validateControlWebSocketUrl(this.registration.websocketUrl)
    } catch (error) {
      this.updateSnapshot('incompatible', ControlAgentError.from(error))
      return
    }
    this.updateSnapshot(reconnecting ? 'reconnecting' : 'connecting')
    const generation = ++this.connectionGeneration
    let socket: ControlSocket
    try {
      socket = this.options.createSocket(websocketUrl, {
        maxPayload: CONTROL_MAX_MESSAGE_SIZE_BYTES,
        perMessageDeflate: false,
        handshakeTimeout: CONTROL_HANDSHAKE_TIMEOUT_MS
      })
    } catch (error) {
      const controlError = ControlAgentError.from(error, 'control_connection_failed')
      this.options.logger.warn('[control] failed to create WebSocket', controlError)
      this.scheduleReconnect(0, controlError.message)
      return
    }
    this.socket = socket
    socket.on('open', () => this.handleOpen(socket, generation))
    socket.on('message', (data, isBinary) => this.handleMessage(socket, generation, data, isBinary))
    socket.on('close', (code, reason) => this.handleClose(socket, generation, code, reason))
    socket.on('error', (error) => {
      if (this.socket !== socket || generation !== this.connectionGeneration) return
      this.options.logger.warn('[control] WebSocket error', error)
    })
  }

  private handleOpen(socket: ControlSocket, generation: number) {
    if (!this.isCurrentSocket(socket, generation) || !this.registration) return
    this.updateSnapshot('authenticating')
    this.helloRequestId = this.createRequestId()
    this.send(
      createDeviceHelloMessage({
        requestId: this.helloRequestId,
        deviceId: this.registration.deviceId,
        credential: this.registration.credential,
        identity: this.options.identity(),
        state: this.options.state(),
        capabilities: this.capabilities
      })
    )
    this.handshakeTimer = setTimeout(() => {
      if (!this.isCurrentSocket(socket, generation) || this.snapshot.state === 'online') return
      this.options.logger.warn('[control] authentication handshake timed out')
      socket.close(CONTROL_WEBSOCKET_CLOSE_CODES.authenticationRequired, 'hello timeout')
    }, CONTROL_HANDSHAKE_TIMEOUT_MS)
  }

  private handleMessage(
    socket: ControlSocket,
    generation: number,
    data: unknown,
    isBinary: boolean
  ) {
    if (!this.isCurrentSocket(socket, generation)) return
    if (isBinary) {
      socket.close(CONTROL_WEBSOCKET_CLOSE_CODES.invalidMessage, 'binary messages are unsupported')
      return
    }
    let message: DeviceServerMessage
    try {
      message = parseDeviceServerMessageText(toMessageText(data))
    } catch (error) {
      this.options.logger.warn('[control] rejected invalid server message', error)
      socket.close(CONTROL_WEBSOCKET_CLOSE_CODES.invalidMessage, 'invalid server message')
      return
    }
    this.dispatchServerMessage(message)
  }

  private dispatchServerMessage(message: DeviceServerMessage) {
    switch (message.type) {
      case DEVICE_SERVER_MESSAGE_TYPES.helloAccepted:
        if (message.requestId !== this.helloRequestId) {
          this.socket?.close(CONTROL_WEBSOCKET_CLOSE_CODES.invalidMessage, 'hello request mismatch')
          return
        }
        this.clearHandshakeTimer()
        this.reconnectAttempt = 0
        this.updateSnapshot('online', undefined, {
          connectionId: message.connectionId,
          connectedAt: this.now().toISOString()
        })
        this.startHeartbeat(message.heartbeatIntervalMs)
        this.resendPendingResults()
        return
      case DEVICE_SERVER_MESSAGE_TYPES.heartbeatAccepted:
        return
      case DEVICE_SERVER_MESSAGE_TYPES.commandResultAccepted:
        this.acceptCommandResult(message.requestId, message.commandId)
        return
      case DEVICE_SERVER_MESSAGE_TYPES.command:
        void this.executeCommand(message)
        return
      case DEVICE_SERVER_MESSAGE_TYPES.error:
        this.handleProtocolError(message)
    }
  }

  private startHeartbeat(intervalMs: number) {
    clearInterval(this.heartbeatTimer)
    this.heartbeatTimer = setInterval(() => this.reportState(), intervalMs)
  }

  private async executeCommand(message: ServerCommandMessage) {
    const existing = this.completedResults.get(message.commandId)
    if (existing) {
      this.sendCommandResult(existing)
      return
    }
    if (this.inFlightCommands.has(message.commandId)) {
      this.sendCommandStatus(message.commandId, COMMAND_RESULT_STATUS.acknowledged)
      return
    }
    if (Date.parse(message.expiresAt) <= this.now().getTime()) {
      this.sendCommandFailure(message.commandId, 'command_expired', '集控命令已过期')
      return
    }
    const handler = this.commandHandlers[message.command.type]
    if (!handler) {
      this.sendCommandFailure(
        message.commandId,
        'command_not_supported',
        `当前客户端不支持命令 ${message.command.type}`
      )
      return
    }

    this.inFlightCommands.add(message.commandId)
    this.sendCommandStatus(message.commandId, COMMAND_RESULT_STATUS.acknowledged)
    try {
      const result = await handler(message.command, message)
      this.sendCommandStatus(
        message.commandId,
        COMMAND_RESULT_STATUS.succeeded,
        result?.state ?? this.options.state()
      )
    } catch (error) {
      const controlError = ControlAgentError.from(error, 'command_execution_failed')
      this.options.logger.error('[control] command execution failed', controlError)
      this.sendCommandFailure(message.commandId, controlError.code, controlError.message)
    } finally {
      this.inFlightCommands.delete(message.commandId)
    }
  }

  private sendCommandFailure(commandId: string, code: string, message: string) {
    const result = createCommandResultMessage({
      requestId: this.createRequestId(),
      commandId,
      status: COMMAND_RESULT_STATUS.failed,
      occurredAt: this.now().toISOString(),
      error: { code, message },
      state: this.options.state()
    })
    this.completedResults.set(commandId, result)
    this.sendCommandResult(result)
  }

  private sendCommandStatus(
    commandId: string,
    status: typeof COMMAND_RESULT_STATUS.acknowledged | typeof COMMAND_RESULT_STATUS.succeeded,
    state = this.options.state()
  ) {
    const result = createCommandResultMessage({
      requestId: this.createRequestId(),
      commandId,
      status,
      occurredAt: this.now().toISOString(),
      state
    })
    if (status === COMMAND_RESULT_STATUS.succeeded) this.completedResults.set(commandId, result)
    this.sendCommandResult(result)
  }

  private sendCommandResult(result: CommandResult) {
    this.pendingResults.set(result.requestId, result)
    this.send(result)
  }

  private resendPendingResults() {
    for (const result of this.pendingResults.values()) this.send(result)
  }

  private acceptCommandResult(requestId: string, commandId: string) {
    const result = this.pendingResults.get(requestId)
    this.pendingResults.delete(requestId)
    if (result?.status !== COMMAND_RESULT_STATUS.acknowledged) {
      this.completedResults.delete(commandId)
    }
  }

  private handleProtocolError(message: Extract<DeviceServerMessage, { type: 'server.error' }>) {
    const error =
      message.code === CONTROL_PROTOCOL_ERROR_CODES.protocolVersionUnsupported
        ? new ControlAgentError(
            message.code,
            '集控服务端协议版本与客户端不兼容，请升级客户端或服务端'
          )
        : new ControlAgentError(message.code, message.message)
    this.options.logger.warn('[control] server rejected protocol message', error)
    if (message.requestId) {
      const result = this.pendingResults.get(message.requestId)
      this.pendingResults.delete(message.requestId)
      if (result && result.status !== COMMAND_RESULT_STATUS.acknowledged) {
        this.completedResults.delete(result.commandId)
      }
    }
    if (message.fatal) {
      const state =
        message.code === CONTROL_PROTOCOL_ERROR_CODES.protocolVersionUnsupported
          ? 'incompatible'
          : 'authentication-failed'
      this.updateSnapshot(state, error)
    }
  }

  private handleClose(socket: ControlSocket, generation: number, code: number, reason: Buffer) {
    if (!this.isCurrentSocket(socket, generation)) return
    socket.removeAllListeners()
    this.socket = undefined
    this.clearConnectionTimers()
    if (!this.started || !this.registration) return

    const reasonText = reason.toString('utf8')
    if (
      code === CONTROL_WEBSOCKET_CLOSE_CODES.authenticationRequired ||
      code === CONTROL_WEBSOCKET_CLOSE_CODES.deviceRevoked
    ) {
      this.updateSnapshot(
        'authentication-failed',
        new ControlAgentError('control_authentication_failed', reasonText || '设备凭据已失效')
      )
      return
    }
    if (code === CONTROL_WEBSOCKET_CLOSE_CODES.protocolVersionUnsupported) {
      if (this.snapshot.lastError?.code !== 'protocol_version_unsupported') {
        this.updateSnapshot(
          'incompatible',
          new ControlAgentError('protocol_version_unsupported', reasonText || '集控协议版本不兼容')
        )
      }
      return
    }
    if (code === CONTROL_WEBSOCKET_CLOSE_CODES.connectionReplaced) {
      this.updateSnapshot(
        'connection-replaced',
        new ControlAgentError('connection_replaced', reasonText || '设备连接已被替换')
      )
      return
    }
    this.scheduleReconnect(code, reasonText)
  }

  private scheduleReconnect(closeCode: number, reason: string) {
    if (!this.started || !this.registration || this.reconnectTimer) return
    const baseDelay = Math.min(
      CONTROL_RECONNECT_MIN_DELAY_MS * 2 ** this.reconnectAttempt,
      CONTROL_RECONNECT_MAX_DELAY_MS
    )
    const delay = Math.max(0, Math.round(baseDelay * (0.8 + this.random() * 0.4)))
    this.reconnectAttempt += 1
    this.updateSnapshot(
      'reconnecting',
      new ControlAgentError('control_connection_closed', reason || '集控连接已断开', {
        closeCode,
        retryInMs: delay
      })
    )
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = undefined
      this.connect(true)
    }, delay)
  }

  private send(message: object) {
    if (!this.socket || this.socket.readyState !== CONTROL_SOCKET_OPEN) return false
    try {
      this.socket.send(JSON.stringify(message))
      return true
    } catch (error) {
      this.options.logger.warn('[control] failed to send WebSocket message', error)
      return false
    }
  }

  private closeSocket(code: number, reason: string) {
    const socket = this.socket
    if (!socket) return
    this.socket = undefined
    this.connectionGeneration += 1
    socket.removeAllListeners()
    if (socket.readyState === CONTROL_SOCKET_OPEN) socket.close(code, reason)
    else socket.terminate?.()
    this.clearConnectionTimers()
  }

  private isCurrentSocket(socket: ControlSocket, generation: number) {
    return this.socket === socket && this.connectionGeneration === generation
  }

  private clearHandshakeTimer() {
    if (!this.handshakeTimer) return
    clearTimeout(this.handshakeTimer)
    this.handshakeTimer = undefined
  }

  private clearConnectionTimers() {
    this.clearHandshakeTimer()
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer)
    this.heartbeatTimer = undefined
  }

  private clearTimers() {
    this.clearConnectionTimers()
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer)
    this.reconnectTimer = undefined
  }

  private updateSnapshot(
    state: ControlAgentConnectionState,
    error?: ControlAgentError,
    patch: Partial<ControlAgentSnapshot> = {}
  ) {
    this.snapshot = {
      state,
      deviceId: this.registration?.deviceId,
      displayName: this.displayName,
      serverUrl: this.registration?.serverUrl,
      connectionId: state === 'online' ? patch.connectionId : undefined,
      connectedAt: state === 'online' ? patch.connectedAt : this.snapshot.connectedAt,
      lastError: error ? { code: error.code, message: error.message } : undefined,
      ...patch
    }
    const snapshot = this.getSnapshot()
    for (const listener of this.listeners) listener(snapshot)
  }
}

function toMessageText(data: unknown): string {
  if (typeof data === 'string') return data
  if (Buffer.isBuffer(data)) return data.toString('utf8')
  if (data instanceof ArrayBuffer) return Buffer.from(data).toString('utf8')
  if (Array.isArray(data) && data.every(Buffer.isBuffer))
    return Buffer.concat(data).toString('utf8')
  throw new ControlAgentError('invalid_server_message', '集控服务器发送了不支持的消息格式')
}

function cloneSnapshot(snapshot: ControlAgentSnapshot): ControlAgentSnapshot {
  return {
    ...snapshot,
    lastError: snapshot.lastError ? { ...snapshot.lastError } : undefined
  }
}
