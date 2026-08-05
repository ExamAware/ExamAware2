import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from '@thallesp/nestjs-better-auth';
import { API_VERSION } from '../api/application.js';
import { AuditService } from './audit.service.js';
import { ListAuditLogsDto } from './dto/list-audit-logs.dto.js';

@ApiTags('audit')
@ApiCookieAuth('better-auth.session_token')
@Controller({ path: 'audit-logs', version: API_VERSION })
export class AuditController {
  constructor(@Inject(AuditService) private readonly auditService: AuditService) {}

  @Get()
  @Roles(['admin', 'operator', 'viewer'])
  @ApiOperation({ summary: 'List immutable administrative audit records' })
  list(@Query() query: ListAuditLogsDto) {
    return this.auditService.list(query.page, query.pageSize, {
      action: query.action,
      resourceType: query.resourceType,
      actor: query.actor
    });
  }
}
