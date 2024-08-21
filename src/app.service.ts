import { Injectable } from '@nestjs/common';
import { User } from './types/@generated';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  getData(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }
}
