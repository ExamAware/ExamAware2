import { watch } from 'node:fs'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { enrollDeviceResponseSchema } from '@dsz-examaware/control-protocol'
import {
  ControlAgentError,
  normalizeControlServerUrl,
  validateControlWebSocketUrl,
  type ControlRegistration
} from './controlTypes'

const CONTROL_CREDENTIAL_FILE_VERSION = 1
const WATCH_DEBOUNCE_MS = 300

interface SafeStorageAdapter {
  isEncryptionAvailable(): boolean
  encryptString(value: string): Buffer
  decryptString(value: Buffer): string
}

export interface StoredControlRegistration {
  version: typeof CONTROL_CREDENTIAL_FILE_VERSION
  serverUrl: string
  deviceId: string
  encryptedCredential: string
  websocketUrl: string
  protocolVersion: number
  enrolledAt: string
}

interface ControlCredentialStoreOptions {
  logger?: { warn(message: string, error?: unknown): void }
  extraPersist?: (stored: StoredControlRegistration) => Promise<void>
  extraLoad?: () => Promise<StoredControlRegistration | null>
  extraClear?: () => Promise<void>
}

export class ControlCredentialStore {
  private isSelfWrite = false

  constructor(
    private readonly filePath: string,
    private readonly safeStorage: SafeStorageAdapter,
    private readonly options: ControlCredentialStoreOptions = {}
  ) {}

  async load(): Promise<ControlRegistration | undefined> {
    let primaryMissing = false
    let invalidCredential: ControlAgentError | undefined

    try {
      return await this.loadFile(this.filePath)
    } catch (error) {
      if (isNodeError(error) && error.code === 'ENOENT') {
        primaryMissing = true
      } else if (
        error instanceof ControlAgentError &&
        error.code === 'secure_storage_unavailable'
      ) {
        throw error
      } else if (error instanceof ControlAgentError && error.code === 'credential_invalid') {
        invalidCredential = error
        this.options.logger?.warn('[control] primary credential is invalid', error)
      } else {
        throw new ControlAgentError(
          'credential_read_failed',
          '无法读取集控设备凭据',
          { filePath: this.filePath },
          error
        )
      }
    }

    const shadowPath = this.shadowPath
    try {
      const { stored, registration } = await this.loadStoredFile(shadowPath)
      await this.writePrimary(stored)
      this.options.logger?.warn('[control] credential restored from shadow copy')
      return registration
    } catch (error) {
      if (error instanceof ControlAgentError && error.code === 'secure_storage_unavailable')
        throw error
      if (!isNodeError(error) || error.code !== 'ENOENT') {
        const wrapped = this.toInvalidCredential(error, shadowPath)
        invalidCredential ??= wrapped
        this.options.logger?.warn('[control] shadow credential is invalid', wrapped)
      }
    }

    if (this.options.extraLoad) {
      try {
        const stored = await this.options.extraLoad()
        if (stored) {
          const registration = this.registrationFromStored(parseStoredRegistration(stored))
          await this.writePrimary(stored)
          await this.writeShadow(stored)
          this.options.logger?.warn('[control] credential restored from registry mirror')
          return registration
        }
      } catch (error) {
        if (error instanceof ControlAgentError && error.code === 'secure_storage_unavailable')
          throw error
        const wrapped = this.toInvalidCredential(error, 'external credential mirror')
        invalidCredential ??= wrapped
        this.options.logger?.warn('[control] external credential mirror is invalid', wrapped)
      }
    }

    if (invalidCredential) throw invalidCredential
    if (primaryMissing) return undefined
    return undefined
  }

  async save(registration: ControlRegistration): Promise<void> {
    this.assertEncryptionAvailable()
    const parsed = enrollDeviceResponseSchema.parse({
      deviceId: registration.deviceId,
      credential: registration.credential,
      websocketUrl: registration.websocketUrl,
      protocolVersion: registration.protocolVersion
    })
    const stored: StoredControlRegistration = {
      version: CONTROL_CREDENTIAL_FILE_VERSION,
      serverUrl: normalizeControlServerUrl(registration.serverUrl),
      deviceId: parsed.deviceId,
      encryptedCredential: this.safeStorage.encryptString(parsed.credential).toString('base64'),
      websocketUrl: validateControlWebSocketUrl(parsed.websocketUrl),
      protocolVersion: parsed.protocolVersion,
      enrolledAt: parseIsoDate(registration.enrolledAt, 'enrolledAt')
    }

    await this.writePrimary(stored)
    try {
      await this.writeShadow(stored)
    } catch (error) {
      this.options.logger?.warn('[control] failed to write credential shadow copy', error)
    }
    try {
      await this.options.extraPersist?.(stored)
    } catch (error) {
      this.options.logger?.warn('[control] failed to write credential registry mirror', error)
    }
  }

  async clear(): Promise<void> {
    this.isSelfWrite = true
    try {
      await fs.rm(this.filePath, { force: true })
    } catch (error) {
      throw new ControlAgentError(
        'credential_clear_failed',
        '无法清除集控设备凭据',
        { filePath: this.filePath },
        error
      )
    } finally {
      this.isSelfWrite = false
    }

    try {
      await fs.rm(this.shadowPath, { force: true })
    } catch (error) {
      this.options.logger?.warn('[control] failed to clear credential shadow copy', error)
    }
    try {
      await this.options.extraClear?.()
    } catch (error) {
      this.options.logger?.warn('[control] failed to clear credential registry mirror', error)
    }
  }

  watch(restore: () => Promise<void>): () => void {
    let timer: NodeJS.Timeout | undefined
    let disposed = false
    let watcher: ReturnType<typeof watch>
    try {
      watcher = watch(path.dirname(this.filePath), (eventType, fileName) => {
        if (eventType !== 'rename' && eventType !== 'change') return
        if (fileName == null || path.basename(String(fileName)) !== path.basename(this.filePath))
          return
        if (this.isSelfWrite) return
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          timer = undefined
          if (!disposed)
            void restore().catch((error) =>
              this.options.logger?.warn('[control] credential restore failed', error)
            )
        }, WATCH_DEBOUNCE_MS)
      })
      watcher.on('error', (error) =>
        this.options.logger?.warn('[control] credential watch failed', error)
      )
    } catch (error) {
      this.options.logger?.warn('[control] unable to watch credential file', error)
      return () => {}
    }
    return () => {
      disposed = true
      if (timer) clearTimeout(timer)
      watcher.close()
    }
  }

  private get shadowPath(): string {
    return `${this.filePath}.shadow`
  }

  private async loadFile(filePath: string): Promise<ControlRegistration> {
    try {
      return (await this.loadStoredFile(filePath)).registration
    } catch (error) {
      if (isNodeError(error) && error.code === 'ENOENT') throw error
      if (error instanceof ControlAgentError && error.code === 'secure_storage_unavailable')
        throw error
      throw this.toInvalidCredential(error, filePath)
    }
  }

  private async loadStoredFile(filePath: string): Promise<{
    stored: StoredControlRegistration
    registration: ControlRegistration
  }> {
    const stored = parseStoredRegistration(
      JSON.parse(await fs.readFile(filePath, 'utf8')) as unknown
    )
    return { stored, registration: this.registrationFromStored(stored) }
  }

  private registrationFromStored(stored: StoredControlRegistration): ControlRegistration {
    this.assertEncryptionAvailable()
    const credential = this.safeStorage.decryptString(
      Buffer.from(stored.encryptedCredential, 'base64')
    )
    const response = enrollDeviceResponseSchema.parse({
      deviceId: stored.deviceId,
      credential,
      websocketUrl: validateControlWebSocketUrl(stored.websocketUrl),
      protocolVersion: stored.protocolVersion
    })
    return {
      ...response,
      serverUrl: normalizeControlServerUrl(stored.serverUrl),
      enrolledAt: parseIsoDate(stored.enrolledAt, 'enrolledAt')
    }
  }

  private async writePrimary(stored: StoredControlRegistration): Promise<void> {
    const temporaryPath = `${this.filePath}.${process.pid}.tmp`
    this.isSelfWrite = true
    try {
      await fs.mkdir(path.dirname(this.filePath), { recursive: true })
      await fs.writeFile(temporaryPath, `${JSON.stringify(stored, null, 2)}\n`, {
        encoding: 'utf8',
        mode: 0o600
      })
      await fs.rename(temporaryPath, this.filePath)
    } catch (error) {
      throw new ControlAgentError(
        'credential_write_failed',
        '无法保存集控设备凭据',
        { filePath: this.filePath },
        error
      )
    } finally {
      this.isSelfWrite = false
      await fs.rm(temporaryPath, { force: true }).catch(() => {})
    }
  }

  private async writeShadow(stored: StoredControlRegistration): Promise<void> {
    this.isSelfWrite = true
    try {
      await fs.writeFile(this.shadowPath, `${JSON.stringify(stored, null, 2)}\n`, {
        encoding: 'utf8',
        mode: 0o600
      })
    } finally {
      this.isSelfWrite = false
    }
  }

  private toInvalidCredential(error: unknown, filePath: string): ControlAgentError {
    return error instanceof ControlAgentError && error.code === 'credential_invalid'
      ? error
      : new ControlAgentError(
          'credential_invalid',
          '集控设备凭据损坏或无法解密',
          { filePath },
          error
        )
  }

  private assertEncryptionAvailable(): void {
    if (!this.safeStorage.isEncryptionAvailable()) {
      throw new ControlAgentError(
        'secure_storage_unavailable',
        '系统安全存储当前不可用，无法保存设备凭据'
      )
    }
  }
}

function parseStoredRegistration(value: unknown): StoredControlRegistration {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new TypeError('Stored control registration must be an object')
  }
  const record = value as Record<string, unknown>
  if (
    record.version !== CONTROL_CREDENTIAL_FILE_VERSION ||
    typeof record.serverUrl !== 'string' ||
    typeof record.deviceId !== 'string' ||
    typeof record.encryptedCredential !== 'string' ||
    typeof record.websocketUrl !== 'string' ||
    typeof record.protocolVersion !== 'number' ||
    typeof record.enrolledAt !== 'string'
  ) {
    throw new TypeError('Stored control registration has an unsupported shape')
  }
  return record as unknown as StoredControlRegistration
}

function parseIsoDate(value: string, field: string): string {
  if (!Number.isFinite(Date.parse(value))) throw new TypeError(`${field} must be an ISO date`)
  return new Date(value).toISOString()
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && 'code' in error
}
