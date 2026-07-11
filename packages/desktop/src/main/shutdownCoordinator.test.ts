import fs from 'fs'
import path from 'path'
import { describe, expect, it, vi } from 'vitest'

describe('shutdown integration', () => {
  it('guards before-quit and flushes configuration before quitting', () => {
    const source = fs.readFileSync(path.join(__dirname, 'index.ts'), 'utf-8')

    expect(source).toContain("import { flushConfig } from './configStore'")
    expect(source).toContain('event.preventDefault()')
    expect(source).toContain('flushConfig')
  })
})

describe('createShutdownCoordinator', () => {
  it('prevents duplicate quit events while one flush is pending, then permits reentry', async () => {
    const { createShutdownCoordinator } = await import('./shutdownCoordinator')
    let resolveFlush!: () => void
    const flush = vi.fn(() => new Promise<void>((resolve) => (resolveFlush = resolve)))
    const app = { quit: vi.fn() }
    const cleanup = vi.fn()
    const coordinator = createShutdownCoordinator({
      app,
      flush,
      cleanup,
      logger: { error: vi.fn() }
    })
    const firstEvent = { preventDefault: vi.fn() }
    const duplicateEvent = { preventDefault: vi.fn() }

    coordinator(firstEvent)
    coordinator(duplicateEvent)
    expect(firstEvent.preventDefault).toHaveBeenCalledTimes(1)
    expect(duplicateEvent.preventDefault).toHaveBeenCalledTimes(1)
    expect(flush).toHaveBeenCalledTimes(1)
    expect(cleanup).toHaveBeenCalledTimes(1)

    resolveFlush()
    await Promise.resolve()
    await Promise.resolve()
    expect(app.quit).toHaveBeenCalledTimes(1)

    const reentryEvent = { preventDefault: vi.fn() }
    coordinator(reentryEvent)
    expect(reentryEvent.preventDefault).not.toHaveBeenCalled()
    expect(flush).toHaveBeenCalledTimes(1)
    expect(cleanup).toHaveBeenCalledTimes(1)
  })

  it('logs a flush failure and still quits exactly once', async () => {
    const { createShutdownCoordinator } = await import('./shutdownCoordinator')
    const diskError = new Error('disk error')
    const logger = { error: vi.fn() }
    const app = { quit: vi.fn() }
    const coordinator = createShutdownCoordinator({
      app,
      flush: vi.fn().mockRejectedValue(diskError),
      logger
    })
    const event = { preventDefault: vi.fn() }

    coordinator(event)
    await Promise.resolve()
    await Promise.resolve()

    expect(event.preventDefault).toHaveBeenCalledTimes(1)
    expect(logger.error).toHaveBeenCalledWith('[shutdown] config flush failed', diskError)
    expect(app.quit).toHaveBeenCalledTimes(1)
  })
})
