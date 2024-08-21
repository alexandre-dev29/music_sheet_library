import { Injectable } from '@nestjs/common';
import { CreateComposerCommand } from '@/music_sheet/composer/Commands/CreateComposer/CreateComposerCommand';
import { PrismaService } from '@/music_sheet/prisma.service';
import { CreateComposerDto } from '@/music_sheet/composer/Dto/CreateComposerDto';

@Injectable()
export class ComposerService {
  constructor(private readonly prismaService: PrismaService) {}

  async createNewComposer(
    command: CreateComposerCommand,
    {
      fileUrl,
      fileKey,
      bucketName,
    }: { fileKey: string; fileUrl: string; bucketName: string },
  ): Promise<CreateComposerDto> {
    const existingComposer = await this.prismaService.composer.findUnique({
      where: { name: command.name },
    });

    if (existingComposer) {
      throw new Error('Composer already exists with this name');
    }

    return this.prismaService.composer.create({
      data: {
        name: command.name,
        biography: command.biography,
        birthDate: command.birthDate,
        AuthorImage: {
          create: {
            fileKey: fileKey,
            bucket: bucketName,
            fileCompleteUrl: fileUrl,
          },
        },
      },
    });
  }
}
