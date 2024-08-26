import { Module } from '@nestjs/common';
import {
  sheetCommandHandlers,
  sheetQueriesHandler,
} from '@/music_sheet/musicsheet/exporter';
import { PrismaService } from '@/music_sheet/prisma.service';
import { MusicSheetResolver } from '@/music_sheet/musicsheet/Controller/musicSheet.resolver';
import { MusicSheetService } from '@/music_sheet/musicsheet/Services/musicsheet.service';
import { DocumentsService } from '@/music_sheet/documents/documents.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CaslModule } from 'nest-casl';
import { musicSheetsPermissions } from '@/music_sheet/musicsheet/Security/musicsheet.permissions';
import { JwtStrategy } from '@/music_sheet/common/security/jwt.strategy';

@Module({
  imports: [
    CqrsModule,
    CaslModule.forFeature({ permissions: musicSheetsPermissions }),
  ],
  providers: [
    ...sheetCommandHandlers,
    ...sheetQueriesHandler,
    DocumentsService,
    PrismaService,
    MusicSheetResolver,
    MusicSheetService,
    JwtStrategy,
  ],
})
export class MusicsheetModule {}
