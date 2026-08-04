import { BadRequestException } from '@nestjs/common';
import {
  BROADCAST_SEVERITY,
  CONTROL_COMMAND_TYPES,
  EXAM_CONFIG_ARTIFACT_MEDIA_TYPE,
  MANAGED_SETTING_KEYS,
  createExamConfigPrepareCommand
} from '@dsz-examaware/control-protocol';
import { describe, expect, it, vi } from 'vitest';
import { COMMAND_TARGET_STATUS } from '../src/commands/control-command.schema.js';
import { ControlOperationsService } from '../src/commands/control-operations.service.js';
import type {
  CommandTargetSelection,
  ControlCommandView,
  ControlCommandsService
} from '../src/commands/control-commands.service.js';
import type { CommandTargetRecord } from '../src/commands/control-commands.repository.js';
import { createExamConfigArtifactBytes } from '../src/exam-configs/exam-config-artifact.js';
import type { ExamConfigsRepository } from '../src/exam-configs/exam-configs.repository.js';

const context = {
  actorUserId: 'admin-user',
  requestId: '3f7ed739-1168-4370-a671-a26235475362'
};
const examConfigId = 'b6b4ce90-2d28-47cb-848a-9b9fbd5c227e';
const examConfigVersionId = '2a1feb14-e56c-43c7-8508-8f27cd481f31';
const deploymentId = 'a8024342-d363-4e44-b77a-7273996f9221';
const firstDeviceId = 'e6503db2-4e90-4c08-b886-aa40433e6c76';
const secondDeviceId = 'a91d91bc-25a9-4e92-ac1f-aa2e0eb4597e';
const contentHash = 'a'.repeat(64);

function target(deviceId: string): CommandTargetRecord {
  return {
    commandId: deploymentId,
    deviceId,
    status: COMMAND_TARGET_STATUS.succeeded,
    deliveredAt: new Date(),
    acknowledgedAt: new Date(),
    completedAt: new Date(),
    errorCode: null,
    errorMessage: null,
    resultState: null
  };
}

function prepareView(expiresAt = new Date(Date.now() + 60_000)): ControlCommandView {
  const command = createExamConfigPrepareCommand({
    deploymentId,
    examConfigId,
    examConfigVersionId,
    artifact: {
      url: `http://localhost/artifact?deploymentId=${deploymentId}`,
      mediaType: EXAM_CONFIG_ARTIFACT_MEDIA_TYPE,
      sizeBytes: 2,
      sha256: contentHash,
      expiresAt: expiresAt.toISOString()
    }
  });
  return {
    id: deploymentId,
    schoolId: 'default',
    commandType: command.type,
    command,
    issuedBy: context.actorUserId,
    issuedAt: new Date(),
    expiresAt,
    cancelledAt: null,
    targets: [target(firstDeviceId), target(secondDeviceId)],
    progress: {
      pending: 0,
      delivered: 0,
      acknowledged: 0,
      succeeded: 2,
      failed: 0,
      expired: 0
    }
  };
}

function createService(options: {
  commands?: Partial<ControlCommandsService>;
  examConfigs?: Partial<ExamConfigsRepository>;
}) {
  return new ControlOperationsService(
    options.commands as ControlCommandsService,
    options.examConfigs as ExamConfigsRepository
  );
}

describe('ControlOperationsService', () => {
  it('issues prepare with immutable artifact metadata and the deployment ID as command ID', async () => {
    const issued = prepareView();
    const issue = vi.fn().mockResolvedValue(issued);
    const service = createService({
      commands: { issue },
      examConfigs: {
        findVersion: vi.fn().mockResolvedValue({
          id: examConfigVersionId,
          content: {},
          contentHash
        })
      }
    });
    const selection: CommandTargetSelection = {
      deviceIds: [firstDeviceId],
      partitionNodeIds: []
    };

    await expect(
      service.prepareExam(
        { examConfigId, version: 1, targets: selection, expiresInSeconds: 300 },
        context
      )
    ).resolves.toBe(issued);

    const [command, targets, expiresAt, writeContext, requestedCommandId] = issue.mock.calls[0]!;
    expect(command).toEqual(
      expect.objectContaining({
        type: CONTROL_COMMAND_TYPES.examConfigPrepare,
        payload: expect.objectContaining({
          examConfigId,
          examConfigVersionId,
          artifact: expect.objectContaining({
            sha256: createExamConfigArtifactBytes({}).sha256,
            sizeBytes: 2
          })
        })
      })
    );
    expect(targets).toBe(selection);
    expect(expiresAt).toBeInstanceOf(Date);
    expect(writeContext).toBe(context);
    expect(requestedCommandId).toBe(command.payload.deploymentId);
  });

  it('activates only devices whose prepare command succeeded', async () => {
    const issue = vi.fn().mockResolvedValue(prepareView());
    const service = createService({
      commands: {
        get: vi.fn().mockResolvedValue(prepareView()),
        successfulDeviceIds: vi.fn().mockResolvedValue([secondDeviceId]),
        issue
      }
    });

    await service.activateExam(deploymentId, { expiresInSeconds: 300 }, context);

    expect(issue).toHaveBeenCalledWith(
      expect.objectContaining({ type: CONTROL_COMMAND_TYPES.playbackActivate }),
      { deviceIds: [secondDeviceId], partitionNodeIds: [] },
      expect.any(Date),
      context
    );
  });

  it('rejects activation when no device prepared successfully', async () => {
    const issue = vi.fn();
    const service = createService({
      commands: {
        get: vi.fn().mockResolvedValue(prepareView()),
        successfulDeviceIds: vi.fn().mockResolvedValue([]),
        issue
      }
    });

    await expect(
      service.activateExam(deploymentId, { expiresInSeconds: 300 }, context)
    ).rejects.toBeInstanceOf(BadRequestException);
    expect(issue).not.toHaveBeenCalled();
  });

  it('rejects duplicate managed setting keys before issuing a command', () => {
    const issue = vi.fn();
    const service = createService({ commands: { issue } });

    expect(() =>
      service.applySettings(
        {
          targets: { deviceIds: [firstDeviceId], partitionNodeIds: [] },
          expiresInSeconds: 300,
          settings: [
            { key: MANAGED_SETTING_KEYS.playerUiScale, value: 1 },
            { key: MANAGED_SETTING_KEYS.playerUiScale, value: 1.2 }
          ]
        },
        context
      )
    ).toThrow(BadRequestException);
    expect(issue).not.toHaveBeenCalled();
  });

  it('keeps artifact access bound to the prepared target and immutable version', async () => {
    const findVersion = vi.fn().mockResolvedValue({
      id: examConfigVersionId,
      content: { name: 'exam' },
      contentHash
    });
    const service = createService({
      commands: { get: vi.fn().mockResolvedValue(prepareView()) },
      examConfigs: { findVersion }
    });

    const artifact = await service.readExamArtifact(deploymentId, firstDeviceId, examConfigId, 1);
    expect(artifact.sha256).toBe(createExamConfigArtifactBytes({ name: 'exam' }).sha256);
    expect(artifact.mediaType).toBe(EXAM_CONFIG_ARTIFACT_MEDIA_TYPE);
    expect(JSON.parse(artifact.body.toString())).toEqual({ name: 'exam' });
    await expect(
      service.readExamArtifact(deploymentId, crypto.randomUUID(), examConfigId, 1)
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('creates a typed broadcast command with a bounded severity', async () => {
    const issue = vi.fn().mockResolvedValue(prepareView());
    const service = createService({ commands: { issue } });

    await service.showBroadcast(
      {
        title: 'Notice',
        body: 'Exam begins in five minutes',
        severity: BROADCAST_SEVERITY.warning,
        targets: { deviceIds: [firstDeviceId], partitionNodeIds: [] },
        expiresInSeconds: 300
      },
      context
    );

    expect(issue).toHaveBeenCalledWith(
      expect.objectContaining({ type: CONTROL_COMMAND_TYPES.broadcastShow }),
      expect.any(Object),
      expect.any(Date),
      context,
      expect.any(String)
    );
  });
});
