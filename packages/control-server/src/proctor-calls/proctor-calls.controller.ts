import {
  Body,
  Controller,
  Get,
  Headers,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  Sse,
  UnauthorizedException
} from '@nestjs/common';
import { ApiCookieAuth, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllowAnonymous, Roles, Session } from '@thallesp/nestjs-better-auth';
import type { AuthenticatedSession } from '../auth/auth.types.js';
import { API_VERSION } from '../api/application.js';
import { PageQueryDto } from '../api/pagination.dto.js';
import { DEVICE_AUTH_ERROR_CODES, DEVICE_AUTH_HEADERS } from '../devices/device-auth.constants.js';
import { DeviceEnrollmentService } from '../devices/device-enrollment.service.js';
import { ReportProctorCallDto } from './dto/proctor-call.dto.js';
import { ProctorCallsService } from './proctor-calls.service.js';

@ApiTags('proctor-calls')
@Controller({ path: 'proctor-calls', version: API_VERSION })
export class ProctorCallsController {
  constructor(
    @Inject(DeviceEnrollmentService)
    private readonly enrollmentService: DeviceEnrollmentService,
    @Inject(ProctorCallsService)
    private readonly proctorCallsService: ProctorCallsService
  ) {}

  @Post()
  @AllowAnonymous()
  @ApiHeader({ name: DEVICE_AUTH_HEADERS.id, required: true })
  @ApiHeader({ name: DEVICE_AUTH_HEADERS.credential, required: true })
  @ApiOperation({ summary: 'Call a proctor from one enrolled exam-room device' })
  async report(
    @Body() input: ReportProctorCallDto,
    @Headers(DEVICE_AUTH_HEADERS.id) deviceId: string | undefined,
    @Headers(DEVICE_AUTH_HEADERS.credential) credential: string | undefined
  ) {
    if (!deviceId || !credential) {
      throw new UnauthorizedException({
        code: DEVICE_AUTH_ERROR_CODES.credentialRequired,
        message: 'Device ID and credential headers are required'
      });
    }
    const device = await this.enrollmentService.authenticate(deviceId, credential);
    if (!device) {
      throw new UnauthorizedException({
        code: DEVICE_AUTH_ERROR_CODES.invalidCredential,
        message: 'Device ID or credential is invalid or revoked'
      });
    }
    return this.proctorCallsService.report(device.id, device.schoolId, input);
  }

  @Get()
  @Roles(['admin', 'operator', 'viewer'])
  @ApiCookieAuth('better-auth.session_token')
  @ApiOperation({ summary: 'List unacknowledged proctor calls' })
  list(@Query() query: PageQueryDto) {
    return this.proctorCallsService.listPending(query.page, query.pageSize);
  }

  @Sse('events')
  @Roles(['admin', 'operator', 'viewer'])
  @ApiCookieAuth('better-auth.session_token')
  @ApiOperation({ summary: 'Stream newly reported proctor calls' })
  events() {
    return this.proctorCallsService.events();
  }

  @Post(':id/acknowledge')
  @Roles(['admin', 'operator'])
  @ApiCookieAuth('better-auth.session_token')
  @ApiOperation({ summary: 'Acknowledge one proctor call' })
  acknowledge(@Param('id', ParseUUIDPipe) id: string, @Session() session: AuthenticatedSession) {
    return this.proctorCallsService.acknowledge(id, session.user.id);
  }
}
