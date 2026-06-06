<template>
  <div class="settings-panel">
    <t-card title="应用设置" :bordered="false">
      <t-form labelAlign="top">
        <!-- 主题设置 -->
        <t-form-item label="主题模式">
          <t-radio-group v-model="themeMode" @change="handleThemeChange">
            <t-radio value="light">浅色</t-radio>
            <t-radio value="dark">深色</t-radio>
            <t-radio value="auto">跟随系统</t-radio>
          </t-radio-group>
        </t-form-item>

        <!-- 自动保存设置 -->
        <t-form-item label="自动保存">
          <t-switch v-model="autoSave" @change="handleAutoSaveChange" />
          <span class="setting-description"> 编辑时自动保存考试信息 </span>
        </t-form-item>

        <!-- 提醒设置 -->
        <t-form-item label="默认提醒时间">
          <t-input-number
            v-model="defaultAlertTime"
            suffix="分钟"
            :min="1"
            :max="120"
            @change="handleDefaultAlertTimeChange"
          />
          <span class="setting-description"> 新建考试时的默认提醒时间 </span>
        </t-form-item>

        <!-- 时间格式设置 -->
        <t-form-item label="时间格式">
          <t-select v-model="timeFormat" @change="handleTimeFormatChange">
            <t-option value="24h" label="24小时制" />
            <t-option value="12h" label="12小时制" />
          </t-select>
        </t-form-item>

        <!-- 播放设置 -->
        <t-form-item label="界面缩放">
          <div class="slider-row">
            <t-slider
              v-model:value="uiScaleSetting"
              :min="0.5"
              :max="2"
              :step="0.01"
              :input-number-props="{ theme: 'column', suffix: 'x', format: formatScale }"
            />
          </div>
          <span class="setting-description"> 调整播放器整体缩放，等同于播放界面右下角设置 </span>
        </t-form-item>

        <t-form-item label="界面密度">
          <t-radio-group v-model="uiDensitySetting">
            <t-radio v-for="option in densityOptions" :key="option.value" :value="option.value">
              <div class="density-option-label">
                <span class="density-option-title">{{ option.label }}</span>
                <span class="density-option-description">{{ option.description }}</span>
              </div>
            </t-radio>
          </t-radio-group>
          <span class="setting-description"> 控制卡片留白与信息排布紧凑度 </span>
        </t-form-item>

        <t-form-item label="大时钟模式">
          <t-switch v-model="largeClockEnabledSetting" />
          <span class="setting-description"> 开启后主时钟切换为大字号样式 </span>
        </t-form-item>

        <t-form-item label="大时钟字号">
          <div class="slider-row">
            <t-slider
              v-model:value="largeClockScaleSetting"
              :min="0.5"
              :max="1.8"
              :step="0.05"
              :disabled="!largeClockEnabledSetting"
              :input-number-props="{ theme: 'column', suffix: 'x', format: formatScale }"
            />
          </div>
          <span class="setting-description"> 仅在大时钟模式下生效，用于单独放大时间字号 </span>
        </t-form-item>

        <t-form-item label="本场信息大字体">
          <t-switch v-model="examInfoLargeFontSetting" />
          <span class="setting-description"> 放大“当前考试信息”卡片内容字体，远距更清晰 </span>
        </t-form-item>

        <!-- 语言设置 -->
        <t-form-item label="语言">
          <t-select v-model="language" @change="handleLanguageChange">
            <t-option value="zh-CN" label="简体中文" />
            <t-option value="en-US" label="English" />
          </t-select>
        </t-form-item>

        <!-- 数据管理 -->
        <t-form-item label="数据管理">
          <t-space direction="vertical" style="width: 100%">
            <t-button variant="outline" @click="exportData"> 导出数据 </t-button>
            <t-button variant="outline" @click="importData"> 导入数据 </t-button>
            <t-button variant="outline" theme="danger" @click="clearData"> 清空数据 </t-button>
          </t-space>
        </t-form-item>
      </t-form>
    </t-card>

    <!-- 确认清空数据对话框 -->
    <t-dialog
      v-model:visible="showClearDataDialog"
      header="确认清空数据"
      @confirm="handleClearData"
      @cancel="showClearDataDialog = false"
    >
      <p>确定要清空所有考试数据吗？此操作不可撤销。</p>
    </t-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTheme, type ThemeMode } from '@renderer/composables/useTheme'
import { FileOperationManager } from '@renderer/core/fileOperations'
import { useDesktopApi } from '@renderer/runtime/desktopApi'
import { clampUiScale } from '@renderer/composables/usePlaybackSettings'

interface Props {
  configManager?: any
}

const props = defineProps<Props>()

const desktopApi = useDesktopApi()
const {
  uiScale: uiScaleSetting,
  uiDensity: uiDensitySetting,
  largeClockEnabled: largeClockEnabledSetting,
  largeClockScale: largeClockScaleSetting,
  examInfoLargeFont: examInfoLargeFontSetting
} = desktopApi.playback

const densityOptions = [
  { value: 'comfortable', label: '舒适', description: '标准间距与字号' },
  { value: 'cozy', label: '适中', description: '减少约15%的留白' },
  { value: 'compact', label: '紧凑', description: '减少约30%的留白' }
]

const formatScale = (value: number | string) => {
  const num = Number(value)
  const safe = Number.isFinite(num) ? clampUiScale(num) : clampUiScale(uiScaleSetting.value)
  return `${safe.toFixed(2)}x`
}

// 主题管理
const { themeMode, setThemeMode } = useTheme()

// 设置状态
const autoSave = ref(true)
const defaultAlertTime = ref(15)
const timeFormat = ref<'24h' | '12h'>('24h')
const language = ref<'zh-CN' | 'en-US'>('zh-CN')

// 对话框状态
const showClearDataDialog = ref(false)

// 处理主题变化
const handleThemeChange = (value: ThemeMode) => {
  setThemeMode(value)
}

// 处理自动保存变化
const handleAutoSaveChange = (value: boolean) => {
  localStorage.setItem('autoSave', JSON.stringify(value))
}

// 处理默认提醒时间变化
const handleDefaultAlertTimeChange = (value: number) => {
  localStorage.setItem('defaultAlertTime', value.toString())
}

// 处理时间格式变化
const handleTimeFormatChange = (value: '24h' | '12h') => {
  localStorage.setItem('timeFormat', value)
}

// 处理语言变化
const handleLanguageChange = (value: 'zh-CN' | 'en-US') => {
  localStorage.setItem('language', value)
  // 这里可以添加国际化逻辑
}

// 导出数据
const exportData = () => {
  if (props.configManager) {
    const data = props.configManager.exportToJson()
    FileOperationManager.exportJsonFile(data, 'exam-backup.ea2')
  }
}

// 导入数据
const importData = async () => {
  const content = await FileOperationManager.importJsonFile()
  if (content && props.configManager) {
    const success = props.configManager.loadFromJson(content)
    if (!success) {
      // 显示错误提示
      console.error('导入失败')
    }
  }
}

// 清空数据
const clearData = () => {
  showClearDataDialog.value = true
}

// 确认清空数据
const handleClearData = () => {
  if (props.configManager) {
    props.configManager.reset()
  }
  showClearDataDialog.value = false
}

// 从本地存储加载设置
const loadSettings = () => {
  const savedAutoSave = localStorage.getItem('autoSave')
  if (savedAutoSave) {
    autoSave.value = JSON.parse(savedAutoSave)
  }

  const savedAlertTime = localStorage.getItem('defaultAlertTime')
  if (savedAlertTime) {
    defaultAlertTime.value = parseInt(savedAlertTime)
  }

  const savedTimeFormat = localStorage.getItem('timeFormat')
  if (savedTimeFormat && ['24h', '12h'].includes(savedTimeFormat)) {
    timeFormat.value = savedTimeFormat as '24h' | '12h'
  }

  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage && ['zh-CN', 'en-US'].includes(savedLanguage)) {
    language.value = savedLanguage as 'zh-CN' | 'en-US'
  }
}

onMounted(() => {
  loadSettings()
})
</script>

<style scoped>
.settings-panel {
  padding: 16px;
  max-width: 600px;
}

.setting-description {
  font-size: 12px;
  color: var(--td-text-color-secondary);
  margin-left: 8px;
}

.slider-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.slider-row :deep(.t-slider) {
  flex: 1 1 auto;
}

.slider-row :deep(.t-slider__input) {
  width: 120px;
  margin-left: 4px;
}

.density-option-label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.density-option-title {
  font-weight: 600;
}

.density-option-description {
  color: var(--td-text-color-secondary);
}
</style>
