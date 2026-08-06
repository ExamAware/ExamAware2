import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

export const store = createPinia();
store.use(createPersistedState());

export * from './modules/session';
export * from './modules/setting';
export * from './modules/tabs-router';
