import request from 'supertest-graphql';
import gql from 'graphql-tag';
import { userStub } from '../stubs/userStub';
import { E2ETestManager } from '@/music_sheet/common/e2e/e2eTestManager';
import { LoginUserDto } from '@/music_sheet/auth/Common/dto/LoginUserDto';
import { LoginCommand } from '@/music_sheet/auth/Commands/Login/LoginCommand';
import { GraphQLError } from 'graphql/error';

describe('login user', () => {
  const e2eTestManager = new E2ETestManager();
  beforeAll(async () => {
    await e2eTestManager.beforeAll();
    await e2eTestManager.authService.registerNewUser(userStub());
  });
  afterAll(async () => {
    await e2eTestManager.afterAll();
  });

  describe('given that the user exist', () => {
    let loginUserDto: LoginUserDto;
    beforeAll(async () => {
      const response = await request<{ loginUser: LoginUserDto }>(
        e2eTestManager.httpServer,
      )
        .mutate(gql`
          mutation loginUser($loginUser: LoginCommand!) {
            loginUser(loginData: $loginUser) {
              name
              phoneNumber
              accessToken
            }
          }
        `)
        .variables({
          loginUser: {
            phoneNumber: userStub().phoneNumber,
            password: userStub().password,
          } as LoginCommand,
        })
        .expectNoErrors();
      loginUserDto = response.data.loginUser;
    });
    afterAll(async () => {
      await e2eTestManager.prismaService.user.deleteMany({});
    });
    test('then the response should be the newly logged user', async () => {
      expect(loginUserDto.name).toBe(userStub().name);
      expect(loginUserDto.phoneNumber).toBe(userStub().phoneNumber);
    });
    test('then access token shall not be null', async () => {
      expect(loginUserDto.accessToken).toBeDefined();
      expect(loginUserDto.accessToken).not.toBeNull();
    });
  });
  describe('given that the user does not  exist', () => {
    let graphQLErrors: ReadonlyArray<GraphQLError> | undefined;
    beforeAll(async () => {
      await e2eTestManager.prismaService.user.deleteMany({});
      const response = await request<{ loginUser: LoginUserDto }>(
        e2eTestManager.httpServer,
      )
        .mutate(gql`
          mutation loginUser($loginUser: LoginCommand!) {
            loginUser(loginData: $loginUser) {
              name
              phoneNumber
              accessToken
            }
          }
        `)
        .variables({
          loginUser: {
            phoneNumber: userStub().phoneNumber,
            password: userStub().password,
          } as LoginCommand,
        });
      graphQLErrors = response.errors;
    });
    afterAll(async () => {
      await e2eTestManager.prismaService.user.deleteMany({});
    });
    test('then the response should be the newly logged user', async () => {
      expect(graphQLErrors.length).toBeGreaterThan(0);
      expect(graphQLErrors[0].message).toBe('Invalid login credentials');
    });
  });
});
