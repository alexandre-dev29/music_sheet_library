import { CommandHandlerType, QueryHandlerType } from '@nestjs/cqrs';
import { RegisterCommandHandler } from './Commands/Register/RegisterCommandHandler';
import { LoginCommandHandler } from '@/music_sheet/auth/Commands/Login/LoginCommandHandler';

export const authCommandHandlers: Array<CommandHandlerType> = [
  RegisterCommandHandler,
  LoginCommandHandler,
];
export const authQueriesHandler: Array<QueryHandlerType> = [];
