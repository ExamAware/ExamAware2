import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('settings shortcut scope', () => {
  it('uses an application menu accelerator without registering a global shortcut', () => {
    const source = readFileSync(new URL('../../src/main/index.ts', import.meta.url), 'utf8')

    expect(source).not.toContain('globalShortcut')
    expect(source).toContain("accelerator: 'CommandOrControl+,'")
  })
})
