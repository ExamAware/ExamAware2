import type { MessageBoxOptions, MessageBoxReturnValue } from 'electron'

export type UnsavedChangesDecision = 'save' | 'discard' | 'cancel'

export const UNSAVED_CHANGES_DIALOG_OPTIONS: MessageBoxOptions = {
  type: 'warning',
  buttons: ['保存', '不保存', '取消'],
  defaultId: 0,
  cancelId: 2,
  noLink: true,
  title: '未保存的更改',
  message: '当前文件已修改，是否在关闭窗口前保存？',
  detail: '选择“不保存”将丢弃当前更改，此操作不可撤销。'
}

type ShowMessageBox = (options: MessageBoxOptions) => Promise<MessageBoxReturnValue>

export async function requestUnsavedChangesDecision(
  showMessageBox?: ShowMessageBox
): Promise<UnsavedChangesDecision> {
  if (!showMessageBox) {
    throw new Error('保存确认对话框不可用')
  }

  const { response } = await showMessageBox(UNSAVED_CHANGES_DIALOG_OPTIONS)
  if (response === 0) return 'save'
  if (response === 1) return 'discard'
  return 'cancel'
}
