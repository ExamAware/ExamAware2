import { describe, expect, it } from 'vitest';
import {
  CONTROL_MAX_MESSAGE_SIZE_BYTES,
  CONTROL_PROTOCOL_CODEC,
  CONTROL_PROTOCOL_VERSION,
  CONTROL_WEBSOCKET_CLOSE_CODES,
  ControlProtocolParseError,
  commandResultSchema,
  deviceClientMessageSchema,
  enrollDeviceRequestSchema,
  helloAcceptedMessageSchema,
  parseDeviceClientMessageText,
  parsePreAuthenticationMessageText,
  serverCommandMessageSchema,
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
