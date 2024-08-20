import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

import { PrismaService } from 'nestjs-prisma';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, PrismaService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should return all users from the database', async () => {
    const prismaService = {
      user: {
        findMany: jest.fn().mockResolvedValue([]),
      },
    };
    service = new AppService(prismaService as any);
    await expect(service.getData()).resolves.toEqual([]);
  });
});
