import { defineComponent, h } from 'vue';
import { defineRendererPlugin } from '@dsz-examaware/plugin-sdk';
import PluginSettingsPage from './components/PluginSettingsPage.vue';
import { backService, type DemoSettings } from '../shared/contracts';

export default defineRendererPlugin<DemoSettings>({
  async activate(ctx) {
    try {
      const data = await ctx.api.services.rpc(backService).getSomeLocalData();
      ctx.logger.info('Main-process RPC is ready', data.message, data.at);
    } catch (error) {
      ctx.logger.warn('Main-process RPC call failed', error);
    }

    const SettingsEntry = defineComponent({
      name: 'ExamAwarePluginSettingsEntry',
      setup() {
        return () => h(PluginSettingsPage, { ctx });
      }
    });

    await ctx.api.ui.settings.registerPage({
      id: 'demo',
      label: 'Plugin Settings',
      icon: 'extension',
      order: 50,
      component: () => Promise.resolve(SettingsEntry)
    });
  }
});
