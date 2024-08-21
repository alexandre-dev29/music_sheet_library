import { Module } from '@nestjs/common';
import { authCommandHandlers, authQueriesHandler } from './exporter';
import { AuthService } from './Common/services/auth.service';
import { AuthController } from './Controllers/auth.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/music_sheet/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    CqrsModule,
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
  ],
  providers: [
    ...authCommandHandlers,
    ...authQueriesHandler,
    AuthService,
    PrismaService,
    JwtService,
    AuthController,
  ],
})
export class AuthModule {}
