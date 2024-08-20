import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { PrismaModule } from 'nestjs-prisma';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';

export default async (): Promise<void> => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [
      AppModule,
      PrismaModule.forRootAsync({
        useFactory: async (configService: ConfigService) => {
          return {
            prismaOptions: {
              log: ['query'],
              datasources: {
                db: {
                  url:
                    configService.get<string>('NODE_ENV') === 'test'
                      ? configService.get<string>('DATABASE_URL_TEST')
                      : configService.get<string>('DATABASE_URL'),
                },
              },
            },
          };
        },
        inject: [ConfigService],
      }),
    ],
    providers: [],
  }).compile();
  const app = moduleFixture.createNestApplication<NestFastifyApplication>(
    new FastifyAdapter(),
  );
  await app.init();

  await app.close();
};
