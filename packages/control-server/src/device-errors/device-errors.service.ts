import { BadRequestException, Injectable } from '@nestjs/common';
import { deviceErrorReportSchema } from '@dsz-examaware/control-protocol';
import type { Page } from '../api/pagination.dto.js';
import type { DeviceErrorQueryDto } from './dto/device-error.dto.js';
import { DeviceErrorsRepository } from './device-errors.repository.js';
import type { DeviceErrorRecord } from './device-errors.repository.js';
import { DEVICE_ERROR_API_CODES } from './device-errors.types.js';

@Injectable()
export class DeviceErrorsService {
  constructor(private readonly repository: DeviceErrorsRepository) {}

  report(deviceId: string, input: unknown): Promise<DeviceErrorRecord> {
    const parsed = deviceErrorReportSchema.safeParse(input);
    if (!parsed.success) {
      throw new BadRequestException({
        code: DEVICE_ERROR_API_CODES.invalidReport,
        message: 'Device error report does not match the shared protocol',
        errors: parsed.error.issues
      });
    }
    return this.repository.create(deviceId, parsed.data);
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
}
