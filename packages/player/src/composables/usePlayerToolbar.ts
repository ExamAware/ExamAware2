import { inject, provide } from 'vue';
import type { PlayerToolbarItem, PlayerToolbarRegistry } from '../types';
import { createPlayerToolbarRegistry, playerToolbarRegistryKey } from '../core/toolbarRegistry';

export interface ProvidePlayerToolbarOptions {
  initialItems?: PlayerToolbarItem[];
}

export const providePlayerToolbar = (options: ProvidePlayerToolbarOptions = {}) => {
  const registry = createPlayerToolbarRegistry(options.initialItems ?? []);
  provide(playerToolbarRegistryKey, registry);
  return registry;
};

export const usePlayerToolbar = (): PlayerToolbarRegistry => {
  const registry = inject<PlayerToolbarRegistry | null>(playerToolbarRegistryKey, null);
  if (!registry) {
    throw new Error('usePlayerToolbar 需要在 ExamPlayer 组件树内部调用');
  }
  return registry;
};
