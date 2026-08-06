import { IsISO8601, IsOptional, IsString, Length, MaxLength } from 'class-validator';

export class ReportProctorCallDto {
  @IsISO8601({ strict: true })
  occurredAt!: string;

  @IsOptional()
  @IsString()
  @Length(1, 20)
  roomNumber?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  message?: string;
}
