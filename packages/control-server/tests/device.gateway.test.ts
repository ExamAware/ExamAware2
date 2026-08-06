import { GoneException } from '@nestjs/common';
import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import {
  COMMAND_RESULT_STATUS,
  CONTROL_PROTOCOL_ERROR_CODES,
  CONTROL_PROTOCOL_VERSION,
  CONTROL_WEBSOCKET_CLOSE_CODES,
  CONTROL_WEBSOCKET_PATH,
  MANAGED_SETTING_KEYS,
  PLAYER_STATUS,
  DEVICE_SERVER_MESSAGE_TYPES,
  createCommandResultMessage,
  createDeviceHeartbeatMessage,
  createDeviceHelloMessage,
  deviceServerMessageSchema
} from '@dsz-examaware/control-protocol';
import type { DeviceHello, DeviceServerMessage } from '@dsz-examaware/control-protocol';
import { WebSocket } from 'ws';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Mock } from 'vitest';
import { configureApplication } from '../src/api/application.js';
import { ControlCommandsService } from '../src/commands/control-commands.service.js';
import { ControlOperationsService } from '../src/commands/control-operations.service.js';
import { DeviceConnectionsService } from '../src/devices/device-connections.service.js';
import { DeviceEnrollmentService } from '../src/devices/device-enrollment.service.js';
import { DeviceGateway } from '../src/devices/device.gateway.js';
import { DevicesRepository } from '../src/devices/devices.repository.js';
import { PoliciesService } from '../src/policies/policies.service.js';

const deviceId = '779267c1-75b9-43f0-ae1c-9b4b7d782013';
const credential = 'c'.repeat(43);
const sockets = new Set<WebSocket>();
let app: INestApplication;
let websocketUrl: string;
let enrollmentService: { authenticate: ReturnType<typeof vi.fn> };
let devicesRepository: {
  recordConnectionState: ReturnType<typeof vi.fn>;
  recordHeartbeat: ReturnType<typeof vi.fn>;
};
let commandsService: {
  deliverPending: ReturnType<typeof vi.fn>;
  recordResult: ReturnType<typeof vi.fn>;
};
let operationsService: { reconcileDeviceState: Mock; applyPolicySettings: Mock };
let policiesService: { effectiveForDevice: Mock };

function helloMessage() {
  return createDeviceHelloMessage({
    requestId: crypto.randomUUID(),
    deviceId,
    credential,
    identity: {
      displayName: 'Room 101',
      platform: 'linux',
      architecture: 'arm64',
      appVersion: '2.0.0',
      protocolVersion: CONTROL_PROTOCOL_VERSION
    },
    state: { player: { status: PLAYER_STATUS.idle } }
  });
}

async function openSocket(): Promise<WebSocket> {
  const socket = new WebSocket(websocketUrl);
  sockets.add(socket);
  await new Promise<void>((resolve, reject) => {
    socket.once('open', resolve);
    socket.once('error', reject);
  });
  return socket;
}

function nextMessage(socket: WebSocket): Promise<DeviceServerMessage> {
  return new Promise((resolve, reject) => {
    socket.once('message', (data) => {
      try {
        resolve(deviceServerMessageSchema.parse(JSON.parse(data.toString())));
      } catch (error) {
        reject(error);
      }
    });
    socket.once('error', reject);
  });
}

function nextClose(socket: WebSocket): Promise<{ code: number; reason: string }> {
  return new Promise((resolve) => {
    socket.once('close', (code, reason) => resolve({ code, reason: reason.toString() }));
  });
}

async function authenticateSocket(
  socket: WebSocket,
  hello: DeviceHello = helloMessage()
): Promise<DeviceServerMessage> {
  const response = nextMessage(socket);
  socket.send(JSON.stringify(hello));
  return response;
}

beforeEach(async () => {
  enrollmentService = {
    authenticate: vi.fn().mockResolvedValue({ id: deviceId })
  };
  devicesRepository = {
    recordConnectionState: vi.fn().mockResolvedValue(undefined),
    recordHeartbeat: vi.fn().mockResolvedValue(undefined)
  };
  commandsService = {
    deliverPending: vi.fn().mockResolvedValue(undefined),
    recordResult: vi.fn().mockResolvedValue(undefined)
  };
  operationsService = {
    reconcileDeviceState: vi.fn().mockResolvedValue(undefined),
    applyPolicySettings: vi.fn().mockResolvedValue(undefined)
  };
  policiesService = {
    effectiveForDevice: vi.fn().mockResolvedValue({ policies: [], settings: [] })
  };
  const moduleRef = await Test.createTestingModule({
    providers: [
      DeviceGateway,
      DeviceConnectionsService,
      { provide: DeviceEnrollmentService, useValue: enrollmentService },
      { provide: DevicesRepository, useValue: devicesRepository },
      { provide: ControlCommandsService, useValue: commandsService },
      { provide: ControlOperationsService, useValue: operationsService },
      { provide: PoliciesService, useValue: policiesService }
    ]
  }).compile();
  app = moduleRef.createNestApplication();
  configureApplication(app, { docsEnabled: false, shutdownHooks: false });
  await app.listen(0, '127.0.0.1');
  const address = app.getHttpServer().address();
  if (!address || typeof address === 'string')
    throw new Error('Test server did not bind a TCP port');
  websocketUrl = `ws://127.0.0.1:${address.port}${CONTROL_WEBSOCKET_PATH}`;
});

afterEach(async () => {
  for (const socket of sockets) {
    if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING) {
      socket.terminate();
    }
  }
  sockets.clear();
  await app.close();
});

describe('DeviceGateway', () => {
  it('rejects non-hello messages before authentication', async () => {
    const socket = await openSocket();
    const response = nextMessage(socket);
    const closed = nextClose(socket);
    socket.send(
      JSON.stringify(
        createDeviceHeartbeatMessage({
          requestId: crypto.randomUUID(),
          sentAt: new Date().toISOString(),
          state: {}
        })
      )
    );

    await expect(response).resolves.toEqual(
      expect.objectContaining({
        type: DEVICE_SERVER_MESSAGE_TYPES.error,
        code: CONTROL_PROTOCOL_ERROR_CODES.invalidMessage,
        fatal: true
      })
    );
    await expect(closed).resolves.toEqual(
      expect.objectContaining({ code: CONTROL_WEBSOCKET_CLOSE_CODES.invalidMessage })
    );
  });

  it('authenticates hello, records state, and accepts heartbeats', async () => {
    const socket = await openSocket();
    const hello = helloMessage();
    const helloResponse = nextMessage(socket);
    socket.send(JSON.stringify(hello));

    await expect(helloResponse).resolves.toEqual(
      expect.objectContaining({
        type: DEVICE_SERVER_MESSAGE_TYPES.helloAccepted,
        requestId: hello.requestId
      })
    );
    expect(devicesRepository.recordConnectionState).toHaveBeenCalledWith(
      deviceId,
      hello.identity,
      hello.capabilities,
      hello.state,
      expect.any(Date)
    );
    expect(commandsService.deliverPending).toHaveBeenCalledWith(deviceId);
    await vi.waitFor(() => {
      expect(operationsService.applyPolicySettings).toHaveBeenCalledWith(
        [],
        [deviceId],
        { actorUserId: null, requestId: expect.any(String) },
        { replace: true }
      );
    });

    const heartbeat = createDeviceHeartbeatMessage({
      requestId: crypto.randomUUID(),
      sentAt: new Date().toISOString(),
      state: { timeSync: { synchronized: true, offsetMs: 2 } }
    });
    const heartbeatResponse = nextMessage(socket);
    socket.send(JSON.stringify(heartbeat));

    await expect(heartbeatResponse).resolves.toEqual(
      expect.objectContaining({
        type: DEVICE_SERVER_MESSAGE_TYPES.heartbeatAccepted,
        requestId: heartbeat.requestId
      })
    );
    expect(devicesRepository.recordHeartbeat).toHaveBeenCalledWith(
      deviceId,
      heartbeat.state,
      expect.any(Date)
    );
    expect(operationsService.reconcileDeviceState).toHaveBeenCalledWith(heartbeat.state);
  });

  it('pushes effective managed settings after hello', async () => {
    policiesService.effectiveForDevice.mockResolvedValue({
      policies: [],
      settings: [{ key: MANAGED_SETTING_KEYS.controlPreventUnbind, value: true }]
    });
    const socket = await openSocket();

    await expect(authenticateSocket(socket)).resolves.toEqual(
      expect.objectContaining({ type: DEVICE_SERVER_MESSAGE_TYPES.helloAccepted })
    );

    await vi.waitFor(() => {
      expect(operationsService.applyPolicySettings).toHaveBeenCalledWith(
        [{ key: MANAGED_SETTING_KEYS.controlPreventUnbind, value: true }],
        [deviceId],
        { actorUserId: null, requestId: expect.any(String) },
        { replace: true }
      );
    });
  });

  it('filters newer managed settings before pushing to an older client', async () => {
    policiesService.effectiveForDevice.mockResolvedValue({
      policies: [],
      settings: [{ key: MANAGED_SETTING_KEYS.controlPreventUnbind, value: true }]
    });
    const hello = helloMessage();
    hello.capabilities = {
      ...hello.capabilities!,
      commands: hello.capabilities!.commands.map((capability) =>
        capability.name === 'managed-settings' ? { ...capability, version: 1 } : capability
      ),
      managedSettings: hello.capabilities!.managedSettings.filter(
        (capability) => !capability.key.startsWith('plugins.')
      )
    };
    const socket = await openSocket();

    await expect(authenticateSocket(socket, hello)).resolves.toEqual(
      expect.objectContaining({ type: DEVICE_SERVER_MESSAGE_TYPES.helloAccepted })
    );

    await vi.waitFor(() => {
      expect(operationsService.applyPolicySettings).toHaveBeenCalledWith(
        [
          { key: MANAGED_SETTING_KEYS.controlPreventUnbind, value: true },
          { key: MANAGED_SETTING_KEYS.playerPreventControlSessionExit, value: false },
          { key: MANAGED_SETTING_KEYS.controlPreventQuit, value: false }
        ],
        [deviceId],
        { actorUserId: null, requestId: expect.any(String) }
      );
    });
  });

  it('keeps the authenticated connection open when the settings push fails', async () => {
    operationsService.applyPolicySettings.mockRejectedValue(new Error('push failed'));
    const socket = await openSocket();

    await expect(authenticateSocket(socket)).resolves.toEqual(
      expect.objectContaining({ type: DEVICE_SERVER_MESSAGE_TYPES.helloAccepted })
    );
    await vi.waitFor(() => expect(operationsService.applyPolicySettings).toHaveBeenCalled());
    expect(socket.readyState).toBe(WebSocket.OPEN);
  });

  it('rejects an invalid device credential with an authentication close code', async () => {
    enrollmentService.authenticate.mockResolvedValue(undefined);
    const socket = await openSocket();
    const response = nextMessage(socket);
    const closed = nextClose(socket);
    socket.send(JSON.stringify(helloMessage()));

    await expect(response).resolves.toEqual(
      expect.objectContaining({
        type: DEVICE_SERVER_MESSAGE_TYPES.error,
        code: CONTROL_PROTOCOL_ERROR_CODES.invalidCredential,
        fatal: true
      })
    );
    await expect(closed).resolves.toEqual(
      expect.objectContaining({ code: CONTROL_WEBSOCKET_CLOSE_CODES.authenticationRequired })
    );
  });

  it('replaces the previous connection for the same device', async () => {
    const first = await openSocket();
    await authenticateSocket(first);
    const firstClosed = nextClose(first);
    const second = await openSocket();

    await authenticateSocket(second);

    await expect(firstClosed).resolves.toEqual(
      expect.objectContaining({ code: CONTROL_WEBSOCKET_CLOSE_CODES.connectionReplaced })
    );
  });

  it('returns a typed nonfatal protocol rejection for an expired command result', async () => {
    commandsService.recordResult.mockRejectedValue(
      new GoneException({
        code: CONTROL_PROTOCOL_ERROR_CODES.commandExpired,
        message: 'Command result arrived after expiry'
      })
    );
    const socket = await openSocket();
    await authenticateSocket(socket);
    const result = createCommandResultMessage({
      requestId: crypto.randomUUID(),
      commandId: crypto.randomUUID(),
      status: COMMAND_RESULT_STATUS.acknowledged,
      occurredAt: new Date().toISOString()
    });
    const response = nextMessage(socket);
    socket.send(JSON.stringify(result));

    await expect(response).resolves.toEqual(
      expect.objectContaining({
        type: DEVICE_SERVER_MESSAGE_TYPES.error,
        requestId: result.requestId,
        code: CONTROL_PROTOCOL_ERROR_CODES.commandExpired,
        fatal: false
      })
    );
    expect(socket.readyState).toBe(WebSocket.OPEN);
  });
});
