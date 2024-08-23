import { CommandHandlerType, QueryHandlerType } from '@nestjs/cqrs';
import { CreateComposerCommandHandler } from '@/music_sheet/composer/Commands/CreateComposer/CreateComposerCommandHandler';
import { GetAllComposerQueryHandler } from '@/music_sheet/composer/Queries/GetAllComposer/GetAllComposerQueryHandler';
import { GetOneComposerQueryHandler } from '@/music_sheet/composer/Queries/GetOneComposer/GetOneComposerQueryHandler';

export const composerCommandHandlers: Array<CommandHandlerType> = [
  CreateComposerCommandHandler,
];
export const composerQueriesHandler: Array<QueryHandlerType> = [
  GetAllComposerQueryHandler,
  GetOneComposerQueryHandler,
];
