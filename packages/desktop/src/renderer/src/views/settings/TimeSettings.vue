<script setup lang="ts">
import { onMounted } from 'vue'
import { useTimeSync } from '@renderer/utils/timeUtils'
import { useSettingRef } from '@renderer/composables/useSetting'
import { NotifyPlugin } from 'tdesign-vue-next'

const { syncInfo, syncStatus, isLoading, currentTime, loadSyncInfo, performSync } = useTimeSync()

// 使用统一设置存储：自动保存
const ntpServer = useSettingRef<string>('time.ntpServer', 'ntp.aliyun.com')
const manualOffsetSeconds = useSettingRef<number>('time.manualOffsetSeconds', 0)
const autoSync = useSettingRef<boolean>('time.autoSync', true)
const syncIntervalMinutes = useSettingRef<number>('time.syncIntervalMinutes', 60)
const autoIncrementEnabled = useSettingRef<boolean>('time.autoIncrementEnabled', false)
const autoIncrementSeconds = useSettingRef<number>('time.autoIncrementSeconds', 0)

const syncTimeNow = async () => {
  try {
    await performSync()
    NotifyPlugin.success({
      title: '时间同步成功',
      content: '已与 NTP 服务器同步时间',
      placement: 'bottom-right'
    })
  } catch (error) {
    const msg = error instanceof Error ? error.message : '无法与 NTP 服务器同步'
    NotifyPlugin.error({ title: '时间同步失败', content: msg, placement: 'bottom-right' })
  }
}

const formatDate = (timestamp: number) =>
  timestamp > 0 ? new Date(timestamp).toLocaleString() : '时间未同步'

onMounted(() => {
  // 初始加载一次状态
  loadSyncInfo()
})
</script>

<template>
  <div class="settings-page">
    <h2>时间同步</h2>

    <t-card title="当前时间信息" :loading="isLoading">
      <t-descriptions>
        <t-descriptions-item label="当前时间"> {{ formatDate(currentTime) }} </t-descriptions-item>
        <t-descriptions-item label="同步状态"> {{ syncStatus }} </t-descriptions-item>
        <t-descriptions-item label="NTP 服务器">
          {{ syncInfo?.serverAddress || '未配置' }}
        </t-descriptions-item>
        <t-descriptions-item label="手动偏移量">
          {{ syncInfo?.manualOffset ? `${syncInfo.manualOffset / 1000} 秒` : '未配置' }}
        </t-descriptions-item>
      </t-descriptions>
      <template #footer>
        <t-space>
          <t-button @click="loadSyncInfo">刷新状态</t-button>
          <t-button theme="primary" @click="syncTimeNow" :loading="isLoading">立即同步</t-button>
        </t-space>
      </template>
    </t-card>

    <t-divider />

    <t-card title="时间同步配置">
      <t-form labelAlign="right" labelWidth="15%">
        <t-form-item label="NTP 服务器" name="ntpServer">
          <t-input v-model="ntpServer" placeholder="请输入 NTP 服务器地址" />
        </t-form-item>

        <t-form-item label="时间偏移" name="manualOffsetSeconds">
          <t-input-number v-model="manualOffsetSeconds" step="0.5" suffix="秒" />
        </t-form-item>

        <t-form-item
          label="自动时间偏移"
          name="autoIncrement"
          help="若启用，每天自动以设定的增量值调整时间偏移量（增量可为正或负，单位：秒）。"
        >
          <div style="display: flex; align-items: center; gap: 12px">
            <t-input-number v-model="autoIncrementSeconds" step="0.5" suffix="秒" />
            <t-switch
              v-model="autoIncrementEnabled"
              :label="[
                { value: true, label: '开' },
                { value: false, label: '关' }
              ]"
            />
          </div>
        </t-form-item>

        <t-form-item label="自动同步" name="autoSync">
          <t-switch v-model="autoSync" />
        </t-form-item>

        <t-form-item label="同步间隔" name="syncIntervalMinutes">
          <t-input-number
            v-model="syncIntervalMinutes"
            step="5"
            :min="5"
            :disabled="!autoSync"
            suffix="分钟"
          />
        </t-form-item>
      </t-form>
    </t-card>
  </div>
</template>

<style scoped>
/* 采用 SettingsShell.vue 中的统一样式，无需自定义边距 */
</style>
