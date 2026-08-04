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
  },
  {
    path: '/devices',
    component: Layout,
    redirect: '/devices/list',
    name: 'devices',
    meta: { title: '设备管理', icon: 'desktop' },
    children: [
      {
        path: 'list',
        name: 'DeviceList',
        component: () => import('@/pages/devices/index.vue'),
        meta: { title: '设备与注册码' }
      }
    ]
  },
  {
    path: '/partitions',
    component: Layout,
    redirect: '/partitions/manage',
    name: 'partitions',
    meta: { title: '分区管理', icon: 'tree-round-dot' },
    children: [
      {
        path: 'manage',
        name: 'PartitionManagement',
        component: () => import('@/pages/partitions/index.vue'),
        meta: { title: '维度与节点' }
      }
    ]
  },
  {
    path: '/exam-configs',
    component: Layout,
    redirect: '/exam-configs/list',
    name: 'exam-configs',
    meta: { title: '考试配置', icon: 'file-copy' },
    children: [
      {
        path: 'list',
        name: 'ExamConfigList',
        component: () => import('@/pages/exam-configs/index.vue'),
        meta: { title: '配置与版本' }
      }
    ]
  },
  {
    path: '/operations',
    component: Layout,
    redirect: '/operations/control',
    name: 'operations',
    meta: { title: '集控操作', icon: 'control-platform' },
    children: [
      {
        path: 'control',
        name: 'ControlOperations',
        component: () => import('@/pages/operations/index.vue'),
        meta: { title: '命令与部署' }
      }
    ]
  },
  {
    path: '/device-errors',
    component: Layout,
    redirect: '/device-errors/list',
    name: 'device-errors',
    meta: { title: '错误日志', icon: 'error-circle' },
    children: [
      {
        path: 'list',
        name: 'DeviceErrorList',
        component: () => import('@/pages/device-errors/index.vue'),
        meta: { title: '客户端错误' }
      }
    ]
  }
];
