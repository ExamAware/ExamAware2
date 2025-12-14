import { h, type Component } from 'vue'
import type { CodeLayoutInstance } from 'vue-code-layout'
import {
  FileIcon,
  InfoCircleIcon,
  AddIcon,
  BugIcon,
  CheckCircleIcon,
  HistoryIcon,
  ApiIcon
} from 'tdesign-icons-vue-next'

/**
 * 布局管理器
 * 负责管理CodeLayout的面板和组件
 */
export class LayoutManager {
  private codeLayout: CodeLayoutInstance | null = null
  private panelComponents: Record<string, Component> = {}
  private onAddExam?: () => void

  constructor(panelComponents: Record<string, Component>, onAddExam?: () => void) {
    this.panelComponents = panelComponents
    this.onAddExam = onAddExam
  }

  /**
   * 设置 CodeLayout 实例
   */
  setCodeLayout(codeLayout: CodeLayoutInstance): void {
    this.codeLayout = codeLayout
  }

  /**
   * 初始化布局
   */
  initializeLayout(): void {
    if (!this.codeLayout) {
      console.warn('CodeLayout instance not set')
      return
    }

    this.setupExplorerGroup()
    this.setupBottomPanels()
  }

  /**
   * 设置 Explorer 组
   */
  private setupExplorerGroup(): void {
    if (!this.codeLayout) return

    const groupExplorer = this.codeLayout.addGroup(
      {
        title: 'Explorer',
        tooltip: 'Explorer',
        name: 'explorer',
        badge: '2',
        iconLarge: () => h(FileIcon, { size: '16pt' })
      },
      'primarySideBar'
    )

    // 添加考试列表面板
    groupExplorer.addPanel({
      title: '考试列表',
      tooltip: 'Exam List',
      name: 'explorer.examlist',
      noHide: true,
      startOpen: true,
      iconLarge: () => h(FileIcon, { size: '16pt' }),
      iconSmall: () => h(FileIcon),
      actions: [
        {
          name: 'add-exam',
          icon: () => h(AddIcon),
          onClick: () => {
            this.onAddExam?.()
          }
        }
      ]
    })

    // 添加考试信息面板
    groupExplorer.addPanel({
      title: '考试信息',
      tooltip: 'Exam Info',
      name: 'explorer.examinfo',
      noHide: true,
      startOpen: true,
      iconSmall: () => h(InfoCircleIcon),
      iconLarge: () => h(InfoCircleIcon, { size: '16pt' })
    })

    // 操作记录独立分组（在主侧边栏）
    const groupHistory = this.codeLayout.addGroup(
      {
        title: '历史',
        tooltip: 'History',
        name: 'history',
        badge: '',
        iconLarge: () => h(HistoryIcon, { size: '16pt' })
      },
      'primarySideBar'
    )
    groupHistory.addPanel({
      title: '操作记录',
      tooltip: 'Operation History',
      name: 'history.operations',
      noHide: false,
      startOpen: true,
      iconSmall: () => h(InfoCircleIcon),
      iconLarge: () => h(InfoCircleIcon, { size: '16pt' })
    })

    const groupPlugins = this.codeLayout.addGroup(
      {
        title: '插件',
        tooltip: 'Plugins',
        name: 'plugins',
        badge: '',
        iconLarge: () => h(ApiIcon, { size: '16pt' })
      },
      'primarySideBar'
    )
    groupPlugins.addPanel({
      title: '插件扩展',
      tooltip: '插件注册的扩展面板',
      name: 'plugins.workspace',
      noHide: false,
      startOpen: true,
      iconSmall: () => h(ApiIcon),
      iconLarge: () => h(ApiIcon, { size: '16pt' })
    })
  }

  /**
   * 设置底部面板
   */
  private setupBottomPanels(): void {
    if (!this.codeLayout) return

    const bottomPanel = this.codeLayout.getRootGrid('bottomPanel')

    // 添加验证面板
    bottomPanel.addPanel({
      title: '问题',
      tooltip: '配置验证结果',
      name: 'bottom.validation',
      iconLarge: () => h(BugIcon, { size: '16pt' }),
      iconSmall: () => h(BugIcon),
      actions: [
        {
          name: 'refresh-validation',
          icon: () => h(CheckCircleIcon),
          tooltip: '重新验证',
          onClick: () => {
            console.log('刷新验证结果')
          }
        }
      ]
    })
  }

  /**
   * 获取面板组件
   */
  getPanelComponent(name: string): Component {
    return this.panelComponents[name] || 'div'
  }

  /**
   * 添加面板组件
   */
  addPanelComponent(name: string, component: Component): void {
    this.panelComponents[name] = component
  }

  /**
   * 移除面板组件
   */
  removePanelComponent(name: string): void {
    delete this.panelComponents[name]
  }

  /**
   * 更新面板徽章
   */
  updateGroupBadge(_groupName: string, _badge: string): void {
    // 这里可以根据需要实现徽章更新逻辑
    // 目前 vue-code-layout 可能不支持动态更新徽章
  }
}
