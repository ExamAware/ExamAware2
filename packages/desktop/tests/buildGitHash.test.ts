import { describe, expect, it } from 'vitest'
import { resolveBuildGitHash } from '../electron.vite.config'

describe('release Git hash resolution', () => {
  it('captures the CI commit during the build', () => {
    expect(resolveBuildGitHash({ GITHUB_SHA: ' 0123456789abcdef ' })).toBe('0123456789abcdef')
  })

  it('falls back to the checked-out commit for local release builds', () => {
    expect(resolveBuildGitHash({})).toMatch(/^[0-9a-f]{40}$/)
  })
})
