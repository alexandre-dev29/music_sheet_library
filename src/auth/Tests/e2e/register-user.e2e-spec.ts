import request from 'supertest-graphql';
import gql from 'graphql-tag';
import { RegisterCommand } from '../../Commands/Register/RegisterCommand';
import { userStub } from '../stubs/userStub';
import { E2ETestManager } from '@/music_sheet/common/e2e/e2eTestManager';
import { RegisterUserDto } from '@/music_sheet/auth/Dto/registerUserDto';

describe('registerUser', () => {
  const e2eTestManager = new E2ETestManager();
  beforeAll(async () => {
    await e2eTestManager.beforeAll();
  });
  afterAll(async () => {
    await e2eTestManager.afterAll();
  });

  describe('given that the user does not exist', () => {
    let createdUser: RegisterUserDto;
    beforeAll(async () => {
      const response = await request<{ registerUser: RegisterUserDto }>(
        e2eTestManager.httpServer,
      )
        .mutate(gql`
          mutation registerUser($registerUserData: RegisterCommand!) {
            registerUser(registerUserData: $registerUserData) {
              name
              phoneNumber
            }
          }
        `)
        .variables({
          registerUserData: {
            name: userStub().name,
            phoneNumber: userStub().phoneNumber,
            password: userStub().password,
          } as RegisterCommand,
        })
        .expectNoErrors();
      createdUser = response.data.registerUser;
    });
    afterAll(async () => {
      await e2eTestManager.prismaService.user.deleteMany({});
    });
    test('then the response should be the newly created user', async () => {
      expect(createdUser.name).toBe(userStub().name);
      expect(createdUser.phoneNumber).toBe(userStub().phoneNumber);
    });
    test('then the new user should be created', async () => {
      const user = e2eTestManager.prismaService.user.findUnique({
        where: { phoneNumber: createdUser.phoneNumber },
      });
      expect(user).toBeDefined();
    });
    test('should throw an exception has the user already exist', async () => {
      await expect(
        e2eTestManager.authService.registerNewUser(userStub()),
      ).rejects.toThrow('User already exists');
    });
  });
});
