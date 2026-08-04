import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module.js';
import {
  PartitionDimensionsController,
  PartitionNodesController
} from './partitions.controller.js';
import { PartitionsRepository } from './partitions.repository.js';
import { PartitionsService } from './partitions.service.js';

@Module({
  imports: [AuditModule],
  controllers: [PartitionDimensionsController, PartitionNodesController],
  providers: [PartitionsRepository, PartitionsService],
  exports: [PartitionsRepository]
})
export class PartitionsModule {}
