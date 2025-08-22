<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTimeSync } from '@renderer/utils/timeUtils'
import { NotifyPlugin } from 'tdesign-vue-next'

// 使用时间同步组合函数
const { syncInfo, syncStatus, isLoading, currentTime, loadSyncInfo, performSync, updateConfig } =
  useTimeSync()

// 表单数据
const formData = ref({
  ntpServer: 'ntp.aliyun.com',
  manualOffsetSeconds: 0,
  autoSync: true,
  syncIntervalMinutes: 60
})

// 加载配置
const loadConfig = async () => {
  try {
    await loadSyncInfo()

    if (syncInfo.value) {
      formData.value.ntpServer = syncInfo.value.serverAddress
      formData.value.manualOffsetSeconds = syncInfo.value.manualOffset / 1000 // 毫秒转秒
      formData.value.autoSync = syncInfo.value.syncStatus !== 'disabled'
      // 同步间隔可能需要单独获取
    }
  } catch (error) {
    NotifyPlugin.error({
      title: '加载配置失败',
      content: error instanceof Error ? error.message : '未知错误',
      placement: 'bottom-right'
    })
  }
}

// 保存设置
// 保存设置
const saveSettings = async () => {
  try {
    await updateConfig({
      ntpServer: formData.value.ntpServer,
      manualOffsetSeconds: formData.value.manualOffsetSeconds,
      autoSync: formData.value.autoSync,
      syncIntervalMinutes: formData.value.syncIntervalMinutes
    })

    NotifyPlugin.success({
      title: '设置已保存',
      content: '时间同步设置已更新',
      placement: 'bottom-right'
    })

    // 重新加载同步信息
    loadSyncInfo()
  } catch (error) {
    if (error instanceof Error) {
      NotifyPlugin.error({
        title: '保存设置失败',
        content: error.message || '无法保存时间同步设置',
        placement: 'bottom-right'
      })
    } else {
      // 处理非 Error 类型的异常
      NotifyPlugin.error({
        title: '保存设置失败',
        content: '发生未知错误，请检查日志',
        placement: 'bottom-right'
      })
    }
  }
}

// 手动同步时间
const syncTimeNow = async () => {
  try {
    await performSync()
    NotifyPlugin.success({
      title: '时间同步成功',
      content: '已与 NTP 服务器同步时间',
      placement: 'bottom-right'
    })
  } catch (error) {
    let errorMessage = '无法与 NTP 服务器同步'
    if (error instanceof Error) {
      errorMessage = error.message || errorMessage
    }
    NotifyPlugin.error({
      title: '时间同步失败',
      content: errorMessage,
      placement: 'bottom-right'
    })
  }
}

// 格式化时间
const formatDate = (timestamp: number) => {
  return timestamp > 0 ? new Date(timestamp).toLocaleString() : '时间未同步'
}

onMounted(() => {
  loadConfig()
})
</script>

<template>
  <div class="time-sync-container">
    <h2>时间同步设置</h2>

    <t-card title="当前时间信息" :loading="isLoading" class="info-card">
      <t-descriptions>
        <t-descriptions-item label="当前时间">
          {{ formatDate(currentTime) }}
        </t-descriptions-item>
        <t-descriptions-item label="同步状态">
          {{ syncStatus }}
        </t-descriptions-item>
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
          <t-button theme="primary" @click="syncTimeNow" :loading="isLoading"> 立即同步 </t-button>
        </t-space>
      </template>
    </t-card>

    <t-card title="时间同步配置" class="settings-card">
      <t-form :data="formData" @submit="saveSettings" labelAlign="right" labelWidth="15%">
        <t-form-item label="NTP服务器" name="ntpServer">
          <t-input v-model="formData.ntpServer" placeholder="请输入 NTP 服务器地址" />
        </t-form-item>

        <t-form-item label="时间偏移" name="manualOffsetSeconds">
          <t-input-number v-model="formData.manualOffsetSeconds" step="0.5" suffix="秒" />
        </t-form-item>

        <t-form-item label="自动同步" name="autoSync">
          <t-switch v-model="formData.autoSync" />
        </t-form-item>

        <t-form-item label="同步间隔" name="syncIntervalMinutes">
          <t-input-number
            v-model="formData.syncIntervalMinutes"
            step="5"
            :min="5"
            :disabled="!formData.autoSync"
            suffix="分钟"
          />
        </t-form-item>

        <t-form-item>
          <t-space>
            <t-button theme="primary" type="submit" :loading="isLoading">保存设置</t-button>
            <t-button @click="loadConfig">重置</t-button>
          </t-space>
        </t-form-item>
      </t-form>
    </t-card>


  </div>
</template>

<style scoped>
.time-sync-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.info-card {
  margin-bottom: 20px;
}

.info-card {
  margin-bottom: 20px;
}

/* 调整描述列表的样式 */
.t-descriptions {
  margin: 16px 0;
}

.t-descriptions__item {
  padding: 8px 0;
}

.settings-card {
  margin-bottom: 20px;
}

.notice {
  margin-top: 20px;
}
</style>
