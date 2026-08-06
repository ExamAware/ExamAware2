<template>
  <t-loading :loading="loading" show-overlay>
    <div v-if="exam" class="console-page exam-detail-page">
      <PageHeader
        :title="exam.name"
        :description="`配置版本 v${exam.latestVersion} · 更新于 ${formatDateTime(exam.updatedAt)}`"
      >
        <template #status>
          <t-tag :theme="statusTheme(exam.status)" variant="light">{{
            statusLabel(exam.status)
          }}</t-tag>
        </template>
        <template #actions>
          <t-space class="exam-header-action-list" break-line>
            <t-button v-if="canWrite" variant="outline" @click="editVisible = true"
              >编辑信息</t-button
            >
            <t-button v-if="canChangeDeployment" variant="outline" @click="versionVisible = true"
              >上传新版本</t-button
            >
            <t-button v-if="canPrepare" theme="primary" :loading="operating" @click="prepareExam"
              >准备考试</t-button
            >
            <t-button v-if="canActivate" theme="success" :loading="operating" @click="activateExam"
              >开始放映</t-button
            >
            <t-popconfirm v-if="canStop" content="确认停止本次考试放映？" @confirm="stopExam">
              <t-button theme="danger" variant="outline">停止</t-button>
            </t-popconfirm>
          </t-space>
        </template>
      </PageHeader>

      <t-row class="exam-summary-row" :gutter="[16, 16]" align="stretch">
        <t-col class="exam-summary-col" :xs="12" :lg="8">
          <t-card class="exam-summary-card" title="考试概况" :bordered="false">
            <t-descriptions class="exam-descriptions" :column="2" bordered>
              <t-descriptions-item label="档案名称">{{
                exam.latest.content.examName
              }}</t-descriptions-item>
              <t-descriptions-item label="考试场次">{{
                exam.latest.content.examInfos.length
              }}</t-descriptions-item>
              <t-descriptions-item label="配置哈希">
                <t-tooltip :content="exam.latest.contentHash">
                  <span class="config-hash">{{ exam.latest.contentHash }}</span>
                </t-tooltip>
              </t-descriptions-item>
              <t-descriptions-item label="目标范围">
                {{ assignedDevices.length }} 台设备 /
                {{ exam.assignedPartitionNodeIds.length }} 个设备组
              </t-descriptions-item>
              <t-descriptions-item label="考试说明" :span="2">{{
                exam.latest.content.message || '暂无说明'
              }}</t-descriptions-item>
            </t-descriptions>
          </t-card>
        </t-col>
        <t-col class="exam-summary-col" :xs="12" :lg="4">
          <t-card class="exam-summary-card" title="部署进度" :bordered="false">
            <t-empty v-if="!deployment" description="尚未向设备下发">
              <template #action>
                <t-button v-if="canPrepare" theme="primary" variant="outline" @click="prepareExam"
                  >准备考试</t-button
                >
              </template>
            </t-empty>
            <div v-else class="deployment-summary">
              <t-progress
                :percentage="deploymentPercentage"
                :status="deployment.progress.failed ? 'error' : 'active'"
              />
              <div class="deployment-summary__stats">
                <span>
                  <strong>
                    {{
                      deployment.progress.pending +
                      deployment.progress.delivered +
                      deployment.progress.acknowledged
                    }}
                  </strong>
                  处理中
                </span>
                <span
                  ><strong>{{ deployment.progress.succeeded }}</strong
                  >成功</span
                >
                <span
                  ><strong>{{ deployment.progress.failed }}</strong
                  >失败</span
                >
              </div>
            </div>
          </t-card>
        </t-col>
      </t-row>

      <t-card class="exam-detail-workspace" :bordered="false">
        <t-tabs v-model="activeTab">
          <t-tab-panel value="schedule" label="考试安排" :destroy-on-hide="false">
            <div class="tab-panel-content">
              <t-empty v-if="!scheduleRows.length" description="配置中未包含考试安排" />
              <t-table v-else row-key="index" :data="scheduleRows" :columns="scheduleColumns" hover>
                <template #status="{ row }">
                  <t-tag :theme="scheduleStatusTheme(row.status)" variant="light">{{
                    scheduleStatusLabel(row.status)
                  }}</t-tag>
                </template>
              </t-table>
            </div>
          </t-tab-panel>

          <t-tab-panel value="targets" label="目标与部署" :destroy-on-hide="false">
            <div class="tab-panel-content">
              <div class="console-toolbar">
                <div>
                  <strong>目标考场大屏</strong>
                  <p class="console-muted">查看设备连接状态与本次部署结果。</p>
                </div>
                <t-button v-if="canChangeDeployment" variant="outline" @click="editVisible = true"
                  >调整目标范围</t-button
                >
              </div>
              <DeviceFilterPanel
                v-model="deviceFilters"
                :devices="assignedDevices"
                :dimensions="dimensions"
                :result-count="filteredAssignedDevices.length"
              />
              <t-table row-key="id" :data="filteredAssignedDevices" :columns="deviceColumns" hover>
                <template #connectionStatus="{ row }">
                  <t-tag
                    :theme="row.connectionStatus === 'online' ? 'success' : 'default'"
                    variant="light"
                  >
                    {{ row.connectionStatus === 'online' ? '在线' : '离线' }}
                  </t-tag>
                </template>
                <template #result="{ row }">
                  <t-tag
                    v-if="targetResult(row.id)"
                    :theme="
                      targetResult(row.id)?.status === 'succeeded'
                        ? 'success'
                        : targetResult(row.id)?.status === 'failed'
                          ? 'danger'
                          : 'warning'
                    "
                    variant="light"
                  >
                    {{ targetResult(row.id)?.status }}
                  </t-tag>
                  <span v-else>未下发</span>
                </template>
              </t-table>
            </div>
          </t-tab-panel>

          <t-tab-panel
            v-if="canWrite && exam.status === 'active'"
            value="broadcast"
            label="实时通知"
            :destroy-on-hide="false"
          >
            <div class="tab-panel-content broadcast-workspace">
              <section class="broadcast-workspace__intro">
                <t-icon name="notification" size="32px" />
                <h3>发送场内实时通知</h3>
                <p>通知会显示在当前考试的播放器中，适用于临时考务提醒与紧急广播。</p>
                <t-alert
                  theme="info"
                  :message="`将发送至 ${assignedDevices.length} 台设备和 ${exam.assignedPartitionNodeIds.length} 个设备组`"
                />
              </section>
              <t-form
                class="broadcast-workspace__form"
                :data="broadcastForm"
                layout="vertical"
                @submit="sendBroadcast"
              >
                <t-form-item
                  label="通知标题"
                  name="title"
                  :rules="[{ required: true, message: '请输入通知标题' }]"
                >
                  <t-input v-model="broadcastForm.title" :maxlength="120" />
                </t-form-item>
                <t-form-item
                  label="通知内容"
                  name="body"
                  :rules="[{ required: true, message: '请输入通知内容' }]"
                >
                  <t-textarea
                    v-model="broadcastForm.body"
                    :maxlength="2000"
                    :autosize="{ minRows: 4, maxRows: 8 }"
                  />
                </t-form-item>
                <t-row :gutter="[16, 0]">
                  <t-col :xs="12" :md="8">
                    <t-form-item label="重要程度">
                      <t-radio-group v-model="broadcastForm.severity" variant="default-filled">
                        <t-radio-button :value="BROADCAST_SEVERITY.info">普通</t-radio-button>
                        <t-radio-button :value="BROADCAST_SEVERITY.warning">重要</t-radio-button>
                        <t-radio-button :value="BROADCAST_SEVERITY.critical">紧急</t-radio-button>
                      </t-radio-group>
                    </t-form-item>
                  </t-col>
                  <t-col :xs="12" :md="4">
                    <t-form-item label="显示时长">
                      <t-input-number
                        v-model="broadcastForm.expiresInSeconds"
                        :min="5"
                        :max="86400"
                        suffix="秒"
                      />
                    </t-form-item>
                  </t-col>
                </t-row>
                <t-button
                  type="submit"
                  :loading="broadcasting"
                  :disabled="
                    !exam.assignedDeviceIds.length && !exam.assignedPartitionNodeIds.length
                  "
                  >发送实时通知</t-button
                >
              </t-form>
            </div>
          </t-tab-panel>

          <t-tab-panel value="versions" label="配置版本" :destroy-on-hide="false">
            <div class="tab-panel-content">
              <div class="console-toolbar">
                <div>
                  <strong>配置版本历史</strong>
                  <p class="console-muted">
                    当前使用 v{{ exam.latestVersion }}，历史版本只读保留。
                  </p>
                </div>
                <t-button
                  v-if="canChangeDeployment"
                  variant="outline"
                  @click="versionVisible = true"
                  >上传新版本</t-button
                >
              </div>
              <t-table row-key="id" :data="exam.versions" :columns="versionColumns">
                <template #version="{ row }">
                  <t-tag variant="outline">v{{ row.version }}</t-tag>
                  <t-tag v-if="row.version === exam.latestVersion" theme="primary" variant="light"
                    >当前</t-tag
                  >
                </template>
                <template #sessionCount="{ row }">{{ row.content.examInfos.length }}</template>
                <template #contentHash="{ row }">
                  <t-tooltip :content="row.contentHash">
                    <span class="config-hash">{{ row.contentHash }}</span>
                  </t-tooltip>
                </template>
                <template #createdAt="{ row }">{{ formatDateTime(row.createdAt) }}</template>
              </t-table>
            </div>
          </t-tab-panel>
        </t-tabs>
      </t-card>
    </div>
  </t-loading>

  <t-dialog v-model:visible="editVisible" header="编辑考试信息" width="720px" :footer="false">
    <t-form :data="editForm" layout="vertical" @submit="saveExam">
      <t-form-item
        label="考试名称"
        name="name"
        :rules="[{ required: true, message: '请输入名称' }]"
      >
        <t-input v-model="editForm.name" />
      </t-form-item>
      <t-form-item v-if="canChangeDeployment" label="目标考场大屏或设备组">
        <t-cascader
          v-model="editTargetValues"
          :options="targetOptions"
          :popup-props="WIDE_CASCADER_POPUP_PROPS"
          multiple
          filterable
          clearable
          value-mode="parentFirst"
          placeholder="选择单台考场大屏或任意层级设备组"
        />
      </t-form-item>
      <t-alert
        v-else
        theme="info"
        message="考试正在准备或放映时只能修改名称；停止放映后才能调整目标范围。"
      />
      <t-form-item
        ><t-space
          ><t-button type="submit" :loading="saving">保存</t-button
          ><t-button variant="outline" @click="editVisible = false">取消</t-button></t-space
        ></t-form-item
      >
    </t-form>
  </t-dialog>

  <t-dialog v-model:visible="versionVisible" header="上传新的 .ea2 版本" :footer="false">
    <t-space direction="vertical" size="large" style="width: 100%">
      <t-upload
        v-model="versionFiles"
        accept=".ea2"
        :auto-upload="false"
        :max="1"
        @change="readVersionFile"
      >
        <t-button variant="outline"
          ><template #icon><t-icon name="upload" /></template>选择 .ea2 文件</t-button
        >
      </t-upload>
      <t-alert
        v-if="versionMessage"
        :theme="newVersion ? 'success' : 'error'"
        :message="versionMessage"
      />
      <t-button :disabled="!newVersion" :loading="saving" @click="createVersion"
        >创建新版本</t-button
      >
    </t-space>
  </t-dialog>
</template>

<script setup lang="ts">
import { BROADCAST_SEVERITY } from '@dsz-examaware/control-protocol';
import {
  getSortedExamInfos,
  validateExamConfigDetailed,
  type ExamConfig
} from '@dsz-examaware/core';
import type { PrimaryTableCol, SubmitContext, TagProps, UploadFile } from 'tdesign-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import DeviceFilterPanel from '@/components/device-filter-panel/index.vue';
import PageHeader from '@/components/page-header/index.vue';
import {
  applyDeviceConnectionStatus,
  devicesApi,
  type DeviceConnectionStatusEvent
} from '@/api/control/devices';
import { examConfigsApi } from '@/api/control/exam-configs';
import { operationsApi } from '@/api/control/operations';
import { partitionsApi } from '@/api/control/partitions';
import type {
  CommandTargetView,
  ControlCommandView,
  DeviceView,
  ExamConfigDetail,
  ExamConfigVersion,
  ExamStatus,
  PartitionDimensionDetail
} from '@/api/control/types';
import { ApiError } from '@/api/http';
import { useSessionStore } from '@/store';
import { createDefaultDeviceFilters, filterDevices } from '@/utils/device-filters';
import {
  WIDE_CASCADER_POPUP_PROPS,
  buildExamTargetCascaderOptions,
  parseExamTargetValues,
  toExamTargetValues
} from '@/utils/partition-options';
const route = useRoute();
const session = useSessionStore();
const canWrite = computed(() => ['admin', 'operator'].includes(session.user?.role ?? ''));
const exam = ref<ExamConfigDetail>();
const devices = ref<DeviceView[]>([]);
const resolvedAssignedDevices = ref<DeviceView[]>([]);
const dimensions = ref<PartitionDimensionDetail[]>([]);
const deviceFilters = ref(createDefaultDeviceFilters());
const commands = ref<ControlCommandView[]>([]);
const loading = ref(false);
const activeTab = ref('schedule');
const scheduleNow = ref(Date.now());
let scheduleTimer: ReturnType<typeof setInterval> | undefined;
let deploymentTimer: ReturnType<typeof setInterval> | undefined;
let examStatusTimer: ReturnType<typeof setInterval> | undefined;
let examStatusRefreshInFlight = false;
let deploymentRefreshInFlight = false;
let disposeConnectionEvents: (() => void) | undefined;
function startScheduleClock() {
  scheduleTimer = setInterval(() => {
    scheduleNow.value = Date.now();
  }, 30_000);
}
const operating = ref(false);
const saving = ref(false);
const broadcasting = ref(false);
const editVisible = ref(false);
const versionVisible = ref(false);
const versionFiles = ref<UploadFile[]>([]);
const newVersion = ref<ExamConfig>();
const versionMessage = ref('');
const editForm = reactive({
  name: '',
  deviceIds: [] as string[],
  partitionNodeIds: [] as string[]
});
const broadcastForm = reactive({
  title: '',
  body: '',
  severity: BROADCAST_SEVERITY.info,
  expiresInSeconds: 300
});
const deployment = computed(() => {
  if (!exam.value || !['preparing', 'ready', 'active'].includes(exam.value.status))
    return undefined;
  return commands.value.find(
    (item) =>
      item.command.type === 'exam-config.prepare' &&
      item.command.payload.examConfigId === exam.value?.id
  );
});
const canChangeDeployment = computed(
  () => canWrite.value && !['preparing', 'active'].includes(exam.value?.status ?? 'draft')
);
const canPrepare = computed(
  () => canWrite.value && ['draft', 'completed'].includes(exam.value?.status ?? '')
);
const canActivate = computed(
  () => canWrite.value && exam.value?.status === 'ready' && Boolean(deployment.value)
);
const canStop = computed(
  () => canWrite.value && exam.value?.status === 'active' && Boolean(deployment.value)
);
const assignedDevices = computed(() => resolvedAssignedDevices.value);
const filteredAssignedDevices = computed(() =>
  filterDevices(assignedDevices.value, deviceFilters.value, dimensions.value)
);
const deploymentPercentage = computed(() => {
  const current = deployment.value;
  if (!current?.targets.length) return 0;
  return Math.round(
    ((current.progress.succeeded + current.progress.failed + current.progress.expired) /
      current.targets.length) *
      100
  );
});
const scheduleRows = computed(() => {
  const content = exam.value?.latest.content;
  if (!content) return [];
  const now = scheduleNow.value;
  return getSortedExamInfos(content).map((info, index) => {
    const startMs = new Date(info.start).getTime();
    const endMs = new Date(info.end).getTime();
    const status = now > endMs ? 'completed' : now >= startMs ? 'inProgress' : 'pending';
    const durationMinutes = Math.max(0, Math.round((endMs - startMs) / 60_000));
    return {
      index: index + 1,
      name: info.name,
      startText: formatScheduleTime(info.start),
      endText: formatScheduleTime(info.end),
      durationText: `${durationMinutes} 分钟`,
      alertText: info.alertTime > 0 ? `结束前 ${info.alertTime} 分钟` : '未设置',
      materialsText: info.materials?.length
        ? info.materials.map((material) => `${material.name}×${material.quantity}`).join('、')
        : '—',
      status
    };
  });
});
const targetOptions = computed(() =>
  buildExamTargetCascaderOptions(dimensions.value, devices.value)
);
const editTargetValues = computed<string[]>({
  get: () => toExamTargetValues(editForm.deviceIds, editForm.partitionNodeIds, devices.value),
  set: (values) => Object.assign(editForm, parseExamTargetValues(values))
});
const deviceColumns: PrimaryTableCol<DeviceView>[] = [
  { colKey: 'displayName', title: '设备', minWidth: 200 },
  { colKey: 'connectionStatus', title: '状态', width: 100 },
  { colKey: 'appVersion', title: '客户端版本', width: 130 },
  { colKey: 'result', title: '部署结果', width: 120 }
];
const versionColumns: PrimaryTableCol<ExamConfigVersion>[] = [
  { colKey: 'version', title: '版本', width: 100 },
  { colKey: 'sessionCount', title: '场次数', width: 90 },
  { colKey: 'contentHash', title: '内容哈希', ellipsis: true, minWidth: 260 },
  { colKey: 'createdAt', title: '创建时间', width: 180 }
];
const scheduleColumns: PrimaryTableCol<{
  index: number;
  status: 'pending' | 'inProgress' | 'completed';
}>[] = [
  { colKey: 'index', title: '场次', width: 80 },
  { colKey: 'name', title: '考试名称', minWidth: 160 },
  { colKey: 'startText', title: '开始时间', width: 150 },
  { colKey: 'endText', title: '结束时间', width: 150 },
  { colKey: 'durationText', title: '时长', width: 100 },
  { colKey: 'alertText', title: '结束提醒', width: 130 },
  { colKey: 'materialsText', title: '考试材料', minWidth: 160, ellipsis: true },
  { colKey: 'status', title: '状态', width: 100 }
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
function formatScheduleTime(value: string) {
  return new Date(value).toLocaleString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}
function scheduleStatusLabel(status: 'pending' | 'inProgress' | 'completed') {
  return { pending: '未开始', inProgress: '进行中', completed: '已结束' }[status];
}
function scheduleStatusTheme(status: 'pending' | 'inProgress' | 'completed'): TagProps['theme'] {
  return { pending: 'primary', inProgress: 'success', completed: 'default' }[
    status
  ] as TagProps['theme'];
}
const TERMINAL_TARGET_STATUSES = new Set(['succeeded', 'failed', 'expired']);
function deploymentIsTerminal(command: ControlCommandView): boolean {
  return command.targets.every((target) => TERMINAL_TARGET_STATUSES.has(target.status));
}
function upsertCommand(command: ControlCommandView) {
  const index = commands.value.findIndex((item) => item.id === command.id);
  if (index === -1) commands.value.unshift(command);
  else commands.value.splice(index, 1, command);
}
function stopDeploymentPolling() {
  if (deploymentTimer) clearInterval(deploymentTimer);
  deploymentTimer = undefined;
}
async function refreshDeployment() {
  const current = deployment.value;
  if (!current || deploymentIsTerminal(current)) {
    stopDeploymentPolling();
    return;
  }
  if (deploymentRefreshInFlight) return;
  deploymentRefreshInFlight = true;
  try {
    const refreshed = await operationsApi.getCommand(current.id);
    upsertCommand(refreshed);
    if (deploymentIsTerminal(refreshed)) stopDeploymentPolling();
  } finally {
    deploymentRefreshInFlight = false;
  }
}
function startDeploymentPolling() {
  stopDeploymentPolling();
  if (!deployment.value || deploymentIsTerminal(deployment.value)) return;
  void refreshDeployment();
  deploymentTimer = setInterval(() => void refreshDeployment(), 1_000);
}
async function refreshExamStatus() {
  const current = exam.value;
  if (!current || !['active', 'preparing'].includes(current.status) || examStatusRefreshInFlight) {
    return;
  }
  examStatusRefreshInFlight = true;
  try {
    exam.value = await examConfigsApi.get(current.id);
  } finally {
    examStatusRefreshInFlight = false;
  }
}
async function resolveAssignedDevices() {
  if (!exam.value) {
    resolvedAssignedDevices.value = [];
    return;
  }
  resolvedAssignedDevices.value = await devicesApi.resolveTargets(
    exam.value.assignedDeviceIds,
    exam.value.assignedPartitionNodeIds
  );
}

function handleConnectionStatus(event: DeviceConnectionStatusEvent) {
  applyDeviceConnectionStatus(devices.value, event);
  applyDeviceConnectionStatus(resolvedAssignedDevices.value, event);
}

function targetResult(deviceId: string): CommandTargetView | undefined {
  return deployment.value?.targets.find((item) => item.deviceId === deviceId);
}
function syncEditForm() {
  if (!exam.value) return;
  editForm.name = exam.value.name;
  editForm.deviceIds = [...exam.value.assignedDeviceIds];
  editForm.partitionNodeIds = [...exam.value.assignedPartitionNodeIds];
}
async function load() {
  loading.value = true;
  try {
    const [detail, devicePage, dimensionList, commandPage] = await Promise.all([
      examConfigsApi.get(String(route.params.id)),
      devicesApi.list(1, 100),
      partitionsApi.listDimensions(),
      operationsApi.listCommands(1, 100)
    ]);
    exam.value = detail;
    devices.value = devicePage.items;
    dimensions.value = await Promise.all(
      dimensionList.map((item) => partitionsApi.getDimension(item.id))
    );
    commands.value = commandPage.items;
    await resolveAssignedDevices();
    syncEditForm();
    startDeploymentPolling();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '考试详情加载失败');
  } finally {
    loading.value = false;
  }
}
onUnmounted(() => {
  disposeConnectionEvents?.();
  clearInterval(scheduleTimer);
  clearInterval(examStatusTimer);
  stopDeploymentPolling();
});
async function saveExam(context: SubmitContext) {
  if (context.validateResult !== true || !exam.value) return;
  saving.value = true;
  try {
    exam.value = await examConfigsApi.update(exam.value.id, {
      name: editForm.name,
      ...(canChangeDeployment.value
        ? {
            assignedDeviceIds: editForm.deviceIds,
            assignedPartitionNodeIds: editForm.partitionNodeIds
          }
        : {})
    });
    await resolveAssignedDevices();
    editVisible.value = false;
    await MessagePlugin.success('考试信息已保存');
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '保存失败');
  } finally {
    saving.value = false;
  }
}
async function readVersionFile(nextFiles: UploadFile[]) {
  versionFiles.value = nextFiles;
  newVersion.value = undefined;
  const file = nextFiles[0]?.raw;
  if (!file) return;
  try {
    const validation = validateExamConfigDetailed(JSON.parse(await file.text()), {
      overlap: 'error',
      sort: true
    });
    if (!validation.valid || !validation.config) {
      versionMessage.value = validation.errors.map((item) => item.message).join('；');
      return;
    }
    newVersion.value = validation.config;
    versionMessage.value = `校验通过，共 ${validation.config.examInfos.length} 个场次`;
  } catch {
    versionMessage.value = '无法读取该 .ea2 文件';
  }
}
async function createVersion() {
  const file = versionFiles.value[0]?.raw;
  if (!exam.value || !newVersion.value || !file) return;
  saving.value = true;
  try {
    await examConfigsApi.importVersion(exam.value.id, file);
    versionVisible.value = false;
    await MessagePlugin.success('新版本已创建');
    await load();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '版本创建失败');
  } finally {
    saving.value = false;
  }
}
async function prepareExam() {
  if (
    !exam.value ||
    (!exam.value.assignedDeviceIds.length && !exam.value.assignedPartitionNodeIds.length)
  ) {
    await MessagePlugin.warning('请先分配目标设备或设备组');
    editVisible.value = true;
    return;
  }
  operating.value = true;
  try {
    const command = await operationsApi.prepareExam({
      examConfigId: exam.value.id,
      version: exam.value.latestVersion,
      targets: {
        deviceIds: exam.value.assignedDeviceIds,
        partitionNodeIds: exam.value.assignedPartitionNodeIds
      },
      expiresInSeconds: 600
    });
    upsertCommand(command);
    exam.value = { ...exam.value, status: 'preparing' };
    startDeploymentPolling();
    await MessagePlugin.success('准备命令已下发');
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '准备失败');
  } finally {
    operating.value = false;
  }
}
async function activateExam() {
  if (!canActivate.value || !deployment.value) return;
  operating.value = true;
  try {
    await operationsApi.activateExam(deployment.value.id);
    await MessagePlugin.success('考试已开始放映');
    await load();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '开始放映失败');
  } finally {
    operating.value = false;
  }
}
async function stopExam() {
  if (!canStop.value || !deployment.value) return;
  operating.value = true;
  try {
    await operationsApi.stopExam(deployment.value.id, 300, '控制台停止考试');
    await MessagePlugin.success('停止命令已下发');
    await load();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '停止失败');
  } finally {
    operating.value = false;
  }
}
async function sendBroadcast(context: SubmitContext) {
  if (context.validateResult !== true || !exam.value || exam.value.status !== 'active') return;
  const targets = {
    deviceIds: exam.value.assignedDeviceIds,
    partitionNodeIds: exam.value.assignedPartitionNodeIds
  };
  if (!targets.deviceIds.length && !targets.partitionNodeIds.length) {
    await MessagePlugin.warning('本场考试尚未分配目标设备或设备组');
    return;
  }
  broadcasting.value = true;
  try {
    await operationsApi.showBroadcast({
      title: broadcastForm.title,
      body: broadcastForm.body,
      severity: broadcastForm.severity,
      targets,
      expiresInSeconds: broadcastForm.expiresInSeconds
    });
    await MessagePlugin.success('实时通知已发送');
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '实时通知发送失败');
  } finally {
    broadcasting.value = false;
  }
}

onMounted(() => {
  disposeConnectionEvents = devicesApi.subscribeConnectionEvents(handleConnectionStatus);
  startScheduleClock();
  examStatusTimer = setInterval(() => void refreshExamStatus(), 2_000);
  void load();
});
</script>

<style scoped lang="less">
.exam-header-action-list {
  justify-content: flex-end;
}

.exam-summary-col {
  display: flex;
}

.exam-summary-card {
  width: 100%;
  height: 100%;
}

.deployment-summary {
  display: flex;
  flex-direction: column;
  gap: var(--td-comp-margin-xl);

  &__stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--td-comp-margin-s);

    span {
      display: flex;
      flex-direction: column;
      color: var(--td-text-color-secondary);
      font: var(--td-font-body-small);
    }

    strong {
      color: var(--td-text-color-primary);
      font: var(--td-font-title-medium);
    }
  }
}

.tab-panel-content {
  min-height: 320px;
  padding-top: var(--td-comp-paddingTB-l);
}

.broadcast-workspace {
  display: grid;
  grid-template-columns: minmax(260px, 0.7fr) minmax(420px, 1.3fr);
  gap: var(--td-comp-margin-xxl);

  &__intro {
    h3 {
      margin: var(--td-comp-margin-l) 0 var(--td-comp-margin-xs);
      font: var(--td-font-title-large);
    }

    p {
      margin-bottom: var(--td-comp-margin-xl);
      color: var(--td-text-color-secondary);
    }
  }
}

.config-hash {
  display: block;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.exam-descriptions .t-descriptions__body table) {
  width: 100%;
  table-layout: fixed;
}

@media (max-width: 992px) {
  .broadcast-workspace {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 800px) {
  .exam-header-action-list {
    justify-content: flex-start;
  }
}
</style>
