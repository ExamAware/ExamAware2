import { ref, computed, onUnmounted } from 'vue'
import {
  getConfigLoader,
  type ConfigSource,
  type ConfigLoadState
} from '@renderer/core/configLoader'
import type { ExamConfig } from '@renderer/core/configTypes'

/**
 * 配置加载的组合式函数
 */
export function useConfigLoader(ipcRenderer?: any) {
  const loader = getConfigLoader(ipcRenderer)

  // 响应式状态
  const loading = ref(loader.getState().loading)
  const loaded = ref(loader.getState().loaded)
  const error = ref(loader.getState().error)
  const config = ref(loader.getState().config)
  const source = ref(loader.getState().source)

  // 计算属性
  const hasError = computed(() => !!error.value)
  const isReady = computed(() => loaded.value && !loading.value && !error.value)

  // 监听状态变化
  const unsubscribe = loader.onStateChange((state: ConfigLoadState) => {
    loading.value = state.loading
    loaded.value = state.loaded
    error.value = state.error
    config.value = state.config
    source.value = state.source
  })

  // 加载方法
  const loadFromFile = async (filePath: string): Promise<ExamConfig> => {
    return loader.loadFromFile(filePath)
  }

  const loadFromUrl = async (url: string): Promise<ExamConfig> => {
    return loader.loadFromUrl(url)
  }

  const loadFromEditor = async (data: string): Promise<ExamConfig> => {
    return loader.loadFromEditor(data)
  }

  const loadFromIPC = async (timeout?: number): Promise<ExamConfig> => {
    return loader.loadFromIPC(timeout)
  }

  const loadDirect = async (data: string): Promise<ExamConfig> => {
    return loader.loadDirect(data)
  }

  const reload = async (): Promise<ExamConfig> => {
    return loader.reload()
  }

  const clear = () => {
    loader.clear()
  }

  // 智能加载函数：根据输入自动判断加载方式
  const smartLoad = async (input: string | ConfigSource): Promise<ExamConfig> => {
    if (typeof input === 'string') {
      // 自动判断输入类型
      if (input.startsWith('http://') || input.startsWith('https://')) {
        return loadFromUrl(input)
      } else if (input.startsWith('/') || input.includes('\\') || input.includes('./')) {
        return loadFromFile(input)
      } else {
        // 假设是 JSON 数据
        return loadFromEditor(input)
      }
    } else {
      // 使用指定的配置源
      switch (input.type) {
        case 'file':
          return loadFromFile(input.path)
        case 'url':
          return loadFromUrl(input.url)
        case 'editor':
          return loadFromEditor(input.data)
        case 'direct':
          return loadDirect(input.data)
        case 'ipc':
          return loadFromIPC()
        default:
          throw new Error('不支持的配置源类型')
      }
    }
  }

  // 组件卸载时清理
  onUnmounted(() => {
    unsubscribe()
  })

  return {
    // 状态
    loading,
    loaded,
    error,
    config,
    source,
    hasError,
    isReady,

    // 方法
    loadFromFile,
    loadFromUrl,
    loadFromEditor,
    loadFromIPC,
    loadDirect,
    reload,
    clear,
    smartLoad,

    // 原始加载器实例（用于高级用法）
    loader
  }
}
