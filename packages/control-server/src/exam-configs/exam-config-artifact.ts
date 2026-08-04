import { createHash } from 'node:crypto';

function canonicalJson(value: unknown): string {
  if (value === null || typeof value === 'string' || typeof value === 'boolean') {
    return JSON.stringify(value);
  }
  if (typeof value === 'number') {
    if (!Number.isFinite(value))
      throw new TypeError('Canonical JSON does not accept non-finite numbers');
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => canonicalJson(item)).join(',')}]`;
  }
  if (typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const entries = Object.keys(record)
      .filter((key) => record[key] !== undefined)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${canonicalJson(record[key])}`);
    return `{${entries.join(',')}}`;
  }
  throw new TypeError(`Canonical JSON cannot serialize ${typeof value}`);
}

export interface ExamConfigArtifactBytes {
  body: Buffer;
  sha256: string;
}

export function createExamConfigArtifactBytes(content: unknown): ExamConfigArtifactBytes {
  const body = Buffer.from(canonicalJson(content));
  return {
    body,
    sha256: createHash('sha256').update(body).digest('hex')
  };
}
