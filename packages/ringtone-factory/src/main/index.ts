import { defineMainPlugin } from '@dsz-examaware/plugin-sdk';

export default defineMainPlugin({
  activate(ctx) {
    ctx.logger.info('铃声工厂主进程已激活');
  },
  deactivate(ctx) {
    ctx.logger.info('铃声工厂主进程正在停用');
  }
});
