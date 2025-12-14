import type { PluginRuntimeContext } from '@examaware/desktop-plugin-types'

export default async function helloWorldPlugin(ctx: PluginRuntimeContext) {
  ctx.logger.info('Hello World 插件加载完成，当前配置：', ctx.config)

  const disposeService = ctx.services.provide('hello.message', {
    text: ctx.config?.message ?? 'Hello from ExamAware Plugin',
    timestamp: Date.now()
  })

  ctx.effect(() => () => {
    ctx.logger.info('Hello World 插件 effect 已释放')
  })

  return () => {
    disposeService()
    ctx.logger.info('Hello World 插件已卸载')
  }
}
