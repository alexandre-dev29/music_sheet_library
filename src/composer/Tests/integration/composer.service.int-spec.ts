import { IntegrationTestManager } from '@/music_sheet/common/e2e/integrationTestManager';
import { CreateComposerDto } from '@/music_sheet/composer/Dto/createComposerDto';
import { composerStub } from '@/music_sheet/composer/Tests/stubs/composer.stub';
import { composerImageStub } from '@/music_sheet/composer/Tests/stubs/composerImage.stub';

describe('Composer Service Integration', () => {
  const integrationTestManager = new IntegrationTestManager();
  let newComposer: CreateComposerDto;

  beforeAll(async () => {
    await integrationTestManager.beforeAll();
    newComposer =
      await integrationTestManager.composerService.createNewComposer(
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
    await integrationTestManager.afterAll();
  });

  it('should create a new composer', async () => {
    expect(newComposer).toBeDefined();
    expect(typeof newComposer == 'object').toBe(true);
    expect(newComposer.name).toEqual(composerStub().name);
  });

  // it('it should update a composer', async () => {
  //   const updatedComposer =
  //     await integrationTestManager.composerService.updateComposer(
  //       composerStub().id,
  //       composerStub(),
  //     );
  //   expect(updatedComposer.id).toEqual(composerStub().id);
  //   // add more assertions here
  // });
  //
  it('it should fetch composers', async () => {
    const fetchedComposer =
      await integrationTestManager.composerService.getAllComposer({});
    expect(fetchedComposer.length).toBeGreaterThan(0);
    expect(fetchedComposer[0].name).toBe(composerStub().name);
    // add more assertions here
  });
  it('it should fetch a composer', async () => {
    const fetchedComposer =
      await integrationTestManager.composerService.getOneComposer({
        name: composerStub().name,
      });
    expect(fetchedComposer.name).toBe(composerStub().name);
    // add more assertions here
  });
});
