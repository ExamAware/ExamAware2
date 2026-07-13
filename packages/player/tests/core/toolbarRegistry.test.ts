import { describe, expect, it } from 'vitest';
import { createPlayerToolbarRegistry } from '../../src/core/toolbarRegistry';

describe('createPlayerToolbarRegistry', () => {
  it('removes the registration when its disposer runs', () => {
    const registry = createPlayerToolbarRegistry();
    const dispose = registry.register({ id: 'clock', label: 'Clock' });

    expect(registry.tools.value.map((tool) => tool.id)).toEqual(['clock']);
    dispose();
    expect(registry.tools.value).toEqual([]);
  });

  it('keeps a newer replacement when an older disposer runs', () => {
    const registry = createPlayerToolbarRegistry();
    const disposeOld = registry.register({ id: 'clock', label: 'Old' });
    const disposeNew = registry.register({ id: 'clock', label: 'New' });

    disposeOld();
    expect(registry.tools.value.map((tool) => tool.label)).toEqual(['New']);

    disposeNew();
    disposeNew();
    expect(registry.tools.value).toEqual([]);
  });

  it('sorts equal-order tools stably and does not expose a mutable array', () => {
    const registry = createPlayerToolbarRegistry([
      { id: 'first', label: 'First', order: 1 },
      { id: 'second', label: 'Second', order: 1 },
      { id: 'early', label: 'Early', order: 0 }
    ]);

    expect(registry.tools.value.map((tool) => tool.id)).toEqual(['early', 'first', 'second']);
    expect(Object.isFrozen(registry.tools.value)).toBe(true);
  });
});
