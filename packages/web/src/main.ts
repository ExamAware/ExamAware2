import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import 'misans/lib/Normal/MiSans-Regular.min.css';
import 'misans/lib/Normal/MiSans-Normal.min.css';
import 'misans/lib/Normal/MiSans-Bold.min.css';

import '@dsz-examaware/player/dist/player.css';
import './assets/main.css';

const app = createApp(App);

// 设置深色主题
document.documentElement.setAttribute('theme-mode', 'dark');

app.use(router).use(TDesign).mount('#app');
