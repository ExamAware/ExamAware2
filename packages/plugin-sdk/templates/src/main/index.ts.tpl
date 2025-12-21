import { defineExamAwarePlugin } from '@examaware/plugin-sdk'
import type { HostedService } from '@examaware/plugin-sdk'

interface HelloMessage {
  text: string
  timestamp: number
}

class HeartbeatService implements HostedService {
  static inject = ['hello.message'] as const

  constructor(private readonly message: HelloMessage) {}

  private interval?: ReturnType<typeof setInterval>

  async start() {
    this.interval = setInterval(() => {
      console.info('[{{PACKAGE_NAME}}]', this.message.text, new Date().toISOString())
    }, 10_000)
  }

  async stop() {
    if (this.interval) clearInterval(this.interval)
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
  builder.addHostedService(HeartbeatService)

  builder.use(async ({ ctx }, next) => {
    ctx.logger.info('Plugin boot sequence started')
    await next()
    ctx.logger.info('Plugin boot sequence completed')
  })

  builder.configure((host, app) => {
    host.lifetime.onStarted(() => {
      app.ctx.logger.info('Host lifetime onStarted hook invoked')
    })
  })
})
