import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

describe('settingsStore synchronization', () => {
  beforeEach(() => {
    vi.resetModules()
    setActivePinia(createPinia())
  })

  it('does not let an older initial snapshot overwrite a newer broadcast', async () => {
    let resolveInitial!: (value: Record<string, unknown>) => void
    let onChanged!: (value: Record<string, unknown>) => void
    vi.stubGlobal('window', {
      api: {
        config: {
          all: vi.fn(() => new Promise((resolve) => (resolveInitial = resolve))),
          onChanged: vi.fn((callback) => {
            onChanged = callback
            return vi.fn()
          }),
          set: vi.fn().mockResolvedValue(undefined),
          patch: vi.fn().mockResolvedValue(undefined)
        }
      }
    })
    const { useSettingsStore } = await import('../../../src/renderer/src/stores/settingsStore')
    const store = useSettingsStore()

    onChanged({ revision: 2, theme: 'dark' })
    resolveInitial({ revision: 1, theme: 'light' })
    await Promise.resolve()
    await Promise.resolve()

    expect(store.get('revision')).toBe(2)
    expect(store.get('theme')).toBe('dark')
  })

  it('uses the initial snapshot when no newer broadcast has arrived', async () => {
    vi.stubGlobal('window', {
      api: {
        config: {
          all: vi.fn().mockResolvedValue({ revision: 1 }),
          onChanged: vi.fn(() => vi.fn()),
          set: vi.fn().mockResolvedValue(undefined),
          patch: vi.fn().mockResolvedValue(undefined)
        }
      }
    })
    const { useSettingsStore } = await import('../../../src/renderer/src/stores/settingsStore')
    const store = useSettingsStore()
    await vi.waitFor(() => expect(store.get('revision')).toBe(1))
  })

  it.each([
    ['set', (store: any) => store.set('theme', 'dark')],
    ['patch', (store: any) => store.patch({ theme: 'dark' })]
  ])('does not overwrite a local %s made while initialization is pending', async (_name, edit) => {
    let resolveInitial!: (value: Record<string, unknown>) => void
    vi.stubGlobal('window', {
      api: {
        config: {
          all: vi.fn(() => new Promise((resolve) => (resolveInitial = resolve))),
          onChanged: vi.fn(() => vi.fn()),
          set: vi.fn().mockResolvedValue(undefined),
          patch: vi.fn().mockResolvedValue(undefined)
        }
      }
    })
    const { useSettingsStore } = await import('../../../src/renderer/src/stores/settingsStore')
    const store = useSettingsStore()

    edit(store)
    resolveInitial({ theme: 'light' })
    await Promise.resolve()
    await Promise.resolve()

    expect(store.get('theme')).toBe('dark')
  })
})
