import {
  CONTROL_CAPABILITY_NAMES,
  MANAGED_SETTING_KEYS,
  managedSettingSchema,
  type DeviceCapabilities,
  type ManagedSetting
} from '@dsz-examaware/control-protocol';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import type { WriteContext } from '../api/write-context.js';
import { AuditService } from '../audit/audit.service.js';
import { ControlOperationsService } from '../commands/control-operations.service.js';
import { DatabaseService } from '../database/database.service.js';
import { PartitionsRepository } from '../partitions/partitions.repository.js';
import { DevicesRepository } from '../devices/devices.repository.js';
import { PoliciesRepository } from './policies.repository.js';
import type { DevicePolicyRecord } from './policies.repository.js';

export interface DevicePolicyView extends DevicePolicyRecord {
  targets: { deviceIds: string[]; partitionNodeIds: string[] };
}

export interface EffectivePolicyView extends DevicePolicyRecord {
  assignment: { type: 'device' | 'node'; nodeId?: string; ancestorDistance: number };
}

@Injectable()
export class PoliciesService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly policiesRepository: PoliciesRepository,
    private readonly partitionsRepository: PartitionsRepository,
    private readonly devicesRepository: DevicesRepository,
    private readonly auditService: AuditService,
    private readonly controlOperationsService: ControlOperationsService
  ) {}

  async list(): Promise<DevicePolicyView[]> {
    const records = await this.policiesRepository.list();
    return Promise.all(
      records.map(async (record) => ({
        ...record,
        targets: await this.policiesRepository.targets(record.id)
      }))
    );
  }

  async get(id: string): Promise<DevicePolicyView> {
    const record = await this.requirePolicy(id);
    return { ...record, targets: await this.policiesRepository.targets(id) };
  }

  async create(
    input: {
      name: string;
      description: string;
      priority: number;
      enabled: boolean;
      settings: ManagedSetting[];
    },
    context: WriteContext
  ): Promise<DevicePolicyView> {
    const settings = validateSettings(input.settings);
    return this.databaseService.transaction(async (transaction) => {
      try {
        const created = await this.policiesRepository.create(transaction, {
          name: input.name.trim(),
          description: input.description.trim(),
          priority: input.priority,
          enabled: input.enabled,
          settings,
          createdBy: context.actorUserId
        });
        await this.auditService.record(transaction, {
          actorUserId: context.actorUserId,
          action: 'device-policy.created',
          resourceType: 'device-policy',
          resourceId: created.id,
          requestId: context.requestId,
          metadata: { priority: created.priority, settingKeys: settings.map((item) => item.key) }
        });
        return { ...created, targets: { deviceIds: [], partitionNodeIds: [] } };
      } catch (error) {
        rethrowPolicyConstraint(error);
      }
    });
  }

  async update(
    id: string,
    input: Partial<
      Pick<DevicePolicyRecord, 'name' | 'description' | 'priority' | 'enabled' | 'settings'>
    >,
    context: WriteContext
  ): Promise<DevicePolicyView> {
    const settings = input.settings ? validateSettings(input.settings) : undefined;
    const updated = await this.databaseService.transaction(async (transaction) => {
      try {
        const record = await this.policiesRepository.update(transaction, id, {
          ...input,
          ...(input.name ? { name: input.name.trim() } : {}),
          ...(input.description !== undefined ? { description: input.description.trim() } : {}),
          ...(settings ? { settings } : {})
        });
        if (!record) throw policyNotFound();
        await this.auditService.record(transaction, {
          actorUserId: context.actorUserId,
          action: 'device-policy.updated',
          resourceType: 'device-policy',
          resourceId: id,
          requestId: context.requestId,
          metadata: { fields: Object.keys(input) }
        });
        return { ...record, targets: await this.policiesRepository.targets(id) };
      } catch (error) {
        rethrowPolicyConstraint(error);
      }
    });
    await this.syncEffectiveSettings(updated.targets, context);
    return updated;
  }

  async setTargets(
    id: string,
    deviceIds: string[],
    partitionNodeIds: string[],
    context: WriteContext
  ): Promise<DevicePolicyView> {
    const previousTargets = await this.policiesRepository.targets(id);
    const updated = await this.databaseService.transaction(async (transaction) => {
      const policy = await this.policiesRepository.update(transaction, id, {});
      if (!policy) throw policyNotFound();
      const uniqueDeviceIds = [...new Set(deviceIds)];
      const uniqueNodeIds = [...new Set(partitionNodeIds)];
      await this.policiesRepository.replaceTargets(transaction, id, uniqueDeviceIds, uniqueNodeIds);
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'device-policy.targets-updated',
        resourceType: 'device-policy',
        resourceId: id,
        requestId: context.requestId,
        metadata: { deviceIds: uniqueDeviceIds, partitionNodeIds: uniqueNodeIds }
      });
      return {
        ...policy,
        targets: { deviceIds: uniqueDeviceIds, partitionNodeIds: uniqueNodeIds }
      };
    });
    await this.syncEffectiveSettings(
      {
        deviceIds: [...previousTargets.deviceIds, ...updated.targets.deviceIds],
        partitionNodeIds: [...previousTargets.partitionNodeIds, ...updated.targets.partitionNodeIds]
      },
      context
    );
    return updated;
  }

  async effectiveForDevice(deviceId: string): Promise<{
    policies: EffectivePolicyView[];
    settings: ManagedSetting[];
  }> {
    const assignments = await this.partitionsRepository.assignmentsForDevices([deviceId]);
    const nodeDistances = await this.ancestorDistances(assignments.get(deviceId) ?? []);
    const [directIds, nodeTargets] = await Promise.all([
      this.policiesRepository.directPolicyIds(deviceId),
      this.policiesRepository.nodePolicyTargets([...nodeDistances.keys()])
    ]);
    const allIds = [...new Set([...directIds, ...nodeTargets.map((item) => item.policyId)])];
    const records = await this.policiesRepository.findByIds(allIds);
    const direct = new Set(directIds);
    const nodeMatch = new Map<string, { nodeId: string; distance: number }>();
    for (const target of nodeTargets) {
      const distance = nodeDistances.get(target.nodeId);
      if (distance === undefined) continue;
      const current = nodeMatch.get(target.policyId);
      if (!current || distance < current.distance) {
        nodeMatch.set(target.policyId, { nodeId: target.nodeId, distance });
      }
    }
    const policies: EffectivePolicyView[] = records
      .filter((policy) => policy.enabled && (direct.has(policy.id) || nodeMatch.has(policy.id)))
      .map((policy) => {
        const matchedNode = nodeMatch.get(policy.id);
        return {
          ...policy,
          assignment: direct.has(policy.id)
            ? { type: 'device' as const, ancestorDistance: -1 }
            : {
                type: 'node' as const,
                nodeId: matchedNode!.nodeId,
                ancestorDistance: matchedNode!.distance
              }
        };
      })
      .sort(compareEffectivePolicies);
    const resolved = new Map<ManagedSetting['key'], ManagedSetting>();
    for (const policy of policies) {
      for (const setting of policy.settings) {
        if (!resolved.has(setting.key)) resolved.set(setting.key, setting);
      }
    }
    return { policies, settings: [...resolved.values()] };
  }

  async remove(id: string, context: WriteContext): Promise<void> {
    const targets = await this.policiesRepository.targets(id);
    await this.databaseService.transaction(async (transaction) => {
      const removed = await this.policiesRepository.remove(transaction, id);
      if (!removed) throw policyNotFound();
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'device-policy.deleted',
        resourceType: 'device-policy',
        resourceId: id,
        requestId: context.requestId,
        metadata: { name: removed.name }
      });
    });
    await this.syncEffectiveSettings(targets, context);
  }

  private async syncEffectiveSettings(
    targets: { deviceIds: string[]; partitionNodeIds: string[] },
    context: WriteContext
  ): Promise<void> {
    const deviceIds = new Set(targets.deviceIds);
    for (const rootId of new Set(targets.partitionNodeIds)) {
      const nodeIds = await this.partitionsRepository.descendantNodeIds(rootId);
      for (const deviceId of await this.partitionsRepository.deviceIdsForNodeIds(nodeIds)) {
        deviceIds.add(deviceId);
      }
    }

    const records = await this.devicesRepository.findByIds([...deviceIds]);
    const capabilitiesByDevice = new Map(
      records.map((record) => [record.id, record.lastCapabilities] as const)
    );
    const groups = new Map<string, { settings: ManagedSetting[]; deviceIds: string[] }>();
    for (const deviceId of [...deviceIds].sort()) {
      const { settings } = await this.effectiveForDevice(deviceId);
      const effectiveSettings = filterManagedSettingsForCapabilities(
        withManagedSettingDefaults(settings),
        capabilitiesByDevice.get(deviceId)
      );
      if (!effectiveSettings.length) continue;
      const signature = JSON.stringify(effectiveSettings);
      const group = groups.get(signature) ?? { settings: effectiveSettings, deviceIds: [] };
      group.deviceIds.push(deviceId);
      groups.set(signature, group);
    }

    await Promise.all(
      [...groups.values()].map((group) =>
        this.controlOperationsService.applyPolicySettings(group.settings, group.deviceIds, context)
      )
    );
  }

  private async ancestorDistances(
    assignments: Array<{ nodeId: string; parentId: string | null }>
  ): Promise<Map<string, number>> {
    const distances = new Map<string, number>();
    const pending = assignments.map((assignment) => ({
      id: assignment.nodeId,
      parentId: assignment.parentId,
      distance: 0
    }));
    while (pending.length) {
      const current = pending.shift()!;
      const previous = distances.get(current.id);
      if (previous !== undefined && previous <= current.distance) continue;
      distances.set(current.id, current.distance);
      if (!current.parentId) continue;
      const parent = await this.partitionsRepository.findNode(current.parentId);
      if (parent) {
        pending.push({ id: parent.id, parentId: parent.parentId, distance: current.distance + 1 });
      }
    }
    return distances;
  }

  private async requirePolicy(id: string): Promise<DevicePolicyRecord> {
    const record = await this.policiesRepository.findById(id);
    if (!record) throw policyNotFound();
    return record;
  }
}

function compareEffectivePolicies(left: EffectivePolicyView, right: EffectivePolicyView): number {
  if (left.assignment.type !== right.assignment.type) {
    return left.assignment.type === 'device' ? -1 : 1;
  }
  if (left.assignment.ancestorDistance !== right.assignment.ancestorDistance) {
    return left.assignment.ancestorDistance - right.assignment.ancestorDistance;
  }
  if (left.priority !== right.priority) return right.priority - left.priority;
  const updated = right.updatedAt.getTime() - left.updatedAt.getTime();
  return updated || left.id.localeCompare(right.id);
}

const MANAGED_SETTING_DEFAULTS = [
  { key: MANAGED_SETTING_KEYS.playerPreventControlSessionExit, value: false },
  { key: MANAGED_SETTING_KEYS.controlPreventUnbind, value: false },
  { key: MANAGED_SETTING_KEYS.controlPreventQuit, value: false },
  { key: MANAGED_SETTING_KEYS.pluginPreventInstall, value: false },
  { key: MANAGED_SETTING_KEYS.pluginInstallBlacklist, value: [] },
  { key: MANAGED_SETTING_KEYS.pluginInstallAllowlist, value: [] }
] satisfies ManagedSetting[];

export function withManagedSettingDefaults(settings: ManagedSetting[]): ManagedSetting[] {
  const definedKeys = new Set(settings.map((setting) => setting.key));
  return [
    ...settings,
    ...MANAGED_SETTING_DEFAULTS.filter((setting) => !definedKeys.has(setting.key))
  ];
}

export function filterManagedSettingsForCapabilities(
  settings: ManagedSetting[],
  capabilities: DeviceCapabilities | null | undefined
): ManagedSetting[] {
  if (
    !capabilities?.commands.some(
      (capability) =>
        capability.name === CONTROL_CAPABILITY_NAMES.managedSettings && capability.version >= 1
    )
  ) {
    return [];
  }
  const supportedKeys = new Set(
    capabilities.managedSettings
      .filter((capability) => capability.schemaVersion >= 1)
      .map((capability) => capability.key)
  );
  return settings.filter((setting) => supportedKeys.has(setting.key));
}

function validateSettings(input: ManagedSetting[]): ManagedSetting[] {
  const parsed = managedSettingSchema.array().max(20).safeParse(input);
  if (!parsed.success) {
    throw new BadRequestException({
      code: 'invalid_policy_settings',
      message: 'Policy settings do not match the managed setting registry',
      errors: parsed.error.issues
    });
  }
  const settings = parsed.data;
  if (new Set(settings.map((item) => item.key)).size !== settings.length) {
    throw new ConflictException({
      code: 'duplicate_policy_settings',
      message: 'A policy may define each setting only once'
    });
  }
  return settings;
}

function policyNotFound() {
  return new NotFoundException({
    code: 'device_policy_not_found',
    message: 'Device policy not found'
  });
}

function rethrowPolicyConstraint(error: unknown): never {
  if (typeof error === 'object' && error !== null && 'code' in error && error.code === '23505') {
    throw new ConflictException({
      code: 'device_policy_name_exists',
      message: 'Policy name already exists'
    });
  }
  throw error;
}
