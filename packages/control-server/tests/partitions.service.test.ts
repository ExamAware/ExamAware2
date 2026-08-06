import { BadRequestException } from '@nestjs/common';
import { describe, expect, it, vi } from 'vitest';
import type { AuditService } from '../src/audit/audit.service.js';
import type { DatabaseService } from '../src/database/database.service.js';
import type {
  PartitionDimensionRecord,
  PartitionNodeRecord,
  PartitionsRepository
} from '../src/partitions/partitions.repository.js';
import { PartitionsService } from '../src/partitions/partitions.service.js';

const actorUserId = 'admin-user';
const requestId = 'f8b215be-043b-43d7-86c4-33c4d77b6ec7';
const now = new Date('2026-08-04T00:00:00Z');
const dimension: PartitionDimensionRecord = {
  id: '75eb8f64-39d3-476c-8616-3c0214455711',
  schoolId: 'default',
  key: 'location',
  name: '位置',
  description: null,
  allowMultiple: false,
  createdBy: actorUserId,
  createdAt: now,
  updatedAt: now
};
const parentNode: PartitionNodeRecord = {
  id: '6be99ba0-111b-47d0-a149-1edacbe64e95',
  dimensionId: dimension.id,
  parentId: null,
  name: '主校区',
  description: null,
  metadata: {},
  sortOrder: 0,
  createdBy: actorUserId,
  createdAt: now,
  updatedAt: now
};

function createService(repository: Partial<PartitionsRepository>) {
  const transaction = {};
  const databaseService = {
    transaction: vi.fn(async (work) => work(transaction))
  } as unknown as DatabaseService;
  const auditService = {
    record: vi.fn().mockResolvedValue(undefined)
  } as unknown as AuditService;
  return {
    transaction,
    databaseService,
    auditService,
    service: new PartitionsService(
      databaseService,
      repository as PartitionsRepository,
      auditService
    )
  };
}

describe('PartitionsService', () => {
  it('creates an audited hierarchy node under a parent in the same dimension', async () => {
    const createdNode = {
      ...parentNode,
      id: 'cb2f166e-2362-40c7-a193-904caa9cc6b7',
      parentId: parentNode.id,
      name: '一号教学楼'
    } satisfies PartitionNodeRecord;
    const repository = {
      findDimension: vi.fn().mockResolvedValue(dimension),
      findNode: vi.fn().mockResolvedValue(parentNode),
      findSibling: vi.fn().mockResolvedValue(undefined),
      createNode: vi.fn().mockResolvedValue(createdNode)
    };
    const context = createService(repository);

    const result = await context.service.createNode(
      dimension.id,
      { parentId: parentNode.id, name: ' 一号教学楼 ', metadata: { code: 'A1' } },
      { actorUserId, requestId }
    );

    expect(result).toEqual(createdNode);
    expect(repository.createNode).toHaveBeenCalledWith(
      context.transaction,
      expect.objectContaining({
        dimensionId: dimension.id,
        parentId: parentNode.id,
        name: '一号教学楼',
        createdBy: actorUserId
      })
    );
    expect(context.auditService.record).toHaveBeenCalledWith(
      context.transaction,
      expect.objectContaining({
        action: 'partition-node.created',
        resourceId: createdNode.id,
        requestId
      })
    );
  });

  it('rejects a parent from another partition dimension', async () => {
    const repository = {
      findDimension: vi.fn().mockResolvedValue(dimension),
      findNode: vi.fn().mockResolvedValue({ ...parentNode, dimensionId: crypto.randomUUID() }),
      findSibling: vi.fn()
    };
    const context = createService(repository);

    await expect(
      context.service.createNode(
        dimension.id,
        { parentId: parentNode.id, name: 'Invalid child' },
        { actorUserId, requestId }
      )
    ).rejects.toBeInstanceOf(BadRequestException);
    expect(context.databaseService.transaction).not.toHaveBeenCalled();
    expect(repository.findSibling).not.toHaveBeenCalled();
  });
});
