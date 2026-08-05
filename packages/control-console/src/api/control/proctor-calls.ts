import { apiRequest } from '../http';
import type { PageResponse, ProctorCallView } from './types';

export const PROCTOR_CALL_EVENTS_PATH = '/api/v1/proctor-calls/events';
const PROCTOR_CALLS_PATH = '/api/v1/proctor-calls';

export const proctorCallsApi = {
  listPending(page = 1, pageSize = 100) {
    const query = new URLSearchParams({ page: String(page), pageSize: String(pageSize) });
    return apiRequest<PageResponse<ProctorCallView>>(`${PROCTOR_CALLS_PATH}?${query}`);
  },
  acknowledge(id: string) {
    return apiRequest<ProctorCallView>(
      `${PROCTOR_CALLS_PATH}/${encodeURIComponent(id)}/acknowledge`,
      { method: 'POST' }
    );
  }
};
