<template>
  <div class="header-menu-search">
    <t-popup v-model="popupVisible" placement="bottom-left" :show-arrow="false">
      <t-input
        v-model="keyword"
        class="header-search"
        :class="[{ 'hover-active': focused }]"
        placeholder="搜索菜单"
        clearable
        @blur="handleBlur"
        @focus="handleFocus"
        @enter="openFirst"
      >
        <template #prefix-icon>
          <ConsoleIcon class="icon" name="search" size="16" />
        </template>
      </t-input>
      <template #content>
        <div class="header-search-results">
          <button
            v-for="item in results"
            :key="item.path"
            type="button"
            @mousedown.prevent="navigate(item.path)"
          >
            <ConsoleIcon :name="item.icon || 'app'" />
            <span>{{ item.title }}</span>
            <small>{{ item.path }}</small>
          </button>
          <div v-if="!results.length" class="header-search-empty">未找到匹配菜单</div>
        </div>
      </template>
    </t-popup>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSessionStore } from '@/store';

const router = useRouter();
const session = useSessionStore();
const keyword = ref('');
const focused = ref(false);
const popupVisible = ref(false);
const routes = computed(() =>
  router
    .getRoutes()
    .filter((route) => route.meta.hidden !== true && typeof route.meta.title === 'string')
    .filter((route) => {
      const roles = route.meta.roles;
      return !Array.isArray(roles) || roles.includes(session.user?.role ?? '');
    })
    .filter((route) => route.path && !route.path.includes(':') && route.path !== '/')
    .map((route) => ({
      path: route.path,
      title: String(route.meta.title),
      icon: typeof route.meta.icon === 'string' ? route.meta.icon : ''
    }))
);
const results = computed(() => {
  const term = keyword.value.trim().toLowerCase();
  return routes.value
    .filter((item) => !term || item.title.toLowerCase().includes(term) || item.path.includes(term))
    .slice(0, 8);
});

function handleFocus() {
  focused.value = true;
  popupVisible.value = true;
}
function handleBlur() {
  focused.value = false;
  window.setTimeout(() => {
    popupVisible.value = false;
  }, 120);
}
function navigate(path: string) {
  popupVisible.value = false;
  keyword.value = '';
  void router.push(path);
}
function openFirst() {
  const first = results.value[0];
  if (first) navigate(first.path);
}
</script>

<style scoped lang="less">
.header-menu-search {
  display: flex;
  margin-left: 16px;

  .hover-active {
    background: var(--td-bg-color-secondarycontainer);
  }

  .t-icon {
    color: var(--td-text-color-primary) !important;
  }

  .header-search {
    width: 240px;

    :deep(.t-input) {
      border: none;
      outline: none;
      box-shadow: none;
      transition: background 0.2s linear;

      .t-input__inner {
        transition: background 0.2s linear;
        background: none;
      }

      &:hover {
        background: var(--td-bg-color-secondarycontainer);

        .t-input__inner {
          background: var(--td-bg-color-secondarycontainer);
        }
      }
    }
  }
}

.header-search-results {
  width: 360px;
  padding: var(--td-comp-paddingTB-s);

  button {
    width: 100%;
    min-height: 42px;
    padding: 0 var(--td-comp-paddingLR-l);
    display: grid;
    grid-template-columns: 24px minmax(0, 1fr) auto;
    align-items: center;
    gap: var(--td-comp-margin-s);
    border: 0;
    border-radius: var(--td-radius-default);
    color: var(--td-text-color-primary);
    background: transparent;
    text-align: left;
    cursor: pointer;

    &:hover {
      color: var(--td-brand-color);
      background: var(--td-bg-color-container-hover);
    }

    small {
      color: var(--td-text-color-placeholder);
    }
  }
}

.header-search-empty {
  padding: var(--td-comp-paddingTB-xl);
  color: var(--td-text-color-secondary);
  text-align: center;
}

@media (max-width: 800px) {
  .header-menu-search {
    margin-left: 4px;

    .header-search {
      width: 160px;
    }
  }
}
</style>
