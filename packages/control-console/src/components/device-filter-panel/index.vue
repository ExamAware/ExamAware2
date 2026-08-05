<template>
  <div class="device-filter-panel">
    <div class="filter-heading">
      <t-space align="center">
        <strong>设备筛选</strong>
        <t-tag v-if="activeCount" theme="primary" variant="light">{{ activeCount }} 项条件</t-tag>
        <span>显示 {{ resultCount }} / {{ devices.length }} 台</span>
      </t-space>
      <t-button variant="text" :disabled="!activeCount" @click="resetFilters">
        <template #icon><t-icon name="rollback" /></template>
        清空筛选
      </t-button>
    </div>

    <t-row :gutter="[12, 12]">
      <t-col :xs="12" :md="5">
        <t-input
          v-model="filters.keyword"
          clearable
          placeholder="名称、ID、版本、标签或设备组关键词"
        >
          <template #prefix-icon><t-icon name="search" /></template>
        </t-input>
      </t-col>
      <t-col :xs="12" :md="3">
        <t-select
          v-model="filters.connectionStatuses"
          :options="connectionOptions"
          multiple
          clearable
          placeholder="连接状态"
        />
      </t-col>
      <t-col :xs="12" :md="4">
        <t-cascader
          v-model="filters.partitionNodeIds"
          :options="partitionOptions"
          :popup-props="WIDE_CASCADER_POPUP_PROPS"
          multiple
          filterable
          clearable
          value-mode="parentFirst"
          placeholder="设备组（含下级分组）"
        />
      </t-col>
    </t-row>

    <t-collapse :default-value="[]" borderless>
      <t-collapse-panel value="advanced" header="更多筛选条件">
        <t-row :gutter="[12, 12]">
          <t-col :xs="12" :sm="6" :lg="3">
            <t-select
              v-model="filters.lifecycleStatuses"
              :options="lifecycleOptions"
              multiple
              clearable
              placeholder="设备状态"
            />
          </t-col>
          <t-col :xs="12" :sm="6" :lg="3">
            <t-select
              v-model="filters.platforms"
              :options="platformOptions"
              multiple
              filterable
              clearable
              placeholder="操作系统"
            />
          </t-col>
          <t-col :xs="12" :sm="6" :lg="3">
            <t-select
              v-model="filters.architectures"
              :options="architectureOptions"
              multiple
              filterable
              clearable
              placeholder="处理器架构"
            />
          </t-col>
          <t-col :xs="12" :sm="6" :lg="3">
            <t-select
              v-model="filters.capabilityState"
              :options="capabilityStateOptions"
              placeholder="能力声明状态"
            />
          </t-col>
          <t-col :xs="12" :sm="6" :lg="3">
            <t-select
              v-model="filters.appVersions"
              :options="appVersionOptions"
              multiple
              filterable
              clearable
              placeholder="客户端版本"
            />
          </t-col>
          <t-col :xs="12" :sm="6" :lg="3">
            <t-select
              v-model="filters.protocolVersions"
              :options="protocolVersionOptions"
              multiple
              filterable
              clearable
              placeholder="协议版本"
            />
          </t-col>
          <t-col :xs="12" :sm="6" :lg="3">
            <t-select
              v-model="filters.capabilityCommands"
              :options="capabilityCommandOptions"
              multiple
              filterable
              clearable
              placeholder="必须支持的命令能力"
            />
          </t-col>
          <t-col :xs="12" :sm="6" :lg="3">
            <t-select
              v-model="filters.labels"
              :options="labelOptions"
              multiple
              filterable
              clearable
              placeholder="必须包含的标签"
            />
          </t-col>
          <t-col :xs="12" :sm="6" :lg="3">
            <t-date-picker
              v-model="filters.lastSeenFrom"
              clearable
              placeholder="最后在线起始日期"
            />
          </t-col>
          <t-col :xs="12" :sm="6" :lg="3">
            <t-date-picker v-model="filters.lastSeenTo" clearable placeholder="最后在线结束日期" />
          </t-col>
        </t-row>
      </t-collapse-panel>
    </t-collapse>
  </div>
</template>

<script setup lang="ts">
import type { SelectOption } from 'tdesign-vue-next';
import { computed } from 'vue';
import type { DeviceView, PartitionDimensionDetail } from '@/api/control/types';
import {
  UNKNOWN_DEVICE_VALUE,
  countActiveDeviceFilters,
  createDefaultDeviceFilters
} from '@/utils/device-filters';
import type { DeviceFilters } from '@/utils/device-filters';
import {
  WIDE_CASCADER_POPUP_PROPS,
  buildPartitionCascaderOptions
} from '@/utils/partition-options';

const props = defineProps<{
  devices: DeviceView[];
  dimensions: PartitionDimensionDetail[];
  resultCount: number;
}>();
const filters = defineModel<DeviceFilters>({ required: true });
const activeCount = computed(() => countActiveDeviceFilters(filters.value));
const partitionOptions = computed(() => buildPartitionCascaderOptions(props.dimensions));
const connectionOptions: SelectOption[] = [
  { label: '在线', value: 'online' },
  { label: '离线', value: 'offline' },
  { label: '从未连接', value: 'never_connected' },
  { label: '已吊销', value: 'revoked' }
];
const lifecycleOptions: SelectOption[] = [
  { label: '正常', value: 'active' },
  { label: '已吊销', value: 'revoked' }
];
const capabilityStateOptions: SelectOption[] = [
  { label: '全部能力状态', value: 'all' },
  { label: '已声明能力', value: 'known' },
  { label: '能力未知', value: 'unknown' }
];
const platformOptions = computed(() => optionalOptions(props.devices.map((item) => item.platform)));
const architectureOptions = computed(() =>
  optionalOptions(props.devices.map((item) => item.architecture))
);
const appVersionOptions = computed(() =>
  optionalOptions(props.devices.map((item) => item.appVersion))
);
const protocolVersionOptions = computed(() =>
  optionalOptions(props.devices.map((item) => item.protocolVersion))
);
const capabilityCommandOptions = computed<SelectOption[]>(() => {
  const commands = props.devices.flatMap((item) => item.lastCapabilities?.commands ?? []);
  return [
    ...new Map(commands.map((command) => [`${command.name}@${command.version}`, command])).entries()
  ]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([value, command]) => ({ label: `${command.name} · v${command.version}`, value }));
});
const labelOptions = computed(() => stringOptions(props.devices.flatMap((item) => item.labels)));

function optionalOptions(values: Array<string | null>): SelectOption[] {
  return [
    ...stringOptions(values.filter((value): value is string => Boolean(value))),
    ...(values.some((value) => !value) ? [{ label: '未知', value: UNKNOWN_DEVICE_VALUE }] : [])
  ];
}

function stringOptions(values: string[]): SelectOption[] {
  return [...new Set(values)]
    .sort((left, right) => left.localeCompare(right))
    .map((value) => ({ label: value, value }));
}

function resetFilters() {
  filters.value = createDefaultDeviceFilters();
}
</script>

<style scoped>
.device-filter-panel {
  margin-bottom: var(--td-comp-margin-l);
}

.filter-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--td-comp-margin-m);
  margin-bottom: var(--td-comp-margin-m);
}

:deep(.t-collapse-panel__content) {
  padding-right: 0;
  padding-left: 0;
}

@media (max-width: 800px) {
  .filter-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
