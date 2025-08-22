import 'misans/lib/Normal/MiSans-Normal.min.css'
// import 'misans/lib/Normal/MiSans-Thin.min.css'
// import 'misans/lib/Normal/MiSans-Semibold.min.css'

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vue-code-layout/lib/vue-code-layout.css'
import CodeLayout from 'vue-code-layout'

// import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(CodeLayout)
// app.use(TDesign)

// const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

// function updateTheme(event: MediaQueryListEvent) {
//   console.log('updateTheme', event.matches)
//   document.documentElement.setAttribute('theme-mode', event.matches ? 'dark' : 'light')
// }

// mediaQuery.addEventListener('change', updateTheme)

// // Set the initial theme
// document.documentElement.setAttribute('theme-mode', mediaQuery.matches ? 'dark' : 'light')

document.documentElement.setAttribute('theme-mode', 'dark')

app.mount('#app')
