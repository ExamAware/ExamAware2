import { Module } from '@nestjs/common';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './auth/auth.js';
import { UsersModule } from './auth/users.module.js';
import { ControlCommandsModule } from './commands/control-commands.module.js';
import { DatabaseModule } from './database/database.module.js';
import { DeviceErrorsModule } from './device-errors/device-errors.module.js';
import { DevicesModule } from './devices/devices.module.js';
import { DeviceGatewayModule } from './devices/device-gateway.module.js';
import { ExamConfigsModule } from './exam-configs/exam-configs.module.js';
import { HealthModule } from './health/health.module.js';
import { PartitionsModule } from './partitions/partitions.module.js';
import { PoliciesModule } from './policies/policies.module.js';
import { ProctorCallsModule } from './proctor-calls/proctor-calls.module.js';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule.forRoot({ auth }),
    HealthModule,
    PartitionsModule,
    DevicesModule,
    ControlCommandsModule,
    DeviceGatewayModule,
    DeviceErrorsModule,
    PoliciesModule,
    ExamConfigsModule,
    ProctorCallsModule
  ]
})
export class AppModule {}
