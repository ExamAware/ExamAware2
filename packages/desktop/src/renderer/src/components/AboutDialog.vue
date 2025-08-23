<template>
  <t-dialog
    v-bind:visible="visible"
    theme="info"
    header="关于 DSZ知试"
    :cancel-btn="{
      content: '确定',
      variant: 'outline',
    }"
    :confirm-btn="{
      content: '复制',
      variant: 'base',
    }"
    :on-close="close1"
    :on-confirm="copyToClipboard"
  >
    <template #body>
      <t-list :split="true">
        <t-list-item>
          <t-list-item-meta title="App 版本" :description="versionInfo.appVersion" />
        </t-list-item>
        <t-list-item>
          <t-list-item-meta title="浏览器" :description="versionInfo.browserVersion" />
        </t-list-item>
        <t-list-item>
          <t-list-item-meta title="User Agent" :description="versionInfo.userAgent" />
        </t-list-item>
      </t-list>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { NotifyPlugin } from 'tdesign-vue-next'

import packageJson from '../../../../package.json'

const versionInfo = ref({
  appVersion: packageJson.version,
  userAgent: navigator.userAgent,
  browserVersion: (() => {
    const ua = navigator.userAgent
    let tem,
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || []
      return `IE ${tem[1] || ''}`
    }
    if (M[1] === 'Chrome') {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/)
      if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera')
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?']
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1])
    return M.join(' ')
  })(),
})

const readableVersionInfo = computed(() => {
  return `About DSZ ExamAware\n============\nApp Version: ${versionInfo.value.appVersion}\nBrowser: ${versionInfo.value.browserVersion}\nUser Agent: ${versionInfo.value.userAgent}`
})

const props = defineProps({
  visible: Boolean,
})

const emit = defineEmits(['update:closedialog'])

function close1() {
  console.log('close1')
  emit('update:closedialog')
}

function copyToClipboard() {
  navigator.clipboard
    .writeText(readableVersionInfo.value)
    .then(() => {
      NotifyPlugin.success({
        title: '复制成功',
        content: '“关于”信息已复制到您的剪贴板',
        placement: 'bottom-right',
        closeBtn: true,
      })
    })
    .catch((err) => {
      NotifyPlugin.error({
        title: '复制失败',
        content: err,
        placement: 'bottom-right',
        closeBtn: true,
      })
    })
}
</script>
