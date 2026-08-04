<template>
  <t-space direction="vertical" size="large">
    <t-card title="设备" subtitle="查看客户端连接状态、版本和能力声明">
      <template #actions>
        <t-space>
          <t-button variant="outline" :loading="loading" @click="loadDevices">刷新</t-button>
          <t-button v-if="isAdmin" @click="openEnrollmentDialog">生成注册码</t-button>
        </t-space>
      </template>

      <t-alert
        v-if="errorMessage"
        theme="error"
        :message="errorMessage"
        close
        @close="errorMessage = ''"
      />
      <t-table row-key="id" :data="devices" :columns="deviceColumns" :loading="loading" hover>
        <template #connectionStatus="{ row }">
          <t-tag :theme="connectionTheme(row.connectionStatus)" variant="light">
            {{ connectionLabel(row.connectionStatus) }}
          </t-tag>
        </template>
        <template #identity="{ row }">
          <t-space direction="vertical" size="small">
            <span>{{ row.platform || '未知平台' }} / {{ row.architecture || '未知架构' }}</span>
            <t-tag v-if="row.appVersion" variant="outline">{{ row.appVersion }}</t-tag>
          </t-space>
        </template>
        <template #capabilities="{ row }">
          <t-tag v-if="row.lastCapabilities" theme="success" variant="light">
            {{ row.lastCapabilities.commands.length }} 项能力
          </t-tag>
          <t-tag v-else theme="warning" variant="light">未上报</t-tag>
        </template>
        <template #partitions="{ row }">
          <t-space v-if="row.partitions.length" break-line size="small">
            <t-tag v-for="partition in row.partitions" :key="partition.nodeId" variant="outline">
              {{ partition.dimensionName }}：{{ partition.nodeName }}
            </t-tag>
          </t-space>
          <span v-else>未分区</span>
        </template>
        <template #lastSeenAt="{ row }">{{ formatDateTime(row.lastSeenAt) }}</template>
        <template #operation="{ row }">
          <t-space v-if="isAdmin" size="small">
            <t-popconfirm
              content="轮换后旧凭证及当前连接会立即失效，确认继续？"
              @confirm="rotateCredential(row)"
            >
              <t-button
                theme="primary"
                variant="text"
                :disabled="row.lifecycleStatus === 'revoked'"
              >
                轮换凭证
              </t-button>
            </t-popconfirm>
            <t-popconfirm
              content="吊销后设备将立即断开且无法重新认证，确认继续？"
              @confirm="revokeDevice(row)"
            >
              <t-button theme="danger" variant="text" :disabled="row.lifecycleStatus === 'revoked'">
                吊销
              </t-button>
            </t-popconfirm>
          </t-space>
        </template>
      </t-table>
      <t-pagination
        v-model="page"
        v-model:page-size="pageSize"
        :total="total"
        show-jumper
        @change="loadDevices"
      />
    </t-card>

    <t-card title="注册码" subtitle="明文注册码仅在创建成功后展示一次">
      <template #actions>
        <t-button variant="text" :loading="codesLoading" @click="loadEnrollmentCodes"
          >刷新</t-button
        >
      </template>
      <t-table
        row-key="id"
        :data="enrollmentCodes"
        :columns="codeColumns"
        :loading="codesLoading"
        hover
      >
        <template #status="{ row }">
          <t-tag :theme="codeTheme(row.status)" variant="light">{{ codeLabel(row.status) }}</t-tag>
        </template>
        <template #usage="{ row }">{{ row.usedCount }} / {{ row.maxUses }}</template>
        <template #expiresAt="{ row }">{{ formatDateTime(row.expiresAt) }}</template>
        <template #codeOperation="{ row }">
          <t-popconfirm
            v-if="isAdmin && row.status === 'active'"
            content="确认撤销该注册码？"
            @confirm="revokeEnrollmentCode(row)"
          >
            <t-button theme="danger" variant="text">撤销</t-button>
          </t-popconfirm>
        </template>
      </t-table>
    </t-card>
  </t-space>

  <t-dialog v-model:visible="enrollmentDialogVisible" header="生成设备注册码" :footer="false">
    <t-form
      v-if="!createdEnrollment"
      :data="enrollmentForm"
      :rules="enrollmentRules"
      @submit="createEnrollmentCode"
    >
      <t-form-item label="设备名称" name="displayName">
        <t-input v-model="enrollmentForm.displayName" placeholder="例如：一号教学楼 101 室" />
      </t-form-item>
      <t-form-item label="有效期" name="expiresInMinutes">
        <t-input-number
          v-model="enrollmentForm.expiresInMinutes"
          :min="1"
          :max="10080"
          suffix="分钟"
        />
      </t-form-item>
      <t-form-item label="使用次数" name="maxUses">
        <t-input-number v-model="enrollmentForm.maxUses" :min="1" :max="100" />
      </t-form-item>
      <t-form-item>
        <t-space>
          <t-button theme="primary" type="submit" :loading="creatingEnrollment">生成</t-button>
          <t-button variant="outline" @click="enrollmentDialogVisible = false">取消</t-button>
        </t-space>
      </t-form-item>
    </t-form>
    <t-space v-else direction="vertical" size="large">
      <t-alert
        theme="warning"
        title="请立即复制并安全传递"
        message="关闭窗口后无法再次查看该注册码。"
      />
      <t-input :value="createdEnrollment.code" readonly />
      <t-space>
        <t-button @click="copySecret(createdEnrollment.code)">复制注册码</t-button>
        <t-button variant="outline" @click="closeEnrollmentDialog">完成</t-button>
      </t-space>
    </t-space>
  </t-dialog>

  <t-dialog v-model:visible="credentialDialogVisible" header="新设备凭证" :footer="false">
    <t-space v-if="rotatedCredential" direction="vertical" size="large">
      <t-alert
        theme="warning"
        title="凭证仅展示一次"
        message="客户端必须使用新凭证重新建立连接。"
      />
      <t-input :value="rotatedCredential.credential" readonly />
      <t-space>
        <t-button @click="copySecret(rotatedCredential.credential)">复制凭证</t-button>
        <t-button variant="outline" @click="credentialDialogVisible = false">完成</t-button>
      </t-space>
    </t-space>
  </t-dialog>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import type { FormRules, PrimaryTableCol, SubmitContext, TagProps } from 'tdesign-vue-next';
import { ApiError } from '@/api/http';
import { devicesApi } from '@/api/control/devices';
import type {
  CreatedEnrollmentCode,
  DeviceConnectionStatus,
  DeviceView,
  EnrollmentCodeStatus,
  EnrollmentCodeView,
  RotatedDeviceCredential
} from '@/api/control/types';
import { useSessionStore } from '@/store';

const sessionStore = useSessionStore();
const isAdmin = computed(() => sessionStore.user?.role === 'admin');
const devices = ref<DeviceView[]>([]);
const enrollmentCodes = ref<EnrollmentCodeView[]>([]);
const loading = ref(false);
const codesLoading = ref(false);
const errorMessage = ref('');
const page = ref(1);
const pageSize = ref(20);
const total = ref(0);
const enrollmentDialogVisible = ref(false);
const creatingEnrollment = ref(false);
const createdEnrollment = ref<CreatedEnrollmentCode>();
const credentialDialogVisible = ref(false);
const rotatedCredential = ref<RotatedDeviceCredential>();
const enrollmentForm = reactive({ displayName: '', expiresInMinutes: 30, maxUses: 1 });

const enrollmentRules: FormRules = {
  displayName: [{ required: true, message: '请输入设备名称', trigger: 'blur' }],
  expiresInMinutes: [{ required: true, message: '请输入有效期' }],
  maxUses: [{ required: true, message: '请输入最大使用次数' }]
};

const deviceColumns: PrimaryTableCol<DeviceView>[] = [
  { colKey: 'displayName', title: '设备', minWidth: 160 },
  { colKey: 'connectionStatus', title: '连接状态', width: 110 },
  { colKey: 'identity', title: '客户端', minWidth: 170 },
  { colKey: 'capabilities', title: '能力', width: 100 },
  { colKey: 'partitions', title: '分区', minWidth: 220 },
  { colKey: 'lastSeenAt', title: '最后在线', width: 180 },
  { colKey: 'operation', title: '操作', width: 180, fixed: 'right' }
];

const codeColumns: PrimaryTableCol<EnrollmentCodeView>[] = [
  { colKey: 'displayName', title: '预设设备名称', minWidth: 180 },
  { colKey: 'status', title: '状态', width: 100 },
  { colKey: 'usage', title: '使用次数', width: 100 },
  { colKey: 'expiresAt', title: '过期时间', width: 180 },
  { colKey: 'codeOperation', title: '操作', width: 90 }
];

function formatDateTime(value: string | null): string {
  return value ? new Date(value).toLocaleString('zh-CN') : '从未连接';
}

function connectionLabel(status: DeviceConnectionStatus): string {
  return {
    online: '在线',
    offline: '离线',
    never_connected: '从未连接',
    revoked: '已吊销'
  }[status];
}

function connectionTheme(status: DeviceConnectionStatus): TagProps['theme'] {
  return { online: 'success', offline: 'default', never_connected: 'warning', revoked: 'danger' }[
    status
  ] as TagProps['theme'];
}

function codeLabel(status: EnrollmentCodeStatus): string {
  return { active: '可用', expired: '已过期', consumed: '已用完', revoked: '已撤销' }[status];
}

function codeTheme(status: EnrollmentCodeStatus): TagProps['theme'] {
  return { active: 'success', expired: 'warning', consumed: 'default', revoked: 'danger' }[
    status
  ] as TagProps['theme'];
}

async function loadDevices() {
  loading.value = true;
  errorMessage.value = '';
  try {
    const result = await devicesApi.list(page.value, pageSize.value);
    devices.value = result.items;
    total.value = result.total;
  } catch (error) {
    errorMessage.value = error instanceof ApiError ? error.message : '设备列表加载失败';
  } finally {
    loading.value = false;
  }
}

async function loadEnrollmentCodes() {
  codesLoading.value = true;
  try {
    enrollmentCodes.value = await devicesApi.listEnrollmentCodes();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '注册码加载失败');
  } finally {
    codesLoading.value = false;
  }
}

function openEnrollmentDialog() {
  createdEnrollment.value = undefined;
  enrollmentForm.displayName = '';
  enrollmentForm.expiresInMinutes = 30;
  enrollmentForm.maxUses = 1;
  enrollmentDialogVisible.value = true;
}

async function createEnrollmentCode(context: SubmitContext) {
  if (context.validateResult !== true) return;
  creatingEnrollment.value = true;
  try {
    createdEnrollment.value = await devicesApi.createEnrollmentCode({
      displayName: enrollmentForm.displayName,
      partitionNodeIds: [],
      expiresInMinutes: enrollmentForm.expiresInMinutes,
      maxUses: enrollmentForm.maxUses
    });
    await loadEnrollmentCodes();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '注册码生成失败');
  } finally {
    creatingEnrollment.value = false;
  }
}

function closeEnrollmentDialog() {
  enrollmentDialogVisible.value = false;
  createdEnrollment.value = undefined;
}

async function revokeEnrollmentCode(row: EnrollmentCodeView) {
  try {
    await devicesApi.revokeEnrollmentCode(row.id);
    await MessagePlugin.success('注册码已撤销');
    await loadEnrollmentCodes();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '注册码撤销失败');
  }
}

async function rotateCredential(row: DeviceView) {
  try {
    rotatedCredential.value = await devicesApi.rotateCredential(row.id);
    credentialDialogVisible.value = true;
    await MessagePlugin.success('设备凭证已轮换');
    await loadDevices();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '凭证轮换失败');
  }
}

async function revokeDevice(row: DeviceView) {
  try {
    await devicesApi.revoke(row.id);
    await MessagePlugin.success('设备已吊销');
    await loadDevices();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '设备吊销失败');
  }
}

async function copySecret(secret: string) {
  await navigator.clipboard.writeText(secret);
  await MessagePlugin.success('已复制');
}

onMounted(() => {
  void Promise.all([loadDevices(), loadEnrollmentCodes()]);
});
</script>
