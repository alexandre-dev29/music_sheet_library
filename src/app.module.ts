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
import { Role } from '@/music_sheet/common/security/role';
import { UserSecurity } from '@/music_sheet/common/security/user.security';
import { AppResolver } from '@/music_sheet/app.resolver';

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
    CaslModule.forRoot<Role, UserSecurity>({
      superuserRole: Role.SuperAdmin,
      getUserFromRequest: (request) => request.user,
    }),
    TypesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    MusicsheetModule,
  ],
  controllers: [],
  providers: [PrismaService, AppResolver],
})
export class AppModule {}
