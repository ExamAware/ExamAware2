import { PluginApiError } from '@dsz-examaware/plugin-sdk'
import { controlService } from '../control/controlService'

export function assertControlSessionClosable(snapshot: { origin?: string } | undefined): void {
  if (snapshot?.origin === 'control' && controlService.isControlSessionExitPrevented()) {
    throw new PluginApiError('permission-denied', 'player', '集控策略禁止关闭当前放映会话')
  }
}
