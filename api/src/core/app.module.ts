import { Module } from '@nestjs/common';
import TestController from './test/test.controller';

@Module({
  imports: [],
  controllers:[TestController]
})
export class AppModule {}
