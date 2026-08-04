import type { ExamConfig } from '@dsz-examaware/core';
import { normalizeExamConfig, validateExamConfigDetailed } from '@dsz-examaware/core';
import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import type { Page } from '../api/pagination.dto.js';
import { AuditService } from '../audit/audit.service.js';
import { DatabaseService } from '../database/database.service.js';
import type { WriteContext } from '../api/write-context.js';
import { createExamConfigArtifactBytes } from './exam-config-artifact.js';
import { ExamConfigsRepository } from './exam-configs.repository.js';
import type {
  ExamConfigRecord,
  ExamConfigVersionRecord,
  ValidatedExamConfigVersion
} from './exam-configs.repository.js';

export interface ExamConfigDetail extends ExamConfigRecord {
  latest: ExamConfigVersionRecord;
}

@Injectable()
export class ExamConfigsService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly examConfigsRepository: ExamConfigsRepository,
    private readonly auditService: AuditService
  ) {}

  async list(page: number, pageSize: number): Promise<Page<ExamConfigRecord>> {
    const result = await this.examConfigsRepository.list(page, pageSize);
    return { items: result.records, page, pageSize, total: result.total };
  }

  async get(id: string): Promise<ExamConfigDetail> {
    const config = await this.requireConfig(id);
    const latest = await this.examConfigsRepository.findVersion(id, config.latestVersion);
    if (!latest) {
      throw new NotFoundException({
        code: 'exam_config_version_not_found',
        message: 'Latest exam configuration version not found'
      });
    }
    return { ...config, latest };
  }

  async getVersion(id: string, version: number): Promise<ExamConfigVersionRecord> {
    const record = await this.examConfigsRepository.findVersion(id, version);
    if (!record) {
      throw new NotFoundException({
        code: 'exam_config_version_not_found',
        message: 'Exam configuration version not found'
      });
    }
    return record;
  }

  async create(
    name: string,
    content: ExamConfig,
    context: WriteContext
  ): Promise<ExamConfigDetail> {
    const validatedVersion = this.validateVersion(content);
    return this.databaseService.transaction(async (transaction) => {
      const created = await this.examConfigsRepository.create(
        transaction,
        name.trim(),
        context.actorUserId,
        validatedVersion
      );
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'exam-config.created',
        resourceType: 'exam-config',
        resourceId: created.config.id,
        requestId: context.requestId,
        metadata: { version: 1, contentHash: created.version.contentHash }
      });
      return { ...created.config, latest: created.version };
    });
  }

  async createVersion(
    id: string,
    content: ExamConfig,
    context: WriteContext
  ): Promise<ExamConfigVersionRecord> {
    const validatedVersion = this.validateVersion(content);
    return this.databaseService.transaction(async (transaction) => {
      const config = await this.examConfigsRepository.lockById(transaction, id);
      if (!config) {
        throw new NotFoundException({
          code: 'exam_config_not_found',
          message: 'Exam configuration not found'
        });
      }
      const version = await this.examConfigsRepository.addVersion(
        transaction,
        config,
        context.actorUserId,
        validatedVersion
      );
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'exam-config.version-created',
        resourceType: 'exam-config',
        resourceId: id,
        requestId: context.requestId,
        metadata: { version: version.version, contentHash: version.contentHash }
      });
      return version;
    });
  }

  private async requireConfig(id: string): Promise<ExamConfigRecord> {
    const config = await this.examConfigsRepository.findById(id);
    if (!config) {
      throw new NotFoundException({
        code: 'exam_config_not_found',
        message: 'Exam configuration not found'
      });
    }
    return config;
  }

  private validateVersion(content: ExamConfig): ValidatedExamConfigVersion {
    const result = validateExamConfigDetailed(content, { overlap: 'error', sort: true });
    if (!result.valid || !result.config) {
      throw new UnprocessableEntityException({
        code: 'invalid_exam_config',
        message: 'Exam configuration validation failed',
        errors: result.errors
      });
    }

    const normalized = normalizeExamConfig(result.config as ExamConfig);
    const contentHash = createExamConfigArtifactBytes(normalized).sha256;
    return { content: normalized, contentHash, validationIssues: result.issues };
  }
}
