import { Module } from '@nestjs/common';
import { authCommandHandlers, authQueriesHandler } from './exporter';
import { AuthController } from './Controllers/auth.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/music_sheet/prisma.service';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '@/music_sheet/auth/Services/auth.service';

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
