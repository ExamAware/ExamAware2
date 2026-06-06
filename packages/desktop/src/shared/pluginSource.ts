export interface PluginIndexVersionEntry {
  version: string
  desktopCompat?: string
  sdkCompat?: string
  minAppVersion?: string
  targets?: string[]
  dist?: {
    npm?: string
    tag?: string
    registry?: string
    tarball?: string
    integrity?: string
    shasum?: string
  }
  readme?: string
  changelog?: string
}

export interface PluginIndexAuthor {
  name: string
  link?: string
}

export interface PluginIndexItem {
  id?: string
  package: string
  displayName?: string
  description?: string
  authors?: PluginIndexAuthor[]
  repository?: string
  homepage?: string
  license?: string
  categories?: string[]
  icon?: string
  cover?: string
  latestVersion?: string
  versions?: PluginIndexVersionEntry[]
  links?: Record<string, string>
  mirrors?: Record<string, string> | string[]
}

export interface PluginIndexPayload {
  schemaVersion: string
  generatedAt?: string
  signature?: string
  plugins: PluginIndexItem[]
  mirrors?: Record<string, string> | string[]
}

export interface PluginSourceFetchRequest {
  url?: string
  mirrors?: string[]
  timeoutMs?: number
}

export interface PluginSourceFetchResult {
  url: string
  usedUrl: string
  tried: string[]
  fetchedAt: string
  fromCache: boolean
  stale: boolean
  etag?: string
  lastModified?: string
  payload: PluginIndexPayload
}

export const DEFAULT_PLUGIN_INDEX_URL =
  'https://raw.githubusercontent.com/ExamAware/PluginIndex/refs/heads/main/index/index.json'
