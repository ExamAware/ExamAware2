<template>
  <div class="console-page audit-page">
    <PageHeader
      title="审计日志"
      description="检索所有管理写操作的不可修改记录，用于安全复核与责任追踪。"
    >
      <template #actions>
        <t-button variant="outline" :loading="loading" @click="loadLogs">
          <template #icon><t-icon name="refresh" /></template>
          刷新
        </t-button>
      </template>
    </PageHeader>

    <t-card class="audit-workspace" :bordered="false">
      <div class="console-toolbar">
        <div class="console-toolbar__filters">
          <t-input v-model="filters.actor" clearable placeholder="操作用户" />
          <t-input v-model="filters.action" clearable placeholder="操作类型" />
          <t-input v-model="filters.resourceType" clearable placeholder="资源类型" />
        </div>
        <div class="console-toolbar__actions">
          <t-button @click="loadLogs">查询</t-button>
          <t-button variant="outline" @click="resetFilters">重置</t-button>
        </div>
      </div>
      <t-table row-key="id" :data="logs" :columns="columns" :loading="loading" hover>
        <template #actor="{ row }">{{ row.actorUsername || row.actorUserId || '系统' }}</template>
        <template #action="{ row }"
          ><t-tag variant="outline">{{ row.action }}</t-tag></template
        >
        <template #resource="{ row }">
          <t-space direction="vertical" size="small">
            <span>{{ row.resourceType }}</span>
            <span>{{ row.resourceId || '—' }}</span>
          </t-space>
        </template>
        <template #createdAt="{ row }">{{ formatDateTime(row.createdAt) }}</template>
        <template #operation="{ row }">
          <t-button variant="text" @click="openDetail(row)">详情</t-button>
        </template>
      </t-table>
      <t-pagination
        v-model="page"
        v-model:page-size="pageSize"
        :total="total"
        show-jumper
        @change="loadLogs"
      />
    </t-card>
  </div>

  <t-drawer v-model:visible="detailVisible" header="审计详情" size="large" :footer="false">
    <t-descriptions v-if="selected" :column="1" bordered>
      <t-descriptions-item label="操作用户">{{
        selected.actorUsername || selected.actorUserId || '系统'
      }}</t-descriptions-item>
      <t-descriptions-item label="操作类型">{{ selected.action }}</t-descriptions-item>
      <t-descriptions-item label="资源"
        >{{ selected.resourceType }} / {{ selected.resourceId || '—' }}</t-descriptions-item
      >
      <t-descriptions-item label="请求 ID">{{ selected.requestId }}</t-descriptions-item>
      <t-descriptions-item label="发生时间">{{
        formatDateTime(selected.createdAt)
      }}</t-descriptions-item>
      <t-descriptions-item label="附加信息">
        <pre>{{ JSON.stringify(selected.metadata, null, 2) }}</pre>
      </t-descriptions-item>
    </t-descriptions>
  </t-drawer>
</template>

<script setup lang="ts">
import type { PrimaryTableCol } from 'tdesign-vue-next';
import { onMounted, reactive, ref } from 'vue';
import PageHeader from '@/components/page-header/index.vue';
import { auditApi } from '@/api/control/audit';
import type { AuditLogView } from '@/api/control/types';

const logs = ref<AuditLogView[]>([]);
const loading = ref(false);
const page = ref(1);
const pageSize = ref(20);
const total = ref(0);
const filters = reactive({ actor: '', action: '', resourceType: '' });
const detailVisible = ref(false);
const selected = ref<AuditLogView>();
const columns: PrimaryTableCol<AuditLogView>[] = [
  { colKey: 'actor', title: '操作用户', minWidth: 160, ellipsis: true },
  { colKey: 'action', title: '操作类型', minWidth: 220, ellipsis: true },
  { colKey: 'resource', title: '资源', minWidth: 260, ellipsis: true },
  { colKey: 'createdAt', title: '发生时间', width: 180 },
  { colKey: 'operation', title: '操作', width: 80 }
];
function formatDateTime(value: string) {
  return new Date(value).toLocaleString('zh-CN');
}
function openDetail(row: AuditLogView) {
  selected.value = row;
  detailVisible.value = true;
}
async function loadLogs() {
  loading.value = true;
  try {
    const result = await auditApi.list(page.value, pageSize.value, {
      action: filters.action || undefined,
      resourceType: filters.resourceType || undefined,
      actor: filters.actor || undefined
    });
    logs.value = result.items;
    total.value = result.total;
  } finally {
    loading.value = false;
  }
}
function resetFilters() {
  Object.assign(filters, { actor: '', action: '', resourceType: '' });
  page.value = 1;
  void loadLogs();
}
onMounted(() => void loadLogs());
</script>

<style scoped>
.console-toolbar__filters .t-input {
  width: 220px;
}

pre {
  max-width: 100%;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
