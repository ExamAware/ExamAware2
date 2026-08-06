import { createApp } from 'vue';
import 'tdesign-vue-next/es/style/index.css';
import '@/style/index.less';
import { store } from './store';
import router from './router';
import './permission';
import App from './App.vue';

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
