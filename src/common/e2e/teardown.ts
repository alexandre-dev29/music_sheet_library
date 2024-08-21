import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { PrismaService } from '../../prisma.service';

export default async (): Promise<void> => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
    providers: [],
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
