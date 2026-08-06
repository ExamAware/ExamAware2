import { IsOptional, IsString, Length } from 'class-validator';
import { PageQueryDto } from '../../api/pagination.dto.js';

export class ListAuditLogsDto extends PageQueryDto {
  @IsOptional()
  @IsString()
  @Length(1, 120)
  action?: string;

  @IsOptional()
  @IsString()
  @Length(1, 120)
  resourceType?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  actor?: string;
}
