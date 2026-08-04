import { BadRequestException, GoneException } from '@nestjs/common';
import {
  COMMAND_RESULT_STATUS,
  CONTROL_CAPABILITY_NAMES,
  CURRENT_CONTROL_CAPABILITIES,
  CURRENT_MANAGED_SETTING_CAPABILITIES,
  MANAGED_SETTING_KEYS,
  createCommandResultMessage,
  createPlaybackStopCommand,
  createSettingsApplyCommand
} from '@dsz-examaware/control-protocol';
import { describe, expect, it, vi } from 'vitest';
import { CONTROL_COMMAND_ERROR_CODES } from '../src/commands/control-command.constants.js';
import { COMMAND_TARGET_STATUS } from '../src/commands/control-command.schema.js';
import { ControlCommandsService } from '../src/commands/control-commands.service.js';
import type {
  CommandTargetRecord,
  ControlCommandRecord,
  ControlCommandsRepository
} from '../src/commands/control-commands.repository.js';
import type { AuditService } from '../src/audit/audit.service.js';
import type { DatabaseService } from '../src/database/database.service.js';
import type { DeviceConnectionsService } from '../src/devices/device-connections.service.js';
import type { DevicesRepository } from '../src/devices/devices.repository.js';
import type { DeviceRecord } from '../src/devices/devices.repository.js';
import type { PartitionsRepository } from '../src/partitions/partitions.repository.js';

const commandId = '0d352207-54be-49cb-93db-55c547d00e53';
const deviceId = '78030c38-1479-4ac6-b2fa-65f5e299efb4';
const command = createPlaybackStopCommand({ deploymentId: crypto.randomUUID() });

const commandRecord: ControlCommandRecord = {
  id: commandId,
  schoolId: 'default',
  commandType: command.type,
  command,
  issuedBy: 'admin',
  issuedAt: new Date('2026-08-04T00:00:00Z'),
  expiresAt: new Date('2026-08-04T00:01:00Z'),
  cancelledAt: null
};

const pendingTarget: CommandTargetRecord = {
  commandId,
  deviceId,
  status: COMMAND_TARGET_STATUS.pending,
  deliveredAt: null,
  acknowledgedAt: null,
  completedAt: null,
  errorCode: null,
  errorMessage: null,
  resultState: null
};

function createService(
  databaseService: DatabaseService,
  repository: ControlCommandsRepository,
  devicesRepository = {} as DevicesRepository,
  partitionsRepository = {} as PartitionsRepository,
  connectionsService = {} as DeviceConnectionsService
) {
  return new ControlCommandsService(
    databaseService,
    repository,
    devicesRepository,
    partitionsRepository,
    connectionsService,
    {} as AuditService
  );
}

describe('ControlCommandsService command results', () => {
  it('commits the expired target state before rejecting a late result', async () => {
    let committed = false;
    const transaction = {};
    const databaseService = {
      transaction: vi.fn(async (work) => {
        const result = await work(transaction);
        committed = true;
        return result;
      })
    } as unknown as DatabaseService;
    const updateTarget = vi.fn().mockResolvedValue({
      ...pendingTarget,
      status: COMMAND_TARGET_STATUS.expired,
      completedAt: new Date()
    });
    const repository = {
      findById: vi.fn().mockResolvedValue(commandRecord),
      lockTarget: vi.fn().mockResolvedValue(pendingTarget),
      updateTarget
    } as unknown as ControlCommandsRepository;
    const service = createService(databaseService, repository);

    await expect(
      service.recordResult(
        deviceId,
        createCommandResultMessage({
          requestId: crypto.randomUUID(),
          commandId,
          status: COMMAND_RESULT_STATUS.succeeded,
          occurredAt: '2026-08-04T00:00:30.000Z'
        })
      )
    ).rejects.toBeInstanceOf(GoneException);

    expect(committed).toBe(true);
    expect(updateTarget).toHaveBeenCalledWith(
      transaction,
      commandId,
      deviceId,
      expect.objectContaining({ status: COMMAND_TARGET_STATUS.expired })
    );
  });

  it('treats an identical terminal result as idempotent', async () => {
    const succeededTarget = {
      ...pendingTarget,
      status: COMMAND_TARGET_STATUS.succeeded,
      completedAt: new Date()
    };
    const databaseService = {
      transaction: vi.fn(async (work) => work({}))
    } as unknown as DatabaseService;
    const repository = {
      findById: vi.fn().mockResolvedValue({
        ...commandRecord,
        expiresAt: new Date(Date.now() + 60_000)
      }),
      lockTarget: vi.fn().mockResolvedValue(succeededTarget),
      updateTarget: vi.fn()
    } as unknown as ControlCommandsRepository;
    const service = createService(databaseService, repository);

    const result = await service.recordResult(
      deviceId,
      createCommandResultMessage({
        requestId: crypto.randomUUID(),
        commandId,
        status: COMMAND_RESULT_STATUS.succeeded,
        occurredAt: new Date().toISOString()
      })
    );

    expect(result).toBe(succeededTarget);
    expect(repository.updateTarget).not.toHaveBeenCalled();
  });
});

describe('ControlCommandsService target capabilities', () => {
  const deviceRecord: DeviceRecord = {
    id: deviceId,
    schoolId: 'default',
    displayName: 'Room 101',
    lifecycleStatus: 'active',
    platform: 'linux',
    architecture: 'arm64',
    appVersion: '2.0.0',
    protocolVersion: '1',
    lastCapabilities: {
      commands: [...CURRENT_CONTROL_CAPABILITIES],
      managedSettings: [...CURRENT_MANAGED_SETTING_CAPABILITIES]
    },
    labels: [],
    lastSeenAt: new Date(),
    lastReportedState: null,
    enrolledAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  };

  it('atomically rejects targets that have never reported capabilities', async () => {
    const transaction = vi.fn();
    const devicesRepository = {
      findByIds: vi.fn().mockResolvedValue([{ ...deviceRecord, lastCapabilities: null }])
    } as unknown as DevicesRepository;
    const service = createService(
      { transaction } as unknown as DatabaseService,
      {} as ControlCommandsRepository,
      devicesRepository
    );

    let rejection: BadRequestException | undefined;
    try {
      await service.issue(
        command,
        { deviceIds: [deviceId], partitionNodeIds: [] },
        new Date(Date.now() + 60_000),
        { actorUserId: 'admin', requestId: crypto.randomUUID() }
      );
    } catch (error) {
      if (error instanceof BadRequestException) rejection = error;
    }
    expect(rejection?.getResponse()).toMatchObject({
      code: CONTROL_COMMAND_ERROR_CODES.targetCapabilitiesUnknown,
      errors: { deviceIds: [deviceId] }
    });
    expect(transaction).not.toHaveBeenCalled();
  });

  it('reports unsupported managed setting keys per device', async () => {
    const devicesRepository = {
      findByIds: vi.fn().mockResolvedValue([
        {
          ...deviceRecord,
          lastCapabilities: {
            commands: [{ name: CONTROL_CAPABILITY_NAMES.managedSettings, version: 1 }],
            managedSettings: []
          }
        }
      ])
    } as unknown as DevicesRepository;
    const service = createService(
      { transaction: vi.fn() } as unknown as DatabaseService,
      {} as ControlCommandsRepository,
      devicesRepository
    );
    const settingsCommand = createSettingsApplyCommand({
      revision: crypto.randomUUID(),
      settings: [{ key: MANAGED_SETTING_KEYS.playerUiScale, value: 1.25 }]
    });

    let rejection: BadRequestException | undefined;
    try {
      await service.issue(
        settingsCommand,
        { deviceIds: [deviceId], partitionNodeIds: [] },
        new Date(Date.now() + 60_000),
        { actorUserId: 'admin', requestId: crypto.randomUUID() }
      );
    } catch (error) {
      if (error instanceof BadRequestException) rejection = error;
    }
    expect(rejection?.getResponse()).toMatchObject({
      code: CONTROL_COMMAND_ERROR_CODES.targetCapabilitiesUnsupported,
      errors: {
        devices: [
          {
            deviceId,
            capabilityName: CONTROL_CAPABILITY_NAMES.managedSettings,
            unsupportedSettingKeys: [MANAGED_SETTING_KEYS.playerUiScale]
          }
        ]
      }
    });
  });

  it('fails a queued target instead of delivering after a capability downgrade', async () => {
    const markCapabilityRejected = vi.fn().mockResolvedValue(undefined);
    const sendCommand = vi.fn();
    const service = createService(
      {} as DatabaseService,
      {
        pendingForDevice: vi.fn().mockResolvedValue([commandRecord]),
        markCapabilityRejected
      } as unknown as ControlCommandsRepository,
      {
        findById: vi.fn().mockResolvedValue({
          ...deviceRecord,
          lastCapabilities: { commands: [], managedSettings: [] }
        })
      } as unknown as DevicesRepository,
      {} as PartitionsRepository,
      { sendCommand } as unknown as DeviceConnectionsService
    );

    await service.deliverPending(deviceId);

    expect(markCapabilityRejected).toHaveBeenCalledWith(
      commandId,
      deviceId,
      expect.any(Date),
      CONTROL_COMMAND_ERROR_CODES.targetCapabilitiesUnsupported,
      'One or more target devices do not support this command'
    );
    expect(sendCommand).not.toHaveBeenCalled();
  });
});
