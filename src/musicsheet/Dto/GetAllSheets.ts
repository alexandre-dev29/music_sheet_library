import { SheetMusic } from '@/music_sheet/types/@generated';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetAllSheets extends SheetMusic {}
