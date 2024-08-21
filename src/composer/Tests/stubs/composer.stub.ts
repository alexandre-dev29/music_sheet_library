import { Composer } from '@/music_sheet/types/@generated';

export const composerStub = (): Composer => {
  return {
    createdAt: new Date(2024, 8, 22),
    authorImageId: '',
    id: '1',
    updatedAt: new Date(2024, 8, 22),
    name: 'Johann Sebastian Bach',
    birthDate: new Date(1685, 3, 31),
    biography:
      'Johann Sebastian Bach was a German composer and musician of the late Baroque period. He is known for his prolific authorship of music across a variety of instruments and forms, including orchestra',
  };
};
