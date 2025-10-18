import type { App } from 'vue'
import CodeLayout from 'vue-code-layout'
import type { AppModule } from '../types'

export const codeLayoutModule: AppModule = {
  name: 'code-layout',
  install(app: App) {
    app.use(CodeLayout)
  }
}
