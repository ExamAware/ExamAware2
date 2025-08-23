import { createRouter, createWebHashHistory } from 'vue-router'
import EditorView from '../views/EditorView.vue'
import HomeView from '@renderer/views/HomeView.vue'
import MainpageView from '@renderer/views/home/MainpageView.vue'
import PlayerHomeView from '@renderer/views/home/PlayerHomeView.vue'
import ntpSettingsPage from '@renderer/views/home/ntpSettingsPage.vue'

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
        },
        {
          path: 'playerhome',
          name: 'playerhome',
          component: PlayerHomeView,
        },
        {
          path: 'ntpsettings',
          name: 'ntpsettings',
          component: ntpSettingsPage,
        }
      ],
    },
    {
      path: '/editor',
      name: 'editor',
      component: EditorView,
    },
    {
      path: '/playerview',
      name: 'playerview',
      component: () => import('../views/PlayerViewNew.vue'),
    }
  ],
})

export default router
