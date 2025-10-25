import type { MenuOptions } from '@imengyu/vue3-context-menu'

/**
 * 菜单配置管理器
 * 负责管理应用程序的菜单配置
 */
export class MenuConfigManager {
  private handlers: any

  constructor(handlers: {
    onNew: () => void
    onOpen: () => void
    onSave: () => void
    onSaveAs?: () => void
    onImport?: () => void
    onExport?: () => void
    onClose?: () => void
    onRestoreSession?: () => void
    onUndo?: () => void
    onRedo?: () => void
    onCut?: () => void
    onCopy?: () => void
    onPaste?: () => void
    onFind?: () => void
    onReplace?: () => void
    onAbout: () => void
    onGithub: () => void
    onPresentation?: () => void
    onAddExam?: () => void
    onDeleteExam?: () => void
    onNextExam?: () => void
    onPrevExam?: () => void
  }) {
    this.handlers = handlers
  }

  /**
   * 获取菜单配置
   */
  getMenuConfig(): MenuOptions {
    return {
      x: 0,
      y: 0,
      items: [
        {
          label: '文件',
          children: [
            { label: '新建', onClick: this.handlers.onNew, shortcut: 'Ctrl+N' },
            { label: '打开', onClick: this.handlers.onOpen, shortcut: 'Ctrl+O' },
            { label: '保存', onClick: this.handlers.onSave, shortcut: 'Ctrl+S' },
            { label: '另存为', onClick: this.handlers.onSaveAs, shortcut: 'Ctrl+Shift+S' },
            { divided: true },
            { label: '导入', onClick: this.handlers.onImport },
            { label: '导出', onClick: this.handlers.onExport },
            { divided: true },
            { label: '关闭', onClick: this.handlers.onClose, shortcut: 'Ctrl+W' }
          ]
        },
        {
          label: '编辑',
          children: [
            { label: '撤销', onClick: this.handlers.onUndo, shortcut: 'Ctrl+Z' },
            { label: '重做', onClick: this.handlers.onRedo, shortcut: 'Ctrl+Y' },
            { divided: true },
            { label: '剪切', onClick: this.handlers.onCut, shortcut: 'Ctrl+X' },
            { label: '复制', onClick: this.handlers.onCopy, shortcut: 'Ctrl+C' },
            { label: '粘贴', onClick: this.handlers.onPaste, shortcut: 'Ctrl+V' },
            { divided: true },
            { label: '查找', onClick: this.handlers.onFind, shortcut: 'Ctrl+F' },
            { label: '替换', onClick: this.handlers.onReplace, shortcut: 'Ctrl+H' }
          ]
        },
        {
          label: '考试',
          children: [
            { label: '添加考试', onClick: this.handlers.onAddExam },
            { label: '删除考试', onClick: this.handlers.onDeleteExam },
            { divided: true },
            { label: '上一个考试', onClick: this.handlers.onPrevExam },
            { label: '下一个考试', onClick: this.handlers.onNextExam },
            { divided: true },
            { label: '开始放映', onClick: this.handlers.onPresentation }
          ]
        },
        {
          label: '帮助',
          children: [
            { label: '关于', onClick: this.handlers.onAbout },
            { label: 'GitHub', onClick: this.handlers.onGithub }
          ]
        }
      ]
    }
  }
}
