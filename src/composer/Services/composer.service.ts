import { Injectable } from '@nestjs/common';
import { CreateComposerCommand } from '@/music_sheet/composer/Commands/CreateComposer/CreateComposerCommand';
import { PrismaService } from '@/music_sheet/prisma.service';
import { CreateComposerDto } from '@/music_sheet/composer/Dto/CreateComposerDto';
import {
  ComposerWhereInput,
  ComposerWhereUniqueInput,
  FindManyComposerArgs,
  FindUniqueComposerArgs,
} from '@/music_sheet/types/@generated';
import { Prisma } from '@prisma/client';

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

  getAllComposer(filtering: ComposerWhereInput) {
    return this.prismaService.composer.findMany({
      where: filtering,
      include: { AuthorImage: true },
    });
  }

  getOneComposer(filtering: ComposerWhereUniqueInput) {
    return this.prismaService.composer.findUnique({
      where: { ...filtering } as Prisma.ComposerWhereUniqueInput,
      include: { AuthorImage: true },
    });
  }
}
