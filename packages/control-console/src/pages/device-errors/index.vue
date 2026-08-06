<template>
  <div class="console-page device-error-page">
    <PageHeader
      title="客户端错误"
      description="集中排查设备主动上报的结构化错误；上下文仅保留有界标量字段。"
    >
      <template #actions>
        <t-button variant="outline" :loading="loading" @click="loadErrors">
          <template #icon><t-icon name="refresh" /></template>
          刷新
        </t-button>
      </template>
    </PageHeader>

    <t-card class="device-error-workspace" :bordered="false">
      <t-form
        class="console-toolbar error-filter-form"
        layout="inline"
        :data="filters"
        @submit="applyFilters"
      >
        <div class="console-toolbar__filters">
          <t-form-item label="设备 ID">
            <t-input v-model="filters.deviceId" clearable placeholder="可选 UUID" />
          </t-form-item>
          <t-form-item label="严重级别">
            <t-select v-model="filters.severity" clearable :options="severityOptions" />
          </t-form-item>
        </div>
        <div class="console-toolbar__actions">
          <t-button type="submit" :loading="loading">查询</t-button>
          <t-button variant="outline" @click="resetFilters">重置</t-button>
        </div>
      </t-form>
      <t-alert
        v-if="errorMessage"
        theme="error"
        :message="errorMessage"
        close
        @close="errorMessage = ''"
      />
      <t-table row-key="id" :data="errors" :columns="columns" :loading="loading" hover>
        <template #severity="{ row }">
          <t-tag :theme="severityTheme(row.severity)" variant="light">{{
            severityLabel(row.severity)
          }}</t-tag>
        </template>
        <template #occurredAt="{ row }">{{ formatDateTime(row.occurredAt) }}</template>
        <template #operation="{ row }">
          <t-button variant="text" @click="openDetail(row)">详情</t-button>
        </template>
      </t-table>
      <t-pagination
        v-model="page"
        v-model:page-size="pageSize"
        :total="total"
        show-jumper
        @change="loadErrors"
      />
    </t-card>
  </div>

  <t-drawer v-model:visible="detailVisible" header="错误详情" size="large" :footer="false">
    <t-space v-if="selectedError" direction="vertical" size="large">
      <t-descriptions :column="2" bordered>
        <t-descriptions-item label="设备 ID">{{ selectedError.deviceId }}</t-descriptions-item>
        <t-descriptions-item label="严重级别">{{
          severityLabel(selectedError.severity)
        }}</t-descriptions-item>
        <t-descriptions-item label="来源">{{ selectedError.source }}</t-descriptions-item>
        <t-descriptions-item label="错误代码">{{
          selectedError.code || '未提供'
        }}</t-descriptions-item>
        <t-descriptions-item label="发生时间">{{
          formatDateTime(selectedError.occurredAt)
        }}</t-descriptions-item>
        <t-descriptions-item label="接收时间">{{
          formatDateTime(selectedError.receivedAt)
        }}</t-descriptions-item>
      </t-descriptions>
      <t-alert theme="error" :message="selectedError.message" />
      <t-textarea
        v-if="selectedError.stack"
        :value="selectedError.stack"
        :autosize="{ minRows: 8, maxRows: 18 }"
        readonly
      />
      <t-descriptions
        v-if="Object.keys(selectedError.context).length"
        title="上下文"
        :column="1"
        bordered
      >
        <t-descriptions-item v-for="(value, key) in selectedError.context" :key="key" :label="key">
          {{ String(value) }}
        </t-descriptions-item>
      </t-descriptions>
    </t-space>
  </t-drawer>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { DEVICE_ERROR_SEVERITY } from '@dsz-examaware/control-protocol';
import type { DeviceErrorReport } from '@dsz-examaware/control-protocol';
import type { PrimaryTableCol, SelectOption, SubmitContext, TagProps } from 'tdesign-vue-next';
import { deviceErrorsApi } from '@/api/control/device-errors';
import type { DeviceErrorView } from '@/api/control/types';
import { ApiError } from '@/api/http';
import PageHeader from '@/components/page-header/index.vue';

const errors = ref<DeviceErrorView[]>([]);
const selectedError = ref<DeviceErrorView>();
const detailVisible = ref(false);
const loading = ref(false);
const errorMessage = ref('');
const page = ref(1);
const pageSize = ref(20);
const total = ref(0);
const filters = reactive({
  deviceId: '',
  severity: undefined as DeviceErrorReport['severity'] | undefined
});

const severityOptions: SelectOption[] = [
  { value: DEVICE_ERROR_SEVERITY.warning, label: '警告' },
  { value: DEVICE_ERROR_SEVERITY.error, label: '错误' },
  { value: DEVICE_ERROR_SEVERITY.fatal, label: '严重' }
];
const columns: PrimaryTableCol<DeviceErrorView>[] = [
  { colKey: 'severity', title: '级别', width: 90 },
  { colKey: 'source', title: '来源', width: 150, ellipsis: true },
  { colKey: 'code', title: '错误代码', minWidth: 160, ellipsis: true },
  { colKey: 'message', title: '消息', ellipsis: true, minWidth: 280 },
  { colKey: 'deviceId', title: '设备 ID', width: 300, ellipsis: true },
  { colKey: 'occurredAt', title: '发生时间', width: 180 },
  { colKey: 'operation', title: '操作', width: 80, fixed: 'right' }
];

function severityLabel(severity: DeviceErrorReport['severity']): string {
  return {
    [DEVICE_ERROR_SEVERITY.warning]: '警告',
    [DEVICE_ERROR_SEVERITY.error]: '错误',
    [DEVICE_ERROR_SEVERITY.fatal]: '严重'
  }[severity];
}

function severityTheme(severity: DeviceErrorReport['severity']): TagProps['theme'] {
  return {
    [DEVICE_ERROR_SEVERITY.warning]: 'warning',
    [DEVICE_ERROR_SEVERITY.error]: 'danger',
    [DEVICE_ERROR_SEVERITY.fatal]: 'danger'
  }[severity] as TagProps['theme'];
}

function formatDateTime(value: string): string {
  return new Date(value).toLocaleString('zh-CN');
}

async function loadErrors() {
  loading.value = true;
  errorMessage.value = '';
  try {
    const result = await deviceErrorsApi.list({
      page: page.value,
      pageSize: pageSize.value,
      deviceId: filters.deviceId || undefined,
      severity: filters.severity
    });
    errors.value = result.items;
    total.value = result.total;
  } catch (error) {
    errorMessage.value = error instanceof ApiError ? error.message : '客户端错误日志加载失败';
  } finally {
    loading.value = false;
  }
}

function applyFilters(context: SubmitContext) {
  if (context.validateResult !== true) return;
  page.value = 1;
  void loadErrors();
}

function resetFilters() {
  filters.deviceId = '';
  filters.severity = undefined;
  page.value = 1;
  void loadErrors();
}

function openDetail(row: DeviceErrorView) {
  selectedError.value = row;
  detailVisible.value = true;
}

onMounted(() => void loadErrors());
</script>

<style scoped>
.error-filter-form :deep(.t-form__item) {
  margin-bottom: 0;
}

.error-filter-form :deep(.t-input) {
  width: 280px;
}

.error-filter-form :deep(.t-select__wrap) {
  width: 180px;
}
</style>
