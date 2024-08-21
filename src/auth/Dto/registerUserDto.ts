import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RegisterUserDto {
  @Field(() => String, { nullable: false })
  phoneNumber: string;
  @Field(() => String, { nullable: false })
  name: string;
}
