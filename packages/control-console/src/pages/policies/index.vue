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
    <t-form class="policy-editor-form" :data="form" layout="vertical" @submit="savePolicy">
      <t-form-item
        label="策略名称"
        name="name"
        :rules="[{ required: true, message: '请输入名称' }]"
      >
        <t-input v-model="form.name" placeholder="输入便于识别的策略名称" />
      </t-form-item>
      <t-form-item label="同层优先级" help="数值越高，同一分配层级内越优先生效">
        <t-input-number v-model="form.priority" :min="-100000" :max="100000" />
      </t-form-item>
      <t-form-item label="说明">
        <t-textarea
          v-model="form.description"
          :maxlength="1000"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="可选：说明策略用途和适用范围"
        />
      </t-form-item>
      <t-form-item label="状态">
        <t-switch v-model="form.enabled" :label="['启用', '停用']" />
      </t-form-item>

      <section class="managed-settings-section">
        <div class="managed-settings-section__heading">
          <div>
            <strong>受管设置</strong>
            <p>逐项选择客户端设置并配置对应值。</p>
          </div>
          <t-tag variant="light">{{ form.settings.length }} 项</t-tag>
        </div>

        <div class="managed-setting-list">
          <section
            v-for="(setting, index) in form.settings"
            :key="index"
            class="managed-setting-item"
          >
            <div class="managed-setting-item__heading">
              <strong>设置项 {{ index + 1 }}</strong>
              <t-button
                theme="danger"
                variant="text"
                size="small"
                @click="form.settings.splice(index, 1)"
                >移除</t-button
              >
            </div>
            <t-form-item label="设置项目">
              <t-select
                v-model="setting.key"
                :options="settingOptions"
                @change="changeSettingKey(setting, $event)"
              />
            </t-form-item>
            <t-form-item label="设置值">
              <t-switch
                v-if="definition(setting.key)?.type === 'boolean'"
                v-model="setting.value"
              />
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
              <t-textarea
                v-else-if="definition(setting.key)?.type === 'string-list'"
                v-model="setting.value"
                :placeholder="definition(setting.key)?.placeholder"
                :autosize="{ minRows: 3, maxRows: 6 }"
              />
              <t-input v-else v-model="setting.value" />
            </t-form-item>
          </section>
        </div>
        <t-button variant="dashed" block @click="addSetting">添加设置项</t-button>
      </section>

      <div class="policy-editor-footer">
        <t-button theme="primary" type="submit" :loading="saving">保存策略</t-button>
        <t-button variant="outline" @click="editorVisible = false">取消</t-button>
      </div>
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
          check-strictly
          value-mode="all"
        />
      </t-form-item>
      <t-form-item><t-button type="submit" :loading="saving">保存分配</t-button></t-form-item>
    </t-form>
  </t-dialog>
</template>

<script setup lang="ts">
import {
  MANAGED_SETTING_KEYS,
  PLAYER_UI_DENSITY_VALUES,
  managedSettingSchema,
  type ManagedSetting
} from '@dsz-examaware/control-protocol';
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
  type: 'string' | 'number' | 'boolean' | 'string-list';
  min?: number;
  max?: number;
  options?: Array<{ label: string; value: string | number }>;
  placeholder?: string;
};
type PlayerUiDensity = (typeof PLAYER_UI_DENSITY_VALUES)[number];
const PLAYER_UI_DENSITY_LABELS: Record<PlayerUiDensity, string> = {
  comfortable: '宽松',
  cozy: '标准',
  compact: '紧凑'
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
    options: [...PLAYER_UI_DENSITY_VALUES]
      .reverse()
      .map((value) => ({ label: PLAYER_UI_DENSITY_LABELS[value], value }))
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
  [MANAGED_SETTING_KEYS.pluginPreventInstall]: {
    label: '禁止安装插件',
    type: 'boolean'
  },
  [MANAGED_SETTING_KEYS.pluginInstallBlacklist]: {
    label: '禁止安装黑名单插件',
    type: 'string-list',
    placeholder: '每行一个插件包名，例如 @school/blocked-plugin'
  },
  [MANAGED_SETTING_KEYS.pluginInstallAllowlist]: {
    label: '仅允许安装特定插件',
    type: 'string-list',
    placeholder: '每行一个允许安装的插件包名，例如 @school/allowed-plugin'
  },
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
  if (Array.isArray(value)) return value.join('、');
  return typeof value === 'boolean' ? (value ? '是' : '否') : String(value);
}
function sourcePolicy(key: ManagedSetting['key']) {
  return effective.value?.policies.find((policy) =>
    policy.settings.some((setting) => setting.key === key)
  );
}
function changeSettingKey(setting: SettingDraft, value: unknown) {
  if (typeof value !== 'string') return;
  setting.key = value;
  resetSettingValue(setting);
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
function parsePluginNameList(value: SettingDraft['value']): string[] {
  return String(value)
    .split(/[\r\n,]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function toManagedSetting(setting: SettingDraft): ManagedSetting {
  const value =
    definition(setting.key)?.type === 'string-list'
      ? parsePluginNameList(setting.value)
      : setting.value;
  return { key: setting.key, value } as ManagedSetting;
}

function openEdit(policy: DevicePolicyView) {
  editingId.value = policy.id;
  Object.assign(form, {
    name: policy.name,
    description: policy.description,
    priority: policy.priority,
    enabled: policy.enabled,
    settings: policy.settings.map((item) => ({
      ...item,
      value: Array.isArray(item.value) ? item.value.join('\n') : item.value
    }))
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
  const parsedSettings = managedSettingSchema
    .array()
    .max(20)
    .safeParse(form.settings.map(toManagedSetting));
  if (!parsedSettings.success) {
    await MessagePlugin.warning('策略设置值不符合受管设置要求');
    return;
  }
  saving.value = true;
  try {
    const input = {
      name: form.name,
      description: form.description,
      priority: form.priority,
      enabled: form.enabled,
      settings: parsedSettings.data
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

<style scoped lang="less">
.policy-editor-form {
  max-height: min(72vh, 760px);
  padding-right: var(--td-comp-paddingLR-s);
  overflow-y: auto;
}

.managed-settings-section {
  margin-top: var(--td-comp-margin-l);
  padding-top: var(--td-comp-paddingTB-l);
  border-top: 1px solid var(--td-border-level-1-color);

  &__heading,
  .managed-setting-item__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--td-comp-margin-m);
  }

  &__heading {
    margin-bottom: var(--td-comp-margin-l);

    p {
      margin: var(--td-comp-margin-xs) 0 0;
      color: var(--td-text-color-secondary);
    }
  }
}

.managed-setting-list {
  display: flex;
  flex-direction: column;
  gap: var(--td-comp-margin-l);
  margin-bottom: var(--td-comp-margin-l);
}

.managed-setting-item {
  padding: var(--td-comp-paddingTB-l) var(--td-comp-paddingLR-l) 0;
  border: 1px solid var(--td-border-level-1-color);
  border-radius: var(--td-radius-medium);
  background: var(--td-bg-color-secondarycontainer);

  &__heading {
    margin-bottom: var(--td-comp-margin-m);
  }
}

.policy-editor-footer {
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--td-comp-margin-m);
  margin-top: var(--td-comp-margin-xl);
  padding: var(--td-comp-paddingTB-l) 0;
  border-top: 1px solid var(--td-border-level-1-color);
  background: var(--td-bg-color-container);
}
</style>
