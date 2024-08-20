import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

export default async (): Promise<void> => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
    providers: [PrismaModule],
  }).compile();
  const app = moduleFixture.createNestApplication<NestFastifyApplication>(
    new FastifyAdapter(),
  );
  await app.init();

  const prismaService: PrismaService =
    moduleFixture.get<PrismaService>(PrismaService);
  await prismaService.user.deleteMany();
  await app.close();
};
