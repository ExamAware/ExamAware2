import { z } from 'zod';

export const CONTROL_PROTOCOL_VERSION = 1 as const;
export const MIN_SUPPORTED_CONTROL_PROTOCOL_VERSION = 1 as const;
export const CONTROL_PROTOCOL_CODEC = 'json' as const;
export const CONTROL_WEBSOCKET_PATH = '/device/v1/connect' as const;
export const CONTROL_MAX_MESSAGE_SIZE_BYTES = 64 * 1024;
export const CONTROL_MAX_ARTIFACT_SIZE_BYTES = 50 * 1024 * 1024;
export const CONTROL_HEARTBEAT_INTERVAL_MS = 20_000;
export const EXAM_CONFIG_ARTIFACT_MEDIA_TYPE =
  'application/vnd.examaware.exam-config+json' as const;
export const DEVICE_PLATFORM_VALUES = ['win32', 'darwin', 'linux', 'openharmony'] as const;
export const DEVICE_ARCHITECTURE_VALUES = ['x64', 'arm64'] as const;
export const DEVICE_ENROLLMENT_CODE_PATTERN = /^EA2-[A-Za-z0-9_-]{16,128}$/;
export const PLAYER_STATUS_VALUES = ['idle', 'preparing', 'ready', 'playing', 'error'] as const;
export const PLAYER_STATUS = {
  idle: PLAYER_STATUS_VALUES[0],
  preparing: PLAYER_STATUS_VALUES[1],
  ready: PLAYER_STATUS_VALUES[2],
  playing: PLAYER_STATUS_VALUES[3],
  error: PLAYER_STATUS_VALUES[4]
} as const;

export const BROADCAST_SEVERITY_VALUES = ['info', 'warning', 'critical'] as const;
export const BROADCAST_SEVERITY = {
  info: BROADCAST_SEVERITY_VALUES[0],
  warning: BROADCAST_SEVERITY_VALUES[1],
  critical: BROADCAST_SEVERITY_VALUES[2]
} as const;

export const MANAGED_SETTING_KEYS = {
  appearanceTheme: 'appearance.theme',
  playerUiScale: 'player.uiScale',
  playerUiDensity: 'player.uiDensity',
  playerLargeClockEnabled: 'player.largeClockEnabled',
  playerLargeClockScale: 'player.largeClockScale',
  playerExamInfoLargeFont: 'player.examInfoLargeFont',
  playerPreventControlSessionExit: 'player.preventControlSessionExit',
  controlPreventUnbind: 'control.preventUnbind',
  controlPreventQuit: 'control.preventQuit',
  pluginPreventInstall: 'plugins.preventInstall',
  pluginInstallBlacklist: 'plugins.installBlacklist',
  pluginInstallAllowlist: 'plugins.installAllowlist',
  timeSyncNtpServer: 'timeSync.ntpServer',
  timeSyncAutoSync: 'timeSync.autoSync',
  timeSyncIntervalMinutes: 'timeSync.syncIntervalMinutes'
} as const;
export const APPEARANCE_THEME_VALUES = ['light', 'dark', 'auto'] as const;
export const PLAYER_UI_DENSITY_VALUES = ['comfortable', 'cozy', 'compact'] as const;
export const DEVICE_ERROR_SEVERITY_VALUES = ['warning', 'error', 'fatal'] as const;
export const DEVICE_ERROR_SEVERITY = {
  warning: DEVICE_ERROR_SEVERITY_VALUES[0],
  error: DEVICE_ERROR_SEVERITY_VALUES[1],
  fatal: DEVICE_ERROR_SEVERITY_VALUES[2]
} as const;
export const CONTROL_CAPABILITY_NAMES = {
  examDeployment: 'exam-deployment',
  playback: 'playback',
  broadcast: 'broadcast',
  managedSettings: 'managed-settings',
  errorReporting: 'error-reporting'
} as const;
export const MANAGED_SETTINGS_REPLACE_CAPABILITY_VERSION = 2;
export const CURRENT_CONTROL_CAPABILITIES = Object.freeze(
  Object.values(CONTROL_CAPABILITY_NAMES).map((name) =>
    Object.freeze({
      name,
      version:
        name === CONTROL_CAPABILITY_NAMES.managedSettings
          ? MANAGED_SETTINGS_REPLACE_CAPABILITY_VERSION
          : 1
    })
  )
);
export const CURRENT_MANAGED_SETTING_CAPABILITIES = Object.freeze(
  Object.values(MANAGED_SETTING_KEYS).map((key) => Object.freeze({ key, schemaVersion: 1 }))
);
export const CONTROL_OFFLINE_AFTER_MS = 60_000;

export const CONTROL_WEBSOCKET_CLOSE_CODES = {
  normal: 1000,
  invalidMessage: 4400,
  authenticationRequired: 4401,
  deviceRevoked: 4403,
  protocolVersionUnsupported: 4406,
  messageTooLarge: 4409,
  connectionReplaced: 4410,
  internalError: 4500
} as const;

export const DEVICE_CLIENT_MESSAGE_TYPES = {
  hello: 'device.hello',
  heartbeat: 'device.heartbeat',
  commandResult: 'command.result'
} as const;

export const DEVICE_SERVER_MESSAGE_TYPES = {
  helloAccepted: 'server.hello-accepted',
  heartbeatAccepted: 'server.heartbeat-accepted',
  commandResultAccepted: 'server.command-result-accepted',
  command: 'server.command',
  error: 'server.error'
} as const;

export const CONTROL_COMMAND_TYPES = {
  examConfigPrepare: 'exam-config.prepare',
  playbackActivate: 'playback.activate',
  playbackStop: 'playback.stop',
  broadcastShow: 'broadcast.show',
  broadcastDismiss: 'broadcast.dismiss',
  settingsApply: 'settings.apply'
} as const;

export const COMMAND_RESULT_STATUS = {
  acknowledged: 'acknowledged',
  succeeded: 'succeeded',
  failed: 'failed'
} as const;

export const CONTROL_PROTOCOL_ERROR_CODES = {
  invalidMessage: 'invalid_message',
  messageTooLarge: 'message_too_large',
  authenticationRequired: 'authentication_required',
  invalidCredential: 'invalid_credential',
  deviceRevoked: 'device_revoked',
  protocolVersionUnsupported: 'protocol_version_unsupported',
  commandExpired: 'command_expired',
  internalError: 'internal_error'
} as const;
export const CONTROL_PROTOCOL_PARSE_ERROR_CODES = {
  messageTooLarge: 'message_too_large',
  invalidJson: 'invalid_json',
  protocolVersionUnsupported: 'protocol_version_unsupported',
  invalidMessage: 'invalid_message'
} as const;

export const devicePlatformSchema = z.enum(DEVICE_PLATFORM_VALUES);
export const deviceArchitectureSchema = z.enum(DEVICE_ARCHITECTURE_VALUES);

export const deviceIdentitySchema = z
  .object({
    displayName: z.string().trim().min(1).max(120),
    platform: devicePlatformSchema,
    architecture: deviceArchitectureSchema,
    appVersion: z.string().trim().min(1).max(64),
    protocolVersion: z.literal(CONTROL_PROTOCOL_VERSION)
  })
  .strict();

export const enrollDeviceRequestSchema = deviceIdentitySchema
  .extend({
    enrollmentCode: z.string().trim().regex(DEVICE_ENROLLMENT_CODE_PATTERN)
  })
  .strict();

export const enrollDeviceResponseSchema = z
  .object({
    deviceId: z.uuid(),
    credential: z.string().min(43).max(256),
    websocketUrl: z.url(),
    protocolVersion: z.literal(CONTROL_PROTOCOL_VERSION)
  })
  .strict();
export const playerStateSchema = z
  .object({
    status: z.enum(PLAYER_STATUS_VALUES),
    deploymentId: z.uuid().optional(),
    examConfigVersionId: z.uuid().optional(),
    errorCode: z.string().trim().min(1).max(120).optional()
  })
  .strict();

export const deviceStateSnapshotSchema = z
  .object({
    player: playerStateSchema.optional(),
    timeSync: z
      .object({
        synchronized: z.boolean(),
        offsetMs: z.number().finite().optional()
      })
      .strict()
      .optional()
  })
  .strict();

export const controlCapabilitySchema = z
  .object({
    name: z.string().regex(/^[a-z][a-z0-9-]{0,63}$/),
    version: z.number().int().positive().max(1000)
  })
  .strict();

export const managedSettingCapabilitySchema = z
  .object({
    key: z.string().regex(/^[A-Za-z][A-Za-z0-9.]{0,119}$/),
    schemaVersion: z.number().int().positive().max(1000)
  })
  .strict();

export const deviceCapabilitiesSchema = z
  .object({
    commands: z.array(controlCapabilitySchema).max(100),
    managedSettings: z.array(managedSettingCapabilitySchema).max(100)
  })
  .strict()
  .superRefine((capabilities, context) => {
    const commandNames = capabilities.commands.map((capability) => capability.name);
    if (new Set(commandNames).size !== commandNames.length) {
      context.addIssue({
        code: 'custom',
        message: 'Command capabilities must be unique',
        path: ['commands']
      });
    }
    const settingKeys = capabilities.managedSettings.map((capability) => capability.key);
    if (new Set(settingKeys).size !== settingKeys.length) {
      context.addIssue({
        code: 'custom',
        message: 'Managed setting capabilities must be unique',
        path: ['managedSettings']
      });
    }
  });

export const deviceHelloSchema = z
  .object({
    type: z.literal(DEVICE_CLIENT_MESSAGE_TYPES.hello),
    requestId: z.uuid(),
    deviceId: z.uuid(),
    credential: z.string().min(43).max(256),
    identity: deviceIdentitySchema,
    state: deviceStateSnapshotSchema.optional(),
    capabilities: deviceCapabilitiesSchema.optional()
  })
  .strict();

export const deviceHeartbeatSchema = z
  .object({
    type: z.literal(DEVICE_CLIENT_MESSAGE_TYPES.heartbeat),
    requestId: z.uuid(),
    sentAt: z.iso.datetime({ offset: true }),
    state: deviceStateSnapshotSchema
  })
  .strict();

export const commandResultStatusSchema = z.enum([
  COMMAND_RESULT_STATUS.acknowledged,
  COMMAND_RESULT_STATUS.succeeded,
  COMMAND_RESULT_STATUS.failed
]);

export const commandResultSchema = z
  .object({
    type: z.literal(DEVICE_CLIENT_MESSAGE_TYPES.commandResult),
    requestId: z.uuid(),
    commandId: z.uuid(),
    status: commandResultStatusSchema,
    occurredAt: z.iso.datetime({ offset: true }),
    error: z
      .object({
        code: z.string().trim().min(1).max(120),
        message: z.string().trim().min(1).max(1000)
      })
      .strict()
      .optional(),
    state: deviceStateSnapshotSchema.optional()
  })
  .strict()
  .superRefine((result, context) => {
    if (result.status === COMMAND_RESULT_STATUS.failed && !result.error) {
      context.addIssue({
        code: 'custom',
        message: 'A failed command result requires an error',
        path: ['error']
      });
    }
    if (result.status !== COMMAND_RESULT_STATUS.failed && result.error) {
      context.addIssue({
        code: 'custom',
        message: 'Only a failed command result may include an error',
        path: ['error']
      });
    }
  });

export const deviceClientMessageSchema = z.discriminatedUnion('type', [
  deviceHelloSchema,
  deviceHeartbeatSchema,
  commandResultSchema
]);

export const examConfigArtifactSchema = z
  .object({
    url: z.url(),
    mediaType: z.literal(EXAM_CONFIG_ARTIFACT_MEDIA_TYPE),
    sizeBytes: z.number().int().positive().max(CONTROL_MAX_ARTIFACT_SIZE_BYTES),
    sha256: z.string().regex(/^[a-f0-9]{64}$/),
    expiresAt: z.iso.datetime({ offset: true })
  })
  .strict();

export const examConfigPreparePayloadSchema = z
  .object({
    deploymentId: z.uuid(),
    examConfigId: z.uuid(),
    examConfigVersionId: z.uuid(),
    artifact: examConfigArtifactSchema
  })
  .strict();

export const playbackActivatePayloadSchema = z
  .object({
    deploymentId: z.uuid(),
    examConfigVersionId: z.uuid(),
    activateAt: z.iso.datetime({ offset: true }).optional()
  })
  .strict();

export const playbackStopPayloadSchema = z
  .object({
    deploymentId: z.uuid(),
    reason: z.string().trim().max(500).optional()
  })
  .strict();

export const broadcastShowPayloadSchema = z
  .object({
    broadcastId: z.uuid(),
    title: z.string().trim().min(1).max(120),
    body: z.string().trim().min(1).max(2000),
    severity: z.enum(BROADCAST_SEVERITY_VALUES),
    expiresAt: z.iso.datetime({ offset: true })
  })
  .strict();

export const broadcastDismissPayloadSchema = z
  .object({
    broadcastId: z.uuid()
  })
  .strict();

export const deviceErrorContextValueSchema = z.union([
  z.string().max(1000),
  z.number().finite(),
  z.boolean(),
  z.null()
]);

export const deviceErrorContextSchema = z
  .record(z.string().min(1).max(100), deviceErrorContextValueSchema)
  .refine((context) => Object.keys(context).length <= 20, {
    message: 'Error context accepts at most 20 fields'
  });

export const deviceErrorReportSchema = z
  .object({
    severity: z.enum(DEVICE_ERROR_SEVERITY_VALUES),
    source: z.string().trim().min(1).max(120),
    code: z.string().trim().min(1).max(120).optional(),
    message: z.string().trim().min(1).max(4000),
    stack: z.string().max(20_000).optional(),
    context: deviceErrorContextSchema.default({}),
    occurredAt: z.iso.datetime({ offset: true })
  })
  .strict();

export const proctorCallRequestSchema = z
  .object({
    occurredAt: z.iso.datetime({ offset: true }),
    roomNumber: z.string().trim().min(1).max(20).optional(),
    message: z.string().trim().min(1).max(500).optional()
  })
  .strict();

const pluginPackageListSchema = z
  .array(z.string().trim().min(1).max(214))
  .max(100)
  .refine((names) => new Set(names).size === names.length, {
    message: 'Plugin package names must be unique'
  });

export const managedSettingSchema = z.discriminatedUnion('key', [
  z
    .object({
      key: z.literal(MANAGED_SETTING_KEYS.appearanceTheme),
      value: z.enum(APPEARANCE_THEME_VALUES)
    })
    .strict(),
  z
    .object({
      key: z.literal(MANAGED_SETTING_KEYS.playerUiScale),
      value: z.number().min(0.5).max(2)
    })
    .strict(),
  z
    .object({
      key: z.literal(MANAGED_SETTING_KEYS.playerUiDensity),
      value: z.enum(PLAYER_UI_DENSITY_VALUES)
    })
    .strict(),
  z
    .object({ key: z.literal(MANAGED_SETTING_KEYS.playerLargeClockEnabled), value: z.boolean() })
    .strict(),
  z
    .object({
      key: z.literal(MANAGED_SETTING_KEYS.playerLargeClockScale),
      value: z.number().min(0.5).max(1.8)
    })
    .strict(),
  z
    .object({ key: z.literal(MANAGED_SETTING_KEYS.playerExamInfoLargeFont), value: z.boolean() })
    .strict(),
  z
    .object({
      key: z.literal(MANAGED_SETTING_KEYS.playerPreventControlSessionExit),
      value: z.boolean()
    })
    .strict(),
  z
    .object({ key: z.literal(MANAGED_SETTING_KEYS.controlPreventUnbind), value: z.boolean() })
    .strict(),
  z
    .object({ key: z.literal(MANAGED_SETTING_KEYS.controlPreventQuit), value: z.boolean() })
    .strict(),
  z
    .object({ key: z.literal(MANAGED_SETTING_KEYS.pluginPreventInstall), value: z.boolean() })
    .strict(),
  z
    .object({
      key: z.literal(MANAGED_SETTING_KEYS.pluginInstallBlacklist),
      value: pluginPackageListSchema
    })
    .strict(),
  z
    .object({
      key: z.literal(MANAGED_SETTING_KEYS.pluginInstallAllowlist),
      value: pluginPackageListSchema
    })
    .strict(),
  z
    .object({
      key: z.literal(MANAGED_SETTING_KEYS.timeSyncNtpServer),
      value: z.string().trim().min(1).max(253)
    })
    .strict(),
  z.object({ key: z.literal(MANAGED_SETTING_KEYS.timeSyncAutoSync), value: z.boolean() }).strict(),
  z
    .object({
      key: z.literal(MANAGED_SETTING_KEYS.timeSyncIntervalMinutes),
      value: z.number().int().min(1).max(1440)
    })
    .strict()
]);

export const settingsApplyPayloadSchema = z
  .object({
    revision: z.uuid(),
    settings: z.array(managedSettingSchema).max(20),
    replace: z.literal(true).optional()
  })
  .strict()
  .superRefine((payload, context) => {
    if (payload.settings.length === 0 && payload.replace !== true) {
      context.addIssue({
        code: 'custom',
        message: 'An empty managed setting list requires replacement semantics',
        path: ['settings']
      });
    }
    const keys = payload.settings.map((setting) => setting.key);
    if (new Set(keys).size !== keys.length) {
      context.addIssue({
        code: 'custom',
        message: 'Managed setting keys must be unique',
        path: ['settings']
      });
    }
  });

export const examConfigPrepareCommandSchema = z
  .object({
    type: z.literal(CONTROL_COMMAND_TYPES.examConfigPrepare),
    payload: examConfigPreparePayloadSchema
  })
  .strict();

export const playbackActivateCommandSchema = z
  .object({
    type: z.literal(CONTROL_COMMAND_TYPES.playbackActivate),
    payload: playbackActivatePayloadSchema
  })
  .strict();

export const playbackStopCommandSchema = z
  .object({
    type: z.literal(CONTROL_COMMAND_TYPES.playbackStop),
    payload: playbackStopPayloadSchema
  })
  .strict();

export const broadcastShowCommandSchema = z
  .object({
    type: z.literal(CONTROL_COMMAND_TYPES.broadcastShow),
    payload: broadcastShowPayloadSchema
  })
  .strict();

export const broadcastDismissCommandSchema = z
  .object({
    type: z.literal(CONTROL_COMMAND_TYPES.broadcastDismiss),
    payload: broadcastDismissPayloadSchema
  })
  .strict();

export const settingsApplyCommandSchema = z
  .object({
    type: z.literal(CONTROL_COMMAND_TYPES.settingsApply),
    payload: settingsApplyPayloadSchema
  })
  .strict();

export const controlCommandSchema = z.discriminatedUnion('type', [
  examConfigPrepareCommandSchema,
  playbackActivateCommandSchema,
  playbackStopCommandSchema,
  broadcastShowCommandSchema,
  broadcastDismissCommandSchema,
  settingsApplyCommandSchema
]);

export const serverCommandMessageSchema = z
  .object({
    type: z.literal(DEVICE_SERVER_MESSAGE_TYPES.command),
    commandId: z.uuid(),
    issuedAt: z.iso.datetime({ offset: true }),
    expiresAt: z.iso.datetime({ offset: true }),
    command: controlCommandSchema
  })
  .strict()
  .superRefine((message, context) => {
    if (Date.parse(message.expiresAt) <= Date.parse(message.issuedAt)) {
      context.addIssue({
        code: 'custom',
        message: 'Command expiry must be later than its issue time',
        path: ['expiresAt']
      });
    }
    if (
      message.command.type === CONTROL_COMMAND_TYPES.broadcastShow &&
      Date.parse(message.command.payload.expiresAt) > Date.parse(message.expiresAt)
    ) {
      context.addIssue({
        code: 'custom',
        message: 'Broadcast expiry cannot outlive its command',
        path: ['command', 'payload', 'expiresAt']
      });
    }
  });

export const helloAcceptedMessageSchema = z
  .object({
    type: z.literal(DEVICE_SERVER_MESSAGE_TYPES.helloAccepted),
    requestId: z.uuid(),
    connectionId: z.uuid(),
    serverTime: z.iso.datetime({ offset: true }),
    heartbeatIntervalMs: z.literal(CONTROL_HEARTBEAT_INTERVAL_MS),
    maxMessageSizeBytes: z.literal(CONTROL_MAX_MESSAGE_SIZE_BYTES),
    protocolVersion: z.literal(CONTROL_PROTOCOL_VERSION),
    codec: z.literal(CONTROL_PROTOCOL_CODEC)
  })
  .strict();

export const heartbeatAcceptedMessageSchema = z
  .object({
    type: z.literal(DEVICE_SERVER_MESSAGE_TYPES.heartbeatAccepted),
    requestId: z.uuid(),
    serverTime: z.iso.datetime({ offset: true })
  })
  .strict();

export const commandResultAcceptedMessageSchema = z
  .object({
    type: z.literal(DEVICE_SERVER_MESSAGE_TYPES.commandResultAccepted),
    requestId: z.uuid(),
    commandId: z.uuid(),
    serverTime: z.iso.datetime({ offset: true })
  })
  .strict();

export const protocolErrorCodeSchema = z.enum([
  CONTROL_PROTOCOL_ERROR_CODES.invalidMessage,
  CONTROL_PROTOCOL_ERROR_CODES.messageTooLarge,
  CONTROL_PROTOCOL_ERROR_CODES.authenticationRequired,
  CONTROL_PROTOCOL_ERROR_CODES.invalidCredential,
  CONTROL_PROTOCOL_ERROR_CODES.deviceRevoked,
  CONTROL_PROTOCOL_ERROR_CODES.protocolVersionUnsupported,
  CONTROL_PROTOCOL_ERROR_CODES.commandExpired,
  CONTROL_PROTOCOL_ERROR_CODES.internalError
]);

export const protocolErrorMessageSchema = z
  .object({
    type: z.literal(DEVICE_SERVER_MESSAGE_TYPES.error),
    requestId: z.uuid().optional(),
    code: protocolErrorCodeSchema,
    message: z.string().trim().min(1).max(500),
    fatal: z.boolean()
  })
  .strict();

export const deviceServerMessageSchema = z.discriminatedUnion('type', [
  helloAcceptedMessageSchema,
  heartbeatAcceptedMessageSchema,
  commandResultAcceptedMessageSchema,
  serverCommandMessageSchema,
  protocolErrorMessageSchema
]);

export type ControlProtocolParseErrorCode =
  (typeof CONTROL_PROTOCOL_PARSE_ERROR_CODES)[keyof typeof CONTROL_PROTOCOL_PARSE_ERROR_CODES];

export class ControlProtocolParseError extends Error {
  constructor(
    readonly code: ControlProtocolParseErrorCode,
    message: string,
    readonly cause?: unknown
  ) {
    super(message);
    this.name = 'ControlProtocolParseError';
  }
}

export function utf8ByteLength(value: string): number {
  let bytes = 0;
  for (let index = 0; index < value.length; index += 1) {
    const codeUnit = value.charCodeAt(index);
    if (codeUnit <= 0x7f) bytes += 1;
    else if (codeUnit <= 0x7ff) bytes += 2;
    else if (codeUnit >= 0xd800 && codeUnit <= 0xdbff && index + 1 < value.length) {
      const next = value.charCodeAt(index + 1);
      if (next >= 0xdc00 && next <= 0xdfff) {
        bytes += 4;
        index += 1;
      } else bytes += 3;
    } else bytes += 3;
  }
  return bytes;
}

export function parseDeviceClientMessageText(text: string): DeviceClientMessage {
  if (utf8ByteLength(text) > CONTROL_MAX_MESSAGE_SIZE_BYTES) {
    throw new ControlProtocolParseError(
      CONTROL_PROTOCOL_PARSE_ERROR_CODES.messageTooLarge,
      'Control protocol message exceeds 64 KiB'
    );
  }

  let value: unknown;
  try {
    value = JSON.parse(text) as unknown;
  } catch (error) {
    throw new ControlProtocolParseError(
      CONTROL_PROTOCOL_PARSE_ERROR_CODES.invalidJson,
      'Control protocol message is not valid JSON',
      error
    );
  }

  if (
    typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    value.type === DEVICE_CLIENT_MESSAGE_TYPES.hello &&
    'identity' in value &&
    typeof value.identity === 'object' &&
    value.identity !== null &&
    'protocolVersion' in value.identity &&
    value.identity.protocolVersion !== CONTROL_PROTOCOL_VERSION
  ) {
    throw new ControlProtocolParseError(
      CONTROL_PROTOCOL_PARSE_ERROR_CODES.protocolVersionUnsupported,
      `Control protocol version ${String(value.identity.protocolVersion)} is not supported`
    );
  }

  const result = deviceClientMessageSchema.safeParse(value);
  if (!result.success) {
    throw new ControlProtocolParseError(
      CONTROL_PROTOCOL_PARSE_ERROR_CODES.invalidMessage,
      'Control protocol message does not match schema',
      result.error
    );
  }
  return result.data;
}

export function parseDeviceServerMessageText(text: string): DeviceServerMessage {
  if (utf8ByteLength(text) > CONTROL_MAX_MESSAGE_SIZE_BYTES) {
    throw new ControlProtocolParseError(
      CONTROL_PROTOCOL_PARSE_ERROR_CODES.messageTooLarge,
      'Control protocol message exceeds 64 KiB'
    );
  }

  let value: unknown;
  try {
    value = JSON.parse(text) as unknown;
  } catch (error) {
    throw new ControlProtocolParseError(
      CONTROL_PROTOCOL_PARSE_ERROR_CODES.invalidJson,
      'Control protocol message is not valid JSON',
      error
    );
  }

  const result = deviceServerMessageSchema.safeParse(value);
  if (!result.success) {
    throw new ControlProtocolParseError(
      CONTROL_PROTOCOL_PARSE_ERROR_CODES.invalidMessage,
      'Control protocol message does not match schema',
      result.error
    );
  }
  return result.data;
}

export function parsePreAuthenticationMessageText(text: string): DeviceHello {
  const message = parseDeviceClientMessageText(text);
  if (message.type !== DEVICE_CLIENT_MESSAGE_TYPES.hello) {
    throw new ControlProtocolParseError(
      CONTROL_PROTOCOL_PARSE_ERROR_CODES.invalidMessage,
      'device.hello is the only message allowed before authentication'
    );
  }
  return message;
}

export type DevicePlatform = z.infer<typeof devicePlatformSchema>;
export type DeviceArchitecture = z.infer<typeof deviceArchitectureSchema>;
export type DeviceIdentity = z.infer<typeof deviceIdentitySchema>;
export type EnrollDeviceRequest = z.infer<typeof enrollDeviceRequestSchema>;
export type EnrollDeviceResponse = z.infer<typeof enrollDeviceResponseSchema>;

export type DeviceStateSnapshot = z.infer<typeof deviceStateSnapshotSchema>;
export type DeviceCapabilities = z.infer<typeof deviceCapabilitiesSchema>;
export type DeviceHelloInput = Omit<z.input<typeof deviceHelloSchema>, 'type' | 'capabilities'> & {
  capabilities?: z.input<typeof deviceCapabilitiesSchema>;
};
export type DeviceHello = z.infer<typeof deviceHelloSchema>;
export type DeviceHeartbeat = z.infer<typeof deviceHeartbeatSchema>;
export type CommandResult = z.infer<typeof commandResultSchema>;
export type DeviceClientMessage = z.infer<typeof deviceClientMessageSchema>;
export type DeviceErrorContextValue = z.infer<typeof deviceErrorContextValueSchema>;
export type DeviceErrorContext = z.infer<typeof deviceErrorContextSchema>;
export type DeviceErrorReport = z.infer<typeof deviceErrorReportSchema>;
export type ProctorCallRequest = z.infer<typeof proctorCallRequestSchema>;
export type ManagedSetting = z.infer<typeof managedSettingSchema>;
export type ControlCommand = z.infer<typeof controlCommandSchema>;
export type ExamConfigPrepareCommand = z.infer<typeof examConfigPrepareCommandSchema>;
export type PlaybackActivateCommand = z.infer<typeof playbackActivateCommandSchema>;
export type PlaybackStopCommand = z.infer<typeof playbackStopCommandSchema>;
export type BroadcastShowCommand = z.infer<typeof broadcastShowCommandSchema>;
export type BroadcastDismissCommand = z.infer<typeof broadcastDismissCommandSchema>;
export type SettingsApplyCommand = z.infer<typeof settingsApplyCommandSchema>;
export type ServerCommandMessage = z.infer<typeof serverCommandMessageSchema>;
export type DeviceServerMessage = z.infer<typeof deviceServerMessageSchema>;

export type ProtocolErrorCode = z.infer<typeof protocolErrorCodeSchema>;
export type HelloAcceptedMessage = z.infer<typeof helloAcceptedMessageSchema>;
export type HeartbeatAcceptedMessage = z.infer<typeof heartbeatAcceptedMessageSchema>;
export type CommandResultAcceptedMessage = z.infer<typeof commandResultAcceptedMessageSchema>;
export type ProtocolErrorMessage = z.infer<typeof protocolErrorMessageSchema>;

export function createDeviceErrorReport(
  input: z.input<typeof deviceErrorReportSchema>
): DeviceErrorReport {
  return deviceErrorReportSchema.parse(input);
}

export function createProctorCallRequest(
  input: z.input<typeof proctorCallRequestSchema>
): ProctorCallRequest {
  return proctorCallRequestSchema.parse(input);
}

export function createEnrollDeviceRequest(
  input: z.input<typeof enrollDeviceRequestSchema>
): EnrollDeviceRequest {
  return enrollDeviceRequestSchema.parse(input);
}
export function createDeviceHelloMessage(input: DeviceHelloInput): DeviceHello {
  return deviceHelloSchema.parse({
    type: DEVICE_CLIENT_MESSAGE_TYPES.hello,
    ...input,
    capabilities: input.capabilities ?? {
      commands: CURRENT_CONTROL_CAPABILITIES,
      managedSettings: CURRENT_MANAGED_SETTING_CAPABILITIES
    }
  });
}

export function createDeviceHeartbeatMessage(
  input: Omit<z.input<typeof deviceHeartbeatSchema>, 'type'>
): DeviceHeartbeat {
  return deviceHeartbeatSchema.parse({ type: DEVICE_CLIENT_MESSAGE_TYPES.heartbeat, ...input });
}

export function createCommandResultMessage(
  input: Omit<z.input<typeof commandResultSchema>, 'type'>
): CommandResult {
  return commandResultSchema.parse({ type: DEVICE_CLIENT_MESSAGE_TYPES.commandResult, ...input });
}

export function createExamConfigPrepareCommand(
  payload: z.input<typeof examConfigPreparePayloadSchema>
): ExamConfigPrepareCommand {
  return examConfigPrepareCommandSchema.parse({
    type: CONTROL_COMMAND_TYPES.examConfigPrepare,
    payload
  });
}

export function createPlaybackActivateCommand(
  payload: z.input<typeof playbackActivatePayloadSchema>
): PlaybackActivateCommand {
  return playbackActivateCommandSchema.parse({
    type: CONTROL_COMMAND_TYPES.playbackActivate,
    payload
  });
}

export function createPlaybackStopCommand(
  payload: z.input<typeof playbackStopPayloadSchema>
): PlaybackStopCommand {
  return playbackStopCommandSchema.parse({ type: CONTROL_COMMAND_TYPES.playbackStop, payload });
}

export function createBroadcastShowCommand(
  payload: z.input<typeof broadcastShowPayloadSchema>
): BroadcastShowCommand {
  return broadcastShowCommandSchema.parse({ type: CONTROL_COMMAND_TYPES.broadcastShow, payload });
}

export function createBroadcastDismissCommand(
  payload: z.input<typeof broadcastDismissPayloadSchema>
): BroadcastDismissCommand {
  return broadcastDismissCommandSchema.parse({
    type: CONTROL_COMMAND_TYPES.broadcastDismiss,
    payload
  });
}

export function createSettingsApplyCommand(
  payload: z.input<typeof settingsApplyPayloadSchema>
): SettingsApplyCommand {
  return settingsApplyCommandSchema.parse({ type: CONTROL_COMMAND_TYPES.settingsApply, payload });
}

export function createServerCommandMessage(
  input: Omit<z.input<typeof serverCommandMessageSchema>, 'type'>
): ServerCommandMessage {
  return serverCommandMessageSchema.parse({ type: DEVICE_SERVER_MESSAGE_TYPES.command, ...input });
}

export function createHelloAcceptedMessage(
  input: Omit<z.input<typeof helloAcceptedMessageSchema>, 'type'>
): HelloAcceptedMessage {
  return helloAcceptedMessageSchema.parse({
    type: DEVICE_SERVER_MESSAGE_TYPES.helloAccepted,
    ...input
  });
}

export function createHeartbeatAcceptedMessage(
  input: Omit<z.input<typeof heartbeatAcceptedMessageSchema>, 'type'>
): HeartbeatAcceptedMessage {
  return heartbeatAcceptedMessageSchema.parse({
    type: DEVICE_SERVER_MESSAGE_TYPES.heartbeatAccepted,
    ...input
  });
}

export function createCommandResultAcceptedMessage(
  input: Omit<z.input<typeof commandResultAcceptedMessageSchema>, 'type'>
): CommandResultAcceptedMessage {
  return commandResultAcceptedMessageSchema.parse({
    type: DEVICE_SERVER_MESSAGE_TYPES.commandResultAccepted,
    ...input
  });
}

export function createProtocolErrorMessage(
  input: Omit<z.input<typeof protocolErrorMessageSchema>, 'type'>
): ProtocolErrorMessage {
  return protocolErrorMessageSchema.parse({ type: DEVICE_SERVER_MESSAGE_TYPES.error, ...input });
}
