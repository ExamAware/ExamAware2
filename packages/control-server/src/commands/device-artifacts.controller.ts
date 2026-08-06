import {
  Controller,
  Get,
  Headers,
  Inject,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Query,
  Res,
  StreamableFile,
  UnauthorizedException
} from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import { DEVICE_AUTH_ERROR_CODES, DEVICE_AUTH_HEADERS } from '../devices/device-auth.constants.js';
import type { Response } from 'express';
import { API_VERSION } from '../api/application.js';
import { DeviceEnrollmentService } from '../devices/device-enrollment.service.js';
import { ControlOperationsService } from './control-operations.service.js';

@ApiTags('device-artifacts')
@Controller({ path: 'device-artifacts', version: API_VERSION })
export class DeviceArtifactsController {
  constructor(
    @Inject(DeviceEnrollmentService)
    private readonly enrollmentService: DeviceEnrollmentService,
    @Inject(ControlOperationsService)
    private readonly operationsService: ControlOperationsService
  ) {}

  @Get('exam-configs/:examConfigId/versions/:version')
  @AllowAnonymous()
  @ApiHeader({ name: DEVICE_AUTH_HEADERS.id, required: true })
  @ApiHeader({ name: DEVICE_AUTH_HEADERS.credential, required: true })
  @ApiOperation({ summary: 'Download a deployment-scoped immutable exam config artifact' })
  async examConfig(
    @Param('examConfigId', ParseUUIDPipe) examConfigId: string,
    @Param('version', ParseIntPipe) version: number,
    @Query('deploymentId', ParseUUIDPipe) deploymentId: string,
    @Headers(DEVICE_AUTH_HEADERS.id) deviceId: string | undefined,
    @Headers(DEVICE_AUTH_HEADERS.credential) credential: string | undefined,
    @Res({ passthrough: true }) response: Response
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
    const artifact = await this.operationsService.readExamArtifact(
      deploymentId,
      device.id,
      examConfigId,
      version
    );
    response.set({
      'Content-Type': artifact.mediaType,
      'Content-Length': artifact.body.byteLength.toString(),
      'Cache-Control': 'private, no-cache',
      ETag: `"sha256-${artifact.sha256}"`,
      'X-Content-SHA256': artifact.sha256
    });
    return new StreamableFile(artifact.body);
  }
}
