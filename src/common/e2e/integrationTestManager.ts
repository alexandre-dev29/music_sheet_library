import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { AuthService } from '../../auth/Common/services/auth.service';

export class IntegrationTestManager {
  private app: NestFastifyApplication;
  public httpServer: any;
  private accessToken: string;
  public prismaService: PrismaService;

  async beforeAll(): Promise<void> {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [PrismaModule],
    }).compile();

    this.app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await this.app.init();
    await this.app.getHttpAdapter().getInstance().ready();
    this.httpServer = this.app.getHttpServer();
    this.prismaService = moduleFixture.get<PrismaService>(PrismaService);
    const authService = moduleFixture.get<AuthService>(AuthService);
    //const currentUser = await this.prismaService.user.findFirst();
    // this.accessToken = (
    //   await authService.loginUser(currentUser.phoneNumber, currentUser.password)
    // ).accessToken;
  }

  async afterAll() {
    await this.prismaService.user.deleteMany({});
    await this.app.close();
  }

  getAccessToken(): string {
    return this.accessToken;
  }
}
