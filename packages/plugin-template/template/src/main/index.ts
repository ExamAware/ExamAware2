import { defineExamAwarePlugin } from '@dsz-examaware/plugin-sdk';
import type { HostedService } from '@dsz-examaware/plugin-sdk';

interface HelloMessage {
  text: string;
  timestamp: number;
}

const SERVICE_TOKEN = '__PLUGIN_NAMESPACE__.hello.message';
const RPC_TOKEN = '__PLUGIN_NAMESPACE__.backService';

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
    services.addSingleton(SERVICE_TOKEN, () => ({
      text: context.ctx.config?.message ?? 'Hello from ExamAware Demo Plugin1',
      timestamp: Date.now()
    }));

    // Register both class and string tokens to avoid identity mismatches
    services.addSingleton(HeartbeatService, (sp) => new HeartbeatService(sp.get(SERVICE_TOKEN)));
    services.tryAddSingleton('heartbeat.service', (sp) => sp.get(HeartbeatService));
    context.ctx.logger.info(
      '[examaware-plugin-template] registered HeartbeatService/heartbeat.service'
    );
  });

  builder.exposeHostService(SERVICE_TOKEN, { token: SERVICE_TOKEN });
  builder.addHostedService('heartbeat.service');

  builder.use(async ({ ctx }, next) => {
    const disposer = ctx.rpc.expose(RPC_TOKEN, {
      async $getSomeLocalData() {
        return {
          message: 'Hello from ExamAware plugin RPC',
          at: new Date().toISOString()
        };
      }
    });
    ctx.effect(() => disposer);
    await next();
  });

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
