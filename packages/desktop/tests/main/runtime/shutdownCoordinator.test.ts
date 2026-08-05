import fs from 'fs'
import path from 'path'
import { describe, expect, it, vi } from 'vitest'
import { createShutdownCoordinator } from '../../../src/main/runtime/shutdownCoordinator'

describe('shutdown integration', () => {
  it('guards before-quit and flushes configuration before quitting', () => {
    const source = fs.readFileSync(path.join(__dirname, '../../../src/main/index.ts'), 'utf-8')

    expect(source).toContain("import { flushConfig } from './config/configStore'")
    expect(source).toContain("app.on('before-quit', handleBeforeQuit)")
    expect(source.indexOf("app.on('before-quit', handleBeforeQuit)")).toBeLessThan(
      source.indexOf('app.whenReady().then')
    )
  })
})

describe('createShutdownCoordinator', () => {
  it('prevents duplicate quit events while one flush is pending, then permits reentry', async () => {
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

  it('logs a synchronous cleanup failure and still flushes and quits', async () => {
    const cleanupError = new Error('cleanup error')
    const logger = { error: vi.fn() }
    const flush = vi.fn().mockResolvedValue(undefined)
    const app = { quit: vi.fn() }
    const coordinator = createShutdownCoordinator({
      app,
      flush,
      cleanup: () => {
        throw cleanupError
      },
      logger
    })

    coordinator({ preventDefault: vi.fn() })
    await Promise.resolve()
    await Promise.resolve()

    expect(logger.error).toHaveBeenCalledWith('[shutdown] cleanup failed', cleanupError)
    expect(flush).toHaveBeenCalledTimes(1)
    expect(app.quit).toHaveBeenCalledTimes(1)
  })

  it('blocks shutdown before cleanup and config flush when policy denies quit', async () => {
    const app = { quit: vi.fn() }
    const flush = vi.fn().mockResolvedValue(undefined)
    const cleanup = vi.fn()
    const onBlocked = vi.fn()
    const coordinator = createShutdownCoordinator({
      app,
      flush,
      cleanup,
      logger: { error: vi.fn() },
      block: () => '集控策略禁止退出应用',
      onBlocked
    })
    const event = { preventDefault: vi.fn() }

    coordinator(event)

    expect(event.preventDefault).toHaveBeenCalledOnce()
    expect(onBlocked).toHaveBeenCalledWith('集控策略禁止退出应用')
    expect(cleanup).not.toHaveBeenCalled()
    expect(flush).not.toHaveBeenCalled()
    expect(app.quit).not.toHaveBeenCalled()
  })
})
