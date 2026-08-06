import { describe, expect, it } from 'vitest';
import { createExamConfigArtifactBytes } from '../src/exam-configs/exam-config-artifact.js';

describe('exam config artifact serialization', () => {
  it('produces identical bytes and hashes regardless of object key insertion order', () => {
    const first = createExamConfigArtifactBytes({
      examName: 'Finals',
      message: '',
      examInfos: [{ name: 'Math', start: '08:00', end: '09:00', alertTime: 15 }]
    });
    const second = createExamConfigArtifactBytes({
      examInfos: [{ alertTime: 15, end: '09:00', name: 'Math', start: '08:00' }],
      message: '',
      examName: 'Finals'
    });

    expect(first.body.equals(second.body)).toBe(true);
    expect(first.sha256).toBe(second.sha256);
    expect(first.sha256).toMatch(/^[a-f0-9]{64}$/);
  });
});
