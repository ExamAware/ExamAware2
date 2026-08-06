import { apiRequest } from '../http';
import type { AuditLogView, PageResponse } from './types';

const AUDIT_PATH = '/api/v1/audit-logs';

export const auditApi = {
  list(
    page = 1,
    pageSize = 20,
    filters: { action?: string; resourceType?: string; actor?: string } = {}
  ) {
    const query = new URLSearchParams({ page: String(page), pageSize: String(pageSize) });
    if (filters.action) query.set('action', filters.action);
    if (filters.resourceType) query.set('resourceType', filters.resourceType);
    if (filters.actor) query.set('actor', filters.actor);
    return apiRequest<PageResponse<AuditLogView>>(`${AUDIT_PATH}?${query}`);
  }
};
