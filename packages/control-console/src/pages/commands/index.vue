<template>
  <div class="console-page command-page">
    <PageHeader
      title="命令记录"
      description="追踪每条集控命令的固定目标、分发进度与逐设备执行结果。"
    >
      <template #actions>
        <t-button variant="outline" :loading="loading" @click="loadCommands">
          <template #icon><ConsoleIcon name="refresh" /></template>
          刷新
        </t-button>
      </template>
    </PageHeader>

    <t-card class="command-workspace" :bordered="false">
      <div class="console-toolbar">
        <t-tabs v-model="commandScope" class="command-scope-tabs">
          <t-tab-panel value="all" label="全部命令" />
          <t-tab-panel value="exam" label="考试放映" />
          <t-tab-panel value="broadcast" label="实时通知" />
          <t-tab-panel value="settings" label="设备策略" />
        </t-tabs>
        <span class="console-muted">当前页 {{ filteredCommands.length }} 条</span>
      </div>
      <t-table row-key="id" :data="filteredCommands" :columns="columns" :loading="loading" hover>
        <template #commandType="{ row }">
          <t-tag variant="outline">{{ commandLabel(row.commandType) }}</t-tag>
        </template>
        <template #progress="{ row }">
          <t-space break-line size="small">
            <t-tag v-if="row.progress.pending + row.progress.delivered" variant="light"
              >待处理 {{ row.progress.pending + row.progress.delivered }}</t-tag
            >
            <t-tag v-if="row.progress.acknowledged" theme="warning" variant="light"
              >执行中 {{ row.progress.acknowledged }}</t-tag
            >
            <t-tag v-if="row.progress.succeeded" theme="success" variant="light"
              >成功 {{ row.progress.succeeded }}</t-tag
            >
            <t-tag v-if="row.progress.failed" theme="danger" variant="light"
              >失败 {{ row.progress.failed }}</t-tag
            >
            <t-tag v-if="row.progress.expired" variant="light"
              >过期 {{ row.progress.expired }}</t-tag
            >
          </t-space>
        </template>
        <template #issuedAt="{ row }">{{ formatDateTime(row.issuedAt) }}</template>
        <template #operation="{ row }">
          <t-button variant="text" @click="openDetail(row)">查看设备结果</t-button>
        </template>
      </t-table>
      <t-pagination
        v-model="page"
        v-model:page-size="pageSize"
        :total="total"
        show-jumper
        @change="loadCommands"
      />
    </t-card>
  </div>

  <t-drawer v-model:visible="detailVisible" header="逐设备执行结果" size="large" :footer="false">
    <t-table v-if="selected" row-key="deviceId" :data="selected.targets" :columns="targetColumns">
      <template #status="{ row }"
        ><t-tag
          :theme="
            row.status === 'succeeded' ? 'success' : row.status === 'failed' ? 'danger' : 'warning'
          "
          variant="light"
          >{{ row.status }}</t-tag
        ></template
      >
      <template #completedAt="{ row }">{{
        row.completedAt ? formatDateTime(row.completedAt) : '—'
      }}</template>
    </t-table>
  </t-drawer>
</template>

<script setup lang="ts">
import { CONTROL_COMMAND_TYPES } from '@dsz-examaware/control-protocol';
import type { PrimaryTableCol } from 'tdesign-vue-next';
import { computed, onMounted, ref } from 'vue';
import PageHeader from '@/components/page-header/index.vue';
import { operationsApi } from '@/api/control/operations';
import type { CommandTargetView, ControlCommandView } from '@/api/control/types';

type CommandScope = 'all' | 'exam' | 'broadcast' | 'settings';
const commands = ref<ControlCommandView[]>([]);
const commandScope = ref<CommandScope>('all');
const loading = ref(false);
const page = ref(1);
const pageSize = ref(20);
const total = ref(0);
const detailVisible = ref(false);
const selected = ref<ControlCommandView>();
const filteredCommands = computed(() =>
  commands.value.filter((item) => {
    if (commandScope.value === 'exam') {
      return (
        item.commandType === CONTROL_COMMAND_TYPES.examConfigPrepare ||
        item.commandType === CONTROL_COMMAND_TYPES.playbackActivate ||
        item.commandType === CONTROL_COMMAND_TYPES.playbackStop
      );
    }
    if (commandScope.value === 'broadcast') {
      return (
        item.commandType === CONTROL_COMMAND_TYPES.broadcastShow ||
        item.commandType === CONTROL_COMMAND_TYPES.broadcastDismiss
      );
    }
    if (commandScope.value === 'settings') {
      return item.commandType === CONTROL_COMMAND_TYPES.settingsApply;
    }
    return true;
  })
);
const columns: PrimaryTableCol<ControlCommandView>[] = [
  { colKey: 'commandType', title: '命令', width: 160 },
  { colKey: 'progress', title: '执行进度', minWidth: 320 },
  { colKey: 'issuedAt', title: '签发时间', width: 180 },
  { colKey: 'operation', title: '操作', width: 130 }
];
const targetColumns: PrimaryTableCol<CommandTargetView>[] = [
  { colKey: 'deviceId', title: '设备 ID', minWidth: 280 },
  { colKey: 'status', title: '状态', width: 110 },
  { colKey: 'errorMessage', title: '错误信息', minWidth: 220 },
  { colKey: 'completedAt', title: '完成时间', width: 180 }
];
function commandLabel(type: ControlCommandView['commandType']) {
  return {
    [CONTROL_COMMAND_TYPES.examConfigPrepare]: '准备考试',
    [CONTROL_COMMAND_TYPES.playbackActivate]: '开始放映',
    [CONTROL_COMMAND_TYPES.playbackStop]: '停止放映',
    [CONTROL_COMMAND_TYPES.broadcastShow]: '发送公告',
    [CONTROL_COMMAND_TYPES.broadcastDismiss]: '撤销公告',
    [CONTROL_COMMAND_TYPES.settingsApply]: '应用策略'
  }[type];
}
function formatDateTime(value: string) {
  return new Date(value).toLocaleString('zh-CN');
}
function openDetail(row: ControlCommandView) {
  selected.value = row;
  detailVisible.value = true;
}
async function loadCommands() {
  loading.value = true;
  try {
    const result = await operationsApi.listCommands(page.value, pageSize.value);
    commands.value = result.items;
    total.value = result.total;
  } finally {
    loading.value = false;
  }
}
onMounted(() => void loadCommands());
</script>

<style scoped>
.command-scope-tabs {
  min-width: min(560px, 100%);
}

@media (max-width: 800px) {
  .command-scope-tabs {
    width: 100%;
    min-width: 0;
  }
}
</style>
