import type { ExamConfig } from './configTypes'
import { getSortedExamConfig, validateExamConfig } from './parser'

// 配置数据源类型
export type ConfigSource =
  | { type: 'file'; path: string }
  | { type: 'url'; url: string }
  | { type: 'editor'; data: string }
  | { type: 'ipc' }
  | { type: 'direct'; data: string }

// 配置加载状态
export interface ConfigLoadState {
  loading: boolean
  loaded: boolean
  error: string | null
  source: ConfigSource | null
  config: ExamConfig | null
}

// 配置加载器类
export class ConfigLoader {
  private state: ConfigLoadState = {
    loading: false,
    loaded: false,
    error: null,
    source: null,
    config: null
  }

  private listeners: ((state: ConfigLoadState) => void)[] = []

  constructor(private ipcRenderer?: any) {}

  // 添加状态监听器
  onStateChange(listener: (state: ConfigLoadState) => void) {
    this.listeners.push(listener)
    return () => {
      const index = this.listeners.indexOf(listener)
      if (index > -1) {
        this.listeners.splice(index, 1)
      }
    }
  }

  // 通知状态变化
  private notifyStateChange() {
    this.listeners.forEach((listener) => listener({ ...this.state }))
  }

  // 获取当前状态
  getState(): ConfigLoadState {
    return { ...this.state }
  }

  // 设置加载状态
  private setLoading(loading: boolean) {
    this.state.loading = loading
    this.notifyStateChange()
  }

  // 设置错误状态
  private setError(error: string | null) {
    this.state.error = error
    this.state.loading = false
    this.notifyStateChange()
  }

  // 设置成功状态
  private setSuccess(config: ExamConfig, source: ConfigSource) {
    this.state.loading = false
    this.state.loaded = true
    this.state.error = null
    this.state.config = config
    this.state.source = source
    this.notifyStateChange()
  }

  // 解析和验证配置数据
  private parseAndValidateConfig(data: string): ExamConfig {
    try {
      const rawConfig = JSON.parse(data)
      const sortedConfig = getSortedExamConfig(rawConfig)

      if (!validateExamConfig(sortedConfig)) {
        throw new Error('配置验证失败：配置格式不符合要求')
      }

      return sortedConfig
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new Error('配置解析失败：JSON 格式错误')
      }
      throw error
    }
  }

  // 从文件加载配置
  async loadFromFile(filePath: string): Promise<ExamConfig> {
    const source: ConfigSource = { type: 'file', path: filePath }
    this.setLoading(true)

    try {
      if (!this.ipcRenderer) {
        throw new Error('IPC renderer 不可用')
      }

      const fileContent = await this.ipcRenderer.invoke('read-file', filePath)
      if (!fileContent) {
        throw new Error('文件读取失败或文件为空')
      }

      const config = this.parseAndValidateConfig(fileContent)
      this.setSuccess(config, source)
      return config
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      this.setError(`文件加载失败: ${errorMessage}`)
      throw error
    }
  }

  // 从 URL 加载配置
  async loadFromUrl(url: string): Promise<ExamConfig> {
    const source: ConfigSource = { type: 'url', url }
    this.setLoading(true)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.text()
      const config = this.parseAndValidateConfig(data)
      this.setSuccess(config, source)
      return config
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      this.setError(`URL 加载失败: ${errorMessage}`)
      throw error
    }
  }

  // 从编辑器加载配置（直接传入数据）
  async loadFromEditor(data: string): Promise<ExamConfig> {
    const source: ConfigSource = { type: 'editor', data }
    this.setLoading(true)

    try {
      const config = this.parseAndValidateConfig(data)
      this.setSuccess(config, source)
      return config
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      this.setError(`编辑器数据解析失败: ${errorMessage}`)
      throw error
    }
  }

  // 从 IPC 加载配置（等待主进程发送）
  async loadFromIPC(timeout: number = 30000): Promise<ExamConfig> {
    const source: ConfigSource = { type: 'ipc' }
    this.setLoading(true)

    return new Promise((resolve, reject) => {
      if (!this.ipcRenderer) {
        const error = new Error('IPC renderer 不可用')
        this.setError(error.message)
        reject(error)
        return
      }

      let timeoutId: NodeJS.Timeout
      let resolved = false

      // 设置超时
      timeoutId = setTimeout(() => {
        if (!resolved) {
          resolved = true
          this.setError('IPC 配置加载超时')
          reject(new Error('IPC 配置加载超时'))
        }
      }, timeout)

      // 监听配置数据
      const handleConfig = (_event: any, data: string) => {
        if (resolved) return
        resolved = true
        clearTimeout(timeoutId)

        try {
          const config = this.parseAndValidateConfig(data)
          this.setSuccess(config, source)
          resolve(config)
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : '未知错误'
          this.setError(`IPC 数据解析失败: ${errorMessage}`)
          reject(error)
        }
      }

      this.ipcRenderer.on('load-config', handleConfig)

      // 尝试主动获取配置
      this.ipcRenderer
        .invoke('get-config')
        .then((data: string | null) => {
          if (resolved) return
          if (data) {
            handleConfig(null, data)
          }
        })
        .catch((error: Error) => {
          console.warn('主动获取配置失败:', error)
          // 继续等待 load-config 事件
        })
    })
  }

  // 直接设置配置数据
  async loadDirect(data: string): Promise<ExamConfig> {
    const source: ConfigSource = { type: 'direct', data }
    this.setLoading(true)

    try {
      const config = this.parseAndValidateConfig(data)
      this.setSuccess(config, source)
      return config
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      this.setError(`直接数据解析失败: ${errorMessage}`)
      throw error
    }
  }

  // 重新加载当前配置
  async reload(): Promise<ExamConfig> {
    if (!this.state.source) {
      throw new Error('没有可重新加载的配置源')
    }

    const source = this.state.source
    switch (source.type) {
      case 'file':
        return this.loadFromFile(source.path)
      case 'url':
        return this.loadFromUrl(source.url)
      case 'editor':
        return this.loadFromEditor(source.data)
      case 'direct':
        return this.loadDirect(source.data)
      case 'ipc':
        return this.loadFromIPC()
      default:
        throw new Error('不支持的配置源类型')
    }
  }

  // 清除当前配置
  clear() {
    this.state = {
      loading: false,
      loaded: false,
      error: null,
      source: null,
      config: null
    }
    this.notifyStateChange()
  }
}

// 默认实例（单例模式）
let defaultInstance: ConfigLoader | null = null

export function getConfigLoader(ipcRenderer?: any): ConfigLoader {
  if (!defaultInstance) {
    defaultInstance = new ConfigLoader(ipcRenderer)
  }
  return defaultInstance
}

// 配置加载器工厂函数
export function createConfigLoader(ipcRenderer?: any): ConfigLoader {
  return new ConfigLoader(ipcRenderer)
}
