<template>
  <t-card title="集控操作" subtitle="所有操作都会解析固定目标快照并记录逐设备状态">
    <template #actions>
      <t-button variant="outline" :loading="commandsLoading" @click="loadCommands"
        >刷新命令</t-button
      >
    </template>
    <t-tabs v-model="activeTab">
      <t-tab-panel value="commands" label="命令进度">
        <t-alert
          v-if="errorMessage"
          theme="error"
          :message="errorMessage"
          close
          @close="errorMessage = ''"
        />
        <t-table
          row-key="id"
          :data="commands"
          :columns="commandColumns"
          :loading="commandsLoading"
          hover
        >
          <template #commandType="{ row }"
            ><t-tag variant="outline">{{ commandLabel(row.commandType) }}</t-tag></template
          >
          <template #progress="{ row }">
            <t-space break-line size="small">
              <t-tag v-if="row.progress.pending" variant="light"
                >待投递 {{ row.progress.pending }}</t-tag
              >
              <t-tag v-if="row.progress.delivered" theme="primary" variant="light"
                >已投递 {{ row.progress.delivered }}</t-tag
              >
              <t-tag v-if="row.progress.acknowledged" theme="warning" variant="light"
                >已确认 {{ row.progress.acknowledged }}</t-tag
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
          <template #commandOperation="{ row }">
            <t-space
              v-if="canOperate && row.commandType === CONTROL_COMMAND_TYPES.examConfigPrepare"
              size="small"
            >
              <t-button variant="text" @click="activateDeployment(row)">激活</t-button>
              <t-popconfirm content="确认停止该部署目标上的播放？" @confirm="stopDeployment(row)">
                <t-button theme="danger" variant="text">停止</t-button>
              </t-popconfirm>
            </t-space>
          </template>
        </t-table>
        <t-pagination
          v-model="commandPage"
          v-model:page-size="commandPageSize"
          :total="commandTotal"
          show-jumper
          @change="loadCommands"
        />
      </t-tab-panel>

      <t-tab-panel value="deployment" label="考试部署" :disabled="!canOperate">
        <t-form :data="deploymentForm" :rules="deploymentRules" @submit="prepareDeployment">
          <t-form-item label="考试配置" name="examConfigId">
            <t-select
              v-model="deploymentForm.examConfigId"
              :options="examConfigOptions"
              placeholder="选择配置"
            />
          </t-form-item>
          <t-form-item label="目标设备" name="deviceIds">
            <t-select
              v-model="deploymentForm.deviceIds"
              :options="deviceOptions"
              multiple
              filterable
              placeholder="选择已上报能力的设备"
            />
          </t-form-item>
          <t-form-item label="命令有效期">
            <t-input-number
              v-model="deploymentForm.expiresInSeconds"
              :min="30"
              :max="86400"
              suffix="秒"
            />
          </t-form-item>
          <t-form-item>
            <t-button type="submit" :loading="submitting">准备考试配置</t-button>
          </t-form-item>
        </t-form>
      </t-tab-panel>

      <t-tab-panel value="broadcast" label="实时广播" :disabled="!canOperate">
        <t-form :data="broadcastForm" :rules="broadcastRules" @submit="showBroadcast">
          <t-form-item label="标题" name="title">
            <t-input v-model="broadcastForm.title" :maxlength="120" />
          </t-form-item>
          <t-form-item label="内容" name="body">
            <t-textarea
              v-model="broadcastForm.body"
              :maxlength="2000"
              :autosize="{ minRows: 4, maxRows: 10 }"
            />
          </t-form-item>
          <t-form-item label="级别">
            <t-radio-group v-model="broadcastForm.severity">
              <t-radio :value="BROADCAST_SEVERITY.info">普通</t-radio>
              <t-radio :value="BROADCAST_SEVERITY.warning">警告</t-radio>
              <t-radio :value="BROADCAST_SEVERITY.critical">紧急</t-radio>
            </t-radio-group>
          </t-form-item>
          <t-form-item label="目标设备" name="deviceIds">
            <t-select
              v-model="broadcastForm.deviceIds"
              :options="deviceOptions"
              multiple
              filterable
            />
          </t-form-item>
          <t-form-item label="显示时长">
            <t-input-number
              v-model="broadcastForm.expiresInSeconds"
              :min="5"
              :max="86400"
              suffix="秒"
            />
          </t-form-item>
          <t-form-item>
            <t-button type="submit" :loading="submitting">发送广播</t-button>
          </t-form-item>
        </t-form>
      </t-tab-panel>

      <t-tab-panel value="settings" label="受管设置" :disabled="!isAdmin">
        <t-alert
          theme="info"
          message="这里只提供共享协议中明确允许远程管理的设置；客户端本地设置不会出现在此处。"
        />
        <t-form :data="settingsForm" :rules="settingsRules" @submit="applySettings">
          <t-form-item label="设置项">
            <t-select v-model="settingsForm.key" :options="settingOptions" />
          </t-form-item>
          <t-form-item
            v-if="settingsForm.key === MANAGED_SETTING_KEYS.appearanceTheme"
            label="主题"
          >
            <t-radio-group v-model="settingsForm.theme">
              <t-radio value="light">浅色</t-radio>
              <t-radio value="dark">深色</t-radio>
              <t-radio value="auto">跟随系统</t-radio>
            </t-radio-group>
          </t-form-item>
          <t-form-item
            v-else-if="settingsForm.key === MANAGED_SETTING_KEYS.playerUiScale"
            label="界面缩放"
          >
            <t-input-number v-model="settingsForm.uiScale" :min="0.5" :max="2" :step="0.1" />
          </t-form-item>
          <t-form-item v-else label="自动校时">
            <t-switch v-model="settingsForm.autoSync" />
          </t-form-item>
          <t-form-item label="目标设备" name="deviceIds">
            <t-select
              v-model="settingsForm.deviceIds"
              :options="deviceOptions"
              multiple
              filterable
            />
          </t-form-item>
          <t-form-item>
            <t-button type="submit" :loading="submitting">下发设置</t-button>
          </t-form-item>
        </t-form>
      </t-tab-panel>
    </t-tabs>
  </t-card>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import {
  BROADCAST_SEVERITY,
  CONTROL_COMMAND_TYPES,
  MANAGED_SETTING_KEYS
} from '@dsz-examaware/control-protocol';
import type { ManagedSetting } from '@dsz-examaware/control-protocol';
import { MessagePlugin } from 'tdesign-vue-next';
import type { FormRules, PrimaryTableCol, SelectOption, SubmitContext } from 'tdesign-vue-next';
import { devicesApi } from '@/api/control/devices';
import { examConfigsApi } from '@/api/control/exam-configs';
import { operationsApi } from '@/api/control/operations';
import type { ControlCommandView, DeviceView, ExamConfigSummary } from '@/api/control/types';
import { ApiError } from '@/api/http';
import { useSessionStore } from '@/store';

type ConsoleSettingKey =
  | typeof MANAGED_SETTING_KEYS.appearanceTheme
  | typeof MANAGED_SETTING_KEYS.playerUiScale
  | typeof MANAGED_SETTING_KEYS.timeSyncAutoSync;

const sessionStore = useSessionStore();
const canOperate = computed(() => ['admin', 'operator'].includes(sessionStore.user?.role ?? ''));
const isAdmin = computed(() => sessionStore.user?.role === 'admin');
const activeTab = ref('commands');
const commands = ref<ControlCommandView[]>([]);
const devices = ref<DeviceView[]>([]);
const examConfigs = ref<ExamConfigSummary[]>([]);
const commandsLoading = ref(false);
const submitting = ref(false);
const errorMessage = ref('');
const commandPage = ref(1);
const commandPageSize = ref(20);
const commandTotal = ref(0);

const deploymentForm = reactive({
  examConfigId: '',
  deviceIds: [] as string[],
  expiresInSeconds: 300
});
const broadcastForm = reactive({
  title: '',
  body: '',
  severity: BROADCAST_SEVERITY.info,
  deviceIds: [] as string[],
  expiresInSeconds: 300
});
const settingsForm = reactive({
  key: MANAGED_SETTING_KEYS.appearanceTheme as ConsoleSettingKey,
  theme: 'auto' as 'light' | 'dark' | 'auto',
  uiScale: 1,
  autoSync: true,
  deviceIds: [] as string[]
});

const targetRules = [{ required: true, message: '请选择至少一台目标设备' }];
const deploymentRules: FormRules = {
  examConfigId: [{ required: true, message: '请选择考试配置' }],
  deviceIds: targetRules
};
const broadcastRules: FormRules = {
  title: [{ required: true, message: '请输入广播标题' }],
  body: [{ required: true, message: '请输入广播内容' }],
  deviceIds: targetRules
};
const settingsRules: FormRules = { deviceIds: targetRules };

const commandColumns: PrimaryTableCol<ControlCommandView>[] = [
  { colKey: 'commandType', title: '命令', width: 160 },
  { colKey: 'progress', title: '逐设备进度', minWidth: 300 },
  { colKey: 'issuedAt', title: '签发时间', width: 180 },
  { colKey: 'commandOperation', title: '操作', width: 130, fixed: 'right' }
];
const deviceOptions = computed<SelectOption[]>(() =>
  devices.value.map((device) => ({
    value: device.id,
    label: `${device.displayName}（${device.connectionStatus === 'online' ? '在线' : '离线'}）`,
    disabled: device.lifecycleStatus === 'revoked' || !device.lastCapabilities
  }))
);
const examConfigOptions = computed<SelectOption[]>(() =>
  examConfigs.value.map((config) => ({
    value: config.id,
    label: `${config.name}（v${config.latestVersion}）`
  }))
);
const settingOptions: SelectOption[] = [
  { value: MANAGED_SETTING_KEYS.appearanceTheme, label: '外观主题' },
  { value: MANAGED_SETTING_KEYS.playerUiScale, label: '播放器界面缩放' },
  { value: MANAGED_SETTING_KEYS.timeSyncAutoSync, label: '自动校时' }
];

function commandLabel(type: ControlCommandView['commandType']): string {
  return {
    [CONTROL_COMMAND_TYPES.examConfigPrepare]: '准备考试配置',
    [CONTROL_COMMAND_TYPES.playbackActivate]: '激活播放',
    [CONTROL_COMMAND_TYPES.playbackStop]: '停止播放',
    [CONTROL_COMMAND_TYPES.broadcastShow]: '显示广播',
    [CONTROL_COMMAND_TYPES.broadcastDismiss]: '撤销广播',
    [CONTROL_COMMAND_TYPES.settingsApply]: '应用设置'
  }[type];
}

function formatDateTime(value: string): string {
  return new Date(value).toLocaleString('zh-CN');
}

function describeApiError(error: unknown, fallback: string): string {
  if (!(error instanceof ApiError)) return fallback;
  if (error.code === 'command_target_capabilities_unknown') {
    return `${error.message}。请先让目标客户端连接并上报能力。`;
  }
  if (error.code === 'command_target_capabilities_unsupported') {
    return `${error.message}。请排除不支持该命令或设置项的客户端。`;
  }
  return error.message;
}

async function loadCommands() {
  commandsLoading.value = true;
  errorMessage.value = '';
  try {
    const result = await operationsApi.listCommands(commandPage.value, commandPageSize.value);
    commands.value = result.items;
    commandTotal.value = result.total;
  } catch (error) {
    errorMessage.value = describeApiError(error, '命令列表加载失败');
  } finally {
    commandsLoading.value = false;
  }
}

async function loadOptions() {
  try {
    const [devicePage, configPage] = await Promise.all([
      devicesApi.list(1, 100),
      examConfigsApi.list(1, 100)
    ]);
    devices.value = devicePage.items;
    examConfigs.value = configPage.items;
  } catch (error) {
    await MessagePlugin.error(describeApiError(error, '目标选项加载失败'));
  }
}

async function prepareDeployment(context: SubmitContext) {
  if (context.validateResult !== true) return;
  const config = examConfigs.value.find((item) => item.id === deploymentForm.examConfigId);
  if (!config) return;
  submitting.value = true;
  try {
    await operationsApi.prepareExam({
      examConfigId: config.id,
      version: config.latestVersion,
      targets: { deviceIds: deploymentForm.deviceIds, partitionNodeIds: [] },
      expiresInSeconds: deploymentForm.expiresInSeconds
    });
    activeTab.value = 'commands';
    await MessagePlugin.success('考试配置准备命令已签发');
    await loadCommands();
  } catch (error) {
    await MessagePlugin.error(describeApiError(error, '考试部署失败'));
  } finally {
    submitting.value = false;
  }
}

async function activateDeployment(row: ControlCommandView) {
  submitting.value = true;
  try {
    await operationsApi.activateExam(row.id);
    await MessagePlugin.success('播放激活命令已签发');
    await loadCommands();
  } catch (error) {
    await MessagePlugin.error(describeApiError(error, '部署激活失败'));
  } finally {
    submitting.value = false;
  }
}

async function stopDeployment(row: ControlCommandView) {
  submitting.value = true;
  try {
    await operationsApi.stopExam(row.id, 300, '管理员从控制台停止');
    await MessagePlugin.success('停止命令已签发');
    await loadCommands();
  } catch (error) {
    await MessagePlugin.error(describeApiError(error, '停止播放失败'));
  } finally {
    submitting.value = false;
  }
}

async function showBroadcast(context: SubmitContext) {
  if (context.validateResult !== true) return;
  submitting.value = true;
  try {
    await operationsApi.showBroadcast({
      title: broadcastForm.title,
      body: broadcastForm.body,
      severity: broadcastForm.severity,
      targets: { deviceIds: broadcastForm.deviceIds, partitionNodeIds: [] },
      expiresInSeconds: broadcastForm.expiresInSeconds
    });
    activeTab.value = 'commands';
    await MessagePlugin.success('广播已发送');
    await loadCommands();
  } catch (error) {
    await MessagePlugin.error(describeApiError(error, '广播发送失败'));
  } finally {
    submitting.value = false;
  }
}

function currentManagedSetting(): ManagedSetting {
  if (settingsForm.key === MANAGED_SETTING_KEYS.appearanceTheme) {
    return { key: settingsForm.key, value: settingsForm.theme };
  }
  if (settingsForm.key === MANAGED_SETTING_KEYS.playerUiScale) {
    return { key: settingsForm.key, value: settingsForm.uiScale };
  }
  return { key: MANAGED_SETTING_KEYS.timeSyncAutoSync, value: settingsForm.autoSync };
}

async function applySettings(context: SubmitContext) {
  if (context.validateResult !== true) return;
  submitting.value = true;
  try {
    await operationsApi.applySettings({
      settings: [currentManagedSetting()],
      targets: { deviceIds: settingsForm.deviceIds, partitionNodeIds: [] },
      expiresInSeconds: 300
    });
    activeTab.value = 'commands';
    await MessagePlugin.success('受管设置命令已签发');
    await loadCommands();
  } catch (error) {
    await MessagePlugin.error(describeApiError(error, '受管设置下发失败'));
  } finally {
    submitting.value = false;
  }
}

onMounted(() => {
  void Promise.all([loadCommands(), loadOptions()]);
});
</script>
