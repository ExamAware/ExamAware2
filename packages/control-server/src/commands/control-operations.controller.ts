import { Body, Controller, Inject, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles, Session } from '@thallesp/nestjs-better-auth';
import { API_VERSION } from '../api/application.js';
import { RequestId } from '../api/request-context.js';
import type { AuthenticatedSession } from '../auth/auth.types.js';
import { ControlOperationsService } from './control-operations.service.js';
import {
  ActivateExamDeploymentDto,
  ApplyManagedSettingsDto,
  DismissBroadcastDto,
  PrepareExamDeploymentDto,
  ShowBroadcastDto,
  StopExamDeploymentDto
} from './dto/control-operation.dto.js';

@ApiTags('exam-deployments')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'exam-deployments', version: API_VERSION })
export class ExamDeploymentsController {
  constructor(
    @Inject(ControlOperationsService)
    private readonly operationsService: ControlOperationsService
  ) {}

  @Post()
  @Roles(['admin', 'operator'])
  @ApiOperation({ summary: 'Prepare an immutable exam config on a fixed target snapshot' })
  prepare(
    @Body() input: PrepareExamDeploymentDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.operationsService.prepareExam(input, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Post(':id/activate')
  @Roles(['admin', 'operator'])
  @ApiOperation({ summary: 'Activate an exam only on devices that prepared it successfully' })
  activate(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() input: ActivateExamDeploymentDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.operationsService.activateExam(id, input, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Post(':id/stop')
  @Roles(['admin', 'operator'])
  @ApiOperation({ summary: 'Stop playback on the deployment target snapshot' })
  stop(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() input: StopExamDeploymentDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.operationsService.stopExam(id, input, {
      actorUserId: session.user.id,
      requestId
    });
  }
}

@ApiTags('broadcasts')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'broadcasts', version: API_VERSION })
export class BroadcastsController {
  constructor(
    @Inject(ControlOperationsService)
    private readonly operationsService: ControlOperationsService
  ) {}

  @Post()
  @Roles(['admin', 'operator'])
  @ApiOperation({ summary: 'Show a time-limited broadcast on a fixed target snapshot' })
  show(
    @Body() input: ShowBroadcastDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.operationsService.showBroadcast(input, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Post('dismiss')
  @Roles(['admin', 'operator'])
  @ApiOperation({ summary: 'Dismiss a broadcast on selected devices' })
  dismiss(
    @Body() input: DismissBroadcastDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.operationsService.dismissBroadcast(input, {
      actorUserId: session.user.id,
      requestId
    });
  }
}

@ApiTags('managed-settings')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'managed-settings', version: API_VERSION })
export class ManagedSettingsController {
  constructor(
    @Inject(ControlOperationsService)
    private readonly operationsService: ControlOperationsService
  ) {}

  @Post('commands')
  @Roles(['admin'])
  @ApiOperation({ summary: 'Apply settings from the shared managed-setting allowlist' })
  apply(
    @Body() input: ApplyManagedSettingsDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.operationsService.applySettings(input, {
      actorUserId: session.user.id,
      requestId
    });
  }
}
