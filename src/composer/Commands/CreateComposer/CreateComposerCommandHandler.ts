import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateComposerCommand } from '@/music_sheet/composer/Commands/CreateComposer/CreateComposerCommand';
import { CreateComposerDto } from '@/music_sheet/composer/Dto/CreateComposerDto';
import { ComposerService } from '@/music_sheet/composer/Services/composer.service';
import { DocumentsService } from '@/music_sheet/documents/documents.service';

@CommandHandler(CreateComposerCommand)
export class CreateComposerCommandHandler
  implements ICommandHandler<CreateComposerCommand>
{
  constructor(
    private readonly composerService: ComposerService,
    private readonly documentService: DocumentsService,
  ) {}

  async execute(command: CreateComposerCommand): Promise<CreateComposerDto> {
    const { url, fileKey, bucket } =
      await this.documentService.uploadSingleFile(command.composerImage);
    return this.composerService.createNewComposer(command, {
      fileUrl: url,
      fileKey: fileKey,
      bucketName: bucket,
    });
  }
}
