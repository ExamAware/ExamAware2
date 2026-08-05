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

interface SafeStorageAdapter {
  isEncryptionAvailable(): boolean
  encryptString(value: string): Buffer
  decryptString(value: Buffer): string
}

interface StoredControlRegistration {
  version: typeof CONTROL_CREDENTIAL_FILE_VERSION
  serverUrl: string
  deviceId: string
  encryptedCredential: string
  websocketUrl: string
  protocolVersion: number
  enrolledAt: string
}

export class ControlCredentialStore {
  constructor(
    private readonly filePath: string,
    private readonly safeStorage: SafeStorageAdapter
  ) {}

  async load(): Promise<ControlRegistration | undefined> {
    let raw: string
    try {
      raw = await fs.readFile(this.filePath, 'utf8')
    } catch (error) {
      if (isNodeError(error) && error.code === 'ENOENT') return undefined
      throw new ControlAgentError(
        'credential_read_failed',
        '无法读取集控设备凭据',
        { filePath: this.filePath },
        error
      )
    }

    try {
      const stored = parseStoredRegistration(JSON.parse(raw) as unknown)
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
    } catch (error) {
      if (error instanceof ControlAgentError && error.code === 'secure_storage_unavailable') {
        throw error
      }
      throw new ControlAgentError(
        'credential_invalid',
        '集控设备凭据损坏或无法解密',
        { filePath: this.filePath },
        error
      )
    }
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
    const temporaryPath = `${this.filePath}.${process.pid}.tmp`
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
      await fs.rm(temporaryPath, { force: true }).catch(() => {})
    }
  }

  async clear(): Promise<void> {
    try {
      await fs.rm(this.filePath, { force: true })
    } catch (error) {
      throw new ControlAgentError(
        'credential_clear_failed',
        '无法清除集控设备凭据',
        { filePath: this.filePath },
        error
      )
    }
  }

  private assertEncryptionAvailable() {
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

function parseIsoDate(value: string, field: string) {
  if (!Number.isFinite(Date.parse(value))) throw new TypeError(`${field} must be an ISO date`)
  return new Date(value).toISOString()
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && 'code' in error
}
