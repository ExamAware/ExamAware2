<template>
  <section class="overview-page">
    <t-card title="控制服务" subtitle="当前浏览器到校内控制服务的实时检查">
      <t-loading :loading="loading" show-overlay>
        <t-descriptions v-if="health" :column="2" bordered>
          <t-descriptions-item label="运行状态">
            <t-tag theme="success" variant="light">{{ health.status }}</t-tag>
          </t-descriptions-item>
          <t-descriptions-item label="就绪状态">
            <t-tag :theme="readinessTheme" variant="light">{{ readinessLabel }}</t-tag>
          </t-descriptions-item>
        </t-descriptions>
        <t-alert v-else-if="errorMessage" theme="error" :message="errorMessage" />
      </t-loading>
      <template #actions>
        <t-button variant="text" @click="loadHealth">重新检查</t-button>
      </template>
    </t-card>

    <t-card title="接入顺序" subtitle="从可验证的基础设施开始建立学校控制面">
      <t-steps layout="vertical" :current="0">
        <t-step-item title="建立组织分区" content="按校区、楼栋、楼层或班级建立独立层级。" />
        <t-step-item title="生成一次性注册码" content="由管理员为新设备签发限时注册码。" />
        <t-step-item title="接入客户端" content="客户端保存独立凭证并主动建立 WSS 连接。" />
        <t-step-item title="部署考试配置" content="先准备和校验，再统一激活播放。" />
      </t-steps>
    </t-card>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { healthApi } from '@/api/health';
import type { HealthResponse } from '@/api/health';
import { ApiError } from '@/api/http';

const health = ref<HealthResponse>();
const ready = ref(false);
const loading = ref(false);
const errorMessage = ref('');
const readinessLabel = computed(() => (ready.value ? '数据库已就绪' : '数据库未就绪'));
const readinessTheme = computed(() => (ready.value ? 'success' : 'warning'));

async function loadHealth() {
  loading.value = true;
  errorMessage.value = '';
  try {
    health.value = await healthApi.live();
    await healthApi.ready();
    ready.value = true;
  } catch (error) {
    ready.value = false;
    errorMessage.value = error instanceof ApiError ? error.message : '无法连接控制服务。';
  } finally {
    loading.value = false;
  }
}

onMounted(() => void loadHealth());
</script>

<style scoped lang="less">
.overview-page {
  display: grid;
  gap: var(--td-comp-margin-xxl);
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 960px) {
  .overview-page {
    grid-template-columns: 1fr;
  }
}
</style>
