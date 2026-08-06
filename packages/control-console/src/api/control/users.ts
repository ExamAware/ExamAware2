import { apiRequest } from '../http';
import type {
  BatchUsersResult,
  CreatedCredential,
  PageResponse,
  UserRole,
  UserView
} from './types';

const USERS_PATH = '/api/v1/users';

export const usersApi = {
  list(page = 1, pageSize = 20, search?: string, role?: UserRole) {
    const query = new URLSearchParams({ page: String(page), pageSize: String(pageSize) });
    if (search) query.set('search', search);
    if (role) query.set('role', role);
    return apiRequest<PageResponse<UserView>>(`${USERS_PATH}?${query}`);
  },
  get(id: string) {
    return apiRequest<UserView>(`${USERS_PATH}/${encodeURIComponent(id)}`);
  },
  create(input: { username: string; name?: string; password?: string; role: UserRole }) {
    return apiRequest<CreatedCredential>(USERS_PATH, {
      method: 'POST',
      body: JSON.stringify(input)
    });
  },
  createMany(usernames: string[], role: UserRole, existingUserMode: 'skip' | 'replace') {
    return apiRequest<BatchUsersResult>(`${USERS_PATH}/batch`, {
      method: 'POST',
      body: JSON.stringify({ usernames, role, existingUserMode })
    });
  },
  update(id: string, patch: Partial<Pick<UserView, 'username' | 'name' | 'role' | 'banned'>>) {
    return apiRequest<UserView>(`${USERS_PATH}/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify(patch)
    });
  },
  resetPassword(id: string) {
    return apiRequest<{ username: string; password: string }>(
      `${USERS_PATH}/${encodeURIComponent(id)}/reset-password`,
      { method: 'POST' }
    );
  },
  remove(id: string) {
    return apiRequest<void>(`${USERS_PATH}/${encodeURIComponent(id)}`, { method: 'DELETE' });
  }
};
