/**
 * @vitest-environment jsdom
 */

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { logService } from '../../../src/renderer/src/core/logService'

const pushRendererLog = vi.fn()

describe('renderer logService', () => {
  beforeEach(() => {
    pushRendererLog.mockReset()
    Object.defineProperty(window, 'api', {
      configurable: true,
      value: { logging: { pushRendererLog } }
    })
  })

  it('uses the typed logging bridge with structured context', () => {
    const error = new Error('write failed')

    logService.scoped('editor').error('save', { attempt: 2 }, error)

    expect(pushRendererLog).toHaveBeenCalledOnce()
    expect(pushRendererLog).toHaveBeenCalledWith({
      level: 'error',
      message: 'save {"attempt":2} write failed',
      source: 'editor',
      stack: error.stack
    })
  })

  it('falls back to console when the bridge is unavailable', () => {
    pushRendererLog.mockImplementation(() => {
      throw new Error('bridge unavailable')
    })
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)

    logService.scoped('theme').warn('restore failed')

    expect(warn).toHaveBeenCalledWith('[theme]', 'restore failed')
    warn.mockRestore()
  })
})
