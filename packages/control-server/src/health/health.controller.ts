import { Controller, Get, Inject, ServiceUnavailableException } from '@nestjs/common';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import { DatabaseService } from '../database/database.service.js';

@AllowAnonymous()
@Controller('health')
export class HealthController {
  constructor(@Inject(DatabaseService) private readonly databaseService: DatabaseService) {}

  @Get()
  getHealth(): { service: string; status: 'ok' } {
    return {
      service: 'control-server',
      status: 'ok'
    };
  }

  @Get('ready')
  async getReadiness(): Promise<{ database: 'ok'; service: string; status: 'ok' }> {
    try {
      await this.databaseService.checkConnection();
    } catch {
      throw new ServiceUnavailableException({
        service: 'control-server',
        status: 'unavailable',
        database: 'unavailable'
      });
    }

    return {
      service: 'control-server',
      status: 'ok',
      database: 'ok'
    };
  }
}
