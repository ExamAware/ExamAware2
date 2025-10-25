import type { ComputedRef } from 'vue';

export type CloseReason = 'manual' | 'timeout';

export interface ColorfulOptions {
  durationMs?: number;
  title?: string;
  themeBaseColor?: string;
}

export interface NormalOptions {
  timeoutMs?: number;
  id?: string;
}

export interface NormalNotice {
  id: string;
  markdown: string;
  remainingSec: number;
}

export interface IReminderService {
  // 彩色提醒
  showColorfulAlert(options?: ColorfulOptions): void;
  hideColorfulAlert(): void;
  isColorfulVisible: ComputedRef<boolean>;

  // 普通通知
  notify(markdown: string, options?: NormalOptions): string;
  closeCurrentNotice(reason?: CloseReason): void;
  clearAllNotices(): void;
  currentNotice: ComputedRef<NormalNotice | null>;
  queueLength: ComputedRef<number>;
}
