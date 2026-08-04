import type { RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/index.vue';

export const controlRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/base',
    name: 'dashboard',
    meta: { title: '仪表盘', icon: 'dashboard', expanded: true },
    children: [
      {
        path: 'base',
        name: 'DashboardBase',
        component: () => import('@/pages/dashboard/base/index.vue'),
        meta: { title: '运行概览' }
      }
    ]
  }
];
