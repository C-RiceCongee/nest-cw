import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {ConfigModule} from '@nestjs/config';
import config from './config';
@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [...config],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
