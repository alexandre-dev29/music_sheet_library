import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { TestController } from './test.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from './prisma.service';
import { TypesModule } from '@/music_sheet/types/types.module';
import { UsersModule } from '@/music_sheet/users/users.module';
import { AuthModule } from '@/music_sheet/auth/auth.module';
import { MusicsheetModule } from '@/music_sheet/musicsheet/musicsheet.module';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: true,
      plugins: [
        // {
        //   plugin: mercuriusCache,
        //   options: {
        //     all: false,
        //     ttl: 120,
        //
        //     policy: { Query: { authors: true } },
        //     storage: {
        //       type: 'redis',
        //       options: { client: new Redis() },
        //     },
        //   } as MercuriusCacheOptions,
        // } as MercuriusPlugin<MercuriusCacheOptions>,
      ],
    }),

    TypesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    MusicsheetModule,
  ],
  controllers: [TestController],
  providers: [AppService, PrismaService, AppController],
})
export class AppModule {}
