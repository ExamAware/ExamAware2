import os from 'node:os'
import path from 'node:path'
import { app, BrowserWindow, safeStorage } from 'electron'
import { WebSocket } from 'ws'
import {
  CONTROL_COMMAND_TYPES,
  CONTROL_PROTOCOL_VERSION,
  CURRENT_CONTROL_CAPABILITIES,
  CURRENT_MANAGED_SETTING_CAPABILITIES,
  PLAYER_STATUS,
  deviceIdentitySchema,
  type DeviceStateSnapshot
} from '@dsz-examaware/control-protocol'
import { appLogger } from '../logging/logger'
import { playerSessionService } from '../player/playerSessionService'
import { getTimeSyncInfo } from '../timeSync/timeService'
import { ControlAgentService, type ControlCommandHandler } from './controlAgentService'
import { ControlApiClient } from './controlApiClient'
import { ControlCredentialStore } from './controlCredentialStore'
import { controlService } from './controlService'
import { ipcChannels } from '../../shared/ipc/channels'
import { sendIpcEvent } from '../../shared/ipc/sender'

const CONTROL_CREDENTIAL_FILE_NAME = 'control-device.json'
let desktopControlAgentService: ControlAgentService | undefined

export function getDesktopControlAgentService(): ControlAgentService | undefined {
  return desktopControlAgentService
}

export function createDesktopControlAgentService(): ControlAgentService {
  const credentialStore = new ControlCredentialStore(
    path.join(app.getPath('userData'), CONTROL_CREDENTIAL_FILE_NAME),
    safeStorage
  )
  const apiClient = new ControlApiClient()
  const service = new ControlAgentService({
    credentialStore,
    apiClient,
    createSocket: (url, options) => new WebSocket(url, options),
    identity: createDeviceIdentity,
    state: createDeviceStateSnapshot,
    capabilities: {
      commands: [...CURRENT_CONTROL_CAPABILITIES],
      managedSettings: [...CURRENT_MANAGED_SETTING_CAPABILITIES]
    },
    commandHandlers: {
      [CONTROL_COMMAND_TYPES.examConfigPrepare]: handleControlCommand,
      [CONTROL_COMMAND_TYPES.playbackActivate]: handleControlCommand,
      [CONTROL_COMMAND_TYPES.playbackStop]: handleControlCommand,
      [CONTROL_COMMAND_TYPES.broadcastShow]: handleControlCommand,
      [CONTROL_COMMAND_TYPES.broadcastDismiss]: handleControlCommand,
      [CONTROL_COMMAND_TYPES.settingsApply]: handleControlCommand
    },
    logger: {
      info: (message, metadata) => appLogger.info(message, metadata),
      warn: (message, error) => appLogger.warn(message, error),
      error: (message, error) => appLogger.error(message, error)
    }
  })
  let previousState = service.getSnapshot().state
  service.onChanged((snapshot) => {
    if (snapshot.state === previousState) return
    appLogger.info('[control] connection state changed', {
      previousState,
      state: snapshot.state,
      deviceId: snapshot.deviceId,
      errorCode: snapshot.lastError?.code
    })
    previousState = snapshot.state
  })
  controlService.attach(service, apiClient)
  controlService.onEvent((event) => {
    for (const window of BrowserWindow.getAllWindows()) {
      try {
        sendIpcEvent(window.webContents, ipcChannels.control.onEvent, event)
      } catch (error) {
        appLogger.warn('[control] failed to broadcast agent event', error as Error)
      }
    }
  })
  desktopControlAgentService = service
  return service
}
const handleControlCommand: ControlCommandHandler = async (command) => {
  switch (command.type) {
    case CONTROL_COMMAND_TYPES.examConfigPrepare:
      return { state: await controlService.prepareDeployment(command.payload) }
    case CONTROL_COMMAND_TYPES.playbackActivate:
      return { state: await controlService.activateDeployment(command.payload) }
    case CONTROL_COMMAND_TYPES.playbackStop:
      return { state: await controlService.stopDeployment(command.payload) }
    case CONTROL_COMMAND_TYPES.broadcastShow:
      controlService.emitBroadcast(command.payload)
      return
    case CONTROL_COMMAND_TYPES.broadcastDismiss:
      controlService.emitDismiss(command.payload)
      return
    case CONTROL_COMMAND_TYPES.settingsApply:
      controlService.applyManagedSettings(command.payload.settings)
      return
  }
}

function createDeviceIdentity() {
  return deviceIdentitySchema.parse({
    displayName: os.hostname(),
    platform: process.platform,
    architecture: process.arch,
    appVersion: app.getVersion(),
    protocolVersion: CONTROL_PROTOCOL_VERSION
  })
}

function createDeviceStateSnapshot(): DeviceStateSnapshot {
  const sessions = playerSessionService.list()
  const active = sessions.find(
    (session) => session.state !== 'closed' && session.state !== 'failed'
  )
  const latestFailure = active ? undefined : sessions.find((session) => session.state === 'failed')
  const controlledPlayer = controlService.getDevicePlayerState()
  const timeSync = getTimeSyncInfo()
  return {
    player:
      controlledPlayer ??
      (active
        ? {
            status:
              active.state === 'ready'
                ? PLAYER_STATUS.ready
                : active.state === 'closing'
                  ? PLAYER_STATUS.idle
                  : PLAYER_STATUS.preparing
          }
        : latestFailure
          ? {
              status: PLAYER_STATUS.error,
              errorCode: latestFailure.error?.code ?? 'player_session_failed'
            }
          : { status: PLAYER_STATUS.idle }),
    timeSync: {
      synchronized: timeSync.syncStatus === 'success',
      offsetMs: Number.isFinite(timeSync.offset) ? timeSync.offset : undefined
    }
  }
}
