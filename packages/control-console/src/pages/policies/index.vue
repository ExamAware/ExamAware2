<template>
  <div class="console-page policy-page">
    <PageHeader
      title="设备策略"
      description="通过优先级和设备组继承统一管理客户端设置，并随时核验单台设备的最终生效结果。"
    >
      <template #actions>
        <t-button v-if="canWrite" @click="openCreate">
          <template #icon><t-icon name="add" /></template>
          新建策略
        </t-button>
      </template>
    </PageHeader>

    <t-row :gutter="[16, 16]">
      <t-col :xs="12" :lg="8">
        <t-card
          title="设备策略"
          subtitle="单设备策略覆盖节点策略，子节点覆盖父节点；同层级按优先级处理"
          :bordered="false"
        >
          <template #actions>
            <t-tag variant="light">{{ policies.length }} 条策略</t-tag>
          </template>
          <t-table row-key="id" :data="policies" :columns="columns" :loading="loading" hover>
            <template #name="{ row }"
              ><t-space direction="vertical" size="small"
                ><strong>{{ row.name }}</strong
                ><span>{{ row.description || '无说明' }}</span></t-space
              ></template
            >
            <template #enabled="{ row }"
              ><t-tag :theme="row.enabled ? 'success' : 'default'" variant="light">{{
                row.enabled ? '已启用' : '已停用'
              }}</t-tag></template
            >
            <template #targets="{ row }"
              >{{ row.targets.deviceIds.length }} 台设备 /
              {{ row.targets.partitionNodeIds.length }} 个设备组</template
            >
            <template #settings="{ row }"
              ><t-tag v-for="setting in row.settings" :key="setting.key" variant="outline">{{
                settingLabel(setting.key)
              }}</t-tag></template
            >
            <template #operation="{ row }">
              <t-space size="small">
                <t-button v-if="canWrite" variant="text" @click="openEdit(row)">编辑</t-button>
                <t-button v-if="canWrite" variant="text" @click="openTargets(row)">分配</t-button>
                <t-popconfirm
                  v-if="canWrite"
                  content="确认删除该策略？"
                  @confirm="removePolicy(row)"
                  ><t-button theme="danger" variant="text">删除</t-button></t-popconfirm
                >
              </t-space>
            </template>
          </t-table>
        </t-card>
      </t-col>
      <t-col :xs="12" :lg="4">
        <t-card
          title="设备有效策略检查"
          subtitle="检查层级与优先级合并后的最终设置值"
          :bordered="false"
        >
          <t-space direction="vertical" size="large" style="width: 100%">
            <t-select
              v-model="previewDeviceId"
              :options="deviceOptions"
              filterable
              placeholder="选择设备"
              @change="loadEffective"
            />
            <t-table
              v-if="effective"
              row-key="key"
              :data="effective.settings"
              :columns="effectiveColumns"
            >
              <template #key="{ row }">{{ settingLabel(row.key) }}</template>
              <template #value="{ row }"
                ><t-tag variant="light">{{ formatValue(row.value) }}</t-tag></template
              >
              <template #source="{ row }">{{ sourcePolicy(row.key)?.name ?? '—' }}</template>
            </t-table>
          </t-space>
        </t-card>
      </t-col>
    </t-row>
  </div>

  <t-dialog
    v-model:visible="editorVisible"
    :header="editingId ? '编辑设备策略' : '新建设备策略'"
    width="760px"
    :footer="false"
  >
    <t-form :data="form" layout="vertical" @submit="savePolicy">
      <t-row :gutter="[16, 0]"
        ><t-col :xs="12" :sm="8"
          ><t-form-item
            label="策略名称"
            name="name"
            :rules="[{ required: true, message: '请输入名称' }]"
            ><t-input v-model="form.name" /></t-form-item></t-col
        ><t-col :xs="12" :sm="4"
          ><t-form-item label="同层优先级"
            ><t-input-number
              v-model="form.priority"
              :min="-100000"
              :max="100000" /></t-form-item></t-col
      ></t-row>
      <t-form-item label="说明"
        ><t-textarea v-model="form.description" :maxlength="1000"
      /></t-form-item>
      <t-form-item label="状态"
        ><t-switch v-model="form.enabled" :label="['启用', '停用']"
      /></t-form-item>
      <t-divider>受管设置</t-divider>
      <t-space direction="vertical" style="width: 100%">
        <t-row
          v-for="(setting, index) in form.settings"
          :key="index"
          :gutter="[12, 12]"
          align="middle"
        >
          <t-col :xs="12" :sm="5"
            ><t-select
              v-model="setting.key"
              :options="settingOptions"
              @change="resetSettingValue(setting)"
          /></t-col>
          <t-col :xs="10" :sm="5">
            <t-switch v-if="definition(setting.key)?.type === 'boolean'" v-model="setting.value" />
            <t-input-number
              v-else-if="definition(setting.key)?.type === 'number'"
              v-model="setting.value"
              :min="definition(setting.key)?.min"
              :max="definition(setting.key)?.max"
            />
            <t-select
              v-else-if="definition(setting.key)?.options"
              v-model="setting.value"
              :options="definition(setting.key)?.options"
            />
            <t-input v-else v-model="setting.value" />
          </t-col>
          <t-col :xs="2" :sm="2"
            ><t-button theme="danger" variant="text" @click="form.settings.splice(index, 1)"
              >移除</t-button
            ></t-col
          >
        </t-row>
        <t-button variant="dashed" block @click="addSetting">添加设置项</t-button>
      </t-space>
      <t-form-item
        ><t-space
          ><t-button type="submit" :loading="saving">保存策略</t-button
          ><t-button variant="outline" @click="editorVisible = false">取消</t-button></t-space
        ></t-form-item
      >
    </t-form>
  </t-dialog>

  <t-dialog v-model:visible="targetsVisible" header="分配设备策略" width="700px" :footer="false">
    <t-form layout="vertical" @submit="saveTargets">
      <t-alert
        theme="info"
        message="直接分配到设备时优先级最高。节点分配会自动覆盖其上级节点策略。"
      />
      <t-form-item label="单个设备"
        ><t-select
          v-model="targetForm.deviceIds"
          :options="deviceOptions"
          multiple
          filterable
          clearable
      /></t-form-item>
      <t-form-item label="设备组">
        <t-cascader
          v-model="targetForm.partitionNodeIds"
          :options="nodeOptions"
          :popup-props="WIDE_CASCADER_POPUP_PROPS"
          multiple
          filterable
          clearable
          value-mode="parentFirst"
        />
      </t-form-item>
      <t-form-item><t-button type="submit" :loading="saving">保存分配</t-button></t-form-item>
    </t-form>
  </t-dialog>
</template>

<script setup lang="ts">
import { MANAGED_SETTING_KEYS, type ManagedSetting } from '@dsz-examaware/control-protocol';
import type { PrimaryTableCol, SelectOption, SubmitContext } from 'tdesign-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, onMounted, reactive, ref } from 'vue';
import PageHeader from '@/components/page-header/index.vue';
import { devicesApi } from '@/api/control/devices';
import { partitionsApi } from '@/api/control/partitions';
import { policiesApi } from '@/api/control/policies';
import type {
  DevicePolicyView,
  DeviceView,
  EffectivePolicyView,
  PartitionDimensionDetail
} from '@/api/control/types';
import { ApiError } from '@/api/http';
import { useSessionStore } from '@/store';
import {
  WIDE_CASCADER_POPUP_PROPS,
  buildPartitionCascaderOptions
} from '@/utils/partition-options';

type SettingDraft = { key: string; value: string | number | boolean };
type SettingDefinition = {
  label: string;
  type: 'string' | 'number' | 'boolean';
  min?: number;
  max?: number;
  options?: Array<{ label: string; value: string | number }>;
};
const SETTING_DEFINITIONS: Record<string, SettingDefinition> = {
  [MANAGED_SETTING_KEYS.appearanceTheme]: {
    label: '界面主题',
    type: 'string',
    options: [
      { label: '跟随系统', value: 'auto' },
      { label: '浅色', value: 'light' },
      { label: '深色', value: 'dark' }
    ]
  },
  [MANAGED_SETTING_KEYS.playerUiScale]: {
    label: '播放器界面缩放',
    type: 'number',
    min: 0.5,
    max: 2
  },
  [MANAGED_SETTING_KEYS.playerUiDensity]: {
    label: '播放器密度',
    type: 'string',
    options: [
      { label: '紧凑', value: 'compact' },
      { label: '标准', value: 'standard' },
      { label: '宽松', value: 'comfortable' }
    ]
  },
  [MANAGED_SETTING_KEYS.playerLargeClockEnabled]: { label: '启用大时钟', type: 'boolean' },
  [MANAGED_SETTING_KEYS.playerLargeClockScale]: {
    label: '大时钟缩放',
    type: 'number',
    min: 0.5,
    max: 1.8
  },
  [MANAGED_SETTING_KEYS.playerExamInfoLargeFont]: { label: '考试信息大字体', type: 'boolean' },
  [MANAGED_SETTING_KEYS.playerPreventControlSessionExit]: {
    label: '禁止客户端主动退出集控放映',
    type: 'boolean'
  },
  [MANAGED_SETTING_KEYS.controlPreventUnbind]: { type: 'boolean', label: '禁止解绑集控' },
  [MANAGED_SETTING_KEYS.controlPreventQuit]: { type: 'boolean', label: '禁止退出应用' },
  [MANAGED_SETTING_KEYS.timeSyncNtpServer]: { label: 'NTP 服务器', type: 'string' },
  [MANAGED_SETTING_KEYS.timeSyncAutoSync]: { label: '自动时间同步', type: 'boolean' },
  [MANAGED_SETTING_KEYS.timeSyncIntervalMinutes]: {
    label: '同步间隔（分钟）',
    type: 'number',
    min: 1,
    max: 1440
  }
};
const session = useSessionStore();
const canWrite = computed(() => ['admin', 'operator'].includes(session.user?.role ?? ''));
const policies = ref<DevicePolicyView[]>([]);
const devices = ref<DeviceView[]>([]);
const dimensions = ref<PartitionDimensionDetail[]>([]);
const loading = ref(false);
const saving = ref(false);
const editorVisible = ref(false);
const targetsVisible = ref(false);
const editingId = ref('');
const previewDeviceId = ref('');
const effective = ref<{ policies: EffectivePolicyView[]; settings: ManagedSetting[] }>();
const form = reactive({
  name: '',
  description: '',
  priority: 0,
  enabled: true,
  settings: [] as SettingDraft[]
});
const targetForm = reactive({
  policyId: '',
  deviceIds: [] as string[],
  partitionNodeIds: [] as string[]
});
const settingOptions = Object.entries(SETTING_DEFINITIONS).map(([value, item]) => ({
  value,
  label: item.label
}));
const deviceOptions = computed<SelectOption[]>(() =>
  devices.value.map((item) => ({
    value: item.id,
    label: item.displayName,
    disabled: item.lifecycleStatus === 'revoked'
  }))
);
const nodeOptions = computed(() => buildPartitionCascaderOptions(dimensions.value));
const columns: PrimaryTableCol<DevicePolicyView>[] = [
  { colKey: 'name', title: '策略', minWidth: 220, ellipsis: true },
  { colKey: 'enabled', title: '状态', width: 90 },
  { colKey: 'priority', title: '优先级', width: 90 },
  { colKey: 'targets', title: '分配范围', width: 190, ellipsis: true },
  { colKey: 'settings', title: '设置项', minWidth: 280, ellipsis: true },
  { colKey: 'operation', title: '操作', width: 180, fixed: 'right' }
];
const effectiveColumns: PrimaryTableCol<ManagedSetting>[] = [
  { colKey: 'key', title: '设置项', minWidth: 220, ellipsis: true },
  { colKey: 'value', title: '最终值', minWidth: 180, ellipsis: true },
  { colKey: 'source', title: '来源策略', minWidth: 220, ellipsis: true }
];
function definition(key: string) {
  return SETTING_DEFINITIONS[key];
}
function settingLabel(key: string) {
  return definition(key)?.label ?? key;
}
function formatValue(value: ManagedSetting['value']) {
  return typeof value === 'boolean' ? (value ? '是' : '否') : String(value);
}
function sourcePolicy(key: ManagedSetting['key']) {
  return effective.value?.policies.find((policy) =>
    policy.settings.some((setting) => setting.key === key)
  );
}
function resetSettingValue(setting: SettingDraft) {
  const item = definition(setting.key);
  setting.value =
    item?.type === 'boolean'
      ? false
      : item?.type === 'number'
        ? (item.min ?? 1)
        : ((item?.options?.[0]?.value as string) ?? '');
}
function addSetting() {
  const key =
    Object.keys(SETTING_DEFINITIONS).find(
      (item) => !form.settings.some((setting) => setting.key === item)
    ) ?? MANAGED_SETTING_KEYS.appearanceTheme;
  const setting = { key, value: '' } as SettingDraft;
  resetSettingValue(setting);
  form.settings.push(setting);
}
function openCreate() {
  editingId.value = '';
  Object.assign(form, { name: '', description: '', priority: 0, enabled: true, settings: [] });
  addSetting();
  editorVisible.value = true;
}
function openEdit(policy: DevicePolicyView) {
  editingId.value = policy.id;
  Object.assign(form, {
    name: policy.name,
    description: policy.description,
    priority: policy.priority,
    enabled: policy.enabled,
    settings: policy.settings.map((item) => ({ ...item }))
  });
  editorVisible.value = true;
}
function openTargets(policy: DevicePolicyView) {
  Object.assign(targetForm, {
    policyId: policy.id,
    deviceIds: [...policy.targets.deviceIds],
    partitionNodeIds: [...policy.targets.partitionNodeIds]
  });
  targetsVisible.value = true;
}
async function loadAll() {
  loading.value = true;
  try {
    const [policyList, devicePage, dimensionList] = await Promise.all([
      policiesApi.list(),
      devicesApi.list(1, 100),
      partitionsApi.listDimensions()
    ]);
    policies.value = policyList;
    devices.value = devicePage.items;
    dimensions.value = await Promise.all(
      dimensionList.map((item) => partitionsApi.getDimension(item.id))
    );
  } finally {
    loading.value = false;
  }
}
async function savePolicy(context: SubmitContext) {
  if (context.validateResult !== true) return;
  const keys = form.settings.map((item) => item.key);
  if (new Set(keys).size !== keys.length) {
    await MessagePlugin.warning('同一策略不能重复设置相同项目');
    return;
  }
  saving.value = true;
  try {
    const input = {
      name: form.name,
      description: form.description,
      priority: form.priority,
      enabled: form.enabled,
      settings: form.settings as ManagedSetting[]
    };
    if (editingId.value) await policiesApi.update(editingId.value, input);
    else await policiesApi.create(input);
    editorVisible.value = false;
    await MessagePlugin.success('策略已保存');
    await loadAll();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '策略保存失败');
  } finally {
    saving.value = false;
  }
}
async function saveTargets() {
  saving.value = true;
  try {
    await policiesApi.setTargets(
      targetForm.policyId,
      targetForm.deviceIds,
      targetForm.partitionNodeIds
    );
    targetsVisible.value = false;
    await MessagePlugin.success('策略分配已保存');
    await loadAll();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '策略分配失败');
  } finally {
    saving.value = false;
  }
}
async function removePolicy(policy: DevicePolicyView) {
  try {
    await policiesApi.remove(policy.id);
    await MessagePlugin.success('策略已删除');
    await loadAll();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '删除失败');
  }
}
async function loadEffective() {
  if (previewDeviceId.value)
    effective.value = await policiesApi.effectiveForDevice(previewDeviceId.value);
}
onMounted(() => void loadAll());
</script>
