import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { PrismaService } from '../../prisma.service';
import { AuthService } from '@/music_sheet/auth/Common/Services/auth.service';
import { AuthModule } from '@/music_sheet/auth/auth.module';

export class IntegrationTestManager {
  public prismaService: PrismaService;
  public authService: AuthService;

  async beforeAll(): Promise<void> {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, AuthModule],
      providers: [],
    }).compile();
    this.prismaService = moduleFixture.get<PrismaService>(PrismaService);
    this.authService = moduleFixture.get<AuthService>(AuthService);
  }

  async afterAll() {
    await this.prismaService.cleanDatabase();
  }
}
