import { BadRequestException, NotFoundException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';
import type {
  ProctorCallsRepository,
  ProctorCallView
} from '../src/proctor-calls/proctor-calls.repository.js';
import { ProctorCallsService } from '../src/proctor-calls/proctor-calls.service.js';

const deviceId = '4ec566cf-a8ba-45a5-82ad-ed53ae0f7051';
const call: ProctorCallView = {
  id: 'a2c5bd7a-0e29-48cd-9023-1d3722197bf9',
  schoolId: 'default',
  deviceId,
  deviceDisplayName: '第一考场大屏',
  roomNumber: 'A-101',
  message: null,
  occurredAt: new Date('2026-08-05T10:00:00.000Z'),
  receivedAt: new Date('2026-08-05T10:00:01.000Z'),
  acknowledgedAt: null,
  acknowledgedBy: null
};

function createService(overrides: Partial<ProctorCallsRepository> = {}) {
  return new ProctorCallsService(overrides as ProctorCallsRepository);
}

describe('ProctorCallsService', () => {
  it('persists a bounded device call and emits it to connected consoles', async () => {
    const create = vi.fn().mockResolvedValue(call);
    const service = createService({ create } as Partial<ProctorCallsRepository>);
    const eventPromise = firstValueFrom(service.events());

    await expect(
      service.report(deviceId, 'default', {
        occurredAt: '2026-08-05T10:00:00.000Z',
        roomNumber: 'A-101'
      })
    ).resolves.toBe(call);
    await expect(eventPromise).resolves.toEqual({ type: 'proctor-call', data: call });
    expect(create).toHaveBeenCalledWith(deviceId, 'default', {
      occurredAt: '2026-08-05T10:00:00.000Z',
      roomNumber: 'A-101'
    });
  });

  it('rejects invalid or oversized calls before persistence', async () => {
    const create = vi.fn();
    const service = createService({ create } as Partial<ProctorCallsRepository>);

    await expect(
      service.report(deviceId, 'default', {
        occurredAt: 'not-a-time',
        message: 'x'.repeat(501)
      })
    ).rejects.toBeInstanceOf(BadRequestException);
    expect(create).not.toHaveBeenCalled();
  });

  it('acknowledges one pending call and rejects stale acknowledgements', async () => {
    const acknowledge = vi.fn().mockResolvedValueOnce(call).mockResolvedValueOnce(undefined);
    const service = createService({ acknowledge } as Partial<ProctorCallsRepository>);

    await expect(service.acknowledge(call.id, 'operator-id')).resolves.toBe(call);
    await expect(service.acknowledge(call.id, 'operator-id')).rejects.toBeInstanceOf(
      NotFoundException
    );
  });
});
