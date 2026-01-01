import type { RouteRecordRaw } from 'vue-router'

const HomeView = () => import('@renderer/views/HomeView.vue')
const MainpageView = () => import('@renderer/views/home/MainpageView.vue')
const PlayerHomeView = () => import('@renderer/views/home/PlayerHomeView.vue')
const NtpSettingsPage = () => import('@renderer/views/home/ntpSettingsPage.vue')
const DiscoverView = () => import('@renderer/views/home/DiscoverView.vue')

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      { path: 'mainpage', name: 'mainpage', component: MainpageView },
      { path: 'playerhome', name: 'playerhome', component: PlayerHomeView },
      { path: 'discover', name: 'discover', component: DiscoverView },
      { path: 'ntpsettings', name: 'ntpsettings', component: NtpSettingsPage }
    ]
  }
]
