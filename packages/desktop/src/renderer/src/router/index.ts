import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@renderer/views/HomeView.vue'
import MainpageView from '@renderer/views/home/MainpageView.vue'
import PlayerHomeView from '@renderer/views/home/PlayerHomeView.vue'
import UrlPlayerView from '@renderer/views/home/UrlPlayerView.vue'
import ntpSettingsPage from '@renderer/views/home/ntpSettingsPage.vue'
import EditorView from '@renderer/views/EditorView.vue'
import PlayerView from '@renderer/views/PlayerView.vue'
import LogsView from '@renderer/views/LogsView.vue'
import SettingsShell from '@renderer/views/SettingsShell.vue'
import PluginStoreWindow from '@renderer/views/PluginStoreWindow.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'mainpage',
          name: 'mainpage',
          component: MainpageView,
          meta: { title: 'ExamAware' }
        },
        {
          path: 'playerhome',
          name: 'playerhome',
          component: PlayerHomeView,
          meta: { title: '放映器' }
        },
        {
          path: 'playerhome/url',
          name: 'playerhome-url',
          component: UrlPlayerView,
          meta: { title: '从 URL 放映' }
        },
        {
          path: 'ntpsettings',
          name: 'ntpsettings',
          component: ntpSettingsPage,
          meta: { title: '时间同步' }
        }
      ]
    },
    {
      path: '/editor',
      name: 'editor',
      component: EditorView,
      meta: { title: '考试编辑器' }
    },
    {
      path: '/settings/:page?',
      name: 'settings',
      component: SettingsShell,
      meta: { title: '应用设置' }
    },
    {
      path: '/plugin-store',
      name: 'plugin-store',
      component: PluginStoreWindow,
      meta: { title: '插件商店' }
    },
    // 播放器独立窗口路由（由主进程以 #/playerview 打开）
    {
      path: '/playerview',
      name: 'playerview',
      component: PlayerView,
      meta: { title: 'ExamAware 放映器' }
    },
    // 独立日志窗口可直接使用 #/logs 打开
    { path: '/logs', name: 'logs', component: LogsView, meta: { title: '日志' } }
  ]
})

router.afterEach((to) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : 'ExamAware'
  document.title = title
})

export default router
