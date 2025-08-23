<template>
  <div class="mainpage">
    <t-layout class="mainpage-layout">
      <t-aside width="60px">
        <t-menu theme="dark" v-model="currentMenu" :collapsed="true" @change="handleMenuChange">
          <template #logo>
            <img width="35" class="logo" :src="eaLogo" alt="logo" />
          </template>
          <t-menu-item value="home">
            <template #icon>
              <t-icon name="home" />
            </template>
            主页
          </t-menu-item>
          <t-menu-item value="playerhome">
            <template #icon>
              <t-icon name="play-circle" />
            </template>
            放映器
          </t-menu-item>
          <t-menu-item value="ntpsettings">
            <template #icon>
              <t-icon name="time" />
            </template>
            NTP 设置
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
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { FileIcon } from 'tdesign-icons-vue-next'
import eaLogo from "@renderer/assets/logo.svg"

const router = useRouter()
const route = useRoute()

const routeMap = {
  // 侧栏
  home: '/mainpage',
  playerhome: '/playerhome',
  ntpsettings: '/ntpsettings'
}

const currentMenu = ref(Object.keys(routeMap).find((key) => routeMap[key] === route.path) || 'home')

const handleMenuChange = (value) => {
  const route = routeMap[value]
  if (route) {
    router.push(route)
  }
}

watch(route, (newRoute) => {
  currentMenu.value = Object.keys(routeMap).find((key) => routeMap[key] === newRoute.path) || 'home'
})
</script>

<style scoped>
.mainpage-layout {
  height: 100%;
}

.mainpage-content {
  height: 100%;
  padding: 10px;
  overflow: auto;
}
</style>
