import { Module } from '@nestjs/common';
import { DevicesModule } from '../devices/devices.module.js';
import { ProctorCallsController } from './proctor-calls.controller.js';
import { ProctorCallsRepository } from './proctor-calls.repository.js';
import { ProctorCallsService } from './proctor-calls.service.js';

@Module({
  imports: [DevicesModule],
  controllers: [ProctorCallsController],
  providers: [ProctorCallsRepository, ProctorCallsService]
})
export class ProctorCallsModule {}
