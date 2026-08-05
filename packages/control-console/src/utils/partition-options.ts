import type { CascaderProps } from 'tdesign-vue-next';
import type { DeviceView, PartitionDimensionDetail } from '@/api/control/types';

export const WIDE_CASCADER_POPUP_PROPS: NonNullable<CascaderProps['popupProps']> = {
  overlayInnerStyle: {
    width: 'min(720px, calc(100vw - 32px))',
    maxWidth: 'calc(100vw - 32px)',
    overflowX: 'auto'
  },
  overlayClassName: 'examaware-wide-cascader'
};

export function buildPartitionCascaderOptions(
  dimensions: PartitionDimensionDetail[]
): NonNullable<CascaderProps['options']> {
  return dimensions.flatMap((dimension) => {
    const childrenByParent = new Map<string | null, PartitionDimensionDetail['nodes']>();
    for (const node of dimension.nodes) {
      const siblings = childrenByParent.get(node.parentId) ?? [];
      siblings.push(node);
      childrenByParent.set(node.parentId, siblings);
    }
    const build = (parentId: string | null): NonNullable<CascaderProps['options']> =>
      (childrenByParent.get(parentId) ?? [])
        .sort(
          (left, right) => left.sortOrder - right.sortOrder || left.name.localeCompare(right.name)
        )
        .map((node) => {
          const children = build(node.id);
          return {
            value: node.id,
            label: parentId === null ? `${dimension.name} / ${node.name}` : node.name,
            ...(children.length ? { children } : {})
          };
        });
    return build(null);
  });
}

const DEVICE_TARGET_PREFIX = 'device:';
const PARTITION_TARGET_PREFIX = 'partition:';

export function buildExamTargetCascaderOptions(
  dimensions: PartitionDimensionDetail[],
  devices: DeviceView[]
): NonNullable<CascaderProps['options']> {
  const devicesByNode = new Map<string, DeviceView[]>();
  for (const device of devices) {
    for (const partition of device.partitions) {
      const assigned = devicesByNode.get(partition.nodeId) ?? [];
      assigned.push(device);
      devicesByNode.set(partition.nodeId, assigned);
    }
  }
  const decoratePartition = (
    option: NonNullable<CascaderProps['options']>[number]
  ): NonNullable<CascaderProps['options']>[number] => {
    const nodeId = String(option.value);
    const childGroups = Array.isArray(option.children)
      ? option.children.map(decoratePartition)
      : [];
    const childDevices = (devicesByNode.get(nodeId) ?? [])
      .sort((left, right) => left.displayName.localeCompare(right.displayName))
      .map((device) => ({
        value: `${DEVICE_TARGET_PREFIX}${device.id}@${nodeId}`,
        label: `${device.displayName}（${device.connectionStatus === 'online' ? '在线' : '离线'}）`,
        disabled: device.lifecycleStatus === 'revoked'
      }));
    const children = [...childGroups, ...childDevices];
    return {
      ...option,
      value: `${PARTITION_TARGET_PREFIX}${nodeId}`,
      ...(children.length ? { children } : {})
    };
  };
  return buildPartitionCascaderOptions(dimensions).map(decoratePartition);
}

export function toExamTargetValues(
  deviceIds: string[],
  partitionNodeIds: string[],
  devices: DeviceView[]
): string[] {
  const deviceById = new Map(devices.map((device) => [device.id, device]));
  return [
    ...partitionNodeIds.map((id) => `${PARTITION_TARGET_PREFIX}${id}`),
    ...deviceIds.flatMap((id) => {
      const nodeId = deviceById.get(id)?.partitions[0]?.nodeId;
      return nodeId ? [`${DEVICE_TARGET_PREFIX}${id}@${nodeId}`] : [];
    })
  ];
}

export function parseExamTargetValues(values: string[]): {
  deviceIds: string[];
  partitionNodeIds: string[];
} {
  return {
    deviceIds: [
      ...new Set(
        values
          .filter((value) => value.startsWith(DEVICE_TARGET_PREFIX))
          .map((value) => value.slice(DEVICE_TARGET_PREFIX.length).split('@', 1)[0]!)
      )
    ],
    partitionNodeIds: [
      ...new Set(
        values
          .filter((value) => value.startsWith(PARTITION_TARGET_PREFIX))
          .map((value) => value.slice(PARTITION_TARGET_PREFIX.length))
      )
    ]
  };
}

export function enforceSingleSelectionPerDimension(
  values: string[],
  changedNodeId: string | undefined,
  selecting: boolean,
  dimensions: PartitionDimensionDetail[]
): string[] {
  if (!selecting || !changedNodeId) return values;
  const nodes = new Map(
    dimensions.flatMap((dimension) =>
      dimension.nodes.map((node) => [node.id, dimension.id] as const)
    )
  );
  const changedDimensionId = nodes.get(changedNodeId);
  if (!changedDimensionId) return values;
  return [...values.filter((value) => nodes.get(value) !== changedDimensionId), changedNodeId];
}
