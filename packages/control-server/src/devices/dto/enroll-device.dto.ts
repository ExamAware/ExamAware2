import {
  CONTROL_PROTOCOL_VERSION,
  DEVICE_ARCHITECTURE_VALUES,
  DEVICE_ENROLLMENT_CODE_PATTERN,
  DEVICE_PLATFORM_VALUES
} from '@dsz-examaware/control-protocol';
import { Equals, IsIn, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class EnrollDeviceDto {
  @IsString()
  @Matches(DEVICE_ENROLLMENT_CODE_PATTERN)
  enrollmentCode!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(120)
  displayName!: string;

  @IsIn(DEVICE_PLATFORM_VALUES)
  platform!: (typeof DEVICE_PLATFORM_VALUES)[number];

  @IsIn(DEVICE_ARCHITECTURE_VALUES)
  architecture!: (typeof DEVICE_ARCHITECTURE_VALUES)[number];

  @IsString()
  @MinLength(1)
  @MaxLength(64)
  appVersion!: string;

  @Equals(CONTROL_PROTOCOL_VERSION)
  protocolVersion!: typeof CONTROL_PROTOCOL_VERSION;
}
