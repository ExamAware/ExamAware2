import { Controller, Get, Inject, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from '@thallesp/nestjs-better-auth';
import { API_VERSION } from '../api/application.js';
import { PageQueryDto } from '../api/pagination.dto.js';
import { ControlCommandsService } from './control-commands.service.js';

@ApiTags('control-commands')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'control-commands', version: API_VERSION })
export class ControlCommandsController {
  constructor(
    @Inject(ControlCommandsService)
    private readonly commandsService: ControlCommandsService
  ) {}

  @Get()
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({ summary: 'List persisted control commands and per-device progress' })
  list(@Query() query: PageQueryDto) {
    return this.commandsService.list(query.page, query.pageSize);
  }

  @Get(':id')
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({ summary: 'Get one command and its per-device state machine' })
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandsService.get(id);
  }
}
