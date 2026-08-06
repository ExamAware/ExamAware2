import {
  Body,
  Controller,
  Get,
  Headers,
  Inject,
  Post,
  Query,
  UnauthorizedException
} from '@nestjs/common';
import { ApiCookieAuth, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllowAnonymous, Roles } from '@thallesp/nestjs-better-auth';
import { API_VERSION } from '../api/application.js';
import { DEVICE_AUTH_ERROR_CODES, DEVICE_AUTH_HEADERS } from '../devices/device-auth.constants.js';
import { DeviceEnrollmentService } from '../devices/device-enrollment.service.js';
import { DeviceErrorsService } from './device-errors.service.js';
import { DeviceErrorQueryDto, ReportDeviceErrorDto } from './dto/device-error.dto.js';

@ApiTags('device-errors')
@Controller({ path: 'device-errors', version: API_VERSION })
export class DeviceErrorsController {
  constructor(
    @Inject(DeviceEnrollmentService)
    private readonly enrollmentService: DeviceEnrollmentService,
    @Inject(DeviceErrorsService)
    private readonly errorsService: DeviceErrorsService
  ) {}

  @Post()
  @AllowAnonymous()
  @ApiHeader({ name: DEVICE_AUTH_HEADERS.id, required: true })
  @ApiHeader({ name: DEVICE_AUTH_HEADERS.credential, required: true })
  @ApiOperation({ summary: 'Report one bounded structured client error' })
  async report(
    @Body() input: ReportDeviceErrorDto,
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
    return this.errorsService.report(device.id, input);
  }

  @Get()
  @Roles(['admin', 'operator', 'viewer'])
  @ApiCookieAuth('better-auth.session_token')
  @ApiOperation({ summary: 'List client errors with device and severity filters' })
  list(@Query() query: DeviceErrorQueryDto) {
    return this.errorsService.list(query);
  }
}
