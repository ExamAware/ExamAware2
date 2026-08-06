import type {
  DeviceConnectionStatus,
  DeviceLifecycleStatus,
  DeviceView,
  PartitionDimensionDetail
} from '@/api/control/types';

export const UNKNOWN_DEVICE_VALUE = '__unknown__';

export interface DeviceFilters {
  keyword: string;
  connectionStatuses: DeviceConnectionStatus[];
  lifecycleStatuses: DeviceLifecycleStatus[];
  partitionNodeIds: string[];
  platforms: string[];
  architectures: string[];
  appVersions: string[];
  protocolVersions: string[];
  capabilityState: 'all' | 'known' | 'unknown';
  capabilityCommands: string[];
  labels: string[];
  lastSeenFrom: string;
  lastSeenTo: string;
}

export function createDefaultDeviceFilters(): DeviceFilters {
  return {
    keyword: '',
    connectionStatuses: [],
    lifecycleStatuses: [],
    partitionNodeIds: [],
    platforms: [],
    architectures: [],
    appVersions: [],
    protocolVersions: [],
    capabilityState: 'all',
    capabilityCommands: [],
    labels: [],
    lastSeenFrom: '',
    lastSeenTo: ''
  };
}

export function countActiveDeviceFilters(filters: DeviceFilters): number {
  return [
    filters.keyword,
    filters.connectionStatuses,
    filters.lifecycleStatuses,
    filters.partitionNodeIds,
    filters.platforms,
    filters.architectures,
    filters.appVersions,
    filters.protocolVersions,
    filters.capabilityState === 'all' ? '' : filters.capabilityState,
    filters.capabilityCommands,
    filters.labels,
    filters.lastSeenFrom,
    filters.lastSeenTo
  ].filter((value) => (Array.isArray(value) ? value.length > 0 : Boolean(value))).length;
}

export function filterDevices(
  devices: DeviceView[],
  filters: DeviceFilters,
  dimensions: PartitionDimensionDetail[]
): DeviceView[] {
  const allowedPartitionIds = expandPartitionIds(filters.partitionNodeIds, dimensions);
  const normalizedKeyword = filters.keyword.trim().toLocaleLowerCase();
  const seenFrom = filters.lastSeenFrom
    ? new Date(`${filters.lastSeenFrom}T00:00:00`).getTime()
    : null;
  const seenTo = filters.lastSeenTo
    ? new Date(`${filters.lastSeenTo}T23:59:59.999`).getTime()
    : null;

  return devices.filter((device) => {
    const searchable = [
      device.displayName,
      device.id,
      device.platform,
      device.architecture,
      device.appVersion,
      device.protocolVersion,
      ...device.labels,
      ...device.partitions.flatMap((partition) => [
        partition.dimensionName,
        partition.dimensionKey,
        partition.nodeName
      ])
    ]
      .filter(Boolean)
      .join(' ')
      .toLocaleLowerCase();
    if (normalizedKeyword && !searchable.includes(normalizedKeyword)) return false;
    if (
      filters.connectionStatuses.length &&
      !filters.connectionStatuses.includes(device.connectionStatus)
    ) {
      return false;
    }
    if (
      filters.lifecycleStatuses.length &&
      !filters.lifecycleStatuses.includes(device.lifecycleStatus)
    ) {
      return false;
    }
    if (
      allowedPartitionIds.size &&
      !device.partitions.some((partition) => allowedPartitionIds.has(partition.nodeId))
    ) {
      return false;
    }
    if (!matchesOptional(filters.platforms, device.platform)) return false;
    if (!matchesOptional(filters.architectures, device.architecture)) return false;
    if (!matchesOptional(filters.appVersions, device.appVersion)) return false;
    if (!matchesOptional(filters.protocolVersions, device.protocolVersion)) return false;
    if (filters.capabilityState === 'known' && !device.lastCapabilities) return false;
    if (filters.capabilityState === 'unknown' && device.lastCapabilities) return false;
    if (
      filters.capabilityCommands.length &&
      !filters.capabilityCommands.every((selectedCommand) =>
        device.lastCapabilities?.commands.some(
          (command) => `${command.name}@${command.version}` === selectedCommand
        )
      )
    ) {
      return false;
    }
    if (filters.labels.length && !filters.labels.every((label) => device.labels.includes(label))) {
      return false;
    }
    const lastSeenAt = device.lastSeenAt ? new Date(device.lastSeenAt).getTime() : null;
    if (seenFrom !== null && (lastSeenAt === null || lastSeenAt < seenFrom)) return false;
    if (seenTo !== null && (lastSeenAt === null || lastSeenAt > seenTo)) return false;
    return true;
  });
}

function matchesOptional(selectedValues: string[], actualValue: string | null): boolean {
  if (!selectedValues.length) return true;
  return selectedValues.includes(actualValue ?? UNKNOWN_DEVICE_VALUE);
}

function expandPartitionIds(
  selectedIds: string[],
  dimensions: PartitionDimensionDetail[]
): Set<string> {
  const childrenByParent = new Map<string, string[]>();
  for (const node of dimensions.flatMap((dimension) => dimension.nodes)) {
    if (!node.parentId) continue;
    const children = childrenByParent.get(node.parentId) ?? [];
    children.push(node.id);
    childrenByParent.set(node.parentId, children);
  }
  const result = new Set<string>();
  const pending = [...selectedIds];
  while (pending.length) {
    const id = pending.pop()!;
    if (result.has(id)) continue;
    result.add(id);
    pending.push(...(childrenByParent.get(id) ?? []));
  }
  return result;
}
