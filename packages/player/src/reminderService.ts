import { ref, computed, onUnmounted, type ComputedRef } from 'vue'

export type ReminderKind = 'ending' | 'normal'

export type CloseReason = 'manual' | 'timeout'

export interface NormalNoticeOptions {
  timeoutMs?: number // default 10000
  id?: string
}

export interface EndingAlertOptions {
  durationMs?: number // default 8000
  title?: string // default '考试即将结束'
  themeBaseColor?: string // 用于计算对比色
}

export interface ReminderServiceApi {
  // 普通通知（Markdown）
  notify(markdown: string, options?: NormalNoticeOptions): string
  closeCurrentNotice(reason?: CloseReason): void
  clearAllNotices(): void

  // 考试即将结束提醒（全屏）
  showEndingAlert(options?: EndingAlertOptions): void
  hideEndingAlert(): void

  // 状态
  isEndingVisible: ComputedRef<boolean>
  currentNotice: ComputedRef<NormalReminder | null>
  queueLength: ComputedRef<number>
}

interface BaseReminder {
  id: string
  kind: ReminderKind
  createdAt: number
}

export interface NormalReminder extends BaseReminder {
  kind: 'normal'
  markdown: string
  timeoutMs: number
  remainingSec: number
}

export interface EndingReminder extends BaseReminder {
  kind: 'ending'
  title: string
  durationMs: number
  themeBaseColor?: string
}

let uid = 0
const genId = (p = 'r') => `${p}-${Date.now()}-${++uid}`

// 预留：根据主体色计算对比文字颜色（当前使用简单阈值法）
function getContrastingTextColor(baseColor?: string): string {
  if (!baseColor) return '#ffffff'
  // 支持 #rrggbb 或 rgb/rgba
  let r = 0, g = 0, b = 0
  const hex = baseColor.trim().toLowerCase()
  const hexMatch = hex.match(/^#([0-9a-f]{6})$/i)
  if (hexMatch) {
    const num = parseInt(hexMatch[1], 16)
    r = (num >> 16) & 255
    g = (num >> 8) & 255
    b = num & 255
  } else {
    const rgbMatch = baseColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i)
    if (rgbMatch) {
      r = parseInt(rgbMatch[1])
      g = parseInt(rgbMatch[2])
      b = parseInt(rgbMatch[3])
    } else {
      return '#ffffff'
    }
  }
  // WCAG 相对亮度简化判断
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? '#000000' : '#ffffff'
}

export function useReminderService(): ReminderServiceApi & {
  // 暴露少量内部状态供组件样式/动画使用
  _endingReminder: ReturnType<typeof ref<EndingReminder | null>>
  _currentNotice: ReturnType<typeof ref<NormalReminder | null>>
} {
  const queue = ref<NormalReminder[]>([])
  const currentNoticeRef = ref<NormalReminder | null>(null)
  const endingRef = ref<EndingReminder | null>(null)

  let noticeTimer: number | null = null
  let endingTimer: number | null = null

  const startNoticeCountdown = () => {
    stopNoticeCountdown()
    if (!currentNoticeRef.value) return
    noticeTimer = window.setInterval(() => {
      if (!currentNoticeRef.value) return
      if (currentNoticeRef.value.remainingSec <= 1) {
        closeCurrentNotice('timeout')
      } else {
        currentNoticeRef.value.remainingSec -= 1
      }
    }, 1000)
  }

  const stopNoticeCountdown = () => {
    if (noticeTimer != null) {
      window.clearInterval(noticeTimer)
      noticeTimer = null
    }
  }

  const processNext = () => {
    if (endingRef.value) return // 结束提醒显示时暂停普通队列
    if (currentNoticeRef.value) return
    const next = queue.value.shift() || null
    if (next) {
      currentNoticeRef.value = next
      startNoticeCountdown()
    }
  }

  const notify = (markdown: string, options: NormalNoticeOptions = {}): string => {
    const timeoutMs = options.timeoutMs ?? 10000
    const id = options.id ?? genId('n')
    const item: NormalReminder = {
      id,
      kind: 'normal',
      createdAt: Date.now(),
      markdown,
      timeoutMs,
      remainingSec: Math.max(1, Math.ceil(timeoutMs / 1000))
    }
    queue.value.push(item)
    // 若当前空闲且无结束提醒，立即处理
    processNext()
    return id
  }

  const closeCurrentNotice = (_reason: CloseReason = 'manual') => {
    if (!currentNoticeRef.value) return
    stopNoticeCountdown()
    currentNoticeRef.value = null
    // 下一个
    processNext()
  }

  const clearAllNotices = () => {
    queue.value = []
    stopNoticeCountdown()
    currentNoticeRef.value = null
  }

  const showEndingAlert = (options: EndingAlertOptions = {}) => {
    // 若正显示普通通知，先暂存回队列前端，结束提醒后再继续
    if (currentNoticeRef.value) {
      const cur = currentNoticeRef.value
      stopNoticeCountdown()
      currentNoticeRef.value = null
      // 将剩余时间转换回毫秒近似保留
      const restored: NormalReminder = {
        ...cur,
        timeoutMs: cur.remainingSec * 1000,
        remainingSec: cur.remainingSec
      }
      queue.value.unshift(restored)
    }

    // 若已有相同类型，刷新时长与标题
    const title = options.title ?? '考试即将结束'
    const durationMs = options.durationMs ?? 8000
    const themeBaseColor = options.themeBaseColor

    endingRef.value = {
      id: genId('e'),
      kind: 'ending',
      createdAt: Date.now(),
      title,
      durationMs,
      themeBaseColor
    }

    if (endingTimer != null) {
      window.clearTimeout(endingTimer)
      endingTimer = null
    }
    if (durationMs > 0) {
      endingTimer = window.setTimeout(() => {
        hideEndingAlert()
      }, durationMs)
    }
  }

  const hideEndingAlert = () => {
    if (!endingRef.value) return
    endingRef.value = null
    if (endingTimer != null) {
      window.clearTimeout(endingTimer)
      endingTimer = null
    }
    // 结束提醒关闭后继续处理普通队列
    processNext()
  }

  onUnmounted(() => {
    stopNoticeCountdown()
    if (endingTimer != null) window.clearTimeout(endingTimer)
  })

  return {
    // API
    notify,
    closeCurrentNotice,
    clearAllNotices,
    showEndingAlert,
    hideEndingAlert,

    // 状态
    isEndingVisible: computed(() => !!endingRef.value),
    currentNotice: computed(() => currentNoticeRef.value),
    queueLength: computed(() => queue.value.length),

    // 内部状态暴露
    _endingReminder: endingRef,
    _currentNotice: currentNoticeRef
  }
}

export const ReminderUtils = {
  getContrastingTextColor
}
