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
  enrollDeviceRequestSchema
} from '@dsz-examaware/control-protocol';
import type { EnrollDeviceResponse } from '@dsz-examaware/control-protocol';
import type { WriteContext } from '../api/write-context.js';
import { AuditService } from '../audit/audit.service.js';
import { env } from '../config/env.js';
import { DatabaseService } from '../database/database.service.js';
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
  status: 'active' | 'expired' | 'consumed' | 'revoked';
};

export type CreatedEnrollmentCode = EnrollmentCodeView & { code: string };

@Injectable()
export class DeviceEnrollmentService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly enrollmentRepository: DeviceEnrollmentRepository,
    private readonly devicesRepository: DevicesRepository,
    private readonly devicesService: DevicesService,
    private readonly auditService: AuditService
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
        action: 'device-enrollment-code.created',
        resourceType: 'device-enrollment-code',
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
          code: 'device_enrollment_code_not_found',
          message: 'Device enrollment code not found'
        });
      }
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'device-enrollment-code.revoked',
        resourceType: 'device-enrollment-code',
        resourceId: id,
        requestId: context.requestId,
        metadata: {}
      });
      return revoked;
    });
    const { codeHash: _, ...view } = record;
    return { ...view, status: this.codeStatus(record) };
  }

  async enroll(input: unknown, requestId: string): Promise<EnrollDeviceResponse> {
    const parsed = enrollDeviceRequestSchema.safeParse(input);
    if (!parsed.success) {
      throw new BadRequestException({
        code: 'invalid_device_enrollment',
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
          code: 'invalid_device_enrollment_code',
          message: 'Device enrollment code is invalid'
        });
      }
      const status = this.codeStatus(code);
      if (status === 'expired') {
        throw new GoneException({
          code: 'device_enrollment_code_expired',
          message: 'Device enrollment code has expired'
        });
      }
      if (status !== 'active') {
        throw new GoneException({
          code: 'device_enrollment_code_unavailable',
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
        action: 'device.enrolled',
        resourceType: 'device',
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
      websocketUrl: this.websocketUrl(),
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
        throw new NotFoundException({ code: 'device_not_found', message: 'Device not found' });
      }
      if (device.lifecycleStatus === 'revoked') {
        throw new BadRequestException({
          code: 'device_revoked',
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
        action: 'device.credential-rotated',
        resourceType: 'device',
        resourceId: deviceId,
        requestId: context.requestId,
        metadata: { credentialVersion: rotated.version }
      });
      return rotated;
    });
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
  ): EnrollmentCodeView['status'] {
    if (record.revokedAt) return 'revoked';
    if (record.usedCount >= record.maxUses) return 'consumed';
    if (record.expiresAt.getTime() <= Date.now()) return 'expired';
    return 'active';
  }

  private websocketUrl(): string {
    const url = new URL(CONTROL_WEBSOCKET_PATH, env.betterAuthUrl);
    url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
    return url.toString();
  }
}
