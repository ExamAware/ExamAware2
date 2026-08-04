import { NestFactory } from '@nestjs/core';
import { configureApplication } from './api/application.js';
import { AppModule } from './app.module.js';
import { env } from './config/env.js';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  configureApplication(app);
  await app.listen(env.port, '0.0.0.0');
}

void bootstrap();
