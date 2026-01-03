import { app } from 'electron'
import crypto from 'crypto'
import fs from 'fs'
import { promises as fsp } from 'fs'
import os from 'os'
import path from 'path'
import { Readable } from 'stream'
import { pipeline } from 'stream/promises'
import semver from 'semver'
import type { PluginHost } from './host'
import type {
  PluginLogger,
  RegistryInstallOptions as BaseInstallOptions,
  RegistryInstallProgress,
  RegistryInstallResult,
  RegistryReadmeResult
} from './types'
import { loadManifestFromPackage } from './manifest'
import { appLogger } from '../logging/winstonLogger'
import { DownloadManager } from '../runtime/downloadManager'

const DEFAULT_REGISTRY = 'https://registry.npmjs.org'
const INSTALL_METADATA_ACCEPT = 'application/vnd.npm.install-v1+json'

interface RegistryInstallOptions extends BaseInstallOptions {
  signal?: AbortSignal
  onProgress?: (progress: RegistryInstallProgress) => void
}

interface DistInfo {
  integrity?: string
  shasum?: string
  tarball: string
}

interface VersionMetadata {
  name: string
  version: string
  dist: DistInfo
}

interface PackageMetadata {
  name: string
  'dist-tags': Record<string, string>
  versions: Record<string, VersionMetadata>
}

interface PackageVersionPayload {
  readme?: string
  version?: string
  'dist-tags'?: Record<string, string>
}

type LoggerLike = Pick<PluginLogger, 'info' | 'warn' | 'error' | 'debug'>

function normalizeRegistry(registry?: string) {
  return (registry ?? DEFAULT_REGISTRY).replace(/\/$/, '')
}

function encodePackagePath(pkg: string) {
  return encodeURIComponent(pkg)
}

function firstIntegrityEntry(value?: string) {
  if (!value) return null
  const first = value.trim().split(/\s+/)[0]
  const [algorithm, encoded] = first.split('-', 2)
  if (!algorithm || !encoded) return null
  return { algorithm: algorithm.toLowerCase(), expected: Buffer.from(encoded, 'base64') }
}

function hashKey(input: string) {
  return crypto.createHash('sha1').update(input).digest('hex')
}

class NpmRegistryClient {
  constructor(
    private readonly logger: LoggerLike,
    private readonly defaultRegistry: string
  ) {}

  async fetchPackageMetadata(name: string, registry?: string): Promise<PackageMetadata> {
    const base = normalizeRegistry(registry ?? this.defaultRegistry)
    const url = `${base}/${encodePackagePath(name)}`
    const res = await fetch(url, { headers: { accept: INSTALL_METADATA_ACCEPT } })
    if (!res.ok) {
      throw new Error(`Registry responded with ${res.status} for ${url}`)
    }
    const payload = (await res.json()) as PackageMetadata
    return payload
  }

  resolveVersion(meta: PackageMetadata, range?: string): string {
    if (!range) {
      const latest = meta['dist-tags']?.latest
      if (latest) return latest
    }
    const versions = Object.keys(meta.versions ?? {})
    const resolved = semver.maxSatisfying(versions, range ?? '*', { includePrerelease: true })
    if (!resolved) {
      throw new Error(`No version found that satisfies "${range ?? 'latest'}"`)
    }
    return resolved
  }

  getVersion(meta: PackageMetadata, version: string): VersionMetadata {
    const entry = meta.versions?.[version]
    if (!entry) {
      throw new Error(`Version ${version} not found for package ${meta.name}`)
    }
    return entry
  }
}

export class PluginRegistryInstaller {
  private readonly logger: LoggerLike
  private readonly cacheDir: string
  private readonly client: NpmRegistryClient
  private readonly defaultRegistry: string
  private tarModulePromise: Promise<any> | null = null
  private readonly downloadManager?: DownloadManager

  constructor(
    private readonly host: PluginHost,
    options: {
      logger?: LoggerLike
      cacheDir?: string
      registry?: string
      client?: NpmRegistryClient
      downloadManager?: DownloadManager
    } = {}
  ) {
    const baseLogger = options.logger ?? appLogger
    this.logger = {
      info: (...args: any[]) => baseLogger.info('[PluginRegistryInstaller]', ...args),
      warn: (...args: any[]) => baseLogger.warn('[PluginRegistryInstaller]', ...args),
      error: (...args: any[]) => baseLogger.error('[PluginRegistryInstaller]', ...args),
      debug: (...args: any[]) => baseLogger.debug?.('[PluginRegistryInstaller]', ...args)
    }
    this.defaultRegistry = normalizeRegistry(options.registry)
    this.cacheDir =
      options.cacheDir ?? path.join(app.getPath('userData'), 'plugin-cache', 'registry')
    this.client = options.client ?? new NpmRegistryClient(this.logger, this.defaultRegistry)
    this.downloadManager = options.downloadManager
  }

  async installFromRegistry(
    pkg: string,
    options: RegistryInstallOptions = {}
  ): Promise<RegistryInstallResult> {
    const registry = normalizeRegistry(options.registry ?? this.defaultRegistry)
    const requestId = options.requestId
    const emit = (progress: RegistryInstallProgress) => {
      try {
        options.onProgress?.({ ...progress, requestId })
      } catch (error) {
        this.logger.warn?.('[PluginRegistryInstaller] progress listener failed', error)
      }
    }

    emit({ step: 'resolving', package: pkg, registry, detail: options.versionRange })
    const meta = await this.client.fetchPackageMetadata(pkg, registry)
    const version = this.client.resolveVersion(meta, options.versionRange)
    const versionMeta = this.client.getVersion(meta, version)

    emit({ step: 'downloading', package: pkg, registry, version })
    const { path: tarballPath, fromCache } = await this.ensureTarball(versionMeta, {
      registry,
      signal: options.signal,
      onProgress: (percent) =>
        emit({ step: 'downloading', package: pkg, registry, version, percent })
    })

    emit({ step: 'verifying', package: pkg, registry, version })
    await this.verifyTarball(tarballPath, versionMeta.dist)

    emit({ step: 'extracting', package: pkg, registry, version })
    const extracted = await this.extractTarball(tarballPath)

    let installedPath = ''
    try {
      const manifest = await loadManifestFromPackage(extracted)
      if (!manifest) {
        throw new Error('Downloaded package is not a valid ExamAware plugin')
      }
      emit({ step: 'installing', package: manifest.name, registry, version: manifest.version })
      installedPath = await this.host.installFromDirectory(extracted)
      emit({ step: 'reloading', package: manifest.name, registry, version: manifest.version })
      await this.host.scan()
      await this.host.loadAll()
      return {
        name: manifest.name,
        version: manifest.version,
        registry,
        installedPath,
        integrity: versionMeta.dist.integrity,
        shasum: versionMeta.dist.shasum,
        fromCache,
        requestId
      }
    } finally {
      await fsp.rm(extracted, { recursive: true, force: true })
    }
  }

  async fetchReadme(
    pkg: string,
    options: { version?: string; registry?: string } = {}
  ): Promise<RegistryReadmeResult> {
    const registry = normalizeRegistry(options.registry ?? this.defaultRegistry)
    const version = options.version?.trim()
    const url = `${registry}/${encodePackagePath(pkg)}${version ? `/${encodeURIComponent(version)}` : ''}`
    const res = await fetch(url, { headers: { accept: 'application/json' } })
    if (!res.ok) {
      throw new Error(`Registry responded with ${res.status} for ${url}`)
    }
    const payload = (await res.json()) as PackageVersionPayload
    const resolvedVersion = payload?.version ?? version ?? payload?.['dist-tags']?.latest
    const readme = typeof payload?.readme === 'string' ? payload.readme : null
    return { readme, version: resolvedVersion, registry }
  }

  private async ensureTarball(
    versionMeta: VersionMetadata,
    options: { registry: string; signal?: AbortSignal; onProgress?: (percent: number) => void }
  ) {
    const cacheKey = hashKey(
      `${options.registry}|${versionMeta.name}|${versionMeta.version}|${versionMeta.dist.integrity ?? versionMeta.dist.shasum ?? versionMeta.dist.tarball}`
    )
    await fsp.mkdir(this.cacheDir, { recursive: true })
    const cachePath = path.join(this.cacheDir, `${cacheKey}.tgz`)
    if (fs.existsSync(cachePath)) {
      try {
        await this.verifyTarball(cachePath, versionMeta.dist)
        return { path: cachePath, fromCache: true }
      } catch (error) {
        this.logger.warn?.(
          '[PluginRegistryInstaller] cache verification failed, redownloading',
          error
        )
      }
    }

    const tempPath = `${cachePath}.download`
    try {
      await this.download(versionMeta.dist.tarball, tempPath, options)
      await fsp.rename(tempPath, cachePath)
    } finally {
      await fsp.rm(tempPath, { force: true })
    }
    return { path: cachePath, fromCache: false }
  }

  private async download(
    url: string,
    targetPath: string,
    options: { signal?: AbortSignal; onProgress?: (percent: number) => void }
  ) {
    if (this.downloadManager) {
      await this.downloadManager.fetchToFile(url, targetPath, {
        signal: options.signal,
        onProgress: options.onProgress,
        timeoutMs: 30000
      })
      return
    }
    const res = await fetch(url, { signal: options.signal })
    if (!res.ok || !res.body) {
      throw new Error(`Failed to download tarball (${res.status}): ${url}`)
    }
    const total = Number(res.headers.get('content-length') ?? 0)
    let received = 0
    const readable = Readable.fromWeb(res.body as any)
    await pipeline(
      readable,
      async function* (source: AsyncIterable<Uint8Array>) {
        for await (const chunk of source) {
          const buf = Buffer.from(chunk)
          received += buf.byteLength
          if (total > 0) {
            options.onProgress?.(Math.min(100, Math.round((received / total) * 100)))
          }
          yield buf
        }
      },
      fs.createWriteStream(targetPath)
    )
  }

  private async verifyTarball(filePath: string, dist: DistInfo) {
    const sri = firstIntegrityEntry(dist.integrity)
    if (sri) {
      if (sri.algorithm !== 'sha512' && sri.algorithm !== 'sha1') {
        throw new Error(`Unsupported integrity algorithm: ${sri.algorithm}`)
      }
      const digest = await this.computeHash(filePath, sri.algorithm)
      const matches = digest && crypto.timingSafeEqual(digest, sri.expected)
      if (!matches) {
        throw new Error(`Integrity check failed (${sri.algorithm})`)
      }
      return
    }
    if (dist.shasum) {
      const digest = await this.computeHash(filePath, 'sha1')
      if (!digest || digest.toString('hex') !== dist.shasum) {
        throw new Error('Integrity check failed (sha1)')
      }
      return
    }
    throw new Error('No integrity or shasum provided by registry')
  }

  private async computeHash(filePath: string, algorithm: 'sha1' | 'sha512') {
    const hash = crypto.createHash(algorithm)
    const file = fs.createReadStream(filePath)
    for await (const chunk of file) {
      hash.update(chunk as Buffer)
    }
    return hash.digest()
  }

  private async extractTarball(filePath: string) {
    const tarModule = await this.loadTarModule()
    const tempDir = await fsp.mkdtemp(path.join(os.tmpdir(), 'examaware-plugin-registry-'))
    await tarModule.x({ file: filePath, cwd: tempDir, strip: 1 })
    return tempDir
  }

  private async loadTarModule() {
    if (!this.tarModulePromise) {
      this.tarModulePromise = import('tar').then((mod) => (mod as any).default ?? mod)
    }
    return this.tarModulePromise
  }
}
