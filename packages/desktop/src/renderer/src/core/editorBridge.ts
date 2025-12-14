import { shallowRef } from 'vue'
import type { LayoutManager } from './layoutManager'
import type { MenuConfigManager } from './menuManager'

export interface EditorRuntimeEnvironment {
  layoutManager?: LayoutManager | null
  menuManager?: MenuConfigManager | null
}

const runtimeRef = shallowRef<EditorRuntimeEnvironment | null>(null)
const listeners = new Set<(env: EditorRuntimeEnvironment) => void>()

export function setEditorRuntime(env: EditorRuntimeEnvironment | null) {
  runtimeRef.value = env
  if (!env) return
  for (const listener of Array.from(listeners)) {
    try {
      listener(env)
    } catch (error) {
      console.warn('[EditorBridge] listener execution failed', error)
    }
  }
}

export function onEditorRuntimeReady(cb: (env: EditorRuntimeEnvironment) => void) {
  listeners.add(cb)
  const current = runtimeRef.value
  if (current) {
    queueMicrotask(() => {
      try {
        cb(current)
      } catch (error) {
        console.warn('[EditorBridge] ready callback failed', error)
      }
    })
  }
  return () => listeners.delete(cb)
}

export function getEditorRuntime(): EditorRuntimeEnvironment | null {
  return runtimeRef.value
}
