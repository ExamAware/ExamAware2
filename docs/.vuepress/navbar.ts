import { navbar } from 'vuepress-theme-hope';

export default navbar([
  {
    text: '首页',
    link: '/',
    icon: 'house'
  },
  {
    text: '使用文档',
    link: '/usage/',
    icon: 'book-open'
  },
  {
    text: '插件开发',
    prefix: '/plugin-dev/',
    icon: 'puzzle-piece',
    children: [
      { text: '总览', link: '/plugin-dev/' },
      { text: '快速开始', link: 'quickstart' },
      { text: '打包与分发', link: 'packaging' },
      { text: 'API 概览', link: 'api' }
    ]
  },
  {
    text: 'GitHub',
    icon: 'github',
    link: 'https://github.com/ExamAware/ExamAware2'
  }
]);
