import { computed, ref, type Ref } from 'vue'
import type { ControlStatusSnapshot, ControlStatusState } from '@dsz-examaware/plugin-sdk'

export const CONTROL_STATUS_LABELS: Record<ControlStatusState, string> = {
  stopped: '已停止',
  unenrolled: '未绑定',
  connecting: '连接中',
  authenticating: '连接中',
  online: '在线',
  reconnecting: '重连中',
  'authentication-failed': '认证失败',
  incompatible: '不兼容',
  'connection-replaced': '离线'
}

export const CONTROL_STATUS_THEMES: Record<
  ControlStatusState,
  'default' | 'success' | 'warning' | 'danger'
> = {
  stopped: 'default',
  unenrolled: 'default',
  connecting: 'warning',
  authenticating: 'warning',
  online: 'success',
  reconnecting: 'warning',
  'authentication-failed': 'danger',
  incompatible: 'danger',
  'connection-replaced': 'default'
}

const snapshot: Ref<ControlStatusSnapshot | null> = ref(null)
let subscribed = false
let refreshPromise: Promise<ControlStatusSnapshot> | null = null

function ensureSubscribed() {
  if (subscribed || typeof window === 'undefined' || !window.api?.control) return
  subscribed = true
  window.api.control.onEvent((event) => {
    if (event.type === 'state-changed') snapshot.value = event.snapshot
  })
}

async function refresh(): Promise<ControlStatusSnapshot> {
  ensureSubscribed()
  if (!window.api?.control) {
    const unavailable = snapshot.value ?? { state: 'stopped', managedSettingKeys: [] }
    snapshot.value = unavailable
    return unavailable
  }
  if (!refreshPromise) {
    refreshPromise = window.api.control.getSnapshot().then((value) => {
      snapshot.value = value
      return value
    })
    void refreshPromise.then(
      () => {
        refreshPromise = null
      },
      () => {
        refreshPromise = null
      }
    )
  }
  return refreshPromise
}

async function bind(input: {
  serverUrl: string
  enrollmentCode: string
  displayName?: string
}): Promise<ControlStatusSnapshot> {
  const value = await window.api.control.enroll(input)
  snapshot.value = value
  return value
}

async function unbind(): Promise<ControlStatusSnapshot> {
  const value = await window.api.control.clearEnrollment()
  snapshot.value = value
  return value
}

async function callProctor(): Promise<void> {
  await window.api.control.callProctor({ occurredAt: new Date().toISOString() })
}

export function useControlAgent() {
  ensureSubscribed()
  if (!snapshot.value && window.api?.control) void refresh().catch(() => undefined)
  const state = computed<ControlStatusState>(() => snapshot.value?.state ?? 'stopped')
  return {
    snapshot,
    state,
    statusLabel: computed(() => CONTROL_STATUS_LABELS[state.value]),
    statusTheme: computed(() => CONTROL_STATUS_THEMES[state.value]),
    isManaged: (key: string) => snapshot.value?.managedSettingKeys.includes(key) === true,
    refresh,
    bind,
    unbind,
    callProctor
  }
}
