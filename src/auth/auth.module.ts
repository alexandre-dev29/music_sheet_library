import { Module } from '@nestjs/common';
import { authCommandHandlers, authQueriesHandler } from './exporter';
import { AuthService } from './Common/services/auth.service';
import { AuthController } from './Controllers/auth.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/music_sheet/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [CqrsModule],
  providers: [
    ...authCommandHandlers,
    ...authQueriesHandler,
    AuthService,
    PrismaService,
    JwtService,
    AuthController,
    ConfigService,
  ],
})
export class AuthModule {}
