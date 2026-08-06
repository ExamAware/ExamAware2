import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { controlRoutes } from './modules/control';

export const asyncRouterList: RouteRecordRaw[] = [...controlRoutes];

export const allRoutes: RouteRecordRaw[] = [
  {
    path: '/browser-incompatible',
    name: 'browser-incompatible',
    component: () => import('@/pages/browser-incompatible/index.vue'),
    meta: { anonymous: true, title: '浏览器不兼容' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
    meta: { anonymous: true, title: '登录' }
  },
  { path: '/', redirect: '/overview' },
  ...asyncRouterList,
  { path: '/:pathMatch(.*)*', redirect: '/overview' }
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
