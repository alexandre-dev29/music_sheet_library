import { Test, TestingModule } from '@nestjs/testing';
import { CommandBus } from '@nestjs/cqrs';
import { AuthController } from '../../Controllers/auth.controller';
import { RegisterCommand } from '../../Commands/Register/RegisterCommand';
import { RegisterUserDto } from '../../Common/dto/registerUserDto';
import { userStub } from '../stubs/userStub';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { JwtService } from '@nestjs/jwt';

describe('AuthController', () => {
  let authController: AuthController;
  let commandBus: any;
  let mockJwtService: DeepMockProxy<JwtService>;

  beforeEach(async () => {
    commandBus = { execute: jest.fn() };

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
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

    authController = moduleRef.get<AuthController>(AuthController);
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
});
