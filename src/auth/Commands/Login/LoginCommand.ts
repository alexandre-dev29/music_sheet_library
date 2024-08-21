import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginCommand {
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;

  constructor(phoneNumber: string, password: string) {
    this.phoneNumber = phoneNumber;
    this.password = password;
  }
}
