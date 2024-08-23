import request from 'supertest-graphql';
import gql from 'graphql-tag';
import { E2ETestManager } from '@/music_sheet/common/e2e/e2eTestManager';
import { composerStub } from '@/music_sheet/composer/Tests/stubs/composer.stub';
import { composerImageStub } from '@/music_sheet/composer/Tests/stubs/composerImage.stub';
import { GetAllComposerDto } from '@/music_sheet/composer/Dto/GetAllComposerDto';
import { ComposerWhereUniqueInput } from '@/music_sheet/types/@generated';
import { GraphQLError } from 'graphql/error';

describe('Get one composer', () => {
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

  describe('given that the composer exist', () => {
    let composerDto: GetAllComposerDto;
    beforeAll(async () => {
      const response = await request<{ composer: GetAllComposerDto }>(
        e2eTestManager.httpServer,
      )
        .query(gql`
          query GetOneComposer($filtering: ComposerWhereUniqueInput!) {
            composer(filtering: $filtering) {
              name
              biography
              birthDate
            }
          }
        `)
        .variables({
          filtering: {
            name: composerStub().name,
          } as ComposerWhereUniqueInput,
        })
        .expectNoErrors();
      composerDto = response.data.composer;
    });
    afterAll(async () => {
      await e2eTestManager.prismaService.user.deleteMany({});
    });
    test('then the response should be the newly logged user', async () => {
      expect(composerDto.name).toBe(composerStub().name);
      expect(composerDto.biography).toBe(composerStub().biography);
    });
  });
  describe('given that the user does not  exist', () => {
    let graphQLErrors: ReadonlyArray<GraphQLError> | undefined;
    beforeAll(async () => {
      await e2eTestManager.prismaService.composer.deleteMany({});
      const response = await request<{ composer: GetAllComposerDto }>(
        e2eTestManager.httpServer,
      )
        .query(gql`
          query GetOneComposer($filtering: ComposerWhereUniqueInput!) {
            composer(filtering: $filtering) {
              name
              biography
              birthDate
            }
          }
        `)
        .variables({
          filtering: {
            name: composerStub().name,
          } as ComposerWhereUniqueInput,
        });
      graphQLErrors = response.errors;
    });
    afterAll(async () => {
      await e2eTestManager.prismaService.composer.deleteMany({});
    });
    test('then the response should be the newly logged user', async () => {
      expect(graphQLErrors.length).toBeGreaterThan(0);
      expect(graphQLErrors[0].message).toBe(
        'Cannot return null for non-nullable field Query.composer.',
      );
    });
  });
});
