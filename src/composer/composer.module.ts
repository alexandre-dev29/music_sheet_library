import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  composerCommandHandlers,
  composerQueriesHandler,
} from '@/music_sheet/composer/exporter';
import { PrismaService } from '@/music_sheet/prisma.service';
import { ConfigService } from '@nestjs/config';
import { DocumentsService } from '@/music_sheet/documents/documents.service';
import { ComposerService } from '@/music_sheet/composer/Services/composer.service';
import { ComposerResolver } from '@/music_sheet/composer/Controller/composer.resolver';

@Module({
  imports: [CqrsModule],
  providers: [
    ...composerQueriesHandler,
    ...composerCommandHandlers,
    PrismaService,
    ConfigService,
    DocumentsService,
    ComposerService,
    ComposerResolver,
  ],
})
export class ComposerModule {}
