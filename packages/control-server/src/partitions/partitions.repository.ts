import { and, asc, eq, inArray, isNull, sql } from 'drizzle-orm';
import { Injectable } from '@nestjs/common';
import type { DatabaseTransaction } from '../database/client.js';
import { DatabaseService } from '../database/database.service.js';
import {
  devicePartitionMembership,
  partitionDimension,
  partitionNode
} from './partition.schema.js';

export type PartitionDimensionRecord = typeof partitionDimension.$inferSelect;
export type PartitionNodeRecord = typeof partitionNode.$inferSelect;
export type PartitionDimensionCreate = Pick<
  typeof partitionDimension.$inferInsert,
  'key' | 'name' | 'description' | 'allowMultiple' | 'createdBy'
>;
export type PartitionDimensionUpdate = Partial<
  Pick<PartitionDimensionRecord, 'name' | 'description'>
>;
export type PartitionNodeCreate = Pick<
  typeof partitionNode.$inferInsert,
  'dimensionId' | 'parentId' | 'name' | 'description' | 'metadata' | 'sortOrder' | 'createdBy'
>;
export type PartitionNodeUpdate = Partial<
  Pick<PartitionNodeRecord, 'name' | 'description' | 'metadata' | 'sortOrder'>
>;

export interface PartitionNodeWithDimension extends PartitionNodeRecord {
  dimensionKey: string;
  dimensionName: string;
  allowMultiple: boolean;
  schoolId: string;
}

export interface DevicePartitionAssignment {
  nodeId: string;
  nodeName: string;
  parentId: string | null;
  dimensionId: string;
  dimensionKey: string;
  dimensionName: string;
}

@Injectable()
export class PartitionsRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  listDimensions(): Promise<PartitionDimensionRecord[]> {
    return this.databaseService.db
      .select()
      .from(partitionDimension)
      .orderBy(asc(partitionDimension.name), asc(partitionDimension.id));
  }

  async findDimension(id: string): Promise<PartitionDimensionRecord | undefined> {
    const records = await this.databaseService.db
      .select()
      .from(partitionDimension)
      .where(eq(partitionDimension.id, id))
      .limit(1);
    return records[0];
  }

  async findDimensionByKey(key: string): Promise<PartitionDimensionRecord | undefined> {
    const records = await this.databaseService.db
      .select()
      .from(partitionDimension)
      .where(and(eq(partitionDimension.schoolId, 'default'), eq(partitionDimension.key, key)))
      .limit(1);
    return records[0];
  }

  async createDimension(
    transaction: DatabaseTransaction,
    input: PartitionDimensionCreate
  ): Promise<PartitionDimensionRecord> {
    const records = await transaction.insert(partitionDimension).values(input).returning();
    return records[0]!;
  }

  async updateDimension(
    transaction: DatabaseTransaction,
    id: string,
    patch: PartitionDimensionUpdate
  ): Promise<PartitionDimensionRecord | undefined> {
    const records = await transaction
      .update(partitionDimension)
      .set({ ...patch, updatedAt: new Date() })
      .where(eq(partitionDimension.id, id))
      .returning();
    return records[0];
  }

  listNodes(dimensionId: string): Promise<PartitionNodeRecord[]> {
    return this.databaseService.db
      .select()
      .from(partitionNode)
      .where(eq(partitionNode.dimensionId, dimensionId))
      .orderBy(asc(partitionNode.sortOrder), asc(partitionNode.name), asc(partitionNode.id));
  }

  async findNode(id: string): Promise<PartitionNodeRecord | undefined> {
    const records = await this.databaseService.db
      .select()
      .from(partitionNode)
      .where(eq(partitionNode.id, id))
      .limit(1);
    return records[0];
  }

  async findSibling(
    dimensionId: string,
    parentId: string | null,
    name: string
  ): Promise<PartitionNodeRecord | undefined> {
    const parentCondition = parentId
      ? eq(partitionNode.parentId, parentId)
      : isNull(partitionNode.parentId);
    const records = await this.databaseService.db
      .select()
      .from(partitionNode)
      .where(
        and(
          eq(partitionNode.dimensionId, dimensionId),
          parentCondition,
          eq(partitionNode.name, name)
        )
      )
      .limit(1);
    return records[0];
  }

  async createNode(
    transaction: DatabaseTransaction,
    input: PartitionNodeCreate
  ): Promise<PartitionNodeRecord> {
    const records = await transaction.insert(partitionNode).values(input).returning();
    return records[0]!;
  }

  async updateNode(
    transaction: DatabaseTransaction,
    id: string,
    patch: PartitionNodeUpdate
  ): Promise<PartitionNodeRecord | undefined> {
    const records = await transaction
      .update(partitionNode)
      .set({ ...patch, updatedAt: new Date() })
      .where(eq(partitionNode.id, id))
      .returning();
    return records[0];
  }

  async findNodesByIds(
    transaction: DatabaseTransaction,
    nodeIds: string[]
  ): Promise<PartitionNodeWithDimension[]> {
    if (nodeIds.length === 0) {
      return [];
    }
    return transaction
      .select({
        id: partitionNode.id,
        dimensionId: partitionNode.dimensionId,
        parentId: partitionNode.parentId,
        name: partitionNode.name,
        description: partitionNode.description,
        metadata: partitionNode.metadata,
        sortOrder: partitionNode.sortOrder,
        createdBy: partitionNode.createdBy,
        createdAt: partitionNode.createdAt,
        updatedAt: partitionNode.updatedAt,
        dimensionKey: partitionDimension.key,
        dimensionName: partitionDimension.name,
        allowMultiple: partitionDimension.allowMultiple,
        schoolId: partitionDimension.schoolId
      })
      .from(partitionNode)
      .innerJoin(partitionDimension, eq(partitionDimension.id, partitionNode.dimensionId))
      .where(inArray(partitionNode.id, nodeIds));
  }

  async replaceDeviceAssignments(
    transaction: DatabaseTransaction,
    deviceId: string,
    nodeIds: string[],
    assignedBy: string
  ): Promise<void> {
    await transaction
      .delete(devicePartitionMembership)
      .where(eq(devicePartitionMembership.deviceId, deviceId));
    if (nodeIds.length > 0) {
      await transaction.insert(devicePartitionMembership).values(
        nodeIds.map((nodeId) => ({
          deviceId,
          nodeId,
          assignedBy
        }))
      );
    }
  }

  async assignmentsForDevices(
    deviceIds: string[]
  ): Promise<Map<string, DevicePartitionAssignment[]>> {
    const assignments = new Map<string, DevicePartitionAssignment[]>();
    if (deviceIds.length === 0) {
      return assignments;
    }

    const records = await this.databaseService.db
      .select({
        deviceId: devicePartitionMembership.deviceId,
        nodeId: partitionNode.id,
        nodeName: partitionNode.name,
        parentId: partitionNode.parentId,
        dimensionId: partitionDimension.id,
        dimensionKey: partitionDimension.key,
        dimensionName: partitionDimension.name
      })
      .from(devicePartitionMembership)
      .innerJoin(partitionNode, eq(partitionNode.id, devicePartitionMembership.nodeId))
      .innerJoin(partitionDimension, eq(partitionDimension.id, partitionNode.dimensionId))
      .where(inArray(devicePartitionMembership.deviceId, deviceIds))
      .orderBy(asc(partitionDimension.name), asc(partitionNode.sortOrder), asc(partitionNode.name));

    for (const record of records) {
      const current = assignments.get(record.deviceId) ?? [];
      current.push({
        nodeId: record.nodeId,
        nodeName: record.nodeName,
        parentId: record.parentId,
        dimensionId: record.dimensionId,
        dimensionKey: record.dimensionKey,
        dimensionName: record.dimensionName
      });
      assignments.set(record.deviceId, current);
    }
    return assignments;
  }

  async descendantNodeIds(rootId: string): Promise<string[]> {
    const result = await this.databaseService.db.execute<{ id: string }>(sql`
      with recursive descendants as (
        select ${partitionNode.id}
        from ${partitionNode}
        where ${partitionNode.id} = ${rootId}
        union all
        select child.${sql.identifier('id')}
        from ${partitionNode} child
        inner join descendants parent on child.${sql.identifier('parent_id')} = parent.${sql.identifier('id')}
      )
      select id from descendants
    `);
    return result.map((row) => row.id);
  }

  async deviceIdsForNodeIds(nodeIds: string[]): Promise<string[]> {
    if (nodeIds.length === 0) return [];
    const rows = await this.databaseService.db
      .selectDistinct({ deviceId: devicePartitionMembership.deviceId })
      .from(devicePartitionMembership)
      .where(inArray(devicePartitionMembership.nodeId, nodeIds));
    return rows.map((row) => row.deviceId);
  }
}
