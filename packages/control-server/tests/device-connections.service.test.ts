import { firstValueFrom } from 'rxjs';
import type { WebSocket } from 'ws';
import { describe, expect, it, vi } from 'vitest';
import { DeviceConnectionsService } from '../src/devices/device-connections.service.js';

const deviceId = '04ae0ed9-d420-4cf6-9529-50429817a304';

function socket(): WebSocket {
  return {
    readyState: 1,
    close: vi.fn(),
    send: vi.fn()
  } as unknown as WebSocket;
}

describe('DeviceConnectionsService connection events', () => {
  it('publishes online and offline transitions for the current connection', async () => {
    const service = new DeviceConnectionsService();
    const online = firstValueFrom(service.events());
    const connection = {
      connectionId: 'connection-1',
      deviceId,
      socket: socket(),
      connectedAt: new Date('2026-08-05T00:00:00Z')
    };

    service.register(connection);

    await expect(online).resolves.toEqual({
      type: 'device-connection',
      data: { deviceId, connectionStatus: 'online' }
    });

    const offline = firstValueFrom(service.events());
    service.unregister(deviceId, connection.connectionId);

    await expect(offline).resolves.toEqual({
      type: 'device-connection',
      data: { deviceId, connectionStatus: 'offline' }
    });
  });

  it('does not publish offline when a replaced connection closes', async () => {
    const service = new DeviceConnectionsService();
    const first = {
      connectionId: 'connection-1',
      deviceId,
      socket: socket(),
      connectedAt: new Date('2026-08-05T00:00:00Z')
    };
    const second = { ...first, connectionId: 'connection-2', socket: socket() };
    const events: unknown[] = [];
    const subscription = service.events().subscribe((event) => events.push(event));

    service.register(first);
    service.register(second);
    service.unregister(deviceId, first.connectionId);

    expect(events).toEqual([
      { type: 'device-connection', data: { deviceId, connectionStatus: 'online' } },
      { type: 'device-connection', data: { deviceId, connectionStatus: 'online' } }
    ]);
    subscription.unsubscribe();
  });
});
