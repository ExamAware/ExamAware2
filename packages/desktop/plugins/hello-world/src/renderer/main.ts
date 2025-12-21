import { defineComponent, h } from 'vue'
import HelloSettingsPage from './components/HelloSettingsPage.vue'
import type { PluginRuntimeContext } from '../../../../src/main/plugin/types'

export default async function setupRenderer(ctx: PluginRuntimeContext) {
  if (ctx.app !== 'renderer') return
  const desktopApi = ctx.desktopApi as any
  const settingsUi = desktopApi?.ui?.settings
  if (!settingsUi) {
    ctx.logger.warn('Desktop API 当前不支持插件设置页面注册')
    return
  }

  const HelloSettingsEntry = defineComponent({
    name: 'HelloPluginSettingsEntry',
    setup() {
      return () => h(HelloSettingsPage, { ctx })
    }
  })
  const handle = await settingsUi.registerPage({
    id: 'plugin-hello-world-demo',
    label: 'Hello 示例',
    icon: 'smile',
    order: 50,
    component: () => Promise.resolve(HelloSettingsEntry)
  })

  if (handle) {
    ctx.effect(() => () => handle.dispose())
  }
}
