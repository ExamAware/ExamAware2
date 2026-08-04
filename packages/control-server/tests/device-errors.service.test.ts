import { BadRequestException } from '@nestjs/common';
import { DEVICE_ERROR_SEVERITY, createDeviceErrorReport } from '@dsz-examaware/control-protocol';
import { describe, expect, it, vi } from 'vitest';
import type {
  DeviceErrorRecord,
  DeviceErrorsRepository
} from '../src/device-errors/device-errors.repository.js';
import { DeviceErrorsService } from '../src/device-errors/device-errors.service.js';
import type { ReportDeviceErrorDto } from '../src/device-errors/dto/device-error.dto.js';

const deviceId = '4ec566cf-a8ba-45a5-82ad-ed53ae0f7051';
const input: ReportDeviceErrorDto = createDeviceErrorReport({
  severity: DEVICE_ERROR_SEVERITY.error,
  source: 'control-agent',
  code: 'download_failed',
  message: 'The exam artifact could not be downloaded',
  stack: 'Error: download failed',
  context: { attempt: 2, cached: false },
  occurredAt: '2026-08-04T12:00:00.000Z'
});
const record: DeviceErrorRecord = {
  id: 'a2c5bd7a-0e29-48cd-9023-1d3722197bf9',
  deviceId,
  severity: input.severity,
  source: input.source,
  code: input.code ?? null,
  message: input.message,
  stack: input.stack ?? null,
  context: input.context,
  occurredAt: new Date(input.occurredAt),
  receivedAt: new Date('2026-08-04T12:00:01.000Z')
};

describe('DeviceErrorsService', () => {
  it('persists a bounded structured device error', async () => {
    const create = vi.fn().mockResolvedValue(record);
    const service = new DeviceErrorsService({ create } as unknown as DeviceErrorsRepository);

    await expect(service.report(deviceId, input)).resolves.toBe(record);
    expect(create).toHaveBeenCalledWith(deviceId, input);
  });

  it('rejects nested or unbounded context values', () => {
    const create = vi.fn();
    const service = new DeviceErrorsService({ create } as unknown as DeviceErrorsRepository);
    const invalidInput = {
      ...input,
      context: { nested: { arbitrary: 'object' } }
    } as unknown as ReportDeviceErrorDto;

    expect(() => service.report(deviceId, invalidInput)).toThrow(BadRequestException);
    expect(create).not.toHaveBeenCalled();
  });
  it('returns stable pagination metadata with device and severity filters', async () => {
    const list = vi.fn().mockResolvedValue({ records: [record], total: 1 });
    const service = new DeviceErrorsService({ list } as unknown as DeviceErrorsRepository);

    await expect(
      service.list({
        page: 2,
        pageSize: 25,
        deviceId,
        severity: DEVICE_ERROR_SEVERITY.error
      })
    ).resolves.toEqual({ items: [record], page: 2, pageSize: 25, total: 1 });
    expect(list).toHaveBeenCalledWith(2, 25, {
      deviceId,
      severity: DEVICE_ERROR_SEVERITY.error
    });
  });
});
