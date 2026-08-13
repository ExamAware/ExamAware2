import { beforeEach, describe, expect, it, vi } from 'vitest'

const electron = vi.hoisted(() => ({ isReady: vi.fn(() => true) }))
const logger = vi.hoisted(() => ({ error: vi.fn(), warn: vi.fn() }))

vi.mock('electron', () => ({ app: electron }))
vi.mock('../../../src/main/logging/logger', () => ({ appLogger: logger }))

import {
  DeepLinkManager,
  type DeepLinkMiddlewareContext
} from '../../../src/main/deepLink/deepLinkManager'
import {
  DeepLink,
  DeepLinkHost,
  DeepLinkRoute,
  UseDeepLinkMiddleware,
  applyDeepLinkControllers
} from '../../../src/main/deepLink/deepLinkDecorators'
import type { DeepLinkPayload } from '../../../src/shared/types/deepLink'

describe('DeepLinkManager', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    electron.isReady.mockReturnValue(true)
  })

  it('preserves payload parsing and global handler behavior', async () => {
    const manager = new DeepLinkManager('examaware')
    const handler = vi.fn(() => true)
    manager.registerHandler('legacy', handler)

    await manager.dispatch('examaware://settings/plugins?page=time&page=about&flag=a%20b')

    expect(handler).toHaveBeenCalledOnce()
    expect(handler).toHaveBeenCalledWith({
      raw: 'examaware://settings/plugins?page=time&page=about&flag=a%20b',
      scheme: 'examaware',
      host: 'settings',
      pathname: '/plugins',
      search: '?page=time&page=about&flag=a%20b',
      query: { page: 'about', flag: 'a b' }
    })
  })

  it('only invokes routes indexed for the matching host', async () => {
    const manager = new DeepLinkManager('examaware')
    const handlers = Array.from({ length: 100 }, (_, index) => vi.fn(() => true))
    handlers.forEach((handler, index) =>
      manager.registerRoute(`route-${index}`, { host: `host-${index}` }, handler)
    )

    await manager.dispatch('examaware://host-42/path')

    expect(handlers[42]).toHaveBeenCalledOnce()
    expect(handlers.filter((handler) => handler.mock.calls.length > 0)).toEqual([handlers[42]])
  })

  it('matches exact, regular-expression, and predicate paths without changing query values', async () => {
    const manager = new DeepLinkManager('examaware')
    const exact = vi.fn(() => true)
    const expression = vi.fn(() => true)
    const predicate = vi.fn(() => true)
    manager.registerRoute('exact', { host: 'plugin', path: '/open' }, exact)
    manager.registerRoute('expression', { host: 'plugin', path: /^\/open$/ }, expression)
    manager.registerRoute('predicate', { path: (payload) => payload.query.id === '42' }, predicate)

    await manager.dispatch('examaware://plugin/open?id=42')
    await manager.dispatch('examaware://plugin/other?id=7')

    expect(exact).toHaveBeenCalledOnce()
    expect(expression).toHaveBeenCalledOnce()
    expect(predicate).toHaveBeenCalledOnce()
    expect(predicate.mock.calls[0]?.[0].query).toEqual({ id: '42' })
  })

  it('runs middleware as an onion and allows middleware to short-circuit routing', async () => {
    const manager = new DeepLinkManager('examaware')
    const calls: string[] = []
    const route = vi.fn(() => {
      calls.push('route')
      return true
    })
    manager.use(async (_context, next) => {
      calls.push('first:before')
      await next()
      calls.push('first:after')
    })
    manager.use(async (_context, next) => {
      calls.push('second:before')
      await next()
      calls.push('second:after')
    })
    manager.registerRoute('route', { host: 'open' }, route)

    await manager.dispatch('examaware://open')

    expect(calls).toEqual(['first:before', 'second:before', 'route', 'second:after', 'first:after'])

    manager.use((context) => {
      context.handled = true
    })
    await manager.dispatch('examaware://open')
    expect(route).toHaveBeenCalledOnce()
  })

  it('keeps replacement disposers from deleting a newer registration', async () => {
    const manager = new DeepLinkManager('examaware')
    const oldHandler = vi.fn(() => true)
    const currentHandler = vi.fn(() => true)
    const disposeOld = manager.registerRoute('same', { host: 'old' }, oldHandler)
    manager.registerRoute('same', { host: 'current' }, currentHandler)

    disposeOld()
    await manager.dispatch('examaware://current')

    expect(oldHandler).not.toHaveBeenCalled()
    expect(currentHandler).toHaveBeenCalledOnce()
  })

  it('queues URLs until Electron is ready', async () => {
    electron.isReady.mockReturnValue(false)
    const manager = new DeepLinkManager('examaware')
    const handler = vi.fn(() => true)
    manager.registerRoute('queued', { host: 'queued' }, handler)

    await manager.dispatch('examaware://queued?id=1')
    expect(handler).not.toHaveBeenCalled()

    electron.isReady.mockReturnValue(true)
    manager.flushQueue()
    await vi.waitFor(() => expect(handler).toHaveBeenCalledOnce())
  })
})

describe('deep-link decorators', () => {
  it('registers legacy handlers, indexed routes, and middleware', async () => {
    const calls: string[] = []

    class Controller {
      async trace(context: DeepLinkMiddlewareContext, next: () => Promise<void>) {
        calls.push(`before:${context.payload.host}`)
        await next()
        calls.push(`after:${context.payload.host}`)
      }

      legacy(payload: DeepLinkPayload) {
        calls.push(`legacy:${payload.host}`)
        return false
      }

      settings(payload: DeepLinkPayload) {
        calls.push(`settings:${payload.pathname}`)
        return true
      }

      plugin(payload: DeepLinkPayload) {
        calls.push(`plugin:${payload.query.id}`)
        return true
      }
    }
    const descriptors = Object.getOwnPropertyDescriptors(Controller.prototype)
    UseDeepLinkMiddleware()(Controller.prototype, 'trace', descriptors.trace)
    DeepLink('legacy')(Controller.prototype, 'legacy', descriptors.legacy)
    DeepLinkHost('settings')(Controller.prototype, 'settings', descriptors.settings)
    DeepLinkRoute('plugin', '/open')(Controller.prototype, 'plugin', descriptors.plugin)

    const manager = new DeepLinkManager('examaware')
    const dispose = applyDeepLinkControllers([new Controller()], manager)

    await manager.dispatch('examaware://settings/plugins')
    await manager.dispatch('examaware://plugin/open?id=42')
    await manager.dispatch('examaware://plugin/other?id=7')
    dispose()
    await manager.dispatch('examaware://settings/about')

    expect(calls).toEqual([
      'before:settings',
      'legacy:settings',
      'settings:/plugins',
      'after:settings',
      'before:plugin',
      'legacy:plugin',
      'plugin:42',
      'after:plugin',
      'before:plugin',
      'legacy:plugin',
      'after:plugin'
    ])
  })
})
