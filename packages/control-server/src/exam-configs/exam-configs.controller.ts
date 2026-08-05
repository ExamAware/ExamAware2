import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles, Session } from '@thallesp/nestjs-better-auth';
import { FileInterceptor } from '@nestjs/platform-express';
import { API_VERSION } from '../api/application.js';
import { PageQueryDto } from '../api/pagination.dto.js';
import { RequestId } from '../api/request-context.js';
import type { AuthenticatedSession } from '../auth/auth.types.js';
import {
  CreateExamConfigDto,
  CreateExamConfigVersionDto,
  ImportExamConfigDto,
  UpdateExamConfigDto
} from './dto/exam-config.dto.js';
import { ExamConfigsService } from './exam-configs.service.js';

interface Ea2Upload {
  originalname: string;
  buffer: Buffer;
}

const EA2_UPLOAD_OPTIONS = { limits: { fileSize: 10 * 1024 * 1024, files: 1 } };

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

  @Post('import')
  @Roles(['admin', 'operator'])
  @UseInterceptors(FileInterceptor('file', EA2_UPLOAD_OPTIONS))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ['name', 'file'],
      properties: {
        name: { type: 'string', minLength: 1, maxLength: 200 },
        file: { type: 'string', format: 'binary' }
      }
    }
  })
  @ApiOperation({ summary: 'Create an exam by uploading a validated .ea2 artifact' })
  import(
    @Body() input: ImportExamConfigDto,
    @UploadedFile() file: Ea2Upload | undefined,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.examConfigsService.createFromEa2(input.name, requireEa2(file).buffer, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Patch(':id')
  @Roles(['admin', 'operator'])
  @ApiOperation({ summary: 'Update exam metadata and assignments' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() input: UpdateExamConfigDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.examConfigsService.update(id, input, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Delete(':id')
  @Roles(['admin', 'operator'])
  @HttpCode(204)
  @ApiOperation({ summary: 'Archive an exam that is not in progress' })
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    await this.examConfigsService.remove(id, {
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

  @Post(':id/versions/import')
  @Roles(['admin', 'operator'])
  @UseInterceptors(FileInterceptor('file', EA2_UPLOAD_OPTIONS))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ['file'],
      properties: { file: { type: 'string', format: 'binary' } }
    }
  })
  @ApiOperation({ summary: 'Append a version by uploading a validated .ea2 artifact' })
  importVersion(
    @Param('id', ParseUUIDPipe) id: string,
    @UploadedFile() file: Ea2Upload | undefined,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.examConfigsService.createVersionFromEa2(id, requireEa2(file).buffer, {
      actorUserId: session.user.id,
      requestId
    });
  }
}

function requireEa2(file: Ea2Upload | undefined): Ea2Upload {
  if (!file || !/\.ea2$/i.test(file.originalname)) {
    throw new BadRequestException({
      code: 'invalid_exam_config_file',
      message: 'A .ea2 file is required'
    });
  }
  return file;
}
