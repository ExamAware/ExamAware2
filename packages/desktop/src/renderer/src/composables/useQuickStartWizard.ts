import { computed, reactive, ref, watch } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import type { FormInstanceFunctions, FormRule } from 'tdesign-vue-next'
import type {
  QuickStartActionContribution,
  QuickStartPanelContribution,
  QuickStartSubjectContribution
} from '@dsz-examaware/plugin-sdk'
import type { ExamConfig } from '@renderer/core/configTypes'
import {
  BUILTIN_QUICK_START_PRESETS,
  buildQuickStartExamConfig,
  buildQuickStartSchedule,
  clampQuickStartNumber,
  createQuickStartId,
  formatQuickStartGap,
  formatQuickStartDate,
  formatQuickStartWeekday,
  loadStoredQuickStartPresets,
  normalizeQuickStartDate,
  normalizeQuickStartTime,
  persistQuickStartPresets,
  quickStartRowDuration,
  quickStartRowName,
  quickStartTimeToMinutes,
  todayQuickStartDate,
  type QuickStartCompletedResult,
  type QuickStartExamRow,
  type QuickStartPreset,
  type QuickStartScheduledExam,
  type QuickStartSubject
} from '@renderer/core/quickStart'
import { saveQuickStartDraft } from '@renderer/core/quickStartDraft'
import { loadSubjects } from '@renderer/core/subjects'
import { getTimeSyncInfo } from '@renderer/utils/timeUtils'
import {
  quickStartActionContributions,
  quickStartPanelContributions,
  quickStartSchedulePresetContributions,
  quickStartSubjectContributions
} from '@renderer/runtime/pluginApi/contributions'

const STEP_ITEMS = ['基本信息', '科目与时长', '排期与汇总', '完成']
const STEP_KEYS = ['basic', 'subjects', 'schedule', 'complete'] as const

export function useQuickStartWizard() {
  const step = ref(0)
  const maxVisited = ref(0)
  const stepsCurrent = computed(() => (step.value >= 3 ? STEP_ITEMS.length : step.value))

  function onStepChange(current: string | number): void {
    const target = Number(current)
    if (!Number.isFinite(target)) return
    if (target < 0 || target >= STEP_ITEMS.length - 1 || target > maxVisited.value) return
    step.value = target
  }

  const basicFormRef = ref<FormInstanceFunctions>()
  const initialFirstDay = todayQuickStartDate()
  const basic = reactive({
    title: '',
    subtitle: '',
    firstDay: initialFirstDay
  })
  const basicRules: Record<string, FormRule[]> = {
    title: [{ required: true, message: '请输入考试名称' }],
    firstDay: [{ required: true, message: '请选择第一天' }]
  }

  void getTimeSyncInfo().then(() => {
    if (basic.firstDay === initialFirstDay) {
      basic.firstDay = todayQuickStartDate()
    }
  })

  const subjects = ref<QuickStartSubject[]>(
    loadSubjects().map((subject) => ({
      id: subject.id,
      name: subject.name,
      enabled: subject.enabled,
      duration: subject.duration
    }))
  )
  const examRows = ref<QuickStartExamRow[]>(
    subjects.value
      .filter((subject) => subject.enabled)
      .map((subject) => ({
        id: createQuickStartId(),
        subjectIds: [subject.id],
        durationOverride: null,
        startOverride: null,
        selected: false
      }))
  )
  const newSubjectName = ref('')

  const examsPerDay = ref(4)
  const firstExamTime = ref('08:00')
  const gapMinutes = ref(30)
  const completed = ref<QuickStartCompletedResult | null>(null)
  const actionLoading = ref<'editor' | 'playback' | null>(null)

  const presetDialogVisible = ref(false)
  const presetName = ref('')
  const userPresets = ref<QuickStartPreset[]>(loadStoredQuickStartPresets())

  const subjectMap = computed(() => new Map(subjects.value.map((subject) => [subject.id, subject])))
  const selectedRows = computed(() => examRows.value.filter((row) => row.selected))
  const perDay = computed(() => clampQuickStartNumber(examsPerDay.value, 1, 8, 1))
  const gap = computed(() => clampQuickStartNumber(gapMinutes.value, 0, 120, 0))
  const startMinutesOfDay = computed(() =>
    quickStartTimeToMinutes(normalizeQuickStartTime(firstExamTime.value, '08:00'))
  )

  const contributedPresets = computed<QuickStartPreset[]>(() =>
    quickStartSchedulePresetContributions.items.value.map(
      ({ id, name, examsPerDay: perDayValue, firstExamTime: time, gapMinutes: gapValue }) => ({
        id,
        name,
        examsPerDay: perDayValue,
        firstExamTime: time,
        gapMinutes: gapValue
      })
    )
  )
  const allPresets = computed<QuickStartPreset[]>(() => [
    ...BUILTIN_QUICK_START_PRESETS,
    ...userPresets.value,
    ...contributedPresets.value
  ])
  const presetOptions = computed(() => [
    ...allPresets.value.map((preset) => ({ label: preset.name, value: preset.id })),
    { label: '自定义作息', value: 'custom', disabled: true }
  ])
  const presetId = computed({
    get: () => {
      const current = allPresets.value.find(
        (preset) =>
          preset.examsPerDay === perDay.value &&
          normalizeQuickStartTime(preset.firstExamTime, '08:00') ===
            normalizeQuickStartTime(firstExamTime.value, '08:00') &&
          preset.gapMinutes === gap.value
      )
      return current?.id ?? 'custom'
    },
    set: (id: string) => {
      const preset = allPresets.value.find((item) => item.id === id)
      if (!preset) return
      examsPerDay.value = preset.examsPerDay
      firstExamTime.value = normalizeQuickStartTime(preset.firstExamTime, '08:00')
      gapMinutes.value = preset.gapMinutes
    }
  })

  const scheduled = computed<QuickStartScheduledExam[]>(() =>
    buildQuickStartSchedule(examRows.value, {
      baseDate: normalizeQuickStartDate(basic.firstDay) || todayQuickStartDate(),
      startMinutes: startMinutesOfDay.value,
      examsPerDay: perDay.value,
      gapMinutes: gap.value,
      subjectMap: subjectMap.value
    })
  )
  const dayCount = computed(() =>
    scheduled.value.length ? scheduled.value[scheduled.value.length - 1].dayIndex + 1 : 0
  )
  const dateRange = computed(() => {
    if (!scheduled.value.length) return ''
    return `${formatQuickStartDate(scheduled.value[0].date)} 至 ${formatQuickStartDate(
      scheduled.value[scheduled.value.length - 1].date
    )}`
  })
  const totalDuration = computed(() =>
    scheduled.value.reduce((total, item) => total + item.duration, 0)
  )
  const totalDurationText = computed(() => formatQuickStartGap(totalDuration.value))
  const scheduleWarning = computed(() => {
    if (!scheduled.value.length) return ''
    if (scheduled.value.some((item) => item.endMinutes >= 24 * 60)) {
      return '当天时间不足，末尾考试已超过次日 0 点。请减少场次、缩短时长或提前开考时间。'
    }
    if (scheduled.value.some((item) => item.gapMinutes !== null && item.gapMinutes < 0)) {
      return '存在时间重叠的考试，请调整开始时间或时长。'
    }
    return ''
  })

  const previewConfig = computed<ExamConfig | null>(() => {
    if (!examRows.value.length) return null
    return buildQuickStartExamConfig(
      basic.title.trim() || '未命名考试',
      basic.subtitle.trim(),
      scheduled.value
    )
  })

  const pluginActions = computed<QuickStartActionContribution[]>(() => [
    ...quickStartActionContributions.items.value
  ])
  const currentStepKey = computed(() => STEP_KEYS[step.value] ?? 'basic')
  const stepPanels = computed<QuickStartPanelContribution[]>(() =>
    quickStartPanelContributions.items.value.filter((panel) => panel.step === currentStepKey.value)
  )

  const columns = [
    { colKey: 'index', title: '#', width: 52 },
    { colKey: 'date', title: '日期', width: 110 },
    { colKey: 'period', title: '时段', width: 76 },
    { colKey: 'name', title: '科目', minWidth: 120 },
    { colKey: 'start', title: '时间', width: 110 },
    { colKey: 'duration', title: '时长', width: 140 },
    { colKey: 'gap', title: '距上一场', width: 100 },
    { colKey: 'operations', title: '', width: 100, align: 'center' }
  ]

  const contributedSubjectIds = new Set<string>()
  function appendContributedSubjects(items: readonly QuickStartSubjectContribution[]): void {
    for (const item of items) {
      if (contributedSubjectIds.has(item.id)) continue
      contributedSubjectIds.add(item.id)
      const subject: QuickStartSubject = {
        id: item.id,
        name: item.name,
        enabled: item.enabled ?? false,
        duration: clampQuickStartNumber(item.duration ?? 75, 5, 480, 75)
      }
      subjects.value.push(subject)
      if (subject.enabled) appendSubjectRow(subject.id)
    }
  }
  appendContributedSubjects(quickStartSubjectContributions.items.value)
  watch(quickStartSubjectContributions.items, appendContributedSubjects)

  function appendSubjectRow(subjectId: string): void {
    examRows.value.push({
      id: createQuickStartId(),
      subjectIds: [subjectId],
      durationOverride: null,
      startOverride: null,
      selected: false
    })
  }

  function rowName(row: QuickStartExamRow): string {
    return quickStartRowName(row, subjectMap.value)
  }

  function rowDuration(row: QuickStartExamRow): number {
    return quickStartRowDuration(row, subjectMap.value)
  }

  function rowIndex(row: QuickStartExamRow): number {
    return examRows.value.findIndex((item) => item.id === row.id)
  }

  function clearStartOverrides(): void {
    examRows.value.forEach((row) => {
      row.startOverride = null
    })
  }

  watch([examsPerDay, firstExamTime, gapMinutes, () => basic.firstDay], () => {
    clearStartOverrides()
  })

  function toggleSubject(subject: QuickStartSubject, enabled: boolean): void {
    subject.enabled = enabled
    if (enabled) {
      if (!examRows.value.some((row) => row.subjectIds.includes(subject.id))) {
        appendSubjectRow(subject.id)
      }
      return
    }
    examRows.value = examRows.value
      .map((row) => {
        if (!row.subjectIds.includes(subject.id)) return row
        return {
          ...row,
          subjectIds: row.subjectIds.filter((id) => id !== subject.id),
          durationOverride: null,
          startOverride: null
        }
      })
      .filter((row) => row.subjectIds.length > 0)
  }

  function addSubject(): void {
    const name = newSubjectName.value.trim()
    if (!name) return
    if (subjects.value.some((subject) => subject.name === name)) {
      MessagePlugin.warning('该科目已存在')
      return
    }
    const subject: QuickStartSubject = {
      id: createQuickStartId(),
      name,
      enabled: true,
      duration: 75
    }
    subjects.value.push(subject)
    appendSubjectRow(subject.id)
    newSubjectName.value = ''
  }

  function selectAllSubjects(): void {
    subjects.value.forEach((subject) => {
      if (!subject.enabled) toggleSubject(subject, true)
    })
  }

  function clearSubjects(): void {
    subjects.value.forEach((subject) => {
      subject.enabled = false
    })
    examRows.value = []
    clearStartOverrides()
  }

  function setRowDuration(row: QuickStartExamRow, value: number | string): void {
    const duration = clampQuickStartNumber(value, 5, 480, rowDuration(row))
    if (row.subjectIds.length === 1) {
      const subject = subjectMap.value.get(row.subjectIds[0])
      if (subject) subject.duration = duration
      row.durationOverride = null
    } else {
      row.durationOverride = duration
    }
    clearStartOverrides()
  }

  function setRowStart(row: QuickStartExamRow, value: string): void {
    const normalized = normalizeQuickStartTime(value)
    if (!normalized) return
    row.startOverride = normalized
    const index = rowIndex(row)
    examRows.value.slice(index + 1).forEach((item) => {
      item.startOverride = null
    })
  }

  function moveRow(index: number, delta: number): void {
    const target = index + delta
    if (index < 0 || target < 0 || target >= examRows.value.length) return
    const next = [...examRows.value]
    ;[next[index], next[target]] = [next[target], next[index]]
    examRows.value = next
    clearStartOverrides()
  }

  function removeRow(row: QuickStartExamRow): void {
    row.subjectIds.forEach((id) => {
      const subject = subjectMap.value.get(id)
      if (subject) subject.enabled = false
    })
    examRows.value = examRows.value.filter((item) => item.id !== row.id)
  }

  function combineSelected(): void {
    const selected = [...selectedRows.value]
    if (selected.length < 2) return
    const firstSelected = selected[0]
    const selectedIds = new Set(selected.map((row) => row.id))
    const merged: QuickStartExamRow = {
      id: createQuickStartId(),
      subjectIds: selected.flatMap((row) => row.subjectIds),
      durationOverride: selected.reduce((total, row) => total + rowDuration(row), 0),
      startOverride: null,
      selected: false
    }
    examRows.value = examRows.value.flatMap((row) => {
      if (!selectedIds.has(row.id)) return [row]
      return row.id === firstSelected.id ? [merged] : []
    })
    clearStartOverrides()
  }

  function splitRow(row: QuickStartExamRow): void {
    if (row.subjectIds.length < 2) return
    const index = rowIndex(row)
    if (index < 0) return
    const split = row.subjectIds.map<QuickStartExamRow>((id) => ({
      id: createQuickStartId(),
      subjectIds: [id],
      durationOverride: null,
      startOverride: null,
      selected: false
    }))
    examRows.value.splice(index, 1, ...split)
    clearStartOverrides()
  }

  function openSavePreset(): void {
    presetName.value = ''
    presetDialogVisible.value = true
  }

  function savePreset(): void {
    const name = presetName.value.trim()
    if (!name) {
      MessagePlugin.warning('请输入模板名称')
      return
    }
    userPresets.value.push({
      id: createQuickStartId(),
      name,
      examsPerDay: perDay.value,
      firstExamTime: normalizeQuickStartTime(firstExamTime.value, '08:00'),
      gapMinutes: gap.value
    })
    persistQuickStartPresets(userPresets.value)
    presetDialogVisible.value = false
    MessagePlugin.success('作息模板已保存')
  }

  async function goNext(): Promise<void> {
    if (step.value === 0) {
      const result = await basicFormRef.value?.validate()
      if (result !== true) return
      maxVisited.value = Math.max(maxVisited.value, 1)
      step.value = 1
      return
    }
    if (step.value === 1) {
      if (!examRows.value.length) {
        MessagePlugin.warning('请至少选择一门科目')
        return
      }
      maxVisited.value = Math.max(maxVisited.value, 2)
      step.value = 2
    }
  }

  function buildConfig(): ExamConfig | null {
    const title = basic.title.trim()
    if (!title) {
      step.value = 0
      MessagePlugin.warning('请输入考试名称')
      return null
    }
    if (!examRows.value.length) {
      step.value = 1
      MessagePlugin.warning('请至少选择一门科目')
      return null
    }
    if (scheduleWarning.value) {
      MessagePlugin.warning(scheduleWarning.value)
      return null
    }
    return buildQuickStartExamConfig(title, basic.subtitle.trim(), scheduled.value)
  }

  function generateConfigAndContinue(): void {
    const config = buildConfig()
    if (!config) return
    completed.value = {
      config,
      examCount: config.examInfos.length,
      dayCount: dayCount.value,
      dateRange: dateRange.value,
      totalMinutes: totalDuration.value
    }
    maxVisited.value = Math.max(maxVisited.value, 3)
    step.value = 3
  }

  async function openEditorFromResult(): Promise<void> {
    if (!completed.value || actionLoading.value) return
    actionLoading.value = 'editor'
    try {
      saveQuickStartDraft(completed.value.config)
      window.api.windows.openEditor()
      window.api.windows.closeCurrent()
    } finally {
      actionLoading.value = null
    }
  }

  async function startPlaybackFromResult(): Promise<void> {
    if (!completed.value || actionLoading.value) return
    actionLoading.value = 'playback'
    try {
      await window.api.player.openFromEditor(JSON.stringify(completed.value.config, null, 2))
      window.api.windows.closeCurrent()
    } catch (error) {
      MessagePlugin.error((error as Error)?.message || '放映启动失败')
    } finally {
      actionLoading.value = null
    }
  }

  async function runPluginAction(action: QuickStartActionContribution): Promise<void> {
    if (!completed.value) return
    try {
      await action.run(completed.value.config)
    } catch (error) {
      MessagePlugin.error((error as Error)?.message || '插件操作失败')
    }
  }

  function cancel(): void {
    window.api.windows.closeCurrent()
  }

  return {
    step,
    maxVisited,
    stepsCurrent,
    stepItems: STEP_ITEMS,
    onStepChange,
    basic,
    basicRules,
    basicFormRef,
    subjects,
    examRows,
    newSubjectName,
    selectedRows,
    rowName,
    rowDuration,
    rowIndex,
    toggleSubject,
    addSubject,
    selectAllSubjects,
    clearSubjects,
    setRowDuration,
    setRowStart,
    moveRow,
    removeRow,
    combineSelected,
    splitRow,
    examsPerDay,
    firstExamTime,
    gapMinutes,
    presetId,
    presetOptions,
    presetDialogVisible,
    presetName,
    openSavePreset,
    savePreset,
    scheduled,
    columns,
    dayCount,
    dateRange,
    totalDurationText,
    scheduleWarning,
    formatDate: formatQuickStartDate,
    formatWeekday: formatQuickStartWeekday,
    formatGap: formatQuickStartGap,
    completed,
    actionLoading,
    goNext,
    generateConfigAndContinue,
    openEditorFromResult,
    startPlaybackFromResult,
    pluginActions,
    currentStepKey,
    stepPanels,
    previewConfig,
    runPluginAction,
    cancel
  }
}
