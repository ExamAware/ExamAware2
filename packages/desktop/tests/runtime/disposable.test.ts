import { describe, expect, it, vi } from 'vitest'
import { DisposerGroup as MainDisposerGroup } from '../../src/main/runtime/disposable'
import { DisposerGroup as RendererDisposerGroup } from '../../src/renderer/src/runtime/disposable'

describe.each([
  ['main', MainDisposerGroup],
  ['renderer', RendererDisposerGroup]
])('%s DisposerGroup', (_scope, DisposerGroup) => {
  it('runs disposers in reverse order exactly once', () => {
    const calls: number[] = []
    const group = new DisposerGroup()
    group.add(() => calls.push(1))
    group.add(() => calls.push(2))
    group.disposeAll()
    group.disposeAll()
    expect(calls).toEqual([2, 1])
  })

  it('continues after a disposer throws', () => {
    const earlier = vi.fn()
    const group = new DisposerGroup()
    group.add(earlier)
    group.add(() => {
      throw new Error('boom')
    })
    expect(() => group.disposeAll()).not.toThrow()
    expect(earlier).toHaveBeenCalledOnce()
  })

  it('immediately runs a disposer added after disposal', () => {
    const late = vi.fn()
    const group = new DisposerGroup()
    group.disposeAll()
    group.add(late)
    expect(late).toHaveBeenCalledOnce()
  })
})
