import { Test } from '@nestjs/testing';
import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { configureApplication } from '../src/api/application.js';
import { AppModule } from '../src/app.module.js';
import { DatabaseService } from '../src/database/database.service.js';

import type { INestApplication } from '@nestjs/common';

let app: INestApplication;
const databaseService = {
  checkConnection: vi.fn().mockResolvedValue(undefined)
};

beforeAll(async () => {
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule]
  })
    .overrideProvider(DatabaseService)
    .useValue(databaseService)
    .compile();
  app = moduleRef.createNestApplication();

  configureApplication(app, { docsEnabled: false, shutdownHooks: false });
  await app.init();
});

afterAll(async () => {
  await app.close();
});

describe('health endpoint', () => {
  it('reports that the control server is alive', async () => {
    const response = await request(app.getHttpServer()).get('/api/health').expect(200);

    expect(response.body).toEqual({
      service: 'control-server',
      status: 'ok'
    });
  });

  it('reports database readiness', async () => {
    const response = await request(app.getHttpServer()).get('/api/health/ready').expect(200);

    expect(response.body).toEqual({
      service: 'control-server',
      status: 'ok',
      database: 'ok'
    });
    expect(databaseService.checkConnection).toHaveBeenCalledOnce();
  });
});

describe('authentication policy', () => {
  it('rejects self-service email registration by default', async () => {
    const response = await request(app.getHttpServer()).post('/api/auth/sign-up/email').send({
      email: 'teacher@example.edu',
      name: 'Teacher',
      password: 'a-secure-test-password'
    });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Email and password sign up is not enabled',
      code: 'EMAIL_PASSWORD_SIGN_UP_DISABLED'
    });
  });

  it('requires an administrator session to manage SSO providers', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/auth/sso/register')
      .send({
        providerId: 'school-idp',
        issuer: 'https://idp.example.edu',
        domain: 'example.edu',
        oidcConfig: {
          clientId: 'client-id',
          clientSecret: 'client-secret'
        }
      });

    expect(response.status).toBe(403);
    expect(response.body.message).toBe('Only an administrator can manage identity providers');
  });
});
