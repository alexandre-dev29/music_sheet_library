import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegisterCommand } from './RegisterCommand';
import { AuthService } from '@/music_sheet/auth/Services/auth.service';
import { RegisterUserDto } from '@/music_sheet/auth/Dto/registerUserDto';

@CommandHandler(RegisterCommand)
export class RegisterCommandHandler
  implements ICommandHandler<RegisterCommand>
{
  constructor(private readonly authService: AuthService) {}
  execute(command: RegisterCommand): Promise<RegisterUserDto> {
    return this.authService.registerNewUser(command);
  }
}
