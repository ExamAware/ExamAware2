import type { AuthRole } from './access-control.js';

export interface AuthenticatedSession {
  session: {
    id: string;
  };
  user: {
    id: string;
    role?: AuthRole | string | null;
  };
}
