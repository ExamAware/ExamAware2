import type { App } from 'vue'
import router from '../../router'
import type { AppModule } from '../types'

export const routerModule: AppModule = {
  name: 'router',
  install(app: App, ctx) {
    app.use(router)
    ctx.router = router
  }
}
