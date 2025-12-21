import { defineExamAwarePlugin, PluginContextToken } from '@examaware/plugin-sdk'
import type { HostedService, PluginRuntimeContext } from '@examaware/plugin-sdk'

type HelloMessage = {
  text: string
  timestamp: number
}

class HelloMessageService implements HostedService {
  static inject = ['hello.message', PluginContextToken] as const

  constructor(
    private readonly message: HelloMessage,
    private readonly ctx: PluginRuntimeContext
  ) {}

  async start() {
    this.ctx.logger.info('Hello 服务已启动', this.message)
  }

  async stop() {
    this.ctx.logger.info('Hello 服务已停止')
  }
}

export default defineExamAwarePlugin((builder) => {
  builder.configureServices((context, services) => {
    services.addSingleton('hello.message', () => ({
      text: context.ctx.config?.message ?? 'Hello from ExamAware Plugin SDK',
      timestamp: Date.now()
    }))
  })

  builder.exposeHostService('hello.message', { token: 'hello.message' })
  builder.addHostedService(HelloMessageService)

  builder.use(async ({ ctx }, next) => {
    ctx.logger.info('Hello World 插件加载完成，当前配置：', ctx.config)
    await next()
  })

  builder.configure((host, app) => {
    const { ctx } = app
    host.lifetime.onStarted(() => {
      ctx.logger.info('Host lifetime onStarted hook invoked')
    })
    ctx.effect(() => () => {
      ctx.logger.info('Hello World 插件 effect 已释放')
    })
  })
})
