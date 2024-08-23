import { Test, TestingModule } from '@nestjs/testing';
import { CommandBus } from '@nestjs/cqrs';
import { AuthResolver } from '../../Controllers/auth.resolver';
import { RegisterCommand } from '../../Commands/Register/RegisterCommand';
import { userStub } from '../stubs/userStub';
import { DeepMockProxy } from 'jest-mock-extended';
import { JwtService } from '@nestjs/jwt';
import { LoginCommand } from '@/music_sheet/auth/Commands/Login/LoginCommand';

describe('AuthController', () => {
  let authController: AuthResolver;
  let commandBus: any;
  let mockJwtService: DeepMockProxy<JwtService>;

  beforeEach(async () => {
    commandBus = { execute: jest.fn() };

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AuthResolver],
      providers: [
        {
          provide: CommandBus,
          useValue: commandBus,
        },
      ],
    })
      .overrideProvider(JwtService)
      .useValue(mockJwtService)
      .compile();

    authController = moduleRef.get<AuthResolver>(AuthResolver);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should register user and return RegisterUserDto object', async () => {
    const cmd = new RegisterCommand(
      userStub().phoneNumber,
      userStub().password,
      userStub().name,
    );
    commandBus.execute.mockResolvedValue(cmd);

    expect(await authController.registerUser(cmd)).toBe(cmd);
    expect(commandBus.execute).toHaveBeenCalledWith(cmd);
  });
  it('should login user and return LoginUserDto object', async () => {
    const cmd = new LoginCommand(userStub().phoneNumber, userStub().password);
    const response = {
      name: userStub().name,
      phoneNumber: userStub().phoneNumber,
      accessToken: 'alexandre',
    };
    commandBus.execute.mockResolvedValue(response);

    expect(await authController.loginUser(cmd)).toBe(response);
    expect(commandBus.execute).toHaveBeenCalledWith(cmd);
  });
});
