import { Field, ObjectType } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';

@ObjectType()
export class CreateComposerCommand {
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  biography!: string;
  @Field(() => Date, { nullable: true })
  birthDate: Date;
  @Field(() => GraphQLUpload, { nullable: false })
  composerImage: FileUpload;

  constructor(
    name: string,
    biography: string,
    composerImage: FileUpload,
    birthDate?: Date,
  ) {
    this.name = name;
    this.biography = biography;
    this.birthDate = birthDate;
    this.composerImage = composerImage;
  }
}
