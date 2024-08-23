import {
  ComposerWhereUniqueInput,
  FindUniqueComposerArgs,
} from '@/music_sheet/types/@generated';

export class GetOneComposerQuery {
  filtering: ComposerWhereUniqueInput;

  constructor(filtering: ComposerWhereUniqueInput) {
    this.filtering = filtering;
  }
}
