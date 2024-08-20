import { CommandHandlerType, QueryHandlerType } from '@nestjs/cqrs';
import { RegisterCommandHandler } from './Commands/Register/RegisterCommandHandler';

export const authCommandHandlers: Array<CommandHandlerType> = [
  RegisterCommandHandler,
];
export const authQueriesHandler: Array<QueryHandlerType> = [];
