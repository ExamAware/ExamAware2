import { defineExamAwarePlugin } from '@dsz-examaware/plugin-sdk';
import type { HostedService } from '@dsz-examaware/plugin-sdk';

interface HelloMessage {
  text: string;
  timestamp: number;
}

class HeartbeatService implements HostedService {
  constructor(private readonly message: HelloMessage) {}

  private interval?: ReturnType<typeof setInterval>;

  async start() {
    this.interval = setInterval(() => {
      console.info('[examaware-plugin-template]', this.message.text, new Date().toISOString());
    }, 10_000);
  }

  async stop() {
    if (this.interval) clearInterval(this.interval);
  }
}

export default defineExamAwarePlugin((builder) => {
  builder.configureServices((context, services) => {
    services.addSingleton('hello.message', () => ({
      text: context.ctx.config?.message ?? 'Hello from ExamAware Demo Plugin1',
      timestamp: Date.now()
    }));

    // Register both class and string tokens to avoid identity mismatches
    services.addSingleton(HeartbeatService, (sp) => new HeartbeatService(sp.get('hello.message')));
    services.tryAddSingleton('heartbeat.service', (sp) => sp.get(HeartbeatService));
    context.ctx.logger.info(
      '[examaware-plugin-template] registered HeartbeatService/heartbeat.service'
    );
  });

  builder.exposeHostService('hello.message', { token: 'hello.message' });
  builder.addHostedService('heartbeat.service');

  builder.use(async ({ ctx }, next) => {
    ctx.logger.info('Plugin boot sequence started');
    await next();
    ctx.logger.info('Plugin boot sequence completed');
  });

  builder.configure((host, app) => {
    host.lifetime.onStarted(() => {
      app.ctx.logger.info('Host lifetime onStarted hook invoked');
    });
  });
});
