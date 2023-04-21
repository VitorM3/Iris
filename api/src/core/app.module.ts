import { Module } from '@nestjs/common';
import DatabaseModule from './database/database.module';
import UserModule from 'src/modules/User/user.module';
import { ConfigModule } from '@nestjs/config';
import AuthModule from 'src/modules/Auth/auth.module';

@Module({
  imports: [DatabaseModule,UserModule,ConfigModule.forRoot({isGlobal: true}),AuthModule],
})
export class AppModule {}
