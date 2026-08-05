import {
  MANAGED_SETTING_KEYS,
  PLAYER_STATUS,
  type BroadcastDismissCommand,
  type BroadcastShowCommand,
  type DeviceStateSnapshot,
  type ExamConfigPrepareCommand,
  type ManagedSetting,
  type PlaybackActivateCommand,
  type PlaybackStopCommand
} from '@dsz-examaware/control-protocol'
import { validateExamConfigDetailed, type ExamConfig } from '@dsz-examaware/core'
import type { ControlStatusSnapshot } from '@dsz-examaware/plugin-sdk'
import { setConfig } from '../config/configStore'
import { playerSessionService } from '../player/playerSessionService'
import { applyTimeConfig } from '../timeSync/timeService'
import type { ControlAgentEvent } from '../../shared/types/control'
import type { ControlApiClient } from './controlApiClient'
import type { ControlAgentService } from './controlAgentService'
import { ControlAgentError, type ControlRegistration } from './controlTypes'
import {
  clearManagedValues,
  loadManagedValues,
  saveManagedValues,
  startManagedConfigWatch
} from './managedControlStore'
import { clearEnrollmentMarker, writeEnrollmentMarker } from './controlEnrollmentMarker'

interface PreparedDeployment {
  deploymentId: string
  examConfigId: string
  examConfigVersionId: string
  config: ExamConfig
}

type DevicePlayerState = NonNullable<DeviceStateSnapshot['player']>

export class ControlService {
  private readonly listeners = new Set<(event: ControlAgentEvent) => void>()
  private readonly preparedDeployments = new Map<string, PreparedDeployment>()
  private readonly controlSessionByDeployment = new Map<string, string>()
  private readonly managedKeys = new Set<string>()
  private readonly managedValues = new Map<ManagedSetting['key'], ManagedSetting['value']>()
  private playerState?: DevicePlayerState
  private agent?: ControlAgentService
  private apiClient?: ControlApiClient
  private disposeAgentListener?: () => void
  private managedStateInitialized = false
  private disposeManagedConfigWatch?: () => void

  constructor() {
    playerSessionService.onChanged((event) => {
      const deploymentId = event.session.deploymentId
      if (event.session.origin !== 'control' || !deploymentId) return
      if (event.session.state !== 'closed' && event.session.state !== 'failed') return

      const prepared = this.preparedDeployments.get(deploymentId)
      this.controlSessionByDeployment.delete(deploymentId)
      if (event.session.state === 'closed') {
        this.preparedDeployments.delete(deploymentId)
        this.playerState = {
          status: PLAYER_STATUS.idle,
          deploymentId,
          ...(prepared ? { examConfigVersionId: prepared.examConfigVersionId } : {})
        }
      } else {
        this.playerState = {
          status: PLAYER_STATUS.error,
          deploymentId,
          ...(prepared ? { examConfigVersionId: prepared.examConfigVersionId } : {}),
          errorCode: event.session.error?.code ?? 'player_session_failed'
        }
      }
      this.agent?.reportState()
    })
  }

  attach(agent: ControlAgentService, apiClient: ControlApiClient): void {
    this.disposeAgentListener?.()
    this.agent = agent
    this.apiClient = apiClient
    this.disposeAgentListener = agent.onChanged(() => {
      this.emitStatusChanged()
    })
  }

  async initializeManagedState(): Promise<void> {
    if (this.managedStateInitialized) return
    this.managedStateInitialized = true
    const values = await loadManagedValues()
    const allowedKeys = new Set<string>(Object.values(MANAGED_SETTING_KEYS))
    for (const [key, value] of Object.entries(values)) {
      if (!allowedKeys.has(key)) continue
      this.managedKeys.add(key)
      this.managedValues.set(key as ManagedSetting['key'], value as ManagedSetting['value'])
    }
    this.disposeManagedConfigWatch = startManagedConfigWatch((detail) =>
      this.reportManagedTamper(detail)
    )
    this.emitStatusChanged()
  }

  getStatus(): ControlStatusSnapshot {
    if (!this.agent) {
      return { state: 'stopped', managedSettingKeys: [...this.managedKeys] }
    }
    const snapshot = this.agent.getSnapshot()
    return {
      state: snapshot.state,
      displayName: snapshot.displayName,
      deviceId: snapshot.deviceId,
      serverUrl: snapshot.serverUrl,
      connectedAt: snapshot.connectedAt,
      lastError: snapshot.lastError,
      managedSettingKeys: [...this.managedKeys]
    }
  }

  onEvent(listener: (event: ControlAgentEvent) => void): () => void {
    this.listeners.add(listener)
    listener({ type: 'state-changed', snapshot: this.getStatus() })
    return () => this.listeners.delete(listener)
  }

  async bind(input: {
    serverUrl: string
    enrollmentCode: string
    displayName?: string
  }): Promise<ControlStatusSnapshot> {
    if (this.agent?.getRegistration() && this.isUnbindPrevented()) {
      throw new ControlAgentError('bind_blocked_by_policy', '集控策略禁止重新绑定或更换集控服务器')
    }
    await this.requireAgent().enroll(input.serverUrl, input.enrollmentCode, input.displayName)
    const registration = this.agent?.getRegistration()
    if (registration) void writeEnrollmentMarker(registration)
    return this.getStatus()
  }

  async unbind(): Promise<ControlStatusSnapshot> {
    if (this.isUnbindPrevented()) {
      throw new ControlAgentError('unbind_blocked_by_policy', '集控策略禁止解绑本设备')
    }
    await this.requireAgent().clearEnrollment()
    this.preparedDeployments.clear()
    this.managedKeys.clear()
    this.managedValues.clear()
    this.playerState = undefined
    void clearManagedValues()
    this.emitStatusChanged()
    void clearEnrollmentMarker()
    return this.getStatus()
  }

  async callProctor(): Promise<void> {
    await this.requireAgent().callProctor({ occurredAt: new Date().toISOString() })
  }

  getRegistration(): ControlRegistration | undefined {
    return this.agent?.getRegistration()
  }

  getDevicePlayerState(): DevicePlayerState | undefined {
    return this.playerState ? { ...this.playerState } : undefined
  }

  async prepareDeployment(
    payload: ExamConfigPrepareCommand['payload']
  ): Promise<DeviceStateSnapshot> {
    const registration = this.getRegistration()
    if (!registration) {
      throw new ControlAgentError('device_not_enrolled', '设备尚未接入集控服务器')
    }
    const artifact = await this.requireApiClient().downloadArtifact(
      registration,
      payload.artifact.url
    )
    if (artifact.bytes.byteLength !== payload.artifact.sizeBytes) {
      throw new ControlAgentError('artifact_size_mismatch', '集控考试档案大小校验失败')
    }
    if (artifact.sha256 !== payload.artifact.sha256) {
      throw new ControlAgentError('artifact_sha256_mismatch', '集控考试档案摘要校验失败')
    }

    let input: unknown
    try {
      input = JSON.parse(new TextDecoder().decode(artifact.bytes)) as unknown
    } catch (error) {
      throw new ControlAgentError(
        'artifact_invalid_json',
        '集控考试档案不是有效的 JSON',
        undefined,
        error
      )
    }
    const validation = validateExamConfigDetailed(input, { overlap: 'error', sort: true })
    if (!validation.valid || !validation.config) {
      throw new ControlAgentError('artifact_invalid_exam_config', '集控考试档案校验失败', {
        issues: validation.issues
      })
    }

    this.preparedDeployments.set(payload.deploymentId, {
      deploymentId: payload.deploymentId,
      examConfigId: payload.examConfigId,
      examConfigVersionId: payload.examConfigVersionId,
      config: validation.config
    })
    this.playerState = {
      status: PLAYER_STATUS.ready,
      deploymentId: payload.deploymentId,
      examConfigVersionId: payload.examConfigVersionId
    }
    return { player: { ...this.playerState } }
  }

  async activateDeployment(
    payload: PlaybackActivateCommand['payload']
  ): Promise<DeviceStateSnapshot> {
    const prepared = this.preparedDeployments.get(payload.deploymentId)
    if (!prepared) {
      throw new ControlAgentError('deployment_not_prepared', '集控考试尚未准备完成')
    }
    if (prepared.examConfigVersionId !== payload.examConfigVersionId) {
      throw new ControlAgentError('deployment_version_mismatch', '集控考试版本与已准备版本不一致')
    }
    const session = await playerSessionService.start(
      { kind: 'config', config: prepared.config },
      { replaceExisting: true, origin: 'control', deploymentId: payload.deploymentId },
      { allowUserExit: () => !this.isControlSessionExitPrevented() }
    )
    this.controlSessionByDeployment.set(payload.deploymentId, session.id)
    this.playerState = {
      status: PLAYER_STATUS.playing,
      deploymentId: payload.deploymentId,
      examConfigVersionId: payload.examConfigVersionId
    }
    return { player: { ...this.playerState } }
  }

  async stopDeployment(payload: PlaybackStopCommand['payload']): Promise<DeviceStateSnapshot> {
    const prepared = this.preparedDeployments.get(payload.deploymentId)
    const sessionId = this.controlSessionByDeployment.get(payload.deploymentId)
    if (sessionId) await playerSessionService.close(sessionId)
    this.controlSessionByDeployment.delete(payload.deploymentId)
    this.preparedDeployments.delete(payload.deploymentId)
    this.playerState = {
      status: PLAYER_STATUS.idle,
      deploymentId: payload.deploymentId,
      ...(prepared ? { examConfigVersionId: prepared.examConfigVersionId } : {})
    }
    return { player: { ...this.playerState } }
  }

  emitBroadcast(payload: BroadcastShowCommand['payload']): void {
    this.emit({ type: 'broadcast', payload })
  }

  emitDismiss(payload: BroadcastDismissCommand['payload']): void {
    this.emit({ type: 'broadcast-dismiss', payload })
  }

  applyManagedSettings(settings: ManagedSetting[]): void {
    for (const setting of settings) {
      const configKey = toDesktopConfigKey(setting.key)
      setConfig(configKey, setting.value)
      if (configKey.startsWith('time.')) {
        applyTimeConfig({ [configKey.slice(5)]: setting.value })
      }
      this.managedKeys.add(setting.key)
      this.managedValues.set(setting.key, setting.value)
    }
    void saveManagedValues(Object.fromEntries(this.managedValues))
    this.emitStatusChanged()
  }

  isManagedKey(key: string): boolean {
    return this.managedKeys.has(toProtocolSettingKey(key))
  }

  isControlSessionExitPrevented(): boolean {
    return this.managedValues.get(MANAGED_SETTING_KEYS.playerPreventControlSessionExit) === true
  }

  isUnbindPrevented(): boolean {
    return this.managedValues.get(MANAGED_SETTING_KEYS.controlPreventUnbind) === true
  }

  isQuitPrevented(): boolean {
    return this.managedValues.get(MANAGED_SETTING_KEYS.controlPreventQuit) === true
  }

  reportManagedTamper(detail: string): void {
    if (!this.agent?.getRegistration()) return
    void this.agent
      .reportError({
        severity: 'warning',
        source: 'managed-settings',
        code: 'managed_settings_tamper_detected',
        message: detail,
        context: {},
        occurredAt: new Date().toISOString()
      })
      .catch(() => {})
  }

  protected emit(event: ControlAgentEvent): void {
    for (const listener of this.listeners) listener(event)
  }

  private emitStatusChanged(): void {
    this.emit({ type: 'state-changed', snapshot: this.getStatus() })
  }

  private requireAgent(): ControlAgentService {
    if (!this.agent) {
      throw new ControlAgentError('control_agent_unavailable', '集控服务尚未启动')
    }
    return this.agent
  }

  private requireApiClient(): ControlApiClient {
    if (!this.apiClient) {
      throw new ControlAgentError('control_agent_unavailable', '集控服务尚未启动')
    }
    return this.apiClient
  }
}

function toDesktopConfigKey(key: string): string {
  return key.startsWith('timeSync.') ? `time.${key.slice('timeSync.'.length)}` : key
}

function toProtocolSettingKey(key: string): string {
  return key.startsWith('time.') ? `timeSync.${key.slice('time.'.length)}` : key
}

export const controlService = new ControlService()
