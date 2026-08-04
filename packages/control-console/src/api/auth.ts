import { apiRequest } from './http';

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role?: 'admin' | 'operator' | 'viewer';
}

export interface SessionResponse {
  user: SessionUser;
}

const AUTH_API_PATHS = {
  session: '/api/auth/get-session',
  signIn: '/api/auth/sign-in/email',
  signOut: '/api/auth/sign-out'
} as const;

export const authApi = {
  session: () => apiRequest<SessionResponse | null>(AUTH_API_PATHS.session),
  signIn: (email: string, password: string) =>
    apiRequest<void>(AUTH_API_PATHS.signIn, {
      method: 'POST',
      body: JSON.stringify({ email, password })
    }),
  signOut: () => apiRequest<void>(AUTH_API_PATHS.signOut, { method: 'POST' })
};
