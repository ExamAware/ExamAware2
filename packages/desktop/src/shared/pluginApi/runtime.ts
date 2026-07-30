import {
  PluginApiError,
  definePluginApiModule,
  definePluginApiModuleToken,
  defaultPluginPermissions,
  toDisposable,
  type Disposable,
  type DisposableLike,
  type PluginApiModule,
  type PluginApiModuleContext,
  type PluginApiModuleScope,
  type PluginApiModuleToken,
  type PluginDisposableScope,
  type PluginPermission,
  type PluginPermissionApi
} from '@dsz-examaware/plugin-sdk'

export function createPluginApiValueModule<TKey extends string, TApi extends object>(
  id: string,
  scope: PluginApiModuleScope,
  key: TKey,
  api: TApi
): PluginApiModule<Record<TKey, TApi>> {
  return definePluginApiModule({
    token: definePluginApiModuleToken<Record<TKey, TApi>>(id),
    scope,
    create: () => ({ [key]: api }) as Record<TKey, TApi>
  })
}

export class AsyncDisposableScope implements PluginDisposableScope {
  private readonly disposables: Disposable[] = []
  private disposePromise?: Promise<void>
  disposed = false

  add(disposable: DisposableLike): Disposable {
    const normalized = toDisposable(disposable)
    if (this.disposed) {
      void normalized.dispose()
      return normalized
    }
    this.disposables.push(normalized)
    return normalized
  }

  defer(dispose: () => void | Promise<void>) {
    return this.add(dispose)
  }

  dispose() {
    if (this.disposePromise) return this.disposePromise
    this.disposed = true
    this.disposePromise = (async () => {
      const errors: unknown[] = []
      while (this.disposables.length) {
        const disposable = this.disposables.pop()
        if (!disposable) continue
        try {
          await disposable.dispose()
        } catch (error) {
          errors.push(error)
        }
      }
      if (errors.length) {
        const error = new Error(
          `One or more plugin resources failed to dispose (${errors.length})`
        ) as Error & { causes?: unknown[] }
        error.causes = errors
        throw error
      }
    })()
    return this.disposePromise
  }
}

export function createPermissionApi(
  pluginName: string,
  declared: readonly PluginPermission[]
): PluginPermissionApi {
  const granted = new Set<PluginPermission>([...defaultPluginPermissions, ...declared])
  return {
    granted,
    has: (permission) => granted.has(permission),
    require(permission) {
      if (granted.has(permission)) return
      throw new PluginApiError(
        'permission-denied',
        'permissions',
        `插件 ${pluginName} 未声明权限 ${permission}`,
        { pluginName, permission }
      )
    }
  }
}

export class PluginApiModuleRegistry {
  private readonly modulesById = new Map<string, PluginApiModule<object>>()

  constructor(private readonly modules: readonly PluginApiModule<object>[]) {
    for (const module of modules) {
      if (module.token.kind !== 'api-module') {
        throw new PluginApiError('invalid-argument', 'plugin-api', 'API 模块 token 类型无效', {
          module: module.token.id,
          kind: module.token.kind
        })
      }
      if (this.modulesById.has(module.token.id)) {
        throw new PluginApiError('already-exists', 'plugin-api', 'API 模块 token 重复', {
          module: module.token.id
        })
      }
      this.modulesById.set(module.token.id, module)
    }
  }

  async create(options: {
    pluginName: string
    process: 'main' | 'renderer'
    permissions: PluginPermissionApi
    scope: PluginDisposableScope
  }) {
    const instances = new Map<string, object>()
    const building = new Set<string>()

    const createModule = async (module: PluginApiModule<object>): Promise<object> => {
      const existing = instances.get(module.token.id)
      if (existing) return existing
      if (building.has(module.token.id)) {
        throw new PluginApiError('conflict', 'plugin-api', 'API 模块存在循环依赖', {
          module: module.token.id
        })
      }
      if (module.scope !== 'both' && module.scope !== options.process) return {}
      building.add(module.token.id)
      try {
        for (const permission of module.permissions ?? []) options.permissions.require(permission)
        for (const dependency of module.dependencies ?? []) {
          const target = this.modulesById.get(dependency.id)
          if (!target) {
            throw new PluginApiError('not-found', 'plugin-api', 'API 模块依赖不存在', {
              module: module.token.id,
              dependency: dependency.id
            })
          }
          if (target.scope !== 'both' && target.scope !== options.process) {
            throw new PluginApiError(
              'not-supported',
              'plugin-api',
              'API 模块依赖在当前进程不可用',
              { module: module.token.id, dependency: dependency.id, process: options.process }
            )
          }
          await createModule(target)
        }
        const context: PluginApiModuleContext = {
          pluginName: options.pluginName,
          process: options.process,
          hasPermission: (permission) => options.permissions.has(permission),
          requirePermission: (permission) => options.permissions.require(permission),
          resolve: <TApi extends object>(token: PluginApiModuleToken<TApi>) => {
            if (token.kind !== 'api-module') {
              throw new PluginApiError('invalid-argument', 'plugin-api', '只能解析 API 模块 token')
            }
            const value = instances.get(token.id)
            if (!value) {
              throw new PluginApiError('not-ready', 'plugin-api', 'API 模块尚未创建', {
                module: token.id
              })
            }
            return value as TApi
          },
          own: (disposable) => {
            options.scope.add(disposable)
          }
        }
        const instance = await module.create(context)
        instances.set(module.token.id, instance)
        return instance
      } finally {
        building.delete(module.token.id)
      }
    }

    const api: Record<string, unknown> = {}
    for (const module of this.modules) {
      const instance = await createModule(module)
      for (const [key, value] of Object.entries(instance)) {
        if (Object.prototype.hasOwnProperty.call(api, key)) {
          throw new PluginApiError('conflict', 'plugin-api', 'API 模块导出字段冲突', {
            module: module.token.id,
            key
          })
        }
        api[key] = value
      }
    }
    return api
  }
}
