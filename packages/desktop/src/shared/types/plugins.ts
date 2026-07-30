import type { ServiceProviderRecord } from '../services/registry'
import type { PluginPermission, PluginWindowKind } from '@dsz-examaware/plugin-sdk'

export type PluginStatus = 'idle' | 'loading' | 'active' | 'disabled' | 'error'

export interface PluginError {
  code: 'manifest-error' | 'missing-service' | 'cycle' | 'load-failed' | 'incompatible'
  message: string
  details?: any
}

export interface PluginListItem {
  name: string
  displayName?: string
  description?: string
  version: string
  apiVersion: 1 | 2
  permissions: PluginPermission[]
  rendererWindows: PluginWindowKind[]
  status: PluginStatus
  enabled: boolean
  provides: string[]
  injects: string[]
  hasRendererEntry?: boolean
  hasReadme?: boolean
  error?: PluginError
}

export type RegistryInstallStep =
  | 'resolving'
  | 'downloading'
  | 'verifying'
  | 'extracting'
  | 'installing'
  | 'reloading'

export interface RegistryInstallProgress {
  step: RegistryInstallStep
  package: string
  registry: string
  version?: string
  detail?: string
  percent?: number
  requestId?: string
}

export interface RegistryInstallOptions {
  versionRange?: string
  registry?: string
  requestId?: string
}

export interface RegistryInstallRequest extends RegistryInstallOptions {
  pkg: string
}

export interface RegistryInstallResult {
  name: string
  version: string
  registry: string
  installedPath: string
  integrity?: string
  shasum?: string
  fromCache: boolean
  requestId?: string
}

export interface RegistryReadmeRequest {
  pkg: string
  version?: string
  registry?: string
}

export interface RegistryReadmeResult {
  readme: string | null
  version?: string
  registry: string
}

export interface PluginStatePayload {
  list: PluginListItem[]
  services: ServiceProviderRecord[]
}

export interface PluginConfigPayload {
  name: string
  config: Record<string, any>
}

export interface PluginInstallResult {
  installedPath: string
  list: PluginListItem[]
}

export type { ServiceProviderRecord } from '../services/registry'
export type {
  PluginIndexItem,
  PluginIndexPayload,
  PluginIndexVersionEntry,
  PluginSourceFetchRequest,
  PluginSourceFetchResult
} from '../pluginSource'
