const DEVELOPMENT_DATABASE_URL = 'postgres://examaware:examaware@127.0.0.1:5432/examaware_control';
const DEVELOPMENT_AUTH_SECRET = 'examaware-control-development-secret';
const DEVELOPMENT_DEVICE_CREDENTIAL_PEPPER = 'examaware-device-development-pepper';

function readPort(value: string | undefined): number {
  const port = Number.parseInt(value ?? '3100', 10);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('CONTROL_SERVER_PORT must be an integer between 1 and 65535');
  }
  return port;
}

function readBoolean(name: string, value: string | undefined, fallback: boolean): boolean {
  if (value === undefined || value === '') {
    return fallback;
  }
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  throw new Error(`${name} must be either true or false`);
}

function readAuthSecret(nodeEnv: string, source: NodeJS.ProcessEnv): string {
  const secret = source.BETTER_AUTH_SECRET;
  if (secret) {
    return secret;
  }
  if (nodeEnv === 'production') {
    throw new Error('BETTER_AUTH_SECRET is required in production');
  }
  return DEVELOPMENT_AUTH_SECRET;
}
function readDeviceCredentialPepper(nodeEnv: string, source: NodeJS.ProcessEnv): string {
  const pepper = source.DEVICE_CREDENTIAL_PEPPER;
  if (pepper) {
    return pepper;
  }
  if (nodeEnv === 'production') {
    throw new Error('DEVICE_CREDENTIAL_PEPPER is required in production');
  }
  return DEVELOPMENT_DEVICE_CREDENTIAL_PEPPER;
}

function readTrustedOrigins(
  nodeEnv: string,
  betterAuthUrl: string,
  value: string | undefined
): readonly string[] {
  const configured = value
    ?.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
  const candidates =
    configured && configured.length > 0
      ? configured
      : nodeEnv === 'production'
        ? [betterAuthUrl]
        : [betterAuthUrl, 'http://localhost:5174', 'http://127.0.0.1:5174'];

  const origins = candidates.map((candidate) => {
    let url: URL;
    try {
      url = new URL(candidate);
    } catch {
      throw new Error(`AUTH_TRUSTED_ORIGINS contains an invalid URL: ${candidate}`);
    }
    if (
      !['http:', 'https:'].includes(url.protocol) ||
      url.origin !== candidate.replace(/\/$/, '')
    ) {
      throw new Error(`AUTH_TRUSTED_ORIGINS must contain HTTP origins without paths: ${candidate}`);
    }
    return url.origin;
  });

  return Object.freeze([...new Set(origins)]);
}

export function readEnvironment(source: NodeJS.ProcessEnv) {
  const nodeEnv = source.NODE_ENV ?? 'development';
  const betterAuthUrl = source.BETTER_AUTH_URL ?? 'http://localhost:3100';
  return Object.freeze({
    nodeEnv,
    port: readPort(source.CONTROL_SERVER_PORT),
    databaseUrl: source.DATABASE_URL ?? DEVELOPMENT_DATABASE_URL,
    betterAuthUrl,
    betterAuthSecret: readAuthSecret(nodeEnv, source),
    deviceCredentialPepper: readDeviceCredentialPepper(nodeEnv, source),
    api: Object.freeze({
      docsEnabled: readBoolean(
        'API_DOCS_ENABLED',
        source.API_DOCS_ENABLED,
        nodeEnv !== 'production'
      )
    }),
    auth: Object.freeze({
      trustedOrigins: readTrustedOrigins(nodeEnv, betterAuthUrl, source.AUTH_TRUSTED_ORIGINS),
      passwordEnabled: readBoolean('AUTH_PASSWORD_ENABLED', source.AUTH_PASSWORD_ENABLED, true),
      allowSelfRegistration: readBoolean(
        'AUTH_ALLOW_SELF_REGISTRATION',
        source.AUTH_ALLOW_SELF_REGISTRATION,
        false
      )
    })
  });
}

export const env = readEnvironment(process.env);
