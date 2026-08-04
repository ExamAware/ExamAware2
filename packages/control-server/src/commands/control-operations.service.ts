import { randomUUID } from 'node:crypto';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
  CONTROL_COMMAND_TYPES,
  EXAM_CONFIG_ARTIFACT_MEDIA_TYPE,
  createBroadcastDismissCommand,
  createBroadcastShowCommand,
  createExamConfigPrepareCommand,
  createPlaybackActivateCommand,
  createPlaybackStopCommand,
  createSettingsApplyCommand,
  settingsApplyPayloadSchema
} from '@dsz-examaware/control-protocol';
import type { ExamConfigPrepareCommand } from '@dsz-examaware/control-protocol';
import type { WriteContext } from '../api/write-context.js';
import { env } from '../config/env.js';
import { createExamConfigArtifactBytes } from '../exam-configs/exam-config-artifact.js';
import { ExamConfigsRepository } from '../exam-configs/exam-configs.repository.js';
import { ControlCommandsService } from './control-commands.service.js';
import { CONTROL_COMMAND_ERROR_CODES } from './control-command.constants.js';
import type { ControlCommandView } from './control-commands.service.js';
import type {
  ActivateExamDeploymentDto,
  ApplyManagedSettingsDto,
  DismissBroadcastDto,
  PrepareExamDeploymentDto,
  ShowBroadcastDto,
  StopExamDeploymentDto
} from './dto/control-operation.dto.js';

@Injectable()
export class ControlOperationsService {
  constructor(
    private readonly commandsService: ControlCommandsService,
    private readonly examConfigsRepository: ExamConfigsRepository
  ) {}

  async prepareExam(
    input: PrepareExamDeploymentDto,
    context: WriteContext
  ): Promise<ControlCommandView> {
    const version = await this.examConfigsRepository.findVersion(input.examConfigId, input.version);
    if (!version) {
      throw new NotFoundException({
        code: CONTROL_COMMAND_ERROR_CODES.examVersionNotFound,
        message: 'Exam config version not found'
      });
    }
    const deploymentId = randomUUID();
    const expiresAt = this.expiresAt(input.expiresInSeconds);
    const artifact = createExamConfigArtifactBytes(version.content);
    return this.commandsService.issue(
      createExamConfigPrepareCommand({
        deploymentId,
        examConfigId: input.examConfigId,
        examConfigVersionId: version.id,
        artifact: {
          url: new URL(
            `/api/v1/device-artifacts/exam-configs/${input.examConfigId}/versions/${input.version}?deploymentId=${deploymentId}`,
            env.betterAuthUrl
          ).toString(),
          mediaType: EXAM_CONFIG_ARTIFACT_MEDIA_TYPE,
          sizeBytes: artifact.body.byteLength,
          sha256: artifact.sha256,
          expiresAt: expiresAt.toISOString()
        }
      }),
      input.targets,
      expiresAt,
      context,
      deploymentId
    );
  }

  async activateExam(
    deploymentId: string,
    input: ActivateExamDeploymentDto,
    context: WriteContext
  ): Promise<ControlCommandView> {
    const prepare = await this.requirePrepareCommand(deploymentId);
    const deviceIds = await this.commandsService.successfulDeviceIds(deploymentId);
    if (deviceIds.length === 0) {
      throw new BadRequestException({
        code: CONTROL_COMMAND_ERROR_CODES.noReadyDevices,
        message: 'No target device has successfully prepared this deployment'
      });
    }
    return this.commandsService.issue(
      createPlaybackActivateCommand({
        deploymentId,
        examConfigVersionId: prepare.command.payload.examConfigVersionId,
        ...(input.activateAt ? { activateAt: input.activateAt } : {})
      }),
      { deviceIds, partitionNodeIds: [] },
      this.expiresAt(input.expiresInSeconds),
      context
    );
  }

  async stopExam(
    deploymentId: string,
    input: StopExamDeploymentDto,
    context: WriteContext
  ): Promise<ControlCommandView> {
    const prepare = await this.requirePrepareCommand(deploymentId);
    const deviceIds = prepare.targets.map((target) => target.deviceId);
    return this.commandsService.issue(
      createPlaybackStopCommand({
        deploymentId,
        ...(input.reason ? { reason: input.reason } : {})
      }),
      { deviceIds, partitionNodeIds: [] },
      this.expiresAt(input.expiresInSeconds),
      context
    );
  }

  showBroadcast(input: ShowBroadcastDto, context: WriteContext): Promise<ControlCommandView> {
    const broadcastId = randomUUID();
    const expiresAt = this.expiresAt(input.expiresInSeconds);
    return this.commandsService.issue(
      createBroadcastShowCommand({
        broadcastId,
        title: input.title,
        body: input.body,
        severity: input.severity,
        expiresAt: expiresAt.toISOString()
      }),
      input.targets,
      expiresAt,
      context,
      broadcastId
    );
  }

  dismissBroadcast(input: DismissBroadcastDto, context: WriteContext): Promise<ControlCommandView> {
    return this.commandsService.issue(
      createBroadcastDismissCommand({ broadcastId: input.broadcastId }),
      input.targets,
      this.expiresAt(input.expiresInSeconds),
      context
    );
  }

  applySettings(
    input: ApplyManagedSettingsDto,
    context: WriteContext
  ): Promise<ControlCommandView> {
    const revision = randomUUID();
    const payload = settingsApplyPayloadSchema.safeParse({ revision, settings: input.settings });
    if (!payload.success) {
      throw new BadRequestException({
        code: CONTROL_COMMAND_ERROR_CODES.invalidManagedSettings,
        message: 'Managed settings do not match the allowed setting registry',
        errors: payload.error.issues
      });
    }
    return this.commandsService.issue(
      createSettingsApplyCommand(payload.data),
      input.targets,
      this.expiresAt(input.expiresInSeconds),
      context,
      revision
    );
  }

  async readExamArtifact(
    deploymentId: string,
    deviceId: string,
    examConfigId: string,
    versionNumber: number
  ) {
    const prepare = await this.requirePrepareCommand(deploymentId);
    if (prepare.expiresAt.getTime() <= Date.now()) {
      throw new BadRequestException({
        code: CONTROL_COMMAND_ERROR_CODES.artifactExpired,
        message: 'Exam config artifact authorization has expired'
      });
    }
    if (!prepare.targets.some((target) => target.deviceId === deviceId)) {
      throw new BadRequestException({
        code: CONTROL_COMMAND_ERROR_CODES.deviceNotDeploymentTarget,
        message: 'Device is not a target of this deployment'
      });
    }
    const version = await this.examConfigsRepository.findVersion(examConfigId, versionNumber);
    if (
      !version ||
      prepare.command.payload.examConfigId !== examConfigId ||
      prepare.command.payload.examConfigVersionId !== version.id
    ) {
      throw new NotFoundException({
        code: CONTROL_COMMAND_ERROR_CODES.artifactNotFound,
        message: 'Exam config artifact not found for this deployment'
      });
    }
    const artifact = createExamConfigArtifactBytes(version.content);
    return {
      ...artifact,
      mediaType: EXAM_CONFIG_ARTIFACT_MEDIA_TYPE
    };
  }

  private async requirePrepareCommand(deploymentId: string) {
    const prepare = await this.commandsService.get(deploymentId);
    if (prepare.command.type !== CONTROL_COMMAND_TYPES.examConfigPrepare) {
      throw new BadRequestException({
        code: CONTROL_COMMAND_ERROR_CODES.notExamDeployment,
        message: 'The identifier does not refer to an exam deployment'
      });
    }
    return prepare as ControlCommandView & { command: ExamConfigPrepareCommand };
  }

  private expiresAt(expiresInSeconds: number): Date {
    return new Date(Date.now() + expiresInSeconds * 1000);
  }
}
