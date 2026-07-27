import { describe, expect, it, vi } from 'vitest'
import {
  requestUnsavedChangesDecision,
  UNSAVED_CHANGES_DIALOG_OPTIONS
} from '../../../src/renderer/src/core/unsavedChangesDialog'

describe('requestUnsavedChangesDecision', () => {
  it.each([
    [0, 'save'],
    [1, 'discard'],
    [2, 'cancel'],
    [-1, 'cancel']
  ] as const)('maps response %s to %s', async (response, expected) => {
    const showMessageBox = vi.fn().mockResolvedValue({ response, checkboxChecked: false })

    await expect(requestUnsavedChangesDecision(showMessageBox)).resolves.toBe(expected)
    expect(showMessageBox).toHaveBeenCalledWith(UNSAVED_CHANGES_DIALOG_OPTIONS)
  })

  it('uses the standard save, discard, cancel button order', () => {
    expect(UNSAVED_CHANGES_DIALOG_OPTIONS).toMatchObject({
      buttons: ['保存', '不保存', '取消'],
      defaultId: 0,
      cancelId: 2
    })
  })

  it('rejects instead of degrading to a destructive two-option confirm', async () => {
    await expect(requestUnsavedChangesDecision()).rejects.toThrow('保存确认对话框不可用')
  })
})
