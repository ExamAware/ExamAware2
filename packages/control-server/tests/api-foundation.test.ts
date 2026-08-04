import { BadRequestException, Controller, Post } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { API_VERSION, configureApplication } from '../src/api/application.js';
import type { INestApplication } from '@nestjs/common';

@AllowAnonymous()
@Controller({ path: 'validation-probe', version: API_VERSION })
class ValidationProbeController {
  @Post()
  create(): never {
    throw new BadRequestException({ code: 'invalid_probe', message: 'Probe rejected' });
  }
}

describe('REST application contract', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ValidationProbeController]
    }).compile();
    app = moduleRef.createNestApplication();
    configureApplication(app, { docsEnabled: false, shutdownHooks: false });
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns RFC problem details and preserves a valid request id', async () => {
    const requestId = crypto.randomUUID();
    const response = await request(app.getHttpServer())
      .post('/api/v1/validation-probe')
      .set('x-request-id', requestId)
      .send({ value: 42 })
      .expect(400);

    expect(response.headers['content-type']).toContain('application/problem+json');
    expect(response.headers['x-request-id']).toBe(requestId);
    expect(response.body).toMatchObject({
      type: '/api/problems/invalid_probe',
      title: 'BAD REQUEST',
      status: 400,
      instance: '/api/v1/validation-probe',
      requestId
    });
  });
});
