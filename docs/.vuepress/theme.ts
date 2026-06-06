import { hopeTheme } from 'vuepress-theme-hope';

import navbar from './navbar.js';
import sidebar from './sidebar.js';

export default hopeTheme({
  hostname: 'https://docs.examaware.com',

  author: {
    name: 'ExamAware Team',
    url: 'https://github.com/ExamAware2'
  },

  logo: '/assets/examaware-logo.png',

  repo: 'ExamAware/ExamAware2',

  docsDir: 'docs',

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: 'ExamAware 团队出品',
  displayFooter: true,

  metaLocales: {
    editLink: '在 GitHub 上面编辑此页'
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    gfm: true,
    include: true,
    mark: true,
    tabs: true,
    tasklist: true,
    vPre: true
  },

  plugins: {
    components: {
      components: ['Badge', 'VPCard']
    },
    icon: {
      prefix: 'fa6-solid:'
    }
  }
});
