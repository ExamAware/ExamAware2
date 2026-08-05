import type { ExamConfig } from '@dsz-examaware/core';
import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  ArrayUnique,
  IsArray,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Length
} from 'class-validator';

export class CreateExamConfigDto {
  @ApiProperty({ minLength: 1, maxLength: 200 })
  @IsString()
  @Length(1, 200)
  name!: string;

  @ApiProperty({ type: 'object', additionalProperties: true })
  @IsObject()
  content!: ExamConfig;
}

export class ImportExamConfigDto {
  @ApiProperty({ minLength: 1, maxLength: 200 })
  @IsString()
  @Length(1, 200)
  name!: string;
}

export class CreateExamConfigVersionDto {
  @ApiProperty({ type: 'object', additionalProperties: true })
  @IsObject()
  content!: ExamConfig;
}

export class UpdateExamConfigDto {
  @IsOptional()
  @IsString()
  @Length(1, 200)
  name?: string;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(100)
  @ArrayUnique()
  @IsUUID('4', { each: true })
  assignedDeviceIds?: string[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(100)
  @ArrayUnique()
  @IsUUID('4', { each: true })
  assignedPartitionNodeIds?: string[];
}
