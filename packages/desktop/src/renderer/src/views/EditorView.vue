<script setup lang="ts">
import { type CodeLayoutConfig, defaultCodeLayoutConfig } from 'vue-code-layout'
import type { MenuOptions } from '@imengyu/vue3-context-menu'
import { reactive, onMounted, onBeforeUnmount, ref, computed, watch } from 'vue'
import AboutDialog from '@renderer/components/AboutDialog.vue'
import ExamForm from '@renderer/components/ExamForm.vue'
import { useExamEditor } from '@renderer/composables/useExamEditor'
import { useLayoutManager } from '@renderer/composables/useLayoutManager'
import { useExamValidation } from '@renderer/composables/useExamValidation'
import { getSyncedTime } from '@renderer/utils/timeUtils'
import type { ExamInfo } from '@renderer/core/configTypes'
import { useEditorPluginStore } from '@renderer/stores/editorPluginStore'
import { setEditorRuntime } from '@renderer/core/editorBridge'

// 平台检测 - 通过 electronAPI 获取
const windowAPI = (window as any).electronAPI
const isMacOS = windowAPI?.platform === 'darwin'
const isWindows = windowAPI?.platform === 'win32'
console.log('platform: ' + windowAPI?.platform)

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
  primarySideBarWidth: 40
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
  openProject,
  closeProject,
  closeEditorWindow,
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
  startPresentation,
  // 提供原始 configManager 以便共享导出
  configManager
} = useExamEditor()

// 使用布局管理器
const {
  codeLayout,
  setupLayout,
  getPanelComponent,
  layoutManager: getLayoutManager,
  menuManager: getMenuManager
} = useLayoutManager()

const pluginStore = useEditorPluginStore()
const pluginCenterView = computed(() => pluginStore.centerView)
const closePluginCenterView = (id?: string) => pluginStore.clearCenterView(id)

// 就近共享：同步当前编辑配置
let shareSyncTimer: ReturnType<typeof setTimeout> | null = null
let shareSyncInterval: ReturnType<typeof setInterval> | null = null
const syncNowChannel = 'cast:sync-now'
const handleSyncNow = () => {
  void pushShare()
}

const pushShare = async () => {
  try {
    const cfg = await window.api.cast.getConfig()
    if (!cfg?.enabled || !cfg?.shareEnabled) return
    const payload = configManager.exportToJson()
    const examName = examConfig.examInfos[0]?.name || '未命名考试'
    const entry = {
      id: 'current',
      examName,
      examCount: examConfig.examInfos.length,
      updatedAt: Date.now(),
      payload
    }
    await window.api.cast.setShares([entry])
  } catch (err) {
    console.warn('cast share sync failed', err)
  }
}

const scheduleShareSync = () => {
  if (shareSyncTimer) clearTimeout(shareSyncTimer)
  shareSyncTimer = setTimeout(() => {
    void pushShare()
  }, 500)
}

// 多标签（TDesign Tabs）状态
const activeTabUid = ref<string | null>(null)
const openTabUids = ref<Set<string>>(new Set())

const openExams = computed(() =>
  examConfig.examInfos.filter((e) => openTabUids.value.has(getExamUid(e)))
)

function addOpenUid(uid: string) {
  if (openTabUids.value.has(uid)) return
  const next = new Set(openTabUids.value)
  next.add(uid)
  openTabUids.value = next
}

function removeOpenUid(uid: string) {
  if (!openTabUids.value.has(uid)) return
  const next = new Set(openTabUids.value)
  next.delete(uid)
  openTabUids.value = next
}
let uidCounter = 0
const examUidMap = new WeakMap<ExamInfo, string>()
const getExamUid = (exam: ExamInfo): string => {
  let uid = examUidMap.get(exam)
  if (!uid) {
    uid = `${Date.now().toString(36)}-${uidCounter++}`
    examUidMap.set(exam, uid)
  }
  return uid
}

const findExamIndexByUid = (uid: string): number => {
  return examConfig.examInfos.findIndex((e) => examUidMap.get(e) === uid)
}

const ensureActiveTab = (index: number) => {
  const exam = examConfig.examInfos[index]
  if (!exam) return
  const uid = getExamUid(exam)
  // 确保标签已加入打开集合
  addOpenUid(uid)
  activeTabUid.value = uid
}

// 使用考试验证
const { isValid, hasErrors, hasWarnings, validationErrors, validationWarnings } =
  useExamValidation(examConfig)

// 格式化验证错误供底部面板使用
const formattedValidationErrors = computed(() => {
  const errors = validationErrors.value.map((error) => ({
    message: error,
    type: 'error' as const
  }))

  const warnings = validationWarnings.value.map((warning) => ({
    message: warning,
    type: 'warning' as const
  }))

  return [...errors, ...warnings]
})

// 菜单数据 - 使用响应式变量
const menuData = ref<MenuOptions | null>(null)

// 处理切换考试信息
function handleSwitchExamInfo(payload: { examId: number }) {
  ensureActiveTab(payload.examId)
  switchToExam(payload.examId)
}

// 更新配置文件 (兼容旧的接口)
function updateProfile(newConfig: any) {
  console.log('EditorView: updateProfile called with:', newConfig)
  updateConfig(newConfig)
  console.log('EditorView: after updateConfig, examConfig:', examConfig)
}
// 保存处理（接收 ExamForm 的 save 事件）
function handleExamSave(_val: ExamInfo) {
  // 目前 ExamForm 内已做自动保存，这里保留钩子以便后续扩展
}

// 关闭标签：仅关闭，不删除考试
function handleTabRemove(ctx: any) {
  const value = ctx?.value ?? ctx
  if (!value) return
  removeOpenUid(value)
  if (activeTabUid.value === value) {
    // 若关闭的是活动标签，选择打开集合的任意一个作为新的活动；若没有则置空
    const anyUid = Array.from(openTabUids.value)[0]
    activeTabUid.value = anyUid ?? null
  }
}

function handleTabAdd() {
  addExam()
}

// 标签与当前考试索引同步：
// - 列表变化时，新增自动选中新项；若当前活动标签被删除，则迁移到当前索引或第一个
let prevUids = new Set<string>()
watch(
  () => examConfig.examInfos,
  (list) => {
    const currUids = new Set<string>()
    list.forEach((e) => currUids.add(getExamUid(e)))

    // 新增：切到新标签
    currUids.forEach((uid) => {
      if (!prevUids.has(uid)) {
        const idx = findExamIndexByUid(uid)
        if (idx >= 0) ensureActiveTab(idx)
      }
    })

    // 删除：同步移除打开集合里不存在的 UID
    // 清理打开集合中已删除的 UID
    const cleaned = new Set(Array.from(openTabUids.value).filter((uid) => currUids.has(uid)))
    openTabUids.value = cleaned

    // 删除：若当前活动不在集合内，则选中当前索引或第一个
    if (activeTabUid.value && !currUids.has(activeTabUid.value)) {
      // 仅在该 UID 依然在打开集合时才尝试迁移，否则保持为空，直到用户主动选择
      if (typeof currentExamIndex.value === 'number' && currentExamIndex.value >= 0)
        ensureActiveTab(currentExamIndex.value)
      else activeTabUid.value = null
    }

    prevUids = currUids
  },
  { deep: true }
)

// 当前考试索引变化时，同步活动标签
watch(
  () => currentExamIndex.value,
  (idx) => {
    if (typeof idx === 'number' && idx >= 0) ensureActiveTab(idx)
  }
)

// 计算考试状态与主题（用于状态栏）
function getExamStatus(exam: ExamInfo | null | undefined): string {
  if (!exam || !exam.start || !exam.end) return ''
  const now = new Date(getSyncedTime())
  const start = new Date(exam.start)
  const end = new Date(exam.end)
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return '待设置'
  if (now < start) return '未开始'
  if (now >= start && now <= end) return '进行中'
  return '已结束'
}

function getExamStatusTheme(
  exam: ExamInfo | null | undefined
): 'default' | 'success' | 'warning' | 'danger' {
  const status = getExamStatus(exam)
  switch (status) {
    case '进行中':
      return 'success'
    case '未开始':
      return 'default'
    case '已结束':
      return 'warning'
    case '待设置':
      return 'danger'
    default:
      return 'default'
  }
}

// 菜单快捷操作
const deleteCurrentExam = () => {
  if (typeof currentExamIndex.value === 'number' && currentExamIndex.value >= 0) {
    deleteExam(currentExamIndex.value)
  }
}

const openCastWindow = () => {
  window.api.ipc.send('open-cast-window')
}

const nextExam = () => {
  const len = examConfig.examInfos.length
  if (len === 0) return
  const curr = typeof currentExamIndex.value === 'number' ? currentExamIndex.value : -1
  const next = (curr + 1) % len
  switchToExam(next)
  ensureActiveTab(next)
}

const prevExam = () => {
  const len = examConfig.examInfos.length
  if (len === 0) return
  const curr = typeof currentExamIndex.value === 'number' ? currentExamIndex.value : 0
  const prev = (curr - 1 + len) % len
  switchToExam(prev)
  ensureActiveTab(prev)
}

// 初始化布局与菜单
onMounted(async () => {
  const menuResult = await setupLayout(addExam, {
    onNew: () => newProject(),
    onOpen: () => void openProject(),
    onSave: () => void saveProject(),
    onSaveAs: () => void saveProjectAs(),
    onCloseWindow: () => void closeEditorWindow(),
    onCloseProject: () => closeProject(),
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
      void startPresentation()
    },
    onCast: openCastWindow,
    onAddExam: addExam,
    onDeleteExam: deleteCurrentExam,
    onNextExam: nextExam,
    onPrevExam: prevExam
  })

  menuData.value = menuResult.menuConfig

  setEditorRuntime({
    layoutManager: getLayoutManager(),
    menuManager: getMenuManager()
  })

  // 初始激活标签
  if (typeof currentExamIndex.value === 'number' && currentExamIndex.value >= 0) {
    ensureActiveTab(currentExamIndex.value)
  } else if (examConfig.examInfos[0]) {
    // 初始不强制打开，保持空白，直到用户选择
    // 如需默认打开第一个，可改为：ensureActiveTab(0)
    activeTabUid.value = null
  }

  scheduleShareSync()
  shareSyncInterval = setInterval(() => {
    void pushShare()
  }, 5000)

  window.api?.ipc?.on?.(syncNowChannel, handleSyncNow)

  // 检查 CodeLayout 实例
  setTimeout(() => {
    console.log('CodeLayout ref:', codeLayout.value)
  }, 100)
})

onBeforeUnmount(() => {
  setEditorRuntime(null)
  if (shareSyncInterval) clearInterval(shareSyncInterval)
  window.api?.ipc?.off?.(syncNowChannel, handleSyncNow)
})

watch(
  () => examConfig,
  () => {
    scheduleShareSync()
  },
  { deep: true }
)
</script>

<template>
  <CodeLayout ref="codeLayout" :layout-config="config" :mainMenuConfig="menuData">
    <template #statusBar>
      <div class="status-bar">
        <div class="status-left">
          <span v-if="hasExams"> 共 {{ examConfig.examInfos.length }} 个考试 </span>
          <span v-else> 暂无考试 </span>
        </div>
        <div class="status-center">
          <span v-if="currentExamIndex !== null && currentExam">
            正在编辑: {{ currentExam.name || `考试 ${currentExamIndex + 1}` }}
            <t-tag
              v-if="getExamStatus(currentExam)"
              size="small"
              :theme="getExamStatusTheme(currentExam)"
              style="margin-left: 8px"
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
        :validation-errors="
          panel.name === 'bottom.validation' ? formattedValidationErrors : undefined
        "
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
      <div v-else style="width: 80px; height: 35px; -webkit-app-region: no-drag"></div>
    </template>
    <template #titleBarCenter>
      <div class="title-bar-center">
        {{ windowTitle }}
      </div>
    </template>
    <template #titleBarRight>
      <div class="title-bar-system-spacer" :class="{ windows: isWindows }" aria-hidden="true" />
    </template>
    <template #centerArea>
      <div class="editor-center-wrap">
        <div v-if="pluginCenterView" class="plugin-center-view">
          <div class="plugin-center-header">
            <div>
              <div class="plugin-center-title">{{ pluginCenterView.title }}</div>
              <div v-if="pluginCenterView.description" class="plugin-center-desc">
                {{ pluginCenterView.description }}
              </div>
            </div>
            <t-button
              v-if="pluginCenterView.allowClose"
              variant="text"
              size="small"
              @click="closePluginCenterView(pluginCenterView.id)"
            >
              关闭
            </t-button>
          </div>
          <div class="plugin-center-body">
            <component :is="pluginCenterView.renderer" />
          </div>
        </div>
        <template v-else>
          <div v-if="!hasExams || openTabUids.size === 0" class="empty-state">
            <t-empty description="请从左侧的考试列表中选择一个考试进行编辑">
              <template #image>
                <t-icon name="calendar" size="64px" />
              </template>
              <t-button theme="primary" @click="addExam">添加第一个考试</t-button>
            </t-empty>
          </div>
          <div v-else class="editor-tabs">
            <t-tabs
              v-model:value="activeTabUid"
              theme="card"
              size="medium"
              :style="{ height: '100%', display: 'flex', flexDirection: 'column' }"
              scroll-position="center"
              @change="
                (val: any) => {
                  const idx = findExamIndexByUid(val)
                  if (idx >= 0) switchToExam(idx)
                }
              "
              :addable="true"
              @add="handleTabAdd"
              @remove="handleTabRemove"
            >
              <t-tab-panel
                v-for="exam in openExams"
                :key="getExamUid(exam)"
                :value="getExamUid(exam)"
                :label="
                  (() => {
                    const uid = getExamUid(exam)
                    const i = findExamIndexByUid(uid)
                    return exam.name || `考试 ${i + 1}`
                  })()
                "
                :removable="true"
              >
                <div class="editor-tab-panel">
                  <ExamForm
                    :model-value="exam as any"
                    :auto-save="true"
                    @update:modelValue="
                      (val: any) => {
                        const uid = getExamUid(exam)
                        const idx = findExamIndexByUid(uid)
                        if (idx >= 0) updateExam(idx, val)
                      }
                    "
                    @save="handleExamSave"
                  />
                </div>
              </t-tab-panel>
            </t-tabs>
          </div>
        </template>
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

.editor-center-wrap {
  position: relative;
  height: 100%;
  padding: 0; /* 去除内边距，消除与父容器之间的空隙 */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.editor-tabs {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

.plugin-center-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.plugin-center-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.plugin-center-title {
  font-size: 18px;
  font-weight: 600;
}

.plugin-center-desc {
  font-size: 13px;
  color: var(--td-text-color-secondary);
  margin-top: 4px;
}

.plugin-center-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  border: 1px solid var(--td-border-level-1-color);
  border-radius: 8px;
  padding: 12px;
  background-color: var(--td-bg-color-container);
}

.editor-tab-panel {
  flex: 1;
  min-height: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.editor-tabs :deep(.t-tabs__content) {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: auto;
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

.title-bar-system-spacer {
  width: 0;
  height: 100%;
  -webkit-app-region: drag;
  pointer-events: none;
}

.title-bar-system-spacer.windows {
  width: 150px;
}
</style>
