import { win32 } from 'node:path'
import { describe, expect, it } from 'vitest'
import { resolveDesktopRoot } from '../scripts/prepare-packdeps-path.mjs'

describe('prepare-packdeps path resolution', () => {
  it('converts a Windows file URL into the desktop directory', () => {
    const scriptUrl =
      'file:///D:/a/ExamAware2/ExamAware2/packages/desktop/scripts/prepare-packdeps.mjs'

    const desktopRoot = resolveDesktopRoot(scriptUrl, { windows: true })

    expect(win32.resolve(desktopRoot)).toBe('D:\\a\\ExamAware2\\ExamAware2\\packages\\desktop')
  })
})
