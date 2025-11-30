<template>
  <div class="settings-page">
    <h2>外观</h2>
    <t-space direction="vertical" size="small" style="width: 100%">
      <t-card title="主题模式" :bordered="true">
        <div class="settings-item">
          <div class="settings-item-icon">
            <t-icon name="palette" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">界面主题</div>
            <div class="settings-item-desc">浅色、深色或跟随系统自动切换</div>
          </div>
          <div class="settings-item-action">
            <t-radio-group v-model="theme">
              <t-radio value="auto">跟随系统</t-radio>
              <t-radio value="light">浅色</t-radio>
              <t-radio value="dark">深色</t-radio>
            </t-radio-group>
          </div>
        </div>
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { useSettingRef } from '@renderer/composables/useSetting'

type ThemeMode = 'light' | 'dark' | 'auto'

const theme = useSettingRef<ThemeMode>('appearance.theme', 'auto')
</script>

<style scoped>
/* 使用 SettingsShell.vue 中的统一样式，这里无需重复声明 */
</style>
