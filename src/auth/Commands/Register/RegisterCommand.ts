import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterCommand {
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: true })
  name!: string | null;

  constructor(phoneNumber: string, password: string, name: string | null) {
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.name = name;
  }
}

// export class RegisterCommand {
//   constructor(
//     public phoneNumber: string,
//     public password: string,
//     public name: string,
//   ) {}
// }
