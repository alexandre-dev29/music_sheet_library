import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { TypesModule } from './types/types.module';
import { TestController } from './test.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MusicsheetModule } from './musicsheet/musicsheet.module';
import GraphQLJSON from 'graphql-type-json';
import { JwtModule } from '@nestjs/jwt';

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
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          global: true,
          secret: configService.get<string>('JWT_SECRET_SECRET_KEY'),
          signOptions: { algorithm: 'HS256', expiresIn: '1d' },
        };
      },
    }),
    PrismaModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          prismaOptions: {
            log: ['query'],
            datasources: {
              db: {
                url:
                  configService.get('NODE_ENV') === 'test'
                    ? configService.get<string>('DATABASE_URL_TEST')
                    : configService.get<string>('DATABASE_URL'),
              },
            },
          },
        };
      },
      inject: [ConfigService],
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
