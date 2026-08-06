<template>
  <div class="console-page exam-list-page">
    <PageHeader
      title="考试管理"
      description="管理考试档案、设备分配和放映生命周期，进行中的任务会优先显示。"
    >
      <template #actions>
        <t-space>
          <t-button variant="outline" :loading="loading" @click="loadExams">
            <template #icon><ConsoleIcon name="refresh" /></template>
            刷新
          </t-button>
          <t-button v-if="canWrite" @click="router.push('/exams/create')">
            <template #icon><ConsoleIcon name="add" /></template>
            发起考试
          </t-button>
        </t-space>
      </template>
    </PageHeader>

    <t-card class="exam-list-workspace" :bordered="false">
      <div class="console-toolbar exam-list-toolbar">
        <t-tabs v-model="examScope" class="exam-scope-tabs">
          <t-tab-panel value="all" label="全部考试" />
          <t-tab-panel value="running" label="进行中" />
          <t-tab-panel value="pending" label="待处理" />
          <t-tab-panel value="finished" label="已结束" />
        </t-tabs>
        <div class="console-toolbar__filters">
          <t-input v-model="search" clearable placeholder="搜索考试名称">
            <template #prefix-icon><ConsoleIcon name="search" /></template>
          </t-input>
          <span class="console-muted">当前页 {{ filteredExams.length }} 条</span>
        </div>
      </div>

      <t-alert
        v-if="errorMessage"
        theme="error"
        :message="errorMessage"
        close
        @close="errorMessage = ''"
      />
      <t-table row-key="id" :data="filteredExams" :columns="columns" :loading="loading" hover>
        <template #name="{ row }">
          <t-space direction="vertical" size="small">
            <t-link theme="primary" @click="router.push(`/exams/${row.id}`)">{{ row.name }}</t-link>
            <span>配置版本 v{{ row.latestVersion }}</span>
          </t-space>
        </template>
        <template #status="{ row }">
          <t-tag :theme="statusTheme(row.status)" variant="light">{{
            statusLabel(row.status)
          }}</t-tag>
        </template>
        <template #assignments="{ row }">
          {{ row.assignedDeviceIds.length }} 台设备 /
          {{ row.assignedPartitionNodeIds.length }} 个设备组
        </template>
        <template #updatedAt="{ row }">{{ formatDateTime(row.updatedAt) }}</template>
        <template #operation="{ row }">
          <t-space size="small">
            <t-button variant="text" @click="router.push(`/exams/${row.id}`)">管理</t-button>
            <t-popconfirm
              v-if="canWrite"
              content="删除后考试将从列表归档，确认继续？"
              @confirm="removeExam(row)"
            >
              <t-button
                theme="danger"
                variant="text"
                :disabled="['active', 'preparing'].includes(row.status)"
                >删除</t-button
              >
            </t-popconfirm>
          </t-space>
        </template>
      </t-table>
      <t-pagination
        v-model="page"
        v-model:page-size="pageSize"
        :total="total"
        show-jumper
        @change="loadExams"
      />
    </t-card>
  </div>
</template>

<script setup lang="ts">
import type { PrimaryTableCol, TagProps } from 'tdesign-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import PageHeader from '@/components/page-header/index.vue';
import { examConfigsApi } from '@/api/control/exam-configs';
import type { ExamConfigSummary, ExamStatus } from '@/api/control/types';
import { ApiError } from '@/api/http';
import { useSessionStore } from '@/store';

const router = useRouter();
const session = useSessionStore();
const canWrite = computed(() => ['admin', 'operator'].includes(session.user?.role ?? ''));
type ExamScope = 'all' | 'running' | 'pending' | 'finished';
const exams = ref<ExamConfigSummary[]>([]);
const examScope = ref<ExamScope>('all');
const search = ref('');
const loading = ref(false);
const errorMessage = ref('');
const page = ref(1);
const pageSize = ref(20);
const total = ref(0);
let examTimer: ReturnType<typeof setInterval> | undefined;
const filteredExams = computed(() => {
  const keyword = search.value.trim().toLowerCase();
  return exams.value.filter((item) => {
    if (keyword && !item.name.toLowerCase().includes(keyword)) return false;
    if (examScope.value === 'running') return ['active', 'preparing'].includes(item.status);
    if (examScope.value === 'pending') return ['ready', 'draft'].includes(item.status);
    if (examScope.value === 'finished') return ['completed', 'archived'].includes(item.status);
    return true;
  });
});
const columns: PrimaryTableCol<ExamConfigSummary>[] = [
  { colKey: 'name', title: '考试', minWidth: 240, fixed: 'left', ellipsis: true },
  { colKey: 'status', title: '放映状态', width: 110 },
  { colKey: 'assignments', title: '分配范围', minWidth: 200, ellipsis: true },
  { colKey: 'updatedAt', title: '更新时间', width: 180 },
  { colKey: 'operation', title: '操作', width: 150, fixed: 'right' }
];

function statusLabel(status: ExamStatus) {
  return {
    active: '正在放映',
    preparing: '准备中',
    ready: '已准备',
    draft: '待发起',
    completed: '已结束',
    archived: '已归档'
  }[status];
}
function statusTheme(status: ExamStatus): TagProps['theme'] {
  return {
    active: 'success',
    preparing: 'warning',
    ready: 'primary',
    draft: 'primary',
    completed: 'default',
    archived: 'default'
  }[status] as TagProps['theme'];
}
function formatDateTime(value: string) {
  return new Date(value).toLocaleString('zh-CN');
}
async function loadExams() {
  loading.value = true;
  errorMessage.value = '';
  try {
    const result = await examConfigsApi.list(page.value, pageSize.value);
    exams.value = result.items;
    total.value = result.total;
  } catch (error) {
    errorMessage.value = error instanceof ApiError ? error.message : '考试列表加载失败';
  } finally {
    loading.value = false;
  }
}
async function removeExam(row: ExamConfigSummary) {
  try {
    await examConfigsApi.remove(row.id);
    await MessagePlugin.success('考试已删除');
    await loadExams();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '考试删除失败');
  }
}

onMounted(() => {
  void loadExams();
  examTimer = setInterval(() => void loadExams(), 5_000);
});
onUnmounted(() => clearInterval(examTimer));
</script>

<style scoped lang="less">
.exam-scope-tabs {
  min-width: min(520px, 100%);
}

.exam-list-toolbar :deep(.t-input) {
  width: 280px;
}

@media (max-width: 800px) {
  .exam-scope-tabs,
  .exam-list-toolbar :deep(.t-input) {
    width: 100%;
    min-width: 0;
  }
}
</style>
