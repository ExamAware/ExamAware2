import 'misans/lib/Normal/MiSans-Normal.min.css'
import 'misans/lib/Normal/MiSans-Regular.min.css'
import 'misans/lib/Normal/MiSans-Bold.min.css'
// import 'misans/lib/Normal/MiSans-Thin.min.css'
// import 'misans/lib/Normal/MiSans-Semibold.min.css'

import 'vue-code-layout/lib/vue-code-layout.css'
import 'tdesign-vue-next/es/style/index.css'
// 自定义样式与变量映射需在库样式之后导入，确保覆盖生效
import './assets/main.css'

import { createDesktopApp } from './app/createDesktopApp'
import { piniaModule } from './app/modules/pinia'
import { routerModule } from './app/modules/router'
import { codeLayoutModule } from './app/modules/codeLayout'
// import { themeModule } from './app/modules/theme'
import { themeSyncModule } from './app/modules/themeSync'
import { capabilitiesModule } from './app/modules/capabilities'
import { pagesModule } from './app/modules/pages'
import { routerRegistrarModule } from './app/modules/routerRegistrar'
import { homeButtonsModule } from './app/modules/homeButtons'
import { settingsModule } from './app/modules/settings'

async function bootstrap() {
  const app = await createDesktopApp({
    modules: [
      capabilitiesModule,
      homeButtonsModule,
      pagesModule,
      settingsModule,
      routerRegistrarModule,
      piniaModule,
      routerModule,
  codeLayoutModule,
  // 主题与设置联动（appearance.theme: auto/light/dark）
  themeSyncModule
    ]
  })

  app.app.mount('#app')
}

bootstrap()
