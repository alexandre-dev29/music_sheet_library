import { FileStorage } from '@/music_sheet/types/@generated';

export const composerImageStub = (): FileStorage => {
  return {
    bucket: 'music_sheet_library',
    fileCompleteUrl: 'https://google.com',
    fileKey: '10',
    createdAt: new Date(2024, 8, 22),
    updatedAt: new Date(2024, 8, 22),
    id: '10',
  };
};
