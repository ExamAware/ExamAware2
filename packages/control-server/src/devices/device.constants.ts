export const DEVICE_LIFECYCLE_STATUS_VALUES = ['active', 'revoked'] as const;

export const DEVICE_LIFECYCLE_STATUS = {
  active: DEVICE_LIFECYCLE_STATUS_VALUES[0],
  revoked: DEVICE_LIFECYCLE_STATUS_VALUES[1]
} as const;

export const DEVICE_CONNECTION_STATUS = {
  online: 'online',
  offline: 'offline',
  neverConnected: 'never_connected',
  revoked: 'revoked'
} as const;
export const DEVICE_CONNECTION_CLOSE_REASONS = {
  credentialRotated: 'credential rotated',
  deviceRevoked: 'device revoked'
} as const;

export type DeviceConnectionStatus =
  (typeof DEVICE_CONNECTION_STATUS)[keyof typeof DEVICE_CONNECTION_STATUS];
