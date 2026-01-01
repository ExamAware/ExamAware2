import type { RouteRecordRaw } from 'vue-router'
import { homeRoutes } from './home'
import { editorRoutes } from './editor'
import { playerRoutes } from './player'
import { trayRoutes } from './tray'

export const routes: RouteRecordRaw[] = [
  ...homeRoutes,
  ...editorRoutes,
  ...playerRoutes,
  ...trayRoutes
]
