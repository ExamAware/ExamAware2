import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, ArrayUnique, IsArray, IsUUID } from 'class-validator';

export class ResolveDeviceTargetsDto {
  @ApiProperty({ type: [String], format: 'uuid', maxItems: 100 })
  @IsArray()
  @ArrayMaxSize(100)
  @ArrayUnique()
  @IsUUID(undefined, { each: true })
  deviceIds!: string[];

  @ApiProperty({ type: [String], format: 'uuid', maxItems: 100 })
  @IsArray()
  @ArrayMaxSize(100)
  @ArrayUnique()
  @IsUUID(undefined, { each: true })
  partitionNodeIds!: string[];
}
