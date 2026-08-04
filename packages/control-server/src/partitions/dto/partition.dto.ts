import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Matches,
  Max,
  MaxLength,
  Min
} from 'class-validator';
import type { PartitionMetadata } from '../partition.schema.js';

export class CreatePartitionDimensionDto {
  @ApiProperty({ pattern: '^[a-z][a-z0-9_-]{0,63}$', example: 'location' })
  @IsString()
  @Matches(/^[a-z][a-z0-9_-]{0,63}$/)
  key!: string;

  @ApiProperty({ minLength: 1, maxLength: 100, example: '位置' })
  @IsString()
  @Length(1, 100)
  name!: string;

  @ApiPropertyOptional({ maxLength: 500 })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  allowMultiple?: boolean;
}

class UpdatePartitionDimensionFields {
  @ApiProperty({ minLength: 1, maxLength: 100 })
  @IsString()
  @Length(1, 100)
  name!: string;

  @ApiPropertyOptional({ maxLength: 500, nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string | null;
}

export class UpdatePartitionDimensionDto extends PartialType(UpdatePartitionDimensionFields) {}

export class CreatePartitionNodeDto {
  @ApiPropertyOptional({ format: 'uuid', nullable: true })
  @IsOptional()
  @IsUUID()
  parentId?: string;

  @ApiProperty({ minLength: 1, maxLength: 100 })
  @IsString()
  @Length(1, 100)
  name!: string;

  @ApiPropertyOptional({ maxLength: 500 })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @ApiPropertyOptional({ type: 'object', additionalProperties: true })
  @IsOptional()
  @IsObject()
  metadata?: PartitionMetadata;

  @ApiPropertyOptional({ minimum: -10_000, maximum: 10_000, default: 0 })
  @IsOptional()
  @IsInt()
  @Min(-10_000)
  @Max(10_000)
  sortOrder?: number;
}

class UpdatePartitionNodeFields {
  @ApiProperty({ minLength: 1, maxLength: 100 })
  @IsString()
  @Length(1, 100)
  name!: string;

  @ApiPropertyOptional({ maxLength: 500, nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string | null;

  @ApiPropertyOptional({ type: 'object', additionalProperties: true })
  @IsObject()
  metadata!: PartitionMetadata;

  @ApiPropertyOptional({ minimum: -10_000, maximum: 10_000 })
  @IsInt()
  @Min(-10_000)
  @Max(10_000)
  sortOrder!: number;
}

export class UpdatePartitionNodeDto extends PartialType(UpdatePartitionNodeFields) {}
