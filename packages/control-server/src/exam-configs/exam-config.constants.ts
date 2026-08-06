export const EXAM_STATUS = {
  active: 'active',
  preparing: 'preparing',
  ready: 'ready',
  draft: 'draft',
  completed: 'completed',
  archived: 'archived'
} as const;

export type ExamStatus = (typeof EXAM_STATUS)[keyof typeof EXAM_STATUS];

export const EXAM_STATUS_VALUES = Object.values(EXAM_STATUS);
