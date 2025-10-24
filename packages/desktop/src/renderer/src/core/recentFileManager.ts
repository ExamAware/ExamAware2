/**
 * 最近文件管理器
 * 管理最近打开的文件列表
 */

export interface RecentFile {
  filePath: string
  fileName: string
  lastOpened: Date
}

export class RecentFileManager {
  private static readonly STORAGE_KEY = 'recentFiles'
  private static readonly MAX_RECENT_FILES = 10

  /**
   * 获取最近文件列表
   */
  static getRecentFiles(): RecentFile[] {
    try {
      const recent = localStorage.getItem(this.STORAGE_KEY)
      if (recent) {
        const files = JSON.parse(recent) as RecentFile[]
        return files.map(file => ({
          ...file,
          lastOpened: new Date(file.lastOpened)
        }))
      }
      return []
    } catch (error) {
      console.error('Failed to get recent files:', error)
      return []
    }
  }

  /**
   * 添加文件到最近文件列表
   */
  static addRecentFile(filePath: string): void {
    try {
      const fileName = filePath.split('/').pop()?.replace('.ea2', '').replace('.json', '') || 'Unnamed'
      const recent = this.getRecentFiles()

      // 移除已存在的相同文件
      const filtered = recent.filter(f => f.filePath !== filePath)

      // 添加新文件到开头
      filtered.unshift({
        filePath,
        fileName,
        lastOpened: new Date()
      })

      // 限制数量
      const limited = filtered.slice(0, this.MAX_RECENT_FILES)

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(limited))
    } catch (error) {
      console.error('Failed to add to recent files:', error)
    }
  }

  /**
   * 清除最近文件列表
   */
  static clearRecentFiles(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY)
    } catch (error) {
      console.error('Failed to clear recent files:', error)
    }
  }

  /**
   * 移除指定文件
   */
  static removeRecentFile(filePath: string): void {
    try {
      const recent = this.getRecentFiles()
      const filtered = recent.filter(f => f.filePath !== filePath)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtered))
    } catch (error) {
      console.error('Failed to remove recent file:', error)
    }
  }

  /**
   * 获取最近文件的文件名列表（用于向后兼容）
   */
  static getRecentFileNames(): string[] {
    return this.getRecentFiles().map(f => f.fileName)
  }
}
