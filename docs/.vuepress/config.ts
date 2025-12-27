import { defineUserConfig } from 'vuepress';

import theme from './theme.js';

export default defineUserConfig({
  base: '/',

  lang: 'zh-CN',
  title: 'ExamAware 2 文档',
  description: 'ExamAware 2 使用说明与插件开发指南',

  theme

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
