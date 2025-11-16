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
    onCloseWindow?: () => void
    onCloseProject?: () => void
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
    const platform =
      typeof window !== 'undefined' ? window.electronAPI?.platform || 'unknown' : 'unknown'
    const isMac = platform === 'darwin'

    const symbols = {
      primary: isMac ? '⌘' : 'Ctrl',
      shift: isMac ? '⇧' : 'Shift',
      alt: isMac ? '⌥' : 'Alt'
    }

    const joinShortcut = (parts: string[]) => (isMac ? parts.join('') : parts.join('+'))

    const formatShortcut = (key: string, opts: { shift?: boolean; alt?: boolean } = {}) => {
      const upperKey = key.toUpperCase()
      if (isMac) {
        const pieces: string[] = []
        if (opts.shift) pieces.push(symbols.shift)
        if (opts.alt) pieces.push(symbols.alt)
        pieces.push(symbols.primary)
        pieces.push(upperKey)
        return joinShortcut(pieces)
      }

      const pieces: string[] = [symbols.primary]
      if (opts.shift) pieces.push(symbols.shift)
      if (opts.alt) pieces.push(symbols.alt)
      pieces.push(upperKey)
      return joinShortcut(pieces)
    }

    const redoShortcut = isMac ? formatShortcut('Z', { shift: true }) : formatShortcut('Y')

    type MenuItemConfig = NonNullable<MenuOptions['items']>[number]

    const fileMenuChildren: MenuItemConfig[] = [
      { label: '新建', onClick: this.handlers.onNew, shortcut: formatShortcut('N') },
      { label: '打开', onClick: this.handlers.onOpen, shortcut: formatShortcut('O') },
      { label: '保存', onClick: this.handlers.onSave, shortcut: formatShortcut('S') },
      {
        label: '另存为',
        onClick: this.handlers.onSaveAs,
        shortcut: formatShortcut('S', { shift: true })
      }
    ]

    const importExportItems: MenuItemConfig[] = []
    if (this.handlers.onImport) {
      importExportItems.push({ label: '导入', onClick: this.handlers.onImport })
    }
    if (this.handlers.onExport) {
      importExportItems.push({ label: '导出', onClick: this.handlers.onExport })
    }
    if (importExportItems.length > 0) {
      fileMenuChildren.push({ divided: true })
      fileMenuChildren.push(...importExportItems)
    }

    fileMenuChildren.push({ divided: true })
    fileMenuChildren.push({
      label: '关闭窗口',
      onClick: this.handlers.onCloseWindow,
      shortcut: formatShortcut('W')
    })
    fileMenuChildren.push({ label: '关闭项目', onClick: this.handlers.onCloseProject })

    return {
      x: 0,
      y: 0,
      items: [
        {
          label: '文件',
          children: fileMenuChildren
        },
        {
          label: '编辑',
          children: [
            { label: '撤销', onClick: this.handlers.onUndo, shortcut: formatShortcut('Z') },
            { label: '重做', onClick: this.handlers.onRedo, shortcut: redoShortcut },
            { divided: true },
            { label: '剪切', onClick: this.handlers.onCut, shortcut: formatShortcut('X') },
            { label: '复制', onClick: this.handlers.onCopy, shortcut: formatShortcut('C') },
            { label: '粘贴', onClick: this.handlers.onPaste, shortcut: formatShortcut('V') },
            { divided: true },
            { label: '查找', onClick: this.handlers.onFind, shortcut: formatShortcut('F') },
            { label: '替换', onClick: this.handlers.onReplace, shortcut: formatShortcut('H') }
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
