import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [DocumentsService, ConfigService],
})
export class DocumentsModule {}
