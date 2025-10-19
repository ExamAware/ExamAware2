import type { ExamConfig, ExamInfo } from './configTypes'
import { parseExamConfig, getSortedExamConfig, validateExamConfig } from './parser'
import { formatLocalDateTime } from '@renderer/utils/dateFormat'
import { getSyncedTime } from '@renderer/utils/timeUtils'

/**
 * 考试配置管理器
 * 负责配置文件的读写、验证和状态管理
 */
export class ExamConfigManager {
  private static readonly STORAGE_KEY = 'eaProfile'
  private config: ExamConfig
  private listeners: Set<(config: ExamConfig) => void> = new Set()

  constructor(initialConfig?: ExamConfig) {
    this.config = initialConfig || this.getDefaultConfig()
  }

  /**
   * 获取默认配置
   */
  private getDefaultConfig(): ExamConfig {
    return {
      examName: '未命名考试',
      message: '考试信息',
      examInfos: [],
    }
  }

  /**
   * 获取当前配置
   */
  getConfig(): ExamConfig {
    return { ...this.config }
  }

  /**
   * 更新配置
   */
  updateConfig(newConfig: Partial<ExamConfig>): void {
    this.config = { ...this.config, ...newConfig }
    this.notifyListeners()
    this.saveToLocalStorage()
  }

  /**
   * 添加考试信息
   */
  addExamInfo(examInfo?: Partial<ExamInfo>): number {
    const now = new Date(getSyncedTime())
    const lastExam = this.config.examInfos[this.config.examInfos.length - 1]
    const start = lastExam
      ? new Date(new Date(lastExam.end).getTime() + 10 * 60000)
      : now
    const end = new Date(start.getTime() + 60 * 60000)

    const newExamInfo: ExamInfo = {
      name: `未命名考试${this.config.examInfos.length + 1}`,
      start: formatLocalDateTime(start),
      end: formatLocalDateTime(end),
      alertTime: 15,
      materials: [],
      ...examInfo,
    }

    this.config.examInfos.push(newExamInfo)
    this.notifyListeners()
    this.saveToLocalStorage()

    return this.config.examInfos.length - 1
  }

  /**
   * 更新考试信息
   */
  updateExamInfo(index: number, examInfo: Partial<ExamInfo>): void {
    if (index >= 0 && index < this.config.examInfos.length) {
      // 保持对象引用不变，避免外层基于对象身份的追踪/UID 失效
      Object.assign(this.config.examInfos[index], examInfo)
      this.notifyListeners()
      this.saveToLocalStorage()
    }
  }

  /**
   * 删除考试信息
   */
  deleteExamInfo(index: number): void {
    if (index >= 0 && index < this.config.examInfos.length) {
      this.config.examInfos.splice(index, 1)
      this.notifyListeners()
      this.saveToLocalStorage()
    }
  }

  /**
   * 移动考试信息位置
   */
  moveExamInfo(fromIndex: number, toIndex: number): void {
    if (
      fromIndex >= 0 &&
      fromIndex < this.config.examInfos.length &&
      toIndex >= 0 &&
      toIndex < this.config.examInfos.length
    ) {
      const examInfo = this.config.examInfos.splice(fromIndex, 1)[0]
      this.config.examInfos.splice(toIndex, 0, examInfo)
      this.notifyListeners()
      this.saveToLocalStorage()
    }
  }

  /**
   * 重置配置
   */
  reset(): void {
    this.config = this.getDefaultConfig()
    this.notifyListeners()
    this.saveToLocalStorage()
  }

  /**
   * 从JSON字符串加载配置
   */
  loadFromJson(jsonString: string): boolean {
    const parsedConfig = parseExamConfig(jsonString)
    if (parsedConfig && validateExamConfig(parsedConfig)) {
      this.config = parsedConfig
      this.notifyListeners()
      this.saveToLocalStorage()
      return true
    }
    return false
  }

  /**
   * 导出为JSON字符串
   */
  exportToJson(): string {
    return JSON.stringify(getSortedExamConfig(this.config), null, 2)
  }

  /**
   * 保存到本地存储
   */
  saveToLocalStorage(): void {
    localStorage.setItem(ExamConfigManager.STORAGE_KEY, JSON.stringify(this.config))
  }

  /**
   * 从本地存储加载
   */
  loadFromLocalStorage(): boolean {
    const storedConfig = localStorage.getItem(ExamConfigManager.STORAGE_KEY)
    if (storedConfig) {
      return this.loadFromJson(storedConfig)
    }
    return false
  }

  /**
   * 添加配置变更监听器
   */
  addListener(listener: (config: ExamConfig) => void): void {
    this.listeners.add(listener)
  }

  /**
   * 移除配置变更监听器
   */
  removeListener(listener: (config: ExamConfig) => void): void {
    this.listeners.delete(listener)
  }

  /**
   * 通知所有监听器
   */
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.config))
  }

  /**
   * 验证当前配置
   */
  validate(): boolean {
    return validateExamConfig(this.config)
  }
}
