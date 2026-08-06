<template>
  <t-head-menu
    :class="`${prefix}-header-menu`"
    :theme="settingStore.displayMode"
    expand-type="popup"
  >
    <template #logo>
      <HeaderSearch />
    </template>
    <template #operations>
      <div class="operations-container">
        <HeaderNotice />
        <t-tooltip placement="bottom" content="项目代码">
          <t-button
            aria-label="打开项目代码"
            theme="default"
            shape="square"
            variant="text"
            @click="openProject"
          >
            <ConsoleIcon name="logo-github" />
          </t-button>
        </t-tooltip>
        <t-tooltip placement="bottom" content="使用帮助">
          <t-button
            aria-label="打开使用帮助"
            theme="default"
            shape="square"
            variant="text"
            @click="openHelp"
          >
            <ConsoleIcon name="help-circle" />
          </t-button>
        </t-tooltip>
        <t-tooltip
          placement="bottom"
          :content="settingStore.displayMode === 'dark' ? '切换浅色模式' : '切换深色模式'"
        >
          <t-button
            :aria-label="settingStore.displayMode === 'dark' ? '切换浅色模式' : '切换深色模式'"
            theme="default"
            shape="square"
            variant="text"
            @click="settingStore.toggleMode"
          >
            <ConsoleIcon :name="settingStore.displayMode === 'dark' ? 'sunny' : 'moon'" />
          </t-button>
        </t-tooltip>
        <t-dropdown :min-column-width="140" trigger="click">
          <template #dropdown>
            <t-dropdown-item
              v-if="session.user?.role === 'admin'"
              class="operations-dropdown-container-item"
              @click="router.push('/governance/users')"
            >
              <ConsoleIcon name="user-circle" />用户管理
            </t-dropdown-item>
            <t-dropdown-item class="operations-dropdown-container-item" @click="signOut">
              <ConsoleIcon name="poweroff" />退出登录
            </t-dropdown-item>
          </template>
          <t-button class="header-user-btn" theme="default" variant="text">
            <template #icon><ConsoleIcon class="header-user-avatar" name="user-circle" /></template>
            <span class="header-user-account">
              {{ session.user?.name || session.user?.displayUsername || session.user?.username }}
            </span>
            <template #suffix><ConsoleIcon name="chevron-down" /></template>
          </t-button>
        </t-dropdown>
        <t-tooltip placement="bottom" content="界面设置">
          <t-button
            aria-label="打开界面设置"
            theme="default"
            shape="square"
            variant="text"
            @click="settingsVisible = true"
          >
            <ConsoleIcon name="setting" />
          </t-button>
        </t-tooltip>
      </div>
    </template>
  </t-head-menu>

  <t-drawer v-model:visible="settingsVisible" header="界面设置" size="360px" :footer="false">
    <div class="appearance-settings">
      <section>
        <strong>主题模式</strong>
        <t-radio-group v-model="modeProxy" variant="default-filled">
          <t-radio-button value="light">浅色</t-radio-button>
          <t-radio-button value="dark">深色</t-radio-button>
          <t-radio-button value="auto">跟随系统</t-radio-button>
        </t-radio-group>
      </section>
      <t-divider />
      <section class="appearance-settings__row">
        <div>
          <strong>收起侧边栏</strong>
          <p>以图标模式显示主导航。</p>
        </div>
        <t-switch v-model="settingStore.isSidebarCompact" />
      </section>
      <section class="appearance-settings__row">
        <div>
          <strong>显示面包屑</strong>
          <p>在标签栏下展示页面层级。</p>
        </div>
        <t-switch v-model="settingStore.showBreadcrumb" />
      </section>
    </div>
  </t-drawer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { prefix } from '@/config/global';
import { useSessionStore, useSettingStore } from '@/store';
import HeaderNotice from './HeaderNotice.vue';
import HeaderSearch from './HeaderSearch.vue';

const router = useRouter();
const session = useSessionStore();
const settingStore = useSettingStore();
const settingsVisible = ref(false);
const modeProxy = computed({
  get: () => settingStore.mode,
  set: (value: 'light' | 'dark' | 'auto') => settingStore.changeMode(value)
});

function openProject() {
  window.open('https://github.com/ExamAware/ExamAware2', '_blank', 'noopener,noreferrer');
}

function openHelp() {
  window.open(
    'https://github.com/ExamAware/ExamAware2/tree/main/docs',
    '_blank',
    'noopener,noreferrer'
  );
}

async function signOut() {
  await session.signOut();
  await router.replace({ name: 'login' });
}
</script>

<style scoped lang="less">
.operations-container {
  padding-right: var(--td-comp-paddingLR-l);
  display: flex;
  align-items: center;

  .t-popup__reference {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > :deep(.t-button),
  > :deep(.t-popup),
  > :deep(.t-badge) {
    margin-left: var(--td-comp-margin-l);
  }
}

.header-user-account {
  display: inline-flex;
  align-items: center;
  color: var(--td-text-color-primary);
}

:deep(.t-head-menu__inner) {
  border-bottom: 1px solid var(--td-component-stroke);
}

.appearance-settings {
  display: flex;
  flex-direction: column;
  gap: var(--td-comp-margin-l);

  section {
    display: flex;
    flex-direction: column;
    gap: var(--td-comp-margin-s);
  }

  p {
    color: var(--td-text-color-secondary);
  }

  &__row {
    align-items: center;
    justify-content: space-between;
    flex-direction: row !important;
    gap: var(--td-comp-margin-xl);

    > div {
      display: flex;
      flex-direction: column;
      gap: var(--td-comp-margin-xs);
    }
  }
}

@media (max-width: 800px) {
  .operations-container {
    padding-right: var(--td-comp-paddingLR-s);

    > :deep(.t-button),
    > :deep(.t-popup),
    > :deep(.t-badge) {
      margin-left: 0;
    }
  }

  .header-user-btn .header-user-account,
  .header-user-btn :deep(.t-button__suffix) {
    display: none;
  }
}
</style>

<style lang="less">
.operations-dropdown-container-item .t-dropdown__item-text {
  display: flex;
  align-items: center;
  gap: var(--td-comp-margin-s);
}
</style>
