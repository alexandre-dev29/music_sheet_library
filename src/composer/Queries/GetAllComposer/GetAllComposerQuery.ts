import { ComposerWhereInput } from '@/music_sheet/types/@generated';

export class GetAllComposerQuery {
  filtering: ComposerWhereInput;

  constructor(filtering: ComposerWhereInput) {
    this.filtering = filtering;
  }
}
