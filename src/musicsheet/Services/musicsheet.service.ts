import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/music_sheet/prisma.service';
import { AddMusicSheetDto } from '@/music_sheet/musicsheet/Dto/AddMusicSheetDto';
import { AddMusicSheetCommand } from '@/music_sheet/musicsheet/Commands/AddMusicSheet/AddMusicSheetCommand';
import { fileUploadResponse } from '@/music_sheet/documents/documents.service';
import slugify from 'slugify';

@Injectable()
export class MusicSheetService {
  constructor(private readonly prismaService: PrismaService) {}

  async addMusicSheet(
    {
      description,
      genre,
      instrument,
      arranger,
      difficulty,
      title,
      year,
      composerId,
      userId,
    }: AddMusicSheetCommand,
    thumbnailFile: fileUploadResponse,
    musicSheetFile: fileUploadResponse,
  ): Promise<AddMusicSheetDto> {
    const verifyComposer = await this.prismaService.composer.findUnique({
      where: { id: composerId },
    });

    if (!verifyComposer) {
      throw new Error('Composer does not exists with this name');
    }
    const musicSheetSlug = this.createUniqueSlug(title);

    const createdSheet = await this.prismaService.sheetMusic.create({
      data: {
        description: description,
        genre: genre,
        instrument: instrument,
        arranger: arranger,
        slug: musicSheetSlug,
        difficulty: difficulty,
        title: title,
        year: year,
        thumbnail: {
          create: {
            fileKey: thumbnailFile.fileKey,
            bucket: thumbnailFile.bucket,
            fileCompleteUrl: thumbnailFile.url,
          },
        },
        sheetFile: {
          create: {
            fileKey: musicSheetFile.fileKey,
            bucket: musicSheetFile.bucket,
            fileCompleteUrl: musicSheetFile.url,
          },
        },
        Composer: {
          connect: { id: verifyComposer.id },
        },
        UploadedBy: {
          connect: { id: userId },
        },
      },
    });
    return { ...createdSheet };
  }

  createUniqueSlug(title: string) {
    let slug = slugify(title, { lower: true, strict: true });

    // Generate a unique random identifier using Math.random()
    let suffix = Math.random().toString(36).slice(2, 7);

    // Append the identifier to your slug
    slug = `${slug}-${suffix}`;

    return slug;
  }
}
