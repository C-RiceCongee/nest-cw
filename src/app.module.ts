import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENUM_Config_DB } from './enum/configEnum';
// @ts-ignore
import { DatabaseType } from 'typeorm/driver/types/DatabaseType';
import { UserEntity } from './modules/user/user.entity';
import { ProfileModule } from './modules/profile/profile.module';
import { ProfileEntity } from './modules/profile/profile.entity';
import { FilesModule } from './modules/files/files.module';
import { FilesEntity } from './modules/files/files.entity';
import { PostsModule } from './modules/posts/posts.module';
import { TagsModule } from './modules/tags/tags.module';
import { PostsEntity } from './modules/posts/posts.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [...config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cs: ConfigService) => ({
        type: 'mysql',
        host: cs.get(ENUM_Config_DB.Host),
        port: cs.get(ENUM_Config_DB.Port),
        username: cs.get(ENUM_Config_DB.Username),
        password: cs.get(ENUM_Config_DB.Password),
        database: cs.get(ENUM_Config_DB.Database),
        entities: [UserEntity, ProfileEntity, FilesEntity, PostsEntity],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    ProfileModule,
    UserModule,
    FilesModule,
    PostsModule,
    TagsModule,
  ],
})
export class AppModule {}
