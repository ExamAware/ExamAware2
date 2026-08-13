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
    icon: 'book-open',
    prefix: '/usage/',
    children: [
      { text: '使用指南', link: '/' },
      { text: '集控部署', link: 'control-deploy' },
      { text: 'Deep Link 清单', link: 'deeplink' }
    ]
  },
  {
    text: '插件开发',
    prefix: '/plugin-dev/',
    icon: 'puzzle-piece',
    children: [
      { text: '总览', link: '/plugin-dev/' },
      { text: '环境准备与开发工作流', link: 'setup' },
      { text: '快速开始', link: 'quickstart' },
      { text: '打包与分发', link: 'packaging' },
      { text: 'API 概览', link: 'api' },
      { text: 'Desktop 主程序开发', link: 'desktop-dev' }
    ]
  },
  {
    text: 'GitHub',
    icon: 'github',
    link: 'https://github.com/ExamAware/ExamAware2'
  }
]);
