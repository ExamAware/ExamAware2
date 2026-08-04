import { count, desc, eq, and } from 'drizzle-orm';
import { Injectable } from '@nestjs/common';
import type { ExamConfig, ExamConfigIssue } from '@dsz-examaware/core';
import type { DatabaseTransaction } from '../database/client.js';
import { DatabaseService } from '../database/database.service.js';
import { examConfig, examConfigVersion } from './exam-config.schema.js';

export type ExamConfigRecord = typeof examConfig.$inferSelect;
export type ExamConfigVersionRecord = typeof examConfigVersion.$inferSelect;

export interface ValidatedExamConfigVersion {
  content: ExamConfig;
  contentHash: string;
  validationIssues: ExamConfigIssue[];
}

@Injectable()
export class ExamConfigsRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async list(
    page: number,
    pageSize: number
  ): Promise<{ records: ExamConfigRecord[]; total: number }> {
    const offset = (page - 1) * pageSize;
    const [records, totals] = await Promise.all([
      this.databaseService.db
        .select()
        .from(examConfig)
        .orderBy(desc(examConfig.updatedAt), desc(examConfig.id))
        .limit(pageSize)
        .offset(offset),
      this.databaseService.db.select({ value: count() }).from(examConfig)
    ]);
    return { records, total: totals[0]?.value ?? 0 };
  }

  async findById(id: string): Promise<ExamConfigRecord | undefined> {
    const records = await this.databaseService.db
      .select()
      .from(examConfig)
      .where(eq(examConfig.id, id))
      .limit(1);
    return records[0];
  }

  async findVersion(
    examConfigId: string,
    version: number
  ): Promise<ExamConfigVersionRecord | undefined> {
    const records = await this.databaseService.db
      .select()
      .from(examConfigVersion)
      .where(
        and(
          eq(examConfigVersion.examConfigId, examConfigId),
          eq(examConfigVersion.version, version)
        )
      )
      .limit(1);
    return records[0];
  }

  async create(
    transaction: DatabaseTransaction,
    name: string,
    createdBy: string,
    version: ValidatedExamConfigVersion
  ): Promise<{ config: ExamConfigRecord; version: ExamConfigVersionRecord }> {
    const configs = await transaction
      .insert(examConfig)
      .values({ name, latestVersion: 1, createdBy })
      .returning();
    const config = configs[0]!;
    const versions = await transaction
      .insert(examConfigVersion)
      .values({
        examConfigId: config.id,
        version: 1,
        ...version,
        createdBy
      })
      .returning();
    return { config, version: versions[0]! };
  }

  async lockById(
    transaction: DatabaseTransaction,
    id: string
  ): Promise<ExamConfigRecord | undefined> {
    const records = await transaction
      .select()
      .from(examConfig)
      .where(eq(examConfig.id, id))
      .limit(1)
      .for('update');
    return records[0];
  }

  async addVersion(
    transaction: DatabaseTransaction,
    config: ExamConfigRecord,
    createdBy: string,
    version: ValidatedExamConfigVersion
  ): Promise<ExamConfigVersionRecord> {
    const nextVersion = config.latestVersion + 1;
    await transaction
      .update(examConfig)
      .set({ latestVersion: nextVersion, updatedAt: new Date() })
      .where(eq(examConfig.id, config.id));
    const versions = await transaction
      .insert(examConfigVersion)
      .values({
        examConfigId: config.id,
        version: nextVersion,
        ...version,
        createdBy
      })
      .returning();
    return versions[0]!;
  }
}
