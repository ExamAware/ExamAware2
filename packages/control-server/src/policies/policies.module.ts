import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module.js';
import { ControlCommandsModule } from '../commands/control-commands.module.js';
import { DevicesModule } from '../devices/devices.module.js';
import { PartitionsModule } from '../partitions/partitions.module.js';
import { PoliciesController } from './policies.controller.js';
import { PoliciesRepository } from './policies.repository.js';
import { PoliciesService } from './policies.service.js';

@Module({
  imports: [AuditModule, ControlCommandsModule, DevicesModule, PartitionsModule],
  controllers: [PoliciesController],
  providers: [PoliciesRepository, PoliciesService],
  exports: [PoliciesService]
})
export class PoliciesModule {}
