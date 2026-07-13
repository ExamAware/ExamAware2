import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('editorBridge', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('does not invoke a queued ready callback after unsubscription', async () => {
    const { onEditorRuntimeReady, setEditorRuntime } =
      await import('../../../src/renderer/src/core/editorBridge')
    const runtime = { layoutManager: null }
    const listener = vi.fn()
    setEditorRuntime(runtime)

    const unsubscribe = onEditorRuntimeReady(listener)
    unsubscribe()
    await Promise.resolve()

    expect(listener).not.toHaveBeenCalled()
  })

  it('does not replay an old runtime after a newer runtime', async () => {
    const { onEditorRuntimeReady, setEditorRuntime } =
      await import('../../../src/renderer/src/core/editorBridge')
    const oldRuntime = { layoutManager: null }
    const newRuntime = { menuManager: null }
    const listener = vi.fn()
    setEditorRuntime(oldRuntime)

    onEditorRuntimeReady(listener)
    setEditorRuntime(newRuntime)
    await Promise.resolve()

    expect(listener).toHaveBeenCalledTimes(1)
    expect(listener).toHaveBeenCalledWith(newRuntime)
  })

  it('isolates listener failures and continues notifying other listeners', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    const { onEditorRuntimeReady, setEditorRuntime } =
      await import('../../../src/renderer/src/core/editorBridge')
    const second = vi.fn()
    onEditorRuntimeReady(() => {
      throw new Error('boom')
    })
    onEditorRuntimeReady(second)

    setEditorRuntime({ layoutManager: null })
    expect(second).toHaveBeenCalledOnce()
    expect(warn).toHaveBeenCalledOnce()
  })
})
