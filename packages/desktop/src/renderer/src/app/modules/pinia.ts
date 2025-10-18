import type { App } from 'vue'
import { createPinia } from 'pinia'
import type { AppModule } from '../types'

export const piniaModule: AppModule = {
  name: 'pinia',
  install(app: App, ctx) {
    const pinia = createPinia()
    app.use(pinia)
    ctx.pinia = pinia
  }
}
