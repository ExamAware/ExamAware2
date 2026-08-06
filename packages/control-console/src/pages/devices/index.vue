<template>
  <div class="console-page device-page">
    <PageHeader
      title="设备管理"
      description="集中查看客户端连接、版本、能力与设备组归属，并处理设备生命周期。"
    >
      <template #actions>
        <t-space>
          <t-button variant="outline" :loading="loading" @click="loadDevices">
            <template #icon><t-icon name="refresh" /></template>
            刷新
          </t-button>
          <t-button v-if="canWrite" @click="router.push('/devices/enroll')">
            <template #icon><t-icon name="device-add" /></template>
            注册设备
          </t-button>
        </t-space>
      </template>
    </PageHeader>

    <section class="console-metric-grid" aria-label="设备概况">
      <MetricTile label="设备总数" :value="devices.length" hint="全部已注册客户端" icon="desktop" />
      <MetricTile
        label="在线设备"
        :value="deviceMetrics.online"
        hint="当前保持连接"
        icon="check-circle"
      />
      <MetricTile
        label="离线设备"
        :value="deviceMetrics.offline"
        hint="曾连接但当前离线"
        icon="wifi-off"
      />
      <MetricTile
        label="待接入"
        :value="deviceMetrics.neverConnected"
        hint="尚未完成首次连接"
        icon="time"
      />
    </section>

    <t-card class="device-workspace" :bordered="false">
      <div class="console-toolbar">
        <t-tabs v-model="deviceScope" class="device-scope-tabs">
          <t-tab-panel value="all" :label="`全部 ${devices.length}`" />
          <t-tab-panel value="online" :label="`在线 ${deviceMetrics.online}`" />
          <t-tab-panel value="offline" :label="`离线 ${deviceMetrics.offline}`" />
          <t-tab-panel value="attention" :label="`需关注 ${deviceMetrics.attention}`" />
        </t-tabs>
        <div class="console-toolbar__actions">
          <span class="console-muted">表格密度</span>
          <t-radio-group v-model="viewMode" variant="default-filled">
            <t-radio-button value="compact">简略</t-radio-button>
            <t-radio-button value="detailed">详细</t-radio-button>
          </t-radio-group>
        </div>
      </div>

      <t-alert
        v-if="errorMessage"
        theme="error"
        :message="errorMessage"
        close
        @close="errorMessage = ''"
      />
      <DeviceFilterPanel
        v-model="filters"
        :devices="scopedDevices"
        :dimensions="dimensions"
        :result-count="filteredDevices.length"
      />
      <t-table row-key="id" :data="visibleDevices" :columns="columns" :loading="loading" hover>
        <template #displayName="{ row }">
          <t-space direction="vertical" size="small">
            <strong>{{ row.displayName }}</strong>
            <span v-if="viewMode === 'detailed'">{{ row.id }}</span>
          </t-space>
        </template>
        <template #connectionStatus="{ row }">
          <t-tag :theme="connectionTheme(row.connectionStatus)" variant="light">{{
            connectionLabel(row.connectionStatus)
          }}</t-tag>
        </template>
        <template #client="{ row }">
          <t-space direction="vertical" size="small">
            <span>{{ row.platform || '未知' }} / {{ row.architecture || '未知' }}</span>
            <t-tag v-if="row.appVersion" variant="outline">{{ row.appVersion }}</t-tag>
          </t-space>
        </template>
        <template #capabilities="{ row }">
          <t-tag v-if="row.lastCapabilities" theme="success" variant="light"
            >{{ row.lastCapabilities.commands.length }} 项命令能力</t-tag
          >
          <t-tag v-else theme="warning" variant="light">能力未知</t-tag>
        </template>
        <template #partitions="{ row }">
          <t-space v-if="row.partitions.length" break-line size="small">
            <t-tag v-for="partition in row.partitions" :key="partition.nodeId" variant="outline"
              >{{ partition.dimensionName }}：{{ partition.nodeName }}</t-tag
            >
          </t-space>
          <span v-else>未分组</span>
        </template>
        <template #lastSeenAt="{ row }">{{ formatDateTime(row.lastSeenAt) }}</template>
        <template #operation="{ row }">
          <DeviceOperationButtons
            :device="row"
            :can-write="canWrite"
            :is-admin="isAdmin"
            @assign="openPartitions"
            @request="requestDeviceAction"
          />
        </template>
      </t-table>
      <t-pagination
        v-model="page"
        v-model:page-size="pageSize"
        :total="filteredDevices.length"
        show-jumper
      />
    </t-card>
  </div>

  <t-dialog v-model:visible="partitionVisible" header="分配设备组" :footer="false">
    <t-form layout="vertical" @submit="savePartitions">
      <t-form-item label="设备组"
        ><t-cascader
          :value="partitionNodeIds"
          :options="nodeOptions"
          :popup-props="WIDE_CASCADER_POPUP_PROPS"
          multiple
          filterable
          clearable
          value-mode="parentFirst"
          @change="handlePartitionChange"
      /></t-form-item>
      <t-form-item
        ><t-space
          ><t-button type="submit" :loading="saving">保存</t-button
          ><t-button variant="outline" @click="partitionVisible = false">取消</t-button></t-space
        ></t-form-item
      >
    </t-form>
  </t-dialog>

  <t-dialog
    v-model:visible="deviceActionVisible"
    :theme="deviceActionDialog.theme"
    :header="deviceActionDialog.header"
    :confirm-btn="{ content: deviceActionDialog.confirmLabel, theme: deviceActionDialog.theme }"
    :confirm-loading="confirmingDeviceAction"
    :close-on-overlay-click="false"
    @confirm="confirmDeviceAction"
    @closed="pendingDeviceAction = undefined"
  >
    <p>{{ deviceActionDialog.body }}</p>
  </t-dialog>

  <t-dialog
    v-model:visible="credentialVisible"
    header="新设备凭证"
    :footer="false"
    :close-on-overlay-click="false"
  >
    <t-space v-if="rotatedCredential" direction="vertical" size="large" style="width: 100%">
      <t-alert
        theme="warning"
        title="凭证仅展示一次"
        message="客户端必须使用新凭证重新建立连接。"
      />
      <t-input :value="rotatedCredential.credential" readonly />
      <t-space
        ><t-button @click="copyCredential">复制凭证</t-button
        ><t-button variant="outline" @click="credentialVisible = false">我已保存</t-button></t-space
      >
    </t-space>
  </t-dialog>
</template>

<script setup lang="ts">
import type { CascaderProps, PrimaryTableCol, SubmitContext, TagProps } from 'tdesign-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import DeviceFilterPanel from '@/components/device-filter-panel/index.vue';
import DeviceOperationButtons from '@/components/device-operation-buttons/index.vue';
import MetricTile from '@/components/metric-tile/index.vue';
import PageHeader from '@/components/page-header/index.vue';
import {
  applyDeviceConnectionStatus,
  devicesApi,
  type DeviceConnectionStatusEvent
} from '@/api/control/devices';
import { partitionsApi } from '@/api/control/partitions';
import type {
  DeviceConnectionStatus,
  DeviceView,
  PartitionDimensionDetail,
  RotatedDeviceCredential
} from '@/api/control/types';
import { ApiError } from '@/api/http';
import { useSessionStore } from '@/store';
import { createDefaultDeviceFilters, filterDevices } from '@/utils/device-filters';
import {
  WIDE_CASCADER_POPUP_PROPS,
  buildPartitionCascaderOptions,
  enforceSingleSelectionPerDimension
} from '@/utils/partition-options';

type DeviceViewMode = 'compact' | 'detailed';
type DeviceScope = 'all' | 'online' | 'offline' | 'attention';

interface PendingDeviceAction {
  type: 'rotate' | 'revoke' | 'delete';
  device: DeviceView;
}

const router = useRouter();
const session = useSessionStore();
const isAdmin = computed(() => session.user?.role === 'admin');
const canWrite = computed(() => ['admin', 'operator'].includes(session.user?.role ?? ''));
const devices = ref<DeviceView[]>([]);
const dimensions = ref<PartitionDimensionDetail[]>([]);
const loading = ref(false);
const saving = ref(false);
const errorMessage = ref('');
const page = ref(1);
const pageSize = ref(20);
const filters = ref(createDefaultDeviceFilters());
const viewMode = ref<DeviceViewMode>('detailed');
const deviceScope = ref<DeviceScope>('all');
const partitionVisible = ref(false);
const selectedDevice = ref<DeviceView>();
const partitionNodeIds = ref<string[]>([]);
const credentialVisible = ref(false);
const rotatedCredential = ref<RotatedDeviceCredential>();
const deviceActionVisible = ref(false);
const confirmingDeviceAction = ref(false);
const pendingDeviceAction = ref<PendingDeviceAction>();
let disposeConnectionEvents: (() => void) | undefined;
const nodeOptions = computed(() => buildPartitionCascaderOptions(dimensions.value));
const deviceActionDialog = computed(() => {
  if (pendingDeviceAction.value?.type === 'delete') {
    return {
      theme: 'danger' as const,
      header: '删除设备',
      body: `永久删除“${pendingDeviceAction.value.device.displayName}”后将清除凭证、设备组归属和策略关联，历史命令记录仍会保留。此操作不可恢复。`,
      confirmLabel: '永久删除'
    };
  }
  if (pendingDeviceAction.value?.type === 'revoke') {
    return {
      theme: 'danger' as const,
      header: '吊销设备',
      body: '吊销后设备立即断开且无法重新认证，确认继续？',
      confirmLabel: '确认吊销'
    };
  }
  return {
    theme: 'warning' as const,
    header: '轮换设备凭证',
    body: '轮换后旧凭证和当前连接立即失效，确认继续？',
    confirmLabel: '确认轮换'
  };
});
const deviceMetrics = computed(() => ({
  online: devices.value.filter((item) => item.connectionStatus === 'online').length,
  offline: devices.value.filter((item) => item.connectionStatus === 'offline').length,
  neverConnected: devices.value.filter((item) => item.connectionStatus === 'never_connected')
    .length,
  attention: devices.value.filter(
    (item) => item.connectionStatus === 'never_connected' || item.connectionStatus === 'revoked'
  ).length
}));
const scopedDevices = computed(() => {
  if (deviceScope.value === 'online') {
    return devices.value.filter((item) => item.connectionStatus === 'online');
  }
  if (deviceScope.value === 'offline') {
    return devices.value.filter((item) => item.connectionStatus === 'offline');
  }
  if (deviceScope.value === 'attention') {
    return devices.value.filter(
      (item) => item.connectionStatus === 'never_connected' || item.connectionStatus === 'revoked'
    );
  }
  return devices.value;
});
const filteredDevices = computed(() =>
  filterDevices(scopedDevices.value, filters.value, dimensions.value)
);
const visibleDevices = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredDevices.value.slice(start, start + pageSize.value);
});
const handlePartitionChange: NonNullable<CascaderProps['onChange']> = (value, context) => {
  const values = (Array.isArray(value) ? value : [value]).map(String);
  const changedNodeId = context.node ? String(context.node.value) : undefined;
  partitionNodeIds.value = enforceSingleSelectionPerDimension(
    values,
    changedNodeId,
    context.source === 'check',
    dimensions.value
  );
};
const columns = computed<PrimaryTableCol<DeviceView>[]>(() => {
  const displayName: PrimaryTableCol<DeviceView> = {
    colKey: 'displayName',
    title: '设备',
    minWidth: 260,
    fixed: 'left',
    ellipsis: true
  };
  const connectionStatus: PrimaryTableCol<DeviceView> = {
    colKey: 'connectionStatus',
    title: '连接状态',
    width: 110
  };
  const partitions: PrimaryTableCol<DeviceView> = {
    colKey: 'partitions',
    title: '设备组',
    minWidth: 240,
    ellipsis: true
  };
  const operation: PrimaryTableCol<DeviceView> = {
    colKey: 'operation',
    title: '操作',
    width: 104,
    fixed: 'right'
  };
  if (viewMode.value === 'compact') {
    return [displayName, connectionStatus, partitions, operation];
  }
  return [
    displayName,
    connectionStatus,
    { colKey: 'client', title: '客户端', minWidth: 170, ellipsis: true },
    { colKey: 'capabilities', title: '能力', width: 130, ellipsis: true },
    partitions,
    { colKey: 'lastSeenAt', title: '最后在线', width: 180 },
    operation
  ];
});
function formatDateTime(value: string | null) {
  return value ? new Date(value).toLocaleString('zh-CN') : '从未连接';
}
function connectionLabel(status: DeviceConnectionStatus) {
  return { online: '在线', offline: '离线', never_connected: '从未连接', revoked: '已吊销' }[
    status
  ];
}
function connectionTheme(status: DeviceConnectionStatus): TagProps['theme'] {
  return { online: 'success', offline: 'default', never_connected: 'warning', revoked: 'danger' }[
    status
  ] as TagProps['theme'];
}
function openPartitions(device: DeviceView) {
  selectedDevice.value = device;
  partitionNodeIds.value = device.partitions.map((item) => item.nodeId);
  partitionVisible.value = true;
}
async function loadDevices() {
  loading.value = true;
  errorMessage.value = '';
  try {
    const result = await devicesApi.list(1, 100);
    devices.value = result.items;
  } catch (error) {
    errorMessage.value = error instanceof ApiError ? error.message : '设备列表加载失败';
  } finally {
    loading.value = false;
  }
}
function handleConnectionStatus(event: DeviceConnectionStatusEvent) {
  applyDeviceConnectionStatus(devices.value, event);
}
async function loadDimensions() {
  const list = await partitionsApi.listDimensions();
  dimensions.value = await Promise.all(list.map((item) => partitionsApi.getDimension(item.id)));
}
async function savePartitions(context: SubmitContext) {
  if (context.validateResult !== true || !selectedDevice.value) return;
  saving.value = true;
  try {
    await devicesApi.setPartitions(selectedDevice.value.id, partitionNodeIds.value);
    partitionVisible.value = false;
    await MessagePlugin.success('设备组分配已保存');
    await loadDevices();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '保存失败');
  } finally {
    saving.value = false;
  }
}
function requestDeviceAction(type: PendingDeviceAction['type'], device: DeviceView) {
  pendingDeviceAction.value = { type, device };
  deviceActionVisible.value = true;
}

async function confirmDeviceAction() {
  const action = pendingDeviceAction.value;
  if (!action) return;
  confirmingDeviceAction.value = true;
  try {
    if (action.type === 'rotate') {
      await rotateCredential(action.device);
      deviceActionVisible.value = false;
      credentialVisible.value = true;
    } else if (action.type === 'revoke') {
      await revokeDevice(action.device);
      deviceActionVisible.value = false;
    } else {
      await deleteDevice(action.device);
      deviceActionVisible.value = false;
    }
  } catch (error) {
    await MessagePlugin.error(
      error instanceof ApiError
        ? error.message
        : action.type === 'rotate'
          ? '凭证轮换失败'
          : action.type === 'revoke'
            ? '设备吊销失败'
            : '设备删除失败'
    );
  } finally {
    confirmingDeviceAction.value = false;
  }
}

async function rotateCredential(device: DeviceView) {
  rotatedCredential.value = await devicesApi.rotateCredential(device.id);
}
async function revokeDevice(device: DeviceView) {
  await devicesApi.revoke(device.id);
  await MessagePlugin.success('设备已吊销');
  await loadDevices();
}
async function deleteDevice(device: DeviceView) {
  await devicesApi.remove(device.id);
  await MessagePlugin.success('设备已删除');
  await loadDevices();
  page.value = Math.min(
    page.value,
    Math.max(1, Math.ceil(filteredDevices.value.length / pageSize.value))
  );
}
async function copyCredential() {
  if (rotatedCredential.value) {
    await navigator.clipboard.writeText(rotatedCredential.value.credential);
    await MessagePlugin.success('凭证已复制');
  }
}
watch(
  [filters, deviceScope],
  () => {
    page.value = 1;
  },
  { deep: true }
);
onMounted(() => {
  disposeConnectionEvents = devicesApi.subscribeConnectionEvents(handleConnectionStatus);
  void Promise.all([loadDevices(), loadDimensions()]);
});
onUnmounted(() => disposeConnectionEvents?.());
</script>

<style scoped lang="less">
.device-scope-tabs {
  min-width: min(560px, 100%);
}

:deep(.device-workspace > .t-card__body) {
  padding-top: var(--td-comp-paddingTB-l);
}

@media (max-width: 800px) {
  .device-scope-tabs {
    width: 100%;
    min-width: 0;
  }
}
</style>
