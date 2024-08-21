import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginUserDto {
  @Field(() => String, { nullable: false })
  phoneNumber: string;
  @Field(() => String, { nullable: false })
  name: string;
  @Field(() => String, { nullable: false })
  accessToken: string;
}
