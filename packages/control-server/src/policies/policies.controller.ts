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
  Put
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles, Session } from '@thallesp/nestjs-better-auth';
import { API_VERSION } from '../api/application.js';
import { RequestId } from '../api/request-context.js';
import type { AuthenticatedSession } from '../auth/auth.types.js';
import { CreatePolicyDto, SetPolicyTargetsDto, UpdatePolicyDto } from './dto/policy.dto.js';
import { PoliciesService } from './policies.service.js';

@ApiTags('device-policies')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'device-policies', version: API_VERSION })
export class PoliciesController {
  constructor(@Inject(PoliciesService) private readonly policiesService: PoliciesService) {}

  @Get()
  @Roles(['admin', 'operator', 'viewer'])
  list() {
    return this.policiesService.list();
  }

  @Get(':id')
  @Roles(['admin', 'operator', 'viewer'])
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.policiesService.get(id);
  }

  @Get('effective/:deviceId')
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({
    summary: 'Resolve settings with device over node and child over parent precedence'
  })
  effective(@Param('deviceId', ParseUUIDPipe) deviceId: string) {
    return this.policiesService.effectiveForDevice(deviceId);
  }

  @Post()
  @Roles(['admin'])
  create(
    @Body() input: CreatePolicyDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.policiesService.create(input, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Patch(':id')
  @Roles(['admin'])
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() input: UpdatePolicyDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.policiesService.update(id, input, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Put(':id/targets')
  @Roles(['admin'])
  setTargets(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() input: SetPolicyTargetsDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.policiesService.setTargets(id, input.deviceIds, input.partitionNodeIds, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Delete(':id')
  @Roles(['admin'])
  @HttpCode(204)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    await this.policiesService.remove(id, {
      actorUserId: session.user.id,
      requestId
    });
  }
}
