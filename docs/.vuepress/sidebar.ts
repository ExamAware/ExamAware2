import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/': [
    '',
    {
      text: '使用文档',
      icon: 'book-open',
      prefix: 'usage/',
      children: ['', 'control-deploy', 'deeplink']
    },
    {
      text: '插件开发',
      icon: 'puzzle-piece',
      prefix: 'plugin-dev/',
      children: ['', 'setup', 'quickstart', 'packaging', 'api', 'desktop-dev']
    }
  ]
});
