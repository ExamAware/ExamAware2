import type { RouteRecordRaw } from 'vue-router'

export const trayRoutes: RouteRecordRaw[] = [
  {
    path: '/tray',
    name: 'tray',
    component: () => import('@renderer/views/tray/TrayPopover.vue')
  }
]
