import 'misans/lib/Normal/MiSans-Normal.min.css'
import 'misans/lib/Normal/MiSans-Regular.min.css'
import 'misans/lib/Normal/MiSans-Bold.min.css'
// import 'misans/lib/Normal/MiSans-Thin.min.css'
// import 'misans/lib/Normal/MiSans-Semibold.min.css'

import './assets/main.css'

import 'vue-code-layout/lib/vue-code-layout.css'
import 'tdesign-vue-next/es/style/index.css'

import { createDesktopApp } from './app/createDesktopApp'
import { piniaModule } from './app/modules/pinia'
import { routerModule } from './app/modules/router'
import { codeLayoutModule } from './app/modules/codeLayout'
import { themeModule } from './app/modules/theme'
import { capabilitiesModule } from './app/modules/capabilities'
import { pagesModule } from './app/modules/pages'
import { routerRegistrarModule } from './app/modules/routerRegistrar'

async function bootstrap() {
  const app = await createDesktopApp({
    modules: [
      capabilitiesModule,
      pagesModule,
      routerRegistrarModule,
      piniaModule,
      routerModule,
      codeLayoutModule,
      themeModule('dark')
    ]
  })

  app.app.mount('#app')
}

bootstrap()
