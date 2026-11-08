import { defineMainPlugin } from '@dsz-examaware/plugin-sdk';

export default defineMainPlugin({
  activate(ctx) {
    ctx.logger.info('宝中考试时钟主题插件已激活');
  }
});
