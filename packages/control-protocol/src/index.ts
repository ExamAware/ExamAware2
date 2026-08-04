import { z } from 'zod';

export const CONTROL_PROTOCOL_VERSION = 1 as const;
export const MIN_SUPPORTED_CONTROL_PROTOCOL_VERSION = 1 as const;
export const CONTROL_PROTOCOL_CODEC = 'json' as const;
export const CONTROL_WEBSOCKET_PATH = '/device/v1/connect' as const;
export const CONTROL_MAX_MESSAGE_SIZE_BYTES = 64 * 1024;
export const CONTROL_MAX_ARTIFACT_SIZE_BYTES = 50 * 1024 * 1024;
export const CONTROL_HEARTBEAT_INTERVAL_MS = 20_000;
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

export const devicePlatformSchema = z.enum(['win32', 'darwin', 'linux', 'openharmony']);
export const deviceArchitectureSchema = z.enum(['x64', 'arm64']);

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
    enrollmentCode: z
      .string()
      .trim()
      .regex(/^EA2-[A-Za-z0-9_-]{16,128}$/)
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
    status: z.enum(['idle', 'preparing', 'ready', 'playing', 'error']),
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

export const deviceHelloSchema = z
  .object({
    type: z.literal(DEVICE_CLIENT_MESSAGE_TYPES.hello),
    requestId: z.uuid(),
    deviceId: z.uuid(),
    credential: z.string().min(43).max(256),
    identity: deviceIdentitySchema,
    state: deviceStateSnapshotSchema.optional()
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
    if (result.status === 'failed' && !result.error) {
      context.addIssue({
        code: 'custom',
        message: 'A failed command result requires an error',
        path: ['error']
      });
    }
    if (result.status !== 'failed' && result.error) {
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
    mediaType: z.literal('application/vnd.examaware.exam-config+json'),
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
    severity: z.enum(['info', 'warning', 'critical']),
    expiresAt: z.iso.datetime({ offset: true })
  })
  .strict();

export const broadcastDismissPayloadSchema = z
  .object({
    broadcastId: z.uuid()
  })
  .strict();

export const managedSettingSchema = z.discriminatedUnion('key', [
  z
    .object({ key: z.literal('appearance.theme'), value: z.enum(['light', 'dark', 'auto']) })
    .strict(),
  z.object({ key: z.literal('player.uiScale'), value: z.number().min(0.5).max(2) }).strict(),
  z
    .object({
      key: z.literal('player.uiDensity'),
      value: z.enum(['comfortable', 'cozy', 'compact'])
    })
    .strict(),
  z.object({ key: z.literal('player.largeClockEnabled'), value: z.boolean() }).strict(),
  z
    .object({ key: z.literal('player.largeClockScale'), value: z.number().min(0.5).max(1.8) })
    .strict(),
  z.object({ key: z.literal('player.examInfoLargeFont'), value: z.boolean() }).strict(),
  z
    .object({ key: z.literal('timeSync.ntpServer'), value: z.string().trim().min(1).max(253) })
    .strict(),
  z.object({ key: z.literal('timeSync.autoSync'), value: z.boolean() }).strict(),
  z
    .object({
      key: z.literal('timeSync.syncIntervalMinutes'),
      value: z.number().int().min(1).max(1440)
    })
    .strict()
]);

export const settingsApplyPayloadSchema = z
  .object({
    revision: z.uuid(),
    settings: z.array(managedSettingSchema).min(1).max(20)
  })
  .strict()
  .superRefine((payload, context) => {
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
      message.command.type === 'broadcast.show' &&
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
  | 'message_too_large'
  | 'invalid_json'
  | 'protocol_version_unsupported'
  | 'invalid_message';

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
      'message_too_large',
      'Control protocol message exceeds 64 KiB'
    );
  }

  let value: unknown;
  try {
    value = JSON.parse(text) as unknown;
  } catch (error) {
    throw new ControlProtocolParseError(
      'invalid_json',
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
      'protocol_version_unsupported',
      `Control protocol version ${String(value.identity.protocolVersion)} is not supported`
    );
  }

  const result = deviceClientMessageSchema.safeParse(value);
  if (!result.success) {
    throw new ControlProtocolParseError(
      'invalid_message',
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
      'invalid_message',
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
export type DeviceHello = z.infer<typeof deviceHelloSchema>;
export type DeviceClientMessage = z.infer<typeof deviceClientMessageSchema>;
export type CommandResult = z.infer<typeof commandResultSchema>;
export type ManagedSetting = z.infer<typeof managedSettingSchema>;
export type ControlCommand = z.infer<typeof controlCommandSchema>;
export type ExamConfigPrepareCommand = Extract<ControlCommand, { type: 'exam-config.prepare' }>;
export type PlaybackActivateCommand = Extract<ControlCommand, { type: 'playback.activate' }>;
export type PlaybackStopCommand = Extract<ControlCommand, { type: 'playback.stop' }>;
export type BroadcastShowCommand = Extract<ControlCommand, { type: 'broadcast.show' }>;
export type BroadcastDismissCommand = Extract<ControlCommand, { type: 'broadcast.dismiss' }>;
export type SettingsApplyCommand = Extract<ControlCommand, { type: 'settings.apply' }>;
export type ServerCommandMessage = z.infer<typeof serverCommandMessageSchema>;
export type DeviceServerMessage = z.infer<typeof deviceServerMessageSchema>;

export type ProtocolErrorCode = z.infer<typeof protocolErrorCodeSchema>;
export type HelloAcceptedMessage = z.infer<typeof helloAcceptedMessageSchema>;
export type HeartbeatAcceptedMessage = z.infer<typeof heartbeatAcceptedMessageSchema>;
export type CommandResultAcceptedMessage = z.infer<typeof commandResultAcceptedMessageSchema>;
export type ProtocolErrorMessage = z.infer<typeof protocolErrorMessageSchema>;

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
