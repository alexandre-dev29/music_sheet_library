import { Test } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { AuthModule } from '../../auth.module';
import { AuthService } from '../../Common/services/auth.service';
import { userStub } from '../stubs/userStub';
import { PrismaService } from '@/music_sheet/prisma.service';
import { ConfigService } from '@nestjs/config';

jest.mock('bcrypt', () => ({
  compare: jest.fn(),
  hashSync: jest.fn().mockResolvedValue('aaaaaa'),
}));

describe('AuthService', () => {
  let authService;
  let prisma: DeepMockProxy<PrismaClient>;
  let mockJwtService: DeepMockProxy<JwtService>;

  beforeEach(async () => {
    mockJwtService = mockDeep<JwtService>();

    const moduleRef = await Test.createTestingModule({
      imports: [AuthModule],
      providers: [JwtService, AuthService, PrismaService, ConfigService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep(PrismaClient))
      .overrideProvider(JwtService)
      .useValue(mockJwtService)
      .compile();

    authService = moduleRef.get<AuthService>(AuthService);
    prisma = moduleRef.get(PrismaService);
    mockJwtService = moduleRef.get(JwtService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return true if user is valid and password matches', async () => {
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      // @ts-ignore
      prisma.user.findUnique.mockResolvedValueOnce(userStub());
      const result = await authService.validateUser(
        userStub().phoneNumber,
        userStub().password,
      );
      expect(result).toBe(true);
    });

    it('should return false if user is not found', async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      const result = await authService.validateUser(
        userStub().phoneNumber,
        userStub().password,
      );
      expect(result).toBe(false);
    });

    it('should return false if password does not match', async () => {
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);
      prisma.user.findUnique.mockResolvedValue(userStub());
      const result = await authService.validateUser(
        userStub().phoneNumber,
        userStub().password,
      );
      expect(result).toBe(false);
    });
  });

  describe('registerNewUser', () => {
    it('should create a new user and return it', async () => {
      (bcrypt.hashSync as jest.Mock).mockReturnValue(userStub().password);
      // @ts-ignore
      prisma.user.findUnique.mockResolvedValue(null);
      prisma.user.create.mockResolvedValueOnce(userStub());

      const result = await authService.registerNewUser({
        ...userStub(),
      });
      expect(result).toEqual(userStub());
    });
  });

  describe('loginUser', () => {
    it('should return a token if user is valid and password matches', async () => {
      const token = 'returntoken';

      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue(token);
      prisma.user.findUnique.mockResolvedValue(userStub());

      const result = await authService.loginUser(
        userStub().phoneNumber,
        userStub().password,
      );
      expect(result).toEqual({
        accessToken: token,
        name: userStub().name,
        phoneNumber: userStub().phoneNumber,
      });
    });

    it('should throw an error if user is not found or password does not match', async () => {
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        authService.loginUser(userStub().phoneNumber, userStub().password),
      ).rejects.toThrow();
    });
  });
});
