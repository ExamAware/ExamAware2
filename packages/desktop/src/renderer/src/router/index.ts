import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@renderer/views/HomeView.vue'
import MainpageView from '@renderer/views/home/MainpageView.vue'
import PlayerHomeView from '@renderer/views/home/PlayerHomeView.vue'
import ntpSettingsPage from '@renderer/views/home/ntpSettingsPage.vue'
import DiscoverView from '@renderer/views/home/DiscoverView.vue'
import EditorView from '@renderer/views/EditorView.vue'
import PlayerView from '@renderer/views/PlayerView.vue'
import LogsView from '@renderer/views/LogsView.vue'
import TrayPopover from '@renderer/views/tray/TrayPopover.vue'
import SettingsShell from '@renderer/views/SettingsShell.vue'
import CastWindow from '@renderer/views/CastWindow.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        { path: 'mainpage', name: 'mainpage', component: MainpageView },
        { path: 'playerhome', name: 'playerhome', component: PlayerHomeView },
        { path: 'discover', name: 'discover', component: DiscoverView },
        { path: 'ntpsettings', name: 'ntpsettings', component: ntpSettingsPage }
      ]
    },
    { path: '/editor', name: 'editor', component: EditorView, meta: { hideTitlebar: true } },
    { path: '/settings/:page?', name: 'settings', component: SettingsShell },
    // 播放器独立窗口路由（由主进程以 #/playerview 打开）
    {
      path: '/playerview',
      name: 'playerview',
      component: PlayerView,
      meta: { hideTitlebar: true }
    },
    {
      path: '/cast',
      name: 'cast',
      component: CastWindow
    },
    // 独立日志窗口可直接使用 #/logs 打开
    { path: '/logs', name: 'logs', component: LogsView },
    // 托盘弹出菜单（自绘），隐藏标题栏
    { path: '/tray', name: 'tray', component: TrayPopover, meta: { hideTitlebar: true } }
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
