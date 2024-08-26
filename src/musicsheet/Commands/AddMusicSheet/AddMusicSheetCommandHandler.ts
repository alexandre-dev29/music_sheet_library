import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddMusicSheetCommand } from '@/music_sheet/musicsheet/Commands/AddMusicSheet/AddMusicSheetCommand';
import { MusicSheetService } from '@/music_sheet/musicsheet/Services/musicsheet.service';
import { DocumentsService } from '@/music_sheet/documents/documents.service';

@CommandHandler(AddMusicSheetCommand)
export class AddMusicSheetCommandHandler
  implements ICommandHandler<AddMusicSheetCommand>
{
  constructor(
    private readonly musicSheetService: MusicSheetService,
    private readonly documentsService: DocumentsService,
  ) {}

  async execute(command: AddMusicSheetCommand): Promise<any> {
    const readStream = command.sheetFile.createReadStream();
    const buffer = await this.documentsService.streamToBuffer(readStream);
    const fileUpload =
      await this.documentsService.uploadMusicSheetFileWithBuffer({
        mimeType: command.sheetFile.mimetype,
        fileName: command.sheetFile.filename,
        buffer: buffer,
      });
    const thumbNailFile = await this.documentsService.createPdfThumbNail({
      fileName: command.sheetFile.filename,
      fileBuffer: buffer,
    });
    const thumbnailUpload =
      await this.documentsService.uploadSingleFile(thumbNailFile);

    return this.musicSheetService.addMusicSheet(
      command,
      thumbnailUpload,
      fileUpload,
    );
  }
}
