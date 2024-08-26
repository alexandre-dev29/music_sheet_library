import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  Composer,
  ComposerWhereInput,
  ComposerWhereUniqueInput,
} from '@/music_sheet/types/@generated';
import { RegisterUserDto } from '@/music_sheet/auth/Dto/registerUserDto';
import { CreateComposerDto } from '@/music_sheet/composer/Dto/CreateComposerDto';
import { CreateComposerCommand } from '@/music_sheet/composer/Commands/CreateComposer/CreateComposerCommand';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';
import { GetAllComposerQuery } from '@/music_sheet/composer/Queries/GetAllComposer/GetAllComposerQuery';
import { GetOneComposerQuery } from '@/music_sheet/composer/Queries/GetOneComposer/GetOneComposerQuery';

@Resolver(() => Composer)
export class ComposerResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Mutation(() => CreateComposerDto)
  async createComposer(
    @Args({ name: 'imageComposer', type: () => GraphQLUpload })
    composerFile: FileUpload,
    @Args({ name: 'composerData', type: () => CreateComposerCommand })
    { name, composerImage, birthDate, biography }: CreateComposerCommand,
  ): Promise<RegisterUserDto> {
    return this.commandBus.execute(
      new CreateComposerCommand(name, biography, composerFile, birthDate),
    );
  }

  @Query(() => [Composer])
  composers(
    @Args({ name: 'filtering', type: () => ComposerWhereInput })
    filtering: ComposerWhereInput,
  ): Promise<Array<Composer>> {
    return this.queryBus.execute(new GetAllComposerQuery(filtering));
  }

  @Query(() => Composer)
  composer(
    @Args({ name: 'filtering', type: () => ComposerWhereUniqueInput })
    filtering: ComposerWhereUniqueInput,
  ): Promise<Composer> {
    return this.queryBus.execute(new GetOneComposerQuery(filtering));
  }
}
