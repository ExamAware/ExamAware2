import { describe, expect, it } from 'vitest';
import {
  createPublicExamLink,
  verifyPublicExamLink
} from '../src/exam-configs/public-exam-link.js';

describe('public exam links', () => {
  it('creates a signed token that verifies to the immutable config version', () => {
    const result = createPublicExamLink(
      {
        examConfigId: 'exam-1',
        version: 3,
        expiresInSeconds: 300
      },
      'test-secret',
      1_000
    );

    expect(verifyPublicExamLink(result.token, 'test-secret', 1_001)).toEqual({
      examConfigId: 'exam-1',
      version: 3,
      expiresAt: 301_000
    });
  });

  it('rejects tampered, differently signed and expired tokens', () => {
    const result = createPublicExamLink(
      { examConfigId: 'exam-1', version: 1, expiresInSeconds: 60 },
      'test-secret',
      1_000
    );

    expect(verifyPublicExamLink(`${result.token}x`, 'test-secret', 1_001)).toBeNull();
    expect(verifyPublicExamLink(result.token, 'other-secret', 1_001)).toBeNull();
    expect(verifyPublicExamLink(result.token, 'test-secret', 61_000)).toBeNull();
  });
});
