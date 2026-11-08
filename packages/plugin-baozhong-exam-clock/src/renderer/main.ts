import { defineRendererPlugin } from '@dsz-examaware/plugin-sdk';
import type { BaozhongExamClockSettings } from '../shared/settings';
import { installExamClockStyles, installSettingsStyles } from './styles/installStyles';
import { createSettingsEntry, createThemeEntry } from './themeBridge';

export default defineRendererPlugin<BaozhongExamClockSettings>({
  async activate(ctx) {
    if (ctx.window.kind === 'player' || ctx.window.kind === 'settings') {
      ctx.api.ui.player.registerTheme({
        id: 'baozhong-exam-clock',
        name: '宝中考试时钟',
        description: '移植 ExamClock 的考试时钟界面，支持内置与自定义背景图。',
        order: 50,
        chrome: { actionBar: true },
        component: () => Promise.resolve(createThemeEntry(ctx))
      });
    }

    if (ctx.window.kind === 'player') {
      ctx.scope.defer(installExamClockStyles());
      return;
    }

    if (ctx.window.kind === 'settings') {
      ctx.scope.defer(installSettingsStyles());
      await ctx.api.ui.settings.registerPage({
        id: 'backgrounds',
        label: '宝中考试时钟',
        icon: 'image',
        order: 60,
        component: () => Promise.resolve(createSettingsEntry(ctx))
      });
    }
  }
});
