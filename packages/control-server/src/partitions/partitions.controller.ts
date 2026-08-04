import { Body, Controller, Get, Inject, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles, Session } from '@thallesp/nestjs-better-auth';
import { API_VERSION } from '../api/application.js';
import { RequestId } from '../api/request-context.js';
import type { AuthenticatedSession } from '../auth/auth.types.js';
import {
  CreatePartitionDimensionDto,
  CreatePartitionNodeDto,
  UpdatePartitionDimensionDto,
  UpdatePartitionNodeDto
} from './dto/partition.dto.js';
import { PartitionsService } from './partitions.service.js';

@ApiTags('partition-dimensions')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'partition-dimensions', version: API_VERSION })
export class PartitionDimensionsController {
  constructor(@Inject(PartitionsService) private readonly partitionsService: PartitionsService) {}

  @Get()
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({ summary: 'List partition dimensions' })
  list() {
    return this.partitionsService.listDimensions();
  }

  @Get(':id')
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({ summary: 'Get a partition dimension and all its hierarchy nodes' })
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.partitionsService.getDimension(id);
  }

  @Post()
  @Roles(['admin'])
  @ApiOperation({ summary: 'Create an independent partition dimension' })
  create(
    @Body() input: CreatePartitionDimensionDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.partitionsService.createDimension(input, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Patch(':id')
  @Roles(['admin'])
  @ApiOperation({ summary: 'Update partition dimension metadata' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() patch: UpdatePartitionDimensionDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.partitionsService.updateDimension(id, patch, {
      actorUserId: session.user.id,
      requestId
    });
  }

  @Post(':id/nodes')
  @Roles(['admin'])
  @ApiOperation({ summary: 'Create a root or child node in a partition dimension' })
  createNode(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() input: CreatePartitionNodeDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.partitionsService.createNode(id, input, {
      actorUserId: session.user.id,
      requestId
    });
  }
}

@ApiTags('partition-nodes')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'partition-nodes', version: API_VERSION })
export class PartitionNodesController {
  constructor(@Inject(PartitionsService) private readonly partitionsService: PartitionsService) {}

  @Patch(':id')
  @Roles(['admin'])
  @ApiOperation({ summary: 'Update a partition hierarchy node' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() patch: UpdatePartitionNodeDto,
    @Session() session: AuthenticatedSession,
    @RequestId() requestId: string
  ) {
    return this.partitionsService.updateNode(id, patch, {
      actorUserId: session.user.id,
      requestId
    });
  }
}
