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
  Query
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles, Session } from '@thallesp/nestjs-better-auth';
import { API_VERSION } from '../api/application.js';
import { RequestId } from '../api/request-context.js';
import type { AuthenticatedSession } from './auth.types.js';
import {
  BatchCreateUsersDto,
  CreateUserDto,
  ListUsersDto,
  UpdateUserDto
} from './dto/users.dto.js';
import { UsersService } from './users.service.js';

@ApiTags('users')
@ApiCookieAuth('better-auth.session_token')
@Roles(['admin'])
@Controller({ path: 'users', version: API_VERSION })
export class UsersController {
  constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'List local username accounts' })
  list(@Query() query: ListUsersDto) {
    return this.usersService.list(query.page, query.pageSize, query.search, query.role);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one local account' })
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.get(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create one local username account' })
  create(
    @Body() input: CreateUserDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.usersService.create(input, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Post('batch')
  @ApiOperation({ summary: 'Create, replace or skip username accounts in one batch' })
  createMany(
    @Body() input: BatchCreateUsersDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.usersService.createMany(input.usernames, input.role, input.existingUserMode, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update username, display name, role or disabled state' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() input: UpdateUserDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.usersService.update(id, input, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Post(':id/reset-password')
  @HttpCode(200)
  @ApiOperation({ summary: 'Reset a local account password and return it once' })
  resetPassword(
    @Param('id', ParseUUIDPipe) id: string,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.usersService.resetPassword(id, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a local account' })
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    await this.usersService.remove(id, {
      actorUserId: session.user.id,
      requestId
    });
  }
}
