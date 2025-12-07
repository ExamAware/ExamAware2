import path from 'path'
import { pathToFileURL } from 'url'
import type { PluginEntryPoint, PluginFactory, PluginModuleExport } from './types'

/**
 * 插件加载器类，负责动态导入和解析插件模块
 * Plugin loader class responsible for dynamically importing and resolving plugin modules
 */
export class PluginLoader {
  /**
   * 动态导入插件模块
   * Dynamically import a plugin module
   * @param entry - 插件入口点信息 / Plugin entry point information
   * @returns 插件模块导出对象 / Plugin module export object
   */
  async importModule(entry: PluginEntryPoint): Promise<PluginModuleExport> {
    const resolved = path.resolve(entry.file)
    return await import(pathToFileURL(resolved).href)
  }

  /**
   * 从模块导出中解析插件工厂函数
   * Resolve plugin factory function from module exports
   * 支持多种导出格式：直接函数、default导出、apply导出等
   * Supports multiple export formats: direct function, default export, apply export, etc.
   * @param mod - 插件模块导出对象 / Plugin module export object
   * @returns 插件工厂函数 / Plugin factory function
   * @throws 当模块不导出有效的工厂函数时抛出错误 / Throws when module doesn't export a valid factory function
   */
  resolveFactory(mod: PluginModuleExport): PluginFactory {
    if (typeof mod === 'function') {
      return mod as unknown as PluginFactory
    }
    if (typeof mod?.default === 'function') {
      return mod.default as PluginFactory
    }
    if (typeof mod?.apply === 'function') {
      return mod.apply as PluginFactory
    }
    if (typeof mod?.default === 'object' && typeof mod.default?.apply === 'function') {
      return mod.default.apply as PluginFactory
    }
    throw new Error('Plugin entry does not export an apply/default factory function')
  }
}
