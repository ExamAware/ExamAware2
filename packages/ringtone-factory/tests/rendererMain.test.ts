// @vitest-environment jsdom

import type { RendererPluginContext } from '@dsz-examaware/plugin-sdk';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => {
  const component = {};
  const mount = vi.fn();
  const unmount = vi.fn();
  return {
    component,
    mount,
    unmount,
    createApp: vi.fn(() => ({ mount, unmount }))
  };
});

vi.mock('vue', () => ({ createApp: mocks.createApp }));
vi.mock('../src/renderer/RingtoneFactoryView.vue', () => ({ default: mocks.component }));
vi.mock('@dsz-examaware/plugin-sdk', () => ({
  defineRendererPlugin:
    (lifecycle: { activate(ctx: RendererPluginContext): unknown }) =>
    (ctx: RendererPluginContext) =>
      lifecycle.activate(ctx)
}));

import setupRenderer from '../src/renderer/main';

describe('ringtone factory renderer', () => {
  beforeEach(() => {
    document.head.innerHTML = '<title>ExamAware</title>';
    document.body.innerHTML = '<div id="app"><div class="ea-window-content"></div></div>';
    window.location.hash = '#/ringtone-factory';
    vi.clearAllMocks();
  });

  it('mounts and disposes the view with the plugin Vue runtime', async () => {
    const cleanups: Array<() => void> = [];
    const ctx = {
      process: 'renderer',
      window: { kind: 'plugin', route: '/ringtone-factory' },
      logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() },
      scope: {
        defer(cleanup: () => void) {
          cleanups.push(cleanup);
          return { dispose: cleanup };
        }
      }
    } as unknown as RendererPluginContext;

    await setupRenderer(ctx);

    const root = document.querySelector<HTMLElement>('.ringtone-factory-root');
    expect(root?.parentElement).toBe(document.querySelector('.ea-window-content'));
    expect(mocks.createApp).toHaveBeenCalledWith(mocks.component);
    expect(mocks.mount).toHaveBeenCalledWith(root);
    expect(document.title).toBe('铃声工厂');
    expect(document.head.querySelector('style[data-ringtone-factory]')).not.toBeNull();

    expect(cleanups).toHaveLength(1);
    cleanups[0]();
    expect(mocks.unmount).toHaveBeenCalledOnce();
    expect(document.querySelector('.ringtone-factory-root')).toBeNull();
    expect(document.head.querySelector('style[data-ringtone-factory]')).toBeNull();
  });
});
