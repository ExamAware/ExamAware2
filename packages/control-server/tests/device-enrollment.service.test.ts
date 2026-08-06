import { BadRequestException, GoneException } from '@nestjs/common';
import {
  CONTROL_PROTOCOL_VERSION,
  CONTROL_WEBSOCKET_CLOSE_CODES,
  createEnrollDeviceRequest
} from '@dsz-examaware/control-protocol';
import { describe, expect, it, vi } from 'vitest';
import type { AuditService } from '../src/audit/audit.service.js';
import type { DatabaseService } from '../src/database/database.service.js';
import { DEVICE_ENROLLMENT_AUDIT } from '../src/devices/device-enrollment.constants.js';
import type {
  DeviceEnrollmentCodeRecord,
  DeviceEnrollmentRepository,
  DeviceRecord
} from '../src/devices/device-enrollment.repository.js';
import type { DeviceConnectionsService } from '../src/devices/device-connections.service.js';
import { DeviceEnrollmentService } from '../src/devices/device-enrollment.service.js';
import {
  DEVICE_CONNECTION_CLOSE_REASONS,
  DEVICE_LIFECYCLE_STATUS
} from '../src/devices/device.constants.js';
import type { DevicesRepository } from '../src/devices/devices.repository.js';
import type { DevicesService } from '../src/devices/devices.service.js';

const actorUserId = 'admin-user';
const requestId = 'deebd93c-74fb-4f99-b226-dece2f8616ed';
const codeId = 'ba8f56f3-593d-4363-af7b-e495439f1b84';
const deviceId = 'ae4f39a5-0d70-4f8f-a5a7-b0ee8743a9ae';
const partitionNodeId = '74670d86-e574-449c-9cb9-36a2094612f4';

const enrollmentCode: DeviceEnrollmentCodeRecord = {
  id: codeId,
  schoolId: 'default',
  codeHash: 'stored-hash',
  displayName: 'Room 101',
  partitionNodeIds: [partitionNodeId],
  maxUses: 1,
  usedCount: 0,
  expiresAt: new Date(Date.now() + 60_000),
  createdBy: actorUserId,
  createdAt: new Date(),
  revokedAt: null
};

const device: DeviceRecord = {
  id: deviceId,
  schoolId: 'default',
  displayName: 'Room 101',
  lifecycleStatus: DEVICE_LIFECYCLE_STATUS.active,
  platform: 'linux',
  architecture: 'arm64',
  appVersion: '2.0.0',
  protocolVersion: String(CONTROL_PROTOCOL_VERSION),
  lastCapabilities: null,
  labels: [],
  lastSeenAt: null,
  lastReportedState: null,
  deletedAt: null,
  enrolledAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date()
};

function createService(options: {
  repository?: Partial<DeviceEnrollmentRepository>;
  devicesRepository?: Partial<DevicesRepository>;
  devicesService?: Partial<DevicesService>;
  auditService?: Partial<AuditService>;
  connectionsService?: Partial<DeviceConnectionsService>;
}) {
  const transaction = {};
  const databaseService = {
    transaction: vi.fn(async (work) => work(transaction))
  } as unknown as DatabaseService;
  const repository = options.repository as DeviceEnrollmentRepository;
  const auditService = options.auditService as AuditService;
  const connectionsService = {
    disconnect: vi.fn(),
    ...options.connectionsService
  } as unknown as DeviceConnectionsService;
  const service = new DeviceEnrollmentService(
    databaseService,
    repository,
    options.devicesRepository as DevicesRepository,
    options.devicesService as DevicesService,
    auditService,
    connectionsService
  );
  return {
    service,
    transaction,
    databaseService,
    repository,
    auditService,
    connectionsService
  };
}

describe('DeviceEnrollmentService', () => {
  it('creates a one-time secret while persisting only its hash', async () => {
    const createCode = vi.fn().mockImplementation(async (_transaction, input) => ({
      ...enrollmentCode,
      ...input
    }));
    const validatePartitionAssignments = vi.fn().mockResolvedValue(undefined);
    const auditRecord = vi.fn().mockResolvedValue(undefined);
    const { service, transaction } = createService({
      repository: { createCode },
      devicesService: { validatePartitionAssignments },
      auditService: { record: auditRecord }
    });

    const result = await service.createCode(
      {
        displayName: ' Room 101 ',
        partitionNodeIds: [partitionNodeId, partitionNodeId],
        expiresInMinutes: 30,
        maxUses: 1
      },
      { actorUserId, requestId }
    );

    expect(result.code).toMatch(/^EA2-[A-Za-z0-9_-]{32,}$/);
    expect(createCode).toHaveBeenCalledWith(
      transaction,
      expect.objectContaining({
        displayName: 'Room 101',
        partitionNodeIds: [partitionNodeId],
        codeHash: expect.not.stringContaining(result.code)
      })
    );
    expect(validatePartitionAssignments).toHaveBeenCalledWith(transaction, 'default', [
      partitionNodeId
    ]);
    expect(auditRecord).toHaveBeenCalledWith(
      transaction,
      expect.objectContaining({ action: DEVICE_ENROLLMENT_AUDIT.codeCreated, requestId })
    );
  });

  it('atomically enrolls a device, credential, partitions, usage, and audit record', async () => {
    const createDevice = vi.fn().mockResolvedValue(device);
    const replaceCredential = vi.fn().mockResolvedValue({ version: 1 });
    const assignPartitions = vi.fn().mockResolvedValue(undefined);
    const consumeCode = vi.fn().mockResolvedValue(undefined);
    const auditRecord = vi.fn().mockResolvedValue(undefined);
    const { service, transaction } = createService({
      repository: {
        lockCodeByHash: vi.fn().mockResolvedValue(enrollmentCode),
        createDevice,
        replaceCredential,
        assignPartitions,
        consumeCode
      },
      auditService: { record: auditRecord }
    });

    const result = await service.enroll(
      createEnrollDeviceRequest({
        enrollmentCode: `EA2-${'a'.repeat(32)}`,
        displayName: 'Fallback name',
        platform: 'linux',
        architecture: 'arm64',
        appVersion: '2.0.0',
        protocolVersion: CONTROL_PROTOCOL_VERSION
      }),
      requestId,
      'http://127.0.0.1:5174'
    );

    expect(result.deviceId).toBe(deviceId);
    expect(result.credential).toHaveLength(43);
    expect(result.websocketUrl).toBe('ws://127.0.0.1:5174/device/v1/connect');
    expect(createDevice).toHaveBeenCalledWith(
      transaction,
      expect.objectContaining({ displayName: enrollmentCode.displayName })
    );
    expect(replaceCredential).toHaveBeenCalledWith(
      transaction,
      deviceId,
      expect.not.stringContaining(result.credential)
    );
    expect(assignPartitions).toHaveBeenCalledWith(
      transaction,
      deviceId,
      [partitionNodeId],
      actorUserId
    );
    expect(consumeCode).toHaveBeenCalledWith(transaction, codeId);
    expect(auditRecord).toHaveBeenCalledWith(
      transaction,
      expect.objectContaining({ action: DEVICE_ENROLLMENT_AUDIT.deviceEnrolled })
    );
  });

  it('returns a stable error for an unsupported device protocol version', async () => {
    const { service } = createService({});

    await expect(
      service.enroll(
        {
          enrollmentCode: `EA2-${'a'.repeat(32)}`,
          displayName: 'Room 101',
          platform: 'linux',
          architecture: 'arm64',
          appVersion: '2.0.0',
          protocolVersion: 2
        },
        requestId
      )
    ).rejects.toMatchObject({
      response: {
        code: 'device_protocol_version_unsupported',
        message: 'Device protocol version is not supported by this server'
      }
    });
  });

  it('rejects an expired enrollment code before creating a device', async () => {
    const createDevice = vi.fn();
    const { service } = createService({
      repository: {
        lockCodeByHash: vi.fn().mockResolvedValue({
          ...enrollmentCode,
          expiresAt: new Date(Date.now() - 1)
        }),
        createDevice
      },
      auditService: { record: vi.fn() }
    });

    await expect(
      service.enroll(
        createEnrollDeviceRequest({
          enrollmentCode: `EA2-${'b'.repeat(32)}`,
          displayName: 'Room 102',
          platform: 'win32',
          architecture: 'x64',
          appVersion: '2.0.0',
          protocolVersion: CONTROL_PROTOCOL_VERSION
        }),
        requestId
      )
    ).rejects.toBeInstanceOf(GoneException);
    expect(createDevice).not.toHaveBeenCalled();
  });

  it('refuses credential rotation for a revoked device', async () => {
    const replaceCredential = vi.fn();
    const { service } = createService({
      repository: { replaceCredential },
      devicesRepository: {
        lockById: vi.fn().mockResolvedValue({
          ...device,
          lifecycleStatus: DEVICE_LIFECYCLE_STATUS.revoked
        })
      },
      auditService: { record: vi.fn() }
    });

    await expect(
      service.rotateCredential(deviceId, { actorUserId, requestId })
    ).rejects.toBeInstanceOf(BadRequestException);
    expect(replaceCredential).not.toHaveBeenCalled();
  });

  it('disconnects the authenticated session after credential rotation commits', async () => {
    const disconnect = vi.fn();
    const { service } = createService({
      repository: {
        replaceCredential: vi.fn().mockResolvedValue({ version: 2 })
      },
      devicesRepository: { lockById: vi.fn().mockResolvedValue(device) },
      auditService: { record: vi.fn().mockResolvedValue(undefined) },
      connectionsService: { disconnect }
    });

    const result = await service.rotateCredential(deviceId, { actorUserId, requestId });

    expect(result.version).toBe(2);
    expect(disconnect).toHaveBeenCalledWith(
      deviceId,
      CONTROL_WEBSOCKET_CLOSE_CODES.authenticationRequired,
      DEVICE_CONNECTION_CLOSE_REASONS.credentialRotated
    );
  });

  it('records use only after successful credential authentication', async () => {
    const markCredentialUsed = vi.fn().mockResolvedValue(undefined);
    const findAuthenticatedDevice = vi
      .fn()
      .mockResolvedValueOnce(device)
      .mockResolvedValueOnce(undefined);
    const { service } = createService({
      repository: { findAuthenticatedDevice, markCredentialUsed }
    });

    await expect(service.authenticate(deviceId, 'credential-1')).resolves.toBe(device);
    await expect(service.authenticate(deviceId, 'credential-2')).resolves.toBeUndefined();
    expect(markCredentialUsed).toHaveBeenCalledOnce();
    expect(markCredentialUsed).toHaveBeenCalledWith(deviceId);
  });
});
