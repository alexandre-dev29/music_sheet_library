import { Field, InputType } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';

@InputType()
export class AddMusicSheetCommand {
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger!: string | null;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre!: string | null;
  @Field(() => String, { nullable: true })
  difficulty!: string | null;
  @Field(() => String, { nullable: true })
  description!: string | null;
  @Field(() => String, { nullable: true })
  year!: string | null;
  userId!: string | null;
  sheetFile?: FileUpload;

  constructor(
    title: string,
    composerId: string,
    arranger: string | null,
    instrument: string,
    genre: string | null,
    difficulty: string | null,
    description: string | null,
    year: string | null,
    sheetFile: FileUpload,
    userId: string,
  ) {
    this.title = title;
    this.composerId = composerId;
    this.arranger = arranger;
    this.instrument = instrument;
    this.genre = genre;
    this.difficulty = difficulty;
    this.description = description;
    this.year = year;
    this.sheetFile = sheetFile;
    this.userId = userId;
  }
}
