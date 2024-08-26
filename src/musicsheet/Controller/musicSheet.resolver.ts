import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SheetMusic } from '@/music_sheet/types/@generated';
import { CommandBus } from '@nestjs/cqrs';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';
import { RegisterUserDto } from '@/music_sheet/auth/Dto/registerUserDto';
import { AddMusicSheetCommand } from '@/music_sheet/musicsheet/Commands/AddMusicSheet/AddMusicSheetCommand';
import { AddMusicSheetDto } from '@/music_sheet/musicsheet/Dto/AddMusicSheetDto';
import { AccessGuard, UseAbility } from 'nest-casl';
import { UseGuards } from '@nestjs/common';
import { MainAuthGuardGuard } from '@/music_sheet/common/security/auth.guard';
import { MusicSheetsActions } from '@/music_sheet/musicsheet/Security/musicSheetsActions';
import { CurrentUser } from '@/music_sheet/common/security/auth.decorator';
import { UserSecurity } from '@/music_sheet/common/security/user.security';

@Resolver(() => SheetMusic)
export class MusicSheetResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(MusicSheetsActions.addMusicSheet, SheetMusic)
  @Mutation(() => AddMusicSheetDto)
  async addMusicSheet(
    @Args({ name: 'sheetFile', type: () => GraphQLUpload })
    musicSheetFile: FileUpload,
    @Args({ name: 'musicDatas', type: () => AddMusicSheetCommand })
    {
      composerId,
      year,
      userId,
      difficulty,
      title,
      description,
      instrument,
      arranger,
      genre,
    }: AddMusicSheetCommand,
    @CurrentUser() currentUser: UserSecurity,
  ): Promise<RegisterUserDto> {
    return this.commandBus.execute(
      new AddMusicSheetCommand(
        title,
        composerId,
        arranger,
        instrument,
        genre,
        difficulty,
        description,
        year,
        musicSheetFile,
        '78d49fd2-c512-4ef0-940e-010ea2325a67',
      ),
    );
  }

  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(MusicSheetsActions.getOneMusicSheet, SheetMusic)
  @Mutation(() => String)
  async testAuthorization(
    @Args({ name: 'message', type: () => String })
    musicSheetFile: string,
    @CurrentUser() currentUser: UserSecurity,
  ) {
    console.log(currentUser);
    return musicSheetFile;
  }
}
