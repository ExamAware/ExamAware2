export type PluginApiErrorCode =
  | 'permission-denied'
  | 'invalid-argument'
  | 'invalid-config'
  | 'not-found'
  | 'already-exists'
  | 'not-supported'
  | 'not-ready'
  | 'conflict'
  | 'cancelled'
  | 'timeout'
  | 'network-error'
  | 'io-error'
  | 'internal-error';

export interface SerializedPluginApiError {
  name: 'PluginApiError';
  code: PluginApiErrorCode;
  domain: string;
  message: string;
  details?: unknown;
}

export class PluginApiError extends Error {
  readonly name = 'PluginApiError';

  constructor(
    readonly code: PluginApiErrorCode,
    readonly domain: string,
    message: string,
    readonly details?: unknown,
    cause?: unknown
  ) {
    super(message);
    if (cause !== undefined) (this as Error & { cause?: unknown }).cause = cause;
  }

  toJSON(): SerializedPluginApiError {
    return {
      name: this.name,
      code: this.code,
      domain: this.domain,
      message: this.message,
      details: this.details
    };
  }

  static from(error: unknown, domain = 'plugin'): PluginApiError {
    if (error instanceof PluginApiError) return error;
    if (isSerializedPluginApiError(error)) {
      return new PluginApiError(error.code, error.domain, error.message, error.details);
    }
    return new PluginApiError(
      'internal-error',
      domain,
      error instanceof Error ? error.message : String(error),
      undefined,
      error instanceof Error ? error : undefined
    );
  }
}

export function isSerializedPluginApiError(value: unknown): value is SerializedPluginApiError {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<SerializedPluginApiError>;
  return (
    candidate.name === 'PluginApiError' &&
    typeof candidate.code === 'string' &&
    typeof candidate.domain === 'string' &&
    typeof candidate.message === 'string'
  );
}
