import fs from 'fs'
import { promises as fsp } from 'fs'
import path from 'path'
import type { PluginPreferenceStore } from './types'

/**
 * 插件偏好设置数据结构
 * Plugin preference data structure
 */
interface PluginPreferencePayload {
  enabled: Record<string, boolean>
  config: Record<string, Record<string, any>>
}

// 默认的偏好设置数据 / Default preference data
const DEFAULT_PAYLOAD: PluginPreferencePayload = {
  enabled: {},
  config: {}
}

/**
 * 基于文件的插件偏好设置存储实现
 * File-based plugin preference store implementation
 * 负责管理插件的启用状态和配置数据，使用JSON文件进行持久化存储
 * Responsible for managing plugin enabled status and config data, using JSON file for persistence
 */
export class FilePluginPreferenceStore implements PluginPreferenceStore {
  private data: PluginPreferencePayload = { ...DEFAULT_PAYLOAD }
  private loaded = false
  private writing: Promise<void> | null = null

  /**
   * 构造函数
   * Constructor
   * @param filePath - 存储偏好设置的JSON文件路径 / JSON file path for storing preferences
   */
  constructor(private filePath: string) {}

  /**
   * 确保数据已从文件加载（同步方法）
   * Ensure data is loaded from file (synchronous method)
   * 延迟加载模式，只在首次访问时读取文件
   * Lazy loading mode, only reads file on first access
   */
  private ensureLoadedSync() {
    if (this.loaded) return
    try {
      const raw = fs.readFileSync(this.filePath, 'utf-8')
      const parsed = JSON.parse(raw) as Partial<PluginPreferencePayload>
      const enabled = parsed.enabled && typeof parsed.enabled === 'object' ? parsed.enabled : {}
      const config = parsed.config && typeof parsed.config === 'object' ? parsed.config : {}
      this.data = {
        enabled: { ...DEFAULT_PAYLOAD.enabled, ...enabled },
        config: { ...DEFAULT_PAYLOAD.config, ...config }
      }
    } catch {
      this.data = { ...DEFAULT_PAYLOAD }
    }
    this.loaded = true
  }

  /**
   * 异步持久化数据到文件
   * Asynchronously persist data to file
   * 使用临时文件和原子重命名确保数据完整性
   * Uses temporary file and atomic rename to ensure data integrity
   */
  private async persist() {
    this.ensureLoadedSync()
    if (this.writing) {
      await this.writing
      return
    }
    const save = async () => {
      await fsp.mkdir(path.dirname(this.filePath), { recursive: true })
      const tmp = `${this.filePath}.tmp`
      await fsp.writeFile(tmp, JSON.stringify(this.data, null, 2), 'utf-8')
      await fsp.rename(tmp, this.filePath)
    }
    this.writing = save()
    try {
      await this.writing
    } finally {
      this.writing = null
    }
  }

  /**
   * 检查插件是否启用
   * Check if plugin is enabled
   * @param name - 插件名称 / Plugin name
   * @returns 是否启用 / Whether enabled
   */
  isEnabled(name: string) {
    this.ensureLoadedSync()
    return this.data.enabled[name]
  }

  /**
   * 设置插件启用状态
   * Set plugin enabled status
   * @param name - 插件名称 / Plugin name
   * @param enabled - 启用状态 / Enabled status
   */
  async setEnabled(name: string, enabled: boolean) {
    this.ensureLoadedSync()
    if (this.data.enabled[name] === enabled) return
    this.data.enabled[name] = enabled
    await this.persist()
  }

  /**
   * 获取插件配置
   * Get plugin configuration
   * @param name - 插件名称 / Plugin name
   * @returns 配置对象或undefined / Configuration object or undefined
   */
  getConfig<T = Record<string, any>>(name: string) {
    this.ensureLoadedSync()
    return this.data.config[name] as T | undefined
  }

  /**
   * 设置插件配置
   * Set plugin configuration
   * @param name - 插件名称 / Plugin name
   * @param config - 配置对象 / Configuration object
   */
  async setConfig<T = Record<string, any>>(name: string, config: T) {
    this.ensureLoadedSync()
    this.data.config[name] = config as Record<string, any>
    await this.persist()
  }
}

/**
 * 创建基于文件的插件偏好设置存储实例
 * Create a file-based plugin preference store instance
 * @param filePath - 存储文件路径 / Storage file path
 * @returns FilePluginPreferenceStore实例 / FilePluginPreferenceStore instance
 */
export function createFilePreferenceStore(filePath: string) {
  return new FilePluginPreferenceStore(filePath)
}
