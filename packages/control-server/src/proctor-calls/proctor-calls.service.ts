import {
  BadRequestException,
  Injectable,
  NotFoundException,
  type MessageEvent
} from '@nestjs/common';
import { proctorCallRequestSchema } from '@dsz-examaware/control-protocol';
import { map, Subject, type Observable } from 'rxjs';
import type { Page } from '../api/pagination.dto.js';
import { ProctorCallsRepository, type ProctorCallView } from './proctor-calls.repository.js';

@Injectable()
export class ProctorCallsService {
  private readonly reported = new Subject<ProctorCallView>();

  constructor(private readonly repository: ProctorCallsRepository) {}

  async report(deviceId: string, schoolId: string, input: unknown): Promise<ProctorCallView> {
    const parsed = proctorCallRequestSchema.safeParse(input);
    if (!parsed.success) {
      throw new BadRequestException({
        code: 'invalid_proctor_call',
        message: 'Proctor call does not match the shared protocol',
        errors: parsed.error.issues
      });
    }
    const call = await this.repository.create(deviceId, schoolId, parsed.data);
    this.reported.next(call);
    return call;
  }

  async listPending(page: number, pageSize: number): Promise<Page<ProctorCallView>> {
    const result = await this.repository.listPending(page, pageSize);
    return { items: result.records, page, pageSize, total: result.total };
  }

  async acknowledge(id: string, userId: string): Promise<ProctorCallView> {
    const call = await this.repository.acknowledge(id, userId);
    if (!call) {
      throw new NotFoundException({
        code: 'proctor_call_not_found',
        message: 'Proctor call was not found or has already been acknowledged'
      });
    }
    return call;
  }

  events(): Observable<MessageEvent> {
    return this.reported.pipe(map((call) => ({ type: 'proctor-call', data: call })));
  }
}
