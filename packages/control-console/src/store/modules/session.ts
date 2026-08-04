import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { authApi } from '@/api/auth';
import type { SessionUser } from '@/api/auth';
import { ApiError } from '@/api/http';

export const useSessionStore = defineStore('session', () => {
  const user = ref<SessionUser>();
  const initialized = ref(false);
  const authenticated = computed(() => Boolean(user.value));

  async function refresh(): Promise<boolean> {
    try {
      const session = await authApi.session();
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
    await authApi.signIn(email, password);
    await refresh();
  }

  async function signOut(): Promise<void> {
    await authApi.signOut();
    user.value = undefined;
    initialized.value = true;
  }

  return { authenticated, initialized, user, refresh, signIn, signOut };
});
