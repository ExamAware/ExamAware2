import type { ManagedSetting } from '@dsz-examaware/control-protocol';
import {
  ArrayMaxSize,
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Max,
  Min
} from 'class-validator';

export class CreatePolicyDto {
  @IsString()
  @Length(1, 120)
  name!: string;

  @IsOptional()
  @IsString()
  @Length(0, 500)
  description = '';

  @IsInt()
  @Min(0)
  @Max(10_000)
  priority = 100;

  @IsBoolean()
  enabled = true;

  @IsArray()
  @ArrayMaxSize(20)
  @IsObject({ each: true })
  settings!: ManagedSetting[];
}

export class UpdatePolicyDto {
  @IsOptional()
  @IsString()
  @Length(1, 120)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(0, 500)
  description?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(10_000)
  priority?: number;

  @IsOptional()
  @IsBoolean()
  enabled?: boolean;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(20)
  @IsObject({ each: true })
  settings?: ManagedSetting[];
}

export class SetPolicyTargetsDto {
  @IsArray()
  @ArrayMaxSize(100)
  @ArrayUnique()
  @IsUUID('4', { each: true })
  deviceIds!: string[];

  @IsArray()
  @ArrayMaxSize(100)
  @ArrayUnique()
  @IsUUID('4', { each: true })
  partitionNodeIds!: string[];
}
