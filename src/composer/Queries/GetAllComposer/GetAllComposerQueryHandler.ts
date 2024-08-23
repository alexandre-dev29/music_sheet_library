import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ComposerService } from '@/music_sheet/composer/Services/composer.service';
import { GetAllComposerQuery } from '@/music_sheet/composer/Queries/GetAllComposer/GetAllComposerQuery';
import { GetAllComposerDto } from '@/music_sheet/composer/Dto/GetAllComposerDto';

@QueryHandler(GetAllComposerQuery)
export class GetAllComposerQueryHandler
  implements IQueryHandler<GetAllComposerQuery>
{
  constructor(private readonly composerService: ComposerService) {}

  async execute(query: GetAllComposerQuery): Promise<Array<GetAllComposerDto>> {
    return this.composerService.getAllComposer(query.filtering);
  }
}
