import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AddMusicSheetDto {
  @Field(() => ID, { nullable: false })
  id!: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger!: string | null;
  @Field(() => String, { nullable: false })
  instrument!: string;
}
