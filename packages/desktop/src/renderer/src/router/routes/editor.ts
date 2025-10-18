import type { RouteRecordRaw } from 'vue-router'

const EditorView = () => import('@renderer/views/EditorView.vue')

export const editorRoutes: RouteRecordRaw[] = [
  { path: '/editor', name: 'editor', component: EditorView }
]
