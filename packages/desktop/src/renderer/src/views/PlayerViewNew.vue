<template>
  <div class="player-view-container">
    <!-- 使用新的 ExamPlayer 组件 -->
    <ExamPlayer
      :exam-config="configData"
      :config="playerConfig"
      :time-provider="timeProvider"
      :time-sync-status="timeSyncStatusText"
      v-model:roomNumber="roomNumber"
      :allow-edit-room-number="true"
      :show-action-bar="true"
      @exit="handleExit"
      @edit-click="handleEditClick"
      @room-number-click="handleRoomNumberClick"
      @room-number-change="handleRoomNumberChange"
      @exam-start="handleExamStart"
      @exam-end="handleExamEnd"
      @exam-alert="handleExamAlert"
      @exam-switch="handleExamSwitch"
      @error="handleError"
    >
      <!-- 额外内容插槽保留为空，由 ExamPlayer 内部处理考场号设置 -->
      <template #extra></template>
    </ExamPlayer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { NotifyPlugin, DialogPlugin } from 'tdesign-vue-next'
import { ExamPlayer, type PlayerConfig } from '@examaware/player'
// 导入 player 包的样式
import '@examaware/player/dist/player.css'
import { useConfigLoader } from '@renderer/composables/useConfigLoader'
import { ElectronTimeProvider } from '@renderer/adapters/ElectronTimeProvider'
import { RecentFileManager } from '@renderer/core/recentFileManager'
// 键盘相关逻辑已经内置在 ExamPlayer 中

const ipcRenderer = window.api.ipc

// 考场号相关状态
const roomNumber = ref('01') // 默认考场号

// 使用配置加载器
const {
  loading,
  loaded,
  config: configData,
  source: configSource,
  loadFromIPC,
  reload: reloadConfig
} = useConfigLoader(ipcRenderer)

// 创建 Electron 时间提供器
const timeProvider = new ElectronTimeProvider(ipcRenderer)

// 播放器逻辑已由 ExamPlayer 组件内部处理

// 播放器配置
const playerConfig = computed<PlayerConfig>(() => ({
  roomNumber: roomNumber.value,
  fullscreen: true,
  timeSync: true,
  refreshInterval: 1000
}))

// 时间同步状态文本
const timeSyncStatusText = computed(() => {
  return timeProvider.getTimeSyncStatusText()
})

// === 事件处理器 ===

// 编辑按钮点击
const handleEditClick = () => {
  console.log('编辑按钮被点击')
  DialogPlugin.confirm({
    header: '提示',
    body: '编辑功能需要在主窗口中进行，是否关闭当前窗口？',
    confirmBtn: '确认',
    cancelBtn: '取消',
    onConfirm: () => {
      window.close()
    }
  })
}

// 考场号点击（交由 ExamPlayer 弹出设置）
const handleRoomNumberClick = () => {
  console.log('考场号被点击（由 ExamPlayer 处理弹窗）')
}

// 接收 ExamPlayer 的房间号变更
const handleRoomNumberChange = (val: string) => {
  roomNumber.value = val
  NotifyPlugin.success({
    title: '设置成功',
    content: `考场号已设置为：${roomNumber.value}`,
    placement: 'bottom-right',
    closeBtn: true
  })
}

// 考试开始事件
const handleExamStart = (exam: any) => {
  console.log('考试开始:', exam)
  NotifyPlugin.success({
    title: '考试开始',
    content: `${exam.name} 已开始`,
    placement: 'bottom-right',
    closeBtn: true
  })
}

// 考试结束事件
const handleExamEnd = (exam: any) => {
  console.log('考试结束:', exam)
  NotifyPlugin.info({
    title: '考试结束',
    content: `${exam.name} 已结束`,
    placement: 'bottom-right',
    closeBtn: true
  })
}

// 考试提醒事件
const handleExamAlert = (exam: any, alertTime: number) => {
  console.log('考试提醒:', exam, alertTime)
  const minutes = Math.floor(alertTime / 60000)
  NotifyPlugin.warning({
    title: '考试提醒',
    content: `${exam.name} 将在 ${minutes} 分钟后${alertTime > 0 ? '开始' : '结束'}`,
    placement: 'bottom-right',
    closeBtn: true,
    duration: 5000
  })
}

// 考试切换事件
const handleExamSwitch = (fromExam: any, toExam: any) => {
  console.log('考试切换:', fromExam, '->', toExam)
  if (fromExam && toExam && fromExam.name !== toExam.name) {
    NotifyPlugin.info({
      title: '已切换到下一场考试',
      content: `当前考试: ${toExam.name}`,
      placement: 'bottom-right',
      closeBtn: true
    })
  }
}

// 错误事件
const handleError = (error: string) => {
  console.error('ExamPlayer 错误:', error)
  NotifyPlugin.error({
    title: '播放器错误',
    content: error,
    placement: 'bottom-right',
    closeBtn: true
  })
}

// 退出播放（关闭窗口）
const handleExit = () => {
  try {
    window.close()
  } catch (e) {
    console.warn('关闭窗口失败:', e)
  }
}

// === 考场号设置相关 === 已移至 ExamPlayer 内部

// === 初始化和清理 ===

onMounted(async () => {
  console.log('PlayerViewNew mounted, starting initialization...')

  // 检查 IPC 是否可用
  if (!ipcRenderer) {
    console.error('IPC renderer not available')
    NotifyPlugin.error({
      title: '系统通信错误',
      content: '无法与主程序通信，请重启应用程序',
      placement: 'bottom-right',
      closeBtn: true
    })
    return
  }

  console.log('IPC renderer available, setting up listeners...')

  // 执行时间同步
  try {
    await timeProvider.performSync()
    console.log('初始时间同步完成')
  } catch (error) {
    console.warn('初始时间同步失败:', error)
  }

  // 使用新的配置加载器从 IPC 加载配置
  try {
    console.log('Attempting to load config via new loader...')
    await loadFromIPC(30000) // 30秒超时
    console.log('Config loaded successfully via new loader!')

    // 配置加载成功后的处理
    if (configData.value) {
      console.log('开始处理加载的配置:', configData.value)

      // 记录到最近文件列表（如果有配置名称的话）
      if (configData.value.examName) {
        const configIdentifier = `${configData.value.examName}_${new Date().toISOString().split('T')[0]}`
        RecentFileManager.addRecentFile(configIdentifier)
        console.log('已添加到最近文件列表:', configIdentifier)
      }

      // 显示成功加载的通知
      NotifyPlugin.success({
        title: '考试档案已加载',
        content: `已成功加载考试档案：${configData.value.examName}`,
        placement: 'bottom-right',
        closeBtn: true
      })
    } else {
      console.warn('配置加载器返回了空配置')
      NotifyPlugin.warning({
        title: '未找到考试档案',
        content: '未找到有效的考试档案文件(.exam.json)，请确保档案文件已正确拷贝到大屏设备',
        placement: 'bottom-right',
        closeBtn: true
      })
    }
  } catch (error) {
    console.error('Config loading failed:', error)
    const errorMessage = error instanceof Error ? error.message : '未知错误'
    NotifyPlugin.error({
      title: '考试档案加载失败',
      content: `考试档案文件(.exam.json)加载失败：${errorMessage}。请检查文件是否损坏或格式是否正确。`,
      placement: 'bottom-right',
      closeBtn: true,
      duration: 15000
    })
  }
})

onUnmounted(() => {
  console.log('PlayerViewNew 卸载')

  // 清理资源
  timeProvider.destroy()
})

// 暴露调试接口
if (typeof window !== 'undefined') {
  (window as any).debugPlayerView = {
    get config() { return configData.value },
    get roomNumber() { return roomNumber.value },
    get timeProvider() { return timeProvider },
    get syncStatus() { return timeProvider.getSyncStatus() },
    get syncStatusText() { return timeSyncStatusText.value },
    get loading() { return loading.value },
    get loaded() { return loaded.value },
    get source() { return configSource.value },
    performSync: () => timeProvider.performSync(),
    reloadConfig
  }
}
</script>

<style scoped>
.player-view-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* 虚拟键盘样式 */
.keyboard-container {
  margin-top: 20px;
}

.virtual-keyboard {
  max-width: 300px;
  margin: 0 auto;
}

.virtual-keyboard {
  background: transparent;
}

/* 暗色主题数字键盘样式 */
:deep(.numeric-keyboard-dark) {
  background: #1a1a1a !important;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

:deep(.numeric-keyboard-dark .hg-button) {
  background: #2d2d2d !important;
  color: #ffffff !important;
  border: 1px solid #404040 !important;
  border-radius: 6px !important;
  height: 50px !important;
  margin: 3px !important;
  font-size: 18px !important;
  font-weight: 500 !important;
  transition: all 0.2s ease !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

:deep(.numeric-keyboard-dark .hg-button:hover) {
  background: #3d3d3d !important;
  border-color: #505050 !important;
  transform: translateY(-1px) !important;
}

:deep(.numeric-keyboard-dark .hg-button:active) {
  background: #1d1d1d !important;
  transform: translateY(0) !important;
}

:deep(.numeric-keyboard-dark .hg-button.hg-functionBtn) {
  background: #0052d9 !important;
  color: #ffffff !important;
  border-color: #0052d9 !important;
}

:deep(.numeric-keyboard-dark .hg-button.hg-functionBtn:hover) {
  background: #1668dc !important;
  border-color: #1668dc !important;
}

:deep(.numeric-keyboard-dark .hg-row) {
  display: flex !important;
  justify-content: center !important;
}
</style>
