export type UIDensity = 'comfortable' | 'cozy' | 'compact';

export interface DensityOption {
  value: UIDensity;
  label: string;
  description: string;
}

export const defaultDensityOptions: DensityOption[] = [
  { value: 'comfortable', label: '舒适', description: '标准间距与字号' },
  { value: 'cozy', label: '适中', description: '减少约15%的留白' },
  { value: 'compact', label: '紧凑', description: '减少约30%的留白' }
];

export type DevReminderPreset = 'start' | 'warning' | 'end';

export interface DevReminderPayload {
  title: string;
  themeBaseColor: string;
}
