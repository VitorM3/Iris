import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/app.module';
import SwaggerConfig from './core/config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  SwaggerConfig.define(app);
  await app.listen(2000);
}
bootstrap();
