import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Param,
  ParseUUIDPipe,
  Post
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllowAnonymous, Roles, Session } from '@thallesp/nestjs-better-auth';
import { API_VERSION } from '../api/application.js';
import { RequestId } from '../api/request-context.js';
import type { AuthenticatedSession } from '../auth/auth.types.js';
import { DeviceEnrollmentService } from './device-enrollment.service.js';
import { CreateDeviceEnrollmentCodeDto } from './dto/create-enrollment-code.dto.js';
import { EnrollDeviceDto } from './dto/enroll-device.dto.js';

@ApiTags('device-enrollment')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'device-enrollment-codes', version: API_VERSION })
export class DeviceEnrollmentCodesController {
  constructor(
    @Inject(DeviceEnrollmentService)
    private readonly enrollmentService: DeviceEnrollmentService
  ) {}

  @Get()
  @Roles(['admin'])
  @ApiOperation({ summary: 'List device enrollment codes without their one-time secrets' })
  list() {
    return this.enrollmentService.listCodes();
  }

  @Post()
  @Roles(['admin'])
  @ApiOperation({ summary: 'Create a time-limited device enrollment code and partition binding' })
  create(
    @Body() input: CreateDeviceEnrollmentCodeDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.enrollmentService.createCode(input, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Post(':id/revoke')
  @HttpCode(200)
  @Roles(['admin'])
  @ApiOperation({ summary: 'Revoke an unused device enrollment code' })
  revoke(
    @Param('id', ParseUUIDPipe) id: string,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.enrollmentService.revokeCode(id, {
      actorUserId: session.user.id,
      requestId
    });
  }
}

@ApiTags('device-enrollment')
@AllowAnonymous()
@Controller({ path: 'device-enrollments', version: API_VERSION })
export class DeviceEnrollmentsController {
  constructor(
    @Inject(DeviceEnrollmentService)
    private readonly enrollmentService: DeviceEnrollmentService
  ) {}

  @Post()
  @ApiOperation({ summary: 'Exchange an enrollment code for a device identity and credential' })
  enroll(@Body() input: EnrollDeviceDto, @RequestId() requestId: string) {
    return this.enrollmentService.enroll(input, requestId);
  }
}

@ApiTags('device-enrollment')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'devices', version: API_VERSION })
export class DeviceCredentialsController {
  constructor(
    @Inject(DeviceEnrollmentService)
    private readonly enrollmentService: DeviceEnrollmentService
  ) {}

  @Post(':id/credential/rotate')
  @HttpCode(200)
  @Roles(['admin'])
  @ApiOperation({ summary: 'Rotate a device credential and invalidate the previous secret' })
  rotate(
    @Param('id', ParseUUIDPipe) id: string,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.enrollmentService.rotateCredential(id, {
      actorUserId: session.user.id,
      requestId
    });
  }
}
