import { defineRendererPlugin, type RendererPluginContext } from '@dsz-examaware/plugin-sdk';
import { createApp } from 'vue';
import RingtoneFactoryView from './RingtoneFactoryView.vue';
import ringtoneFactoryStyles from './ringtoneFactory.css?inline';

const routeId = 'ringtone-factory';

function mountFactory(ctx: RendererPluginContext) {
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

  const app = createApp(RingtoneFactoryView);
  app.mount(root);
  ctx.scope.defer(() => {
    app.unmount();
    root.remove();
    style.remove();
  });
}

export default defineRendererPlugin({
  activate(ctx) {
    if (ctx.window.kind === 'plugin' && ctx.window.route.includes(routeId)) {
      mountFactory(ctx);
      return;
    }

    ctx.api.ui.home.register({
      id: routeId,
      label: '铃声工厂',
      icon: 'music-rectangle-add',
      theme: 'primary',
      order: 30,
      action: async () => {
        await ctx.api.windows.open({
          id: routeId,
          route: routeId,
          width: 920,
          height: 720,
          title: '铃声工厂',
          resizable: true,
          fullscreenable: false
        });
      }
    });
  }
});
