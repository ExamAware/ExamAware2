import { apiRequest } from '../http';
import type {
  CreateEnrollmentCodeInput,
  CreatedEnrollmentCode,
  DeviceConnectionStatus,
  DeviceView,
  EnrollmentCodeView,
  PageResponse,
  RotatedDeviceCredential
} from './types';

const DEVICES_PATH = '/api/v1/devices';
const ENROLLMENT_CODES_PATH = '/api/v1/device-enrollment-codes';
const DEVICE_CONNECTION_EVENTS_PATH = `${DEVICES_PATH}/connection-events`;

export interface DeviceConnectionStatusEvent {
  deviceId: string;
  connectionStatus: Extract<DeviceConnectionStatus, 'online' | 'offline'>;
}

export function applyDeviceConnectionStatus(
  devices: DeviceView[],
  event: DeviceConnectionStatusEvent
): boolean {
  const device = devices.find((item) => item.id === event.deviceId);
  if (!device || device.lifecycleStatus !== 'active') return false;
  device.connectionStatus = event.connectionStatus;
  return true;
}

export const devicesApi = {
  list(page = 1, pageSize = 20, partitionId?: string) {
    const query = new URLSearchParams({ page: String(page), pageSize: String(pageSize) });
    if (partitionId) query.set('partitionId', partitionId);
    return apiRequest<PageResponse<DeviceView>>(`${DEVICES_PATH}?${query}`);
  },
  get(id: string) {
    return apiRequest<DeviceView>(`${DEVICES_PATH}/${encodeURIComponent(id)}`);
  },
  resolveTargets(deviceIds: string[], partitionNodeIds: string[]) {
    return apiRequest<DeviceView[]>(`${DEVICES_PATH}/resolve-targets`, {
      method: 'POST',
      body: JSON.stringify({ deviceIds, partitionNodeIds })
    });
  },
  listEnrollmentCodes() {
    return apiRequest<EnrollmentCodeView[]>(ENROLLMENT_CODES_PATH);
  },
  createEnrollmentCode(input: CreateEnrollmentCodeInput) {
    return apiRequest<CreatedEnrollmentCode>(ENROLLMENT_CODES_PATH, {
      method: 'POST',
      body: JSON.stringify(input)
    });
  },
  revokeEnrollmentCode(id: string) {
    return apiRequest<EnrollmentCodeView>(
      `${ENROLLMENT_CODES_PATH}/${encodeURIComponent(id)}/revoke`,
      { method: 'POST' }
    );
  },
  rotateCredential(id: string) {
    return apiRequest<RotatedDeviceCredential>(
      `${DEVICES_PATH}/${encodeURIComponent(id)}/credential/rotate`,
      { method: 'POST' }
    );
  },
  revoke(id: string) {
    return apiRequest<DeviceView>(`${DEVICES_PATH}/${encodeURIComponent(id)}/revoke`, {
      method: 'POST'
    });
  },
  remove(id: string) {
    return apiRequest<void>(`${DEVICES_PATH}/${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });
  },
  setPartitions(id: string, nodeIds: string[]) {
    return apiRequest<DeviceView>(`${DEVICES_PATH}/${encodeURIComponent(id)}/partitions`, {
      method: 'PUT',
      body: JSON.stringify({ nodeIds })
    });
  },
  subscribeConnectionEvents(listener: (event: DeviceConnectionStatusEvent) => void) {
    const eventSource = new EventSource(DEVICE_CONNECTION_EVENTS_PATH, { withCredentials: true });
    eventSource.addEventListener('device-connection', (event) => {
      try {
        const value = JSON.parse(
          (event as MessageEvent<string>).data
        ) as Partial<DeviceConnectionStatusEvent>;
        if (
          typeof value.deviceId === 'string' &&
          (value.connectionStatus === 'online' || value.connectionStatus === 'offline')
        ) {
          listener(value as DeviceConnectionStatusEvent);
        }
      } catch {
        // Ignore malformed events; the next REST load restores the authoritative status.
      }
    });
    return () => eventSource.close();
  }
};
