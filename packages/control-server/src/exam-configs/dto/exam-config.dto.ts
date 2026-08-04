import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString, Length } from 'class-validator';

export class CreateExamConfigDto {
  @ApiProperty({ minLength: 1, maxLength: 200 })
  @IsString()
  @Length(1, 200)
  name!: string;

  @ApiProperty({ type: 'object', additionalProperties: true })
  @IsObject()
  content!: Record<string, unknown>;
}

export class CreateExamConfigVersionDto {
  @ApiProperty({ type: 'object', additionalProperties: true })
  @IsObject()
  content!: Record<string, unknown>;
}
