import { apiRequest } from './http';

export interface HealthResponse {
  service: string;
  status: string;
  database?: string;
}

const HEALTH_API_PATHS = {
  live: '/api/health',
  ready: '/api/health/ready'
} as const;

export const healthApi = {
  live: () => apiRequest<HealthResponse>(HEALTH_API_PATHS.live),
  ready: () => apiRequest<HealthResponse>(HEALTH_API_PATHS.ready)
};
