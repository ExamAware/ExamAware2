<template>
  <div class="console-page enrollment-page">
    <PageHeader
      title="注册设备"
      description="生成一次性注册码，引导客户端安全加入本校集控并预先分配设备组。"
    >
      <template #actions>
        <t-button variant="outline" @click="router.push('/devices/list')">返回设备列表</t-button>
      </template>
    </PageHeader>

    <t-row class="enrollment-workspace" :gutter="[16, 16]" align="stretch">
      <t-col :xs="12" :lg="8">
        <t-card class="enrollment-main" :bordered="false">
          <t-steps :current="step">
            <t-step-item title="注册设置" content="名称、设备组与有效期" />
            <t-step-item title="注册码" content="在客户端输入一次性代码" />
            <t-step-item title="等待上线" content="确认设备完成首次连接" />
          </t-steps>
          <t-divider />

          <t-form v-if="step === 0" :data="form" layout="vertical" @submit="createCode">
            <t-form-item label="设备名称">
              <t-input
                v-model="form.displayName"
                placeholder="例如：A301-考场大屏；留空时由客户端上报"
              />
            </t-form-item>
            <t-form-item label="预分配设备组">
              <t-cascader
                :value="form.partitionNodeIds"
                :options="nodeOptions"
                :popup-props="WIDE_CASCADER_POPUP_PROPS"
                multiple
                filterable
                clearable
                value-mode="parentFirst"
                @change="handlePartitionChange"
              />
            </t-form-item>
            <t-form-item label="有效时间">
              <t-input-number v-model="form.expiresInMinutes" :min="1" :max="10080" suffix="分钟" />
            </t-form-item>
            <t-form-item label="允许使用次数">
              <t-input-number v-model="form.maxUses" :min="1" :max="100" />
            </t-form-item>
            <t-alert
              class="enrollment-alert"
              theme="info"
              message="单台设备建议保持 1 次。批量部署时可增加使用次数。"
            />
            <div class="enrollment-footer">
              <t-button theme="primary" type="submit" :loading="submitting">生成注册码</t-button>
            </div>
          </t-form>

          <div v-else-if="step === 1" class="enrollment-code-stage">
            <t-avatar size="64px"><ConsoleIcon name="device-add" /></t-avatar>
            <p>请在 ExamAware 客户端的“学校集控”页面输入以下代码</p>
            <t-input class="enrollment-code" :value="created?.code" readonly />
            <t-alert
              theme="warning"
              :message="`代码将在 ${formatDateTime(created?.expiresAt)} 失效，仅会显示这一次。`"
            />
            <t-space>
              <t-button variant="outline" @click="copyCode">复制注册码</t-button>
              <t-button theme="primary" @click="step = 2">我已在客户端输入</t-button>
            </t-space>
          </div>

          <div v-else class="enrollment-wait-stage">
            <template v-if="matchedDevice">
              <t-avatar size="64px"><ConsoleIcon name="check" /></t-avatar>
              <h3>设备注册成功</h3>
              <p>
                {{ matchedDevice.displayName }} 已加入集控，当前状态：{{
                  matchedDevice.connectionStatus === 'online' ? '在线' : '离线'
                }}
              </p>
              <t-space>
                <t-button theme="primary" @click="router.push('/devices/list')">查看设备</t-button>
                <t-button variant="outline" @click="restart">继续注册</t-button>
              </t-space>
            </template>
            <template v-else>
              <t-loading size="large" text="等待客户端完成注册" />
              <p>页面每 5 秒自动检查新设备，也可以手动刷新。</p>
              <t-space>
                <t-button theme="primary" @click="checkDevices">立即检查</t-button>
                <t-button theme="danger" variant="text" @click="revokeCode">撤销注册码</t-button>
              </t-space>
            </template>
          </div>
        </t-card>
      </t-col>

      <t-col :xs="12" :lg="4">
        <t-card
          class="enrollment-code-list"
          title="注册码记录"
          subtitle="当前与近期生成的注册码"
          :bordered="false"
        >
          <template #actions>
            <t-tag variant="light"
              >{{ codes.filter((item) => item.status === 'active').length }} 个有效</t-tag
            >
          </template>
          <t-empty v-if="!codes.length" description="尚未生成注册码" />
          <t-list v-else :split="true">
            <t-list-item v-for="item in codes" :key="item.id">
              <t-list-item-meta
                :title="item.displayName || '未预设设备名称'"
                :description="`${item.usedCount} / ${item.maxUses} 次 · ${formatDateTime(item.expiresAt)}`"
              />
              <template #action>
                <t-space direction="vertical" align="end" size="small">
                  <t-tag
                    :theme="item.status === 'active' ? 'success' : 'default'"
                    variant="light"
                    >{{ statusLabel(item.status) }}</t-tag
                  >
                  <t-popconfirm
                    v-if="item.status === 'active'"
                    content="确认撤销该注册码？"
                    @confirm="revoke(item.id)"
                  >
                    <t-button variant="text" theme="danger" size="small">撤销</t-button>
                  </t-popconfirm>
                </t-space>
              </template>
            </t-list-item>
          </t-list>
        </t-card>
      </t-col>
    </t-row>
  </div>
</template>

<script setup lang="ts">
import type { CascaderProps, PrimaryTableCol, SubmitContext } from 'tdesign-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import PageHeader from '@/components/page-header/index.vue';
import { devicesApi } from '@/api/control/devices';
import { partitionsApi } from '@/api/control/partitions';
import type {
  CreatedEnrollmentCode,
  DeviceView,
  EnrollmentCodeStatus,
  EnrollmentCodeView,
  PartitionDimensionDetail
} from '@/api/control/types';
import { ApiError } from '@/api/http';
import {
  WIDE_CASCADER_POPUP_PROPS,
  buildPartitionCascaderOptions,
  enforceSingleSelectionPerDimension
} from '@/utils/partition-options';

const router = useRouter();
const step = ref(0);
const submitting = ref(false);
const created = ref<CreatedEnrollmentCode>();
const codes = ref<EnrollmentCodeView[]>([]);
const dimensions = ref<PartitionDimensionDetail[]>([]);
const matchedDevice = ref<DeviceView>();
const devicesBefore = ref(new Set<string>());
let checkTimer: number | undefined;
const form = reactive({
  displayName: '',
  partitionNodeIds: [] as string[],
  expiresInMinutes: 30,
  maxUses: 1
});
const nodeOptions = computed(() => buildPartitionCascaderOptions(dimensions.value));
const handlePartitionChange: NonNullable<CascaderProps['onChange']> = (value) => {
  const values = (Array.isArray(value) ? value : [value]).map(String);
  const selected = values.find((item) => !form.partitionNodeIds.includes(item));
  form.partitionNodeIds = enforceSingleSelectionPerDimension(
    values,
    selected,
    Boolean(selected),
    dimensions.value
  );
};
const columns: PrimaryTableCol<EnrollmentCodeView>[] = [
  { colKey: 'displayName', title: '预设设备名称', minWidth: 200 },
  { colKey: 'status', title: '状态', width: 100 },
  { colKey: 'uses', title: '使用次数', width: 110 },
  { colKey: 'expiresAt', title: '失效时间', width: 180 },
  { colKey: 'operation', title: '操作', width: 90 }
];
function statusLabel(status: EnrollmentCodeStatus) {
  return { active: '有效', expired: '已过期', consumed: '已用完', revoked: '已撤销' }[status];
}
function formatDateTime(value?: string) {
  return value ? new Date(value).toLocaleString('zh-CN') : '—';
}
async function loadBase() {
  const [codeList, dimensionList, devicePage] = await Promise.all([
    devicesApi.listEnrollmentCodes(),
    partitionsApi.listDimensions(),
    devicesApi.list(1, 100)
  ]);
  codes.value = codeList;
  dimensions.value = await Promise.all(
    dimensionList.map((item) => partitionsApi.getDimension(item.id))
  );
  devicesBefore.value = new Set(devicePage.items.map((item) => item.id));
}
async function createCode(context: SubmitContext) {
  if (context.validateResult !== true) return;
  submitting.value = true;
  try {
    created.value = await devicesApi.createEnrollmentCode({
      displayName: form.displayName || undefined,
      partitionNodeIds: form.partitionNodeIds,
      expiresInMinutes: form.expiresInMinutes,
      maxUses: form.maxUses
    });
    step.value = 1;
    codes.value = await devicesApi.listEnrollmentCodes();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '注册码创建失败');
  } finally {
    submitting.value = false;
  }
}
async function copyCode() {
  if (created.value) {
    await navigator.clipboard.writeText(created.value.code);
    await MessagePlugin.success('注册码已复制');
  }
}
async function checkDevices() {
  const page = await devicesApi.list(1, 100);
  matchedDevice.value = page.items.find((item) => !devicesBefore.value.has(item.id));
  if (matchedDevice.value && checkTimer) window.clearInterval(checkTimer);
}
async function revoke(id: string) {
  await devicesApi.revokeEnrollmentCode(id);
  codes.value = await devicesApi.listEnrollmentCodes();
  await MessagePlugin.success('注册码已撤销');
}
async function revokeCode() {
  if (created.value) {
    await revoke(created.value.id);
    restart();
  }
}
function restart() {
  step.value = 0;
  created.value = undefined;
  matchedDevice.value = undefined;
  Object.assign(form, { displayName: '', partitionNodeIds: [], expiresInMinutes: 30, maxUses: 1 });
}
watch(step, (value) => {
  if (checkTimer) window.clearInterval(checkTimer);
  if (value === 2) {
    void checkDevices();
    checkTimer = window.setInterval(() => void checkDevices(), 5000);
  }
});
onMounted(() => void loadBase());
onUnmounted(() => {
  if (checkTimer) window.clearInterval(checkTimer);
});
</script>

<style scoped lang="less">
.enrollment-main {
  min-height: 600px;
}

.enrollment-code-list {
  position: sticky;
  top: var(--td-comp-margin-l);
  max-height: calc(100vh - 160px);
  overflow: auto;
}

.enrollment-alert {
  margin-top: var(--td-comp-margin-m);
}

.enrollment-footer {
  margin-top: var(--td-comp-margin-xl);
  padding-top: var(--td-comp-paddingTB-l);
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid var(--td-border-level-1-color);
}

.enrollment-code-stage,
.enrollment-wait-stage {
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--td-comp-margin-xl);
  text-align: center;
}

.enrollment-code {
  width: min(420px, 100%);
}

@media (max-width: 992px) {
  .enrollment-code-list {
    position: static;
    max-height: none;
  }
}
</style>
