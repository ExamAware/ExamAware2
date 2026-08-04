import { apiRequest } from '../http';
import type {
  ApplyManagedSettingsInput,
  ControlCommandView,
  PageResponse,
  PrepareExamDeploymentInput,
  ShowBroadcastInput
} from './types';

const COMMANDS_PATH = '/api/v1/control-commands';
const DEPLOYMENTS_PATH = '/api/v1/exam-deployments';
const BROADCASTS_PATH = '/api/v1/broadcasts';
const SETTINGS_PATH = '/api/v1/managed-settings/commands';

export const operationsApi = {
  listCommands(page = 1, pageSize = 20) {
    const query = new URLSearchParams({ page: String(page), pageSize: String(pageSize) });
    return apiRequest<PageResponse<ControlCommandView>>(`${COMMANDS_PATH}?${query}`);
  },
  getCommand(id: string) {
    return apiRequest<ControlCommandView>(`${COMMANDS_PATH}/${encodeURIComponent(id)}`);
  },
  prepareExam(input: PrepareExamDeploymentInput) {
    return apiRequest<ControlCommandView>(DEPLOYMENTS_PATH, {
      method: 'POST',
      body: JSON.stringify(input)
    });
  },
  activateExam(id: string, expiresInSeconds = 300, activateAt?: string) {
    return apiRequest<ControlCommandView>(
      `${DEPLOYMENTS_PATH}/${encodeURIComponent(id)}/activate`,
      {
        method: 'POST',
        body: JSON.stringify({ expiresInSeconds, ...(activateAt ? { activateAt } : {}) })
      }
    );
  },
  stopExam(id: string, expiresInSeconds = 300, reason?: string) {
    return apiRequest<ControlCommandView>(`${DEPLOYMENTS_PATH}/${encodeURIComponent(id)}/stop`, {
      method: 'POST',
      body: JSON.stringify({ expiresInSeconds, ...(reason ? { reason } : {}) })
    });
  },
  showBroadcast(input: ShowBroadcastInput) {
    return apiRequest<ControlCommandView>(BROADCASTS_PATH, {
      method: 'POST',
      body: JSON.stringify(input)
    });
  },
  applySettings(input: ApplyManagedSettingsInput) {
    return apiRequest<ControlCommandView>(SETTINGS_PATH, {
      method: 'POST',
      body: JSON.stringify(input)
    });
  }
};
