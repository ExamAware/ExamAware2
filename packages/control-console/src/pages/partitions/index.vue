<template>
  <div class="console-page partition-page">
    <PageHeader
      title="设备分组"
      description="使用位置、管理区域等多维树结构组织考场大屏；左侧维护分组，右侧核对成员设备。"
    >
      <template #actions>
        <t-button v-if="isAdmin" @click="openDimensionCreate">
          <template #icon><ConsoleIcon name="add" /></template>
          新建分类方式
        </t-button>
      </template>
    </PageHeader>

    <t-row class="partition-workspace" :gutter="[16, 16]" align="stretch">
      <t-col class="partition-col" :xs="12" :lg="4">
        <t-card class="partition-sidebar" title="设备分组" :bordered="false">
          <div class="dimension-toolbar">
            <t-select
              v-model="selectedDimensionId"
              :options="dimensionOptions"
              placeholder="选择分类方式"
              @change="handleDimensionChange"
            />
            <template v-if="isAdmin">
              <t-tooltip content="新建分类方式">
                <t-button shape="square" @click="openDimensionCreate"
                  ><ConsoleIcon name="add"
                /></t-button>
              </t-tooltip>
              <t-tooltip content="编辑分类方式名称">
                <t-button
                  shape="square"
                  variant="outline"
                  :disabled="!selectedDimension"
                  @click="openDimensionEdit"
                >
                  <ConsoleIcon name="edit" />
                </t-button>
              </t-tooltip>
              <t-tooltip content="删除分类方式">
                <t-button
                  shape="square"
                  theme="danger"
                  variant="outline"
                  :disabled="!selectedDimension"
                  @click="openDeleteDimension"
                >
                  <ConsoleIcon name="delete" />
                </t-button>
              </t-tooltip>
            </template>
          </div>

          <t-alert
            v-if="errorMessage"
            theme="error"
            :message="errorMessage"
            close
            @close="errorMessage = ''"
          />

          <div class="tree-heading">
            <strong>分组树</strong>
            <t-button
              v-if="isAdmin"
              variant="text"
              :disabled="!selectedDimension"
              @click="openNodeCreate()"
            >
              <template #icon><ConsoleIcon name="add" /></template>
              新增顶级分组
            </t-button>
          </div>

          <t-loading class="tree-loading" :loading="loading || detailLoading">
            <div class="partition-tree-scroll">
              <t-empty v-if="!selectedDimension" description="请先选择或创建分类方式" />
              <t-empty v-else-if="!treeData.length" description="当前分类方式尚无分组" />
              <t-tree
                v-else
                v-model:actived="activeNodeValues"
                :data="treeData"
                activable
                hover
                line
                expand-all
                expand-on-click-node
              >
                <template v-if="isAdmin" #operations="{ node }">
                  <t-space class="partition-node-actions" size="small">
                    <t-tooltip content="新建下级分组">
                      <t-button
                        size="small"
                        shape="square"
                        variant="text"
                        @click.stop="openNodeCreate(String(node.value))"
                      >
                        <ConsoleIcon name="add" />
                      </t-button>
                    </t-tooltip>
                    <t-tooltip content="编辑分组信息">
                      <t-button
                        size="small"
                        shape="square"
                        variant="text"
                        @click.stop="openNodeEdit(String(node.value))"
                      >
                        <ConsoleIcon name="edit" />
                      </t-button>
                    </t-tooltip>
                    <t-tooltip content="删除分组">
                      <t-button
                        size="small"
                        shape="square"
                        theme="danger"
                        variant="text"
                        @click.stop="openDeleteNode(String(node.value))"
                      >
                        <ConsoleIcon name="delete" />
                      </t-button>
                    </t-tooltip>
                  </t-space>
                </template>
              </t-tree>
            </div>
          </t-loading>
        </t-card>
      </t-col>

      <t-col class="partition-col" :xs="12" :lg="8">
        <t-card
          class="device-table-card"
          :title="activeNode ? `${activeNode.name}中的考场大屏` : '分组内考场大屏'"
          :subtitle="activeNode ? '包含直接归属和所有下级分组中的设备' : '请在左侧选择一个分组'"
          :bordered="false"
        >
          <DeviceFilterPanel
            v-model="deviceFilters"
            :devices="containedDevices"
            :dimensions="filterDimensions"
            :result-count="filteredContainedDevices.length"
          />
          <t-table
            row-key="id"
            :data="filteredContainedDevices"
            :columns="deviceColumns"
            :loading="loading || detailLoading"
            hover
          >
            <template #displayName="{ row }">
              <t-space direction="vertical" size="small">
                <strong>{{ row.displayName }}</strong>
                <span>{{ row.id }}</span>
              </t-space>
            </template>
            <template #connectionStatus="{ row }">
              <t-tag :theme="connectionTheme(row.connectionStatus)" variant="light">
                {{ connectionLabel(row.connectionStatus) }}
              </t-tag>
            </template>
            <template #client="{ row }">
              {{ row.platform || '未知平台' }} / {{ row.architecture || '未知架构' }}
              <br />
              {{ row.appVersion || '未知版本' }}
            </template>
            <template #capabilities="{ row }">
              {{ row.lastCapabilities ? '已声明' : '能力未知' }}
            </template>
            <template #lastSeenAt="{ row }">{{ formatDateTime(row.lastSeenAt) }}</template>
            <template #operation="{ row }">
              <DeviceOperationButtons
                :device="row"
                :can-write="canWrite"
                :is-admin="isAdmin"
                @assign="openDevicePartitions"
                @request="requestDeviceAction"
              />
            </template>
          </t-table>
        </t-card>
      </t-col>
    </t-row>
  </div>

  <t-dialog v-model:visible="devicePartitionVisible" header="分配设备组" :footer="false">
    <t-form layout="vertical" @submit="saveDevicePartitions">
      <t-form-item label="设备组">
        <t-cascader
          :value="devicePartitionNodeIds"
          :options="deviceGroupOptions"
          :popup-props="WIDE_CASCADER_POPUP_PROPS"
          multiple
          filterable
          clearable
          value-mode="parentFirst"
          @change="handleDevicePartitionChange"
        />
      </t-form-item>
      <t-form-item>
        <t-space>
          <t-button type="submit" :loading="saving">保存</t-button>
          <t-button variant="outline" @click="devicePartitionVisible = false">取消</t-button>
        </t-space>
      </t-form-item>
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
      <t-space>
        <t-button @click="copyCredential">复制凭证</t-button>
        <t-button variant="outline" @click="credentialVisible = false">我已保存</t-button>
      </t-space>
    </t-space>
  </t-dialog>

  <t-dialog
    v-model:visible="dimensionDialogVisible"
    :header="editingDimension ? '编辑分类方式' : '新建分类方式'"
    :footer="false"
  >
    <t-form :data="dimensionForm" :rules="dimensionRules" @submit="saveDimension">
      <t-form-item label="内部标识" name="key">
        <t-input
          v-model="dimensionForm.key"
          :disabled="editingDimension"
          placeholder="例如：campus_location、exam_area"
        />
      </t-form-item>
      <t-form-item label="分类名称" name="name">
        <t-input v-model="dimensionForm.name" placeholder="例如：所在位置、管理区域" />
      </t-form-item>
      <t-form-item label="分类说明">
        <t-textarea v-model="dimensionForm.description" :maxlength="500" />
      </t-form-item>
      <t-form-item>
        <t-space>
          <t-button type="submit" :loading="saving">保存</t-button>
          <t-button variant="outline" @click="dimensionDialogVisible = false">取消</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-dialog>

  <t-dialog
    v-model:visible="nodeDialogVisible"
    :header="editingNodeId ? '编辑分组信息' : '新增分组'"
    :footer="false"
  >
    <t-form :data="nodeForm" :rules="nodeRules" @submit="saveNode">
      <t-form-item v-if="!editingNodeId" label="上级分组">
        <t-cascader
          v-model="nodeForm.parentId"
          :options="treeData"
          :popup-props="WIDE_CASCADER_POPUP_PROPS"
          clearable
          placeholder="留空表示顶级分组"
        />
      </t-form-item>
      <t-form-item label="分组名称" name="name">
        <t-input v-model="nodeForm.name" placeholder="例如：主校区、一号教学楼、A301 考场" />
      </t-form-item>
      <t-form-item label="说明">
        <t-textarea v-model="nodeForm.description" :maxlength="500" />
      </t-form-item>
      <t-form-item label="排序">
        <t-input-number v-model="nodeForm.sortOrder" :min="-10000" :max="10000" />
      </t-form-item>
      <t-form-item>
        <t-space>
          <t-button type="submit" :loading="saving">保存</t-button>
          <t-button variant="outline" @click="nodeDialogVisible = false">取消</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-dialog>

  <t-dialog
    v-model:visible="deleteDialogVisible"
    :header="`删除${deleteTarget?.type === 'dimension' ? '分类方式' : '分组'}`"
    :close-on-overlay-click="false"
    :footer="false"
  >
    <t-space direction="vertical" size="large" style="width: 100%">
      <t-alert theme="error" :message="deleteWarning" />
      <template v-if="deleteStage === 1">
        <p>这是第一次确认。删除操作不可恢复。</p>
        <t-button theme="danger" @click="deleteStage = 2">第一次确认，继续</t-button>
      </template>
      <template v-else-if="deleteStage === 2">
        <p>这是第二次确认。请输入“{{ deleteTarget?.name }}”以确认目标。</p>
        <t-input v-model="deleteConfirmText" :placeholder="deleteTarget?.name" />
        <t-button
          theme="danger"
          :disabled="deleteConfirmText !== deleteTarget?.name"
          @click="deleteStage = 3"
        >
          第二次确认，继续
        </t-button>
      </template>
      <template v-else>
        <p>这是第三次也是最后一次确认。</p>
        <t-popconfirm content="最终确认删除？" @confirm="confirmDelete">
          <t-button theme="danger" :loading="deleting">第三次确认并永久删除</t-button>
        </t-popconfirm>
      </template>
      <t-button variant="outline" @click="deleteDialogVisible = false">取消</t-button>
    </t-space>
  </t-dialog>
</template>

<script setup lang="ts">
import type {
  CascaderProps,
  FormRules,
  PrimaryTableCol,
  SelectOption,
  SubmitContext,
  TagProps,
  TreeNodeValue
} from 'tdesign-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import DeviceFilterPanel from '@/components/device-filter-panel/index.vue';
import DeviceOperationButtons from '@/components/device-operation-buttons/index.vue';
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
  PartitionDimension,
  PartitionDimensionDetail,
  PartitionNode,
  PartitionTreeNode,
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

interface PendingDeviceAction {
  type: 'rotate' | 'revoke' | 'delete';
  device: DeviceView;
}

const sessionStore = useSessionStore();
const isAdmin = computed(() => sessionStore.user?.role === 'admin');
const canWrite = computed(() => ['admin', 'operator'].includes(sessionStore.user?.role ?? ''));
const dimensions = ref<PartitionDimension[]>([]);
const selectedDimensionId = ref('');
const selectedDimension = ref<PartitionDimensionDetail>();
const allDimensionDetails = ref<PartitionDimensionDetail[]>([]);
const devices = ref<DeviceView[]>([]);
const deviceFilters = ref(createDefaultDeviceFilters());
const devicePartitionVisible = ref(false);
const selectedDevice = ref<DeviceView>();
const devicePartitionNodeIds = ref<string[]>([]);
const credentialVisible = ref(false);
const rotatedCredential = ref<RotatedDeviceCredential>();
const deviceActionVisible = ref(false);
const confirmingDeviceAction = ref(false);
const pendingDeviceAction = ref<PendingDeviceAction>();
let disposeConnectionEvents: (() => void) | undefined;
const activeNodeValues = ref<TreeNodeValue[]>([]);
const loading = ref(false);
const detailLoading = ref(false);
const saving = ref(false);
const deleting = ref(false);
const errorMessage = ref('');
const dimensionDialogVisible = ref(false);
const editingDimension = ref(false);
const nodeDialogVisible = ref(false);
const editingNodeId = ref('');
const deleteDialogVisible = ref(false);
const deleteStage = ref(1);
const deleteConfirmText = ref('');
const deleteTarget = ref<{ type: 'dimension' | 'node'; id: string; name: string }>();
const dimensionForm = reactive({ key: '', name: '', description: '' });
const nodeForm = reactive({ parentId: '', name: '', description: '', sortOrder: 0 });

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
const dimensionRules: FormRules = {
  key: [
    { required: true, message: '请输入内部标识' },
    { pattern: /^[a-z][a-z0-9_-]{0,63}$/, message: '使用小写字母、数字、下划线或连字符' }
  ],
  name: [{ required: true, message: '请输入分类名称' }]
};
const nodeRules: FormRules = { name: [{ required: true, message: '请输入分组名称' }] };
const dimensionOptions = computed<SelectOption[]>(() =>
  dimensions.value.map((dimension) => ({ label: dimension.name, value: dimension.id }))
);
const activeNodeId = computed(() => String(activeNodeValues.value[0] ?? ''));
const activeNode = computed(() =>
  selectedDimension.value?.nodes.find((node) => node.id === activeNodeId.value)
);
const treeData = computed(() => buildTree(selectedDimension.value?.nodes ?? []));
const deviceGroupOptions = computed(() => buildPartitionCascaderOptions(allDimensionDetails.value));
const filterDimensions = computed(() => allDimensionDetails.value);
const selectedSubtreeIds = computed(() => {
  if (!activeNodeId.value || !selectedDimension.value) return new Set<string>();
  const childrenByParent = new Map<string, string[]>();
  for (const node of selectedDimension.value.nodes) {
    if (!node.parentId) continue;
    const children = childrenByParent.get(node.parentId) ?? [];
    children.push(node.id);
    childrenByParent.set(node.parentId, children);
  }
  const result = new Set<string>();
  const pending = [activeNodeId.value];
  while (pending.length) {
    const id = pending.pop()!;
    if (result.has(id)) continue;
    result.add(id);
    pending.push(...(childrenByParent.get(id) ?? []));
  }
  return result;
});
const containedDevices = computed(() =>
  activeNode.value
    ? devices.value.filter((device) =>
        device.partitions.some((partition) => selectedSubtreeIds.value.has(partition.nodeId))
      )
    : []
);
const filteredContainedDevices = computed(() =>
  filterDevices(containedDevices.value, deviceFilters.value, filterDimensions.value)
);
const deleteWarning = computed(() =>
  deleteTarget.value?.type === 'dimension'
    ? '将删除该分类方式、全部下级分组，以及相关的设备归属、考试分配和策略关联。'
    : '将删除该分组及全部下级分组，并清除相关的设备归属、考试分配和策略关联。'
);
const deviceColumns: PrimaryTableCol<DeviceView>[] = [
  { colKey: 'displayName', title: '考场大屏', minWidth: 260, ellipsis: true },
  { colKey: 'connectionStatus', title: '连接状态', width: 110 },
  { colKey: 'client', title: '客户端', minWidth: 180, ellipsis: true },
  { colKey: 'capabilities', title: '能力', width: 120, ellipsis: true },
  { colKey: 'lastSeenAt', title: '最后在线', width: 180 },
  { colKey: 'operation', title: '操作', width: 104, fixed: 'right' }
];

function buildTree(nodes: PartitionNode[]): PartitionTreeNode[] {
  const children = new Map<string | null, PartitionNode[]>();
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

async function loadBase() {
  loading.value = true;
  errorMessage.value = '';
  try {
    const [dimensionList, devicePage] = await Promise.all([
      partitionsApi.listDimensions(),
      devicesApi.list(1, 100)
    ]);
    dimensions.value = dimensionList;
    devices.value = devicePage.items;
    allDimensionDetails.value = await Promise.all(
      dimensionList.map((dimension) => partitionsApi.getDimension(dimension.id))
    );
    if (!dimensionList.some((item) => item.id === selectedDimensionId.value)) {
      selectedDimensionId.value = dimensionList[0]?.id ?? '';
    }
    if (selectedDimensionId.value) await loadDimensionDetail(selectedDimensionId.value);
    else selectedDimension.value = undefined;
  } catch (error) {
    errorMessage.value = error instanceof ApiError ? error.message : '设备分组加载失败';
  } finally {
    loading.value = false;
  }
}

async function loadDimensionDetail(id: string) {
  detailLoading.value = true;
  try {
    const detail = await partitionsApi.getDimension(id);
    selectedDimension.value = detail;
    const detailIndex = allDimensionDetails.value.findIndex((item) => item.id === detail.id);
    if (detailIndex === -1) allDimensionDetails.value.push(detail);
    else allDimensionDetails.value.splice(detailIndex, 1, detail);
    if (!detail.nodes.some((node) => node.id === activeNodeId.value)) {
      const firstRoot = detail.nodes.find((node) => node.parentId === null) ?? detail.nodes[0];
      activeNodeValues.value = firstRoot ? [firstRoot.id] : [];
    }
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '分组加载失败');
  } finally {
    detailLoading.value = false;
  }
}

const handleDevicePartitionChange: NonNullable<CascaderProps['onChange']> = (value, context) => {
  const values = (Array.isArray(value) ? value : [value]).map(String);
  const changedNodeId = context.node ? String(context.node.value) : undefined;
  devicePartitionNodeIds.value = enforceSingleSelectionPerDimension(
    values,
    changedNodeId,
    context.source === 'check',
    allDimensionDetails.value
  );
};

function openDevicePartitions(device: DeviceView) {
  selectedDevice.value = device;
  devicePartitionNodeIds.value = device.partitions.map((item) => item.nodeId);
  devicePartitionVisible.value = true;
}

async function saveDevicePartitions(context: SubmitContext) {
  if (context.validateResult !== true || !selectedDevice.value) return;
  saving.value = true;
  try {
    await devicesApi.setPartitions(selectedDevice.value.id, devicePartitionNodeIds.value);
    devicePartitionVisible.value = false;
    await MessagePlugin.success('设备组分配已保存');
    devices.value = (await devicesApi.list(1, 100)).items;
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
  devices.value = (await devicesApi.list(1, 100)).items;
}
async function deleteDevice(device: DeviceView) {
  await devicesApi.remove(device.id);
  await MessagePlugin.success('设备已删除');
  devices.value = (await devicesApi.list(1, 100)).items;
}

async function copyCredential() {
  if (!rotatedCredential.value) return;
  await navigator.clipboard.writeText(rotatedCredential.value.credential);
  await MessagePlugin.success('凭证已复制');
}

function handleDimensionChange(value: unknown) {
  selectedDimensionId.value = String(value ?? '');
  activeNodeValues.value = [];
  if (selectedDimensionId.value) void loadDimensionDetail(selectedDimensionId.value);
}

function openDimensionCreate() {
  editingDimension.value = false;
  Object.assign(dimensionForm, { key: '', name: '', description: '' });
  dimensionDialogVisible.value = true;
}

function openDimensionEdit() {
  if (!selectedDimension.value) return;
  editingDimension.value = true;
  Object.assign(dimensionForm, {
    key: selectedDimension.value.key,
    name: selectedDimension.value.name,
    description: selectedDimension.value.description ?? ''
  });
  dimensionDialogVisible.value = true;
}

async function saveDimension(context: SubmitContext) {
  if (context.validateResult !== true) return;
  saving.value = true;
  try {
    if (editingDimension.value && selectedDimension.value) {
      await partitionsApi.updateDimension(selectedDimension.value.id, {
        name: dimensionForm.name,
        description: dimensionForm.description || null
      });
      await MessagePlugin.success('分类方式已更新');
    } else {
      const created = await partitionsApi.createDimension({
        key: dimensionForm.key,
        name: dimensionForm.name,
        description: dimensionForm.description || undefined,
        allowMultiple: false
      });
      selectedDimensionId.value = created.id;
      await MessagePlugin.success('分类方式已创建');
    }
    dimensionDialogVisible.value = false;
    await loadBase();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '分类方式保存失败');
  } finally {
    saving.value = false;
  }
}

function openNodeCreate(parentId?: string) {
  editingNodeId.value = '';
  Object.assign(nodeForm, { parentId: parentId ?? '', name: '', description: '', sortOrder: 0 });
  nodeDialogVisible.value = true;
}

function openNodeEdit(id: string) {
  const node = selectedDimension.value?.nodes.find((item) => item.id === id);
  if (!node) return;
  editingNodeId.value = id;
  Object.assign(nodeForm, {
    parentId: node.parentId ?? '',
    name: node.name,
    description: node.description ?? '',
    sortOrder: node.sortOrder
  });
  nodeDialogVisible.value = true;
}

async function saveNode(context: SubmitContext) {
  if (context.validateResult !== true || !selectedDimensionId.value) return;
  saving.value = true;
  try {
    if (editingNodeId.value) {
      await partitionsApi.updateNode(editingNodeId.value, {
        name: nodeForm.name,
        description: nodeForm.description || null,
        sortOrder: nodeForm.sortOrder
      });
      await MessagePlugin.success('分组信息已更新');
    } else {
      await partitionsApi.createNode(selectedDimensionId.value, {
        ...(nodeForm.parentId ? { parentId: nodeForm.parentId } : {}),
        name: nodeForm.name,
        description: nodeForm.description || undefined,
        sortOrder: nodeForm.sortOrder
      });
      await MessagePlugin.success('分组已创建');
    }
    nodeDialogVisible.value = false;
    await loadDimensionDetail(selectedDimensionId.value);
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '分组保存失败');
  } finally {
    saving.value = false;
  }
}

function openDeleteDimension() {
  if (!selectedDimension.value) return;
  openDelete({
    type: 'dimension',
    id: selectedDimension.value.id,
    name: selectedDimension.value.name
  });
}

function openDeleteNode(id: string) {
  const node = selectedDimension.value?.nodes.find((item) => item.id === id);
  if (node) openDelete({ type: 'node', id, name: node.name });
}

function openDelete(target: { type: 'dimension' | 'node'; id: string; name: string }) {
  deleteTarget.value = target;
  deleteStage.value = 1;
  deleteConfirmText.value = '';
  deleteDialogVisible.value = true;
}

async function confirmDelete() {
  if (!deleteTarget.value) return;
  deleting.value = true;
  try {
    if (deleteTarget.value.type === 'dimension') {
      await partitionsApi.removeDimension(deleteTarget.value.id);
      selectedDimensionId.value = '';
      activeNodeValues.value = [];
      await MessagePlugin.success('分类方式已删除');
      await loadBase();
    } else {
      await partitionsApi.removeNode(deleteTarget.value.id);
      activeNodeValues.value = [];
      await MessagePlugin.success('分组及下级分组已删除');
      await Promise.all([
        loadDimensionDetail(selectedDimensionId.value),
        devicesApi.list(1, 100).then((page) => {
          devices.value = page.items;
        })
      ]);
    }
    deleteDialogVisible.value = false;
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '删除失败');
  } finally {
    deleting.value = false;
  }
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

function formatDateTime(value: string | null) {
  return value ? new Date(value).toLocaleString('zh-CN') : '从未连接';
}

function handleConnectionStatus(event: DeviceConnectionStatusEvent) {
  applyDeviceConnectionStatus(devices.value, event);
}

onMounted(() => {
  disposeConnectionEvents = devicesApi.subscribeConnectionEvents(handleConnectionStatus);
  void loadBase();
});
onUnmounted(() => disposeConnectionEvents?.());
</script>

<style scoped>
.partition-workspace {
  height: calc(100vh - 265px);
  min-height: 620px;
  overflow: hidden;
}

.partition-col {
  display: flex;
  min-height: 0;
}

.partition-sidebar,
.device-table-card {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 0;
  flex-direction: column;
  overflow: hidden;
}

.partition-sidebar {
  position: sticky;
  top: 0;
}

:deep(.partition-sidebar .t-card__body) {
  display: flex;
  min-height: 0;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
}
:deep(.device-table-card .t-card__body) {
  min-height: 0;
  flex: 1;
  overflow-y: auto;
}

.dimension-toolbar,
.tree-heading {
  display: flex;
  align-items: center;
  gap: var(--td-comp-margin-s);
}

.dimension-toolbar .t-select__wrap,
.tree-heading strong {
  flex: 1;
  min-width: 0;
}

.tree-heading {
  margin-top: var(--td-comp-margin-l);
}

.tree-loading {
  display: flex;
  min-height: 0;
  flex: 1;
  flex-direction: column;
}

.partition-tree-scroll {
  min-height: 0;
  flex: 1;
  overflow: auto;
}

.partition-node-actions {
  opacity: 0;
  transition: opacity 0.15s ease;
}

:deep(.t-tree__item:hover) .partition-node-actions,
.partition-node-actions:focus-within {
  opacity: 1;
}

@media (max-width: 1199px) {
  .partition-workspace {
    height: auto;
    min-height: 0;
    overflow: visible;
  }

  .partition-col {
    display: block;
  }

  .partition-sidebar,
  .device-table-card {
    height: auto;
    overflow: visible;
  }

  .partition-sidebar {
    position: static;
  }

  :deep(.partition-sidebar .t-card__body),
  :deep(.device-table-card .t-card__body) {
    overflow: visible;
  }

  .partition-tree-scroll {
    max-height: 420px;
    min-height: 220px;
  }
}
</style>
