<template>
  <div class="settings-page">
    <h2>主题</h2>
    <t-space direction="vertical" size="small" style="width: 100%">
      <t-card title="显示" :bordered="true">
        <div class="settings-item">
          <div class="settings-item-icon">
            <t-icon name="palette" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">明暗风格</div>
            <SettingManagedHint v-if="control.isManaged('appearance.theme')" />
          </div>
          <div class="settings-item-action">
            <t-radio-group v-model="theme" :disabled="control.isManaged('appearance.theme')">
              <t-radio value="auto">跟随系统</t-radio>
              <t-radio value="light">浅色</t-radio>
              <t-radio value="dark">深色</t-radio>
            </t-radio-group>
          </div>
        </div>
      </t-card>

      <t-card title="播放器" :bordered="true">
        <div class="settings-item">
          <div class="settings-item-icon">
            <t-icon name="play-circle" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">播放器主题</div>
          </div>
          <div class="settings-item-action">
            <t-select v-model="themeSelectValue" placeholder="选择播放器主题" style="width: 180px">
              <t-option
                v-for="option in playerThemeOptions"
                :key="option.id"
                :value="option.id"
                :label="option.name"
              />
            </t-select>
          </div>
        </div>
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSettingRef } from '@renderer/composables/useSetting'
import SettingManagedHint from '@renderer/components/SettingManagedHint.vue'
import { useControlAgent } from '@renderer/composables/useControlAgent'
import { useDesktopApi } from '@renderer/runtime/desktopApi'
import { playerThemeContributions } from '@renderer/runtime/pluginApi/contributions'

type ThemeMode = 'light' | 'dark' | 'auto'

const theme = useSettingRef<ThemeMode>('appearance.theme', 'auto')
const control = useControlAgent()
const desktopApi = useDesktopApi()
const themeId = desktopApi.playback.themeId

const playerThemeOptions = computed(() => [
  { id: 'default', name: '默认主题' },
  ...playerThemeContributions.items.value.map((item) => ({
    id: item.id,
    name: item.name
  }))
])

const themeSelectValue = computed({
  get: () =>
    playerThemeOptions.value.some((option) => option.id === themeId.value)
      ? themeId.value
      : 'default',
  set: (value: string) => {
    themeId.value = value
  }
})
</script>

<style scoped>
/* 使用 SettingsShell.vue 中的统一样式，这里无需重复声明 */
</style>
