import { MANAGED_SETTING_KEYS } from '@dsz-examaware/control-protocol';
import { describe, expect, it, vi } from 'vitest';
import type { AuditService } from '../src/audit/audit.service.js';
import type { ControlOperationsService } from '../src/commands/control-operations.service.js';
import type { DatabaseService } from '../src/database/database.service.js';
import type { PartitionsRepository } from '../src/partitions/partitions.repository.js';
import type {
  DevicePolicyRecord,
  PoliciesRepository
} from '../src/policies/policies.repository.js';
import { PoliciesService } from '../src/policies/policies.service.js';

const now = new Date('2026-08-04T00:00:00Z');
const later = new Date('2026-08-04T01:00:00Z');

function policy(
  id: string,
  priority: number,
  settings: DevicePolicyRecord['settings'],
  updatedAt = now
): DevicePolicyRecord {
  return {
    id,
    name: id,
    description: '',
    priority,
    enabled: true,
    settings,
    createdBy: 'admin-user',
    createdAt: now,
    updatedAt
  };
}

function createService(
  policiesRepository: Partial<PoliciesRepository>,
  partitionsRepository: Partial<PartitionsRepository>,
  options: {
    databaseService?: Partial<DatabaseService>;
    auditService?: Partial<AuditService>;
    controlOperationsService?: Partial<ControlOperationsService>;
  } = {}
) {
  return new PoliciesService(
    (options.databaseService ?? {}) as DatabaseService,
    policiesRepository as PoliciesRepository,
    partitionsRepository as PartitionsRepository,
    (options.auditService ?? {}) as AuditService,
    (options.controlOperationsService ?? {}) as ControlOperationsService
  );
}

describe('PoliciesService effective settings', () => {
  it('resolves direct device, child node, parent node, and same-level priority in that order', async () => {
    const parent = policy('parent', 1000, [
      { key: MANAGED_SETTING_KEYS.appearanceTheme, value: 'dark' },
      { key: MANAGED_SETTING_KEYS.playerUiScale, value: 1.5 }
    ]);
    const childLow = policy('child-low', 10, [
      { key: MANAGED_SETTING_KEYS.appearanceTheme, value: 'light' },
      { key: MANAGED_SETTING_KEYS.playerUiScale, value: 1.25 }
    ]);
    const childHigh = policy('child-high', 20, [
      { key: MANAGED_SETTING_KEYS.playerUiScale, value: 1.75 }
    ]);
    const direct = policy('direct', -100, [
      { key: MANAGED_SETTING_KEYS.appearanceTheme, value: 'auto' }
    ]);
    const policiesRepository = {
      directPolicyIds: vi.fn().mockResolvedValue([direct.id]),
      nodePolicyTargets: vi.fn().mockResolvedValue([
        { policyId: parent.id, nodeId: 'parent-node' },
        { policyId: childLow.id, nodeId: 'child-node' },
        { policyId: childHigh.id, nodeId: 'child-node' }
      ]),
      findByIds: vi.fn().mockResolvedValue([parent, childLow, direct, childHigh])
    };
    const partitionsRepository = {
      assignmentsForDevices: vi
        .fn()
        .mockResolvedValue(
          new Map([['device-1', [{ nodeId: 'child-node', parentId: 'parent-node' }]]])
        ),
      findNode: vi.fn().mockResolvedValue({ id: 'parent-node', parentId: null })
    };
    const service = createService(policiesRepository, partitionsRepository);

    const result = await service.effectiveForDevice('device-1');

    expect(result.policies.map((item) => item.id)).toEqual([
      'direct',
      'child-high',
      'child-low',
      'parent'
    ]);
    expect(result.settings).toEqual([
      { key: MANAGED_SETTING_KEYS.appearanceTheme, value: 'auto' },
      { key: MANAGED_SETTING_KEYS.playerUiScale, value: 1.75 }
    ]);
  });

  it('uses updated time then stable id when scope, depth, and priority are tied', async () => {
    const older = policy('a-policy', 100, [
      { key: MANAGED_SETTING_KEYS.playerLargeClockEnabled, value: false }
    ]);
    const newer = policy(
      'z-policy',
      100,
      [{ key: MANAGED_SETTING_KEYS.playerLargeClockEnabled, value: true }],
      later
    );
    const policiesRepository = {
      directPolicyIds: vi.fn().mockResolvedValue([]),
      nodePolicyTargets: vi.fn().mockResolvedValue([
        { policyId: older.id, nodeId: 'node' },
        { policyId: newer.id, nodeId: 'node' }
      ]),
      findByIds: vi.fn().mockResolvedValue([older, newer])
    };
    const partitionsRepository = {
      assignmentsForDevices: vi
        .fn()
        .mockResolvedValue(new Map([['device-1', [{ nodeId: 'node', parentId: null }]]]))
    };
    const service = createService(policiesRepository, partitionsRepository);

    const result = await service.effectiveForDevice('device-1');

    expect(result.policies.map((item) => item.id)).toEqual(['z-policy', 'a-policy']);
    expect(result.settings).toEqual([
      { key: MANAGED_SETTING_KEYS.playerLargeClockEnabled, value: true }
    ]);
  });
});

describe('PoliciesService policy synchronization', () => {
  it('pushes the updated effective theme to targeted devices immediately', async () => {
    const deviceId = 'e6503db2-4e90-4c08-b886-aa40433e6c76';
    const updated = policy('theme-policy', 100, [
      { key: MANAGED_SETTING_KEYS.appearanceTheme, value: 'dark' }
    ]);
    const policiesRepository = {
      update: vi.fn().mockResolvedValue(updated),
      targets: vi.fn().mockResolvedValue({ deviceIds: [deviceId], partitionNodeIds: [] }),
      directPolicyIds: vi.fn().mockResolvedValue([updated.id]),
      nodePolicyTargets: vi.fn().mockResolvedValue([]),
      findByIds: vi.fn().mockResolvedValue([updated])
    };
    const partitionsRepository = {
      assignmentsForDevices: vi.fn().mockResolvedValue(new Map())
    };
    const applyPolicySettings = vi.fn().mockResolvedValue(undefined);
    const service = createService(policiesRepository, partitionsRepository, {
      databaseService: {
        transaction: vi.fn(async (work) => work({}))
      } as unknown as DatabaseService,
      auditService: { record: vi.fn().mockResolvedValue(undefined) },
      controlOperationsService: { applyPolicySettings }
    });
    const context = {
      actorUserId: 'admin-user',
      requestId: '3f7ed739-1168-4370-a671-a26235475362'
    };

    await service.update(updated.id, { settings: updated.settings }, context);

    expect(applyPolicySettings).toHaveBeenCalledWith(
      [
        ...updated.settings,
        { key: MANAGED_SETTING_KEYS.playerPreventControlSessionExit, value: false }
      ],
      [deviceId],
      context
    );
  });
});
