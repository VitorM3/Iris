import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/app.module';
import SwaggerConfig from './core/config/swagger';
import DatabaseConfig from './core/database/domain/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  SwaggerConfig.define(app);
  DatabaseConfig.define(app);
  await app.listen(2000);
}
bootstrap();
