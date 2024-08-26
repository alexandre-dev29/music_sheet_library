import { CommandHandlerType, QueryHandlerType } from '@nestjs/cqrs';
import { AddMusicSheetCommandHandler } from '@/music_sheet/musicsheet/Commands/AddMusicSheet/AddMusicSheetCommandHandler';

export const sheetCommandHandlers: Array<CommandHandlerType> = [
  AddMusicSheetCommandHandler,
];
export const sheetQueriesHandler: Array<QueryHandlerType> = [];
