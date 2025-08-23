<script setup lang="ts">
import { type CodeLayoutConfig, defaultCodeLayoutConfig } from 'vue-code-layout'
import type { MenuOptions } from '@imengyu/vue3-context-menu'
import { reactive, onMounted, ref, computed } from 'vue'
import AboutDialog from '@renderer/components/AboutDialog.vue'
import ExamForm from '@renderer/components/ExamForm.vue'
import WindowControls from '@renderer/components/WindowControls.vue'
import { useExamEditor } from '@renderer/composables/useExamEditor'
import { useLayoutManager } from '@renderer/composables/useLayoutManager'
import { useExamValidation } from '@renderer/composables/useExamValidation'
import { getSyncedTime } from '@renderer/utils/timeUtils'

// 平台检测 - 通过 electronAPI 获取
const windowAPI = (window as any).electronAPI
const isMacOS = windowAPI?.platform === 'darwin'
console.log("platform: " + windowAPI?.platform)

// 配置 CodeLayout 的默认设置
const config = reactive<CodeLayoutConfig>({
  ...defaultCodeLayoutConfig,
  primarySideBarSwitchWithActivityBar: true,
  primarySideBarPosition: 'left',
  titleBar: true,
  titleBarShowCustomizeLayout: true,
  activityBar: true,
  primarySideBar: true,
  secondarySideBar: false,
  bottomPanel: true,
  statusBar: true,
  menuBar: true,
  bottomPanelMaximize: false,
  primarySideBarWidth: 40,
})

// 使用组合式函数管理状态
const {
  examConfig,
  currentExamIndex,
  windowTitle,
  showAboutDialog,
  currentExam,
  hasExams,
  addExam,
  deleteExam,
  updateExam,
  switchToExam,
  updateConfig,
  newProject,
  saveProject,
  saveProjectAs,
  exportProject,
  importProject,
  openProject,
  closeProject,
  restoreLastSession,
  undoAction,
  redoAction,
  cutAction,
  copyAction,
  pasteAction,
  findAction,
  replaceAction,
  openAboutDialog,
  closeAboutDialog,
  openGithub,
} = useExamEditor()

// 使用布局管理器
const { codeLayout, setupLayout, getPanelComponent } = useLayoutManager()

// 使用考试验证
const { isValid, hasErrors, hasWarnings, validationErrors, validationWarnings } = useExamValidation(examConfig)

// 格式化验证错误供底部面板使用
const formattedValidationErrors = computed(() => {
  const errors = validationErrors.value.map(error => ({
    message: error,
    type: 'error' as const
  }))

  const warnings = validationWarnings.value.map(warning => ({
    message: warning,
    type: 'warning' as const
  }))

  return [...errors, ...warnings]
})

// 菜单数据 - 使用响应式变量
const menuData = ref<MenuOptions | null>(null)

// 处理切换考试信息
function handleSwitchExamInfo(payload: { examId: number }) {
  switchToExam(payload.examId)
}

// 更新配置文件 (兼容旧的接口)
function updateProfile(newConfig: any) {
  console.log('EditorView: updateProfile called with:', newConfig)
  updateConfig(newConfig)
  console.log('EditorView: after updateConfig, examConfig:', examConfig)
}

// 处理考试保存
function handleExamSave(examInfo: any) {
  if (currentExamIndex.value !== null) {
    updateExam(currentExamIndex.value, examInfo)
  }
}

// 下一个考试
const nextExam = () => {
  if (currentExamIndex.value !== null && currentExamIndex.value < examConfig.examInfos.length - 1) {
    switchToExam(currentExamIndex.value + 1)
  } else if (examConfig.examInfos.length > 0) {
    switchToExam(0)
  }
}

// 上一个考试
const prevExam = () => {
  if (currentExamIndex.value !== null && currentExamIndex.value > 0) {
    switchToExam(currentExamIndex.value - 1)
  } else if (examConfig.examInfos.length > 0) {
    switchToExam(examConfig.examInfos.length - 1)
  }
}

// 删除当前考试
const deleteCurrentExam = () => {
  if (currentExamIndex.value !== null) {
    deleteExam(currentExamIndex.value)
  }
}

// 获取考试状态
const getExamStatus = (exam: any) => {
  if (!exam) return ''

  const now = new Date(getSyncedTime())
  const start = new Date(exam.start)
  const end = new Date(exam.end)

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return '待设置'
  }

  if (now < start) {
    return '未开始'
  } else if (now >= start && now <= end) {
    return '进行中'
  } else {
    return '已结束'
  }
}

// 获取状态主题
const getExamStatusTheme = (exam: any) => {
  const status = getExamStatus(exam)
  switch (status) {
    case '未开始':
      return 'warning'
    case '进行中':
      return 'success'
    case '已结束':
      return 'default'
    default:
      return 'default'
  }
}

// 组件挂载时初始化
onMounted(async () => {
  // 为非 Linux 平台设置窗口状态监听
  if (windowAPI?.platform && windowAPI.platform !== 'linux') {
    windowAPI.setupListeners()
  }

  // 设置布局和菜单
  const menuResult = await setupLayout(addExam, {
    onNew: newProject,
    onOpen: openProject,
    onSave: saveProject,
    onSaveAs: saveProjectAs,
    onImport: importProject,
    onExport: exportProject,
    onClose: closeProject,
    onRestoreSession: restoreLastSession,
    onUndo: undoAction,
    onRedo: redoAction,
    onCut: cutAction,
    onCopy: copyAction,
    onPaste: pasteAction,
    onFind: findAction,
    onReplace: replaceAction,
    onAbout: openAboutDialog,
    onGithub: openGithub,
    onPresentation: () => {
      console.log('开始全屏放映')
    },
    onAddExam: addExam,
    onDeleteExam: deleteCurrentExam,
    onNextExam: nextExam,
    onPrevExam: prevExam,
  })

  menuData.value = menuResult.menuConfig

  // 检查 CodeLayout 实例
  setTimeout(() => {
    console.log('CodeLayout ref:', codeLayout.value)
    if (codeLayout.value) {
      console.log('CodeLayout instance found')
    } else {
      console.warn('CodeLayout ref not found!')
    }
  }, 100)
})
</script>

<template>
  <CodeLayout
    ref="codeLayout"
    :layout-config="config"
    :mainMenuConfig="menuData"
  >
    <template #statusBar>
      <div class="status-bar">
        <div class="status-left">
          <span v-if="hasExams">
            共 {{ examConfig.examInfos.length }} 个考试
          </span>
          <span v-else>
            暂无考试
          </span>
        </div>
        <div class="status-center">
          <span v-if="currentExamIndex !== null && currentExam">
            正在编辑: {{ currentExam.name || `考试 ${currentExamIndex + 1}` }}
            <t-tag
              v-if="getExamStatus(currentExam)"
              size="small"
              :theme="getExamStatusTheme(currentExam)"
              style="margin-left: 8px;"
            >
              {{ getExamStatus(currentExam) }}
            </t-tag>
          </span>
        </div>
        <div class="status-right">
          <span v-if="hasErrors" class="status-error">
            <t-icon name="error-circle" /> {{ validationErrors.length }} 个错误
          </span>
          <span v-else-if="hasWarnings" class="status-warning">
            <t-icon name="warning-circle" /> 有警告
          </span>
          <span v-else-if="isValid" class="status-success">
            <t-icon name="check-circle" /> 就绪
          </span>
        </div>
      </div>
    </template>
    <template #panelRender="{ panel }">
      <component
        :is="getPanelComponent(panel.name)"
        :profile="examConfig"
        :validation-errors="panel.name === 'bottom.validation' ? formattedValidationErrors : undefined"
        @switch-exam-info="handleSwitchExamInfo"
        @update:profile="updateProfile"
      />
    </template>
    <template #titleBarIcon>
      <!-- macOS 下隐藏logo为交通灯按钮让路，其他平台显示logo -->
      <img
         v-if="!isMacOS"
        src="@renderer/assets/logo.svg"
        style="margin: 10px"
        alt="logo"
        width="20px"
      />
      <!-- macOS 下用空白区域撑开左侧空间 -->
      <div v-else style="width: 80px; height: 35px; -webkit-app-region: no-drag;"></div>
    </template>
    <template #titleBarCenter>
      <div class="title-bar-center">
        {{ windowTitle }}
      </div>
    </template>
    <template #titleBarRight>
      <WindowControls />
    </template>
    <!-- <template #titleBarRight>
      <div class="window-controls">
        <t-button
          variant="text"
          size="small"
          class="window-control-btn minimize-btn"
          @click="minimizeWindow"
          title="最小化"
        >
          <t-icon name="minus" />
        </t-button>
        <t-button
          variant="text"
          size="small"
          class="window-control-btn close-btn"
          @click="closeWindow"
          title="关闭"
        >
          <t-icon name="close" />
        </t-button>
      </div>
    </template> -->
    <template #centerArea>
      <div style="padding: 20px">
        <div v-if="currentExamIndex === null" class="empty-state">
          <t-empty description="请从左侧的考试列表中选择一个考试进行编辑">
            <template #image>
              <t-icon name="calendar" size="64px" />
            </template>
            <t-button theme="primary" @click="addExam">
              添加第一个考试
            </t-button>
          </t-empty>
        </div>
        <div v-else>
          <ExamForm
            v-if="currentExam"
            v-model="currentExam"
            :auto-save="true"
            @save="handleExamSave"
          />
        </div>
      </div>
    </template>
  </CodeLayout>
  <AboutDialog :visible="showAboutDialog" @update:closedialog="closeAboutDialog" />
</template>

<style scoped>
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 100%;
  font-size: 12px;
  background-color: var(--td-bg-color-container);
  border-top: 1px solid var(--td-border-level-1-color);
}

.status-left,
.status-center,
.status-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-center {
  flex: 1;
  justify-content: center;
}

.status-error {
  color: var(--td-color-error);
}

.status-warning {
  color: var(--td-color-warning);
}

.status-success {
  color: var(--td-color-success);
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}

.title-bar-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  -webkit-app-region: drag;
  user-select: none;
  font-size: 14px;
  /* 确保整个区域都可以拖动 */
  min-width: 0;
  flex: 1;
}

/* 窗口控制按钮样式 */
.window-controls {
  display: flex;
  align-items: center;
  gap: 0;
  height: 100%;
}

.window-control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 32px;
  border-radius: 0;
  transition: background-color 0.2s ease;
  margin: 0;
  padding: 0;
}

.window-control-btn:hover {
  background-color: var(--td-bg-color-container-hover);
}

.minimize-btn:hover {
  background-color: #e6e6e6;
}

.close-btn:hover {
  background-color: #e81123;
  color: white;
}

.close-btn:hover .t-icon {
  color: white;
}

/* macOS 样式 */
@media (prefers-color-scheme: dark) {
  .minimize-btn:hover {
    background-color: #404040;
  }

  .close-btn:hover {
    background-color: #e81123;
  }
}
</style>

