import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { TaskQueue } from '../../../src/renderer/src/core/taskQueue'

describe('renderer TaskQueue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('window', globalThis)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.useRealTimers()
  })

  it.each([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])(
    'rejects a non-finite execution time: %s',
    (executeTime) => {
      const queue = new TaskQueue(() => 0)
      expect(() => queue.addTask(executeTime, vi.fn())).toThrow(RangeError)
      expect(queue.getTaskCount()).toBe(0)
    }
  )

  it('continues with later tasks when a callback throws', () => {
    let now = 0
    const queue = new TaskQueue(() => now)
    const second = vi.fn()
    queue.addTask(10, () => {
      throw new Error('boom')
    })
    queue.addTask(20, second)

    now = 10
    expect(() => vi.advanceTimersByTime(10)).toThrow('boom')
    now = 20
    vi.advanceTimersByTime(10)
    expect(second).toHaveBeenCalledOnce()
  })

  it('chunks delays beyond the maximum platform timer delay', () => {
    const maxDelay = 2_147_483_647
    let now = 0
    const queue = new TaskQueue(() => now)
    const callback = vi.fn()
    queue.addTask(maxDelay + 5_000, callback)

    now = maxDelay
    vi.advanceTimersByTime(maxDelay)
    expect(callback).not.toHaveBeenCalled()
    vi.advanceTimersByTime(4_999)
    expect(callback).not.toHaveBeenCalled()
    now += 5_000
    vi.advanceTimersByTime(1)
    expect(callback).toHaveBeenCalledOnce()
  })

  it('executes overdue equal-time tasks in insertion order', () => {
    const calls: number[] = []
    const queue = new TaskQueue(() => 100)
    queue.addTask(50, () => calls.push(1))
    queue.addTask(50, () => calls.push(2))
    vi.runAllTimers()
    expect(calls).toEqual([1, 2])
  })
})
