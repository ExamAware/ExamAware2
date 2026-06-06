/**
 * 文件操作管理器
 * 负责处理文件的导入导出操作
 */

import { getSyncedTime } from '@renderer/utils/timeUtils'

export class FileOperationManager {
  /**
   * 导入JSON文件
   */
  static async importJsonFile(): Promise<string | null> {
    return new Promise((resolve) => {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = '.ea2,.json'

      input.onchange = (e) => {
        const files = (e.target as HTMLInputElement).files
        if (files && files.length > 0) {
          const file = files[0]
          const reader = new FileReader()

          reader.onload = () => {
            const result = reader.result?.toString() || null
            resolve(result)
          }

          reader.onerror = () => resolve(null)
          reader.readAsText(file)
        } else {
          resolve(null)
        }
      }

      input.click()
    })
  }

  /**
   * 导出JSON文件
   */
  static exportJsonFile(content: string, filename: string = 'exam.ea2'): void {
    const blob = new Blob([content], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')

    a.href = url
    a.download = filename
    a.click()

    URL.revokeObjectURL(url)
  }

  /**
   * 另存为 - 允许用户选择文件名
   */
  static exportJsonFileAs(content: string, defaultName: string = 'exam.ea2'): void {
    // 在浏览器环境中，我们仍然使用标准的下载方式
    // 因为 File System Access API 在某些浏览器中支持有限
    const timestamp = new Date(getSyncedTime()).toISOString().replace(/[:.]/g, '-').split('T')[0]
    const filename = defaultName.replace('.ea2', `_${timestamp}.ea2`)
    this.exportJsonFile(content, filename)
  }

  /**
   * 保存配置到本地存储
   */
  static saveToLocalStorage(key: string, content: string): void {
    try {
      localStorage.setItem(key, content)
    } catch (error) {
      console.error('Failed to save to localStorage:', error)
    }
  }

  /**
   * 从本地存储读取配置
   */
  static loadFromLocalStorage(key: string): string | null {
    try {
      return localStorage.getItem(key)
    } catch (error) {
      console.error('Failed to load from localStorage:', error)
      return null
    }
  }

  /**
   * 清除本地存储
   */
  static clearLocalStorage(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Failed to clear localStorage:', error)
    }
  }

  /**
   * 获取最近打开的文件列表
   */
  static getRecentFiles(): string[] {
    try {
      const recent = localStorage.getItem('recentFiles')
      return recent ? JSON.parse(recent) : []
    } catch (error) {
      console.error('Failed to get recent files:', error)
      return []
    }
  }

  /**
   * 添加文件到最近文件列表
   */
  static addToRecentFiles(filename: string): void {
    try {
      const recent = this.getRecentFiles()
      const filtered = recent.filter((f) => f !== filename)
      filtered.unshift(filename)

      // 只保留最近10个文件
      const limited = filtered.slice(0, 10)

      localStorage.setItem('recentFiles', JSON.stringify(limited))
    } catch (error) {
      console.error('Failed to add to recent files:', error)
    }
  }

  /**
   * 清除最近文件列表
   */
  static clearRecentFiles(): void {
    try {
      localStorage.removeItem('recentFiles')
    } catch (error) {
      console.error('Failed to clear recent files:', error)
    }
  }

  /**
   * 处理拖拽文件上传
   */
  static setupDragAndDrop(
    element: HTMLElement,
    onFileDropped: (content: string) => void
  ): () => void {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault()
      element.classList.add('drag-over')
    }

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault()
      element.classList.remove('drag-over')
    }

    const handleDrop = async (e: DragEvent) => {
      e.preventDefault()
      element.classList.remove('drag-over')

      const files = e.dataTransfer?.files
      if (files && files.length > 0) {
        const file = files[0]
        if (
          file.type === 'application/json' ||
          file.name.endsWith('.json') ||
          file.name.endsWith('.ea2')
        ) {
          const reader = new FileReader()
          reader.onload = () => {
            const content = reader.result?.toString()
            if (content) {
              onFileDropped(content)
            }
          }
          reader.readAsText(file)
        }
      }
    }

    element.addEventListener('dragover', handleDragOver)
    element.addEventListener('dragleave', handleDragLeave)
    element.addEventListener('drop', handleDrop)

    // 返回清理函数
    return () => {
      element.removeEventListener('dragover', handleDragOver)
      element.removeEventListener('dragleave', handleDragLeave)
      element.removeEventListener('drop', handleDrop)
    }
  }
}
