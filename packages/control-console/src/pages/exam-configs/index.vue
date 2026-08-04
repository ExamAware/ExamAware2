<template>
  <t-card title="考试配置" subtitle="配置内容按不可变版本保存，部署始终绑定明确版本">
    <template #actions>
      <t-space>
        <t-button variant="outline" :loading="loading" @click="loadConfigs">刷新</t-button>
        <t-button v-if="canWrite" @click="openCreateDialog">新建配置</t-button>
      </t-space>
    </template>
    <t-alert
      v-if="errorMessage"
      theme="error"
      :message="errorMessage"
      close
      @close="errorMessage = ''"
    />
    <t-table row-key="id" :data="configs" :columns="columns" :loading="loading" hover>
      <template #latestVersion="{ row }"
        ><t-tag variant="outline">v{{ row.latestVersion }}</t-tag></template
      >
      <template #updatedAt="{ row }">{{ formatDateTime(row.updatedAt) }}</template>
      <template #operation="{ row }">
        <t-button variant="text" @click="openDetail(row)">查看</t-button>
      </template>
    </t-table>
    <t-pagination
      v-model="page"
      v-model:page-size="pageSize"
      :total="total"
      show-jumper
      @change="loadConfigs"
    />
  </t-card>

  <t-dialog
    v-model:visible="createDialogVisible"
    header="新建考试配置"
    width="720px"
    :footer="false"
  >
    <t-form :data="createForm" :rules="createRules" @submit="createConfig">
      <t-form-item label="配置名称" name="name">
        <t-input v-model="createForm.name" placeholder="例如：2026 年期末考试" />
      </t-form-item>
      <t-form-item label="配置 JSON" name="contentText">
        <t-textarea
          v-model="createForm.contentText"
          :autosize="{ minRows: 14, maxRows: 24 }"
          placeholder="粘贴 ExamAware 考试配置 JSON"
        />
      </t-form-item>
      <t-alert v-if="validationMessage" theme="error" :message="validationMessage" />
      <t-form-item>
        <t-space>
          <t-button type="submit" :loading="creating">校验并创建</t-button>
          <t-button variant="outline" @click="createDialogVisible = false">取消</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-dialog>

  <t-drawer v-model:visible="detailVisible" header="考试配置详情" size="large" :footer="false">
    <t-loading :loading="detailLoading">
      <t-space v-if="selectedConfig" direction="vertical" size="large">
        <t-descriptions :column="2" bordered>
          <t-descriptions-item label="名称">{{ selectedConfig.name }}</t-descriptions-item>
          <t-descriptions-item label="最新版本"
            >v{{ selectedConfig.latest.version }}</t-descriptions-item
          >
          <t-descriptions-item label="内容哈希">{{
            selectedConfig.latest.contentHash
          }}</t-descriptions-item>
          <t-descriptions-item label="创建时间">{{
            formatDateTime(selectedConfig.latest.createdAt)
          }}</t-descriptions-item>
        </t-descriptions>
        <t-alert
          :theme="selectedConfig.latest.validationIssues.length ? 'warning' : 'success'"
          :message="
            selectedConfig.latest.validationIssues.length
              ? `存在 ${selectedConfig.latest.validationIssues.length} 条校验提示`
              : '配置通过完整校验'
          "
        />
        <t-textarea
          :value="JSON.stringify(selectedConfig.latest.content, null, 2)"
          :autosize="{ minRows: 16, maxRows: 28 }"
          readonly
        />
      </t-space>
    </t-loading>
  </t-drawer>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { validateExamConfigDetailed } from '@dsz-examaware/core';
import { MessagePlugin } from 'tdesign-vue-next';
import type { FormRules, PrimaryTableCol, SubmitContext } from 'tdesign-vue-next';
import { examConfigsApi } from '@/api/control/exam-configs';
import type { ExamConfigDetail, ExamConfigSummary } from '@/api/control/types';
import { ApiError } from '@/api/http';
import { useSessionStore } from '@/store';

const sessionStore = useSessionStore();
const canWrite = computed(() => ['admin', 'operator'].includes(sessionStore.user?.role ?? ''));
const configs = ref<ExamConfigSummary[]>([]);
const loading = ref(false);
const errorMessage = ref('');
const page = ref(1);
const pageSize = ref(20);
const total = ref(0);
const createDialogVisible = ref(false);
const creating = ref(false);
const validationMessage = ref('');
const detailVisible = ref(false);
const detailLoading = ref(false);
const selectedConfig = ref<ExamConfigDetail>();
const createForm = reactive({ name: '', contentText: '' });

const columns: PrimaryTableCol<ExamConfigSummary>[] = [
  { colKey: 'name', title: '配置名称', minWidth: 220 },
  { colKey: 'latestVersion', title: '最新版本', width: 110 },
  { colKey: 'updatedAt', title: '更新时间', width: 180 },
  { colKey: 'operation', title: '操作', width: 90 }
];
const createRules: FormRules = {
  name: [{ required: true, message: '请输入配置名称' }],
  contentText: [{ required: true, message: '请输入配置 JSON' }]
};

function formatDateTime(value: string): string {
  return new Date(value).toLocaleString('zh-CN');
}

async function loadConfigs() {
  loading.value = true;
  errorMessage.value = '';
  try {
    const result = await examConfigsApi.list(page.value, pageSize.value);
    configs.value = result.items;
    total.value = result.total;
  } catch (error) {
    errorMessage.value = error instanceof ApiError ? error.message : '考试配置加载失败';
  } finally {
    loading.value = false;
  }
}

function openCreateDialog() {
  createForm.name = '';
  createForm.contentText = JSON.stringify(
    {
      examName: '',
      message: '',
      examInfos: [{ name: '', start: '2026-08-05 08:00', end: '2026-08-05 09:00', alertTime: 15 }]
    },
    null,
    2
  );
  validationMessage.value = '';
  createDialogVisible.value = true;
}

async function createConfig(context: SubmitContext) {
  if (context.validateResult !== true) return;
  validationMessage.value = '';
  let raw: unknown;
  try {
    raw = JSON.parse(createForm.contentText);
  } catch {
    validationMessage.value = '配置不是有效的 JSON';
    return;
  }
  const validation = validateExamConfigDetailed(raw, { overlap: 'error', sort: true });
  if (!validation.valid || !validation.config) {
    validationMessage.value = validation.errors.map((issue) => issue.message).join('；');
    return;
  }

  creating.value = true;
  try {
    await examConfigsApi.create(createForm.name, validation.config);
    createDialogVisible.value = false;
    await MessagePlugin.success('考试配置已创建');
    await loadConfigs();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '考试配置创建失败');
  } finally {
    creating.value = false;
  }
}

async function openDetail(row: ExamConfigSummary) {
  detailVisible.value = true;
  detailLoading.value = true;
  selectedConfig.value = undefined;
  try {
    selectedConfig.value = await examConfigsApi.get(row.id);
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '配置详情加载失败');
  } finally {
    detailLoading.value = false;
  }
}

onMounted(() => void loadConfigs());
</script>
