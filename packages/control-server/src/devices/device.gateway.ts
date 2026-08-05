import { randomUUID } from 'node:crypto';
import { HttpException, Inject, Injectable, Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway } from '@nestjs/websockets';
import {
  CONTROL_HEARTBEAT_INTERVAL_MS,
  CONTROL_MAX_MESSAGE_SIZE_BYTES,
  CONTROL_PROTOCOL_CODEC,
  CONTROL_PROTOCOL_ERROR_CODES,
  CONTROL_PROTOCOL_PARSE_ERROR_CODES,
  CONTROL_PROTOCOL_VERSION,
  CONTROL_WEBSOCKET_CLOSE_CODES,
  CONTROL_WEBSOCKET_PATH,
  ControlProtocolParseError,
  DEVICE_CLIENT_MESSAGE_TYPES,
  createCommandResultAcceptedMessage,
  createHeartbeatAcceptedMessage,
  createHelloAcceptedMessage,
  createProtocolErrorMessage,
  parseDeviceClientMessageText,
  parsePreAuthenticationMessageText
} from '@dsz-examaware/control-protocol';
import type {
  CommandResult,
  DeviceClientMessage,
  DeviceHello,
  DeviceServerMessage,
  ProtocolErrorCode
} from '@dsz-examaware/control-protocol';
import type { RawData, WebSocket } from 'ws';
import { ControlCommandsService } from '../commands/control-commands.service.js';
import { ControlOperationsService } from '../commands/control-operations.service.js';
import { DeviceConnectionsService } from './device-connections.service.js';
import { DeviceEnrollmentService } from './device-enrollment.service.js';
import { DevicesRepository } from './devices.repository.js';

interface ConnectionSession {
  connectionId: string;
  deviceId?: string;
  helloTimer: NodeJS.Timeout;
}

const HELLO_TIMEOUT_MS = 10_000;

@Injectable()
@WebSocketGateway({ path: CONTROL_WEBSOCKET_PATH, maxPayload: CONTROL_MAX_MESSAGE_SIZE_BYTES })
export class DeviceGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(DeviceGateway.name);
  private readonly sessions = new WeakMap<WebSocket, ConnectionSession>();
  private readonly processing = new WeakMap<WebSocket, Promise<void>>();

  constructor(
    @Inject(DeviceEnrollmentService)
    private readonly enrollmentService: DeviceEnrollmentService,
    @Inject(DevicesRepository)
    private readonly devicesRepository: DevicesRepository,
    @Inject(DeviceConnectionsService)
    private readonly connectionsService: DeviceConnectionsService,
    @Inject(ControlCommandsService)
    private readonly commandsService: ControlCommandsService,
    @Inject(ControlOperationsService)
    private readonly operationsService: ControlOperationsService
  ) {}

  handleConnection(client: WebSocket): void {
    const connectionId = randomUUID();
    const helloTimer = setTimeout(() => {
      this.fatal(
        client,
        CONTROL_PROTOCOL_ERROR_CODES.authenticationRequired,
        'device.hello was not received before the authentication timeout',
        CONTROL_WEBSOCKET_CLOSE_CODES.authenticationRequired
      );
    }, HELLO_TIMEOUT_MS);
    helloTimer.unref();
    this.sessions.set(client, { connectionId, helloTimer });
    client.on('message', (data, isBinary) => this.enqueue(client, data, isBinary));
  }

  handleDisconnect(client: WebSocket): void {
    const session = this.sessions.get(client);
    if (!session) return;
    clearTimeout(session.helloTimer);
    if (session.deviceId) {
      this.connectionsService.unregister(session.deviceId, session.connectionId);
    }
  }

  private enqueue(client: WebSocket, data: RawData, isBinary: boolean): void {
    const previous = this.processing.get(client) ?? Promise.resolve();
    const next = previous
      .then(() => this.handleMessage(client, data, isBinary))
      .catch((error: unknown) => this.handleUnexpectedError(client, error));
    this.processing.set(client, next);
  }

  private async handleMessage(client: WebSocket, data: RawData, isBinary: boolean): Promise<void> {
    if (isBinary) {
      this.fatal(
        client,
        CONTROL_PROTOCOL_ERROR_CODES.invalidMessage,
        'Protocol v1 accepts UTF-8 JSON text frames only',
        CONTROL_WEBSOCKET_CLOSE_CODES.invalidMessage
      );
      return;
    }

    const session = this.sessions.get(client);
    if (!session) return;
    const text = data.toString();
    let message: DeviceClientMessage;
    try {
      message = session.deviceId
        ? parseDeviceClientMessageText(text)
        : parsePreAuthenticationMessageText(text);
    } catch (error) {
      if (error instanceof ControlProtocolParseError) {
        const unsupported =
          error.code === CONTROL_PROTOCOL_PARSE_ERROR_CODES.protocolVersionUnsupported;
        const oversized = error.code === CONTROL_PROTOCOL_PARSE_ERROR_CODES.messageTooLarge;
        this.fatal(
          client,
          unsupported
            ? CONTROL_PROTOCOL_ERROR_CODES.protocolVersionUnsupported
            : oversized
              ? CONTROL_PROTOCOL_ERROR_CODES.messageTooLarge
              : CONTROL_PROTOCOL_ERROR_CODES.invalidMessage,
          error.message,
          unsupported
            ? CONTROL_WEBSOCKET_CLOSE_CODES.protocolVersionUnsupported
            : oversized
              ? CONTROL_WEBSOCKET_CLOSE_CODES.messageTooLarge
              : CONTROL_WEBSOCKET_CLOSE_CODES.invalidMessage
        );
        return;
      }
      throw error;
    }

    if (message.type === DEVICE_CLIENT_MESSAGE_TYPES.hello) {
      await this.handleHello(client, session, message);
      return;
    }
    if (!session.deviceId) {
      this.fatal(
        client,
        CONTROL_PROTOCOL_ERROR_CODES.authenticationRequired,
        'Authenticate with device.hello before sending other messages',
        CONTROL_WEBSOCKET_CLOSE_CODES.authenticationRequired,
        message.requestId
      );
      return;
    }
    if (message.type === DEVICE_CLIENT_MESSAGE_TYPES.heartbeat) {
      const serverTime = new Date();
      await this.devicesRepository.recordHeartbeat(session.deviceId, message.state, serverTime);
      this.send(
        client,
        createHeartbeatAcceptedMessage({
          requestId: message.requestId,
          serverTime: serverTime.toISOString()
        })
      );
      try {
        await this.operationsService.reconcileDeviceState(message.state);
      } catch (error) {
        this.logger.error('Failed to reconcile device playback state', error);
      }
      return;
    }
    await this.handleCommandResult(client, session.deviceId, message);
  }

  private async handleHello(
    client: WebSocket,
    session: ConnectionSession,
    message: DeviceHello
  ): Promise<void> {
    if (session.deviceId) {
      this.fatal(
        client,
        CONTROL_PROTOCOL_ERROR_CODES.invalidMessage,
        'device.hello may only be sent once per connection',
        CONTROL_WEBSOCKET_CLOSE_CODES.invalidMessage,
        message.requestId
      );
      return;
    }
    const device = await this.enrollmentService.authenticate(message.deviceId, message.credential);
    if (!device) {
      this.fatal(
        client,
        CONTROL_PROTOCOL_ERROR_CODES.invalidCredential,
        'Device ID or credential is invalid or revoked',
        CONTROL_WEBSOCKET_CLOSE_CODES.authenticationRequired,
        message.requestId
      );
      return;
    }

    clearTimeout(session.helloTimer);
    session.deviceId = device.id;
    const serverTime = new Date();
    await this.devicesRepository.recordConnectionState(
      device.id,
      message.identity,
      message.capabilities,
      message.state,
      serverTime
    );
    const previous = this.connectionsService.register({
      connectionId: session.connectionId,
      deviceId: device.id,
      socket: client,
      connectedAt: serverTime
    });
    if (previous && previous.socket !== client) {
      previous.socket.close(
        CONTROL_WEBSOCKET_CLOSE_CODES.connectionReplaced,
        'connection replaced'
      );
    }
    this.send(
      client,
      createHelloAcceptedMessage({
        requestId: message.requestId,
        connectionId: session.connectionId,
        serverTime: serverTime.toISOString(),
        heartbeatIntervalMs: CONTROL_HEARTBEAT_INTERVAL_MS,
        maxMessageSizeBytes: CONTROL_MAX_MESSAGE_SIZE_BYTES,
        protocolVersion: CONTROL_PROTOCOL_VERSION,
        codec: CONTROL_PROTOCOL_CODEC
      })
    );
    await this.commandsService.deliverPending(device.id);
  }

  private async handleCommandResult(
    client: WebSocket,
    deviceId: string,
    result: CommandResult
  ): Promise<void> {
    try {
      await this.commandsService.recordResult(deviceId, result);
      if (result.state) {
        await this.devicesRepository.recordHeartbeat(deviceId, result.state, new Date());
      }
      this.send(
        client,
        createCommandResultAcceptedMessage({
          requestId: result.requestId,
          commandId: result.commandId,
          serverTime: new Date().toISOString()
        })
      );
    } catch (error) {
      const rejection = this.commandResultRejection(error);
      this.send(
        client,
        createProtocolErrorMessage({
          requestId: result.requestId,
          code: rejection.code,
          message: rejection.message,
          fatal: false
        })
      );
    }
  }

  private commandResultRejection(error: unknown): {
    code: ProtocolErrorCode;
    message: string;
  } {
    if (error instanceof HttpException) {
      const response = error.getResponse();
      if (typeof response === 'object' && response !== null) {
        const code = 'code' in response ? response.code : undefined;
        const message = 'message' in response ? response.message : undefined;
        return {
          code:
            code === CONTROL_PROTOCOL_ERROR_CODES.commandExpired
              ? CONTROL_PROTOCOL_ERROR_CODES.commandExpired
              : CONTROL_PROTOCOL_ERROR_CODES.invalidMessage,
          message:
            typeof message === 'string' ? message : 'The command result was rejected by the server'
        };
      }
    }
    return {
      code: CONTROL_PROTOCOL_ERROR_CODES.invalidMessage,
      message: 'The command result was rejected by the server'
    };
  }

  private send(client: WebSocket, message: DeviceServerMessage): void {
    if (client.readyState === 1) client.send(JSON.stringify(message));
  }

  private fatal(
    client: WebSocket,
    code: ProtocolErrorCode,
    message: string,
    closeCode: number,
    requestId?: string
  ): void {
    if (client.readyState !== 1) return;
    client.send(
      JSON.stringify(createProtocolErrorMessage({ requestId, code, message, fatal: true })),
      () => client.close(closeCode, code)
    );
  }

  private handleUnexpectedError(client: WebSocket, error: unknown): void {
    this.logger.error(error);
    this.fatal(
      client,
      CONTROL_PROTOCOL_ERROR_CODES.internalError,
      'An unexpected control protocol error occurred',
      CONTROL_WEBSOCKET_CLOSE_CODES.internalError
    );
  }
}
