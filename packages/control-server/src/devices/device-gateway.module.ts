import { Module } from '@nestjs/common';
import { ControlCommandsModule } from '../commands/control-commands.module.js';
import { PoliciesModule } from '../policies/policies.module.js';
import { DevicesModule } from './devices.module.js';
import { DeviceGateway } from './device.gateway.js';

@Module({
  imports: [DevicesModule, ControlCommandsModule, PoliciesModule],
  providers: [DeviceGateway]
})
export class DeviceGatewayModule {}
