import type { INestApplication } from '@nestjs/common';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from '../config/env.js';
import { ProblemDetailsFilter } from './problem-details.filter.js';
import { requestContextMiddleware } from './request-context.js';

export const API_VERSION = '1';

export interface ApplicationOptions {
  docsEnabled?: boolean;
  shutdownHooks?: boolean;
}
export function configureApplication(
  app: INestApplication,
  options: ApplicationOptions = {}
): void {
  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI });
  app.use(requestContextMiddleware);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );
  app.useGlobalFilters(new ProblemDetailsFilter());

  if (options.shutdownHooks ?? true) {
    app.enableShutdownHooks();
  }

  if (options.docsEnabled ?? env.api.docsEnabled) {
    const openApiConfig = new DocumentBuilder()
      .setTitle('ExamAware Control API')
      .setDescription('Administrative REST API for the ExamAware school control service')
      .setVersion(API_VERSION)
      .addCookieAuth('better-auth.session_token')
      .build();
    const document = SwaggerModule.createDocument(app, openApiConfig);
    SwaggerModule.setup('api/docs', app, document);
  }
}
