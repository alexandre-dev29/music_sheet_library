import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthToken } from '../../types/@generated';
import { RegisterUserDto } from '../Common/dto/registerUserDto';
import { RegisterCommand } from '../Commands/Register/RegisterCommand';
import { CommandBus } from '@nestjs/cqrs';

@Resolver(() => AuthToken)
export class AuthController {
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
}
