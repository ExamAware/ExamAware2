<template>
  <t-space direction="vertical" size="large">
    <t-card title="分区维度" subtitle="每个维度拥有独立层级，可表达校区、楼栋、教室、年级或班级">
      <template #actions>
        <t-space>
          <t-button variant="outline" :loading="loading" @click="loadDimensions">刷新</t-button>
          <t-button v-if="isAdmin" @click="dimensionDialogVisible = true">新建维度</t-button>
        </t-space>
      </template>
      <t-alert
        v-if="errorMessage"
        theme="error"
        :message="errorMessage"
        close
        @close="errorMessage = ''"
      />
      <t-loading :loading="loading">
        <t-empty v-if="!dimensions.length" description="尚未创建分区维度" />
        <t-tabs v-else v-model="selectedDimensionId" @change="handleDimensionChange">
          <t-tab-panel
            v-for="dimension in dimensions"
            :key="dimension.id"
            :value="dimension.id"
            :label="dimension.name"
          />
        </t-tabs>
      </t-loading>
    </t-card>

    <t-card
      v-if="selectedDimension"
      :title="selectedDimension.name"
      :subtitle="selectedDimension.description || selectedDimension.key"
    >
      <template #actions>
        <t-space v-if="isAdmin">
          <t-button variant="outline" @click="openNodeDialog()">新增根节点</t-button>
          <t-button :disabled="!activeNodeId" @click="openNodeDialog(activeNodeId || undefined)"
            >新增子节点</t-button
          >
        </t-space>
      </template>
      <t-descriptions :column="3" bordered>
        <t-descriptions-item label="维度标识">{{ selectedDimension.key }}</t-descriptions-item>
        <t-descriptions-item label="设备归属">
          {{ selectedDimension.allowMultiple ? '允许多选' : '单选' }}
        </t-descriptions-item>
        <t-descriptions-item label="节点数量">{{
          selectedDimension.nodes.length
        }}</t-descriptions-item>
      </t-descriptions>
      <t-divider />
      <t-loading :loading="detailLoading">
        <t-empty v-if="!treeData.length" description="当前维度尚无节点" />
        <t-tree
          v-else
          v-model:actived="activeNodeValues"
          :data="treeData"
          activable
          hover
          line
          expand-all
        />
      </t-loading>
    </t-card>
  </t-space>

  <t-dialog v-model:visible="dimensionDialogVisible" header="新建分区维度" :footer="false">
    <t-form :data="dimensionForm" :rules="dimensionRules" @submit="createDimension">
      <t-form-item label="维度标识" name="key">
        <t-input v-model="dimensionForm.key" placeholder="例如：location、class" />
      </t-form-item>
      <t-form-item label="显示名称" name="name">
        <t-input v-model="dimensionForm.name" placeholder="例如：位置、班级" />
      </t-form-item>
      <t-form-item label="说明" name="description">
        <t-textarea v-model="dimensionForm.description" :maxlength="500" />
      </t-form-item>
      <t-form-item label="设备归属">
        <t-radio-group v-model="dimensionForm.allowMultiple">
          <t-radio :value="false">每台设备单选</t-radio>
          <t-radio :value="true">每台设备多选</t-radio>
        </t-radio-group>
      </t-form-item>
      <t-form-item>
        <t-space>
          <t-button type="submit" :loading="creatingDimension">创建</t-button>
          <t-button variant="outline" @click="dimensionDialogVisible = false">取消</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-dialog>

  <t-dialog v-model:visible="nodeDialogVisible" header="新增分区节点" :footer="false">
    <t-form :data="nodeForm" :rules="nodeRules" @submit="createNode">
      <t-form-item label="父节点">
        <t-select
          v-model="nodeForm.parentId"
          clearable
          :options="nodeOptions"
          placeholder="留空表示根节点"
        />
      </t-form-item>
      <t-form-item label="节点名称" name="name">
        <t-input v-model="nodeForm.name" placeholder="例如：一号教学楼、101 室" />
      </t-form-item>
      <t-form-item label="说明">
        <t-textarea v-model="nodeForm.description" :maxlength="500" />
      </t-form-item>
      <t-form-item label="排序">
        <t-input-number v-model="nodeForm.sortOrder" :min="-10000" :max="10000" />
      </t-form-item>
      <t-form-item>
        <t-space>
          <t-button type="submit" :loading="creatingNode">创建</t-button>
          <t-button variant="outline" @click="nodeDialogVisible = false">取消</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-dialog>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import type { FormRules, SelectOption, SubmitContext, TreeNodeValue } from 'tdesign-vue-next';
import { ApiError } from '@/api/http';
import { partitionsApi } from '@/api/control/partitions';
import type {
  PartitionDimension,
  PartitionDimensionDetail,
  PartitionTreeNode
} from '@/api/control/types';
import { useSessionStore } from '@/store';

const sessionStore = useSessionStore();
const isAdmin = computed(() => sessionStore.user?.role === 'admin');
const dimensions = ref<PartitionDimension[]>([]);
const selectedDimensionId = ref('');
const selectedDimension = ref<PartitionDimensionDetail>();
const activeNodeValues = ref<TreeNodeValue[]>([]);
const activeNodeId = computed(() => String(activeNodeValues.value[0] ?? ''));
const loading = ref(false);
const detailLoading = ref(false);
const errorMessage = ref('');
const dimensionDialogVisible = ref(false);
const nodeDialogVisible = ref(false);
const creatingDimension = ref(false);
const creatingNode = ref(false);
const dimensionForm = reactive({ key: '', name: '', description: '', allowMultiple: false });
const nodeForm = reactive({ parentId: '', name: '', description: '', sortOrder: 0 });

const dimensionRules: FormRules = {
  key: [
    { required: true, message: '请输入维度标识' },
    { pattern: /^[a-z][a-z0-9_-]{0,63}$/, message: '使用小写字母、数字、下划线或连字符' }
  ],
  name: [{ required: true, message: '请输入显示名称' }]
};
const nodeRules: FormRules = { name: [{ required: true, message: '请输入节点名称' }] };

const treeData = computed(() => buildTree(selectedDimension.value?.nodes ?? []));
const nodeOptions = computed<SelectOption[]>(() =>
  (selectedDimension.value?.nodes ?? []).map((node) => ({
    label: node.name,
    value: node.id
  }))
);

function buildTree(nodes: PartitionDimensionDetail['nodes']): PartitionTreeNode[] {
  const children = new Map<string | null, PartitionDimensionDetail['nodes']>();
  for (const node of nodes) {
    const siblings = children.get(node.parentId) ?? [];
    siblings.push(node);
    children.set(node.parentId, siblings);
  }
  const build = (parentId: string | null): PartitionTreeNode[] =>
    (children.get(parentId) ?? [])
      .sort(
        (left, right) => left.sortOrder - right.sortOrder || left.name.localeCompare(right.name)
      )
      .map((node) => {
        const descendants = build(node.id);
        return {
          value: node.id,
          label: node.name,
          ...(descendants.length ? { children: descendants } : {})
        };
      });
  return build(null);
}

async function loadDimensions() {
  loading.value = true;
  errorMessage.value = '';
  try {
    dimensions.value = await partitionsApi.listDimensions();
    if (!dimensions.value.some((item) => item.id === selectedDimensionId.value)) {
      selectedDimensionId.value = dimensions.value[0]?.id ?? '';
    }
    if (selectedDimensionId.value) await loadDimensionDetail(selectedDimensionId.value);
  } catch (error) {
    errorMessage.value = error instanceof ApiError ? error.message : '分区维度加载失败';
  } finally {
    loading.value = false;
  }
}

async function loadDimensionDetail(id: string) {
  detailLoading.value = true;
  try {
    selectedDimension.value = await partitionsApi.getDimension(id);
    activeNodeValues.value = [];
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '分区节点加载失败');
  } finally {
    detailLoading.value = false;
  }
}

function handleDimensionChange(value: TreeNodeValue) {
  selectedDimensionId.value = String(value);
  void loadDimensionDetail(selectedDimensionId.value);
}

async function createDimension(context: SubmitContext) {
  if (context.validateResult !== true) return;
  creatingDimension.value = true;
  try {
    const created = await partitionsApi.createDimension({
      key: dimensionForm.key,
      name: dimensionForm.name,
      description: dimensionForm.description || undefined,
      allowMultiple: dimensionForm.allowMultiple
    });
    dimensionDialogVisible.value = false;
    selectedDimensionId.value = created.id;
    Object.assign(dimensionForm, { key: '', name: '', description: '', allowMultiple: false });
    await MessagePlugin.success('分区维度已创建');
    await loadDimensions();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '分区维度创建失败');
  } finally {
    creatingDimension.value = false;
  }
}

function openNodeDialog(parentId?: string) {
  Object.assign(nodeForm, { parentId: parentId ?? '', name: '', description: '', sortOrder: 0 });
  nodeDialogVisible.value = true;
}

async function createNode(context: SubmitContext) {
  if (context.validateResult !== true || !selectedDimensionId.value) return;
  creatingNode.value = true;
  try {
    await partitionsApi.createNode(selectedDimensionId.value, {
      ...(nodeForm.parentId ? { parentId: nodeForm.parentId } : {}),
      name: nodeForm.name,
      description: nodeForm.description || undefined,
      sortOrder: nodeForm.sortOrder
    });
    nodeDialogVisible.value = false;
    await MessagePlugin.success('分区节点已创建');
    await loadDimensionDetail(selectedDimensionId.value);
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '分区节点创建失败');
  } finally {
    creatingNode.value = false;
  }
}

onMounted(() => void loadDimensions());
</script>
