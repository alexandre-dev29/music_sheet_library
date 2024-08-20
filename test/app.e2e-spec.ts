import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigService } from '@nestjs/config';

describe('AppController (e2e)', () => {
  let app: NestFastifyApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        PrismaModule.forRootAsync({
          useFactory: async (configService: ConfigService) => {
            return {
              prismaOptions: {
                log: ['query'],
                datasources: {
                  db: { url: configService.get<string>('DATABASE_URL_TEST') },
                },
              },
            };
          },
          inject: [ConfigService],
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(({ body }: { body: { name } }) => {
        const { name } = body;
        expect(name).toEqual('alexandre');
      });
  });
});
