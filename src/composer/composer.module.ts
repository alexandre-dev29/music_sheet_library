import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  composerCommandHandlers,
  composerQueriesHandler,
} from '@/music_sheet/composer/exporter';
import { PrismaService } from '@/music_sheet/prisma.service';
import { ConfigService } from '@nestjs/config';
import { DocumentsService } from '@/music_sheet/documents/documents.service';

@Module({
  imports: [CqrsModule],
  providers: [
    ...composerQueriesHandler,
    ...composerCommandHandlers,
    PrismaService,
    ConfigService,
    DocumentsService,
  ],
})
export class ComposerModule {}
