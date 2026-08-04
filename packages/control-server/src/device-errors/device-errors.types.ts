export const DEVICE_ERROR_SEVERITY_VALUES = ['warning', 'error', 'fatal'] as const;

export const DEVICE_ERROR_SEVERITY = {
  warning: DEVICE_ERROR_SEVERITY_VALUES[0],
  error: DEVICE_ERROR_SEVERITY_VALUES[1],
  fatal: DEVICE_ERROR_SEVERITY_VALUES[2]
} as const;

export type DeviceErrorSeverity = (typeof DEVICE_ERROR_SEVERITY_VALUES)[number];

export const DEVICE_ERROR_API_CODES = {
  invalidContext: 'invalid_device_error_context'
} as const;

export type DeviceErrorContextValue = string | number | boolean | null;
export type DeviceErrorContext = Record<string, DeviceErrorContextValue>;
