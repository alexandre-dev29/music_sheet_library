import { InferSubjects, Permissions } from 'nest-casl';
import { MusicSheetsActions } from '@/music_sheet/musicsheet/Security/musicSheetsActions';
import { Roles, SheetMusic } from '@/music_sheet/types/@generated';

export type Subject = InferSubjects<typeof SheetMusic>;
export const musicSheetsPermissions: Permissions<
  Roles,
  Subject,
  MusicSheetsActions
> = {
  ADMIN({ user, can }) {
    can(MusicSheetsActions.manageMusicSheet, SheetMusic);
  },
  USER({ user, can }) {
    can(MusicSheetsActions.updateMusicSheet, SheetMusic, {
      uploadedById: user.id,
    });
    can(MusicSheetsActions.deleteMusicSheet, SheetMusic, {
      uploadedById: user.id,
    });
    can(MusicSheetsActions.addMusicSheet, SheetMusic, {});
  },
  everyone({ can }) {
    can(MusicSheetsActions.getAllMusicSheet, SheetMusic);
    can(MusicSheetsActions.getOneMusicSheet, SheetMusic);
  },
};
