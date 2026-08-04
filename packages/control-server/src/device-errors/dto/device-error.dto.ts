import { DEVICE_ERROR_SEVERITY_VALUES } from '@dsz-examaware/control-protocol';
import type { DeviceErrorContext, DeviceErrorReport } from '@dsz-examaware/control-protocol';
import {
  IsIn,
  IsISO8601,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength
} from 'class-validator';
import { PageQueryDto } from '../../api/pagination.dto.js';

export class ReportDeviceErrorDto {
  @IsIn(DEVICE_ERROR_SEVERITY_VALUES)
  severity!: DeviceErrorReport['severity'];

  @IsString()
  @MaxLength(120)
  source!: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  code?: string;

  @IsString()
  @MaxLength(4000)
  message!: string;

  @IsOptional()
  @IsString()
  @MaxLength(20_000)
  stack?: string;

  @IsOptional()
  @IsObject()
  context: DeviceErrorContext = {};

  @IsISO8601({ strict: true })
  occurredAt!: string;
}

export class DeviceErrorQueryDto extends PageQueryDto {
  @IsOptional()
  @IsUUID('4')
  deviceId?: string;

  @IsOptional()
  @IsIn(DEVICE_ERROR_SEVERITY_VALUES)
  severity?: DeviceErrorReport['severity'];
}
