import { createApp } from 'vue'
import { defineRendererPlugin, type RendererPluginContext } from '@dsz-examaware/plugin-sdk'
import PluginExampleView from './PluginExampleView.vue'

const routeId = 'plugin-example'

function mountExample(ctx: RendererPluginContext) {
  document.title = 'Example Plugin'
  const host =
    document.querySelector<HTMLElement>('.ea-window-content') ??
    document.getElementById('app') ??
    document.body
  const root = document.createElement('div')
  root.className = 'plugin-example-root'
  host.appendChild(root)
  const app = createApp(PluginExampleView)
  app.mount(root)
  ctx.scope.defer(() => {
    app.unmount()
    root.remove()
  })
}

export default defineRendererPlugin({
  activate(ctx) {
    if (ctx.window.kind === 'plugin' && ctx.window.route.includes(routeId)) {
      mountExample(ctx)
      return
    }

    ctx.api.ui.home.register({
      id: routeId,
      label: 'Demo',
      icon: 'api',
      order: 90,
      action: async () => {
        await ctx.api.windows.open({
          id: routeId,
          route: routeId,
          title: 'Example Plugin',
          width: 760,
          height: 640,
          resizable: true,
          fullscreenable: false
        })
      }
    })
  }
})
