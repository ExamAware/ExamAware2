import { Module } from '@nestjs/common';
import { ControlCommandsModule } from '../commands/control-commands.module.js';
import { DevicesModule } from './devices.module.js';
import { DeviceGateway } from './device.gateway.js';

@Module({
  imports: [DevicesModule, ControlCommandsModule],
  providers: [DeviceGateway]
})
export class DeviceGatewayModule {}
