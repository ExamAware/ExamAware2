import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { CONTROL_PROTOCOL_VERSION } from '@dsz-examaware/control-protocol'
import type { ControlRegistration } from '../../../src/main/control/controlTypes'

const watchState = vi.hoisted(() => ({
  watch: vi.fn(),
  callback: undefined as ((eventType: string, fileName: string) => void) | undefined,
  close: vi.fn()
}))

vi.mock('node:fs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('node:fs')>()),
  watch: watchState.watch
}))

import {
  ControlCredentialStore,
  type StoredControlRegistration
} from '../../../src/main/control/controlCredentialStore'

const deviceId = 'b3df3de8-2da0-4a62-8c4f-2ac4570946a4'
const credential = 'a'.repeat(48)
const safeStorage = {
  isEncryptionAvailable: () => true,
  encryptString: (value: string) => Buffer.from(`encrypted:${value}`, 'utf8'),
  decryptString: (value: Buffer) => value.toString('utf8').replace(/^encrypted:/, '')
}

function registration(): ControlRegistration {
  return {
    serverUrl: 'http://127.0.0.1:3100/',
    deviceId,
    credential,
    websocketUrl: 'ws://127.0.0.1:3100/device/v1/connect',
    protocolVersion: CONTROL_PROTOCOL_VERSION,
    enrolledAt: '2026-08-04T09:00:00.000Z'
  }
}

function storedRegistration(): StoredControlRegistration {
  return {
    version: 1,
    serverUrl: registration().serverUrl,
    deviceId,
    encryptedCredential: safeStorage.encryptString(credential).toString('base64'),
    websocketUrl: registration().websocketUrl,
    protocolVersion: CONTROL_PROTOCOL_VERSION,
    enrolledAt: registration().enrolledAt
  }
}

describe('ControlCredentialStore recovery', () => {
  let directory: string
  let filePath: string

  beforeEach(async () => {
    vi.clearAllMocks()
    directory = await mkdtemp(path.join(tmpdir(), 'examaware-control-store-'))
    filePath = path.join(directory, 'control-device.json')
    watchState.callback = undefined
    watchState.watch.mockImplementation(
      (_directory: string, callback: (eventType: string, fileName: string) => void) => {
        watchState.callback = callback
        return { on: vi.fn().mockReturnThis(), close: watchState.close }
      }
    )
  })

  afterEach(async () => {
    await rm(directory, { recursive: true, force: true })
  })

  it('restores a corrupted primary credential from its shadow copy', async () => {
    const store = new ControlCredentialStore(filePath, safeStorage)
    await store.save(registration())
    const shadow = await readFile(`${filePath}.shadow`, 'utf8')
    await writeFile(filePath, '{broken', 'utf8')

    await expect(store.load()).resolves.toEqual(registration())
    expect(await readFile(filePath, 'utf8')).toBe(shadow)
  })

  it('restores missing primary and shadow files from the extra mirror', async () => {
    const extraLoad = vi.fn().mockResolvedValue(storedRegistration())
    const store = new ControlCredentialStore(filePath, safeStorage, { extraLoad })

    await expect(store.load()).resolves.toEqual(registration())
    expect(extraLoad).toHaveBeenCalledOnce()
    await expect(readFile(filePath, 'utf8')).resolves.toContain(deviceId)
    await expect(readFile(`${filePath}.shadow`, 'utf8')).resolves.toContain(deviceId)
  })

  it('clears the primary, shadow, and extra mirror', async () => {
    const extraClear = vi.fn().mockResolvedValue(undefined)
    const store = new ControlCredentialStore(filePath, safeStorage, { extraClear })
    await store.save(registration())

    await store.clear()

    await expect(readFile(filePath, 'utf8')).rejects.toMatchObject({ code: 'ENOENT' })
    await expect(readFile(`${filePath}.shadow`, 'utf8')).rejects.toMatchObject({ code: 'ENOENT' })
    expect(extraClear).toHaveBeenCalledOnce()
  })

  it('requests restoration when the primary file is renamed', async () => {
    const restore = vi.fn().mockResolvedValue(undefined)
    const store = new ControlCredentialStore(filePath, safeStorage)
    const dispose = store.watch(restore)

    watchState.callback?.('rename', 'control-device.json')
    await new Promise((resolve) => setTimeout(resolve, 350))

    expect(restore).toHaveBeenCalledOnce()
    dispose()
    expect(watchState.close).toHaveBeenCalledOnce()
  })
})
