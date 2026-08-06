import { createHash } from 'node:crypto'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { CONTROL_PROTOCOL_VERSION } from '@dsz-examaware/control-protocol'
import { ControlApiClient } from '../../../src/main/control/controlApiClient'
import { ControlCredentialStore } from '../../../src/main/control/controlCredentialStore'
import type { ControlRegistration } from '../../../src/main/control/controlTypes'

const deviceId = 'b3df3de8-2da0-4a62-8c4f-2ac4570946a4'
const credential = 'a'.repeat(48)

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

describe('ControlCredentialStore', () => {
  let directory: string

  beforeEach(async () => {
    directory = await mkdtemp(path.join(tmpdir(), 'examaware-control-credentials-'))
  })

  afterEach(async () => {
    await rm(directory, { recursive: true, force: true })
  })

  it('persists only the safeStorage-encrypted credential and restores it', async () => {
    const safeStorage = {
      isEncryptionAvailable: () => true,
      encryptString: (value: string) => Buffer.from(`encrypted:${value}`, 'utf8'),
      decryptString: (value: Buffer) => value.toString('utf8').replace(/^encrypted:/, '')
    }
    const filePath = path.join(directory, 'control-device.json')
    const store = new ControlCredentialStore(filePath, safeStorage)

    await store.save(registration())

    const storedText = await readFile(filePath, 'utf8')
    expect(storedText).not.toContain(credential)
    await expect(store.load()).resolves.toEqual(registration())
  })

  it('refuses to persist a credential without operating-system encryption', async () => {
    const store = new ControlCredentialStore(path.join(directory, 'control-device.json'), {
      isEncryptionAvailable: () => false,
      encryptString: vi.fn(),
      decryptString: vi.fn()
    })

    await expect(store.save(registration())).rejects.toMatchObject({
      code: 'secure_storage_unavailable'
    })
  })
})

describe('ControlApiClient', () => {
  it('exchanges a validated enrollment code without following redirects', async () => {
    const fetchImpl = vi.fn().mockResolvedValue(
      Response.json({
        deviceId,
        credential,
        websocketUrl: 'ws://192.168.10.20:3100/device/v1/connect',
        protocolVersion: CONTROL_PROTOCOL_VERSION
      })
    )
    const client = new ControlApiClient(fetchImpl as typeof fetch)

    await expect(
      client.enroll('http://192.168.10.20:3100', 'EA2-0123456789abcdef', {
        displayName: 'Room 101',
        platform: 'darwin',
        architecture: 'arm64',
        appVersion: '1.4.4',
        protocolVersion: CONTROL_PROTOCOL_VERSION
      })
    ).resolves.toMatchObject({ deviceId, credential, serverUrl: 'http://192.168.10.20:3100/' })
    expect(fetchImpl).toHaveBeenCalledWith(
      new URL('http://192.168.10.20:3100/api/v1/device-enrollments'),
      expect.objectContaining({ method: 'POST', redirect: 'error' })
    )
  })

  it('authenticates bounded device error reports with the device credential', async () => {
    const fetchImpl = vi.fn().mockResolvedValue(Response.json({ id: 'reported' }))
    const client = new ControlApiClient(fetchImpl as typeof fetch)

    await client.reportError(registration(), {
      severity: 'error',
      source: 'control-agent',
      code: 'socket_failed',
      message: 'Connection failed',
      context: { attempt: 2 },
      occurredAt: '2026-08-04T09:00:00.000Z'
    })

    expect(fetchImpl).toHaveBeenCalledWith(
      new URL('http://127.0.0.1:3100/api/v1/device-errors'),
      expect.objectContaining({
        method: 'POST',
        redirect: 'error',
        headers: expect.objectContaining({
          'x-device-id': deviceId,
          'x-device-credential': credential
        })
      })
    )
  })

  it('authenticates bounded proctor calls with the device credential', async () => {
    const fetchImpl = vi.fn().mockResolvedValue(Response.json({ id: 'call-id' }))
    const client = new ControlApiClient(fetchImpl as typeof fetch)

    await client.callProctor(registration(), {
      occurredAt: '2026-08-04T09:00:00.000Z',
      roomNumber: 'A-101'
    })

    expect(fetchImpl).toHaveBeenCalledWith(
      new URL('http://127.0.0.1:3100/api/v1/proctor-calls'),
      expect.objectContaining({
        method: 'POST',
        redirect: 'error',
        headers: expect.objectContaining({
          'x-device-id': deviceId,
          'x-device-credential': credential
        })
      })
    )
  })

  it('streams authenticated artifacts and returns their SHA-256 digest', async () => {
    const bytes = new TextEncoder().encode('{"examName":"Final"}')
    const fetchImpl = vi.fn().mockResolvedValue(
      new Response(
        new ReadableStream<Uint8Array>({
          start(controller) {
            controller.enqueue(bytes.slice(0, 8))
            controller.enqueue(bytes.slice(8))
            controller.close()
          }
        }),
        { headers: { 'content-length': String(bytes.byteLength) } }
      )
    )
    const client = new ControlApiClient(fetchImpl as typeof fetch)

    await expect(
      client.downloadArtifact(
        registration(),
        'http://127.0.0.1:3100/api/v1/device-artifacts/config'
      )
    ).resolves.toEqual({
      bytes,
      sha256: createHash('sha256').update(bytes).digest('hex')
    })
    expect(fetchImpl).toHaveBeenCalledWith(
      new URL('http://127.0.0.1:3100/api/v1/device-artifacts/config'),
      expect.objectContaining({
        method: 'GET',
        redirect: 'error',
        headers: {
          'x-device-id': deviceId,
          'x-device-credential': credential
        }
      })
    )
  })

  it.each(['http://control.example.edu', 'http://localhost:3100', 'http://8.8.8.8:3100'])(
    'rejects plaintext domain or public server %s before sending credentials',
    async (serverUrl) => {
      const fetchImpl = vi.fn()
      const client = new ControlApiClient(fetchImpl as typeof fetch)

      await expect(
        client.enroll(serverUrl, 'EA2-0123456789abcdef', {
          displayName: 'Room 101',
          platform: 'win32',
          architecture: 'x64',
          appVersion: '1.4.4',
          protocolVersion: CONTROL_PROTOCOL_VERSION
        })
      ).rejects.toMatchObject({ code: 'insecure_server_url' })
      expect(fetchImpl).not.toHaveBeenCalled()
    }
  )

  it('preserves stable Problem Details codes from the server', async () => {
    const fetchImpl = vi.fn().mockResolvedValue(
      Response.json(
        {
          code: 'device_enrollment_code_expired',
          message: 'Device enrollment code has expired'
        },
        { status: 410 }
      )
    )
    const client = new ControlApiClient(fetchImpl as typeof fetch)

    await expect(
      client.enroll('https://control.example.edu', 'EA2-0123456789abcdef', {
        displayName: 'Room 101',
        platform: 'linux',
        architecture: 'x64',
        appVersion: '1.4.4',
        protocolVersion: CONTROL_PROTOCOL_VERSION
      })
    ).rejects.toMatchObject({ code: 'device_enrollment_code_expired' })
  })

  it('preserves the unsupported device protocol code during enrollment', async () => {
    const fetchImpl = vi.fn().mockResolvedValue(
      Response.json(
        {
          code: 'device_protocol_version_unsupported',
          message: 'Device protocol version is not supported by this server'
        },
        { status: 400 }
      )
    )
    const client = new ControlApiClient(fetchImpl as typeof fetch)

    await expect(
      client.enroll('https://control.example.edu', 'EA2-0123456789abcdef', {
        displayName: 'Room 101',
        platform: 'linux',
        architecture: 'x64',
        appVersion: '1.4.4',
        protocolVersion: CONTROL_PROTOCOL_VERSION
      })
    ).rejects.toMatchObject({ code: 'device_protocol_version_unsupported' })
  })
})
