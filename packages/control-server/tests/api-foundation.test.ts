import { BadRequestException, Controller, Get, Post } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { API_VERSION, configureApplication } from '../src/api/application.js';
import { RequestOrigin } from '../src/api/request-context.js';
import type { INestApplication } from '@nestjs/common';

@AllowAnonymous()
@Controller({ path: 'validation-probe', version: API_VERSION })
class ValidationProbeController {
  @Post()
  create(): never {
    throw new BadRequestException({ code: 'invalid_probe', message: 'Probe rejected' });
  }
}

@AllowAnonymous()
@Controller({ path: 'origin-probe', version: API_VERSION })
class OriginProbeController {
  @Get()
  read(@RequestOrigin() origin: string) {
    return { origin };
  }
}

describe('REST application contract', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ValidationProbeController, OriginProbeController]
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
      code: 'invalid_probe',
      title: 'BAD REQUEST',
      status: 400,
      instance: '/api/v1/validation-probe',
      requestId
    });
  });

  it('uses the frontend or reverse-proxy origin for generated device URLs', async () => {
    const developmentResponse = await request(app.getHttpServer())
      .get('/api/v1/origin-probe')
      .set('host', '127.0.0.1:5174')
      .expect(200);
    expect(developmentResponse.body).toEqual({ origin: 'http://127.0.0.1:5174' });

    const proxyResponse = await request(app.getHttpServer())
      .get('/api/v1/origin-probe')
      .set('host', '127.0.0.1:3100')
      .set('x-forwarded-host', 'control.example.edu')
      .set('x-forwarded-proto', 'https')
      .expect(200);
    expect(proxyResponse.body).toEqual({ origin: 'https://control.example.edu' });
  });
});
