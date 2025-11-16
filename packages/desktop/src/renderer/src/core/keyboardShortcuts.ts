/**
 * 键盘快捷键处理器
 * 处理编辑器的键盘快捷键
 */

export interface KeyboardShortcut {
  key: string
  ctrlKey?: boolean
  metaKey?: boolean
  shiftKey?: boolean
  altKey?: boolean
  action: () => void
  description: string
}

export class KeyboardShortcutManager {
  private shortcuts: KeyboardShortcut[] = []
  private isListening = false

  constructor() {
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  /**
   * 注册快捷键
   */
  register(shortcut: KeyboardShortcut): void {
    this.shortcuts.push(shortcut)
  }

  /**
   * 批量注册快捷键
   */
  registerAll(shortcuts: KeyboardShortcut[]): void {
    this.shortcuts.push(...shortcuts)
  }

  /**
   * 开始监听键盘事件
   */
  startListening(): void {
    if (!this.isListening) {
      document.addEventListener('keydown', this.handleKeyDown)
      this.isListening = true
    }
  }

  /**
   * 停止监听键盘事件
   */
  stopListening(): void {
    if (this.isListening) {
      document.removeEventListener('keydown', this.handleKeyDown)
      this.isListening = false
    }
  }

  /**
   * 处理键盘事件
   */
  private handleKeyDown(event: KeyboardEvent): void {
    // 忽略在输入框中的按键
    const target = event.target as HTMLElement
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return
    }

    for (const shortcut of this.shortcuts) {
      const keyMatch = shortcut.key.toLowerCase() === event.key.toLowerCase()
      const matchModifier = (expected: boolean | undefined, actual: boolean) => {
        const expectedFlag = expected ?? false
        return expectedFlag === actual
      }

      const ctrlMatch = matchModifier(shortcut.ctrlKey, event.ctrlKey)
      const metaMatch = matchModifier(shortcut.metaKey, event.metaKey)
      const shiftMatch = matchModifier(shortcut.shiftKey, event.shiftKey)
      const altMatch = matchModifier(shortcut.altKey, event.altKey)

      if (keyMatch && ctrlMatch && metaMatch && shiftMatch && altMatch) {
        event.preventDefault()
        shortcut.action()
        break
      }
    }
  }

  /**
   * 获取所有快捷键
   */
  getShortcuts(): KeyboardShortcut[] {
    return [...this.shortcuts]
  }

  /**
   * 清除所有快捷键
   */
  clear(): void {
    this.shortcuts = []
  }
}
