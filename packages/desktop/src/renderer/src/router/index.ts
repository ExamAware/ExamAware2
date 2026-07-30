import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@renderer/views/HomeView.vue'),
      children: [
        {
          path: 'mainpage',
          name: 'mainpage',
          component: () => import('@renderer/views/home/MainpageView.vue')
        },
        {
          path: 'playerhome',
          name: 'playerhome',
          component: () => import('@renderer/views/home/PlayerHomeView.vue')
        },
        {
          path: 'playerhome/url',
          name: 'playerhome-url',
          component: () => import('@renderer/views/home/UrlPlayerView.vue')
        },
        {
          path: 'discover',
          name: 'discover',
          component: () => import('@renderer/views/home/DiscoverView.vue')
        },
        {
          path: 'ntpsettings',
          name: 'ntpsettings',
          component: () => import('@renderer/views/home/ntpSettingsPage.vue')
        }
      ]
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@renderer/views/EditorView.vue'),
      meta: { hideTitlebar: true }
    },
    {
      path: '/settings/:page?',
      name: 'settings',
      component: () => import('@renderer/views/SettingsShell.vue')
    },
    {
      path: '/plugin-store',
      name: 'plugin-store',
      component: () => import('@renderer/views/PluginStoreWindow.vue')
    },
    // 播放器独立窗口路由（由主进程以 #/playerview 打开）
    {
      path: '/playerview',
      name: 'playerview',
      component: () => import('@renderer/views/PlayerView.vue'),
      meta: { hideTitlebar: true }
    },
    {
      path: '/cast',
      name: 'cast',
      component: () => import('@renderer/views/CastWindow.vue')
    },
    // 独立日志窗口可直接使用 #/logs 打开
    { path: '/logs', name: 'logs', component: () => import('@renderer/views/LogsView.vue') },
    // 托盘弹出菜单（自绘），隐藏标题栏
    {
      path: '/tray',
      name: 'tray',
      component: () => import('@renderer/views/tray/TrayPopover.vue'),
      meta: { hideTitlebar: true }
    }
  ]
})

// 标记托盘弹窗页面，使全局样式可根据该标记应用半透明背景以透出 macOS vibrancy
router.afterEach((to) => {
  const root = document.documentElement || document.body
  if (!root) return
  if (to.name === 'tray') root.setAttribute('data-tray-popover', '')
  else root.removeAttribute('data-tray-popover')
})

export default router
