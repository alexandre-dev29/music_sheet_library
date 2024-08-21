import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { PrismaService } from '../../prisma.service';
import { AuthService } from '@/music_sheet/auth/Common/Services/auth.service';

export class E2ETestManager {
  private app: NestFastifyApplication;
  public httpServer: any;
  private accessToken: string;
  public prismaService: PrismaService;
  public authService: AuthService;

  async beforeAll(): Promise<void> {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [],
    }).compile();

    this.app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await this.app.init();
    await this.app.getHttpAdapter().getInstance().ready();
    this.httpServer = this.app.getHttpServer();
    this.prismaService = moduleFixture.get<PrismaService>(PrismaService);
    this.authService = moduleFixture.get<AuthService>(AuthService);
  }

  async afterAll() {
    await this.prismaService.cleanDatabase();
    await this.app.close();
  }

  getAccessToken(): string {
    return this.accessToken;
  }
}
