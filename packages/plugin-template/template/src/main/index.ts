import { defineMainPlugin } from '@dsz-examaware/plugin-sdk';
import {
  backService,
  helloMessageService,
  type DemoSettings,
  type HelloMessage
} from '../shared/contracts';

export default defineMainPlugin<DemoSettings>({
  activate(ctx) {
    const message: HelloMessage = {
      text: ctx.initialSettings.demo?.message ?? 'Hello from ExamAware Demo Plugin',
      timestamp: Date.now()
    };

    ctx.api.services.provide(helloMessageService, message);
    ctx.api.services.exposeRpc(backService, {
      async getSomeLocalData() {
        return {
          message: message.text,
          at: new Date().toISOString()
        };
      }
    });

    const heartbeat = setInterval(() => {
      ctx.logger.info(message.text, new Date().toISOString());
    }, 10_000);
    ctx.scope.defer(() => clearInterval(heartbeat));
    ctx.logger.info('Plugin boot sequence completed');
  }
});
