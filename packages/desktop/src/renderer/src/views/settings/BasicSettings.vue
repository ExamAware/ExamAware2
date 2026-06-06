<template>
  <div class="settings-page">
    <h2>基本</h2>
    <t-space direction="vertical" size="small" style="width: 100%">
      <t-card :title="'行为'" theme="poster2">
        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="rocket-filled" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">开机自启</div>
            <div class="settings-item-desc">在您的系统启动时自动运行本应用。</div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="autoStart"
              :label="[
                { value: true, label: '开' },
                { value: false, label: '关' }
              ]"
            />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="calendar" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">学期开始时间</div>
            <div class="settings-item-desc">
              设置学期首日，该日期将作为多周轮换计算起点和每周的第一天。
            </div>
          </div>
          <div class="settings-item-action">
            <t-date-picker v-model="termStart" clearable="false" format="YYYY/M/D" />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="view-module" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">托盘弹窗失焦自动隐藏</div>
            <div class="settings-item-desc">
              启用后，托盘弹窗窗口在失去焦点时自动隐藏（显示后有保护期防止秒关）。默认开启。
            </div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="trayAutoHide"
              :label="[
                { value: true, label: '开' },
                { value: false, label: '关' }
              ]"
            />
          </div>
        </div>

        <div class="settings-item" v-if="trayAutoHide">
          <div class="settings-item-icon">
            <TIcon name="time" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">失焦保护期</div>
            <div class="settings-item-desc">
              窗口显示后在此毫秒数内的失焦不会自动隐藏，避免快速点击或系统激活导致闪退。
            </div>
          </div>
          <div class="settings-item-action" style="display: flex; align-items: center; gap: 8px">
            <t-input-number
              v-model="trayProtectionMs"
              :min="0"
              :step="50"
              suffix="毫秒"
              style="width: 180px"
            />
          </div>
        </div>
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useSettingRef } from '@renderer/composables/useSetting'
import { Icon as TIcon } from 'tdesign-icons-vue-next'

const autoStart = useSettingRef<boolean>('behavior.autoStart', false)

async function syncAutoStartFromSystem() {
  try {
    const cur = await window.api.system.autostart.get()
    autoStart.value = !!cur
  } catch {}
}

watch(autoStart, async (v) => {
  try {
    await window.api.system.autostart.set(!!v)
  } catch (e) {
    console.error('设置开机自启失败', e)
  }
})

onMounted(() => {
  syncAutoStartFromSystem()
})

const termStart = useSettingRef<string>(
  'behavior.termStart',
  new Date().toISOString().slice(0, 10),
  {
    mapIn: (raw) => raw,
    mapOut: (v) => v
  }
)

// 托盘弹窗失焦自动隐藏
const trayAutoHide = useSettingRef<boolean>('tray.autoHideOnBlur', true)
// 保护期毫秒（默认 400ms）
const trayProtectionMs = useSettingRef<number>('tray.autoHideProtectionMs', 400)
</script>

<style scoped></style>
