import { apiRequest } from './http';

export interface SessionUser {
  id: string;
  name: string;
  username?: string;
  displayUsername?: string;
  role?: 'admin' | 'operator' | 'viewer';
}

export interface SessionResponse {
  user: SessionUser;
}

const AUTH_API_PATHS = {
  session: '/api/auth/get-session',
  signIn: '/api/auth/sign-in/username',
  signOut: '/api/auth/sign-out'
} as const;

export const authApi = {
  session: () => apiRequest<SessionResponse | null>(AUTH_API_PATHS.session),
  signIn: (username: string, password: string) =>
    apiRequest<void>(AUTH_API_PATHS.signIn, {
      method: 'POST',
      body: JSON.stringify({ username, password })
    }),
  signOut: () => apiRequest<void>(AUTH_API_PATHS.signOut, { method: 'POST' })
};
