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
      </t-card>

      <t-card v-if="isHarmonyOS" title="鸿蒙系统" theme="poster2">
        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="notification" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">系统通知</div>
            <div class="settings-item-desc">管理 ExamAware 的鸿蒙系统通知权限。</div>
          </div>
          <div class="settings-item-action">
            <t-space align="center">
              <t-tag :theme="notificationEnabled ? 'success' : 'warning'" variant="light">
                {{ notificationEnabled ? '已授权' : '未授权' }}
              </t-tag>
              <t-button
                size="small"
                variant="outline"
                :disabled="notificationEnabled"
                :loading="notificationLoading"
                @click="requestNotification"
              >
                请求授权
              </t-button>
            </t-space>
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="folder-open" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">用户文件目录</div>
            <div class="settings-item-desc">授权访问下载、桌面和文档目录。</div>
          </div>
          <div class="settings-item-action">
            <t-button
              size="small"
              variant="outline"
              :loading="directoryLoading"
              @click="requestUserDirectories"
            >
              授权目录
            </t-button>
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="setting" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">应用系统设置</div>
            <div class="settings-item-desc">在鸿蒙系统设置中管理应用权限与运行选项。</div>
          </div>
          <div class="settings-item-action">
            <t-button size="small" variant="outline" @click="openApplicationInfo">
              打开应用信息
            </t-button>
          </div>
        </div>
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useSettingRef } from '@renderer/composables/useSetting'
import { Icon as TIcon } from 'tdesign-icons-vue-next'
import { MessagePlugin } from 'tdesign-vue-next'

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
  loadHarmonyInfo()
})

const termStart = useSettingRef<string>(
  'behavior.termStart',
  new Date().toISOString().slice(0, 10),
  {
    mapIn: (raw) => raw,
    mapOut: (v) => v
  }
)

const isHarmonyOS = window.electronAPI.platform === 'openharmony'
const notificationEnabled = ref(false)
const notificationLoading = ref(false)
const directoryLoading = ref(false)

async function loadHarmonyInfo() {
  if (!isHarmonyOS) return
  try {
    const info = await window.api.system.harmony.getInfo()
    notificationEnabled.value = info.notificationEnabled
  } catch (error) {
    console.error('读取鸿蒙系统信息失败', error)
  }
}

async function requestNotification() {
  notificationLoading.value = true
  try {
    const requested = await window.api.system.harmony.requestNotification()
    if (!requested) throw new Error('notification permission API unavailable')
    MessagePlugin.info('已提交系统通知授权请求')
    window.setTimeout(() => loadHarmonyInfo(), 800)
  } catch (error) {
    MessagePlugin.error('请求通知权限失败')
  } finally {
    notificationLoading.value = false
  }
}

async function requestUserDirectories() {
  directoryLoading.value = true
  try {
    const granted = await window.api.system.harmony.requestUserDirectories()
    if (granted) MessagePlugin.success('用户文件目录已授权')
    else MessagePlugin.warning('未获得用户文件目录权限')
  } catch (error) {
    MessagePlugin.error('请求目录权限失败')
  } finally {
    directoryLoading.value = false
  }
}

async function openApplicationInfo() {
  try {
    const opened = await window.api.system.harmony.openApplicationInfo()
    if (!opened) throw new Error('application info API unavailable')
  } catch (error) {
    MessagePlugin.error('打开系统应用信息失败')
  }
}
</script>

<style scoped></style>
