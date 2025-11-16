<template>
  <div class="settings-page">
    <h2>播放器</h2>
    <t-space direction="vertical" size="small" style="width: 100%">
      <t-card title="默认参数" theme="poster2">
        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="play-circle" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">默认考场号</div>
            <div class="settings-item-desc">用于播放器窗口首次打开时的默认考场号。</div>
          </div>
          <div class="settings-item-action">
            <t-input
              v-model="defaultRoom"
              placeholder="例如：01"
              :maxlength="8"
              style="width: 180px"
              @blur="normalizeRoom"
            />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="upscale" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">默认界面缩放</div>
            <div class="settings-item-desc">调整播放器内 UI 的默认缩放倍率，范围 50%-200%。</div>
            <div class="settings-item-extra">
              <t-slider
                v-model="defaultScale"
                :min="0.5"
                :max="2"
                :step="0.05"
                :show-tooltip="false"
                :marks="scaleMarks"
              />
            </div>
          </div>
          <div class="settings-item-action" style="width: 160px">
            <t-input-number
              v-model="defaultScale"
              :min="0.5"
              :max="2"
              :step="0.05"
              :decimal-places="2"
              suffix="倍"
            />
            <!-- <t-tag theme="success" variant="light-outline">{{ scalePercent }}%</t-tag> -->
          </div>
        </div>

        <br />
        <t-divider />
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon as TIcon } from 'tdesign-icons-vue-next'
import { useSettingsGroup } from '@renderer/core/useSetting'

const settings = useSettingsGroup('player')

const clampScale = (value: unknown) => {
  const num = Number(value)
  if (!Number.isFinite(num)) return 1
  return Math.min(2, Math.max(0.5, num))
}

const sanitizeRoom = (value: unknown) => {
  if (value == null) return '01'
  const text = String(value).trim().slice(0, 8)
  return text || '01'
}

const defaultRoom = settings.ref<string>('defaultRoom', '01', {
  mapIn: sanitizeRoom,
  mapOut: sanitizeRoom
})

const defaultScale = settings.ref<number>('defaultScale', 1, {
  mapIn: clampScale,
  mapOut: clampScale
})

const scaleMarks = {
  0.5: '50%',
  1: '100%',
  1.5: '150%',
  2: '200%'
}

const scalePercent = computed(() => Math.round(defaultScale.value * 100))

const normalizeRoom = () => {
  defaultRoom.value = sanitizeRoom(defaultRoom.value)
}

const resetDefaults = () => {
  defaultRoom.value = '01'
  defaultScale.value = 1
}
</script>

<style scoped>
.settings-item-extra {
  margin-top: 8px;
}
</style>
