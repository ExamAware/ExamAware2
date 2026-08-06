import { randomUUID } from 'node:crypto';
import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
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

export const RequestOrigin = createParamDecorator((_data: unknown, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest<ApiRequest>();
  const forwardedProtocol = request.header('x-forwarded-proto')?.split(',')[0]?.trim();
  const forwardedHost = request.header('x-forwarded-host')?.split(',')[0]?.trim();
  const protocol = forwardedProtocol || request.protocol;
  const host = forwardedHost || request.header('host');
  if (!host || !['http', 'https'].includes(protocol)) {
    throw new BadRequestException({
      code: 'invalid_request_origin',
      message: 'Request origin is invalid'
    });
  }
  return new URL(`${protocol}://${host}`).origin;
});
