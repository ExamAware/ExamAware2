import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { ApiError, apiRequest } from '@/api/http';

interface SessionUser {
  id: string;
  name: string;
  email: string;
  role?: string;
}

interface SessionResponse {
  user: SessionUser;
}

export const useSessionStore = defineStore('session', () => {
  const user = ref<SessionUser>();
  const initialized = ref(false);
  const authenticated = computed(() => Boolean(user.value));

  async function refresh(): Promise<boolean> {
    try {
      const session = await apiRequest<SessionResponse | null>('/api/auth/get-session');
      user.value = session?.user;
    } catch (error) {
      if (!(error instanceof ApiError) || error.status !== 401) {
        throw error;
      }
      user.value = undefined;
    } finally {
      initialized.value = true;
    }
    return authenticated.value;
  }

  async function signIn(email: string, password: string): Promise<void> {
    await apiRequest('/api/auth/sign-in/email', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    await refresh();
  }

  async function signOut(): Promise<void> {
    await apiRequest('/api/auth/sign-out', { method: 'POST' });
    user.value = undefined;
    initialized.value = true;
  }

  return { authenticated, initialized, user, refresh, signIn, signOut };
});
