import type { RouteRecordRaw } from 'vue-router'

export const playerRoutes: RouteRecordRaw[] = [
  {
    path: '/playerview',
    name: 'playerview',
    component: () => import('@renderer/views/PlayerView.vue')
  },
  {
    path: '/pip',
    name: 'pip',
    component: () => import('@renderer/views/PipView.vue')
  }
]
