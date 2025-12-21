import { defineComponent, h } from 'vue'
import type { PluginRuntimeContext } from '@examaware/plugin-sdk'
import PluginSettingsPage from './components/PluginSettingsPage.vue'

const SETTINGS_PAGE_ID = '{{SETTINGS_PAGE_ID}}'

export default async function setupRenderer(ctx: PluginRuntimeContext) {
  if (ctx.app !== 'renderer') return
  const desktopApi = ctx.desktopApi as any
  const settingsUi = desktopApi?.ui?.settings
  if (!settingsUi) {
    ctx.logger.warn('Desktop API does not expose settings UI in this build.')
    return
  }

  const SettingsEntry = defineComponent({
    name: 'ExamAwarePluginSettingsEntry',
    setup() {
      return () => h(PluginSettingsPage, { ctx })
    }
  })

  const handle = await settingsUi.registerPage({
    id: SETTINGS_PAGE_ID,
    label: 'Plugin Settings',
    icon: 'puzzle',
    order: 50,
    component: () => Promise.resolve(SettingsEntry)
  })

  if (handle) {
    ctx.effect(() => () => handle.dispose())
  }
}
