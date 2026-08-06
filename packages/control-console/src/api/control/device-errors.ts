import type { DeviceErrorReport } from '@dsz-examaware/control-protocol';
import { apiRequest } from '../http';
import type { DeviceErrorView, PageResponse } from './types';

const DEVICE_ERRORS_PATH = '/api/v1/device-errors';

export interface DeviceErrorFilters {
  page?: number;
  pageSize?: number;
  deviceId?: string;
  severity?: DeviceErrorReport['severity'];
}

export const deviceErrorsApi = {
  list(filters: DeviceErrorFilters = {}) {
    const query = new URLSearchParams({
      page: String(filters.page ?? 1),
      pageSize: String(filters.pageSize ?? 20)
    });
    if (filters.deviceId) query.set('deviceId', filters.deviceId);
    if (filters.severity) query.set('severity', filters.severity);
    return apiRequest<PageResponse<DeviceErrorView>>(`${DEVICE_ERRORS_PATH}?${query}`);
  }
};
