import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/': [
    '',
    {
      text: '使用文档',
      icon: 'book-open',
      prefix: 'usage/',
      children: ['']
    },
    {
      text: '插件开发',
      icon: 'puzzle-piece',
      prefix: 'plugin-dev/',
      children: ['', 'quickstart', 'packaging', 'api']
    }
  ]
});
