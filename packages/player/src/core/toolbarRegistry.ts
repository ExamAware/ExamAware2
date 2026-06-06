import { shallowRef } from 'vue';
import type { PlayerToolbarItem, PlayerToolbarRegistry } from '../types';

export const playerToolbarRegistryKey = Symbol('playerToolbarRegistry');

const sortTools = (tools: Iterable<PlayerToolbarItem>) =>
  Array.from(tools).sort((a, b) => (a.order ?? 100) - (b.order ?? 100));

// 允许传入组件或已创建的 VNode；VNode 会被包装为可挂载组件
const normalizeIcon = (icon: PlayerToolbarItem['icon'] | any) => {
  if (!icon) return undefined;
  if ((icon as any).__v_isVNode) {
    return () => icon;
  }
  return icon as PlayerToolbarItem['icon'];
};

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
    store.set(item.id, { ...item, icon: normalizeIcon(item.icon) });
  });
  sync();

  const register = (item: PlayerToolbarItem) => {
    if (!item || !item.id) {
      throw new Error('PlayerToolbarItem 需要提供唯一的 id');
    }
    store.set(item.id, { ...item, icon: normalizeIcon(item.icon) });
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
