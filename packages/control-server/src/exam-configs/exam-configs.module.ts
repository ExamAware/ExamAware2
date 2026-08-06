import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module.js';
import { ExamConfigsController } from './exam-configs.controller.js';
import { ExamConfigsRepository } from './exam-configs.repository.js';
import { ExamConfigsService } from './exam-configs.service.js';

@Module({
  imports: [AuditModule],
  controllers: [ExamConfigsController],
  providers: [ExamConfigsRepository, ExamConfigsService],
  exports: [ExamConfigsRepository, ExamConfigsService]
})
export class ExamConfigsModule {}
