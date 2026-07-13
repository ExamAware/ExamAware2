import { describe, expect, it, vi } from 'vitest'
import { ServiceRegistry } from '../../../src/shared/services/registry'

describe('ServiceRegistry watchers', () => {
  it('cleans every provider subscription before re-invoking a watcher', () => {
    const registry = new ServiceRegistry()
    registry.provide('one', 'clock', 1)
    registry.provide('two', 'clock', 2)
    const cleanups: string[] = []
    const disposeWatch = registry.when('clock', (_value, owner) => () => cleanups.push(owner))

    registry.provide('three', 'clock', 3)
    expect(cleanups).toEqual(['one', 'two'])

    disposeWatch()
    expect(cleanups).toEqual(['one', 'two', 'one', 'two', 'three'])
  })

  it('runs all cleanups when the final provider is revoked', () => {
    const registry = new ServiceRegistry()
    const revokeOne = registry.provide('one', 'clock', 1)
    const revokeTwo = registry.provide('two', 'clock', 2)
    const cleanup = vi.fn()
    registry.when('clock', () => cleanup)

    revokeOne()
    expect(cleanup).toHaveBeenCalledTimes(2)
    revokeTwo()
    expect(cleanup).toHaveBeenCalledTimes(3)
  })

  it('isolates cleanup failures and still drains the remaining cleanups', () => {
    const warn = vi.fn()
    const registry = new ServiceRegistry({ warn })
    registry.provide('one', 'clock', 1)
    registry.provide('two', 'clock', 2)
    const secondCleanup = vi.fn()
    const dispose = registry.when('clock', (_value, owner) =>
      owner === 'one'
        ? () => {
            throw new Error('cleanup failed')
          }
        : secondCleanup
    )

    dispose()
    expect(secondCleanup).toHaveBeenCalledOnce()
    expect(warn).toHaveBeenCalledOnce()
  })
})
