import type { ManagedSetting } from '@dsz-examaware/control-protocol';
import { apiRequest } from '../http';
import type { DevicePolicyView, EffectivePolicyView } from './types';

const POLICIES_PATH = '/api/v1/device-policies';

export const policiesApi = {
  list() {
    return apiRequest<DevicePolicyView[]>(POLICIES_PATH);
  },
  get(id: string) {
    return apiRequest<DevicePolicyView>(`${POLICIES_PATH}/${encodeURIComponent(id)}`);
  },
  create(input: {
    name: string;
    description: string;
    priority: number;
    enabled: boolean;
    settings: ManagedSetting[];
  }) {
    return apiRequest<DevicePolicyView>(POLICIES_PATH, {
      method: 'POST',
      body: JSON.stringify(input)
    });
  },
  update(
    id: string,
    patch: Partial<
      Pick<DevicePolicyView, 'name' | 'description' | 'priority' | 'enabled' | 'settings'>
    >
  ) {
    return apiRequest<DevicePolicyView>(`${POLICIES_PATH}/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify(patch)
    });
  },
  setTargets(id: string, deviceIds: string[], partitionNodeIds: string[]) {
    return apiRequest<DevicePolicyView>(`${POLICIES_PATH}/${encodeURIComponent(id)}/targets`, {
      method: 'PUT',
      body: JSON.stringify({ deviceIds, partitionNodeIds })
    });
  },
  effectiveForDevice(deviceId: string) {
    return apiRequest<{ policies: EffectivePolicyView[]; settings: ManagedSetting[] }>(
      `${POLICIES_PATH}/effective/${encodeURIComponent(deviceId)}`
    );
  },
  remove(id: string) {
    return apiRequest<void>(`${POLICIES_PATH}/${encodeURIComponent(id)}`, { method: 'DELETE' });
  }
};
