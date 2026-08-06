import { describe, expect, it } from 'vitest';
import {
  CONTROL_MAX_MESSAGE_SIZE_BYTES,
  CONTROL_PROTOCOL_CODEC,
  CONTROL_PROTOCOL_VERSION,
  CONTROL_WEBSOCKET_CLOSE_CODES,
  CURRENT_CONTROL_CAPABILITIES,
  CURRENT_MANAGED_SETTING_CAPABILITIES,
  MANAGED_SETTING_KEYS,
  DEVICE_ERROR_SEVERITY,
  createDeviceErrorReport,
  createProctorCallRequest,
  createDeviceHelloMessage,
  ControlProtocolParseError,
  commandResultSchema,
  deviceClientMessageSchema,
  deviceHelloSchema,
  enrollDeviceRequestSchema,
  helloAcceptedMessageSchema,
  parseDeviceClientMessageText,
  parseDeviceServerMessageText,
  parsePreAuthenticationMessageText,
  serverCommandMessageSchema,
  settingsApplyPayloadSchema,
  utf8ByteLength
} from '../src/index.js';

const requestId = '30a6d657-c2b2-4d0a-896b-83b1e19cc751';
const deviceId = 'b3df3de8-2da0-4a62-8c4f-2ac4570946a4';
const commandId = '3e4f6856-c8cf-4798-aab0-1bb3717173d6';
const broadcastId = 'f461fbd6-794f-4db1-b113-460af55fcd14';

function hello() {
  return {
    type: 'device.hello' as const,
    requestId,
    deviceId,
    credential: 'a'.repeat(48),
    identity: {
      displayName: 'Room 101',
      platform: 'win32' as const,
      architecture: 'x64' as const,
      appVersion: '2.0.0',
      protocolVersion: CONTROL_PROTOCOL_VERSION
    }
  };
}

describe('control protocol schemas', () => {
  it('accepts Windows and OpenHarmony enrollment identities', () => {
    expect(
      enrollDeviceRequestSchema.parse({
        enrollmentCode: 'EA2-0123456789abcdef',
        displayName: 'Room 101',
        platform: 'win32',
        architecture: 'x64',
        appVersion: '2.0.0',
        protocolVersion: CONTROL_PROTOCOL_VERSION
      })
    ).toMatchObject({ displayName: 'Room 101' });
    expect(
      enrollDeviceRequestSchema.parse({
        enrollmentCode: 'EA2-0123456789abcdef',
        displayName: 'OpenHarmony classroom display',
        platform: 'openharmony',
        architecture: 'arm64',
        appVersion: '2.0.0',
        protocolVersion: CONTROL_PROTOCOL_VERSION
      })
    ).toMatchObject({ platform: 'openharmony', architecture: 'arm64' });
  });

  it('validates bounded proctor calls from enrolled devices', () => {
    expect(
      createProctorCallRequest({
        occurredAt: '2026-08-05T10:00:00.000Z',
        roomNumber: 'A-101',
        message: '需要巡考人员到场'
      })
    ).toEqual({
      occurredAt: '2026-08-05T10:00:00.000Z',
      roomNumber: 'A-101',
      message: '需要巡考人员到场'
    });
    expect(() =>
      createProctorCallRequest({
        occurredAt: '2026-08-05T10:00:00.000Z',
        message: 'x'.repeat(501)
      })
    ).toThrow();
  });

  it('rejects unsupported versions and unknown fields', () => {
    expect(() =>
      deviceClientMessageSchema.parse({
        ...hello(),
        identity: { ...hello().identity, protocolVersion: 2 }
      })
    ).toThrow();
    expect(() => deviceClientMessageSchema.parse({ ...hello(), unexpected: true })).toThrow();
  });

  it('allows only device.hello before authentication', () => {
    expect(parsePreAuthenticationMessageText(JSON.stringify(hello()))).toMatchObject({ deviceId });
    expect(() =>
      parsePreAuthenticationMessageText(
        JSON.stringify({
          type: 'device.heartbeat',
          requestId,
          sentAt: '2026-08-04T09:00:00.000Z',
          state: {}
        })
      )
    ).toThrow('device.hello is the only message allowed before authentication');
  });

  it('enforces UTF-8 message size before JSON parsing', () => {
    expect(utf8ByteLength('知试')).toBe(6);
    expect(() =>
      parseDeviceClientMessageText(`"${'a'.repeat(CONTROL_MAX_MESSAGE_SIZE_BYTES)}"`)
    ).toThrow(ControlProtocolParseError);
    try {
      parseDeviceClientMessageText(`"${'a'.repeat(CONTROL_MAX_MESSAGE_SIZE_BYTES)}"`);
    } catch (error) {
      expect((error as ControlProtocolParseError).code).toBe('message_too_large');
    }
  });

  it('runtime-validates server messages before client dispatch', () => {
    expect(
      parseDeviceServerMessageText(
        JSON.stringify({
          type: 'server.heartbeat-accepted',
          requestId,
          serverTime: '2026-08-04T09:00:00.000Z'
        })
      )
    ).toMatchObject({ type: 'server.heartbeat-accepted', requestId });
    expect(() =>
      parseDeviceServerMessageText(JSON.stringify({ type: 'server.command', commandId }))
    ).toThrow(ControlProtocolParseError);
  });

  it('requires command expiry and an HTTPS artifact contract instead of inline content', () => {
    const parsed = serverCommandMessageSchema.parse({
      type: 'server.command',
      commandId,
      issuedAt: '2026-08-04T09:00:00.000Z',
      expiresAt: '2026-08-04T09:05:00.000Z',
      command: {
        type: 'exam-config.prepare',
        payload: {
          deploymentId: '43408313-512f-4e86-a91b-0a5f58b7ee3e',
          examConfigId: 'e0eaa953-e957-4d71-807a-c45ae14d1e0e',
          examConfigVersionId: 'e08b889e-0462-4d84-a484-9f9d437b1132',
          artifact: {
            url: 'https://control.example.edu/api/v1/artifacts/e08b889e-0462-4d84-a484-9f9d437b1132',
            mediaType: 'application/vnd.examaware.exam-config+json',
            sizeBytes: 4096,
            sha256: 'a'.repeat(64),
            expiresAt: '2026-08-04T09:04:00.000Z'
          }
        }
      }
    });

    expect(parsed.command.type).toBe('exam-config.prepare');
    expect(() =>
      serverCommandMessageSchema.parse({
        ...parsed,
        command: { ...parsed.command, payload: { ...parsed.command.payload, content: {} } }
      })
    ).toThrow();
  });

  it('rejects inverted command and broadcast expiry windows', () => {
    const message = {
      type: 'server.command' as const,
      commandId,
      issuedAt: '2026-08-04T09:05:00.000Z',
      expiresAt: '2026-08-04T09:00:00.000Z',
      command: {
        type: 'broadcast.show' as const,
        payload: {
          broadcastId,
          title: '考务提醒',
          body: '请保持安静',
          severity: 'warning' as const,
          expiresAt: '2026-08-04T09:06:00.000Z'
        }
      }
    };
    expect(() => serverCommandMessageSchema.parse(message)).toThrow();
    expect(() =>
      serverCommandMessageSchema.parse({
        ...message,
        issuedAt: '2026-08-04T09:00:00.000Z',
        expiresAt: '2026-08-04T09:05:00.000Z'
      })
    ).toThrow('Broadcast expiry cannot outlive its command');
  });

  it('maps command failures to structured terminal errors', () => {
    expect(() =>
      commandResultSchema.parse({
        type: 'command.result',
        requestId,
        commandId,
        status: 'failed',
        occurredAt: '2026-08-04T09:01:00.000Z'
      })
    ).toThrow('A failed command result requires an error');
    expect(
      commandResultSchema.parse({
        type: 'command.result',
        requestId,
        commandId,
        status: 'failed',
        occurredAt: '2026-08-04T09:01:00.000Z',
        error: { code: 'artifact_hash_mismatch', message: 'Downloaded content hash did not match' }
      }).status
    ).toBe('failed');
  });

  it('bounds structured device error context to primitive values', () => {
    expect(
      createDeviceErrorReport({
        severity: DEVICE_ERROR_SEVERITY.error,
        source: 'control-agent',
        message: 'Artifact download failed',
        context: { attempt: 2, cached: false },
        occurredAt: '2026-08-04T09:01:00.000Z'
      }).context
    ).toEqual({ attempt: 2, cached: false });
    expect(() =>
      createDeviceErrorReport({
        severity: DEVICE_ERROR_SEVERITY.error,
        source: 'control-agent',
        message: 'Invalid context',
        context: Object.fromEntries(
          Array.from({ length: 21 }, (_, index) => [`field-${index}`, index])
        ),
        occurredAt: '2026-08-04T09:01:00.000Z'
      })
    ).toThrow('Error context accepts at most 20 fields');
  });

  it('defaults new clients to the shared capability registry while accepting legacy hello', () => {
    expect(deviceHelloSchema.parse(hello()).capabilities).toBeUndefined();
    const current = createDeviceHelloMessage({
      requestId,
      deviceId,
      credential: 'a'.repeat(48),
      identity: hello().identity
    });
    expect(current.capabilities?.commands).toEqual(CURRENT_CONTROL_CAPABILITIES);
    expect(current.capabilities?.managedSettings).toEqual(CURRENT_MANAGED_SETTING_CAPABILITIES);
    expect(
      current.capabilities?.commands.find((capability) => capability.name === 'managed-settings')
        ?.version
    ).toBe(2);
    expect(() =>
      deviceHelloSchema.parse({
        ...hello(),
        capabilities: {
          commands: [
            { name: 'playback', version: 1 },
            { name: 'playback', version: 2 }
          ],
          managedSettings: []
        }
      })
    ).toThrow('Command capabilities must be unique');
  });

  it('validates the managed control-session exit restriction', () => {
    const revision = '908122a7-7ec1-49d1-aacf-4a99bb3e928d';
    expect(
      settingsApplyPayloadSchema.parse({
        revision,
        settings: [{ key: MANAGED_SETTING_KEYS.playerPreventControlSessionExit, value: true }]
      }).settings
    ).toEqual([{ key: 'player.preventControlSessionExit', value: true }]);
    expect(() =>
      settingsApplyPayloadSchema.parse({
        revision,
        settings: [{ key: MANAGED_SETTING_KEYS.playerPreventControlSessionExit, value: 'true' }]
      })
    ).toThrow();
  });

  it('accepts an empty replacement snapshot but rejects an empty merge', () => {
    const revision = '908122a7-7ec1-49d1-aacf-4a99bb3e928d';

    expect(settingsApplyPayloadSchema.parse({ revision, settings: [], replace: true })).toEqual({
      revision,
      settings: [],
      replace: true
    });
    expect(() => settingsApplyPayloadSchema.parse({ revision, settings: [] })).toThrow(
      'An empty managed setting list requires replacement semantics'
    );
  });

  it('validates managed unbind and quit restrictions', () => {
    const revision = '908122a7-7ec1-49d1-aacf-4a99bb3e928d';
    for (const key of [
      MANAGED_SETTING_KEYS.controlPreventUnbind,
      MANAGED_SETTING_KEYS.controlPreventQuit
    ]) {
      expect(
        settingsApplyPayloadSchema.parse({ revision, settings: [{ key, value: true }] }).settings
      ).toEqual([{ key, value: true }]);
      expect(() =>
        settingsApplyPayloadSchema.parse({ revision, settings: [{ key, value: 'true' }] })
      ).toThrow();
    }
  });

  it('validates managed plugin installation policies', () => {
    const revision = '908122a7-7ec1-49d1-aacf-4a99bb3e928d';
    const settings = [
      { key: MANAGED_SETTING_KEYS.pluginPreventInstall, value: true },
      { key: MANAGED_SETTING_KEYS.pluginInstallBlacklist, value: ['@school/blocked-plugin'] },
      { key: MANAGED_SETTING_KEYS.pluginInstallAllowlist, value: ['@school/allowed-plugin'] }
    ];

    expect(settingsApplyPayloadSchema.parse({ revision, settings }).settings).toEqual(settings);
    expect(() =>
      settingsApplyPayloadSchema.parse({
        revision,
        settings: [{ key: MANAGED_SETTING_KEYS.pluginInstallBlacklist, value: ['same', 'same'] }]
      })
    ).toThrow('Plugin package names must be unique');
    expect(() =>
      settingsApplyPayloadSchema.parse({
        revision,
        settings: [{ key: MANAGED_SETTING_KEYS.pluginInstallAllowlist, value: 'plugin' }]
      })
    ).toThrow();
  });

  it('advertises fixed JSON codec, message size and close-code semantics', () => {
    expect(
      helloAcceptedMessageSchema.parse({
        type: 'server.hello-accepted',
        requestId,
        connectionId: 'bbdd2d49-063f-48ee-918d-aa672477d2ca',
        serverTime: '2026-08-04T09:00:00.000Z',
        heartbeatIntervalMs: 20_000,
        maxMessageSizeBytes: CONTROL_MAX_MESSAGE_SIZE_BYTES,
        protocolVersion: CONTROL_PROTOCOL_VERSION,
        codec: CONTROL_PROTOCOL_CODEC
      }).codec
    ).toBe('json');
    expect(CONTROL_WEBSOCKET_CLOSE_CODES.protocolVersionUnsupported).toBe(4406);
  });
});
