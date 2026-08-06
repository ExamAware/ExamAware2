import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import type { WriteContext } from '../api/write-context.js';
import { AuditService } from '../audit/audit.service.js';
import { DatabaseService } from '../database/database.service.js';
import type {
  PartitionDimensionCreate,
  PartitionDimensionRecord,
  PartitionDimensionUpdate,
  PartitionNodeCreate,
  PartitionNodeRecord,
  PartitionNodeUpdate
} from './partitions.repository.js';
import { PartitionsRepository } from './partitions.repository.js';

export interface PartitionDimensionDetail extends PartitionDimensionRecord {
  nodes: PartitionNodeRecord[];
}

@Injectable()
export class PartitionsService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly partitionsRepository: PartitionsRepository,
    private readonly auditService: AuditService
  ) {}

  listDimensions(): Promise<PartitionDimensionRecord[]> {
    return this.partitionsRepository.listDimensions();
  }

  async getDimension(id: string): Promise<PartitionDimensionDetail> {
    const dimension = await this.requireDimension(id);
    const nodes = await this.partitionsRepository.listNodes(id);
    return { ...dimension, nodes };
  }

  async createDimension(
    input: Omit<PartitionDimensionCreate, 'createdBy'>,
    context: WriteContext
  ): Promise<PartitionDimensionRecord> {
    const existing = await this.partitionsRepository.findDimensionByKey(input.key);
    if (existing) {
      throw new ConflictException({
        code: 'partition_dimension_key_exists',
        message: 'Partition dimension key already exists'
      });
    }

    return this.databaseService.transaction(async (transaction) => {
      const created = await this.partitionsRepository.createDimension(transaction, {
        ...input,
        name: input.name.trim(),
        description: input.description?.trim(),
        createdBy: context.actorUserId
      });
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'partition-dimension.created',
        resourceType: 'partition-dimension',
        resourceId: created.id,
        requestId: context.requestId,
        metadata: { key: created.key, allowMultiple: created.allowMultiple }
      });
      return created;
    });
  }

  async updateDimension(
    id: string,
    patch: PartitionDimensionUpdate,
    context: WriteContext
  ): Promise<PartitionDimensionRecord> {
    this.requireNonEmptyPatch(patch);
    await this.requireDimension(id);
    const normalizedPatch = {
      ...patch,
      name: patch.name?.trim(),
      description: patch.description === null ? null : patch.description?.trim()
    };

    return this.databaseService.transaction(async (transaction) => {
      const updated = await this.partitionsRepository.updateDimension(
        transaction,
        id,
        normalizedPatch
      );
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'partition-dimension.updated',
        resourceType: 'partition-dimension',
        resourceId: id,
        requestId: context.requestId,
        metadata: { changedFields: Object.keys(patch) }
      });
      return updated!;
    });
  }

  async removeDimension(id: string, context: WriteContext): Promise<void> {
    const current = await this.requireDimension(id);
    await this.databaseService.transaction(async (transaction) => {
      await this.partitionsRepository.deleteDimension(transaction, id);
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'partition-dimension.deleted',
        resourceType: 'partition-dimension',
        resourceId: id,
        requestId: context.requestId,
        metadata: { key: current.key, name: current.name }
      });
    });
  }

  async createNode(
    dimensionId: string,
    input: Omit<PartitionNodeCreate, 'dimensionId' | 'createdBy'>,
    context: WriteContext
  ): Promise<PartitionNodeRecord> {
    await this.requireDimension(dimensionId);
    if (input.parentId) {
      const parent = await this.partitionsRepository.findNode(input.parentId);
      if (!parent) {
        throw new NotFoundException({
          code: 'partition_parent_not_found',
          message: 'Parent partition node not found'
        });
      }
      if (parent.dimensionId !== dimensionId) {
        throw new BadRequestException({
          code: 'partition_parent_dimension_mismatch',
          message: 'Parent node belongs to another partition dimension'
        });
      }
    }

    const name = input.name.trim();
    const sibling = await this.partitionsRepository.findSibling(
      dimensionId,
      input.parentId ?? null,
      name
    );
    if (sibling) {
      throw new ConflictException({
        code: 'partition_node_name_exists',
        message: 'A sibling partition node already uses this name'
      });
    }

    return this.databaseService.transaction(async (transaction) => {
      const created = await this.partitionsRepository.createNode(transaction, {
        ...input,
        dimensionId,
        name,
        description: input.description?.trim(),
        createdBy: context.actorUserId
      });
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'partition-node.created',
        resourceType: 'partition-node',
        resourceId: created.id,
        requestId: context.requestId,
        metadata: { dimensionId, parentId: created.parentId }
      });
      return created;
    });
  }

  async updateNode(
    id: string,
    patch: PartitionNodeUpdate,
    context: WriteContext
  ): Promise<PartitionNodeRecord> {
    this.requireNonEmptyPatch(patch);
    const current = await this.requireNode(id);
    const name = patch.name?.trim();
    if (name && name !== current.name) {
      const sibling = await this.partitionsRepository.findSibling(
        current.dimensionId,
        current.parentId,
        name
      );
      if (sibling && sibling.id !== id) {
        throw new ConflictException({
          code: 'partition_node_name_exists',
          message: 'A sibling partition node already uses this name'
        });
      }
    }
    const normalizedPatch = {
      ...patch,
      name,
      description: patch.description === null ? null : patch.description?.trim()
    };

    return this.databaseService.transaction(async (transaction) => {
      const updated = await this.partitionsRepository.updateNode(transaction, id, normalizedPatch);
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'partition-node.updated',
        resourceType: 'partition-node',
        resourceId: id,
        requestId: context.requestId,
        metadata: { changedFields: Object.keys(patch) }
      });
      return updated!;
    });
  }

  async removeNode(id: string, context: WriteContext): Promise<void> {
    const current = await this.requireNode(id);
    await this.databaseService.transaction(async (transaction) => {
      await this.partitionsRepository.deleteNode(transaction, id);
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'partition-node.deleted',
        resourceType: 'partition-node',
        resourceId: id,
        requestId: context.requestId,
        metadata: {
          dimensionId: current.dimensionId,
          parentId: current.parentId,
          name: current.name
        }
      });
    });
  }

  private async requireDimension(id: string): Promise<PartitionDimensionRecord> {
    const dimension = await this.partitionsRepository.findDimension(id);
    if (!dimension) {
      throw new NotFoundException({
        code: 'partition_dimension_not_found',
        message: 'Partition dimension not found'
      });
    }
    return dimension;
  }

  private async requireNode(id: string): Promise<PartitionNodeRecord> {
    const node = await this.partitionsRepository.findNode(id);
    if (!node) {
      throw new NotFoundException({
        code: 'partition_node_not_found',
        message: 'Partition node not found'
      });
    }
    return node;
  }

  private requireNonEmptyPatch(patch: object): void {
    if (Object.keys(patch).length === 0) {
      throw new BadRequestException({
        code: 'empty_patch',
        message: 'At least one field is required'
      });
    }
  }
}
