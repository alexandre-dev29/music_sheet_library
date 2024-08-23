import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { PrismaService } from '../../prisma.service';
import { AuthModule } from '@/music_sheet/auth/auth.module';
import { AuthService } from '@/music_sheet/auth/Services/auth.service';
import { ComposerService } from '@/music_sheet/composer/Services/composer.service';
import { ComposerModule } from '@/music_sheet/composer/composer.module';

export class IntegrationTestManager {
  public prismaService: PrismaService;
  public authService: AuthService;
  public composerService: ComposerService;

  async beforeAll(): Promise<void> {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, AuthModule, ComposerModule],
      providers: [],
    }).compile();
    this.prismaService = moduleFixture.get<PrismaService>(PrismaService);
    this.authService = moduleFixture.get<AuthService>(AuthService);
    this.composerService = moduleFixture.get<ComposerService>(ComposerService);
  }

  async afterAll() {
    await this.prismaService.cleanDatabase();
  }
}
