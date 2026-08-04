import { BadRequestException, Injectable } from '@nestjs/common';
import type { Page } from '../api/pagination.dto.js';
import type { DeviceErrorQueryDto, ReportDeviceErrorDto } from './dto/device-error.dto.js';
import { DeviceErrorsRepository } from './device-errors.repository.js';
import type { DeviceErrorRecord } from './device-errors.repository.js';
import { DEVICE_ERROR_API_CODES } from './device-errors.types.js';
import type { DeviceErrorContext } from './device-errors.types.js';

@Injectable()
export class DeviceErrorsService {
  constructor(private readonly repository: DeviceErrorsRepository) {}

  report(deviceId: string, input: ReportDeviceErrorDto): Promise<DeviceErrorRecord> {
    this.assertContext(input.context);
    return this.repository.create(deviceId, input);
  }

  async list(query: DeviceErrorQueryDto): Promise<Page<DeviceErrorRecord>> {
    const result = await this.repository.list(query.page, query.pageSize, {
      deviceId: query.deviceId,
      severity: query.severity
    });
    return {
      items: result.records,
      page: query.page,
      pageSize: query.pageSize,
      total: result.total
    };
  }

  private assertContext(context: DeviceErrorContext): void {
    const entries = Object.entries(context);
    const valid =
      entries.length <= 20 &&
      entries.every(
        ([key, value]) =>
          key.length > 0 &&
          key.length <= 100 &&
          (value === null ||
            typeof value === 'boolean' ||
            (typeof value === 'number' && Number.isFinite(value)) ||
            (typeof value === 'string' && value.length <= 1000))
      );
    if (!valid) {
      throw new BadRequestException({
        code: DEVICE_ERROR_API_CODES.invalidContext,
        message: 'Error context accepts at most 20 short primitive fields'
      });
    }
  }
}
