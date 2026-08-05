import { createHash } from 'node:crypto'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  CONTROL_PROTOCOL_VERSION,
  EXAM_CONFIG_ARTIFACT_MEDIA_TYPE,
  type DeviceStateSnapshot
} from '@dsz-examaware/control-protocol'
import type { ExamConfig } from '@dsz-examaware/core'
import type { ControlAgentEvent } from '../../../src/shared/types/control'
import type { ControlRegistration } from '../../../src/main/control/controlTypes'

const state = vi.hoisted(() => ({
  start: vi.fn(),
  close: vi.fn(),
  onChanged: vi.fn(),
  setConfig: vi.fn(),
  applyTimeConfig: vi.fn()
}))

vi.mock('../../../src/main/player/playerSessionService', () => ({
  playerSessionService: {
    start: state.start,
    close: state.close,
    onChanged: state.onChanged
  }
}))

vi.mock('../../../src/main/config/configStore', () => ({
  setConfig: state.setConfig
}))

vi.mock('../../../src/main/timeSync/timeService', () => ({
  applyTimeConfig: state.applyTimeConfig
}))

import { ControlService } from '../../../src/main/control/controlService'

const deploymentId = '43408313-512f-4e86-a91b-0a5f58b7ee3e'
const examConfigId = 'b3df3de8-2da0-4a62-8c4f-2ac4570946a4'
const examConfigVersionId = 'bbdd2d49-063f-48ee-918d-aa672477d2ca'

const examConfig: ExamConfig = {
  examName: 'Final Exam',
  message: 'Be prepared',
  examInfos: [
    {
      name: 'Math',
      start: '2026-08-05T09:00:00',
      end: '2026-08-05T10:00:00',
      alertTime: 10
    }
  ]
}

const registration: ControlRegistration = {
  serverUrl: 'http://127.0.0.1:3100/',
  deviceId: examConfigId,
  credential: 'a'.repeat(48),
  websocketUrl: 'ws://127.0.0.1:3100/device/v1/connect',
  protocolVersion: CONTROL_PROTOCOL_VERSION,
  enrolledAt: '2026-08-05T08:00:00.000Z'
}

describe('ControlService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    state.onChanged.mockReturnValue(() => {})
    state.start.mockResolvedValue({ id: 'control-session', state: 'ready' })
    state.close.mockResolvedValue(undefined)
  })

  it('prepares, activates, and stops a control deployment', async () => {
    const bytes = new TextEncoder().encode(JSON.stringify(examConfig))
    const sha256 = createHash('sha256').update(bytes).digest('hex')
    const apiClient = {
      downloadArtifact: vi.fn().mockResolvedValue({ bytes, sha256 })
    }
    const agent = {
      getSnapshot: vi.fn().mockReturnValue({
        state: 'online',
        deviceId: registration.deviceId,
        serverUrl: registration.serverUrl
      }),
      getRegistration: vi.fn().mockReturnValue(registration),
      onChanged: vi.fn().mockReturnValue(() => {}),
      enroll: vi.fn(),
      clearEnrollment: vi.fn(),
      callProctor: vi.fn()
    }
    const service = new ControlService()
    service.attach(agent as never, apiClient as never)

    const ready = await service.prepareDeployment({
      deploymentId,
      examConfigId,
      examConfigVersionId,
      artifact: {
        url: 'http://127.0.0.1:3100/api/v1/device-artifacts/config',
        mediaType: EXAM_CONFIG_ARTIFACT_MEDIA_TYPE,
        sizeBytes: bytes.byteLength,
        sha256,
        expiresAt: '2026-08-05T10:00:00.000Z'
      }
    })
    expect(ready).toEqual<DeviceStateSnapshot>({
      player: { status: 'ready', deploymentId, examConfigVersionId }
    })

    const playing = await service.activateDeployment({ deploymentId, examConfigVersionId })
    expect(state.start).toHaveBeenCalledWith(
      { kind: 'config', config: expect.objectContaining({ examName: 'Final Exam' }) },
      { replaceExisting: true, origin: 'control', deploymentId }
    )
    expect(playing).toEqual<DeviceStateSnapshot>({
      player: { status: 'playing', deploymentId, examConfigVersionId }
    })

    await expect(service.stopDeployment({ deploymentId })).resolves.toEqual({
      player: { status: 'idle' }
    })
    expect(state.close).toHaveBeenCalledWith('control-session')
  })

  it('applies managed settings and emits status and broadcast events', () => {
    const agent = {
      getSnapshot: vi.fn().mockReturnValue({ state: 'online' }),
      getRegistration: vi.fn().mockReturnValue(registration),
      onChanged: vi.fn().mockReturnValue(() => {})
    }
    const service = new ControlService()
    service.attach(agent as never, { downloadArtifact: vi.fn() } as never)
    const events: ControlAgentEvent[] = []
    service.onEvent((event) => events.push(event))

    service.applyManagedSettings([
      { key: 'appearance.theme', value: 'dark' },
      { key: 'player.uiScale', value: 1.25 },
      { key: 'timeSync.autoSync', value: false }
    ])
    expect(state.setConfig).toHaveBeenCalledWith('appearance.theme', 'dark')
    expect(state.setConfig).toHaveBeenCalledWith('player.uiScale', 1.25)
    expect(state.setConfig).toHaveBeenCalledWith('time.autoSync', false)
    expect(state.applyTimeConfig).toHaveBeenCalledWith({ autoSync: false })
    expect(service.isManagedKey('player.uiScale')).toBe(true)
    expect(service.isManagedKey('time.autoSync')).toBe(true)
    expect(service.getStatus().managedSettingKeys).toEqual([
      'appearance.theme',
      'player.uiScale',
      'timeSync.autoSync'
    ])

    service.emitBroadcast({
      broadcastId: deploymentId,
      title: 'Notice',
      body: 'Prepare now',
      severity: 'warning',
      expiresAt: '2026-08-05T10:00:00.000Z'
    })
    service.emitDismiss({ broadcastId: deploymentId })
    expect(events).toContainEqual(
      expect.objectContaining({
        type: 'broadcast',
        payload: expect.objectContaining({ title: 'Notice' })
      })
    )
    expect(events).toContainEqual({
      type: 'broadcast-dismiss',
      payload: { broadcastId: deploymentId }
    })
  })
})
