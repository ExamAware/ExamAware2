<template>
  <div class="exam-container">
    <!-- 背景渐变椭圆 -->
    <div class="background-ellipse"></div>

    <!-- 主要内容 -->
    <div class="content-wrapper">
      <!-- 左侧列 -->
      <div class="left-column">
        <div class="logo-container">
          <span class="logo-text">DSZ ExamAware 知试</span>
        </div>

        <!-- 标题区域 -->
        <div class="title-section">
          <h1 ref="mainTitleRef" class="main-title">{{ playerExamConfig?.examName || '考试' }}</h1>
          <p ref="subtitleRef" class="subtitle">{{ playerExamConfig?.message || '请遵守考场纪律' }}</p>
        </div>

        <!-- 时钟卡片 -->
        <BaseCard custom-class="clock-card">
          <div class="clock-content">
            <div class="time-display">{{ formattedCurrentTime }}</div>
            <div class="time-note">
              <div>{{ timeSyncStatus || '电脑时间' }}仅供参考</div>
              <div>以考场铃声为准</div>
            </div>
          </div>
        </BaseCard>

        <!-- 考试信息卡片 -->
        <InfoCardWithIcon
          title="当前考试信息"
          @icon-click="$emit('editClick')"
          custom-class="exam-info-card"
        >
          <InfoItem label="当前科目" :value="currentExamName" />
          <InfoItem label="考试时间" :value="currentExamTimeRange" />
          <InfoItem label="剩余时间" :value="remainingTime" />

          <!-- 动态展开考试材料 -->
          <template v-if="currentExam?.materials && currentExam.materials.length > 0">
            <InfoItem
              v-for="material in currentExam.materials"
              :key="material.name"
              :label="material.name"
              :value="`${material.quantity}${material.unit}`"
            />
          </template>

          <div></div>
        </InfoCardWithIcon>
      </div>

      <!-- 右侧列 -->
      <div class="right-column">
        <div class="exam-room-container">
          <ExamRoomNumber :room-number="roomNumber" @click="handleRoomNumberClick" />
        </div>

        <!-- 本次考试信息卡片 -->
        <CurrentExamInfo :exam-infos="displayFormattedExamInfos" />
      </div>
    </div>

    <!-- 底部按钮栏 -->
    <ActionButtonBar v-if="showActionBar" />

    <!-- 考场号设置弹窗 -->
    <div v-if="showRoomNumberModal" class="room-number-modal">
      <div class="modal-overlay" @click="handleRoomNumberCancel"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>设置考场号</h3>
          <button class="close-btn" @click="handleRoomNumberCancel">×</button>
        </div>
        <div class="modal-body">
          <div class="form-item">
            <label>考场号</label>
            <input
              v-model="tempRoomNumber"
              type="text"
              placeholder="请输入考场号"
              maxlength="10"
              readonly
              class="room-input"
            />
          </div>
          
          <!-- 虚拟键盘容器 -->
          <div class="keyboard-container">
            <div ref="keyboardRef" class="virtual-keyboard"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-cancel" @click="handleRoomNumberCancel">取消</button>
          <button class="btn btn-confirm" @click="handleRoomNumberConfirm">确认</button>
        </div>
      </div>
    </div>

    <!-- 自定义插槽用于额外内容 -->
    <slot name="extra"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import type { ExamConfig } from '@examaware/core'
import { useExamPlayer, type TimeProvider } from '../useExamPlayer'
import type { PlayerConfig, PlayerEventHandlers } from '../types'
import 'simple-keyboard/build/css/index.css'
import BaseCard from './BaseCard.vue'
import InfoCardWithIcon from './InfoCardWithIcon.vue'
import InfoItem from './InfoItem.vue'
import ExamRoomNumber from './ExamRoomNumber.vue'
import CurrentExamInfo from './CurrentExamInfo.vue'
import ActionButtonBar from './ActionButtonBar.vue'

// Props 定义
interface Props {
  /** 考试配置 */
  examConfig: ExamConfig | null
  /** 播放器配置 */
  config?: PlayerConfig
  /** 时间提供者 */
  timeProvider?: TimeProvider
  /** 时间同步状态描述 */
  timeSyncStatus?: string
  /** 考场号 */
  roomNumber?: string
  /** 是否显示操作栏 */
  showActionBar?: boolean
  /** 是否允许编辑考场号 */
  allowEditRoomNumber?: boolean
  /** 事件处理器 */
  eventHandlers?: PlayerEventHandlers
}

// Events 定义
interface Emits {
  (e: 'editClick'): void
  (e: 'roomNumberClick'): void
  (e: 'roomNumberChange', roomNumber: string): void
  (e: 'examStart', exam: any): void
  (e: 'examEnd', exam: any): void
  (e: 'examAlert', exam: any, alertTime: number): void
  (e: 'examSwitch', fromExam: any, toExam: any): void
  (e: 'error', error: string): void
}

const props = withDefaults(defineProps<Props>(), {
  config: () => ({ roomNumber: '01' }),
  timeProvider: () => ({ getCurrentTime: () => Date.now() }),
  timeSyncStatus: '电脑时间',
  roomNumber: '01',
  showActionBar: true,
  allowEditRoomNumber: true,
  eventHandlers: () => ({})
})

const emit = defineEmits<Emits>()

// 合并事件处理器
const mergedEventHandlers: PlayerEventHandlers = {
  ...props.eventHandlers,
  onExamStart: (exam: any) => {
    props.eventHandlers?.onExamStart?.(exam)
    emit('examStart', exam)
  },
  onExamEnd: (exam: any) => {
    props.eventHandlers?.onExamEnd?.(exam)
    emit('examEnd', exam)
  },
  onExamAlert: (exam: any, alertTime: number) => {
    props.eventHandlers?.onExamAlert?.(exam, alertTime)
    emit('examAlert', exam, alertTime)
  },
  onExamSwitch: (fromExam: any, toExam: any) => {
    props.eventHandlers?.onExamSwitch?.(fromExam, toExam)
    emit('examSwitch', fromExam, toExam)
  },
  onError: (error: string) => {
    props.eventHandlers?.onError?.(error)
    emit('error', error)
  }
}

// 使用播放器逻辑 - 初始化时传入配置
const examPlayer = useExamPlayer(
  props.examConfig, // 直接传入考试配置
  props.config || { roomNumber: props.roomNumber || '01' },
  props.timeProvider || { getCurrentTime: () => Date.now() },
  mergedEventHandlers
)

// 监听 props 变化并更新播放器
watch(() => props.examConfig, (newConfig) => {
  console.log('ExamPlayer: 配置变化', newConfig)
  examPlayer.updateConfig(newConfig)
}, { immediate: false, deep: true })

watch(() => props.config, (newConfig) => {
  // 当 config 变化时，需要重新初始化 examPlayer
  // 这里可以添加配置更新逻辑
}, { deep: true })

watch(() => props.timeProvider, (newTimeProvider) => {
  if (newTimeProvider) {
    // 更新时间提供器
    examPlayer.taskQueue.stop()
    examPlayer.taskQueue.start()
  }
}, { deep: true })

// 从 examPlayer 解构需要的数据
const {
  state,
  examConfig: playerExamConfig,
  currentExam,
  sortedExamInfos,
  formattedExamInfos,
  examStatus,
  currentExamName,
  currentExamTimeRange,
  remainingTime,
  formattedCurrentTime,
  switchToExam,
  updateConfig
} = examPlayer

// === 考场号设置相关状态 ===
const showRoomNumberModal = ref(false)
const tempRoomNumber = ref(props.roomNumber || '01')
const keyboardRef = ref<HTMLElement>()
let keyboardInstance: any = null

// 处理考场号点击
const handleRoomNumberClick = () => {
  if (!props.allowEditRoomNumber) {
    emit('roomNumberClick')
    return
  }
  
  tempRoomNumber.value = props.roomNumber || '01'
  showRoomNumberModal.value = true
  
  // 延迟初始化键盘，确保DOM已渲染
  setTimeout(() => {
    initKeyboard()
  }, 100)
}

// 键盘按键处理
const onKeyPress = (button: string) => {
  if (button === '{clear}') {
    tempRoomNumber.value = ''
  } else if (button === '{bksp}') {
    tempRoomNumber.value = tempRoomNumber.value.slice(0, -1)
  } else {
    // 限制只能输入数字和字母，最大长度10
    if (/^[0-9a-zA-Z]$/.test(button) && tempRoomNumber.value.length < 10) {
      tempRoomNumber.value += button
    }
  }
}

// 初始化虚拟键盘
const initKeyboard = () => {
  // 动态导入 simple-keyboard
  import('simple-keyboard').then(({ default: Keyboard }) => {
    if (keyboardRef.value && !keyboardInstance) {
      keyboardInstance = new Keyboard(keyboardRef.value, {
        layout: {
          default: [
            "1 2 3",
            "4 5 6", 
            "7 8 9",
            "{clear} 0 {bksp}"
          ]
        },
        display: {
          '{clear}': '清空',
          '{bksp}': '⌫ 删除'
        },
        theme: 'hg-theme-default hg-layout-numeric numeric-keyboard-dark',
        physicalKeyboardHighlight: false,
        syncInstanceInputs: false,
        mergeDisplay: true,
        onKeyPress: (button: string) => onKeyPress(button)
      })
    }
  }).catch(error => {
    console.warn('Failed to load simple-keyboard:', error)
  })
}

// 销毁虚拟键盘
const destroyKeyboard = () => {
  if (keyboardInstance) {
    keyboardInstance.destroy()
    keyboardInstance = null
  }
}

// 确认考场号设置
const handleRoomNumberConfirm = () => {
  if (tempRoomNumber.value && tempRoomNumber.value.trim()) {
    emit('roomNumberChange', tempRoomNumber.value.trim())
    showRoomNumberModal.value = false
    destroyKeyboard()
  } else {
    emit('error', '考场号不能为空')
  }
}

// 取消考场号设置
const handleRoomNumberCancel = () => {
  showRoomNumberModal.value = false
  tempRoomNumber.value = props.roomNumber || '01'
  destroyKeyboard()
}

// 格式化的考试信息用于CurrentExamInfo组件 - 现在使用 examPlayer 的 formattedExamInfos
const displayFormattedExamInfos = computed(() => {
  const formatted = formattedExamInfos.value || []
  console.log('ExamPlayer: displayFormattedExamInfos computed', formatted)
  return formatted
})

// 添加调试信息
onMounted(() => {
  console.log('ExamPlayer: mounted, props.examConfig:', props.examConfig)
  console.log('ExamPlayer: examPlayer state:', examPlayer.state.value)
  console.log('ExamPlayer: formattedExamInfos:', formattedExamInfos.value)
})

// 标题大小调整
const mainTitleRef = ref<HTMLElement>()
const subtitleRef = ref<HTMLElement>()

const adjustTitleSize = () => {
  if (!mainTitleRef.value || !subtitleRef.value) return

  const container = mainTitleRef.value.parentElement
  if (!container) return

  // 等待DOM更新完成再计算（避免布局抖动）
  setTimeout(() => {
    const containerWidth = container.clientWidth

    // 从一个较大的初始字体开始，逐步减小直到单行完全显示
    let fontSize = 50 // px，初始值
    mainTitleRef.value!.style.fontSize = `${fontSize}px`

    // 强制重新计算布局
    void mainTitleRef.value!.offsetHeight

    let scrollWidth = mainTitleRef.value!.scrollWidth

    // 逐步减小字体直到文字宽度不超过容器宽度
    while (scrollWidth > containerWidth && fontSize > 12) {
      fontSize -= 0.5 // 小步长保证精度
      mainTitleRef.value!.style.fontSize = `${fontSize}px`
      void mainTitleRef.value!.offsetHeight
      scrollWidth = mainTitleRef.value!.scrollWidth
    }

    // 让标题留一点安全边距
    fontSize = Math.max(12, fontSize - 5)
    mainTitleRef.value!.style.fontSize = `${fontSize}px`

    // 副标题与主标题保持比例（约40%）
    const subtitleFontSize = fontSize * 0.4
    subtitleRef.value!.style.fontSize = `${subtitleFontSize}px`
  }, 10)
}

onMounted(() => {
  adjustTitleSize()
  window.addEventListener('resize', adjustTitleSize)

  // 监听UI缩放变化
  const observer = new MutationObserver(() => {
    adjustTitleSize()
  })
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['style'],
  })

  // 清理函数在组件卸载时执行
  window.addEventListener('beforeunload', () => {
    observer.disconnect()
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', adjustTitleSize)
})

// 当标题/副标题内容变化时，重新计算自适应字号
watch(() => playerExamConfig?.value?.examName, () => adjustTitleSize())
watch(() => playerExamConfig?.value?.message, () => adjustTitleSize())
</script>

<style scoped>
* {
  font-family: 'MiSans';
}

.exam-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #02080d;
}

.background-ellipse {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 45%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(55, 88, 255, 0.3) 0%,
    rgba(70, 82, 255, 0) 100%
  );

  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
}

.exam-room-container {
  margin-bottom: calc(var(--ui-scale, 1) * 2rem);
  display: flex;
  justify-content: flex-end; /* 右对齐 */
}

.logo-container {
  position: relative;
  margin-bottom: calc(var(--ui-scale, 1) * 40px * 100vh / 1080px);
  z-index: 20;
}

.logo-text {
  color: #ffffff;
  font-size: calc(var(--ui-scale, 1) * 1.25rem);
  font-weight: 600;
  letter-spacing: 0.025em;
}

.title-section {
  margin-bottom: calc(var(--ui-scale, 1) * 3rem);
}

.main-title {
  color: #ffffff;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: calc(var(--ui-scale, 1) * 1rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  line-height: 1.4;
}

.clock-card {
  margin-bottom: calc(var(--ui-scale, 1) * 2rem);
}

.clock-content {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * 2rem);
}

.time-display {
  font-size: calc(var(--ui-scale, 1) * 4rem);
  line-height: 1;
  color: #fff;
  text-shadow: 0 calc(var(--ui-scale, 1) * 0.167rem) calc(var(--ui-scale, 1) * 1.458rem)
    rgba(255, 255, 255, 0.3);
  font-family: 'TCloudNumber', 'MiSans', monospace;
  font-style: normal;
  font-weight: 600;
}

.time-note {
  color: rgba(255, 255, 255, 0.7);
  font-size: calc(var(--ui-scale, 1) * 1.5rem);
  line-height: calc(var(--ui-scale, 1) * 2rem);
}

.exam-info-card {
  margin-bottom: calc(var(--ui-scale, 1) * 2rem);
}

.content-wrapper {
  position: relative;
  z-index: 10;
  height: 100vh;
  display: flex;
  padding: calc(var(--ui-scale, 1) * 4rem) calc(var(--ui-scale, 1) * 2rem) calc(var(--ui-scale, 1) * 8rem)
    calc(var(--ui-scale, 1) * 2rem); /* 增加顶部padding和底部padding为按钮栏留出空间 */
  gap: calc(var(--ui-scale, 1) * 100px);
}

.left-column {
  width: 50%;
  min-width: 0; /* 允许收缩 */
  padding-top: calc(var(--ui-scale, 1) * 40px * 100vh / 1080px);
  overflow: hidden; /* 防止内容溢出 */
}

.right-column {
  width: 50%;
  min-width: 0; /* 允许收缩 */
  padding-top: calc(var(--ui-scale, 1) * 40px * 100vh / 1080px);
  overflow: hidden; /* 防止内容溢出 */
}

/* 弹窗样式 */
.room-number-modal .modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.room-number-modal .modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  max-width: calc(100vw - 32px);
  background: #0b1220;
  border: 1px solid #1f2a44;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  z-index: 1001;
  color: #fff;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #1f2a44;
}

.modal-body {
  padding: 16px 20px;
}

.modal-footer {
  padding: 12px 20px 20px 20px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 20px;
  color: #9aa4b2;
  cursor: pointer;
}

.form-item label {
  display: block;
  margin-bottom: 8px;
  color: #9aa4b2;
}

.room-input {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #1f2a44;
  background: #0e1628;
  color: #fff;
  padding: 0 12px;
}

.btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  color: #fff;
}

.btn-cancel {
  background: #1f2a44;
}

.btn-confirm {
  background: #1668dc;
}

/* 键盘样式 */
.keyboard-container {
  margin-top: 16px;
}

.virtual-keyboard {
  max-width: 340px;
  margin: 0 auto;
  background: transparent;
}

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
