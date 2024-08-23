import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ComposerService } from '@/music_sheet/composer/Services/composer.service';
import { GetAllComposerDto } from '@/music_sheet/composer/Dto/GetAllComposerDto';
import { GetOneComposerQuery } from '@/music_sheet/composer/Queries/GetOneComposer/GetOneComposerQuery';

@QueryHandler(GetOneComposerQuery)
export class GetOneComposerQueryHandler
  implements IQueryHandler<GetOneComposerQuery>
{
  constructor(private readonly composerService: ComposerService) {}

  async execute(query: GetOneComposerQuery): Promise<GetAllComposerDto> {
    return this.composerService.getOneComposer(query.filtering);
  }
}
