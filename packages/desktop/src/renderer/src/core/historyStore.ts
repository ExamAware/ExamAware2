import { reactive, ref, computed } from 'vue'

export interface HistoryEntry {
  id: number
  label: string
  timestamp: number
  snapshot: string // JSON string of ExamConfig
}

type ApplyFn = (snapshotJson: string) => void

const entries = reactive<HistoryEntry[]>([])
const pointer = ref(-1)
const applyFn = ref<ApplyFn | null>(null)
const isApplying = ref(false)
let nextId = 1

// debounce maps by key
const debounceTimers = new Map<string, number>()
const debouncedPayload = new Map<string, { label: string; config: any }>()

function clearTimers() {
  debounceTimers.forEach((t) => clearTimeout(t))
  debounceTimers.clear()
  debouncedPayload.clear()
}

export const historyStore = {
  entries,
  pointer,
  isApplying,
  canUndo: computed(() => pointer.value > 0),
  canRedo: computed(() => pointer.value >= 0 && pointer.value < entries.length - 1),
  setApply(fn: ApplyFn) {
    applyFn.value = fn
  },
  clear() {
    clearTimers()
    entries.splice(0, entries.length)
    pointer.value = -1
    nextId = 1
  },
  init(initialConfig: any, label = '初始状态') {
    this.clear()
    const snap = JSON.stringify(initialConfig)
    entries.push({ id: nextId++, label, timestamp: Date.now(), snapshot: snap })
    pointer.value = 0
  },
  push(label: string, config: any) {
    if (!config) return
    if (isApplying.value) return
    // cut branch if not at tail
    if (pointer.value < entries.length - 1) {
      entries.splice(pointer.value + 1)
    }
    const snap = JSON.stringify(config)
    entries.push({ id: nextId++, label, timestamp: Date.now(), snapshot: snap })
    pointer.value = entries.length - 1
  },
  pushDebounced(key: string, delay: number, label: string, config: any) {
    if (isApplying.value) return
    // 新编辑开始：若当前不在尾部，则立即剪掉未来分支
    if (pointer.value < entries.length - 1) {
      entries.splice(pointer.value + 1)
    }
    const prev = debounceTimers.get(key)
    if (prev) clearTimeout(prev)
    const tid = window.setTimeout(() => {
      this.push(label, config)
      debounceTimers.delete(key)
      debouncedPayload.delete(key)
    }, delay)
    debounceTimers.set(key, tid)
    debouncedPayload.set(key, { label, config })
  },
  flushDebounced(key: string) {
    const tid = debounceTimers.get(key)
    const payload = debouncedPayload.get(key)
    if (tid && payload) {
      clearTimeout(tid)
      debounceTimers.delete(key)
      debouncedPayload.delete(key)
      this.push(payload.label, payload.config)
    }
  },
  flushAllDebounced() {
    Array.from(debounceTimers.keys()).forEach((k) => this.flushDebounced(k))
  },
  undo() {
    if (!this.canUndo.value) return
    const target = entries[pointer.value - 1]
    if (!target || !applyFn.value) return
    try {
      isApplying.value = true
      pointer.value = pointer.value - 1
      applyFn.value(target.snapshot)
    } finally {
      // 稍后再允许 push，避免由 apply 引起的侦听器立刻 push
      setTimeout(() => { isApplying.value = false }, 0)
    }
  },
  redo() {
    if (!this.canRedo.value) return
    const target = entries[pointer.value + 1]
    if (!target || !applyFn.value) return
    try {
      isApplying.value = true
      pointer.value = pointer.value + 1
      applyFn.value(target.snapshot)
    } finally {
      setTimeout(() => { isApplying.value = false }, 0)
    }
  },
  goto(index: number) {
    if (index < 0 || index >= entries.length) return
    if (!applyFn.value) return
    const target = entries[index]
    try {
      isApplying.value = true
      pointer.value = index
      applyFn.value(target.snapshot)
    } finally {
      setTimeout(() => { isApplying.value = false }, 0)
    }
  }
}

export type HistoryStore = typeof historyStore
