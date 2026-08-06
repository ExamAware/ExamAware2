export const DEVICE_AUTH_ERROR_CODES = {
  credentialRequired: 'device_credential_required',
  invalidCredential: 'invalid_device_credential'
} as const;

export const DEVICE_AUTH_HEADERS = {
  id: 'x-device-id',
  credential: 'x-device-credential'
} as const;
