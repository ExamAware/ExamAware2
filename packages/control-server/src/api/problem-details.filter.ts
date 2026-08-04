import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger
} from '@nestjs/common';
import type { Response } from 'express';
import type { ApiRequest } from './request-context.js';

interface ExceptionPayload {
  code?: string;
  message?: string | string[];
  errors?: unknown;
}

@Catch()
export class ProblemDetailsFilter implements ExceptionFilter {
  private readonly logger = new Logger(ProblemDetailsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const request = context.getRequest<ApiRequest>();
    const response = context.getResponse<Response>();
    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const payload = this.getPayload(exception);
    const title = HttpStatus[status]?.replaceAll('_', ' ') ?? 'Error';
    const detail = this.getDetail(payload, status);

    if (!(exception instanceof HttpException)) {
      this.logger.error(exception);
    }

    response
      .status(status)
      .type('application/problem+json')
      .send({
        type: payload.code ? `/api/problems/${payload.code}` : 'about:blank',
        title,
        status,
        detail,
        instance: request.originalUrl,
        requestId: request.requestId,
        ...(payload.code === undefined ? {} : { code: payload.code }),
        ...(payload.errors === undefined ? {} : { errors: payload.errors })
      });
  }

  private getPayload(exception: unknown): ExceptionPayload {
    if (!(exception instanceof HttpException)) {
      return {};
    }

    const response = exception.getResponse();
    return typeof response === 'string' ? { message: response } : (response as ExceptionPayload);
  }

  private getDetail(payload: ExceptionPayload, status: number): string {
    if (typeof payload.message === 'string') {
      return payload.message;
    }
    if (Array.isArray(payload.message)) {
      return payload.message.join('; ');
    }
    return status === HttpStatus.INTERNAL_SERVER_ERROR
      ? 'An unexpected error occurred'
      : 'The request could not be completed';
  }
}
