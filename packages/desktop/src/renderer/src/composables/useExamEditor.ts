import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue'
import type { ExamConfig } from '@renderer/core/configTypes'
import { ExamConfigManager } from '@renderer/core/configManager'
import { FileOperationManager } from '@renderer/core/fileOperations'
import { RecentFileManager } from '@renderer/core/recentFileManager'
import { MessageService } from '@renderer/core/messageService'
import { KeyboardShortcutManager, type KeyboardShortcut } from '@renderer/core/keyboardShortcuts'
import { historyStore } from '@renderer/core/historyStore'

/**
 * 考试编辑器状态管理
 */
export function useExamEditor() {
  // 状态
  const configManager = new ExamConfigManager()
  const currentExamIndex = ref<number | null>(null)
  const windowTitle = ref('ExamAware Editor')
  const showAboutDialog = ref(false)

  // 文件状态管理
  const currentFilePath = ref<string | null>(null)
  const isFileModified = ref(false)
  const isNewFile = ref(true)

  // 键盘快捷键管理器
  const keyboardManager = new KeyboardShortcutManager()

  // 响应式配置
  const examConfig = reactive<ExamConfig>(configManager.getConfig())

  // 计算属性
  const currentExam = computed(() => {
    if (currentExamIndex.value === null || !examConfig.examInfos[currentExamIndex.value]) {
      return null
    }
    return examConfig.examInfos[currentExamIndex.value]
  })

  const hasExams = computed(() => examConfig.examInfos.length > 0)

  // 计算窗口标题
  const computedWindowTitle = computed(() => {
    let title = 'ExamAware Editor'
    if (currentFilePath.value) {
      const fileName = currentFilePath.value.split('/').pop()?.replace('.exam.json', '').replace('.json', '')
      title += ` - ${fileName}`
    } else if (examConfig.examName) {
      title += ` - ${examConfig.examName}`
    }
    if (isFileModified.value && !isNewFile.value) {
      title += ' •'
    }
    return title
  })

  // 监听计算属性变化更新窗口标题
  watch(computedWindowTitle, (newTitle) => {
    windowTitle.value = newTitle
  })

  // 标记文件已修改
  const markFileAsModified = () => {
    if (!isFileModified.value) {
      isFileModified.value = true
    }
  }

  // 配置变更监听器
  const configListener = (newConfig: ExamConfig) => {
    console.log('useExamEditor: configListener called with:', newConfig)
    console.log('useExamEditor: current examConfig before update:', examConfig)

    // 使用响应式替换
    examConfig.examName = newConfig.examName || ''
    examConfig.message = newConfig.message || ''
    examConfig.examInfos = [...(newConfig.examInfos || [])]

    console.log('useExamEditor: examConfig after update:', examConfig)

    // 历史：应用外部配置时视为重放，不自动 push
    // 标记文件已修改（除非是新文件加载）
    if (!isNewFile.value) {
      markFileAsModified()
    }
  }

  // 方法
  const addExam = () => {
    const newIndex = configManager.addExamInfo()
    currentExamIndex.value = newIndex
    markFileAsModified()
    historyStore.push('新增考试', examConfig)
  }

  const deleteExam = (index: number) => {
    configManager.deleteExamInfo(index)
    if (currentExamIndex.value === index) {
      currentExamIndex.value = null
    } else if (currentExamIndex.value !== null && currentExamIndex.value > index) {
      currentExamIndex.value--
    }
    markFileAsModified()
    historyStore.push('删除考试', examConfig)
  }

  const updateExam = (index: number, examInfo: Partial<typeof examConfig.examInfos[0]>) => {
    configManager.updateExamInfo(index, examInfo)
    markFileAsModified()
    historyStore.pushDebounced(`updateExam:${index}`, 400, '编辑考试', examConfig)
  }

  const switchToExam = (index: number) => {
    if (index >= 0 && index < examConfig.examInfos.length) {
      currentExamIndex.value = index
    }
  }

  const updateConfig = (newConfig: Partial<ExamConfig>) => {
    configManager.updateConfig(newConfig)
    markFileAsModified()
    historyStore.pushDebounced('updateConfig', 400, '编辑配置', examConfig)
  }

  const newProject = () => {
    if (isFileModified.value && !isNewFile.value) {
      // 这里应该询问用户是否保存当前文件
      const shouldSave = confirm('当前文件已修改，是否保存？')
      if (shouldSave) {
        saveProject()
      }
    }

    configManager.reset()
    currentExamIndex.value = null
    currentFilePath.value = null
    isFileModified.value = false
    isNewFile.value = true
    windowTitle.value = 'ExamAware Editor - 新项目'
    historyStore.init(examConfig, '新项目')
  }

  const saveProject = async () => {
    if (isNewFile.value || !currentFilePath.value) {
      return await saveProjectAs()
    }

    try {
      const content = configManager.exportToJson()
      const success = await window.api?.saveFile(currentFilePath.value, content)
      if (success) {
        isFileModified.value = false
        MessageService.success('文件已保存')
        console.log('文件已保存:', currentFilePath.value)
        return true
      } else {
        MessageService.error('保存失败')
        console.error('保存失败')
        return false
      }
    } catch (error) {
      MessageService.error('保存失败')
      console.error('保存失败:', error)
      return false
    }
  }

  const saveProjectAs = async () => {
    try {
      const content = configManager.exportToJson()

      const filePath = await window.api?.saveFileDialog()
      if (filePath) {
        const success = await window.api?.saveFile(filePath, content)
        if (success) {
          currentFilePath.value = filePath
          isFileModified.value = false
          isNewFile.value = false
          RecentFileManager.addRecentFile(filePath)
          MessageService.success('文件已保存')
          console.log('文件已保存:', filePath)
          historyStore.push('另存为', examConfig)
          return true
        } else {
          MessageService.error('保存失败')
          console.error('保存失败')
          return false
        }
      }
      return false
    } catch (error) {
      MessageService.error('另存为失败')
      console.error('另存为失败:', error)
      return false
    }
  }

  const exportProject = () => {
    try {
      const content = configManager.exportToJson()
      const examName = examConfig.examInfos[0]?.name || 'exam'
      FileOperationManager.exportJsonFile(content, `${examName}.exam.json`)
      MessageService.success('项目已导出')
  historyStore.push('导出项目', examConfig)
    } catch (error) {
      MessageService.error('导出失败')
      console.error('导出失败:', error)
    }
  }

  const importProject = async () => {
    try {
      const content = await FileOperationManager.importJsonFile()
      if (content) {
        const success = configManager.loadFromJson(content)
        if (success) {
          currentExamIndex.value = null
          windowTitle.value = 'ExamAware Editor - 已导入项目'
          MessageService.success('项目导入成功')
          console.log('项目导入成功')
          historyStore.init(examConfig, '导入项目')
        } else {
          MessageService.error('项目导入失败：文件格式不正确')
          console.error('项目导入失败：文件格式不正确')
        }
      }
    } catch (error) {
      MessageService.error('导入失败')
      console.error('导入失败:', error)
    }
  }

  const openProject = async () => {
    if (isFileModified.value && !isNewFile.value) {
      const shouldSave = confirm('当前文件已修改，是否保存？')
      if (shouldSave) {
        await saveProject()
      }
    }

    try {
      const filePath = await window.api?.openFileDialog()
      if (filePath) {
        const content = await window.api?.readFile(filePath)
        if (content) {
          const success = configManager.loadFromJson(content)
          if (success) {
            currentExamIndex.value = null
            currentFilePath.value = filePath
            isFileModified.value = false
            isNewFile.value = false

            RecentFileManager.addRecentFile(filePath)
            MessageService.success('项目打开成功')
            console.log('项目打开成功:', filePath)
            historyStore.init(examConfig, '打开项目')
          } else {
            MessageService.error('项目打开失败：文件格式不正确')
            console.error('项目打开失败：文件格式不正确')
          }
        } else {
          MessageService.error('文件读取失败')
          console.error('文件读取失败')
        }
      }
    } catch (error) {
      MessageService.error('打开失败')
      console.error('打开失败:', error)
    }
  }

  const closeProject = () => {
    configManager.reset()
    currentExamIndex.value = null
    windowTitle.value = 'ExamAware Editor'
    MessageService.info('项目已关闭')
    console.log('项目已关闭')
    historyStore.init(examConfig, '关闭项目')
  }
  const undoAction = () => {
    // 撤销到上一历史
    historyStore.undo()
  }

  const redoAction = () => {
    // 重做到下一历史
    historyStore.redo()
  }

  const cutAction = () => {
    console.log('剪切操作')
    // TODO: 实现剪切功能
  }

  const copyAction = () => {
    console.log('复制操作')
    // TODO: 实现复制功能
  }

  const pasteAction = () => {
    console.log('粘贴操作')
    // TODO: 实现粘贴功能
  }

  const findAction = () => {
    console.log('查找操作')
    // TODO: 实现查找功能
  }

  const replaceAction = () => {
    console.log('替换操作')
    // TODO: 实现替换功能
  }

  const openAboutDialog = () => {
    showAboutDialog.value = true
  }

  const closeAboutDialog = () => {
    showAboutDialog.value = false
  }

  const openGithub = () => {
    window.open('https://github.com/ExamAware/')
  }

  // 恢复上次会话
  const restoreLastSession = () => {
    const success = configManager.loadFromLocalStorage()
    if (success) {
      currentExamIndex.value = null
      windowTitle.value = 'ExamAware Editor - 已恢复会话'
      MessageService.success('上次会话已恢复')
      console.log('上次会话已恢复')
    } else {
      MessageService.info('没有找到上次会话数据')
      console.log('没有找到上次会话数据')
    }
  }

  // 生命周期
  // 生命周期
  onMounted(() => {
    configManager.addListener(configListener)
    // 绑定历史应用函数：将历史快照应用到 configManager
    historyStore.setApply((snapshotJson) => {
      try {
        const snap = JSON.parse(snapshotJson)
        // 用 configManager 的加载能力应用快照
        // 注意：此处标记 isNewFile 以避免 markFileAsModified
        configManager.updateConfig(snap)
      } catch (e) {
        console.error('History apply failed', e)
      }
    })
    historyStore.init(examConfig, '初始状态')
    // 移除自动加载功能，改为手动恢复
    // configManager.loadFromLocalStorage()

    // 初始化键盘快捷键
    const shortcuts: KeyboardShortcut[] = [
      { key: 'n', ctrlKey: true, action: newProject, description: '新建项目' },
      { key: 'o', ctrlKey: true, action: openProject, description: '打开项目' },
      { key: 's', ctrlKey: true, action: saveProject, description: '保存项目' },
      { key: 's', ctrlKey: true, shiftKey: true, action: saveProjectAs, description: '另存为' },
      { key: 'w', ctrlKey: true, action: closeProject, description: '关闭项目' },
      { key: 'z', ctrlKey: true, action: undoAction, description: '撤销' },
      { key: 'y', ctrlKey: true, action: redoAction, description: '重做' },
      { key: 'f', ctrlKey: true, action: findAction, description: '查找' },
      { key: 'h', ctrlKey: true, action: replaceAction, description: '替换' },
    ]

    keyboardManager.registerAll(shortcuts)
    keyboardManager.startListening()

    // 处理窗口关闭前的保存提示
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // 先冲刷所有延迟的历史快照，避免丢失最后一次编辑
      historyStore.flushAllDebounced()
      if (isFileModified.value && !isNewFile.value) {
        event.preventDefault()
        event.returnValue = '您有未保存的更改，确定要离开吗？'
        return '您有未保存的更改，确定要离开吗？'
      }
      return undefined
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    // 页面隐藏或跳转时也尝试冲刷
    const handleVisibility = () => {
      if (document.hidden) historyStore.flushAllDebounced()
    }
    const handlePageHide = () => historyStore.flushAllDebounced()
    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('pagehide', handlePageHide)

    // 监听启动时打开文件的事件
    window.electronAPI?.onOpenFileAtStartup?.(async (filePath: string) => {
      try {
        console.log('Opening file at startup:', filePath)
        const content = await window.api?.readFile(filePath)
        if (content) {
          const success = configManager.loadFromJson(content)
          if (success) {
            currentExamIndex.value = null
            currentFilePath.value = filePath
            isFileModified.value = false
            isNewFile.value = false

            MessageService.success('文件打开成功')
            console.log('文件打开成功')
          } else {
            MessageService.error('文件打开失败：文件格式不正确')
            console.error('文件打开失败：文件格式不正确')
          }
        } else {
          MessageService.error('文件读取失败')
          console.error('文件读取失败')
        }
      } catch (error) {
        MessageService.error('文件打开失败')
        console.error('文件打开失败:', error)
      }
    })
  })

  onUnmounted(() => {
    historyStore.flushAllDebounced()
    configManager.removeListener(configListener)
    keyboardManager.stopListening()
    // 清理监听
    // 注意：此处无法直接移除在 onMounted 中声明的本地函数，
    // 因此建议使用相同引用移除（若需要更严格，可将处理器提升到外层变量）。
  })

  return {
    // 状态
    examConfig,
    currentExamIndex,
    windowTitle,
    showAboutDialog,

    // 文件状态
    currentFilePath,
    isFileModified,
    isNewFile,

    // 计算属性
    currentExam,
    hasExams,

    // 方法
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

    // 管理器实例（用于高级操作）
    configManager,
  }
}
