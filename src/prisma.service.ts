import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private readonly configService: ConfigService) {
    super({
      datasources: {
        db: {
          url:
            configService.get('NODE_ENV') === 'test'
              ? configService.get<string>('DATABASE_URL_TEST')
              : configService.get<string>('DATABASE_URL'),
        },
      },
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async cleanDatabase() {
    if (process.env.NODE_ENV === 'production') return;
    const deleteUser = this.user.deleteMany();
    const deleteAuth = this.authToken.deleteMany();
    const deleteSheet = this.sheetMusic.deleteMany();
    await this.$transaction([deleteUser, deleteAuth, deleteSheet]);
  }
}
