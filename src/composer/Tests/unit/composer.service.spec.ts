import { Test } from '@nestjs/testing';
import { ComposerModule } from '../../composer.module';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaService } from '@/music_sheet/prisma.service';
import { ComposerService } from '@/music_sheet/composer/Services/composer.service';
import { composerStub } from '@/music_sheet/composer/Tests/stubs/composer.stub';
import { composerImageStub } from '@/music_sheet/composer/Tests/stubs/composerImage.stub';
import { DocumentsService } from '@/music_sheet/documents/documents.service';
import { ConfigService } from '@nestjs/config';

describe('ComposerService', () => {
  let composerService: ComposerService;
  let prisma: DeepMockProxy<PrismaClient>;
  let documentService: DeepMockProxy<DocumentsService>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ComposerModule],
      providers: [
        ComposerService,
        PrismaService,
        ConfigService,
        DocumentsService,
      ],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep(PrismaClient))
      .overrideProvider(DocumentsService)
      .useValue(mockDeep(DocumentsService))
      .compile();

    composerService = moduleRef.get<ComposerService>(ComposerService);
    prisma = moduleRef.get(PrismaService);
    documentService = moduleRef.get(DocumentsService);
  });

  it('should be defined', () => {
    expect(composerService).toBeDefined();
  });

  describe('createComposer', () => {
    it('should create a new composer and return it', async () => {
      // @ts-ignore
      prisma.composer.create.mockResolvedValueOnce(composerStub());
      documentService.uploadSingleFile.mockResolvedValueOnce({
        bucket: composerImageStub().bucket,
        fileKey: composerImageStub().fileKey,
        url: composerImageStub().fileCompleteUrl,
      });

      const result = await composerService.createNewComposer(
        {
          composerImage: null,
          name: composerStub().name,
          birthDate: composerStub().birthDate,
          biography: composerStub().biography,
        },
        {
          fileKey: composerImageStub().fileKey,
          bucketName: composerImageStub().bucket,
          fileUrl: composerImageStub().fileCompleteUrl,
        },
      );

      expect(result).toEqual(composerStub());
    });
  });

  // describe('updateComposer', () => {
  //   it('should update a composer and return it', async () => {
  //     prisma.composer.update.mockResolvedValueOnce(composerStub());
  //
  //     const result = await composerService.updateComposer(
  //       composerStub().id,
  //       composerStub(),
  //     );
  //
  //     expect(result).toEqual(composerStub());
  //   });
  // });
  //
  describe('fetchComposers', () => {
    it('should fetch a list of composers and return it', async () => {
      prisma.composer.findMany.mockResolvedValueOnce([composerStub()]);
      const result = await composerService.getAllComposer({});

      expect(result).toMatchObject([composerStub()]);
    });
  });
  describe('fetchComposer', () => {
    it('should fetch a composer and return it', async () => {
      prisma.composer.findUnique.mockResolvedValueOnce(composerStub());

      const result = await composerService.getOneComposer({
        name: '',
      });

      expect(result).toMatchObject(composerStub());
    });
  });
});
