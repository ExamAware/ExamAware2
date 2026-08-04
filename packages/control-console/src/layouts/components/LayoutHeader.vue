<template>
  <t-head-menu :class="`${prefix}-header-menu`" theme="light">
    <template #logo>
      <div class="header-operate-left">
        <t-button theme="default" shape="square" variant="text" @click="settingStore.toggleSidebar">
          <t-icon name="view-list" />
        </t-button>
        <div>
          <strong>{{ route.meta.title }}</strong>
          <span>校内设备与考试播放控制</span>
        </div>
      </div>
    </template>
    <template #operations>
      <div class="operations-container">
        <t-tooltip :content="settingStore.displayMode === 'dark' ? '切换浅色模式' : '切换深色模式'">
          <t-button theme="default" shape="square" variant="text" @click="settingStore.toggleMode">
            <t-icon :name="settingStore.displayMode === 'dark' ? 'sunny' : 'moon'" />
          </t-button>
        </t-tooltip>
        <t-dropdown :options="accountOptions" trigger="click" @click="handleAccountAction">
          <t-button class="header-user-btn" theme="default" variant="text">
            <template #icon><t-icon name="user-circle" /></template>
            {{ session.user?.name || session.user?.email }}
            <template #suffix><t-icon name="chevron-down" /></template>
          </t-button>
        </t-dropdown>
      </div>
    </template>
  </t-head-menu>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { prefix } from '@/config/global';
import { useSessionStore, useSettingStore } from '@/store';

const route = useRoute();
const router = useRouter();
const session = useSessionStore();
const settingStore = useSettingStore();
const accountOptions = [{ content: '退出登录', value: 'sign-out' }];

async function handleAccountAction(data: { value: string | number }) {
  if (data.value !== 'sign-out') return;
  await session.signOut();
  await router.replace({ name: 'login' });
}
</script>
