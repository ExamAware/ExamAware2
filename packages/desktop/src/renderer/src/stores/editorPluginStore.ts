import { defineStore } from 'pinia'
import { shallowRef, defineAsyncComponent, type Component } from 'vue'

export type ComponentLoader<T extends Component = Component> =
  | T
  | (() => Promise<T | { default: T }>)

export interface EditorPluginPanelMeta {
  id: string
  title: string
  description?: string
  order?: number
  component: ComponentLoader
}

export interface EditorPluginPanelState extends EditorPluginPanelMeta {
  order: number
  renderer: Component
}

export interface EditorCenterViewMeta {
  id: string
  title: string
  description?: string
  allowClose?: boolean
  component: ComponentLoader
}

export interface EditorCenterViewState extends EditorCenterViewMeta {
  allowClose: boolean
  renderer: Component
}

function normalizeComponent(loader: ComponentLoader): Component {
  if (
    typeof loader === 'function' &&
    !('render' in (loader as any)) &&
    !('setup' in (loader as any))
  ) {
    return defineAsyncComponent(async () => {
      const mod = await (loader as () => Promise<Component | { default: Component }>)()
      return (mod as { default?: Component })?.default ?? (mod as Component)
    })
  }
  return loader as Component
}

export const useEditorPluginStore = defineStore('editorPluginStore', () => {
  const panels = shallowRef<EditorPluginPanelState[]>([])
  const centerView = shallowRef<EditorCenterViewState | null>(null)

  const registerPanel = (meta: EditorPluginPanelMeta) => {
    const renderer = normalizeComponent(meta.component)
    const state: EditorPluginPanelState = {
      ...meta,
      order: meta.order ?? 0,
      renderer
    }
    panels.value = [...panels.value.filter((p) => p.id !== meta.id), state].sort(
      (a, b) => a.order - b.order
    )
    return () => {
      panels.value = panels.value.filter((p) => p.id !== meta.id)
    }
  }

  const presentCenterView = (meta: EditorCenterViewMeta) => {
    const renderer = normalizeComponent(meta.component)
    centerView.value = {
      ...meta,
      renderer,
      allowClose: meta.allowClose ?? true
    }
    return () => {
      if (centerView.value?.id === meta.id) {
        centerView.value = null
      }
    }
  }

  const clearCenterView = (id?: string) => {
    if (!id || centerView.value?.id === id) {
      centerView.value = null
    }
  }

  return {
    panels,
    centerView,
    registerPanel,
    presentCenterView,
    clearCenterView
  }
})
