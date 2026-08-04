export const DEVICE_ENROLLMENT_CODE_STATUS = {
  active: 'active',
  expired: 'expired',
  consumed: 'consumed',
  revoked: 'revoked'
} as const;

export type DeviceEnrollmentCodeStatus =
  (typeof DEVICE_ENROLLMENT_CODE_STATUS)[keyof typeof DEVICE_ENROLLMENT_CODE_STATUS];

export const DEVICE_ENROLLMENT_ERROR_CODES = {
  codeNotFound: 'device_enrollment_code_not_found',
  invalidRequest: 'invalid_device_enrollment',
  invalidCode: 'invalid_device_enrollment_code',
  codeExpired: 'device_enrollment_code_expired',
  codeUnavailable: 'device_enrollment_code_unavailable',
  deviceNotFound: 'device_not_found',
  deviceRevoked: 'device_revoked'
} as const;

export const DEVICE_ENROLLMENT_AUDIT = {
  codeCreated: 'device-enrollment-code.created',
  codeRevoked: 'device-enrollment-code.revoked',
  deviceEnrolled: 'device.enrolled',
  credentialRotated: 'device.credential-rotated',
  codeResource: 'device-enrollment-code',
  deviceResource: 'device'
} as const;
