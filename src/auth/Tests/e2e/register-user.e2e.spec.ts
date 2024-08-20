import { IntegrationTestManager } from '../../../common/e2e/integrationTestManager';
import request from 'supertest-graphql';
import { RegisterUserDto } from '../../Common/dto/registerUserDto';
import gql from 'graphql-tag';
import { RegisterCommand } from '../../Commands/Register/RegisterCommand';
import { userStub } from '../stubs/userStub';

describe('registerUser', () => {
  const integrationTestManager = new IntegrationTestManager();
  beforeAll(async () => {
    await integrationTestManager.beforeAll();
  });
  afterAll(async () => {
    await integrationTestManager.afterAll();
  });

  describe('given that the user does not exist', () => {
    let createdUser: RegisterUserDto;
    beforeAll(async () => {
      const response = await request<{ registerUser: RegisterUserDto }>(
        integrationTestManager.httpServer,
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
      integrationTestManager.prismaService.user.deleteMany({});
    });
    test('then the response should be the newly created user', async () => {
      expect(createdUser.name).toBe(userStub().name);
      expect(createdUser.phoneNumber).toBe(userStub().phoneNumber);
    });
    test('then the new user should be created', async () => {
      const user = integrationTestManager.prismaService.user.findUnique({
        where: { phoneNumber: createdUser.phoneNumber },
      });
      expect(user).toBeDefined();
    });
  });
});
