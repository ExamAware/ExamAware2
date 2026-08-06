<template>
  <t-popup
    expand-animation
    placement="bottom-right"
    trigger="click"
    @visible-change="handleVisibleChange"
  >
    <template #content>
      <div class="header-msg">
        <div class="header-msg-top">
          <p>巡考呼叫</p>
          <t-button
            v-if="pendingCalls.length > 0 && canAcknowledge"
            class="clear-btn"
            variant="text"
            theme="primary"
            :loading="clearing"
            @click="acknowledgeAll"
            >全部响应</t-button
          >
        </div>
        <t-list v-if="pendingCalls.length > 0" class="narrow-scrollbar" :split="false">
          <t-list-item v-for="item in pendingCalls" :key="item.id">
            <div>
              <p class="msg-content">{{ item.deviceDisplayName }}</p>
              <p class="msg-type">
                {{ item.roomNumber ? `考场 ${item.roomNumber}` : '考场大屏呼叫' }}
              </p>
            </div>
            <p class="msg-time">{{ formatTime(item.occurredAt) }}</p>
            <template #action>
              <t-button
                v-if="canAcknowledge"
                size="small"
                variant="outline"
                @click="acknowledge(item.id)"
                >已响应</t-button
              >
            </template>
          </t-list-item>
        </t-list>

        <div v-else class="empty-list">
          <img src="https://tdesign.gtimg.com/pro-template/personal/nothing.png" alt="空" />
          <p>暂无待处理呼叫</p>
        </div>
        <div class="header-msg-bottom">
          <t-button
            class="header-msg-bottom-link"
            variant="text"
            theme="default"
            block
            @click="goDeviceErrors"
          >
            查看客户端诊断
          </t-button>
        </div>
      </div>
    </template>
    <t-badge :count="pendingCalls.length" :offset="[4, 4]">
      <t-button aria-label="查看巡考呼叫" theme="default" shape="square" variant="text">
        <t-icon name="mail" />
      </t-button>
    </t-badge>
  </t-popup>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { useRouter } from 'vue-router';
import { proctorCallsApi } from '@/api/control/proctor-calls';
import type { ProctorCallView } from '@/api/control/types';
import { ApiError } from '@/api/http';
import { useSessionStore } from '@/store';

const router = useRouter();
const session = useSessionStore();
const pendingCalls = ref<ProctorCallView[]>([]);
const loading = ref(false);
const clearing = ref(false);
const canAcknowledge = computed(() => ['admin', 'operator'].includes(session.user?.role ?? ''));

async function loadPending() {
  if (loading.value) return;
  loading.value = true;
  try {
    pendingCalls.value = (await proctorCallsApi.listPending()).items;
  } catch (error) {
    if (!(error instanceof ApiError && error.status === 401)) {
      await MessagePlugin.error(error instanceof ApiError ? error.message : '巡考呼叫加载失败');
    }
  } finally {
    loading.value = false;
  }
}

function handleVisibleChange(visible: boolean) {
  if (visible) void loadPending();
}

function formatTime(value: string) {
  return new Date(value).toLocaleString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

async function acknowledge(id: string) {
  try {
    await proctorCallsApi.acknowledge(id);
    pendingCalls.value = pendingCalls.value.filter((item) => item.id !== id);
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '巡考呼叫确认失败');
  }
}

async function acknowledgeAll() {
  clearing.value = true;
  try {
    for (const item of [...pendingCalls.value]) await acknowledge(item.id);
  } finally {
    clearing.value = false;
  }
}

function goDeviceErrors() {
  void router.push('/governance/device-errors');
}
</script>

<style scoped lang="less">
.header-msg {
  width: 400px;
  margin: calc(0px - var(--td-comp-paddingTB-xs)) calc(0px - var(--td-comp-paddingLR-s));

  .empty-list {
    padding: var(--td-comp-paddingTB-xxl) 0;
    color: var(--td-text-color-secondary);
    font: var(--td-font-body-medium);
    text-align: center;

    img {
      width: var(--td-comp-size-xxxxl);
    }

    p {
      margin-top: var(--td-comp-margin-xs);
    }
  }

  &-top {
    position: relative;
    padding: var(--td-comp-paddingTB-l) var(--td-comp-paddingLR-xl) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--td-text-color-primary);
    font: var(--td-font-title-medium);
    text-align: left;
  }

  &-bottom {
    padding: var(--td-comp-paddingTB-s) var(--td-comp-paddingLR-s);
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--td-component-stroke);

    &-link {
      color: var(--td-text-color-placeholder);
      text-decoration: none;
      cursor: pointer;
    }
  }

  .t-list {
    max-height: 360px;
    padding: var(--td-comp-margin-s);
    overflow: auto;
  }

  .t-list-item {
    width: 100%;
    padding: var(--td-comp-paddingTB-l) var(--td-comp-paddingLR-l);
    border-radius: var(--td-radius-default);
    color: var(--td-text-color-primary);
    font: var(--td-font-body-medium);
    cursor: pointer;
    transition: background-color 0.2s linear;

    &:hover {
      background-color: var(--td-bg-color-container-hover);

      .msg-content {
        color: var(--td-brand-color);
      }
    }

    .msg-content {
      margin-bottom: var(--td-comp-margin-s);
    }

    .msg-type,
    .msg-time {
      color: var(--td-text-color-secondary);
    }
  }
}
</style>
