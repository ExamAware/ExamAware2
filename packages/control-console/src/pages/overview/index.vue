<template>
  <t-loading :loading="loading" show-overlay>
    <div class="console-page overview-page">
      <PageHeader
        title="运行总览"
        :description="`欢迎回来，${session.user?.name || session.user?.username || '管理员'}。`"
      >
        <template #actions>
          <t-space>
            <t-button variant="outline" :loading="loading" @click="loadDashboard">
              <template #icon><t-icon name="refresh" /></template>
              刷新数据
            </t-button>
            <t-button
              v-if="['admin', 'operator'].includes(session.user?.role ?? '')"
              @click="router.push('/exams/create')"
            >
              <template #icon><t-icon name="play-circle" /></template>
              发起考试
            </t-button>
          </t-space>
        </template>
      </PageHeader>

      <section class="console-metric-grid" aria-label="核心运行指标">
        <MetricTile
          v-for="item in metrics"
          :key="item.title"
          :label="item.title"
          :value="item.value"
          :hint="item.hint"
          :icon="item.icon"
        />
      </section>

      <t-row class="overview-primary-row" :gutter="[16, 16]" align="stretch">
        <t-col class="overview-col" :xs="12" :lg="8">
          <t-card
            class="overview-card"
            title="进行中的考试"
            subtitle="准备中和放映中的考试优先展示"
            :bordered="false"
          >
            <template #actions>
              <t-button variant="text" @click="router.push('/exams/list')">全部考试</t-button>
            </template>
            <t-table row-key="id" :data="activeExams" :columns="examColumns" hover>
              <template #assignedDeviceIds="{ row }"
                >{{ row.assignedDeviceIds.length }} 台</template
              >
              <template #status="{ row }">
                <t-tag :theme="row.status === 'active' ? 'success' : 'warning'" variant="light">
                  {{ row.status === 'active' ? '正在放映' : '准备中' }}
                </t-tag>
              </template>
              <template #updatedAt="{ row }">{{ formatDateTime(row.updatedAt) }}</template>
              <template #operation="{ row }">
                <t-link theme="primary" @click="router.push(`/exams/${row.id}`)">管理</t-link>
              </template>
            </t-table>
          </t-card>
        </t-col>
        <t-col class="overview-col" :xs="12" :lg="4">
          <t-card
            class="overview-card"
            title="快捷工作台"
            subtitle="按角色提供高频考务入口"
            :bordered="false"
          >
            <t-list class="quick-action-list" :split="false">
              <t-list-item v-for="action in quickActions" :key="action.path">
                <t-list-item-meta :title="action.title" :description="action.description">
                  <template #image>
                    <span class="quick-action-icon">
                      <t-icon :name="action.icon" size="24px" />
                    </span>
                  </template>
                </t-list-item-meta>
                <template #action>
                  <t-button variant="text" @click="router.push(action.path)">进入</t-button>
                </template>
              </t-list-item>
            </t-list>
          </t-card>
        </t-col>
      </t-row>

      <t-row :gutter="[16, 16]" align="stretch">
        <t-col class="overview-col" :xs="12" :lg="8">
          <t-card
            class="overview-card"
            title="设备运行分布"
            subtitle="所有已注册客户端的实时连接状态"
            :bordered="false"
          >
            <div ref="deviceChartRef" class="device-chart" />
          </t-card>
        </t-col>
        <t-col class="overview-col" :xs="12" :lg="4">
          <t-card
            class="overview-card"
            title="运行健康度"
            subtitle="用于值班巡检的关键比率"
            :bordered="false"
          >
            <div class="health-score">
              <t-progress theme="circle" :percentage="onlineRate" :size="132" />
              <div>
                <strong>设备在线率</strong>
                <span>{{ onlineDeviceCount }} / {{ devices.length }} 台在线</span>
              </div>
            </div>
            <t-divider />
            <t-list :split="false">
              <t-list-item>
                <span>进行中考试</span>
                <t-tag :theme="activeExams.length ? 'success' : 'default'" variant="light">{{
                  activeExams.length
                }}</t-tag>
              </t-list-item>
              <t-list-item>
                <span>客户端错误</span>
                <t-tag :theme="errorCount ? 'danger' : 'success'" variant="light">{{
                  errorCount
                }}</t-tag>
              </t-list-item>
              <t-list-item>
                <span>累计执行命令</span>
                <strong>{{ commandCount }}</strong>
              </t-list-item>
            </t-list>
          </t-card>
        </t-col>
      </t-row>
    </div>
  </t-loading>
</template>

<script setup lang="ts">
import { PieChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import type { PrimaryTableCol } from 'tdesign-vue-next';
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import MetricTile from '@/components/metric-tile/index.vue';
import PageHeader from '@/components/page-header/index.vue';
import { devicesApi } from '@/api/control/devices';
import { deviceErrorsApi } from '@/api/control/device-errors';
import { examConfigsApi } from '@/api/control/exam-configs';
import { operationsApi } from '@/api/control/operations';
import type { DeviceView, ExamConfigSummary } from '@/api/control/types';
import { useSessionStore } from '@/store';

echarts.use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer]);

const router = useRouter();
const session = useSessionStore();
const loading = ref(false);
const devices = ref<DeviceView[]>([]);
const exams = ref<ExamConfigSummary[]>([]);
const commandCount = ref(0);
const errorCount = ref(0);
const deviceChartRef = ref<HTMLElement>();
let deviceChart: echarts.ECharts | undefined;

const onlineDeviceCount = computed(
  () => devices.value.filter((item) => item.connectionStatus === 'online').length
);
const onlineRate = computed(() =>
  devices.value.length ? Math.round((onlineDeviceCount.value / devices.value.length) * 100) : 0
);
const metrics = computed(() => [
  {
    title: '在线设备',
    value: onlineDeviceCount.value,
    hint: `共 ${devices.value.length} 台已注册`,
    icon: 'desktop'
  },
  {
    title: '考试总数',
    value: exams.value.length,
    hint: `${activeExams.value.length} 场正在处理`,
    icon: 'calendar'
  },
  {
    title: '执行命令',
    value: commandCount.value,
    hint: '累计签发控制命令',
    icon: 'control-platform'
  },
  {
    title: '客户端错误',
    value: errorCount.value,
    hint: errorCount.value ? '建议及时排查' : '当前无待排查错误',
    icon: 'error-circle'
  }
]);
const activeExams = computed(() =>
  exams.value.filter((item) => item.status === 'active' || item.status === 'preparing')
);
const quickActions = computed(() =>
  [
    {
      title: '发起考试',
      description: '上传 .ea2 并选择考场大屏',
      icon: 'play-circle',
      path: '/exams/create',
      roles: ['admin', 'operator']
    },
    {
      title: '注册设备',
      description: '通过向导注册考场大屏',
      icon: 'device-add',
      path: '/devices/enroll',
      roles: ['admin']
    },
    {
      title: '创建用户',
      description: '批量建立校内用户名账户',
      icon: 'user-add',
      path: '/governance/users',
      roles: ['admin']
    }
  ].filter((action) => action.roles.includes(session.user?.role ?? ''))
);
const examColumns: PrimaryTableCol<ExamConfigSummary>[] = [
  { colKey: 'name', title: '考试名称', minWidth: 220, ellipsis: true },
  { colKey: 'status', title: '状态', width: 110 },
  { colKey: 'assignedDeviceIds', title: '已分配设备', width: 120 },
  { colKey: 'updatedAt', title: '更新时间', width: 180 },
  { colKey: 'operation', title: '操作', width: 80 }
];

function formatDateTime(value: string) {
  return new Date(value).toLocaleString('zh-CN');
}

function renderChart() {
  if (!deviceChartRef.value) return;
  deviceChart?.dispose();
  deviceChart = echarts.init(deviceChartRef.value);
  const online = devices.value.filter((item) => item.connectionStatus === 'online').length;
  const offline = devices.value.filter((item) => item.connectionStatus === 'offline').length;
  const never = devices.value.filter((item) => item.connectionStatus === 'never_connected').length;
  const revoked = devices.value.filter((item) => item.connectionStatus === 'revoked').length;
  deviceChart.setOption({
    tooltip: { trigger: 'item' },
    legend: { bottom: 0 },
    series: [
      {
        type: 'pie',
        radius: ['45%', '70%'],
        label: { formatter: '{b}  {c}' },
        data: [
          { name: '在线', value: online },
          { name: '离线', value: offline },
          { name: '从未连接', value: never },
          { name: '已吊销', value: revoked }
        ]
      }
    ]
  });
}

async function loadDashboard() {
  loading.value = true;
  try {
    const [devicePage, examPage, commandPage, errorPage] = await Promise.all([
      devicesApi.list(1, 100),
      examConfigsApi.list(1, 100),
      operationsApi.listCommands(1, 1),
      deviceErrorsApi.list({ page: 1, pageSize: 1 })
    ]);
    devices.value = devicePage.items;
    exams.value = examPage.items;
    commandCount.value = commandPage.total;
    errorCount.value = errorPage.total;
    await nextTick();
    renderChart();
  } finally {
    loading.value = false;
  }
}

const resizeChart = () => deviceChart?.resize();
onMounted(() => {
  void loadDashboard();
  window.addEventListener('resize', resizeChart);
});
onUnmounted(() => {
  window.removeEventListener('resize', resizeChart);
  deviceChart?.dispose();
});
</script>

<style scoped lang="less">
.overview-col {
  display: flex;
}

.overview-card {
  width: 100%;
  height: 100%;
}

.quick-action-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.device-chart {
  width: 100%;
  height: 320px;
}

.health-score {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--td-comp-margin-xl);
  min-height: 184px;

  > div {
    display: flex;
    flex-direction: column;
    gap: var(--td-comp-margin-xs);
  }

  strong {
    font: var(--td-font-title-medium);
  }

  span {
    color: var(--td-text-color-secondary);
  }
}

@media (max-width: 800px) {
  .health-score {
    flex-direction: column;
  }
}
</style>
