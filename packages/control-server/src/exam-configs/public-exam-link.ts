import { createHmac, timingSafeEqual } from 'node:crypto';

const TOKEN_VERSION = 1;
const MAX_TOKEN_LENGTH = 2048;

export interface PublicExamLinkPayload {
  examConfigId: string;
  version: number;
  expiresAt: number;
}

export interface PublicExamLinkResult extends PublicExamLinkPayload {
  token: string;
}

export function createPublicExamLink(
  input: Omit<PublicExamLinkPayload, 'expiresAt'> & { expiresInSeconds: number },
  secret: string,
  now = Date.now()
): PublicExamLinkResult {
  const expiresAt = now + input.expiresInSeconds * 1000;
  const payload = Buffer.from(
    JSON.stringify({
      v: TOKEN_VERSION,
      examConfigId: input.examConfigId,
      version: input.version,
      expiresAt
    }),
    'utf8'
  ).toString('base64url');
  const signature = createHmac('sha256', secret).update(payload).digest('base64url');
  return {
    token: `${payload}.${signature}`,
    examConfigId: input.examConfigId,
    version: input.version,
    expiresAt
  };
}

export function verifyPublicExamLink(
  token: string,
  secret: string,
  now = Date.now()
): PublicExamLinkPayload | null {
  if (!token || token.length > MAX_TOKEN_LENGTH) return null;
  const separator = token.lastIndexOf('.');
  if (separator <= 0 || separator === token.length - 1) return null;
  const payloadPart = token.slice(0, separator);
  const signaturePart = token.slice(separator + 1);
  const expectedSignature = createHmac('sha256', secret).update(payloadPart).digest('base64url');
  const actual = Buffer.from(signaturePart, 'base64url');
  const expected = Buffer.from(expectedSignature, 'base64url');
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return null;

  try {
    const parsed = JSON.parse(Buffer.from(payloadPart, 'base64url').toString('utf8')) as {
      v?: unknown;
      examConfigId?: unknown;
      version?: unknown;
      expiresAt?: unknown;
    };
    const version = parsed.version;
    const expiresAt = parsed.expiresAt;
    if (
      parsed.v !== TOKEN_VERSION ||
      typeof parsed.examConfigId !== 'string' ||
      !parsed.examConfigId ||
      typeof version !== 'number' ||
      !Number.isInteger(version) ||
      version < 1 ||
      typeof expiresAt !== 'number' ||
      !Number.isInteger(expiresAt) ||
      expiresAt <= now
    ) {
      return null;
    }
    return {
      examConfigId: parsed.examConfigId,
      version,
      expiresAt
    };
  } catch {
    return null;
  }
}
