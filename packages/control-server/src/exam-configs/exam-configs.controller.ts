import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles, Session } from '@thallesp/nestjs-better-auth';
import { API_VERSION } from '../api/application.js';
import { PageQueryDto } from '../api/pagination.dto.js';
import { RequestId } from '../api/request-context.js';
import type { AuthenticatedSession } from '../auth/auth.types.js';
import { CreateExamConfigDto, CreateExamConfigVersionDto } from './dto/exam-config.dto.js';
import { ExamConfigsService } from './exam-configs.service.js';

@ApiTags('exam-configs')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'exam-configs', version: API_VERSION })
export class ExamConfigsController {
  constructor(
    @Inject(ExamConfigsService) private readonly examConfigsService: ExamConfigsService
  ) {}

  @Get()
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({ summary: 'List immutable exam configuration resources' })
  list(@Query() query: PageQueryDto) {
    return this.examConfigsService.list(query.page, query.pageSize);
  }

  @Get(':id')
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({ summary: 'Get an exam configuration and its latest version' })
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.examConfigsService.get(id);
  }

  @Get(':id/versions/:version')
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({ summary: 'Get one immutable exam configuration version' })
  getVersion(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('version', ParseIntPipe) version: number
  ) {
    return this.examConfigsService.getVersion(id, version);
  }

  @Post()
  @Roles(['admin', 'operator'])
  @ApiOperation({ summary: 'Create an exam configuration with version 1' })
  create(
    @Body() input: CreateExamConfigDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.examConfigsService.create(input.name, input.content, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Post(':id/versions')
  @Roles(['admin', 'operator'])
  @ApiOperation({ summary: 'Append an immutable exam configuration version' })
  createVersion(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() input: CreateExamConfigVersionDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.examConfigsService.createVersion(id, input.content, {
      actorUserId: session.user.id,
      requestId
    });
  }
}
