import { createHmac, randomBytes } from 'node:crypto';
import {
  BadRequestException,
  GoneException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import {
  CONTROL_PROTOCOL_VERSION,
  CONTROL_WEBSOCKET_PATH,
  CONTROL_WEBSOCKET_CLOSE_CODES,
  enrollDeviceRequestSchema
} from '@dsz-examaware/control-protocol';
import type { EnrollDeviceResponse } from '@dsz-examaware/control-protocol';
import type { WriteContext } from '../api/write-context.js';
import { AuditService } from '../audit/audit.service.js';
import { env } from '../config/env.js';
import { DatabaseService } from '../database/database.service.js';
import { DeviceConnectionsService } from './device-connections.service.js';
import {
  DEVICE_ENROLLMENT_AUDIT,
  DEVICE_ENROLLMENT_CODE_STATUS,
  DEVICE_ENROLLMENT_ERROR_CODES
} from './device-enrollment.constants.js';
import type { DeviceEnrollmentCodeStatus } from './device-enrollment.constants.js';
import { DEVICE_CONNECTION_CLOSE_REASONS, DEVICE_LIFECYCLE_STATUS } from './device.constants.js';
import { DeviceEnrollmentRepository } from './device-enrollment.repository.js';
import type { DeviceEnrollmentCodeRecord } from './device-enrollment.repository.js';
import { DevicesRepository } from './devices.repository.js';
import { DevicesService } from './devices.service.js';

export interface CreateEnrollmentCodeInput {
  displayName?: string;
  partitionNodeIds: string[];
  expiresInMinutes: number;
  maxUses: number;
}

export type EnrollmentCodeView = Omit<DeviceEnrollmentCodeRecord, 'codeHash'> & {
  status: DeviceEnrollmentCodeStatus;
};

export type CreatedEnrollmentCode = EnrollmentCodeView & { code: string };

@Injectable()
export class DeviceEnrollmentService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly enrollmentRepository: DeviceEnrollmentRepository,
    private readonly devicesRepository: DevicesRepository,
    private readonly devicesService: DevicesService,
    private readonly auditService: AuditService,
    private readonly connectionsService: DeviceConnectionsService
  ) {}

  async listCodes(): Promise<EnrollmentCodeView[]> {
    const records = await this.enrollmentRepository.listCodes();
    return records.map((record) => ({ ...record, status: this.codeStatus(record) }));
  }

  async createCode(
    input: CreateEnrollmentCodeInput,
    context: WriteContext
  ): Promise<CreatedEnrollmentCode> {
    const partitionNodeIds = [...new Set(input.partitionNodeIds)];
    const code = `EA2-${randomBytes(24).toString('base64url')}`;
    const expiresAt = new Date(Date.now() + input.expiresInMinutes * 60_000);
    const record = await this.databaseService.transaction(async (transaction) => {
      await this.devicesService.validatePartitionAssignments(
        transaction,
        'default',
        partitionNodeIds
      );
      const created = await this.enrollmentRepository.createCode(transaction, {
        codeHash: this.hashSecret(code),
        displayName: input.displayName?.trim(),
        partitionNodeIds,
        maxUses: input.maxUses,
        expiresAt,
        createdBy: context.actorUserId
      });
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: DEVICE_ENROLLMENT_AUDIT.codeCreated,
        resourceType: DEVICE_ENROLLMENT_AUDIT.codeResource,
        resourceId: created.id,
        requestId: context.requestId,
        metadata: { expiresAt: expiresAt.toISOString(), maxUses: input.maxUses, partitionNodeIds }
      });
      return created;
    });

    const { codeHash: _, ...view } = record;
    return { ...view, code, status: this.codeStatus(record) };
  }

  async revokeCode(id: string, context: WriteContext): Promise<EnrollmentCodeView> {
    const record = await this.databaseService.transaction(async (transaction) => {
      const revoked = await this.enrollmentRepository.revokeCode(transaction, id, new Date());
      if (!revoked) {
        throw new NotFoundException({
          code: DEVICE_ENROLLMENT_ERROR_CODES.codeNotFound,
          message: 'Device enrollment code not found'
        });
      }
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: DEVICE_ENROLLMENT_AUDIT.codeRevoked,
        resourceType: DEVICE_ENROLLMENT_AUDIT.codeResource,
        resourceId: id,
        requestId: context.requestId,
        metadata: {}
      });
      return revoked;
    });
    const { codeHash: _, ...view } = record;
    return { ...view, status: this.codeStatus(record) };
  }

  async enroll(
    input: unknown,
    requestId: string,
    publicOrigin = env.betterAuthUrl
  ): Promise<EnrollDeviceResponse> {
    if (
      typeof input === 'object' &&
      input !== null &&
      'protocolVersion' in input &&
      input.protocolVersion !== CONTROL_PROTOCOL_VERSION
    ) {
      throw new BadRequestException({
        code: 'device_protocol_version_unsupported',
        message: 'Device protocol version is not supported by this server'
      });
    }

    const parsed = enrollDeviceRequestSchema.safeParse(input);
    if (!parsed.success) {
      throw new BadRequestException({
        code: DEVICE_ENROLLMENT_ERROR_CODES.invalidRequest,
        message: 'Device enrollment request does not match the control protocol',
        errors: parsed.error.issues
      });
    }

    const credential = randomBytes(32).toString('base64url');
    const device = await this.databaseService.transaction(async (transaction) => {
      const code = await this.enrollmentRepository.lockCodeByHash(
        transaction,
        this.hashSecret(parsed.data.enrollmentCode)
      );
      if (!code) {
        throw new UnauthorizedException({
          code: DEVICE_ENROLLMENT_ERROR_CODES.invalidCode,
          message: 'Device enrollment code is invalid'
        });
      }
      const status = this.codeStatus(code);
      if (status === DEVICE_ENROLLMENT_CODE_STATUS.expired) {
        throw new GoneException({
          code: DEVICE_ENROLLMENT_ERROR_CODES.codeExpired,
          message: 'Device enrollment code has expired'
        });
      }
      if (status !== DEVICE_ENROLLMENT_CODE_STATUS.active) {
        throw new GoneException({
          code: DEVICE_ENROLLMENT_ERROR_CODES.codeUnavailable,
          message: 'Device enrollment code is no longer available'
        });
      }

      const created = await this.enrollmentRepository.createDevice(transaction, {
        displayName: code.displayName ?? parsed.data.displayName,
        platform: parsed.data.platform,
        architecture: parsed.data.architecture,
        appVersion: parsed.data.appVersion,
        protocolVersion: String(parsed.data.protocolVersion)
      });
      await this.enrollmentRepository.replaceCredential(
        transaction,
        created.id,
        this.hashSecret(credential)
      );
      await this.enrollmentRepository.assignPartitions(
        transaction,
        created.id,
        code.partitionNodeIds,
        code.createdBy
      );
      await this.enrollmentRepository.consumeCode(transaction, code.id);
      await this.auditService.record(transaction, {
        actorUserId: code.createdBy,
        action: DEVICE_ENROLLMENT_AUDIT.deviceEnrolled,
        resourceType: DEVICE_ENROLLMENT_AUDIT.deviceResource,
        resourceId: created.id,
        requestId,
        metadata: {
          enrollmentCodeId: code.id,
          platform: created.platform,
          architecture: created.architecture,
          partitionNodeIds: code.partitionNodeIds
        }
      });
      return created;
    });

    return {
      deviceId: device.id,
      credential,
      websocketUrl: this.websocketUrl(publicOrigin),
      protocolVersion: CONTROL_PROTOCOL_VERSION
    };
  }

  async rotateCredential(
    deviceId: string,
    context: WriteContext
  ): Promise<{ deviceId: string; credential: string; version: number }> {
    const credential = randomBytes(32).toString('base64url');
    const record = await this.databaseService.transaction(async (transaction) => {
      const device = await this.devicesRepository.lockById(transaction, deviceId);
      if (!device) {
        throw new NotFoundException({
          code: DEVICE_ENROLLMENT_ERROR_CODES.deviceNotFound,
          message: 'Device not found'
        });
      }
      if (device.lifecycleStatus === DEVICE_LIFECYCLE_STATUS.revoked) {
        throw new BadRequestException({
          code: DEVICE_ENROLLMENT_ERROR_CODES.deviceRevoked,
          message: 'A revoked device cannot receive a new credential'
        });
      }
      const rotated = await this.enrollmentRepository.replaceCredential(
        transaction,
        deviceId,
        this.hashSecret(credential)
      );
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: DEVICE_ENROLLMENT_AUDIT.credentialRotated,
        resourceType: DEVICE_ENROLLMENT_AUDIT.deviceResource,
        resourceId: deviceId,
        requestId: context.requestId,
        metadata: { credentialVersion: rotated.version }
      });
      return rotated;
    });
    this.connectionsService.disconnect(
      deviceId,
      CONTROL_WEBSOCKET_CLOSE_CODES.authenticationRequired,
      DEVICE_CONNECTION_CLOSE_REASONS.credentialRotated
    );
    return { deviceId, credential, version: record.version };
  }

  async authenticate(deviceId: string, credential: string) {
    const record = await this.enrollmentRepository.findAuthenticatedDevice(
      deviceId,
      this.hashSecret(credential)
    );
    if (record) await this.enrollmentRepository.markCredentialUsed(record.id);
    return record;
  }

  private hashSecret(secret: string): string {
    return createHmac('sha256', env.deviceCredentialPepper).update(secret).digest('hex');
  }

  private codeStatus(
    record: Pick<DeviceEnrollmentCodeRecord, 'revokedAt' | 'expiresAt' | 'usedCount' | 'maxUses'>
  ): DeviceEnrollmentCodeStatus {
    if (record.revokedAt) return DEVICE_ENROLLMENT_CODE_STATUS.revoked;
    if (record.usedCount >= record.maxUses) return DEVICE_ENROLLMENT_CODE_STATUS.consumed;
    if (record.expiresAt.getTime() <= Date.now()) return DEVICE_ENROLLMENT_CODE_STATUS.expired;
    return DEVICE_ENROLLMENT_CODE_STATUS.active;
  }

  private websocketUrl(publicOrigin: string): string {
    const url = new URL(CONTROL_WEBSOCKET_PATH, publicOrigin);
    url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
    return url.toString();
  }
}
