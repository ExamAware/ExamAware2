import { BadRequestException, UnprocessableEntityException } from '@nestjs/common';
import { describe, expect, it, vi } from 'vitest';
import type { AuditService } from '../src/audit/audit.service.js';
import type { DatabaseService } from '../src/database/database.service.js';
import type {
  ExamConfigRecord,
  ExamConfigVersionRecord,
  ExamConfigsRepository
} from '../src/exam-configs/exam-configs.repository.js';
import { ExamConfigsService } from '../src/exam-configs/exam-configs.service.js';

const actorUserId = 'admin-user';
const requestId = '04ae0ed9-d420-4cf6-9529-50429817a304';

function createService(repositoryOverrides: Partial<ExamConfigsRepository> = {}) {
  const transaction = {};
  const databaseService = {
    transaction: vi.fn(async (work) => work(transaction))
  } as unknown as DatabaseService;
  const repository = repositoryOverrides as ExamConfigsRepository;
  const auditService = {
    record: vi.fn().mockResolvedValue(undefined)
  } as unknown as AuditService;
  return {
    transaction,
    databaseService,
    repository,
    auditService,
    service: new ExamConfigsService(databaseService, repository, auditService)
  };
}

describe('ExamConfigsService', () => {
  it('rejects invalid core exam configuration before opening a transaction', async () => {
    const context = createService();

    await expect(
      context.service.create(
        'Invalid',
        { examName: '', message: '', examInfos: [] },
        { actorUserId, requestId }
      )
    ).rejects.toBeInstanceOf(UnprocessableEntityException);
    expect(context.databaseService.transaction).not.toHaveBeenCalled();
  });

  it('rejects an invalid .ea2 artifact before opening a transaction', () => {
    const context = createService();

    expect(() =>
      context.service.createFromEa2('Invalid file', new TextEncoder().encode('{not-json'), {
        actorUserId,
        requestId
      })
    ).toThrow(BadRequestException);
    expect(context.databaseService.transaction).not.toHaveBeenCalled();
  });

  it('normalizes, hashes and persists version 1 with its audit record', async () => {
    const now = new Date('2026-08-04T00:00:00Z');
    const configRecord = {
      id: 'a8b44f53-69ce-49ac-8810-c6e6d748fb5f',
      schoolId: 'default',
      name: 'Finals',
      latestVersion: 1,
      createdBy: actorUserId,
      createdAt: now,
      updatedAt: now
    } satisfies ExamConfigRecord;
    const create = vi.fn(async (_transaction, _name, _createdBy, version) => ({
      config: configRecord,
      version: {
        id: 'f0ae734e-89e5-40cf-aeb3-b67318489d17',
        examConfigId: configRecord.id,
        version: 1,
        ...version,
        createdBy: actorUserId,
        createdAt: now
      } satisfies ExamConfigVersionRecord
    }));
    const context = createService({ create } as Partial<ExamConfigsRepository>);

    const result = await context.service.create(
      ' Finals ',
      {
        examName: 'Finals',
        message: '',
        examInfos: [
          {
            name: 'Second',
            start: '2026-08-04 10:00',
            end: '2026-08-04 11:00',
            alertTime: 15
          },
          {
            name: 'First',
            start: '2026-08-04 08:00',
            end: '2026-08-04 09:00',
            alertTime: 15
          }
        ]
      },
      { actorUserId, requestId }
    );

    const persistedVersion = create.mock.calls[0]![3];
    expect(create.mock.calls[0]![1]).toBe('Finals');
    expect(persistedVersion.content.examInfos.map((exam) => exam.name)).toEqual([
      'First',
      'Second'
    ]);
    expect(persistedVersion.contentHash).toMatch(/^[a-f0-9]{64}$/);
    expect(result.latest.contentHash).toBe(persistedVersion.contentHash);
    expect(context.auditService.record).toHaveBeenCalledWith(
      context.transaction,
      expect.objectContaining({
        action: 'exam-config.created',
        resourceId: configRecord.id,
        requestId
      })
    );
  });
  it('allows a prepared but inactive exam to be deleted', async () => {
    const current = {
      id: crypto.randomUUID(),
      name: 'Prepared exam',
      status: 'ready',
      deletedAt: null
    } as ExamConfigRecord;
    const softDelete = vi.fn().mockResolvedValue({ ...current, status: 'archived' });
    const context = createService({
      lockById: vi.fn().mockResolvedValue(current),
      softDelete
    });

    await context.service.remove(current.id, { actorUserId, requestId });

    expect(softDelete).toHaveBeenCalledWith(context.transaction, current.id);
    expect(context.auditService.record).toHaveBeenCalledWith(
      context.transaction,
      expect.objectContaining({ action: 'exam.deleted', resourceId: current.id })
    );
  });
});
