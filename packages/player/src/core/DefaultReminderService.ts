import { useReminderService } from '../utils/reminderService';
import type { IReminderService, ColorfulOptions, NormalOptions, CloseReason } from './reminder';

export function createDefaultReminderService(): IReminderService {
  const svc = useReminderService();
  return {
    // 彩色
    showColorfulAlert: (options?: ColorfulOptions) => svc.showColorfulAlert(options),
    hideColorfulAlert: () => svc.hideColorfulAlert(),
    isColorfulVisible: svc.isColorfulVisible,

    // 普通
    notify: (markdown: string, options?: NormalOptions) => svc.notify(markdown, options),
    closeCurrentNotice: (reason?: CloseReason) => svc.closeCurrentNotice(reason ?? 'manual'),
    clearAllNotices: () => svc.clearAllNotices(),
    currentNotice: svc.currentNotice as any,
    queueLength: svc.queueLength
  };
}
