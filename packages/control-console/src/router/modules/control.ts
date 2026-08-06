import type { RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/index.vue';

export const controlRoutes: RouteRecordRaw[] = [
  {
    path: '/overview',
    component: Layout,
    name: 'overview-root',
    meta: { title: '总览', icon: 'dashboard' },
    children: [
      {
        path: '',
        name: 'Overview',
        component: () => import('@/pages/overview/index.vue'),
        meta: { title: '运行仪表盘' }
      }
    ]
  },
  {
    path: '/exams',
    component: Layout,
    redirect: '/exams/list',
    name: 'exams',
    meta: { title: '考试管理', icon: 'calendar' },
    children: [
      {
        path: 'list',
        name: 'ExamList',
        component: () => import('@/pages/exams/list/index.vue'),
        meta: { title: '考试列表' }
      },
      {
        path: 'create',
        name: 'ExamCreate',
        component: () => import('@/pages/exams/create/index.vue'),
        meta: { title: '发起考试', hidden: true }
      },
      {
        path: ':id',
        name: 'ExamDetail',
        component: () => import('@/pages/exams/detail/index.vue'),
        meta: { title: '考试详情', hidden: true }
      }
    ]
  },
  {
    path: '/devices',
    component: Layout,
    redirect: '/devices/list',
    name: 'devices',
    meta: { title: '设备与分组', icon: 'desktop' },
    children: [
      {
        path: 'list',
        name: 'DeviceList',
        component: () => import('@/pages/devices/index.vue'),
        meta: { title: '设备列表' }
      },
      {
        path: 'enroll',
        name: 'DeviceEnrollment',
        component: () => import('@/pages/devices/enroll/index.vue'),
        meta: { title: '注册设备', roles: ['admin'] }
      },
      {
        path: 'groups',
        name: 'PartitionManagement',
        component: () => import('@/pages/partitions/index.vue'),
        meta: { title: '设备分组' }
      }
    ]
  },
  {
    path: '/control',
    component: Layout,
    redirect: '/control/commands',
    name: 'control',
    meta: { title: '集控中心', icon: 'control-platform' },
    children: [
      {
        path: 'commands',
        name: 'CommandList',
        component: () => import('@/pages/commands/index.vue'),
        meta: { title: '命令记录' }
      },
      {
        path: 'policies',
        name: 'PolicyManagement',
        component: () => import('@/pages/policies/index.vue'),
        meta: { title: '设备策略', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/governance',
    component: Layout,
    redirect: '/governance/users',
    name: 'governance',
    meta: { title: '系统治理', icon: 'secured' },
    children: [
      {
        path: 'users',
        name: 'UserManagement',
        component: () => import('@/pages/users/index.vue'),
        meta: { title: '用户管理', roles: ['admin'] }
      },
      {
        path: 'audit',
        name: 'AuditLogs',
        component: () => import('@/pages/audit/index.vue'),
        meta: { title: '审计日志' }
      },
      {
        path: 'device-errors',
        name: 'DeviceErrorList',
        component: () => import('@/pages/device-errors/index.vue'),
        meta: { title: '客户端错误' }
      }
    ]
  }
];
