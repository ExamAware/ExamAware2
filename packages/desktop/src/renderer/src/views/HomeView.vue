<template>
  <div class="mainpage">
    <t-layout class="mainpage-layout">
      <t-aside width="60px">
        <t-menu v-model="currentMenu" :collapsed="true" @change="handleMenuChange">
          <template #logo>
            <img width="35" class="logo" :src="eaLogo" alt="logo" />
          </template>
          <t-menu-item v-for="item in sidebarItems" :key="item.id" :value="item.id">
            <template #icon>
              <t-icon :name="item.icon || 'app'" />
            </template>
            {{ item.label }}
          </t-menu-item>
        </t-menu>
      </t-aside>
      <t-content class="mainpage-content">
        <router-view />
      </t-content>
    </t-layout>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { FileIcon } from 'tdesign-icons-vue-next'
import eaLogo from '@renderer/assets/logo.svg'
import { usePages, useSidebarPages } from '@renderer/composables/usePages'

const router = useRouter()
const route = useRoute()

const pages = usePages()
const { list: listSidebar } = useSidebarPages(pages)
const sidebarItems = computed(() => listSidebar())
const routeMap = computed(() => Object.fromEntries(sidebarItems.value.map((p) => [p.id, p.path])))

const currentMenu = ref(
  Object.keys(routeMap.value).find((key) => routeMap.value[key] === route.path) || 'home'
)

const handleMenuChange = (value) => {
  const route = routeMap.value[value]
  if (route) {
    router.push(route)
  }
}

watch(route, (newRoute) => {
  currentMenu.value =
    Object.keys(routeMap.value).find((key) => routeMap.value[key] === newRoute.path) || 'home'
})

onMounted(async () => {
  try {
    const autoEnter = await window.api.config.get('behavior.autoEnterPlayer', false)
    if (autoEnter && (route.path === '/' || route.path === '/mainpage')) {
      // 自动进入播放页：有上次放映文件则直接打开播放器，没有则留在主界面
      const LAST_FILE_KEY = 'examaware:last-played-file'
      let lastFile = null
      try {
        lastFile = localStorage.getItem(LAST_FILE_KEY)
      } catch {}
      if (lastFile && lastFile.trim()) {
        window.api?.ipc?.send('open-player-window', lastFile.trim())
      }
    }
  } catch (e) {
    console.error('读取自动进入播放页设置失败', e)
  }
})
</script>

<style scoped>
.mainpage-layout {
  height: 100%;
}

.mainpage-content {
  height: 100%;
  padding: 10px;
  overflow: hidden;
}
</style>
