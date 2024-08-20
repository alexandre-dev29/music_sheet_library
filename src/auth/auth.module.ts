import { Module } from '@nestjs/common';
import { authCommandHandlers, authQueriesHandler } from './exporter';
import { AuthService } from './Common/services/auth.service';
import { PrismaService } from 'nestjs-prisma';
import { AuthController } from './Controllers/auth.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [CqrsModule],
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
