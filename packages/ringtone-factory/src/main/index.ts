import { defineExamAwarePlugin } from '@dsz-examaware/plugin-sdk';

export default defineExamAwarePlugin((builder) => {
  builder.use(async ({ ctx }, next) => {
    ctx.logger.info('[@dsz-examaware/ringtone-factory] initializing');
    await next();
    ctx.logger.info('[@dsz-examaware/ringtone-factory] ready');
  });
});
