import { beforeEach, describe, expect, it, vi } from 'vitest'

const state = vi.hoisted(() => ({
  isControlSessionExitPrevented: vi.fn()
}))

vi.mock('../../../src/main/control/controlService', () => ({
  controlService: {
    isControlSessionExitPrevented: state.isControlSessionExitPrevented
  }
}))

import { assertControlSessionClosable } from '../../../src/main/player/controlSessionGuard'

describe('assertControlSessionClosable', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    state.isControlSessionExitPrevented.mockReturnValue(false)
  })

  it('rejects closing a protected control session', () => {
    state.isControlSessionExitPrevented.mockReturnValue(true)

    expect(() => assertControlSessionClosable({ origin: 'control' })).toThrowError(
      expect.objectContaining({ code: 'permission-denied' })
    )
  })

  it('allows closing a local session while the policy is active', () => {
    state.isControlSessionExitPrevented.mockReturnValue(true)

    expect(() => assertControlSessionClosable({ origin: 'local' })).not.toThrow()
  })

  it('allows closing a control session while the policy is inactive', () => {
    expect(() => assertControlSessionClosable({ origin: 'control' })).not.toThrow()
  })
})
