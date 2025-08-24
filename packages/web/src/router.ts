import { createRouter, createWebHashHistory } from 'vue-router'
import UploadView from './views/UploadView.vue'
import PlayerView from './views/PlayerView.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'upload', component: UploadView },
    { path: '/player', name: 'player', component: PlayerView }
  ]
})

export default router
