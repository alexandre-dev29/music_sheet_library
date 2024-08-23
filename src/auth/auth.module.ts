import { Module } from '@nestjs/common';
import { authCommandHandlers, authQueriesHandler } from './exporter';
import { AuthResolver } from './Controllers/auth.resolver';
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
    AuthResolver,
    ConfigService,
  ],
})
export class AuthModule {}
