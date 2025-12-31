import Module from 'module'
import path from 'path'
import fs from 'fs'
import { promises as fsp } from 'fs'
import { app } from 'electron'
import { pathToFileURL } from 'url'
import type { PluginEntryPoint, PluginFactory, PluginModuleExport } from './types'

/**
 * 插件加载器类，负责动态导入和解析插件模块
 * Plugin loader class responsible for dynamically importing and resolving plugin modules
 */
export class PluginLoader {
  private readonly mtimeCache = new Map<string, { mtime: number; ts: number }>()
  private readonly mtimeTtlMs = 500

  purgeRequireCache(rootDir: string) {
    const cache = (require as NodeRequire).cache
    if (!cache) return
    const normalized = path.resolve(rootDir)
    let cleared = 0
    for (const id of Object.keys(cache)) {
      if (id.startsWith(normalized)) {
        delete cache[id]
        cleared += 1
      }
    }
    if (cleared) {
      console.info('[PluginLoader] purged require cache entries', cleared, 'under', normalized)
    }
  }

  /**
   * 动态导入插件模块
   * Dynamically import a plugin module
   * @param entry - 插件入口点信息 / Plugin entry point information
   * @returns 插件模块导出对象 / Plugin module export object
   */
  async importModule(entry: PluginEntryPoint): Promise<PluginModuleExport> {
    const resolved = path.resolve(entry.file)
    const exists = fs.existsSync(resolved)
    console.info(`[PluginLoader] import format=${entry.format} path=${resolved} exists=${exists}`)
    const mtime = exists ? await this.readMtime(resolved) : Date.now()
    if (entry.format === 'cjs') {
      // Use host-scoped require so external deps (e.g., plugin-sdk) resolve from desktop's node_modules.
      const baseCandidates = this.collectRequireBases()

      let lastError: unknown
      for (const base of baseCandidates) {
        const pkgPath = path.join(base, 'package.json')
        if (!fs.existsSync(pkgPath)) continue
        try {
          const hostRequire = Module.createRequire(pkgPath)
          const moduleId = hostRequire.resolve(resolved)
          if (hostRequire.cache?.[moduleId]) {
            delete hostRequire.cache[moduleId]
            console.info('[PluginLoader] cache cleared for', moduleId)
          }
          console.info('[PluginLoader] require CJS via', pkgPath)
          return hostRequire(moduleId)
        } catch (err) {
          lastError = err
        }
      }
      throw lastError ?? new Error('Failed to require plugin entry')
    }
    const bust = `${pathToFileURL(resolved).href}?t=${mtime}`
    return await import(bust)
  }

  private async readMtime(file: string): Promise<number | undefined> {
    const now = Date.now()
    const cached = this.mtimeCache.get(file)
    if (cached && now - cached.ts < this.mtimeTtlMs) return cached.mtime
    try {
      const stat = await fsp.stat(file)
      const mtime = stat.mtimeMs
      this.mtimeCache.set(file, { mtime, ts: now })
      return mtime
    } catch {
      return undefined
    }
  }

  private collectRequireBases(): string[] {
    const candidates = new Set<string>()
    const maybe = (p?: string | null) => {
      if (p) candidates.add(path.resolve(p))
    }

    maybe(app?.getAppPath?.())
    maybe(process.resourcesPath)
    // Common dev paths
    maybe(path.join(__dirname, '../../..')) // packages/desktop
    maybe(path.join(__dirname, '../../../..')) // repo root if __dirname inside dist/main
    maybe(process.cwd())

    return Array.from(candidates)
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
