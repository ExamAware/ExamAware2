import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { controlRoutes } from './modules/control';

export const asyncRouterList: RouteRecordRaw[] = [...controlRoutes];

export const allRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
    meta: { anonymous: true, title: '登录' }
  },
  { path: '/', redirect: '/dashboard/base' },
  ...asyncRouterList,
  { path: '/:pathMatch(.*)*', redirect: '/dashboard/base' }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
  scrollBehavior: () => ({ top: 0 })
});

export function getActive(maxLevel = 3): string {
  return router.currentRoute.value.path
    .split('/')
    .filter((_segment, index) => index > 0 && index <= maxLevel)
    .map((segment) => `/${segment}`)
    .join('');
}

export default router;
