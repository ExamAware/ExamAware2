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
      <t-card title="播放器主题" :bordered="true">
        <div class="settings-item">
          <div class="settings-item-icon">
            <t-icon name="layout" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">播放器布局</div>
            <div class="settings-item-desc">选择播放器的显示布局风格</div>
          </div>
          <div class="settings-item-action">
            <t-radio-group v-model="playerTheme">
              <t-radio value="classic">经典</t-radio>
              <t-radio value="enhanced">增强</t-radio>
            </t-radio-group>
          </div>
        </div>
        <div v-if="playerTheme === 'classic'" class="settings-item">
          <div class="settings-item-icon">
            <t-icon name="file" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">显示页数统计</div>
            <div class="settings-item-desc">在考试信息卡片中显示试卷/答题卡页数</div>
          </div>
          <div class="settings-item-action">
            <t-switch v-model="classicShowMaterial" />
          </div>
        </div>
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { useSettingRef } from '@renderer/composables/useSetting'

type ThemeMode = 'light' | 'dark' | 'auto'
type PlayerTheme = 'classic' | 'enhanced'

const theme = useSettingRef<ThemeMode>('appearance.theme', 'auto')
const playerTheme = useSettingRef<PlayerTheme>('appearance.playerTheme', 'enhanced')
const classicShowMaterial = useSettingRef<boolean>('appearance.classicShowMaterial', false)
</script>

<style scoped>
/* 使用 SettingsShell.vue 中的统一样式，这里无需重复声明 */
</style>
