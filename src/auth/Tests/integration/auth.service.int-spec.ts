import { IntegrationTestManager } from '@/music_sheet/common/e2e/integrationTestManager';

import { userStub } from '@/music_sheet/auth/Tests/stubs/userStub';
import { RegisterUserDto } from '@/music_sheet/auth/Common/dto/registerUserDto';

describe('Auth Service integration', () => {
  const integrationTestManager = new IntegrationTestManager();
  let newUser: RegisterUserDto;

  beforeAll(async () => {
    await integrationTestManager.beforeAll();
    newUser =
      await integrationTestManager.authService.registerNewUser(userStub());
  });
  afterAll(async () => {
    await integrationTestManager.afterAll();
  });

  it('should register a new user', async () => {
    expect(newUser).toBeDefined();
    expect(typeof newUser == 'object').toBe(true);
    expect(newUser.name).toEqual(userStub().name);
    expect(newUser.phoneNumber).toEqual(userStub().phoneNumber);
  });

  it('it should validate a user', async () => {
    // validate user
    const isValid = await integrationTestManager.authService.validateUser(
      userStub().phoneNumber,
      userStub().password,
    );
    expect(isValid).toEqual(true);
  });
  it('it should login in a user', async () => {
    // log user in and check if we get the jwt token back
    const loginResult = await integrationTestManager.authService.loginUser(
      userStub().phoneNumber,
      userStub().password,
    );
    expect(loginResult.accessToken).toBeDefined();
    expect(loginResult.phoneNumber).toEqual(newUser.phoneNumber);
  });
});
