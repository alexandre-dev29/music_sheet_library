import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginCommand } from '@/music_sheet/auth/Commands/Login/LoginCommand';
import { LoginUserDto } from '@/music_sheet/auth/Dto/LoginUserDto';
import { AuthService } from '@/music_sheet/auth/Services/auth.service';

@CommandHandler(LoginCommand)
export class LoginCommandHandler implements ICommandHandler<LoginCommand> {
  constructor(private readonly authService: AuthService) {}

  execute({ phoneNumber, password }: LoginCommand): Promise<LoginUserDto> {
    return this.authService.loginUser(phoneNumber, password);
  }
}
