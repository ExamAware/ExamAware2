import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module.js';
import { PartitionsModule } from '../partitions/partitions.module.js';
import { DeviceConnectionsService } from './device-connections.service.js';
import { DevicesController } from './devices.controller.js';
import {
  DeviceCredentialsController,
  DeviceEnrollmentCodesController,
  DeviceEnrollmentsController
} from './device-enrollment.controller.js';
import { DeviceEnrollmentRepository } from './device-enrollment.repository.js';
import { DeviceEnrollmentService } from './device-enrollment.service.js';
import { DevicesRepository } from './devices.repository.js';
import { DevicesService } from './devices.service.js';

@Module({
  imports: [AuditModule, PartitionsModule],
  controllers: [
    DevicesController,
    DeviceEnrollmentCodesController,
    DeviceEnrollmentsController,
    DeviceCredentialsController
  ],
  providers: [
    DevicesRepository,
    DevicesService,
    DeviceEnrollmentRepository,
    DeviceConnectionsService,
    DeviceEnrollmentService
  ],
  exports: [DevicesRepository, DevicesService, DeviceEnrollmentService, DeviceConnectionsService]
})
export class DevicesModule {}
