import type { PluginRuntimeContext } from '@dsz-examaware/plugin-sdk';
import { createEauiWindowForPlugin } from '@dsz-examaware/plugin-sdk';
import { createApp } from 'vue';
import RingtoneFactoryView from './RingtoneFactoryView.vue';
import ringtoneFactoryStyles from './ringtoneFactory.css?inline';

const routeId = 'ringtone-factory';

export default async function setupRenderer(ctx: PluginRuntimeContext) {
  if (ctx.app !== 'renderer') return;

  const openWindow = () =>
    createEauiWindowForPlugin(ctx, {
      routeId,
      electronWindow: {
        width: 920,
        height: 720,
        title: '铃声工厂',
        resizable: true,
        fullscreenable: false
      },
      buildUi: (runtimeCtx) => {
        document.title = '铃声工厂';
        const style = document.createElement('style');
        style.dataset.ringtoneFactory = '';
        style.textContent = ringtoneFactoryStyles;
        document.head.appendChild(style);

        const host =
          document.querySelector<HTMLElement>('.ea-window-content') ??
          document.getElementById('app') ??
          document.body;
        const root = document.createElement('div');
        root.className = 'ringtone-factory-root';
        host.appendChild(root);

        // The installed plugin bundles Vue, so it must mount with that same runtime.
        // Passing this component to eaui.mountVue would mix two Vue runtimes and render blank.
        const app = createApp(RingtoneFactoryView);
        app.mount(root);

        runtimeCtx.effect(() => () => {
          app.unmount();
          root.remove();
          style.remove();
        });
      }
    });

  const isPluginWindow = location.hash.includes(`#/${routeId}`);
  if (isPluginWindow) {
    await openWindow();
    return;
  }

  const addHomeButton = (
    ctx.desktopApi as {
      ctx?: {
        addHomeButton?: (meta: {
          id: string;
          label: string;
          icon: string;
          theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
          order?: number;
          action: () => void | Promise<void>;
        }) => Promise<void>;
      };
    }
  )?.ctx?.addHomeButton;

  if (!addHomeButton) {
    ctx.logger.warn('[@dsz-examaware/ringtone-factory] addHomeButton is unavailable');
    return;
  }

  await addHomeButton({
    id: 'ringtone-factory',
    label: '铃声工厂',
    icon: 'music-rectangle-add',
    theme: 'primary',
    order: 30,
    action: openWindow
  });
}
