import { shallowRef } from 'vue';
import type { PlayerToolbarItem, PlayerToolbarRegistry } from '../types';

export const playerToolbarRegistryKey = Symbol('playerToolbarRegistry');

const sortTools = (tools: Iterable<PlayerToolbarItem>) =>
  Array.from(tools).sort((a, b) => (a.order ?? 100) - (b.order ?? 100));

export function createPlayerToolbarRegistry(
  initial: PlayerToolbarItem[] = []
): PlayerToolbarRegistry {
  const store = new Map<string, PlayerToolbarItem>();
  const toolsRef = shallowRef<readonly PlayerToolbarItem[]>([]);

  const sync = () => {
    toolsRef.value = Object.freeze(sortTools(store.values())) as readonly PlayerToolbarItem[];
  };

  initial.forEach((item) => {
    if (!item?.id) return;
    store.set(item.id, item);
  });
  sync();

  const register = (item: PlayerToolbarItem) => {
    if (!item || !item.id) {
      throw new Error('PlayerToolbarItem 需要提供唯一的 id');
    }
    store.set(item.id, item);
    sync();
    return () => {
      if (store.get(item.id) === item) {
        store.delete(item.id);
        sync();
      }
    };
  };

  const unregister = (id: string) => {
    if (store.delete(id)) {
      sync();
    }
  };

  const clear = () => {
    if (store.size === 0) return;
    store.clear();
    sync();
  };

  return {
    tools: toolsRef,
    register,
    unregister,
    clear
  } satisfies PlayerToolbarRegistry;
}
