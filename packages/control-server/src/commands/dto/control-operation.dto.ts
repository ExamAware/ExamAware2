import { BROADCAST_SEVERITY_VALUES } from '@dsz-examaware/control-protocol';
import type { ManagedSetting } from '@dsz-examaware/control-protocol';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsIn,
  IsInt,
  IsISO8601,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested
} from 'class-validator';

export class CommandTargetsDto {
  @IsArray()
  @ArrayMaxSize(100)
  @IsUUID('4', { each: true })
  deviceIds: string[] = [];

  @IsArray()
  @ArrayMaxSize(100)
  @IsUUID('4', { each: true })
  partitionNodeIds: string[] = [];
}

class TargetedCommandDto {
  @ValidateNested()
  @Type(() => CommandTargetsDto)
  targets!: CommandTargetsDto;

  @IsOptional()
  @IsInt()
  @Min(5)
  @Max(86_400)
  expiresInSeconds = 300;
}

export class PrepareExamDeploymentDto extends TargetedCommandDto {
  @IsUUID('4')
  examConfigId!: string;

  @IsInt()
  @Min(1)
  version!: number;
}

export class ActivateExamDeploymentDto {
  @IsOptional()
  @IsISO8601({ strict: true })
  activateAt?: string;

  @IsOptional()
  @IsInt()
  @Min(5)
  @Max(86_400)
  expiresInSeconds = 300;
}

export class StopExamDeploymentDto {
  @IsOptional()
  @IsString()
  @MaxLength(500)
  reason?: string;

  @IsOptional()
  @IsInt()
  @Min(5)
  @Max(86_400)
  expiresInSeconds = 300;
}

export class ShowBroadcastDto extends TargetedCommandDto {
  @IsString()
  @MinLength(1)
  @MaxLength(120)
  title!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(2000)
  body!: string;

  @IsIn(BROADCAST_SEVERITY_VALUES)
  severity!: (typeof BROADCAST_SEVERITY_VALUES)[number];
}

export class DismissBroadcastDto extends TargetedCommandDto {
  @IsUUID('4')
  broadcastId!: string;
}

export class ApplyManagedSettingsDto extends TargetedCommandDto {
  @IsArray()
  @ArrayMaxSize(20)
  settings!: ManagedSetting[];
}
