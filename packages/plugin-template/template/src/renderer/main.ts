import { defineComponent, h } from 'vue';
import type { PluginRuntimeContext } from '@dsz-examaware/plugin-sdk';
import PluginSettingsPage from './components/PluginSettingsPage.vue';

const SETTINGS_PAGE_ID = 'examaware-plugin-template-settings';
const RPC_TOKEN = '__PLUGIN_NAMESPACE__.backService';

export default async function setupRenderer(ctx: PluginRuntimeContext) {
  if (ctx.app !== 'renderer') return;
  try {
    const back = ctx.rpc.get<{ $getSomeLocalData(): Promise<{ message: string; at: string }> }>(
      RPC_TOKEN
    );
    const data = await back.$getSomeLocalData();
    ctx.logger.info('[plugin-rpc]', data.message, data.at);
  } catch (error) {
    ctx.logger.warn('[plugin-rpc] call failed', error);
  }
  const desktopApi = ctx.desktopApi as any;
  const settingsUi = desktopApi?.ui?.settings;
  if (!settingsUi) {
    ctx.logger.warn('Desktop API does not expose settings UI in this build.');
    return;
  }

  const SettingsEntry = defineComponent({
    name: 'ExamAwarePluginSettingsEntry',
    setup() {
      return () => h(PluginSettingsPage, { ctx });
    }
  });

  const handle = await settingsUi.registerPage({
    id: SETTINGS_PAGE_ID,
    label: 'Plugin Settings',
    icon: 'extension',
    order: 50,
    component: () => Promise.resolve(SettingsEntry)
  });

  if (handle) {
    ctx.effect(() => () => handle.dispose());
  }
}
