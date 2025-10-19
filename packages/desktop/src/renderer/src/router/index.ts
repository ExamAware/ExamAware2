import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@renderer/views/HomeView.vue'
import MainpageView from '@renderer/views/home/MainpageView.vue'
import PlayerHomeView from '@renderer/views/home/PlayerHomeView.vue'
import ntpSettingsPage from '@renderer/views/home/ntpSettingsPage.vue'
import EditorView from '@renderer/views/EditorView.vue'
import PlayerView from '@renderer/views/PlayerView.vue'
import LogsView from '@renderer/views/LogsView.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			children: [
				{ path: 'mainpage', name: 'mainpage', component: MainpageView },
				{ path: 'playerhome', name: 'playerhome', component: PlayerHomeView },
				{ path: 'ntpsettings', name: 'ntpsettings', component: ntpSettingsPage },
			]
		},
		{ path: '/editor', name: 'editor', component: EditorView },
		// 播放器独立窗口路由（由主进程以 #/playerview 打开）
		{ path: '/playerview', name: 'playerview', component: PlayerView },
		// 独立日志窗口可直接使用 #/logs 打开
		{ path: '/logs', name: 'logs', component: LogsView },
	]
})

export default router
