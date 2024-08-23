import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RegisterCommand } from '../Commands/Register/RegisterCommand';
import { CommandBus } from '@nestjs/cqrs';
import { LoginCommand } from '@/music_sheet/auth/Commands/Login/LoginCommand';
import { User } from '@/music_sheet/types/@generated';
import { RegisterUserDto } from '@/music_sheet/auth/Dto/registerUserDto';
import { LoginUserDto } from '@/music_sheet/auth/Dto/LoginUserDto';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Mutation(() => RegisterUserDto)
  async registerUser(
    @Args({ name: 'registerUserData', type: () => RegisterCommand })
    { name, phoneNumber, password }: RegisterCommand,
  ): Promise<RegisterUserDto> {
    return this.commandBus.execute(
      new RegisterCommand(phoneNumber, password, name),
    );
  }

  @Mutation(() => LoginUserDto)
  async loginUser(
    @Args({ name: 'loginData', type: () => LoginCommand })
    { phoneNumber, password }: LoginCommand,
  ): Promise<LoginUserDto> {
    return this.commandBus.execute(new LoginCommand(phoneNumber, password));
  }
}
