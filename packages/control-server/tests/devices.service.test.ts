import { BadRequestException } from '@nestjs/common';
import { describe, expect, it, vi } from 'vitest';
import { DevicesService, deriveDeviceConnectionStatus } from '../src/devices/devices.service.js';
import type { DeviceRecord } from '../src/devices/devices.repository.js';
import type { AuditService } from '../src/audit/audit.service.js';
import type { DatabaseService } from '../src/database/database.service.js';
import type { DevicesRepository } from '../src/devices/devices.repository.js';
import type { PartitionsRepository } from '../src/partitions/partitions.repository.js';

const baseDevice: DeviceRecord = {
  id: '04ae0ed9-d420-4cf6-9529-50429817a304',
  schoolId: 'default',
  displayName: 'Room 101',
  lifecycleStatus: 'active',
  platform: null,
  architecture: null,
  appVersion: null,
  protocolVersion: null,
  labels: [],
  lastSeenAt: null,
  lastReportedState: null,
  enrolledAt: new Date('2026-08-04T00:00:00Z'),
  createdAt: new Date('2026-08-04T00:00:00Z'),
  updatedAt: new Date('2026-08-04T00:00:00Z')
};
function emptyPartitionsRepository(): PartitionsRepository {
  return {
    assignmentsForDevices: vi.fn().mockResolvedValue(new Map())
  } as unknown as PartitionsRepository;
}

describe('device connection status', () => {
  it('derives live state without persisting ephemeral online flags', () => {
    const now = Date.parse('2026-08-04T00:02:00Z');

    expect(deriveDeviceConnectionStatus(baseDevice, now)).toBe('never_connected');
    expect(
      deriveDeviceConnectionStatus({ ...baseDevice, lastSeenAt: new Date(now - 30_000) }, now)
    ).toBe('online');
    expect(
      deriveDeviceConnectionStatus({ ...baseDevice, lastSeenAt: new Date(now - 90_000) }, now)
    ).toBe('offline');
    expect(deriveDeviceConnectionStatus({ ...baseDevice, lifecycleStatus: 'revoked' }, now)).toBe(
      'revoked'
    );
  });
});

describe('DevicesService', () => {
  it('rejects an empty metadata patch', async () => {
    const service = new DevicesService(
      {} as DatabaseService,
      {} as DevicesRepository,
      emptyPartitionsRepository(),
      {} as AuditService
    );

    await expect(
      service.update(baseDevice.id, {}, { actorUserId: 'admin', requestId: crypto.randomUUID() })
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('updates metadata and records audit data in one transaction', async () => {
    const transaction = {};
    const databaseService = {
      transaction: vi.fn(async (work) => work(transaction))
    } as unknown as DatabaseService;
    const devicesRepository = {
      update: vi.fn().mockResolvedValue({ ...baseDevice, displayName: 'Room 102' })
    } as unknown as DevicesRepository;
    const auditService = {
      record: vi.fn().mockResolvedValue(undefined)
    } as unknown as AuditService;
    const partitionsRepository = emptyPartitionsRepository();
    const service = new DevicesService(
      databaseService,
      devicesRepository,
      partitionsRepository,
      auditService
    );
    const requestId = crypto.randomUUID();

    const result = await service.update(
      baseDevice.id,
      { displayName: 'Room 102' },
      { actorUserId: 'admin', requestId }
    );

    expect(result.displayName).toBe('Room 102');
    expect(devicesRepository.update).toHaveBeenCalledWith(transaction, baseDevice.id, {
      displayName: 'Room 102'
    });
    expect(auditService.record).toHaveBeenCalledWith(
      transaction,
      expect.objectContaining({
        actorUserId: 'admin',
        action: 'device.updated',
        resourceId: baseDevice.id,
        requestId,
        metadata: { changedFields: ['displayName'] }
      })
    );
  });

  it('revokes an active device and audits only the state transition', async () => {
    const transaction = {};
    const databaseService = {
      transaction: vi.fn(async (work) => work(transaction))
    } as unknown as DatabaseService;
    const devicesRepository = {
      lockById: vi.fn().mockResolvedValue(baseDevice),
      update: vi.fn().mockResolvedValue({ ...baseDevice, lifecycleStatus: 'revoked' })
    } as unknown as DevicesRepository;
    const auditService = {
      record: vi.fn().mockResolvedValue(undefined)
    } as unknown as AuditService;
    const partitionsRepository = emptyPartitionsRepository();
    const service = new DevicesService(
      databaseService,
      devicesRepository,
      partitionsRepository,
      auditService
    );
    const requestId = crypto.randomUUID();

    const result = await service.revoke(baseDevice.id, { actorUserId: 'admin', requestId });

    expect(result.connectionStatus).toBe('revoked');
    expect(devicesRepository.update).toHaveBeenCalledWith(transaction, baseDevice.id, {
      lifecycleStatus: 'revoked'
    });
    expect(auditService.record).toHaveBeenCalledWith(
      transaction,
      expect.objectContaining({ action: 'device.revoked', resourceId: baseDevice.id, requestId })
    );
  });

  it('treats repeated device revocation as an idempotent no-op', async () => {
    const transaction = {};
    const databaseService = {
      transaction: vi.fn(async (work) => work(transaction))
    } as unknown as DatabaseService;
    const devicesRepository = {
      lockById: vi.fn().mockResolvedValue({ ...baseDevice, lifecycleStatus: 'revoked' }),
      update: vi.fn()
    } as unknown as DevicesRepository;
    const auditService = { record: vi.fn() } as unknown as AuditService;
    const partitionsRepository = emptyPartitionsRepository();
    const service = new DevicesService(
      databaseService,
      devicesRepository,
      partitionsRepository,
      auditService
    );

    const result = await service.revoke(baseDevice.id, {
      actorUserId: 'admin',
      requestId: crypto.randomUUID()
    });

    expect(result.connectionStatus).toBe('revoked');
    expect(devicesRepository.update).not.toHaveBeenCalled();
    expect(auditService.record).not.toHaveBeenCalled();
  });

  it('rejects multiple assignments in an exclusive partition dimension', async () => {
    const transaction = {};
    const databaseService = {
      transaction: vi.fn(async (work) => work(transaction))
    } as unknown as DatabaseService;
    const devicesRepository = {
      lockById: vi.fn().mockResolvedValue(baseDevice)
    } as unknown as DevicesRepository;
    const replaceDeviceAssignments = vi.fn();
    const partitionsRepository = {
      findNodesByIds: vi.fn().mockResolvedValue([
        {
          id: crypto.randomUUID(),
          dimensionId: '425b6f93-4a2f-46b1-83d2-7171f01eb1e0',
          dimensionKey: 'location',
          allowMultiple: false,
          schoolId: 'default'
        },
        {
          id: crypto.randomUUID(),
          dimensionId: '425b6f93-4a2f-46b1-83d2-7171f01eb1e0',
          dimensionKey: 'location',
          allowMultiple: false,
          schoolId: 'default'
        }
      ]),
      replaceDeviceAssignments
    } as unknown as PartitionsRepository;
    const auditService = { record: vi.fn() } as unknown as AuditService;
    const service = new DevicesService(
      databaseService,
      devicesRepository,
      partitionsRepository,
      auditService
    );

    await expect(
      service.setPartitions(baseDevice.id, [crypto.randomUUID(), crypto.randomUUID()], {
        actorUserId: 'admin',
        requestId: crypto.randomUUID()
      })
    ).rejects.toBeInstanceOf(BadRequestException);
    expect(replaceDeviceAssignments).not.toHaveBeenCalled();
    expect(auditService.record).not.toHaveBeenCalled();
  });

  it('atomically replaces assignments across independent dimensions', async () => {
    const transaction = {};
    const databaseService = {
      transaction: vi.fn(async (work) => work(transaction))
    } as unknown as DatabaseService;
    const devicesRepository = {
      lockById: vi.fn().mockResolvedValue(baseDevice)
    } as unknown as DevicesRepository;
    const locationNodeId = crypto.randomUUID();
    const classNodeId = crypto.randomUUID();
    const nodeIds = [locationNodeId, classNodeId];
    const assignments = [
      {
        nodeId: locationNodeId,
        nodeName: '101室',
        parentId: null,
        dimensionId: crypto.randomUUID(),
        dimensionKey: 'location',
        dimensionName: '位置'
      },
      {
        nodeId: classNodeId,
        nodeName: '高三一班',
        parentId: null,
        dimensionId: crypto.randomUUID(),
        dimensionKey: 'class',
        dimensionName: '班级'
      }
    ];
    const replaceDeviceAssignments = vi.fn().mockResolvedValue(undefined);
    const partitionsRepository = {
      findNodesByIds: vi.fn().mockResolvedValue(
        assignments.map((assignment) => ({
          ...assignment,
          id: assignment.nodeId,
          allowMultiple: false,
          schoolId: 'default'
        }))
      ),
      replaceDeviceAssignments,
      assignmentsForDevices: vi.fn().mockResolvedValue(new Map([[baseDevice.id, assignments]]))
    } as unknown as PartitionsRepository;
    const auditService = {
      record: vi.fn().mockResolvedValue(undefined)
    } as unknown as AuditService;
    const service = new DevicesService(
      databaseService,
      devicesRepository,
      partitionsRepository,
      auditService
    );
    const requestId = crypto.randomUUID();

    const result = await service.setPartitions(baseDevice.id, nodeIds, {
      actorUserId: 'admin',
      requestId
    });

    expect(result.partitions).toEqual(assignments);
    expect(replaceDeviceAssignments).toHaveBeenCalledWith(
      transaction,
      baseDevice.id,
      nodeIds,
      'admin'
    );
    expect(auditService.record).toHaveBeenCalledWith(
      transaction,
      expect.objectContaining({
        action: 'device.partitions-replaced',
        resourceId: baseDevice.id,
        requestId,
        metadata: { nodeIds }
      })
    );
  });
});
