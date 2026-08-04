import { Module } from '@nestjs/common';
import { DevicesModule } from '../devices/devices.module.js';
import { DeviceErrorsController } from './device-errors.controller.js';
import { DeviceErrorsRepository } from './device-errors.repository.js';
import { DeviceErrorsService } from './device-errors.service.js';

@Module({
  imports: [DevicesModule],
  controllers: [DeviceErrorsController],
  providers: [DeviceErrorsRepository, DeviceErrorsService]
})
export class DeviceErrorsModule {}
