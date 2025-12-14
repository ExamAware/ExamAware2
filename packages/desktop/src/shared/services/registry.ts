export type ServiceScope = 'main' | 'renderer'

export interface ServiceProvideOptions {
  default?: boolean
  scope?: ServiceScope
}

export interface ServiceWatcherMeta {
  scope: ServiceScope
  isDefault: boolean
}

export interface ServiceProviderRecord {
  name: string
  owner: string
  value: unknown
  isDefault?: boolean
  scope?: ServiceScope
}

interface RegistryLogger {
  warn?: (...args: any[]) => void
}

interface ServiceProviderState {
  owner: string
  value: unknown
  scope: ServiceScope
}

interface ServiceRecord {
  providers: Map<string, ServiceProviderState>
  defaultOwner?: string
}

interface ServiceWatcher {
  cb: (value: unknown, owner: string, meta: ServiceWatcherMeta) => void | (() => void)
  cleanup?: (() => void) | void
}

export class ServiceRegistry {
  private services = new Map<string, ServiceRecord>()
  private watchers = new Map<string, Set<ServiceWatcher>>()
  private onChanged?: () => void
  private logger?: RegistryLogger

  constructor(onChangedOrLogger?: (() => void) | RegistryLogger, logger?: RegistryLogger) {
    if (typeof onChangedOrLogger === 'function') {
      this.onChanged = onChangedOrLogger
      this.logger = logger
      return
    }
    this.logger = onChangedOrLogger ?? logger
  }

  provide(owner: string, name: string, value: unknown, options?: ServiceProvideOptions) {
    const scope: ServiceScope = options?.scope ?? 'main'
    const record = this.ensureRecord(name)
    if (record.providers.has(owner)) {
      throw new Error(`Service ${name} is already provided by ${owner}`)
    }
    record.providers.set(owner, { owner, value, scope })
    if (options?.default || !record.defaultOwner) {
      record.defaultOwner = owner
    }
    this.notifyWatchers(name)
    this.notifyChanged()
    return () => this.revoke(owner, name)
  }

  inject<T = unknown>(name: string, owner?: string): T {
    const provider = this.resolveProvider(name, owner)
    return provider.value as T
  }

  injectAsync<T = unknown>(name: string, owner?: string): Promise<T> {
    return Promise.resolve(this.inject<T>(name, owner))
  }

  has(name: string, owner?: string) {
    const record = this.services.get(name)
    if (!record) return false
    if (!owner) return record.providers.size > 0
    return record.providers.has(owner)
  }

  revoke(owner: string, name?: string) {
    if (name) {
      this.removeProvider(name, owner)
      return
    }
    for (const [svcName, record] of this.services.entries()) {
      if (record.providers.delete(owner)) {
        if (record.defaultOwner === owner) {
          record.defaultOwner = this.pickFallbackOwner(record)
        }
        if (!record.providers.size) {
          this.services.delete(svcName)
        }
        this.notifyWatchers(svcName)
        this.notifyChanged()
      }
    }
  }

  getValue<T = unknown>(name: string, owner?: string) {
    const record = this.services.get(name)
    if (!record) return undefined
    const actualOwner = owner ?? record.defaultOwner ?? this.pickFallbackOwner(record)
    if (!actualOwner) return undefined
    const provider = record.providers.get(actualOwner)
    return provider?.value as T | undefined
  }

  snapshot(): ServiceProviderRecord[] {
    const list: ServiceProviderRecord[] = []
    for (const [name, record] of this.services.entries()) {
      for (const provider of record.providers.values()) {
        list.push({
          name,
          owner: provider.owner,
          value: undefined,
          isDefault: provider.owner === record.defaultOwner,
          scope: provider.scope
        })
      }
    }
    return list
  }

  when(
    name: string,
    cb: (value: unknown, owner: string, meta: ServiceWatcherMeta) => void | (() => void)
  ) {
    let set = this.watchers.get(name)
    if (!set) {
      set = new Set()
      this.watchers.set(name, set)
    }
    const watcher: ServiceWatcher = { cb }
    set.add(watcher)
    this.invokeWatcher(name, watcher)
    return () => {
      const target = this.watchers.get(name)
      if (!target) return
      target.delete(watcher)
      if (!target.size) this.watchers.delete(name)
      this.runWatcherCleanup(watcher)
    }
  }

  private ensureRecord(name: string) {
    let record = this.services.get(name)
    if (!record) {
      record = { providers: new Map() }
      this.services.set(name, record)
    }
    return record
  }

  private resolveProvider(name: string, owner?: string): ServiceProviderState {
    const record = this.services.get(name)
    if (!record) {
      throw new Error(`Service ${name} is not available`)
    }
    const actualOwner = owner ?? record.defaultOwner ?? this.pickFallbackOwner(record)
    if (!actualOwner) {
      throw new Error(`Service ${name} has no providers`)
    }
    const provider = record.providers.get(actualOwner)
    if (!provider) {
      throw new Error(`Service ${name} has no provider ${actualOwner}`)
    }
    return provider
  }

  private removeProvider(name: string, owner: string) {
    const record = this.services.get(name)
    if (!record) return
    if (!record.providers.delete(owner)) return
    if (record.defaultOwner === owner) {
      record.defaultOwner = this.pickFallbackOwner(record)
    }
    if (!record.providers.size) {
      this.services.delete(name)
    }
    this.notifyWatchers(name)
    this.notifyChanged()
  }

  private pickFallbackOwner(record: ServiceRecord) {
    const iter = record.providers.keys().next()
    return iter.done ? undefined : iter.value
  }

  private notifyWatchers(name: string) {
    const watchers = this.watchers.get(name)
    if (!watchers?.size) return
    for (const watcher of watchers) {
      this.invokeWatcher(name, watcher)
    }
  }

  private notifyChanged() {
    try {
      this.onChanged?.()
    } catch (error) {
      this.logger?.warn?.('[ServiceRegistry] onChanged callback failed', error)
    }
  }

  private invokeWatcher(name: string, watcher: ServiceWatcher) {
    this.runWatcherCleanup(watcher)
    const record = this.services.get(name)
    if (!record) return
    for (const provider of record.providers.values()) {
      try {
        const meta: ServiceWatcherMeta = {
          scope: provider.scope,
          isDefault: provider.owner === record.defaultOwner
        }
        const res = watcher.cb(provider.value, provider.owner, meta)
        if (typeof res === 'function') {
          watcher.cleanup = res
        }
      } catch (error) {
        this.logger?.warn?.('[ServiceRegistry] watcher callback failed', error)
      }
    }
  }

  private runWatcherCleanup(watcher: ServiceWatcher) {
    if (typeof watcher.cleanup === 'function') {
      try {
        watcher.cleanup()
      } catch (error) {
        this.logger?.warn?.('[ServiceRegistry] watcher cleanup failed', error)
      }
      watcher.cleanup = undefined
    }
  }
}
