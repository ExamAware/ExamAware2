import { Injectable } from '@nestjs/common';
import type { DeviceServerMessage, ServerCommandMessage } from '@dsz-examaware/control-protocol';
import type { WebSocket } from 'ws';

export interface DeviceConnection {
  connectionId: string;
  deviceId: string;
  socket: WebSocket;
  connectedAt: Date;
}

@Injectable()
export class DeviceConnectionsService {
  private readonly connections = new Map<string, DeviceConnection>();

  register(connection: DeviceConnection): DeviceConnection | undefined {
    const previous = this.connections.get(connection.deviceId);
    this.connections.set(connection.deviceId, connection);
    return previous;
  }

  unregister(deviceId: string, connectionId: string): void {
    if (this.connections.get(deviceId)?.connectionId === connectionId) {
      this.connections.delete(deviceId);
    }
  }
  disconnect(deviceId: string, closeCode: number, reason: string): boolean {
    const connection = this.connections.get(deviceId);
    if (!connection) return false;
    this.connections.delete(deviceId);
    if (connection.socket.readyState === 1) connection.socket.close(closeCode, reason);
    return true;
  }

  isOnline(deviceId: string): boolean {
    return this.connections.get(deviceId)?.socket.readyState === 1;
  }

  send(deviceId: string, message: DeviceServerMessage): boolean {
    const connection = this.connections.get(deviceId);
    if (!connection || connection.socket.readyState !== 1) return false;
    connection.socket.send(JSON.stringify(message));
    return true;
  }

  sendCommand(deviceId: string, command: ServerCommandMessage): boolean {
    return this.send(deviceId, command);
  }

  connectedDeviceIds(): string[] {
    return [...this.connections.entries()]
      .filter(([, connection]) => connection.socket.readyState === 1)
      .map(([deviceId]) => deviceId);
  }
}
