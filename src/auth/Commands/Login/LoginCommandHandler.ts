import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthService } from '../../Common/services/auth.service';
import { LoginCommand } from '@/music_sheet/auth/Commands/Login/LoginCommand';
import { LoginUserDto } from '@/music_sheet/auth/Common/dto/LoginUserDto';

@CommandHandler(LoginCommand)
export class LoginCommandHandler implements ICommandHandler<LoginCommand> {
  constructor(private readonly authService: AuthService) {}

  execute({ phoneNumber, password }: LoginCommand): Promise<LoginUserDto> {
    return this.authService.loginUser(phoneNumber, password);
  }
}
