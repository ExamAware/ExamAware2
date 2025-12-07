import { defineComponent, h, ref } from 'vue'
import type { PluginRuntimeContext } from '../../../../src/main/plugin/types'

const HelloSettingsPage = defineComponent({
  name: 'HelloPluginSettingsPage',
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value += 1
    }

    return () =>
      h('div', { class: 'hello-plugin-card' }, [
        h('h3', 'Hello Plugin 示例页面'),
        h('p', '该界面由插件 renderer 入口动态注册，可通过按钮与宿主进行交互。'),
        h(
          'button',
          {
            class: 'hello-plugin-button',
            onClick: increment
          },
          `点我 +${count.value}`
        )
      ])
  }
})

export default async function setupRenderer(ctx: PluginRuntimeContext) {
  if (ctx.app !== 'renderer') return
  const desktopApi = ctx.desktopApi as any
  const settingsUi = desktopApi?.ui?.settings
  if (!settingsUi) {
    ctx.logger.warn('Desktop API 当前不支持插件设置页面注册')
    return
  }

  const handle = await settingsUi.registerPage({
    id: 'plugin-hello-world-demo',
    label: 'Hello 示例',
    icon: 'smile',
    order: 50,
    component: () => Promise.resolve(HelloSettingsPage)
  })

  if (handle) {
    ctx.effect(() => () => handle.dispose())
  }
}
