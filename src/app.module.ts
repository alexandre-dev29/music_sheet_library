import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { TypesModule } from '@/music_sheet/types/types.module';
import { UsersModule } from '@/music_sheet/users/users.module';
import { AuthModule } from '@/music_sheet/auth/auth.module';
import { MusicsheetModule } from '@/music_sheet/musicsheet/musicsheet.module';
import { CaslModule } from 'nest-casl';
import { UserSecurity } from '@/music_sheet/common/security/user.security';
import { AppResolver } from '@/music_sheet/app.resolver';
import { ComposerModule } from './composer/composer.module';
import { DocumentsModule } from './documents/documents.module';
import { DocumentsService } from '@/music_sheet/documents/documents.service';
import { Roles } from '@/music_sheet/types/@generated';

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
    CaslModule.forRoot<Roles, UserSecurity>({
      superuserRole: Roles.ADMIN,
      getUserFromRequest: (request) => request.user,
    }),
    TypesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    MusicsheetModule,
    ComposerModule,
    DocumentsModule,
  ],
  controllers: [],
  providers: [PrismaService, AppResolver, DocumentsService],
})
export class AppModule {}
