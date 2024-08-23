import request from 'supertest-graphql';
import gql from 'graphql-tag';
import { E2ETestManager } from '@/music_sheet/common/e2e/e2eTestManager';
import { composerStub } from '@/music_sheet/composer/Tests/stubs/composer.stub';
import { composerImageStub } from '@/music_sheet/composer/Tests/stubs/composerImage.stub';
import { GetAllComposerDto } from '@/music_sheet/composer/Dto/GetAllComposerDto';
import {
  ComposerWhereInput,
  ComposerWhereUniqueInput,
} from '@/music_sheet/types/@generated';
import { GraphQLError } from 'graphql/error';

describe('Get all composers', () => {
  const e2eTestManager = new E2ETestManager();
  beforeAll(async () => {
    await e2eTestManager.beforeAll();
    await e2eTestManager.composerService.createNewComposer(
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
  });
  afterAll(async () => {
    await e2eTestManager.afterAll();
  });

  describe('given that the composers exist', () => {
    let composerDto: GetAllComposerDto[];
    beforeAll(async () => {
      const response = await request<{ composers: GetAllComposerDto[] }>(
        e2eTestManager.httpServer,
      )
        .query(gql`
          query GetOneComposer($filtering: ComposerWhereInput!) {
            composers(filtering: $filtering) {
              name
              biography
              birthDate
            }
          }
        `)
        .variables({
          filtering: {
            name: { equals: composerStub().name },
          } as ComposerWhereInput,
        })
        .expectNoErrors();
      composerDto = response.data.composers;
    });
    afterAll(async () => {
      await e2eTestManager.prismaService.user.deleteMany({});
    });
    test('then the response should be a list of composers', async () => {
      expect(composerDto.length).toBeGreaterThanOrEqual(1);
      expect(composerDto[0].name).toBe(composerStub().name);
      expect(composerDto[0].biography).toBe(composerStub().biography);
    });
  });
  describe('given that the composer does not exist', () => {
    let composerDto: GetAllComposerDto[];
    beforeAll(async () => {
      await e2eTestManager.prismaService.composer.deleteMany({});
      const response = await request<{ composers: GetAllComposerDto[] }>(
        e2eTestManager.httpServer,
      )
        .query(gql`
          query GetOneComposer($filtering: ComposerWhereInput!) {
            composers(filtering: $filtering) {
              name
              biography
              birthDate
            }
          }
        `)
        .variables({
          filtering: {
            name: { equals: composerStub().name },
          } as ComposerWhereInput,
        })
        .expectNoErrors();
      composerDto = response.data.composers;
    });
    afterAll(async () => {
      await e2eTestManager.prismaService.user.deleteMany({});
    });
    test('then the response should be an empty array', async () => {
      expect(composerDto.length).toBe(0);
    });
  });
});
