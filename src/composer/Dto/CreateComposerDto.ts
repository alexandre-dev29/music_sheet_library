import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateComposerDto {
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  biography!: string;
  @Field(() => Date, { nullable: true })
  birthDate: Date;
}
