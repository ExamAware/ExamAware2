import { randomUUID } from 'node:crypto';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export interface ApiRequest extends Request {
  requestId: string;
}

export function requestContextMiddleware(
  request: ApiRequest,
  response: Response,
  next: NextFunction
): void {
  const suppliedRequestId = request.header('x-request-id');
  request.requestId =
    suppliedRequestId && UUID_PATTERN.test(suppliedRequestId) ? suppliedRequestId : randomUUID();
  response.setHeader('x-request-id', request.requestId);
  next();
}

export const RequestId = createParamDecorator(
  (_data: unknown, context: ExecutionContext): string =>
    context.switchToHttp().getRequest<ApiRequest>().requestId
);
