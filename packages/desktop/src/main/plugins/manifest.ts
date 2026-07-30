import { promises as fs } from 'fs'
import path from 'path'
import crypto from 'crypto'
import type { ExamAwarePluginManifest, PluginEntryPoint, ResolvedPluginManifest } from './types'
import { appLogger } from '../logging/logger'
import {
  isPluginPermission,
  type PluginPermission,
  type PluginWindowKind
} from '@dsz-examaware/plugin-sdk'

// 支持的插件入口文件扩展名 / Supported plugin entry file extensions
const SUPPORTED_EXTENSIONS = ['.js', '.cjs', '.mjs', '.ts']

/**
 * 根据文件扩展名检测模块格式
 * Detect module format based on file extension
 * @param file - 文件名 / File name
 * @returns 模块格式：esm 或 cjs / Module format: esm or cjs
 */
function detectFormat(file: string): PluginEntryPoint['format'] {
  if (file.endsWith('.cjs')) return 'cjs'
  if (file.endsWith('.mjs')) return 'esm'
  return 'esm'
}

/**
 * 将相对路径转换为插件入口点对象
 * Convert relative path to plugin entry point object
 * @param root - 插件根目录 / Plugin root directory
 * @param rel - 相对路径 / Relative path
 * @returns 插件入口点对象或undefined / Plugin entry point object or undefined
 * @throws 当扩展名不支持时抛出错误 / Throws when extension is not supported
 */
function toEntry(root: string, rel?: unknown): PluginEntryPoint | undefined {
  if (!rel) return undefined
  const file = resolvePluginPath(root, rel, 'plugin target')
  const ext = path.extname(file)
  if (!SUPPORTED_EXTENSIONS.includes(ext)) {
    throw new Error(`Unsupported plugin entry extension: ${ext} (${rel})`)
  }
  return { file, format: detectFormat(file) }
}

/**
 * 从插件包的package.json中加载并解析插件清单
 * Load and resolve plugin manifest from package.json in plugin package
 * @param packageDir - 插件包目录路径 / Plugin package directory path
 * @returns 解析后的插件清单或null（如果不是插件） / Resolved plugin manifest or null (if not a plugin)
 * @throws 当package.json解析失败或缺少必要字段时抛出错误 / Throws when package.json parsing fails or required fields are missing
 */
export async function loadManifestFromPackage(
  packageDir: string
): Promise<ResolvedPluginManifest | null> {
  const packageJsonPath = path.join(packageDir, 'package.json')
  let packageRaw: string
  try {
    packageRaw = await fs.readFile(packageJsonPath, 'utf-8')
  } catch {
    return null
  }

  let pkg: any
  try {
    pkg = JSON.parse(packageRaw)
  } catch (error) {
    throw new Error(`Failed to parse package.json in ${packageDir}: ${(error as Error).message}`)
  }

  // 检查是否为ExamAware插件 / Check if it's an ExamAware plugin
  const meta: ExamAwarePluginManifest | undefined = pkg.examaware
  if (!meta) return null
  if (typeof meta !== 'object' || Array.isArray(meta)) {
    throw new Error(`examaware manifest in ${packageDir} must be an object`)
  }

  if (!pkg.name || !pkg.version) {
    throw new Error(`package.json in ${packageDir} must provide name and version`)
  }

  // 解析目标入口点 / Resolve target entry points
  if (meta.apiVersion !== undefined && meta.apiVersion !== 1 && meta.apiVersion !== 2) {
    throw new Error(`Unsupported ExamAware plugin apiVersion: ${String(meta.apiVersion)}`)
  }
  const apiVersion = meta.apiVersion === 2 ? 2 : 1
  const strict = apiVersion === 2
  if (
    strict &&
    meta.targets !== undefined &&
    (!meta.targets || typeof meta.targets !== 'object' || Array.isArray(meta.targets))
  ) {
    throw new Error('targets must be an object')
  }
  const targets = meta.targets ?? {}
  // 去重依赖列表 / Deduplicate dependency list
  const dependencies = normalizeStringArray(meta.dependencies, 'dependencies', strict)
  // 去重提供的服务列表 / Deduplicate provided services list
  const provides = normalizeStringArray(meta.services?.provide, 'services.provide', strict)
  // 去重注入的服务列表 / Deduplicate injected services list
  const injects = normalizeStringArray(meta.services?.inject, 'services.inject', strict)
  const permissions = normalizePermissions(meta.permissions, pkg.name, strict)
  const rendererWindows = normalizeRendererWindows(meta.activation?.rendererWindows, apiVersion)

  const sdkVersionFromDeps =
    pkg.dependencies?.['@dsz-examaware/plugin-sdk'] ??
    pkg.devDependencies?.['@dsz-examaware/plugin-sdk'] ??
    pkg.peerDependencies?.['@dsz-examaware/plugin-sdk']

  const engines = {
    desktop: meta.engines?.desktop ?? pkg.engines?.examawareDesktop ?? pkg.engines?.examaware,
    sdk: meta.engines?.sdk ?? sdkVersionFromDeps
  }

  const resolved: ResolvedPluginManifest = {
    name: pkg.name,
    version: pkg.version,
    displayName: meta.displayName ?? pkg.displayName,
    description: meta.description ?? pkg.description,
    apiVersion,
    permissions,
    activation: {
      rendererWindows
    },
    targets: {
      main: toEntry(packageDir, targets.main),
      renderer: toEntry(packageDir, targets.renderer)
    },
    engines,
    sdkVersion: meta.engines?.sdk ?? sdkVersionFromDeps,
    dependencies,
    services: {
      provide: provides,
      inject: injects
    },
    settings: {
      namespace: meta.settings?.namespace ?? pkg.name,
      schema: meta.settings?.schema
        ? resolvePluginPath(packageDir, meta.settings.schema, 'settings.schema')
        : undefined
    },
    rootDir: packageDir,
    packageJsonPath,
    enabled: meta.enabled ?? true
  }

  // 获取文件修改时间 / Get file modification time
  try {
    const stat = await fs.stat(packageJsonPath)
    resolved.mtime = stat.mtimeMs
  } catch {}

  // 计算清单哈希用于变更检测 / Calculate manifest hash for change detection
  const hash = crypto.createHash('sha1')
  hash.update(packageRaw)
  hash.update(JSON.stringify(meta))
  resolved.hash = hash.digest('hex')

  return resolved
}

const PLUGIN_WINDOW_KINDS = new Set<PluginWindowKind>([
  'main',
  'editor',
  'player',
  'settings',
  'cast',
  'logs',
  'plugin-store',
  'tray',
  'plugin'
])

function normalizeRendererWindows(input: unknown, apiVersion: 1 | 2): PluginWindowKind[] {
  if (input === undefined) return apiVersion === 2 ? ['main'] : Array.from(PLUGIN_WINDOW_KINDS)
  if (!Array.isArray(input)) {
    if (apiVersion === 2) throw new Error('activation.rendererWindows must be an array')
    return Array.from(PLUGIN_WINDOW_KINDS)
  }
  const invalid = input.filter(
    (kind): kind is unknown =>
      typeof kind !== 'string' || !PLUGIN_WINDOW_KINDS.has(kind as PluginWindowKind)
  )
  if (apiVersion === 2 && invalid.length) {
    throw new Error(`Invalid renderer window kind: ${invalid.map(String).join(', ')}`)
  }
  return Array.from(
    new Set(
      input.filter(
        (kind): kind is PluginWindowKind =>
          typeof kind === 'string' && PLUGIN_WINDOW_KINDS.has(kind as PluginWindowKind)
      )
    )
  )
}

function normalizePermissions(
  input: unknown,
  pluginName: string,
  strict: boolean
): PluginPermission[] {
  if (input === undefined) return []
  if (!Array.isArray(input)) {
    if (strict) throw new Error('permissions must be an array')
    return []
  }
  const permissions: PluginPermission[] = []
  for (const permission of new Set(input)) {
    if (typeof permission === 'string' && isPluginPermission(permission)) {
      permissions.push(permission)
      continue
    }
    if (strict) throw new Error(`Unknown plugin permission: ${String(permission)}`)
    appLogger.warn('[PluginHost] ignoring unknown permission', pluginName, permission)
  }
  return permissions
}

function normalizeStringArray(input: unknown, field: string, strict: boolean): string[] {
  if (input === undefined) return []
  if (!Array.isArray(input)) {
    if (strict) throw new Error(`${field} must be an array`)
    return []
  }
  const values = input.filter(
    (value): value is string => typeof value === 'string' && value.trim().length > 0
  )
  if (strict && values.length !== input.length) {
    throw new Error(`${field} must contain non-empty strings`)
  }
  return Array.from(new Set(values))
}

function resolvePluginPath(root: string, relativePath: unknown, field: string): string {
  if (typeof relativePath !== 'string' || !relativePath.trim()) {
    throw new Error(`${field} must be a non-empty relative path`)
  }
  if (path.isAbsolute(relativePath)) throw new Error(`${field} must be relative to the plugin root`)
  const resolvedRoot = path.resolve(root)
  const resolved = path.resolve(resolvedRoot, relativePath)
  const relative = path.relative(resolvedRoot, resolved)
  if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    throw new Error(`${field} escapes the plugin root`)
  }
  return resolved
}

/**
 * 在指定路径中发现所有插件包
 * Discover all plugin packages in specified paths
 * @param paths - 要搜索的目录路径数组 / Array of directory paths to search
 * @returns 发现的插件清单数组 / Array of discovered plugin manifests
 */
export async function discoverPluginPackages(paths: string[]): Promise<ResolvedPluginManifest[]> {
  const results: ResolvedPluginManifest[] = []
  for (const dir of paths) {
    let entries: string[]
    try {
      entries = await fs.readdir(dir)
    } catch {
      continue
    }
    for (const entry of entries) {
      const full = path.join(dir, entry)
      try {
        const stat = await fs.stat(full)
        if (!stat.isDirectory()) continue
      } catch {
        continue
      }
      try {
        const manifest = await loadManifestFromPackage(full)
        if (manifest) {
          results.push(manifest)
        }
      } catch (error) {
        appLogger.warn('[PluginHost] manifest error', full, error as Error)
      }
    }
  }
  return results
}
