export interface ManagedSubject {
  id: string
  name: string
  duration: number
  enabled: boolean
}

export const SUBJECTS_STORAGE_KEY = 'eaSubjects'

export const DEFAULT_SUBJECTS: ManagedSubject[] = [
  { id: 'builtin-chinese', name: '语文', duration: 150, enabled: true },
  { id: 'builtin-math', name: '数学', duration: 120, enabled: true },
  { id: 'builtin-english', name: '英语', duration: 120, enabled: true },
  { id: 'builtin-physics', name: '物理', duration: 75, enabled: true },
  { id: 'builtin-chemistry', name: '化学', duration: 75, enabled: true },
  { id: 'builtin-biology', name: '生物', duration: 75, enabled: true },
  { id: 'builtin-politics', name: '政治', duration: 75, enabled: false },
  { id: 'builtin-history', name: '历史', duration: 75, enabled: false },
  { id: 'builtin-geography', name: '地理', duration: 75, enabled: false }
]

export function createSubjectId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function isManagedSubject(value: unknown): value is ManagedSubject {
  if (!value || typeof value !== 'object') return false
  const subject = value as Partial<ManagedSubject>
  return (
    typeof subject.id === 'string' &&
    typeof subject.name === 'string' &&
    Number.isFinite(Number(subject.duration)) &&
    typeof subject.enabled === 'boolean'
  )
}

export function loadSubjects(): ManagedSubject[] {
  try {
    const raw = localStorage.getItem(SUBJECTS_STORAGE_KEY)
    if (!raw) return DEFAULT_SUBJECTS.map((subject) => ({ ...subject }))
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return DEFAULT_SUBJECTS.map((subject) => ({ ...subject }))
    return parsed.filter(isManagedSubject).map((subject) => ({
      id: subject.id,
      name: subject.name,
      duration: Math.max(5, Math.min(480, Math.round(Number(subject.duration)))),
      enabled: subject.enabled
    }))
  } catch {
    return DEFAULT_SUBJECTS.map((subject) => ({ ...subject }))
  }
}

export function saveSubjects(subjects: readonly ManagedSubject[]): void {
  try {
    localStorage.setItem(SUBJECTS_STORAGE_KEY, JSON.stringify(subjects))
  } catch (error) {
    console.warn('[subjects] failed to save subjects', error)
  }
}
