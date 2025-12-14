import { defineComponent, h, ref } from 'vue'
import type { PluginRuntimeContext } from '../../../../src/main/plugin/types'

function createHelloSettingsPage(ctx: PluginRuntimeContext) {
  return defineComponent({
    name: 'HelloPluginSettingsPage',
    setup() {
      const settings = ctx.settings
      const clickCount = ref(settings?.get<number>('demo.clicks', 0) ?? 0)
      const saving = ref(false)

      if (settings?.onChange) {
        ctx.effect(() =>
          settings.onChange((config) => {
            const next = (config.demo?.clicks as number) ?? 0
            clickCount.value = next
          })
        )
      }

      const persist = async () => {
        if (!settings) return
        saving.value = true
        try {
          await settings.set('demo.clicks', clickCount.value)
        } finally {
          saving.value = false
        }
      }

      const increment = async () => {
        clickCount.value += 1
        await persist()
      }

      const reset = async () => {
        if (!settings) return
        await settings.reset()
      }

      return () =>
        h('div', { class: 'hello-plugin-card' }, [
          h('h3', 'Hello Plugin 示例页面'),
          h(
            'p',
            '该界面由插件 renderer 入口动态注册，以下按钮使用 ctx.settings 与宿主配置保持同步。'
          ),
          h('p', { class: 'hello-plugin-desc' }, `累计点击次数：${clickCount.value}`),
          h(
            'button',
            {
              class: 'hello-plugin-button',
              disabled: saving.value,
              onClick: increment
            },
            saving.value ? '保存中…' : '点我 +1'
          ),
          h(
            'button',
            {
              class: 'hello-plugin-button ghost',
              disabled: saving.value,
              onClick: reset
            },
            '重置配置'
          )
        ])
    }
  })
}

export default async function setupRenderer(ctx: PluginRuntimeContext) {
  if (ctx.app !== 'renderer') return
  const desktopApi = ctx.desktopApi as any
  const settingsUi = desktopApi?.ui?.settings
  if (!settingsUi) {
    ctx.logger.warn('Desktop API 当前不支持插件设置页面注册')
    return
  }

  const HelloSettingsPage = createHelloSettingsPage(ctx)
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
