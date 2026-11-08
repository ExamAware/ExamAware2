import type { ExamConfig } from '@renderer/core/configTypes'

export const QUICK_START_DRAFT_KEY = 'eaQuickStartDraft'
const DRAFT_TTL_MS = 5 * 60 * 1000

interface QuickStartDraftPayload {
  savedAt: number
  config: ExamConfig
}

/**
 * 保存快速开始生成的配置，由编辑器窗口消费。使用 localStorage 在两个窗口间传递，
 * 编辑器启动或已打开时读取后立即删除，避免下次打开编辑器时误加载旧草稿。
 */
export function saveQuickStartDraft(config: ExamConfig): void {
  try {
    const payload: QuickStartDraftPayload = { savedAt: Date.now(), config }
    localStorage.setItem(QUICK_START_DRAFT_KEY, JSON.stringify(payload))
  } catch (error) {
    console.warn('[quick-start] failed to save draft', error)
  }
}

export function takeQuickStartDraft(): ExamConfig | null {
  let raw: string | null = null
  try {
    raw = localStorage.getItem(QUICK_START_DRAFT_KEY)
  } catch {
    return null
  }
  if (!raw) return null
  try {
    localStorage.removeItem(QUICK_START_DRAFT_KEY)
  } catch {}
  try {
    const payload = JSON.parse(raw) as Partial<QuickStartDraftPayload>
    if (!payload?.config || !Array.isArray(payload.config.examInfos)) return null
    if (typeof payload.savedAt === 'number' && Date.now() - payload.savedAt > DRAFT_TTL_MS) {
      return null
    }
    return payload.config
  } catch {
    return null
  }
}
