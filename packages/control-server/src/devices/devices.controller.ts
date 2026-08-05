import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles, Session } from '@thallesp/nestjs-better-auth';
import { API_VERSION } from '../api/application.js';
import { RequestId } from '../api/request-context.js';
import type { AuthenticatedSession } from '../auth/auth.types.js';
import { ListDevicesQueryDto } from './dto/list-devices.dto.js';
import { SetDevicePartitionsDto } from './dto/set-device-partitions.dto.js';
import { ResolveDeviceTargetsDto } from './dto/resolve-device-targets.dto.js';
import { UpdateDeviceDto } from './dto/update-device.dto.js';
import { DevicesService } from './devices.service.js';

@ApiTags('devices')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'devices', version: API_VERSION })
export class DevicesController {
  constructor(@Inject(DevicesService) private readonly devicesService: DevicesService) {}

  @Get()
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({ summary: 'List enrolled devices' })
  list(@Query() query: ListDevicesQueryDto) {
    return this.devicesService.list(query.page, query.pageSize, query.partitionId);
  }

  @Post('resolve-targets')
  @HttpCode(200)
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({ summary: 'Resolve direct devices and partition trees to a device snapshot' })
  resolveTargets(@Body() input: ResolveDeviceTargetsDto) {
    return this.devicesService.resolveTargets(input.deviceIds, input.partitionNodeIds);
  }

  @Get(':id')
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({ summary: 'Get one enrolled device' })
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.devicesService.get(id);
  }

  @Patch(':id')
  @Roles(['admin'])
  @ApiOperation({ summary: 'Update administrative device metadata' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() patch: UpdateDeviceDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.devicesService.update(id, patch, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Put(':id/partitions')
  @Roles(['admin'])
  @ApiOperation({ summary: 'Replace all managed partition assignments for a device' })
  setPartitions(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() input: SetDevicePartitionsDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.devicesService.setPartitions(id, input.nodeIds, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Post(':id/revoke')
  @HttpCode(200)
  @Roles(['admin'])
  @ApiOperation({ summary: 'Revoke an enrolled device' })
  revoke(
    @Param('id', ParseUUIDPipe) id: string,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.devicesService.revoke(id, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Delete(':id')
  @HttpCode(204)
  @Roles(['admin'])
  @ApiOperation({ summary: 'Permanently remove a revoked device from active management' })
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    await this.devicesService.remove(id, {
      actorUserId: session.user.id,
      requestId
    });
  }
}
