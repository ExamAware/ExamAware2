import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';
import { PageQueryDto } from '../../api/pagination.dto.js';

export class ListDevicesQueryDto extends PageQueryDto {
  @ApiPropertyOptional({
    format: 'uuid',
    description: 'Return devices assigned to this partition node or any descendant node'
  })
  @IsOptional()
  @IsUUID()
  partitionId?: string;
}
