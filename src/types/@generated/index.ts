import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  phoneNumber = 'phoneNumber',
  password = 'password',
  name = 'name',
  role = 'role',
  biography = 'biography',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum SheetMusicScalarFieldEnum {
  id = 'id',
  title = 'title',
  slug = 'slug',
  composerId = 'composerId',
  arranger = 'arranger',
  instrument = 'instrument',
  genre = 'genre',
  difficulty = 'difficulty',
  description = 'description',
  year = 'year',
  fileId = 'fileId',
  thumbnailId = 'thumbnailId',
  numberOfDownloads = 'numberOfDownloads',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  uploadedById = 'uploadedById',
}

export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum Roles {
  USER = 'USER',
  ADMIN = 'ADMIN',
  COMPOSER = 'COMPOSER',
  SUPERADMIN = 'SUPERADMIN',
}

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

export enum NullsOrder {
  first = 'first',
  last = 'last',
}

export enum FileStorageScalarFieldEnum {
  id = 'id',
  bucket = 'bucket',
  fileKey = 'fileKey',
  fileCompleteUrl = 'fileCompleteUrl',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum FavoritesScalarFieldEnum {
  userId = 'userId',
  sheetMusicId = 'sheetMusicId',
  addedAt = 'addedAt',
}

export enum ComposerScalarFieldEnum {
  id = 'id',
  name = 'name',
  birthDate = 'birthDate',
  biography = 'biography',
  authorImageId = 'authorImageId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(ComposerScalarFieldEnum, {
  name: 'ComposerScalarFieldEnum',
  description: undefined,
});
registerEnumType(FavoritesScalarFieldEnum, {
  name: 'FavoritesScalarFieldEnum',
  description: undefined,
});
registerEnumType(FileStorageScalarFieldEnum, {
  name: 'FileStorageScalarFieldEnum',
  description: undefined,
});
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined });
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
registerEnumType(Roles, { name: 'Roles', description: undefined });
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
registerEnumType(TransactionIsolationLevel, {
  name: 'TransactionIsolationLevel',
  description: undefined,
});
registerEnumType(SheetMusicScalarFieldEnum, {
  name: 'SheetMusicScalarFieldEnum',
  description: undefined,
});
registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});

@ObjectType()
export class AggregateComposer {
  @Field(() => ComposerCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ComposerCountAggregate>;
  @Field(() => ComposerMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ComposerMinAggregate>;
  @Field(() => ComposerMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ComposerMaxAggregate>;
}

@ArgsType()
export class ComposerAggregateArgs {
  @Field(() => ComposerWhereInput, { nullable: true })
  @Type(() => ComposerWhereInput)
  where?: InstanceType<typeof ComposerWhereInput>;
  @Field(() => [ComposerOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ComposerOrderByWithRelationInput>;
  @Field(() => ComposerWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    ComposerWhereUniqueInput,
    'id' | 'name' | 'birthDate'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ComposerCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ComposerCountAggregateInput>;
  @Field(() => ComposerMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ComposerMinAggregateInput>;
  @Field(() => ComposerMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ComposerMaxAggregateInput>;
}

@InputType()
export class ComposerCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  birthDate?: true;
  @Field(() => Boolean, { nullable: true })
  biography?: true;
  @Field(() => Boolean, { nullable: true })
  authorImageId?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class ComposerCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @Field(() => Int, { nullable: false })
  birthDate!: number;
  @Field(() => Int, { nullable: false })
  biography!: number;
  @Field(() => Int, { nullable: false })
  authorImageId!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class ComposerCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  birthDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  biography?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  authorImageId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class ComposerCount {
  @Field(() => Int, { nullable: false })
  MusicSheets?: number;
}

@InputType()
export class ComposerCreateManyAuthorImageInputEnvelope {
  @Field(() => [ComposerCreateManyAuthorImageInput], { nullable: false })
  @Type(() => ComposerCreateManyAuthorImageInput)
  data!: Array<ComposerCreateManyAuthorImageInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class ComposerCreateManyAuthorImageInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ComposerCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => String, { nullable: true })
  authorImageId?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ComposerCreateNestedManyWithoutAuthorImageInput {
  @Field(() => [ComposerCreateWithoutAuthorImageInput], { nullable: true })
  @Type(() => ComposerCreateWithoutAuthorImageInput)
  create?: Array<ComposerCreateWithoutAuthorImageInput>;
  @Field(() => [ComposerCreateOrConnectWithoutAuthorImageInput], {
    nullable: true,
  })
  @Type(() => ComposerCreateOrConnectWithoutAuthorImageInput)
  connectOrCreate?: Array<ComposerCreateOrConnectWithoutAuthorImageInput>;
  @Field(() => ComposerCreateManyAuthorImageInputEnvelope, { nullable: true })
  @Type(() => ComposerCreateManyAuthorImageInputEnvelope)
  createMany?: InstanceType<typeof ComposerCreateManyAuthorImageInputEnvelope>;
  @Field(() => [ComposerWhereUniqueInput], { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>
  >;
}

@InputType()
export class ComposerCreateNestedOneWithoutMusicSheetsInput {
  @Field(() => ComposerCreateWithoutMusicSheetsInput, { nullable: true })
  @Type(() => ComposerCreateWithoutMusicSheetsInput)
  create?: InstanceType<typeof ComposerCreateWithoutMusicSheetsInput>;
  @Field(() => ComposerCreateOrConnectWithoutMusicSheetsInput, {
    nullable: true,
  })
  @Type(() => ComposerCreateOrConnectWithoutMusicSheetsInput)
  connectOrCreate?: InstanceType<
    typeof ComposerCreateOrConnectWithoutMusicSheetsInput
  >;
  @Field(() => ComposerWhereUniqueInput, { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  connect?: Prisma.AtLeast<
    ComposerWhereUniqueInput,
    'id' | 'name' | 'birthDate'
  >;
}

@InputType()
export class ComposerCreateOrConnectWithoutAuthorImageInput {
  @Field(() => ComposerWhereUniqueInput, { nullable: false })
  @Type(() => ComposerWhereUniqueInput)
  where!: Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>;
  @Field(() => ComposerCreateWithoutAuthorImageInput, { nullable: false })
  @Type(() => ComposerCreateWithoutAuthorImageInput)
  create!: InstanceType<typeof ComposerCreateWithoutAuthorImageInput>;
}

@InputType()
export class ComposerCreateOrConnectWithoutMusicSheetsInput {
  @Field(() => ComposerWhereUniqueInput, { nullable: false })
  @Type(() => ComposerWhereUniqueInput)
  where!: Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>;
  @Field(() => ComposerCreateWithoutMusicSheetsInput, { nullable: false })
  @Type(() => ComposerCreateWithoutMusicSheetsInput)
  create!: InstanceType<typeof ComposerCreateWithoutMusicSheetsInput>;
}

@InputType()
export class ComposerCreateWithoutAuthorImageInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicCreateNestedManyWithoutComposerInput, {
    nullable: true,
  })
  MusicSheets?: InstanceType<
    typeof SheetMusicCreateNestedManyWithoutComposerInput
  >;
}

@InputType()
export class ComposerCreateWithoutMusicSheetsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FileStorageCreateNestedOneWithoutComposersInput, {
    nullable: true,
  })
  AuthorImage?: InstanceType<
    typeof FileStorageCreateNestedOneWithoutComposersInput
  >;
}

@InputType()
export class ComposerCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FileStorageCreateNestedOneWithoutComposersInput, {
    nullable: true,
  })
  AuthorImage?: InstanceType<
    typeof FileStorageCreateNestedOneWithoutComposersInput
  >;
  @Field(() => SheetMusicCreateNestedManyWithoutComposerInput, {
    nullable: true,
  })
  MusicSheets?: InstanceType<
    typeof SheetMusicCreateNestedManyWithoutComposerInput
  >;
}

@ArgsType()
export class ComposerGroupByArgs {
  @Field(() => ComposerWhereInput, { nullable: true })
  @Type(() => ComposerWhereInput)
  where?: InstanceType<typeof ComposerWhereInput>;
  @Field(() => [ComposerOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ComposerOrderByWithAggregationInput>;
  @Field(() => [ComposerScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ComposerScalarFieldEnum>;
  @Field(() => ComposerScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof ComposerScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ComposerCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ComposerCountAggregateInput>;
  @Field(() => ComposerMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ComposerMinAggregateInput>;
  @Field(() => ComposerMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ComposerMaxAggregateInput>;
}

@ObjectType()
export class ComposerGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => String, { nullable: true })
  authorImageId?: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => ComposerCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ComposerCountAggregate>;
  @Field(() => ComposerMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ComposerMinAggregate>;
  @Field(() => ComposerMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ComposerMaxAggregate>;
}

@InputType()
export class ComposerListRelationFilter {
  @Field(() => ComposerWhereInput, { nullable: true })
  every?: InstanceType<typeof ComposerWhereInput>;
  @Field(() => ComposerWhereInput, { nullable: true })
  some?: InstanceType<typeof ComposerWhereInput>;
  @Field(() => ComposerWhereInput, { nullable: true })
  none?: InstanceType<typeof ComposerWhereInput>;
}

@InputType()
export class ComposerMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  birthDate?: true;
  @Field(() => Boolean, { nullable: true })
  biography?: true;
  @Field(() => Boolean, { nullable: true })
  authorImageId?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class ComposerMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => String, { nullable: true })
  authorImageId?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ComposerMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  birthDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  biography?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  authorImageId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ComposerMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  birthDate?: true;
  @Field(() => Boolean, { nullable: true })
  biography?: true;
  @Field(() => Boolean, { nullable: true })
  authorImageId?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class ComposerMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => String, { nullable: true })
  authorImageId?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ComposerMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  birthDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  biography?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  authorImageId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ComposerOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class ComposerOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  birthDate?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  biography?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  authorImageId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => ComposerCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ComposerCountOrderByAggregateInput>;
  @Field(() => ComposerMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ComposerMaxOrderByAggregateInput>;
  @Field(() => ComposerMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ComposerMinOrderByAggregateInput>;
}

@InputType()
export class ComposerOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  birthDate?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  biography?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  authorImageId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => FileStorageOrderByWithRelationInput, { nullable: true })
  AuthorImage?: InstanceType<typeof FileStorageOrderByWithRelationInput>;
  @Field(() => SheetMusicOrderByRelationAggregateInput, { nullable: true })
  MusicSheets?: InstanceType<typeof SheetMusicOrderByRelationAggregateInput>;
}

@InputType()
export class ComposerRelationFilter {
  @Field(() => ComposerWhereInput, { nullable: true })
  is?: InstanceType<typeof ComposerWhereInput>;
  @Field(() => ComposerWhereInput, { nullable: true })
  isNot?: InstanceType<typeof ComposerWhereInput>;
}

@InputType()
export class ComposerScalarWhereWithAggregatesInput {
  @Field(() => [ComposerScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ComposerScalarWhereWithAggregatesInput>;
  @Field(() => [ComposerScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ComposerScalarWhereWithAggregatesInput>;
  @Field(() => [ComposerScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ComposerScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  birthDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  biography?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  authorImageId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ComposerScalarWhereInput {
  @Field(() => [ComposerScalarWhereInput], { nullable: true })
  AND?: Array<ComposerScalarWhereInput>;
  @Field(() => [ComposerScalarWhereInput], { nullable: true })
  OR?: Array<ComposerScalarWhereInput>;
  @Field(() => [ComposerScalarWhereInput], { nullable: true })
  NOT?: Array<ComposerScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  birthDate?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  biography?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  authorImageId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ComposerUncheckedCreateNestedManyWithoutAuthorImageInput {
  @Field(() => [ComposerCreateWithoutAuthorImageInput], { nullable: true })
  @Type(() => ComposerCreateWithoutAuthorImageInput)
  create?: Array<ComposerCreateWithoutAuthorImageInput>;
  @Field(() => [ComposerCreateOrConnectWithoutAuthorImageInput], {
    nullable: true,
  })
  @Type(() => ComposerCreateOrConnectWithoutAuthorImageInput)
  connectOrCreate?: Array<ComposerCreateOrConnectWithoutAuthorImageInput>;
  @Field(() => ComposerCreateManyAuthorImageInputEnvelope, { nullable: true })
  @Type(() => ComposerCreateManyAuthorImageInputEnvelope)
  createMany?: InstanceType<typeof ComposerCreateManyAuthorImageInputEnvelope>;
  @Field(() => [ComposerWhereUniqueInput], { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>
  >;
}

@InputType()
export class ComposerUncheckedCreateWithoutAuthorImageInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicUncheckedCreateNestedManyWithoutComposerInput, {
    nullable: true,
  })
  MusicSheets?: InstanceType<
    typeof SheetMusicUncheckedCreateNestedManyWithoutComposerInput
  >;
}

@InputType()
export class ComposerUncheckedCreateWithoutMusicSheetsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => String, { nullable: true })
  authorImageId?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ComposerUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => String, { nullable: true })
  authorImageId?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicUncheckedCreateNestedManyWithoutComposerInput, {
    nullable: true,
  })
  MusicSheets?: InstanceType<
    typeof SheetMusicUncheckedCreateNestedManyWithoutComposerInput
  >;
}

@InputType()
export class ComposerUncheckedUpdateManyWithoutAuthorImageNestedInput {
  @Field(() => [ComposerCreateWithoutAuthorImageInput], { nullable: true })
  @Type(() => ComposerCreateWithoutAuthorImageInput)
  create?: Array<ComposerCreateWithoutAuthorImageInput>;
  @Field(() => [ComposerCreateOrConnectWithoutAuthorImageInput], {
    nullable: true,
  })
  @Type(() => ComposerCreateOrConnectWithoutAuthorImageInput)
  connectOrCreate?: Array<ComposerCreateOrConnectWithoutAuthorImageInput>;
  @Field(() => [ComposerUpsertWithWhereUniqueWithoutAuthorImageInput], {
    nullable: true,
  })
  @Type(() => ComposerUpsertWithWhereUniqueWithoutAuthorImageInput)
  upsert?: Array<ComposerUpsertWithWhereUniqueWithoutAuthorImageInput>;
  @Field(() => ComposerCreateManyAuthorImageInputEnvelope, { nullable: true })
  @Type(() => ComposerCreateManyAuthorImageInputEnvelope)
  createMany?: InstanceType<typeof ComposerCreateManyAuthorImageInputEnvelope>;
  @Field(() => [ComposerWhereUniqueInput], { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>
  >;
  @Field(() => [ComposerWhereUniqueInput], { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>
  >;
  @Field(() => [ComposerWhereUniqueInput], { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>
  >;
  @Field(() => [ComposerWhereUniqueInput], { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>
  >;
  @Field(() => [ComposerUpdateWithWhereUniqueWithoutAuthorImageInput], {
    nullable: true,
  })
  @Type(() => ComposerUpdateWithWhereUniqueWithoutAuthorImageInput)
  update?: Array<ComposerUpdateWithWhereUniqueWithoutAuthorImageInput>;
  @Field(() => [ComposerUpdateManyWithWhereWithoutAuthorImageInput], {
    nullable: true,
  })
  @Type(() => ComposerUpdateManyWithWhereWithoutAuthorImageInput)
  updateMany?: Array<ComposerUpdateManyWithWhereWithoutAuthorImageInput>;
  @Field(() => [ComposerScalarWhereInput], { nullable: true })
  @Type(() => ComposerScalarWhereInput)
  deleteMany?: Array<ComposerScalarWhereInput>;
}

@InputType()
export class ComposerUncheckedUpdateManyWithoutAuthorImageInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ComposerUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  authorImageId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ComposerUncheckedUpdateWithoutAuthorImageInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUncheckedUpdateManyWithoutComposerNestedInput, {
    nullable: true,
  })
  MusicSheets?: InstanceType<
    typeof SheetMusicUncheckedUpdateManyWithoutComposerNestedInput
  >;
}

@InputType()
export class ComposerUncheckedUpdateWithoutMusicSheetsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  authorImageId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ComposerUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  authorImageId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUncheckedUpdateManyWithoutComposerNestedInput, {
    nullable: true,
  })
  MusicSheets?: InstanceType<
    typeof SheetMusicUncheckedUpdateManyWithoutComposerNestedInput
  >;
}

@InputType()
export class ComposerUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ComposerUpdateManyWithWhereWithoutAuthorImageInput {
  @Field(() => ComposerScalarWhereInput, { nullable: false })
  @Type(() => ComposerScalarWhereInput)
  where!: InstanceType<typeof ComposerScalarWhereInput>;
  @Field(() => ComposerUpdateManyMutationInput, { nullable: false })
  @Type(() => ComposerUpdateManyMutationInput)
  data!: InstanceType<typeof ComposerUpdateManyMutationInput>;
}

@InputType()
export class ComposerUpdateManyWithoutAuthorImageNestedInput {
  @Field(() => [ComposerCreateWithoutAuthorImageInput], { nullable: true })
  @Type(() => ComposerCreateWithoutAuthorImageInput)
  create?: Array<ComposerCreateWithoutAuthorImageInput>;
  @Field(() => [ComposerCreateOrConnectWithoutAuthorImageInput], {
    nullable: true,
  })
  @Type(() => ComposerCreateOrConnectWithoutAuthorImageInput)
  connectOrCreate?: Array<ComposerCreateOrConnectWithoutAuthorImageInput>;
  @Field(() => [ComposerUpsertWithWhereUniqueWithoutAuthorImageInput], {
    nullable: true,
  })
  @Type(() => ComposerUpsertWithWhereUniqueWithoutAuthorImageInput)
  upsert?: Array<ComposerUpsertWithWhereUniqueWithoutAuthorImageInput>;
  @Field(() => ComposerCreateManyAuthorImageInputEnvelope, { nullable: true })
  @Type(() => ComposerCreateManyAuthorImageInputEnvelope)
  createMany?: InstanceType<typeof ComposerCreateManyAuthorImageInputEnvelope>;
  @Field(() => [ComposerWhereUniqueInput], { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>
  >;
  @Field(() => [ComposerWhereUniqueInput], { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>
  >;
  @Field(() => [ComposerWhereUniqueInput], { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>
  >;
  @Field(() => [ComposerWhereUniqueInput], { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>
  >;
  @Field(() => [ComposerUpdateWithWhereUniqueWithoutAuthorImageInput], {
    nullable: true,
  })
  @Type(() => ComposerUpdateWithWhereUniqueWithoutAuthorImageInput)
  update?: Array<ComposerUpdateWithWhereUniqueWithoutAuthorImageInput>;
  @Field(() => [ComposerUpdateManyWithWhereWithoutAuthorImageInput], {
    nullable: true,
  })
  @Type(() => ComposerUpdateManyWithWhereWithoutAuthorImageInput)
  updateMany?: Array<ComposerUpdateManyWithWhereWithoutAuthorImageInput>;
  @Field(() => [ComposerScalarWhereInput], { nullable: true })
  @Type(() => ComposerScalarWhereInput)
  deleteMany?: Array<ComposerScalarWhereInput>;
}

@InputType()
export class ComposerUpdateOneRequiredWithoutMusicSheetsNestedInput {
  @Field(() => ComposerCreateWithoutMusicSheetsInput, { nullable: true })
  @Type(() => ComposerCreateWithoutMusicSheetsInput)
  create?: InstanceType<typeof ComposerCreateWithoutMusicSheetsInput>;
  @Field(() => ComposerCreateOrConnectWithoutMusicSheetsInput, {
    nullable: true,
  })
  @Type(() => ComposerCreateOrConnectWithoutMusicSheetsInput)
  connectOrCreate?: InstanceType<
    typeof ComposerCreateOrConnectWithoutMusicSheetsInput
  >;
  @Field(() => ComposerUpsertWithoutMusicSheetsInput, { nullable: true })
  @Type(() => ComposerUpsertWithoutMusicSheetsInput)
  upsert?: InstanceType<typeof ComposerUpsertWithoutMusicSheetsInput>;
  @Field(() => ComposerWhereUniqueInput, { nullable: true })
  @Type(() => ComposerWhereUniqueInput)
  connect?: Prisma.AtLeast<
    ComposerWhereUniqueInput,
    'id' | 'name' | 'birthDate'
  >;
  @Field(() => ComposerUpdateToOneWithWhereWithoutMusicSheetsInput, {
    nullable: true,
  })
  @Type(() => ComposerUpdateToOneWithWhereWithoutMusicSheetsInput)
  update?: InstanceType<
    typeof ComposerUpdateToOneWithWhereWithoutMusicSheetsInput
  >;
}

@InputType()
export class ComposerUpdateToOneWithWhereWithoutMusicSheetsInput {
  @Field(() => ComposerWhereInput, { nullable: true })
  @Type(() => ComposerWhereInput)
  where?: InstanceType<typeof ComposerWhereInput>;
  @Field(() => ComposerUpdateWithoutMusicSheetsInput, { nullable: false })
  @Type(() => ComposerUpdateWithoutMusicSheetsInput)
  data!: InstanceType<typeof ComposerUpdateWithoutMusicSheetsInput>;
}

@InputType()
export class ComposerUpdateWithWhereUniqueWithoutAuthorImageInput {
  @Field(() => ComposerWhereUniqueInput, { nullable: false })
  @Type(() => ComposerWhereUniqueInput)
  where!: Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>;
  @Field(() => ComposerUpdateWithoutAuthorImageInput, { nullable: false })
  @Type(() => ComposerUpdateWithoutAuthorImageInput)
  data!: InstanceType<typeof ComposerUpdateWithoutAuthorImageInput>;
}

@InputType()
export class ComposerUpdateWithoutAuthorImageInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUpdateManyWithoutComposerNestedInput, {
    nullable: true,
  })
  MusicSheets?: InstanceType<
    typeof SheetMusicUpdateManyWithoutComposerNestedInput
  >;
}

@InputType()
export class ComposerUpdateWithoutMusicSheetsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FileStorageUpdateOneWithoutComposersNestedInput, {
    nullable: true,
  })
  AuthorImage?: InstanceType<
    typeof FileStorageUpdateOneWithoutComposersNestedInput
  >;
}

@InputType()
export class ComposerUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  birthDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FileStorageUpdateOneWithoutComposersNestedInput, {
    nullable: true,
  })
  AuthorImage?: InstanceType<
    typeof FileStorageUpdateOneWithoutComposersNestedInput
  >;
  @Field(() => SheetMusicUpdateManyWithoutComposerNestedInput, {
    nullable: true,
  })
  MusicSheets?: InstanceType<
    typeof SheetMusicUpdateManyWithoutComposerNestedInput
  >;
}

@InputType()
export class ComposerUpsertWithWhereUniqueWithoutAuthorImageInput {
  @Field(() => ComposerWhereUniqueInput, { nullable: false })
  @Type(() => ComposerWhereUniqueInput)
  where!: Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>;
  @Field(() => ComposerUpdateWithoutAuthorImageInput, { nullable: false })
  @Type(() => ComposerUpdateWithoutAuthorImageInput)
  update!: InstanceType<typeof ComposerUpdateWithoutAuthorImageInput>;
  @Field(() => ComposerCreateWithoutAuthorImageInput, { nullable: false })
  @Type(() => ComposerCreateWithoutAuthorImageInput)
  create!: InstanceType<typeof ComposerCreateWithoutAuthorImageInput>;
}

@InputType()
export class ComposerUpsertWithoutMusicSheetsInput {
  @Field(() => ComposerUpdateWithoutMusicSheetsInput, { nullable: false })
  @Type(() => ComposerUpdateWithoutMusicSheetsInput)
  update!: InstanceType<typeof ComposerUpdateWithoutMusicSheetsInput>;
  @Field(() => ComposerCreateWithoutMusicSheetsInput, { nullable: false })
  @Type(() => ComposerCreateWithoutMusicSheetsInput)
  create!: InstanceType<typeof ComposerCreateWithoutMusicSheetsInput>;
  @Field(() => ComposerWhereInput, { nullable: true })
  @Type(() => ComposerWhereInput)
  where?: InstanceType<typeof ComposerWhereInput>;
}

@InputType()
export class ComposerWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => [ComposerWhereInput], { nullable: true })
  AND?: Array<ComposerWhereInput>;
  @Field(() => [ComposerWhereInput], { nullable: true })
  OR?: Array<ComposerWhereInput>;
  @Field(() => [ComposerWhereInput], { nullable: true })
  NOT?: Array<ComposerWhereInput>;
  @Field(() => StringNullableFilter, { nullable: true })
  biography?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  authorImageId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => FileStorageNullableRelationFilter, { nullable: true })
  AuthorImage?: InstanceType<typeof FileStorageNullableRelationFilter>;
  @Field(() => SheetMusicListRelationFilter, { nullable: true })
  MusicSheets?: InstanceType<typeof SheetMusicListRelationFilter>;
}

@InputType()
export class ComposerWhereInput {
  @Field(() => [ComposerWhereInput], { nullable: true })
  AND?: Array<ComposerWhereInput>;
  @Field(() => [ComposerWhereInput], { nullable: true })
  OR?: Array<ComposerWhereInput>;
  @Field(() => [ComposerWhereInput], { nullable: true })
  NOT?: Array<ComposerWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  birthDate?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  biography?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  authorImageId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => FileStorageNullableRelationFilter, { nullable: true })
  AuthorImage?: InstanceType<typeof FileStorageNullableRelationFilter>;
  @Field(() => SheetMusicListRelationFilter, { nullable: true })
  MusicSheets?: InstanceType<typeof SheetMusicListRelationFilter>;
}

@ObjectType()
export class Composer {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => Date, { nullable: true })
  birthDate!: Date | null;
  @Field(() => String, { nullable: true })
  biography!: string | null;
  @Field(() => String, { nullable: true })
  authorImageId!: string | null;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => FileStorage, { nullable: true })
  AuthorImage?: InstanceType<typeof FileStorage> | null;
  @Field(() => [SheetMusic], { nullable: true })
  MusicSheets?: Array<SheetMusic>;
  @Field(() => ComposerCount, { nullable: false })
  _count?: InstanceType<typeof ComposerCount>;
}

@ArgsType()
export class CreateManyComposerArgs {
  @Field(() => [ComposerCreateManyInput], { nullable: false })
  @Type(() => ComposerCreateManyInput)
  data!: Array<ComposerCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneComposerArgs {
  @Field(() => ComposerCreateInput, { nullable: false })
  @Type(() => ComposerCreateInput)
  data!: InstanceType<typeof ComposerCreateInput>;
}

@ArgsType()
export class DeleteManyComposerArgs {
  @Field(() => ComposerWhereInput, { nullable: true })
  @Type(() => ComposerWhereInput)
  where?: InstanceType<typeof ComposerWhereInput>;
}

@ArgsType()
export class DeleteOneComposerArgs {
  @Field(() => ComposerWhereUniqueInput, { nullable: false })
  @Type(() => ComposerWhereUniqueInput)
  where!: Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>;
}

@ArgsType()
export class FindFirstComposerOrThrowArgs {
  @Field(() => ComposerWhereInput, { nullable: true })
  @Type(() => ComposerWhereInput)
  where?: InstanceType<typeof ComposerWhereInput>;
  @Field(() => [ComposerOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ComposerOrderByWithRelationInput>;
  @Field(() => ComposerWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    ComposerWhereUniqueInput,
    'id' | 'name' | 'birthDate'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ComposerScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ComposerScalarFieldEnum>;
}

@ArgsType()
export class FindFirstComposerArgs {
  @Field(() => ComposerWhereInput, { nullable: true })
  @Type(() => ComposerWhereInput)
  where?: InstanceType<typeof ComposerWhereInput>;
  @Field(() => [ComposerOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ComposerOrderByWithRelationInput>;
  @Field(() => ComposerWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    ComposerWhereUniqueInput,
    'id' | 'name' | 'birthDate'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ComposerScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ComposerScalarFieldEnum>;
}

@ArgsType()
export class FindManyComposerArgs {
  @Field(() => ComposerWhereInput, { nullable: true })
  @Type(() => ComposerWhereInput)
  where?: InstanceType<typeof ComposerWhereInput>;
  @Field(() => [ComposerOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ComposerOrderByWithRelationInput>;
  @Field(() => ComposerWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    ComposerWhereUniqueInput,
    'id' | 'name' | 'birthDate'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ComposerScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ComposerScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueComposerOrThrowArgs {
  @Field(() => ComposerWhereUniqueInput, { nullable: false })
  @Type(() => ComposerWhereUniqueInput)
  where!: Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>;
}

@ArgsType()
export class FindUniqueComposerArgs {
  @Field(() => ComposerWhereUniqueInput, { nullable: false })
  @Type(() => ComposerWhereUniqueInput)
  where!: Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>;
}

@ArgsType()
export class UpdateManyComposerArgs {
  @Field(() => ComposerUpdateManyMutationInput, { nullable: false })
  @Type(() => ComposerUpdateManyMutationInput)
  data!: InstanceType<typeof ComposerUpdateManyMutationInput>;
  @Field(() => ComposerWhereInput, { nullable: true })
  @Type(() => ComposerWhereInput)
  where?: InstanceType<typeof ComposerWhereInput>;
}

@ArgsType()
export class UpdateOneComposerArgs {
  @Field(() => ComposerUpdateInput, { nullable: false })
  @Type(() => ComposerUpdateInput)
  data!: InstanceType<typeof ComposerUpdateInput>;
  @Field(() => ComposerWhereUniqueInput, { nullable: false })
  @Type(() => ComposerWhereUniqueInput)
  where!: Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>;
}

@ArgsType()
export class UpsertOneComposerArgs {
  @Field(() => ComposerWhereUniqueInput, { nullable: false })
  @Type(() => ComposerWhereUniqueInput)
  where!: Prisma.AtLeast<ComposerWhereUniqueInput, 'id' | 'name' | 'birthDate'>;
  @Field(() => ComposerCreateInput, { nullable: false })
  @Type(() => ComposerCreateInput)
  create!: InstanceType<typeof ComposerCreateInput>;
  @Field(() => ComposerUpdateInput, { nullable: false })
  @Type(() => ComposerUpdateInput)
  update!: InstanceType<typeof ComposerUpdateInput>;
}

@ObjectType()
export class AggregateFavorites {
  @Field(() => FavoritesCountAggregate, { nullable: true })
  _count?: InstanceType<typeof FavoritesCountAggregate>;
  @Field(() => FavoritesAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof FavoritesAvgAggregate>;
  @Field(() => FavoritesSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof FavoritesSumAggregate>;
  @Field(() => FavoritesMinAggregate, { nullable: true })
  _min?: InstanceType<typeof FavoritesMinAggregate>;
  @Field(() => FavoritesMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof FavoritesMaxAggregate>;
}

@ArgsType()
export class CreateManyFavoritesArgs {
  @Field(() => [FavoritesCreateManyInput], { nullable: false })
  @Type(() => FavoritesCreateManyInput)
  data!: Array<FavoritesCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneFavoritesArgs {
  @Field(() => FavoritesCreateInput, { nullable: false })
  @Type(() => FavoritesCreateInput)
  data!: InstanceType<typeof FavoritesCreateInput>;
}

@ArgsType()
export class DeleteManyFavoritesArgs {
  @Field(() => FavoritesWhereInput, { nullable: true })
  @Type(() => FavoritesWhereInput)
  where?: InstanceType<typeof FavoritesWhereInput>;
}

@ArgsType()
export class DeleteOneFavoritesArgs {
  @Field(() => FavoritesWhereUniqueInput, { nullable: false })
  @Type(() => FavoritesWhereUniqueInput)
  where!: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
}

@ArgsType()
export class FavoritesAggregateArgs {
  @Field(() => FavoritesWhereInput, { nullable: true })
  @Type(() => FavoritesWhereInput)
  where?: InstanceType<typeof FavoritesWhereInput>;
  @Field(() => [FavoritesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FavoritesOrderByWithRelationInput>;
  @Field(() => FavoritesWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => FavoritesCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FavoritesCountAggregateInput>;
  @Field(() => FavoritesAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof FavoritesAvgAggregateInput>;
  @Field(() => FavoritesSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof FavoritesSumAggregateInput>;
  @Field(() => FavoritesMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FavoritesMinAggregateInput>;
  @Field(() => FavoritesMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FavoritesMaxAggregateInput>;
}

@InputType()
export class FavoritesAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  sheetMusicId?: true;
}

@ObjectType()
export class FavoritesAvgAggregate {
  @Field(() => Float, { nullable: true })
  sheetMusicId?: number;
}

@InputType()
export class FavoritesAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  sheetMusicId?: keyof typeof SortOrder;
}

@InputType()
export class FavoritesCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  sheetMusicId?: true;
  @Field(() => Boolean, { nullable: true })
  addedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class FavoritesCountAggregate {
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  sheetMusicId!: number;
  @Field(() => Int, { nullable: false })
  addedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class FavoritesCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  sheetMusicId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  addedAt?: keyof typeof SortOrder;
}

@InputType()
export class FavoritesCreateManySheetMusicInputEnvelope {
  @Field(() => [FavoritesCreateManySheetMusicInput], { nullable: false })
  @Type(() => FavoritesCreateManySheetMusicInput)
  data!: Array<FavoritesCreateManySheetMusicInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class FavoritesCreateManySheetMusicInput {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Date, { nullable: true })
  addedAt?: Date | string;
}

@InputType()
export class FavoritesCreateManyUserInputEnvelope {
  @Field(() => [FavoritesCreateManyUserInput], { nullable: false })
  @Type(() => FavoritesCreateManyUserInput)
  data!: Array<FavoritesCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class FavoritesCreateManyUserInput {
  @Field(() => Int, { nullable: false })
  sheetMusicId!: number;
  @Field(() => Date, { nullable: true })
  addedAt?: Date | string;
}

@InputType()
export class FavoritesCreateManyInput {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Int, { nullable: false })
  sheetMusicId!: number;
  @Field(() => Date, { nullable: true })
  addedAt?: Date | string;
}

@InputType()
export class FavoritesCreateNestedManyWithoutSheetMusicInput {
  @Field(() => [FavoritesCreateWithoutSheetMusicInput], { nullable: true })
  @Type(() => FavoritesCreateWithoutSheetMusicInput)
  create?: Array<FavoritesCreateWithoutSheetMusicInput>;
  @Field(() => [FavoritesCreateOrConnectWithoutSheetMusicInput], {
    nullable: true,
  })
  @Type(() => FavoritesCreateOrConnectWithoutSheetMusicInput)
  connectOrCreate?: Array<FavoritesCreateOrConnectWithoutSheetMusicInput>;
  @Field(() => FavoritesCreateManySheetMusicInputEnvelope, { nullable: true })
  @Type(() => FavoritesCreateManySheetMusicInputEnvelope)
  createMany?: InstanceType<typeof FavoritesCreateManySheetMusicInputEnvelope>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
}

@InputType()
export class FavoritesCreateNestedManyWithoutUserInput {
  @Field(() => [FavoritesCreateWithoutUserInput], { nullable: true })
  @Type(() => FavoritesCreateWithoutUserInput)
  create?: Array<FavoritesCreateWithoutUserInput>;
  @Field(() => [FavoritesCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => FavoritesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<FavoritesCreateOrConnectWithoutUserInput>;
  @Field(() => FavoritesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => FavoritesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof FavoritesCreateManyUserInputEnvelope>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
}

@InputType()
export class FavoritesCreateOrConnectWithoutSheetMusicInput {
  @Field(() => FavoritesWhereUniqueInput, { nullable: false })
  @Type(() => FavoritesWhereUniqueInput)
  where!: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
  @Field(() => FavoritesCreateWithoutSheetMusicInput, { nullable: false })
  @Type(() => FavoritesCreateWithoutSheetMusicInput)
  create!: InstanceType<typeof FavoritesCreateWithoutSheetMusicInput>;
}

@InputType()
export class FavoritesCreateOrConnectWithoutUserInput {
  @Field(() => FavoritesWhereUniqueInput, { nullable: false })
  @Type(() => FavoritesWhereUniqueInput)
  where!: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
  @Field(() => FavoritesCreateWithoutUserInput, { nullable: false })
  @Type(() => FavoritesCreateWithoutUserInput)
  create!: InstanceType<typeof FavoritesCreateWithoutUserInput>;
}

@InputType()
export class FavoritesCreateWithoutSheetMusicInput {
  @Field(() => Date, { nullable: true })
  addedAt?: Date | string;
  @Field(() => UserCreateNestedOneWithoutFavoritesInput, { nullable: false })
  User!: InstanceType<typeof UserCreateNestedOneWithoutFavoritesInput>;
}

@InputType()
export class FavoritesCreateWithoutUserInput {
  @Field(() => Date, { nullable: true })
  addedAt?: Date | string;
  @Field(() => SheetMusicCreateNestedOneWithoutFavoritesInput, {
    nullable: false,
  })
  SheetMusic!: InstanceType<
    typeof SheetMusicCreateNestedOneWithoutFavoritesInput
  >;
}

@InputType()
export class FavoritesCreateInput {
  @Field(() => Date, { nullable: true })
  addedAt?: Date | string;
  @Field(() => UserCreateNestedOneWithoutFavoritesInput, { nullable: false })
  User!: InstanceType<typeof UserCreateNestedOneWithoutFavoritesInput>;
  @Field(() => SheetMusicCreateNestedOneWithoutFavoritesInput, {
    nullable: false,
  })
  SheetMusic!: InstanceType<
    typeof SheetMusicCreateNestedOneWithoutFavoritesInput
  >;
}

@ArgsType()
export class FavoritesGroupByArgs {
  @Field(() => FavoritesWhereInput, { nullable: true })
  @Type(() => FavoritesWhereInput)
  where?: InstanceType<typeof FavoritesWhereInput>;
  @Field(() => [FavoritesOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<FavoritesOrderByWithAggregationInput>;
  @Field(() => [FavoritesScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof FavoritesScalarFieldEnum>;
  @Field(() => FavoritesScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof FavoritesScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => FavoritesCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FavoritesCountAggregateInput>;
  @Field(() => FavoritesAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof FavoritesAvgAggregateInput>;
  @Field(() => FavoritesSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof FavoritesSumAggregateInput>;
  @Field(() => FavoritesMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FavoritesMinAggregateInput>;
  @Field(() => FavoritesMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FavoritesMaxAggregateInput>;
}

@ObjectType()
export class FavoritesGroupBy {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Int, { nullable: false })
  sheetMusicId!: number;
  @Field(() => Date, { nullable: false })
  addedAt!: Date | string;
  @Field(() => FavoritesCountAggregate, { nullable: true })
  _count?: InstanceType<typeof FavoritesCountAggregate>;
  @Field(() => FavoritesAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof FavoritesAvgAggregate>;
  @Field(() => FavoritesSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof FavoritesSumAggregate>;
  @Field(() => FavoritesMinAggregate, { nullable: true })
  _min?: InstanceType<typeof FavoritesMinAggregate>;
  @Field(() => FavoritesMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof FavoritesMaxAggregate>;
}

@InputType()
export class FavoritesListRelationFilter {
  @Field(() => FavoritesWhereInput, { nullable: true })
  every?: InstanceType<typeof FavoritesWhereInput>;
  @Field(() => FavoritesWhereInput, { nullable: true })
  some?: InstanceType<typeof FavoritesWhereInput>;
  @Field(() => FavoritesWhereInput, { nullable: true })
  none?: InstanceType<typeof FavoritesWhereInput>;
}

@InputType()
export class FavoritesMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  sheetMusicId?: true;
  @Field(() => Boolean, { nullable: true })
  addedAt?: true;
}

@ObjectType()
export class FavoritesMaxAggregate {
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  sheetMusicId?: number;
  @Field(() => Date, { nullable: true })
  addedAt?: Date | string;
}

@InputType()
export class FavoritesMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  sheetMusicId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  addedAt?: keyof typeof SortOrder;
}

@InputType()
export class FavoritesMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  sheetMusicId?: true;
  @Field(() => Boolean, { nullable: true })
  addedAt?: true;
}

@ObjectType()
export class FavoritesMinAggregate {
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  sheetMusicId?: number;
  @Field(() => Date, { nullable: true })
  addedAt?: Date | string;
}

@InputType()
export class FavoritesMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  sheetMusicId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  addedAt?: keyof typeof SortOrder;
}

@InputType()
export class FavoritesOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class FavoritesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  sheetMusicId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  addedAt?: keyof typeof SortOrder;
  @Field(() => FavoritesCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FavoritesCountOrderByAggregateInput>;
  @Field(() => FavoritesAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof FavoritesAvgOrderByAggregateInput>;
  @Field(() => FavoritesMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FavoritesMaxOrderByAggregateInput>;
  @Field(() => FavoritesMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FavoritesMinOrderByAggregateInput>;
  @Field(() => FavoritesSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof FavoritesSumOrderByAggregateInput>;
}

@InputType()
export class FavoritesOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  sheetMusicId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  addedAt?: keyof typeof SortOrder;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  User?: InstanceType<typeof UserOrderByWithRelationInput>;
  @Field(() => SheetMusicOrderByWithRelationInput, { nullable: true })
  SheetMusic?: InstanceType<typeof SheetMusicOrderByWithRelationInput>;
}

@InputType()
export class FavoritesScalarWhereWithAggregatesInput {
  @Field(() => [FavoritesScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<FavoritesScalarWhereWithAggregatesInput>;
  @Field(() => [FavoritesScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<FavoritesScalarWhereWithAggregatesInput>;
  @Field(() => [FavoritesScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<FavoritesScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  sheetMusicId?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class FavoritesScalarWhereInput {
  @Field(() => [FavoritesScalarWhereInput], { nullable: true })
  AND?: Array<FavoritesScalarWhereInput>;
  @Field(() => [FavoritesScalarWhereInput], { nullable: true })
  OR?: Array<FavoritesScalarWhereInput>;
  @Field(() => [FavoritesScalarWhereInput], { nullable: true })
  NOT?: Array<FavoritesScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  sheetMusicId?: InstanceType<typeof IntFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class FavoritesSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  sheetMusicId?: true;
}

@ObjectType()
export class FavoritesSumAggregate {
  @Field(() => Int, { nullable: true })
  sheetMusicId?: number;
}

@InputType()
export class FavoritesSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  sheetMusicId?: keyof typeof SortOrder;
}

@InputType()
export class FavoritesUncheckedCreateNestedManyWithoutSheetMusicInput {
  @Field(() => [FavoritesCreateWithoutSheetMusicInput], { nullable: true })
  @Type(() => FavoritesCreateWithoutSheetMusicInput)
  create?: Array<FavoritesCreateWithoutSheetMusicInput>;
  @Field(() => [FavoritesCreateOrConnectWithoutSheetMusicInput], {
    nullable: true,
  })
  @Type(() => FavoritesCreateOrConnectWithoutSheetMusicInput)
  connectOrCreate?: Array<FavoritesCreateOrConnectWithoutSheetMusicInput>;
  @Field(() => FavoritesCreateManySheetMusicInputEnvelope, { nullable: true })
  @Type(() => FavoritesCreateManySheetMusicInputEnvelope)
  createMany?: InstanceType<typeof FavoritesCreateManySheetMusicInputEnvelope>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
}

@InputType()
export class FavoritesUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [FavoritesCreateWithoutUserInput], { nullable: true })
  @Type(() => FavoritesCreateWithoutUserInput)
  create?: Array<FavoritesCreateWithoutUserInput>;
  @Field(() => [FavoritesCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => FavoritesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<FavoritesCreateOrConnectWithoutUserInput>;
  @Field(() => FavoritesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => FavoritesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof FavoritesCreateManyUserInputEnvelope>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
}

@InputType()
export class FavoritesUncheckedCreateWithoutSheetMusicInput {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Date, { nullable: true })
  addedAt?: Date | string;
}

@InputType()
export class FavoritesUncheckedCreateWithoutUserInput {
  @Field(() => Int, { nullable: false })
  sheetMusicId!: number;
  @Field(() => Date, { nullable: true })
  addedAt?: Date | string;
}

@InputType()
export class FavoritesUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Int, { nullable: false })
  sheetMusicId!: number;
  @Field(() => Date, { nullable: true })
  addedAt?: Date | string;
}

@InputType()
export class FavoritesUncheckedUpdateManyWithoutSheetMusicNestedInput {
  @Field(() => [FavoritesCreateWithoutSheetMusicInput], { nullable: true })
  @Type(() => FavoritesCreateWithoutSheetMusicInput)
  create?: Array<FavoritesCreateWithoutSheetMusicInput>;
  @Field(() => [FavoritesCreateOrConnectWithoutSheetMusicInput], {
    nullable: true,
  })
  @Type(() => FavoritesCreateOrConnectWithoutSheetMusicInput)
  connectOrCreate?: Array<FavoritesCreateOrConnectWithoutSheetMusicInput>;
  @Field(() => [FavoritesUpsertWithWhereUniqueWithoutSheetMusicInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpsertWithWhereUniqueWithoutSheetMusicInput)
  upsert?: Array<FavoritesUpsertWithWhereUniqueWithoutSheetMusicInput>;
  @Field(() => FavoritesCreateManySheetMusicInputEnvelope, { nullable: true })
  @Type(() => FavoritesCreateManySheetMusicInputEnvelope)
  createMany?: InstanceType<typeof FavoritesCreateManySheetMusicInputEnvelope>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  set?: Array<Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesUpdateWithWhereUniqueWithoutSheetMusicInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpdateWithWhereUniqueWithoutSheetMusicInput)
  update?: Array<FavoritesUpdateWithWhereUniqueWithoutSheetMusicInput>;
  @Field(() => [FavoritesUpdateManyWithWhereWithoutSheetMusicInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpdateManyWithWhereWithoutSheetMusicInput)
  updateMany?: Array<FavoritesUpdateManyWithWhereWithoutSheetMusicInput>;
  @Field(() => [FavoritesScalarWhereInput], { nullable: true })
  @Type(() => FavoritesScalarWhereInput)
  deleteMany?: Array<FavoritesScalarWhereInput>;
}

@InputType()
export class FavoritesUncheckedUpdateManyWithoutSheetMusicInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoritesUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [FavoritesCreateWithoutUserInput], { nullable: true })
  @Type(() => FavoritesCreateWithoutUserInput)
  create?: Array<FavoritesCreateWithoutUserInput>;
  @Field(() => [FavoritesCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => FavoritesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<FavoritesCreateOrConnectWithoutUserInput>;
  @Field(() => [FavoritesUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<FavoritesUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => FavoritesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => FavoritesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof FavoritesCreateManyUserInputEnvelope>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  set?: Array<Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<FavoritesUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [FavoritesUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<FavoritesUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [FavoritesScalarWhereInput], { nullable: true })
  @Type(() => FavoritesScalarWhereInput)
  deleteMany?: Array<FavoritesScalarWhereInput>;
}

@InputType()
export class FavoritesUncheckedUpdateManyWithoutUserInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  sheetMusicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoritesUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  sheetMusicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoritesUncheckedUpdateWithoutSheetMusicInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoritesUncheckedUpdateWithoutUserInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  sheetMusicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoritesUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  sheetMusicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoritesUpdateManyMutationInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoritesUpdateManyWithWhereWithoutSheetMusicInput {
  @Field(() => FavoritesScalarWhereInput, { nullable: false })
  @Type(() => FavoritesScalarWhereInput)
  where!: InstanceType<typeof FavoritesScalarWhereInput>;
  @Field(() => FavoritesUpdateManyMutationInput, { nullable: false })
  @Type(() => FavoritesUpdateManyMutationInput)
  data!: InstanceType<typeof FavoritesUpdateManyMutationInput>;
}

@InputType()
export class FavoritesUpdateManyWithWhereWithoutUserInput {
  @Field(() => FavoritesScalarWhereInput, { nullable: false })
  @Type(() => FavoritesScalarWhereInput)
  where!: InstanceType<typeof FavoritesScalarWhereInput>;
  @Field(() => FavoritesUpdateManyMutationInput, { nullable: false })
  @Type(() => FavoritesUpdateManyMutationInput)
  data!: InstanceType<typeof FavoritesUpdateManyMutationInput>;
}

@InputType()
export class FavoritesUpdateManyWithoutSheetMusicNestedInput {
  @Field(() => [FavoritesCreateWithoutSheetMusicInput], { nullable: true })
  @Type(() => FavoritesCreateWithoutSheetMusicInput)
  create?: Array<FavoritesCreateWithoutSheetMusicInput>;
  @Field(() => [FavoritesCreateOrConnectWithoutSheetMusicInput], {
    nullable: true,
  })
  @Type(() => FavoritesCreateOrConnectWithoutSheetMusicInput)
  connectOrCreate?: Array<FavoritesCreateOrConnectWithoutSheetMusicInput>;
  @Field(() => [FavoritesUpsertWithWhereUniqueWithoutSheetMusicInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpsertWithWhereUniqueWithoutSheetMusicInput)
  upsert?: Array<FavoritesUpsertWithWhereUniqueWithoutSheetMusicInput>;
  @Field(() => FavoritesCreateManySheetMusicInputEnvelope, { nullable: true })
  @Type(() => FavoritesCreateManySheetMusicInputEnvelope)
  createMany?: InstanceType<typeof FavoritesCreateManySheetMusicInputEnvelope>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  set?: Array<Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesUpdateWithWhereUniqueWithoutSheetMusicInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpdateWithWhereUniqueWithoutSheetMusicInput)
  update?: Array<FavoritesUpdateWithWhereUniqueWithoutSheetMusicInput>;
  @Field(() => [FavoritesUpdateManyWithWhereWithoutSheetMusicInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpdateManyWithWhereWithoutSheetMusicInput)
  updateMany?: Array<FavoritesUpdateManyWithWhereWithoutSheetMusicInput>;
  @Field(() => [FavoritesScalarWhereInput], { nullable: true })
  @Type(() => FavoritesScalarWhereInput)
  deleteMany?: Array<FavoritesScalarWhereInput>;
}

@InputType()
export class FavoritesUpdateManyWithoutUserNestedInput {
  @Field(() => [FavoritesCreateWithoutUserInput], { nullable: true })
  @Type(() => FavoritesCreateWithoutUserInput)
  create?: Array<FavoritesCreateWithoutUserInput>;
  @Field(() => [FavoritesCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => FavoritesCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<FavoritesCreateOrConnectWithoutUserInput>;
  @Field(() => [FavoritesUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<FavoritesUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => FavoritesCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => FavoritesCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof FavoritesCreateManyUserInputEnvelope>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  set?: Array<Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>>;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesWhereUniqueInput], { nullable: true })
  @Type(() => FavoritesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>
  >;
  @Field(() => [FavoritesUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<FavoritesUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [FavoritesUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => FavoritesUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<FavoritesUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [FavoritesScalarWhereInput], { nullable: true })
  @Type(() => FavoritesScalarWhereInput)
  deleteMany?: Array<FavoritesScalarWhereInput>;
}

@InputType()
export class FavoritesUpdateWithWhereUniqueWithoutSheetMusicInput {
  @Field(() => FavoritesWhereUniqueInput, { nullable: false })
  @Type(() => FavoritesWhereUniqueInput)
  where!: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
  @Field(() => FavoritesUpdateWithoutSheetMusicInput, { nullable: false })
  @Type(() => FavoritesUpdateWithoutSheetMusicInput)
  data!: InstanceType<typeof FavoritesUpdateWithoutSheetMusicInput>;
}

@InputType()
export class FavoritesUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => FavoritesWhereUniqueInput, { nullable: false })
  @Type(() => FavoritesWhereUniqueInput)
  where!: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
  @Field(() => FavoritesUpdateWithoutUserInput, { nullable: false })
  @Type(() => FavoritesUpdateWithoutUserInput)
  data!: InstanceType<typeof FavoritesUpdateWithoutUserInput>;
}

@InputType()
export class FavoritesUpdateWithoutSheetMusicInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => UserUpdateOneRequiredWithoutFavoritesNestedInput, {
    nullable: true,
  })
  User?: InstanceType<typeof UserUpdateOneRequiredWithoutFavoritesNestedInput>;
}

@InputType()
export class FavoritesUpdateWithoutUserInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUpdateOneRequiredWithoutFavoritesNestedInput, {
    nullable: true,
  })
  SheetMusic?: InstanceType<
    typeof SheetMusicUpdateOneRequiredWithoutFavoritesNestedInput
  >;
}

@InputType()
export class FavoritesUpdateInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => UserUpdateOneRequiredWithoutFavoritesNestedInput, {
    nullable: true,
  })
  User?: InstanceType<typeof UserUpdateOneRequiredWithoutFavoritesNestedInput>;
  @Field(() => SheetMusicUpdateOneRequiredWithoutFavoritesNestedInput, {
    nullable: true,
  })
  SheetMusic?: InstanceType<
    typeof SheetMusicUpdateOneRequiredWithoutFavoritesNestedInput
  >;
}

@InputType()
export class FavoritesUpsertWithWhereUniqueWithoutSheetMusicInput {
  @Field(() => FavoritesWhereUniqueInput, { nullable: false })
  @Type(() => FavoritesWhereUniqueInput)
  where!: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
  @Field(() => FavoritesUpdateWithoutSheetMusicInput, { nullable: false })
  @Type(() => FavoritesUpdateWithoutSheetMusicInput)
  update!: InstanceType<typeof FavoritesUpdateWithoutSheetMusicInput>;
  @Field(() => FavoritesCreateWithoutSheetMusicInput, { nullable: false })
  @Type(() => FavoritesCreateWithoutSheetMusicInput)
  create!: InstanceType<typeof FavoritesCreateWithoutSheetMusicInput>;
}

@InputType()
export class FavoritesUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => FavoritesWhereUniqueInput, { nullable: false })
  @Type(() => FavoritesWhereUniqueInput)
  where!: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
  @Field(() => FavoritesUpdateWithoutUserInput, { nullable: false })
  @Type(() => FavoritesUpdateWithoutUserInput)
  update!: InstanceType<typeof FavoritesUpdateWithoutUserInput>;
  @Field(() => FavoritesCreateWithoutUserInput, { nullable: false })
  @Type(() => FavoritesCreateWithoutUserInput)
  create!: InstanceType<typeof FavoritesCreateWithoutUserInput>;
}

@InputType()
export class FavoritesUserIdSheetMusicIdCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Int, { nullable: false })
  sheetMusicId!: number;
}

@InputType()
export class FavoritesWhereUniqueInput {
  @Field(() => FavoritesUserIdSheetMusicIdCompoundUniqueInput, {
    nullable: true,
  })
  userId_sheetMusicId?: InstanceType<
    typeof FavoritesUserIdSheetMusicIdCompoundUniqueInput
  >;
  @Field(() => [FavoritesWhereInput], { nullable: true })
  AND?: Array<FavoritesWhereInput>;
  @Field(() => [FavoritesWhereInput], { nullable: true })
  OR?: Array<FavoritesWhereInput>;
  @Field(() => [FavoritesWhereInput], { nullable: true })
  NOT?: Array<FavoritesWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  sheetMusicId?: InstanceType<typeof IntFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  User?: InstanceType<typeof UserRelationFilter>;
  @Field(() => SheetMusicRelationFilter, { nullable: true })
  SheetMusic?: InstanceType<typeof SheetMusicRelationFilter>;
}

@InputType()
export class FavoritesWhereInput {
  @Field(() => [FavoritesWhereInput], { nullable: true })
  AND?: Array<FavoritesWhereInput>;
  @Field(() => [FavoritesWhereInput], { nullable: true })
  OR?: Array<FavoritesWhereInput>;
  @Field(() => [FavoritesWhereInput], { nullable: true })
  NOT?: Array<FavoritesWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  sheetMusicId?: InstanceType<typeof IntFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  addedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  User?: InstanceType<typeof UserRelationFilter>;
  @Field(() => SheetMusicRelationFilter, { nullable: true })
  SheetMusic?: InstanceType<typeof SheetMusicRelationFilter>;
}

@ObjectType()
export class Favorites {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Int, { nullable: false })
  sheetMusicId!: number;
  @Field(() => Date, { nullable: false })
  addedAt!: Date;
  @Field(() => User, { nullable: false })
  User?: InstanceType<typeof User>;
  @Field(() => SheetMusic, { nullable: false })
  SheetMusic?: InstanceType<typeof SheetMusic>;
}

@ArgsType()
export class FindFirstFavoritesOrThrowArgs {
  @Field(() => FavoritesWhereInput, { nullable: true })
  @Type(() => FavoritesWhereInput)
  where?: InstanceType<typeof FavoritesWhereInput>;
  @Field(() => [FavoritesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FavoritesOrderByWithRelationInput>;
  @Field(() => FavoritesWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FavoritesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FavoritesScalarFieldEnum>;
}

@ArgsType()
export class FindFirstFavoritesArgs {
  @Field(() => FavoritesWhereInput, { nullable: true })
  @Type(() => FavoritesWhereInput)
  where?: InstanceType<typeof FavoritesWhereInput>;
  @Field(() => [FavoritesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FavoritesOrderByWithRelationInput>;
  @Field(() => FavoritesWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FavoritesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FavoritesScalarFieldEnum>;
}

@ArgsType()
export class FindManyFavoritesArgs {
  @Field(() => FavoritesWhereInput, { nullable: true })
  @Type(() => FavoritesWhereInput)
  where?: InstanceType<typeof FavoritesWhereInput>;
  @Field(() => [FavoritesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FavoritesOrderByWithRelationInput>;
  @Field(() => FavoritesWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FavoritesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FavoritesScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueFavoritesOrThrowArgs {
  @Field(() => FavoritesWhereUniqueInput, { nullable: false })
  @Type(() => FavoritesWhereUniqueInput)
  where!: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
}

@ArgsType()
export class FindUniqueFavoritesArgs {
  @Field(() => FavoritesWhereUniqueInput, { nullable: false })
  @Type(() => FavoritesWhereUniqueInput)
  where!: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
}

@ArgsType()
export class UpdateManyFavoritesArgs {
  @Field(() => FavoritesUpdateManyMutationInput, { nullable: false })
  @Type(() => FavoritesUpdateManyMutationInput)
  data!: InstanceType<typeof FavoritesUpdateManyMutationInput>;
  @Field(() => FavoritesWhereInput, { nullable: true })
  @Type(() => FavoritesWhereInput)
  where?: InstanceType<typeof FavoritesWhereInput>;
}

@ArgsType()
export class UpdateOneFavoritesArgs {
  @Field(() => FavoritesUpdateInput, { nullable: false })
  @Type(() => FavoritesUpdateInput)
  data!: InstanceType<typeof FavoritesUpdateInput>;
  @Field(() => FavoritesWhereUniqueInput, { nullable: false })
  @Type(() => FavoritesWhereUniqueInput)
  where!: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
}

@ArgsType()
export class UpsertOneFavoritesArgs {
  @Field(() => FavoritesWhereUniqueInput, { nullable: false })
  @Type(() => FavoritesWhereUniqueInput)
  where!: Prisma.AtLeast<FavoritesWhereUniqueInput, 'userId_sheetMusicId'>;
  @Field(() => FavoritesCreateInput, { nullable: false })
  @Type(() => FavoritesCreateInput)
  create!: InstanceType<typeof FavoritesCreateInput>;
  @Field(() => FavoritesUpdateInput, { nullable: false })
  @Type(() => FavoritesUpdateInput)
  update!: InstanceType<typeof FavoritesUpdateInput>;
}

@ObjectType()
export class AggregateFileStorage {
  @Field(() => FileStorageCountAggregate, { nullable: true })
  _count?: InstanceType<typeof FileStorageCountAggregate>;
  @Field(() => FileStorageMinAggregate, { nullable: true })
  _min?: InstanceType<typeof FileStorageMinAggregate>;
  @Field(() => FileStorageMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof FileStorageMaxAggregate>;
}

@ArgsType()
export class CreateManyFileStorageArgs {
  @Field(() => [FileStorageCreateManyInput], { nullable: false })
  @Type(() => FileStorageCreateManyInput)
  data!: Array<FileStorageCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneFileStorageArgs {
  @Field(() => FileStorageCreateInput, { nullable: false })
  @Type(() => FileStorageCreateInput)
  data!: InstanceType<typeof FileStorageCreateInput>;
}

@ArgsType()
export class DeleteManyFileStorageArgs {
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
}

@ArgsType()
export class DeleteOneFileStorageArgs {
  @Field(() => FileStorageWhereUniqueInput, { nullable: false })
  @Type(() => FileStorageWhereUniqueInput)
  where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FileStorageAggregateArgs {
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => [FileStorageOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileStorageOrderByWithRelationInput>;
  @Field(() => FileStorageWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => FileStorageCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FileStorageCountAggregateInput>;
  @Field(() => FileStorageMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FileStorageMinAggregateInput>;
  @Field(() => FileStorageMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FileStorageMaxAggregateInput>;
}

@InputType()
export class FileStorageCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  bucket?: true;
  @Field(() => Boolean, { nullable: true })
  fileKey?: true;
  @Field(() => Boolean, { nullable: true })
  fileCompleteUrl?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class FileStorageCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  bucket!: number;
  @Field(() => Int, { nullable: false })
  fileKey!: number;
  @Field(() => Int, { nullable: false })
  fileCompleteUrl!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class FileStorageCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bucket?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileKey?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileCompleteUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class FileStorageCount {
  @Field(() => Int, { nullable: false })
  Thumbnails?: number;
  @Field(() => Int, { nullable: false })
  SheetMusics?: number;
  @Field(() => Int, { nullable: false })
  Composers?: number;
}

@InputType()
export class FileStorageCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  bucket!: string;
  @Field(() => String, { nullable: false })
  fileKey!: string;
  @Field(() => String, { nullable: false })
  fileCompleteUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class FileStorageCreateNestedOneWithoutComposersInput {
  @Field(() => FileStorageCreateWithoutComposersInput, { nullable: true })
  @Type(() => FileStorageCreateWithoutComposersInput)
  create?: InstanceType<typeof FileStorageCreateWithoutComposersInput>;
  @Field(() => FileStorageCreateOrConnectWithoutComposersInput, {
    nullable: true,
  })
  @Type(() => FileStorageCreateOrConnectWithoutComposersInput)
  connectOrCreate?: InstanceType<
    typeof FileStorageCreateOrConnectWithoutComposersInput
  >;
  @Field(() => FileStorageWhereUniqueInput, { nullable: true })
  @Type(() => FileStorageWhereUniqueInput)
  connect?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@InputType()
export class FileStorageCreateNestedOneWithoutSheetMusicsInput {
  @Field(() => FileStorageCreateWithoutSheetMusicsInput, { nullable: true })
  @Type(() => FileStorageCreateWithoutSheetMusicsInput)
  create?: InstanceType<typeof FileStorageCreateWithoutSheetMusicsInput>;
  @Field(() => FileStorageCreateOrConnectWithoutSheetMusicsInput, {
    nullable: true,
  })
  @Type(() => FileStorageCreateOrConnectWithoutSheetMusicsInput)
  connectOrCreate?: InstanceType<
    typeof FileStorageCreateOrConnectWithoutSheetMusicsInput
  >;
  @Field(() => FileStorageWhereUniqueInput, { nullable: true })
  @Type(() => FileStorageWhereUniqueInput)
  connect?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@InputType()
export class FileStorageCreateNestedOneWithoutThumbnailsInput {
  @Field(() => FileStorageCreateWithoutThumbnailsInput, { nullable: true })
  @Type(() => FileStorageCreateWithoutThumbnailsInput)
  create?: InstanceType<typeof FileStorageCreateWithoutThumbnailsInput>;
  @Field(() => FileStorageCreateOrConnectWithoutThumbnailsInput, {
    nullable: true,
  })
  @Type(() => FileStorageCreateOrConnectWithoutThumbnailsInput)
  connectOrCreate?: InstanceType<
    typeof FileStorageCreateOrConnectWithoutThumbnailsInput
  >;
  @Field(() => FileStorageWhereUniqueInput, { nullable: true })
  @Type(() => FileStorageWhereUniqueInput)
  connect?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@InputType()
export class FileStorageCreateOrConnectWithoutComposersInput {
  @Field(() => FileStorageWhereUniqueInput, { nullable: false })
  @Type(() => FileStorageWhereUniqueInput)
  where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
  @Field(() => FileStorageCreateWithoutComposersInput, { nullable: false })
  @Type(() => FileStorageCreateWithoutComposersInput)
  create!: InstanceType<typeof FileStorageCreateWithoutComposersInput>;
}

@InputType()
export class FileStorageCreateOrConnectWithoutSheetMusicsInput {
  @Field(() => FileStorageWhereUniqueInput, { nullable: false })
  @Type(() => FileStorageWhereUniqueInput)
  where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
  @Field(() => FileStorageCreateWithoutSheetMusicsInput, { nullable: false })
  @Type(() => FileStorageCreateWithoutSheetMusicsInput)
  create!: InstanceType<typeof FileStorageCreateWithoutSheetMusicsInput>;
}

@InputType()
export class FileStorageCreateOrConnectWithoutThumbnailsInput {
  @Field(() => FileStorageWhereUniqueInput, { nullable: false })
  @Type(() => FileStorageWhereUniqueInput)
  where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
  @Field(() => FileStorageCreateWithoutThumbnailsInput, { nullable: false })
  @Type(() => FileStorageCreateWithoutThumbnailsInput)
  create!: InstanceType<typeof FileStorageCreateWithoutThumbnailsInput>;
}

@InputType()
export class FileStorageCreateWithoutComposersInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  bucket!: string;
  @Field(() => String, { nullable: false })
  fileKey!: string;
  @Field(() => String, { nullable: false })
  fileCompleteUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicCreateNestedManyWithoutThumbnailInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicCreateNestedManyWithoutThumbnailInput
  >;
  @Field(() => SheetMusicCreateNestedManyWithoutSheetFileInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicCreateNestedManyWithoutSheetFileInput
  >;
}

@InputType()
export class FileStorageCreateWithoutSheetMusicsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  bucket!: string;
  @Field(() => String, { nullable: false })
  fileKey!: string;
  @Field(() => String, { nullable: false })
  fileCompleteUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicCreateNestedManyWithoutThumbnailInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicCreateNestedManyWithoutThumbnailInput
  >;
  @Field(() => ComposerCreateNestedManyWithoutAuthorImageInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerCreateNestedManyWithoutAuthorImageInput
  >;
}

@InputType()
export class FileStorageCreateWithoutThumbnailsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  bucket!: string;
  @Field(() => String, { nullable: false })
  fileKey!: string;
  @Field(() => String, { nullable: false })
  fileCompleteUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicCreateNestedManyWithoutSheetFileInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicCreateNestedManyWithoutSheetFileInput
  >;
  @Field(() => ComposerCreateNestedManyWithoutAuthorImageInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerCreateNestedManyWithoutAuthorImageInput
  >;
}

@InputType()
export class FileStorageCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  bucket!: string;
  @Field(() => String, { nullable: false })
  fileKey!: string;
  @Field(() => String, { nullable: false })
  fileCompleteUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicCreateNestedManyWithoutThumbnailInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicCreateNestedManyWithoutThumbnailInput
  >;
  @Field(() => SheetMusicCreateNestedManyWithoutSheetFileInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicCreateNestedManyWithoutSheetFileInput
  >;
  @Field(() => ComposerCreateNestedManyWithoutAuthorImageInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerCreateNestedManyWithoutAuthorImageInput
  >;
}

@ArgsType()
export class FileStorageGroupByArgs {
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => [FileStorageOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<FileStorageOrderByWithAggregationInput>;
  @Field(() => [FileStorageScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof FileStorageScalarFieldEnum>;
  @Field(() => FileStorageScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof FileStorageScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => FileStorageCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FileStorageCountAggregateInput>;
  @Field(() => FileStorageMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FileStorageMinAggregateInput>;
  @Field(() => FileStorageMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FileStorageMaxAggregateInput>;
}

@ObjectType()
export class FileStorageGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  bucket!: string;
  @Field(() => String, { nullable: false })
  fileKey!: string;
  @Field(() => String, { nullable: false })
  fileCompleteUrl!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => FileStorageCountAggregate, { nullable: true })
  _count?: InstanceType<typeof FileStorageCountAggregate>;
  @Field(() => FileStorageMinAggregate, { nullable: true })
  _min?: InstanceType<typeof FileStorageMinAggregate>;
  @Field(() => FileStorageMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof FileStorageMaxAggregate>;
}

@InputType()
export class FileStorageMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  bucket?: true;
  @Field(() => Boolean, { nullable: true })
  fileKey?: true;
  @Field(() => Boolean, { nullable: true })
  fileCompleteUrl?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class FileStorageMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  bucket?: string;
  @Field(() => String, { nullable: true })
  fileKey?: string;
  @Field(() => String, { nullable: true })
  fileCompleteUrl?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class FileStorageMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bucket?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileKey?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileCompleteUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class FileStorageMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  bucket?: true;
  @Field(() => Boolean, { nullable: true })
  fileKey?: true;
  @Field(() => Boolean, { nullable: true })
  fileCompleteUrl?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class FileStorageMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  bucket?: string;
  @Field(() => String, { nullable: true })
  fileKey?: string;
  @Field(() => String, { nullable: true })
  fileCompleteUrl?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class FileStorageMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bucket?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileKey?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileCompleteUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class FileStorageNullableRelationFilter {
  @Field(() => FileStorageWhereInput, { nullable: true })
  is?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => FileStorageWhereInput, { nullable: true })
  isNot?: InstanceType<typeof FileStorageWhereInput>;
}

@InputType()
export class FileStorageOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bucket?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileKey?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileCompleteUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => FileStorageCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof FileStorageCountOrderByAggregateInput>;
  @Field(() => FileStorageMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof FileStorageMaxOrderByAggregateInput>;
  @Field(() => FileStorageMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof FileStorageMinOrderByAggregateInput>;
}

@InputType()
export class FileStorageOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bucket?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileKey?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileCompleteUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SheetMusicOrderByRelationAggregateInput, { nullable: true })
  Thumbnails?: InstanceType<typeof SheetMusicOrderByRelationAggregateInput>;
  @Field(() => SheetMusicOrderByRelationAggregateInput, { nullable: true })
  SheetMusics?: InstanceType<typeof SheetMusicOrderByRelationAggregateInput>;
  @Field(() => ComposerOrderByRelationAggregateInput, { nullable: true })
  Composers?: InstanceType<typeof ComposerOrderByRelationAggregateInput>;
}

@InputType()
export class FileStorageRelationFilter {
  @Field(() => FileStorageWhereInput, { nullable: true })
  is?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => FileStorageWhereInput, { nullable: true })
  isNot?: InstanceType<typeof FileStorageWhereInput>;
}

@InputType()
export class FileStorageScalarWhereWithAggregatesInput {
  @Field(() => [FileStorageScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<FileStorageScalarWhereWithAggregatesInput>;
  @Field(() => [FileStorageScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<FileStorageScalarWhereWithAggregatesInput>;
  @Field(() => [FileStorageScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<FileStorageScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  bucket?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  fileKey?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class FileStorageUncheckedCreateWithoutComposersInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  bucket!: string;
  @Field(() => String, { nullable: false })
  fileKey!: string;
  @Field(() => String, { nullable: false })
  fileCompleteUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicUncheckedCreateNestedManyWithoutThumbnailInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicUncheckedCreateNestedManyWithoutThumbnailInput
  >;
  @Field(() => SheetMusicUncheckedCreateNestedManyWithoutSheetFileInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicUncheckedCreateNestedManyWithoutSheetFileInput
  >;
}

@InputType()
export class FileStorageUncheckedCreateWithoutSheetMusicsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  bucket!: string;
  @Field(() => String, { nullable: false })
  fileKey!: string;
  @Field(() => String, { nullable: false })
  fileCompleteUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicUncheckedCreateNestedManyWithoutThumbnailInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicUncheckedCreateNestedManyWithoutThumbnailInput
  >;
  @Field(() => ComposerUncheckedCreateNestedManyWithoutAuthorImageInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerUncheckedCreateNestedManyWithoutAuthorImageInput
  >;
}

@InputType()
export class FileStorageUncheckedCreateWithoutThumbnailsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  bucket!: string;
  @Field(() => String, { nullable: false })
  fileKey!: string;
  @Field(() => String, { nullable: false })
  fileCompleteUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicUncheckedCreateNestedManyWithoutSheetFileInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicUncheckedCreateNestedManyWithoutSheetFileInput
  >;
  @Field(() => ComposerUncheckedCreateNestedManyWithoutAuthorImageInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerUncheckedCreateNestedManyWithoutAuthorImageInput
  >;
}

@InputType()
export class FileStorageUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  bucket!: string;
  @Field(() => String, { nullable: false })
  fileKey!: string;
  @Field(() => String, { nullable: false })
  fileCompleteUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicUncheckedCreateNestedManyWithoutThumbnailInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicUncheckedCreateNestedManyWithoutThumbnailInput
  >;
  @Field(() => SheetMusicUncheckedCreateNestedManyWithoutSheetFileInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicUncheckedCreateNestedManyWithoutSheetFileInput
  >;
  @Field(() => ComposerUncheckedCreateNestedManyWithoutAuthorImageInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerUncheckedCreateNestedManyWithoutAuthorImageInput
  >;
}

@InputType()
export class FileStorageUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileStorageUncheckedUpdateWithoutComposersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUncheckedUpdateManyWithoutThumbnailNestedInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicUncheckedUpdateManyWithoutThumbnailNestedInput
  >;
  @Field(() => SheetMusicUncheckedUpdateManyWithoutSheetFileNestedInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicUncheckedUpdateManyWithoutSheetFileNestedInput
  >;
}

@InputType()
export class FileStorageUncheckedUpdateWithoutSheetMusicsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUncheckedUpdateManyWithoutThumbnailNestedInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicUncheckedUpdateManyWithoutThumbnailNestedInput
  >;
  @Field(() => ComposerUncheckedUpdateManyWithoutAuthorImageNestedInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerUncheckedUpdateManyWithoutAuthorImageNestedInput
  >;
}

@InputType()
export class FileStorageUncheckedUpdateWithoutThumbnailsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUncheckedUpdateManyWithoutSheetFileNestedInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicUncheckedUpdateManyWithoutSheetFileNestedInput
  >;
  @Field(() => ComposerUncheckedUpdateManyWithoutAuthorImageNestedInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerUncheckedUpdateManyWithoutAuthorImageNestedInput
  >;
}

@InputType()
export class FileStorageUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUncheckedUpdateManyWithoutThumbnailNestedInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicUncheckedUpdateManyWithoutThumbnailNestedInput
  >;
  @Field(() => SheetMusicUncheckedUpdateManyWithoutSheetFileNestedInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicUncheckedUpdateManyWithoutSheetFileNestedInput
  >;
  @Field(() => ComposerUncheckedUpdateManyWithoutAuthorImageNestedInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerUncheckedUpdateManyWithoutAuthorImageNestedInput
  >;
}

@InputType()
export class FileStorageUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileStorageUpdateOneRequiredWithoutSheetMusicsNestedInput {
  @Field(() => FileStorageCreateWithoutSheetMusicsInput, { nullable: true })
  @Type(() => FileStorageCreateWithoutSheetMusicsInput)
  create?: InstanceType<typeof FileStorageCreateWithoutSheetMusicsInput>;
  @Field(() => FileStorageCreateOrConnectWithoutSheetMusicsInput, {
    nullable: true,
  })
  @Type(() => FileStorageCreateOrConnectWithoutSheetMusicsInput)
  connectOrCreate?: InstanceType<
    typeof FileStorageCreateOrConnectWithoutSheetMusicsInput
  >;
  @Field(() => FileStorageUpsertWithoutSheetMusicsInput, { nullable: true })
  @Type(() => FileStorageUpsertWithoutSheetMusicsInput)
  upsert?: InstanceType<typeof FileStorageUpsertWithoutSheetMusicsInput>;
  @Field(() => FileStorageWhereUniqueInput, { nullable: true })
  @Type(() => FileStorageWhereUniqueInput)
  connect?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
  @Field(() => FileStorageUpdateToOneWithWhereWithoutSheetMusicsInput, {
    nullable: true,
  })
  @Type(() => FileStorageUpdateToOneWithWhereWithoutSheetMusicsInput)
  update?: InstanceType<
    typeof FileStorageUpdateToOneWithWhereWithoutSheetMusicsInput
  >;
}

@InputType()
export class FileStorageUpdateOneRequiredWithoutThumbnailsNestedInput {
  @Field(() => FileStorageCreateWithoutThumbnailsInput, { nullable: true })
  @Type(() => FileStorageCreateWithoutThumbnailsInput)
  create?: InstanceType<typeof FileStorageCreateWithoutThumbnailsInput>;
  @Field(() => FileStorageCreateOrConnectWithoutThumbnailsInput, {
    nullable: true,
  })
  @Type(() => FileStorageCreateOrConnectWithoutThumbnailsInput)
  connectOrCreate?: InstanceType<
    typeof FileStorageCreateOrConnectWithoutThumbnailsInput
  >;
  @Field(() => FileStorageUpsertWithoutThumbnailsInput, { nullable: true })
  @Type(() => FileStorageUpsertWithoutThumbnailsInput)
  upsert?: InstanceType<typeof FileStorageUpsertWithoutThumbnailsInput>;
  @Field(() => FileStorageWhereUniqueInput, { nullable: true })
  @Type(() => FileStorageWhereUniqueInput)
  connect?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
  @Field(() => FileStorageUpdateToOneWithWhereWithoutThumbnailsInput, {
    nullable: true,
  })
  @Type(() => FileStorageUpdateToOneWithWhereWithoutThumbnailsInput)
  update?: InstanceType<
    typeof FileStorageUpdateToOneWithWhereWithoutThumbnailsInput
  >;
}

@InputType()
export class FileStorageUpdateOneWithoutComposersNestedInput {
  @Field(() => FileStorageCreateWithoutComposersInput, { nullable: true })
  @Type(() => FileStorageCreateWithoutComposersInput)
  create?: InstanceType<typeof FileStorageCreateWithoutComposersInput>;
  @Field(() => FileStorageCreateOrConnectWithoutComposersInput, {
    nullable: true,
  })
  @Type(() => FileStorageCreateOrConnectWithoutComposersInput)
  connectOrCreate?: InstanceType<
    typeof FileStorageCreateOrConnectWithoutComposersInput
  >;
  @Field(() => FileStorageUpsertWithoutComposersInput, { nullable: true })
  @Type(() => FileStorageUpsertWithoutComposersInput)
  upsert?: InstanceType<typeof FileStorageUpsertWithoutComposersInput>;
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  disconnect?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  delete?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => FileStorageWhereUniqueInput, { nullable: true })
  @Type(() => FileStorageWhereUniqueInput)
  connect?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
  @Field(() => FileStorageUpdateToOneWithWhereWithoutComposersInput, {
    nullable: true,
  })
  @Type(() => FileStorageUpdateToOneWithWhereWithoutComposersInput)
  update?: InstanceType<
    typeof FileStorageUpdateToOneWithWhereWithoutComposersInput
  >;
}

@InputType()
export class FileStorageUpdateToOneWithWhereWithoutComposersInput {
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => FileStorageUpdateWithoutComposersInput, { nullable: false })
  @Type(() => FileStorageUpdateWithoutComposersInput)
  data!: InstanceType<typeof FileStorageUpdateWithoutComposersInput>;
}

@InputType()
export class FileStorageUpdateToOneWithWhereWithoutSheetMusicsInput {
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => FileStorageUpdateWithoutSheetMusicsInput, { nullable: false })
  @Type(() => FileStorageUpdateWithoutSheetMusicsInput)
  data!: InstanceType<typeof FileStorageUpdateWithoutSheetMusicsInput>;
}

@InputType()
export class FileStorageUpdateToOneWithWhereWithoutThumbnailsInput {
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => FileStorageUpdateWithoutThumbnailsInput, { nullable: false })
  @Type(() => FileStorageUpdateWithoutThumbnailsInput)
  data!: InstanceType<typeof FileStorageUpdateWithoutThumbnailsInput>;
}

@InputType()
export class FileStorageUpdateWithoutComposersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUpdateManyWithoutThumbnailNestedInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicUpdateManyWithoutThumbnailNestedInput
  >;
  @Field(() => SheetMusicUpdateManyWithoutSheetFileNestedInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicUpdateManyWithoutSheetFileNestedInput
  >;
}

@InputType()
export class FileStorageUpdateWithoutSheetMusicsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUpdateManyWithoutThumbnailNestedInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicUpdateManyWithoutThumbnailNestedInput
  >;
  @Field(() => ComposerUpdateManyWithoutAuthorImageNestedInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerUpdateManyWithoutAuthorImageNestedInput
  >;
}

@InputType()
export class FileStorageUpdateWithoutThumbnailsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUpdateManyWithoutSheetFileNestedInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicUpdateManyWithoutSheetFileNestedInput
  >;
  @Field(() => ComposerUpdateManyWithoutAuthorImageNestedInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerUpdateManyWithoutAuthorImageNestedInput
  >;
}

@InputType()
export class FileStorageUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUpdateManyWithoutThumbnailNestedInput, {
    nullable: true,
  })
  Thumbnails?: InstanceType<
    typeof SheetMusicUpdateManyWithoutThumbnailNestedInput
  >;
  @Field(() => SheetMusicUpdateManyWithoutSheetFileNestedInput, {
    nullable: true,
  })
  SheetMusics?: InstanceType<
    typeof SheetMusicUpdateManyWithoutSheetFileNestedInput
  >;
  @Field(() => ComposerUpdateManyWithoutAuthorImageNestedInput, {
    nullable: true,
  })
  Composers?: InstanceType<
    typeof ComposerUpdateManyWithoutAuthorImageNestedInput
  >;
}

@InputType()
export class FileStorageUpsertWithoutComposersInput {
  @Field(() => FileStorageUpdateWithoutComposersInput, { nullable: false })
  @Type(() => FileStorageUpdateWithoutComposersInput)
  update!: InstanceType<typeof FileStorageUpdateWithoutComposersInput>;
  @Field(() => FileStorageCreateWithoutComposersInput, { nullable: false })
  @Type(() => FileStorageCreateWithoutComposersInput)
  create!: InstanceType<typeof FileStorageCreateWithoutComposersInput>;
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
}

@InputType()
export class FileStorageUpsertWithoutSheetMusicsInput {
  @Field(() => FileStorageUpdateWithoutSheetMusicsInput, { nullable: false })
  @Type(() => FileStorageUpdateWithoutSheetMusicsInput)
  update!: InstanceType<typeof FileStorageUpdateWithoutSheetMusicsInput>;
  @Field(() => FileStorageCreateWithoutSheetMusicsInput, { nullable: false })
  @Type(() => FileStorageCreateWithoutSheetMusicsInput)
  create!: InstanceType<typeof FileStorageCreateWithoutSheetMusicsInput>;
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
}

@InputType()
export class FileStorageUpsertWithoutThumbnailsInput {
  @Field(() => FileStorageUpdateWithoutThumbnailsInput, { nullable: false })
  @Type(() => FileStorageUpdateWithoutThumbnailsInput)
  update!: InstanceType<typeof FileStorageUpdateWithoutThumbnailsInput>;
  @Field(() => FileStorageCreateWithoutThumbnailsInput, { nullable: false })
  @Type(() => FileStorageCreateWithoutThumbnailsInput)
  create!: InstanceType<typeof FileStorageCreateWithoutThumbnailsInput>;
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
}

@InputType()
export class FileStorageWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => [FileStorageWhereInput], { nullable: true })
  AND?: Array<FileStorageWhereInput>;
  @Field(() => [FileStorageWhereInput], { nullable: true })
  OR?: Array<FileStorageWhereInput>;
  @Field(() => [FileStorageWhereInput], { nullable: true })
  NOT?: Array<FileStorageWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  bucket?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileKey?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => SheetMusicListRelationFilter, { nullable: true })
  Thumbnails?: InstanceType<typeof SheetMusicListRelationFilter>;
  @Field(() => SheetMusicListRelationFilter, { nullable: true })
  SheetMusics?: InstanceType<typeof SheetMusicListRelationFilter>;
  @Field(() => ComposerListRelationFilter, { nullable: true })
  Composers?: InstanceType<typeof ComposerListRelationFilter>;
}

@InputType()
export class FileStorageWhereInput {
  @Field(() => [FileStorageWhereInput], { nullable: true })
  AND?: Array<FileStorageWhereInput>;
  @Field(() => [FileStorageWhereInput], { nullable: true })
  OR?: Array<FileStorageWhereInput>;
  @Field(() => [FileStorageWhereInput], { nullable: true })
  NOT?: Array<FileStorageWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  bucket?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileKey?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileCompleteUrl?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => SheetMusicListRelationFilter, { nullable: true })
  Thumbnails?: InstanceType<typeof SheetMusicListRelationFilter>;
  @Field(() => SheetMusicListRelationFilter, { nullable: true })
  SheetMusics?: InstanceType<typeof SheetMusicListRelationFilter>;
  @Field(() => ComposerListRelationFilter, { nullable: true })
  Composers?: InstanceType<typeof ComposerListRelationFilter>;
}

@ObjectType()
export class FileStorage {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  bucket!: string;
  @Field(() => String, { nullable: false })
  fileKey!: string;
  @Field(() => String, { nullable: false })
  fileCompleteUrl!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => [SheetMusic], { nullable: true })
  Thumbnails?: Array<SheetMusic>;
  @Field(() => [SheetMusic], { nullable: true })
  SheetMusics?: Array<SheetMusic>;
  @Field(() => [Composer], { nullable: true })
  Composers?: Array<Composer>;
  @Field(() => FileStorageCount, { nullable: false })
  _count?: InstanceType<typeof FileStorageCount>;
}

@ArgsType()
export class FindFirstFileStorageOrThrowArgs {
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => [FileStorageOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileStorageOrderByWithRelationInput>;
  @Field(() => FileStorageWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FileStorageScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FileStorageScalarFieldEnum>;
}

@ArgsType()
export class FindFirstFileStorageArgs {
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => [FileStorageOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileStorageOrderByWithRelationInput>;
  @Field(() => FileStorageWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FileStorageScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FileStorageScalarFieldEnum>;
}

@ArgsType()
export class FindManyFileStorageArgs {
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
  @Field(() => [FileStorageOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FileStorageOrderByWithRelationInput>;
  @Field(() => FileStorageWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [FileStorageScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FileStorageScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueFileStorageOrThrowArgs {
  @Field(() => FileStorageWhereUniqueInput, { nullable: false })
  @Type(() => FileStorageWhereUniqueInput)
  where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueFileStorageArgs {
  @Field(() => FileStorageWhereUniqueInput, { nullable: false })
  @Type(() => FileStorageWhereUniqueInput)
  where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyFileStorageArgs {
  @Field(() => FileStorageUpdateManyMutationInput, { nullable: false })
  @Type(() => FileStorageUpdateManyMutationInput)
  data!: InstanceType<typeof FileStorageUpdateManyMutationInput>;
  @Field(() => FileStorageWhereInput, { nullable: true })
  @Type(() => FileStorageWhereInput)
  where?: InstanceType<typeof FileStorageWhereInput>;
}

@ArgsType()
export class UpdateOneFileStorageArgs {
  @Field(() => FileStorageUpdateInput, { nullable: false })
  @Type(() => FileStorageUpdateInput)
  data!: InstanceType<typeof FileStorageUpdateInput>;
  @Field(() => FileStorageWhereUniqueInput, { nullable: false })
  @Type(() => FileStorageWhereUniqueInput)
  where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneFileStorageArgs {
  @Field(() => FileStorageWhereUniqueInput, { nullable: false })
  @Type(() => FileStorageWhereUniqueInput)
  where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
  @Field(() => FileStorageCreateInput, { nullable: false })
  @Type(() => FileStorageCreateInput)
  create!: InstanceType<typeof FileStorageCreateInput>;
  @Field(() => FileStorageUpdateInput, { nullable: false })
  @Type(() => FileStorageUpdateInput)
  update!: InstanceType<typeof FileStorageUpdateInput>;
}

@ObjectType()
export class AffectedRows {
  @Field(() => Int, { nullable: false })
  count!: number;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
  @Field(() => Date, { nullable: true })
  set?: Date | string;
}

@InputType()
export class DateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeNullableFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeNullableWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumRolesFieldUpdateOperationsInput {
  @Field(() => Roles, { nullable: true })
  set?: keyof typeof Roles;
}

@InputType()
export class EnumRolesFilter {
  @Field(() => Roles, { nullable: true })
  equals?: keyof typeof Roles;
  @Field(() => [Roles], { nullable: true })
  in?: Array<keyof typeof Roles>;
  @Field(() => [Roles], { nullable: true })
  notIn?: Array<keyof typeof Roles>;
  @Field(() => NestedEnumRolesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRolesFilter>;
}

@InputType()
export class EnumRolesWithAggregatesFilter {
  @Field(() => Roles, { nullable: true })
  equals?: keyof typeof Roles;
  @Field(() => [Roles], { nullable: true })
  in?: Array<keyof typeof Roles>;
  @Field(() => [Roles], { nullable: true })
  notIn?: Array<keyof typeof Roles>;
  @Field(() => NestedEnumRolesWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRolesWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumRolesFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumRolesFilter>;
  @Field(() => NestedEnumRolesFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumRolesFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
  @Field(() => Int, { nullable: true })
  set?: number;
  @Field(() => Int, { nullable: true })
  increment?: number;
  @Field(() => Int, { nullable: true })
  decrement?: number;
  @Field(() => Int, { nullable: true })
  multiply?: number;
  @Field(() => Int, { nullable: true })
  divide?: number;
}

@InputType()
export class IntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedDateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeNullableFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeNullableWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumRolesFilter {
  @Field(() => Roles, { nullable: true })
  equals?: keyof typeof Roles;
  @Field(() => [Roles], { nullable: true })
  in?: Array<keyof typeof Roles>;
  @Field(() => [Roles], { nullable: true })
  notIn?: Array<keyof typeof Roles>;
  @Field(() => NestedEnumRolesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRolesFilter>;
}

@InputType()
export class NestedEnumRolesWithAggregatesFilter {
  @Field(() => Roles, { nullable: true })
  equals?: keyof typeof Roles;
  @Field(() => [Roles], { nullable: true })
  in?: Array<keyof typeof Roles>;
  @Field(() => [Roles], { nullable: true })
  notIn?: Array<keyof typeof Roles>;
  @Field(() => NestedEnumRolesWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRolesWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumRolesFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumRolesFilter>;
  @Field(() => NestedEnumRolesFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumRolesFilter>;
}

@InputType()
export class NestedFloatFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => NestedFloatFilter, { nullable: true })
  not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableDateTimeFieldUpdateOperationsInput {
  @Field(() => Date, { nullable: true })
  set?: Date | string;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class SortOrderInput {
  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;
  @Field(() => NullsOrder, { nullable: true })
  nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateSheetMusic {
  @Field(() => SheetMusicCountAggregate, { nullable: true })
  _count?: InstanceType<typeof SheetMusicCountAggregate>;
  @Field(() => SheetMusicAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof SheetMusicAvgAggregate>;
  @Field(() => SheetMusicSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof SheetMusicSumAggregate>;
  @Field(() => SheetMusicMinAggregate, { nullable: true })
  _min?: InstanceType<typeof SheetMusicMinAggregate>;
  @Field(() => SheetMusicMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof SheetMusicMaxAggregate>;
}

@ArgsType()
export class CreateManySheetMusicArgs {
  @Field(() => [SheetMusicCreateManyInput], { nullable: false })
  @Type(() => SheetMusicCreateManyInput)
  data!: Array<SheetMusicCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneSheetMusicArgs {
  @Field(() => SheetMusicCreateInput, { nullable: false })
  @Type(() => SheetMusicCreateInput)
  data!: InstanceType<typeof SheetMusicCreateInput>;
}

@ArgsType()
export class DeleteManySheetMusicArgs {
  @Field(() => SheetMusicWhereInput, { nullable: true })
  @Type(() => SheetMusicWhereInput)
  where?: InstanceType<typeof SheetMusicWhereInput>;
}

@ArgsType()
export class DeleteOneSheetMusicArgs {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstSheetMusicOrThrowArgs {
  @Field(() => SheetMusicWhereInput, { nullable: true })
  @Type(() => SheetMusicWhereInput)
  where?: InstanceType<typeof SheetMusicWhereInput>;
  @Field(() => [SheetMusicOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SheetMusicOrderByWithRelationInput>;
  @Field(() => SheetMusicWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [SheetMusicScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof SheetMusicScalarFieldEnum>;
}

@ArgsType()
export class FindFirstSheetMusicArgs {
  @Field(() => SheetMusicWhereInput, { nullable: true })
  @Type(() => SheetMusicWhereInput)
  where?: InstanceType<typeof SheetMusicWhereInput>;
  @Field(() => [SheetMusicOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SheetMusicOrderByWithRelationInput>;
  @Field(() => SheetMusicWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [SheetMusicScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof SheetMusicScalarFieldEnum>;
}

@ArgsType()
export class FindManySheetMusicArgs {
  @Field(() => SheetMusicWhereInput, { nullable: true })
  @Type(() => SheetMusicWhereInput)
  where?: InstanceType<typeof SheetMusicWhereInput>;
  @Field(() => [SheetMusicOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SheetMusicOrderByWithRelationInput>;
  @Field(() => SheetMusicWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [SheetMusicScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof SheetMusicScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSheetMusicOrThrowArgs {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueSheetMusicArgs {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class SheetMusicAggregateArgs {
  @Field(() => SheetMusicWhereInput, { nullable: true })
  @Type(() => SheetMusicWhereInput)
  where?: InstanceType<typeof SheetMusicWhereInput>;
  @Field(() => [SheetMusicOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SheetMusicOrderByWithRelationInput>;
  @Field(() => SheetMusicWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => SheetMusicCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof SheetMusicCountAggregateInput>;
  @Field(() => SheetMusicAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof SheetMusicAvgAggregateInput>;
  @Field(() => SheetMusicSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof SheetMusicSumAggregateInput>;
  @Field(() => SheetMusicMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof SheetMusicMinAggregateInput>;
  @Field(() => SheetMusicMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof SheetMusicMaxAggregateInput>;
}

@InputType()
export class SheetMusicAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  numberOfDownloads?: true;
}

@ObjectType()
export class SheetMusicAvgAggregate {
  @Field(() => Float, { nullable: true })
  id?: number;
  @Field(() => Float, { nullable: true })
  numberOfDownloads?: number;
}

@InputType()
export class SheetMusicAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberOfDownloads?: keyof typeof SortOrder;
}

@InputType()
export class SheetMusicCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  slug?: true;
  @Field(() => Boolean, { nullable: true })
  composerId?: true;
  @Field(() => Boolean, { nullable: true })
  arranger?: true;
  @Field(() => Boolean, { nullable: true })
  instrument?: true;
  @Field(() => Boolean, { nullable: true })
  genre?: true;
  @Field(() => Boolean, { nullable: true })
  difficulty?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  year?: true;
  @Field(() => Boolean, { nullable: true })
  fileId?: true;
  @Field(() => Boolean, { nullable: true })
  thumbnailId?: true;
  @Field(() => Boolean, { nullable: true })
  numberOfDownloads?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  uploadedById?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class SheetMusicCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  title!: number;
  @Field(() => Int, { nullable: false })
  slug!: number;
  @Field(() => Int, { nullable: false })
  composerId!: number;
  @Field(() => Int, { nullable: false })
  arranger!: number;
  @Field(() => Int, { nullable: false })
  instrument!: number;
  @Field(() => Int, { nullable: false })
  genre!: number;
  @Field(() => Int, { nullable: false })
  difficulty!: number;
  @Field(() => Int, { nullable: false })
  description!: number;
  @Field(() => Int, { nullable: false })
  year!: number;
  @Field(() => Int, { nullable: false })
  fileId!: number;
  @Field(() => Int, { nullable: false })
  thumbnailId!: number;
  @Field(() => Int, { nullable: false })
  numberOfDownloads!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  uploadedById!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class SheetMusicCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  slug?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  composerId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  arranger?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  instrument?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  genre?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  difficulty?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  year?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  thumbnailId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberOfDownloads?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  uploadedById?: keyof typeof SortOrder;
}

@ObjectType()
export class SheetMusicCount {
  @Field(() => Int, { nullable: false })
  favorites?: number;
}

@InputType()
export class SheetMusicCreateManyComposerInputEnvelope {
  @Field(() => [SheetMusicCreateManyComposerInput], { nullable: false })
  @Type(() => SheetMusicCreateManyComposerInput)
  data!: Array<SheetMusicCreateManyComposerInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class SheetMusicCreateManyComposerInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  fileId!: string;
  @Field(() => String, { nullable: false })
  thumbnailId!: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  uploadedById!: string;
}

@InputType()
export class SheetMusicCreateManySheetFileInputEnvelope {
  @Field(() => [SheetMusicCreateManySheetFileInput], { nullable: false })
  @Type(() => SheetMusicCreateManySheetFileInput)
  data!: Array<SheetMusicCreateManySheetFileInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class SheetMusicCreateManySheetFileInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  thumbnailId!: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  uploadedById!: string;
}

@InputType()
export class SheetMusicCreateManyThumbnailInputEnvelope {
  @Field(() => [SheetMusicCreateManyThumbnailInput], { nullable: false })
  @Type(() => SheetMusicCreateManyThumbnailInput)
  data!: Array<SheetMusicCreateManyThumbnailInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class SheetMusicCreateManyThumbnailInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  fileId!: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  uploadedById!: string;
}

@InputType()
export class SheetMusicCreateManyUploadedByInputEnvelope {
  @Field(() => [SheetMusicCreateManyUploadedByInput], { nullable: false })
  @Type(() => SheetMusicCreateManyUploadedByInput)
  data!: Array<SheetMusicCreateManyUploadedByInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class SheetMusicCreateManyUploadedByInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  fileId!: string;
  @Field(() => String, { nullable: false })
  thumbnailId!: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class SheetMusicCreateManyInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  fileId!: string;
  @Field(() => String, { nullable: false })
  thumbnailId!: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  uploadedById!: string;
}

@InputType()
export class SheetMusicCreateNestedManyWithoutComposerInput {
  @Field(() => [SheetMusicCreateWithoutComposerInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutComposerInput)
  create?: Array<SheetMusicCreateWithoutComposerInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutComposerInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutComposerInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutComposerInput>;
  @Field(() => SheetMusicCreateManyComposerInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyComposerInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyComposerInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
}

@InputType()
export class SheetMusicCreateNestedManyWithoutSheetFileInput {
  @Field(() => [SheetMusicCreateWithoutSheetFileInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutSheetFileInput)
  create?: Array<SheetMusicCreateWithoutSheetFileInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutSheetFileInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutSheetFileInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutSheetFileInput>;
  @Field(() => SheetMusicCreateManySheetFileInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManySheetFileInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManySheetFileInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
}

@InputType()
export class SheetMusicCreateNestedManyWithoutThumbnailInput {
  @Field(() => [SheetMusicCreateWithoutThumbnailInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutThumbnailInput)
  create?: Array<SheetMusicCreateWithoutThumbnailInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutThumbnailInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutThumbnailInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutThumbnailInput>;
  @Field(() => SheetMusicCreateManyThumbnailInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyThumbnailInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyThumbnailInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
}

@InputType()
export class SheetMusicCreateNestedManyWithoutUploadedByInput {
  @Field(() => [SheetMusicCreateWithoutUploadedByInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutUploadedByInput)
  create?: Array<SheetMusicCreateWithoutUploadedByInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutUploadedByInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutUploadedByInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutUploadedByInput>;
  @Field(() => SheetMusicCreateManyUploadedByInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyUploadedByInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyUploadedByInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
}

@InputType()
export class SheetMusicCreateNestedOneWithoutFavoritesInput {
  @Field(() => SheetMusicCreateWithoutFavoritesInput, { nullable: true })
  @Type(() => SheetMusicCreateWithoutFavoritesInput)
  create?: InstanceType<typeof SheetMusicCreateWithoutFavoritesInput>;
  @Field(() => SheetMusicCreateOrConnectWithoutFavoritesInput, {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutFavoritesInput)
  connectOrCreate?: InstanceType<
    typeof SheetMusicCreateOrConnectWithoutFavoritesInput
  >;
  @Field(() => SheetMusicWhereUniqueInput, { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
}

@InputType()
export class SheetMusicCreateOrConnectWithoutComposerInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicCreateWithoutComposerInput, { nullable: false })
  @Type(() => SheetMusicCreateWithoutComposerInput)
  create!: InstanceType<typeof SheetMusicCreateWithoutComposerInput>;
}

@InputType()
export class SheetMusicCreateOrConnectWithoutFavoritesInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicCreateWithoutFavoritesInput, { nullable: false })
  @Type(() => SheetMusicCreateWithoutFavoritesInput)
  create!: InstanceType<typeof SheetMusicCreateWithoutFavoritesInput>;
}

@InputType()
export class SheetMusicCreateOrConnectWithoutSheetFileInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicCreateWithoutSheetFileInput, { nullable: false })
  @Type(() => SheetMusicCreateWithoutSheetFileInput)
  create!: InstanceType<typeof SheetMusicCreateWithoutSheetFileInput>;
}

@InputType()
export class SheetMusicCreateOrConnectWithoutThumbnailInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicCreateWithoutThumbnailInput, { nullable: false })
  @Type(() => SheetMusicCreateWithoutThumbnailInput)
  create!: InstanceType<typeof SheetMusicCreateWithoutThumbnailInput>;
}

@InputType()
export class SheetMusicCreateOrConnectWithoutUploadedByInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicCreateWithoutUploadedByInput, { nullable: false })
  @Type(() => SheetMusicCreateWithoutUploadedByInput)
  create!: InstanceType<typeof SheetMusicCreateWithoutUploadedByInput>;
}

@InputType()
export class SheetMusicCreateWithoutComposerInput {
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FavoritesCreateNestedManyWithoutSheetMusicInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesCreateNestedManyWithoutSheetMusicInput
  >;
  @Field(() => FileStorageCreateNestedOneWithoutThumbnailsInput, {
    nullable: false,
  })
  thumbnail!: InstanceType<
    typeof FileStorageCreateNestedOneWithoutThumbnailsInput
  >;
  @Field(() => FileStorageCreateNestedOneWithoutSheetMusicsInput, {
    nullable: false,
  })
  sheetFile!: InstanceType<
    typeof FileStorageCreateNestedOneWithoutSheetMusicsInput
  >;
  @Field(() => UserCreateNestedOneWithoutFileUploadedInput, { nullable: false })
  UploadedBy!: InstanceType<typeof UserCreateNestedOneWithoutFileUploadedInput>;
}

@InputType()
export class SheetMusicCreateWithoutFavoritesInput {
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FileStorageCreateNestedOneWithoutThumbnailsInput, {
    nullable: false,
  })
  thumbnail!: InstanceType<
    typeof FileStorageCreateNestedOneWithoutThumbnailsInput
  >;
  @Field(() => FileStorageCreateNestedOneWithoutSheetMusicsInput, {
    nullable: false,
  })
  sheetFile!: InstanceType<
    typeof FileStorageCreateNestedOneWithoutSheetMusicsInput
  >;
  @Field(() => ComposerCreateNestedOneWithoutMusicSheetsInput, {
    nullable: false,
  })
  Composer!: InstanceType<
    typeof ComposerCreateNestedOneWithoutMusicSheetsInput
  >;
  @Field(() => UserCreateNestedOneWithoutFileUploadedInput, { nullable: false })
  UploadedBy!: InstanceType<typeof UserCreateNestedOneWithoutFileUploadedInput>;
}

@InputType()
export class SheetMusicCreateWithoutSheetFileInput {
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FavoritesCreateNestedManyWithoutSheetMusicInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesCreateNestedManyWithoutSheetMusicInput
  >;
  @Field(() => FileStorageCreateNestedOneWithoutThumbnailsInput, {
    nullable: false,
  })
  thumbnail!: InstanceType<
    typeof FileStorageCreateNestedOneWithoutThumbnailsInput
  >;
  @Field(() => ComposerCreateNestedOneWithoutMusicSheetsInput, {
    nullable: false,
  })
  Composer!: InstanceType<
    typeof ComposerCreateNestedOneWithoutMusicSheetsInput
  >;
  @Field(() => UserCreateNestedOneWithoutFileUploadedInput, { nullable: false })
  UploadedBy!: InstanceType<typeof UserCreateNestedOneWithoutFileUploadedInput>;
}

@InputType()
export class SheetMusicCreateWithoutThumbnailInput {
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FavoritesCreateNestedManyWithoutSheetMusicInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesCreateNestedManyWithoutSheetMusicInput
  >;
  @Field(() => FileStorageCreateNestedOneWithoutSheetMusicsInput, {
    nullable: false,
  })
  sheetFile!: InstanceType<
    typeof FileStorageCreateNestedOneWithoutSheetMusicsInput
  >;
  @Field(() => ComposerCreateNestedOneWithoutMusicSheetsInput, {
    nullable: false,
  })
  Composer!: InstanceType<
    typeof ComposerCreateNestedOneWithoutMusicSheetsInput
  >;
  @Field(() => UserCreateNestedOneWithoutFileUploadedInput, { nullable: false })
  UploadedBy!: InstanceType<typeof UserCreateNestedOneWithoutFileUploadedInput>;
}

@InputType()
export class SheetMusicCreateWithoutUploadedByInput {
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FavoritesCreateNestedManyWithoutSheetMusicInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesCreateNestedManyWithoutSheetMusicInput
  >;
  @Field(() => FileStorageCreateNestedOneWithoutThumbnailsInput, {
    nullable: false,
  })
  thumbnail!: InstanceType<
    typeof FileStorageCreateNestedOneWithoutThumbnailsInput
  >;
  @Field(() => FileStorageCreateNestedOneWithoutSheetMusicsInput, {
    nullable: false,
  })
  sheetFile!: InstanceType<
    typeof FileStorageCreateNestedOneWithoutSheetMusicsInput
  >;
  @Field(() => ComposerCreateNestedOneWithoutMusicSheetsInput, {
    nullable: false,
  })
  Composer!: InstanceType<
    typeof ComposerCreateNestedOneWithoutMusicSheetsInput
  >;
}

@InputType()
export class SheetMusicCreateInput {
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FavoritesCreateNestedManyWithoutSheetMusicInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesCreateNestedManyWithoutSheetMusicInput
  >;
  @Field(() => FileStorageCreateNestedOneWithoutThumbnailsInput, {
    nullable: false,
  })
  thumbnail!: InstanceType<
    typeof FileStorageCreateNestedOneWithoutThumbnailsInput
  >;
  @Field(() => FileStorageCreateNestedOneWithoutSheetMusicsInput, {
    nullable: false,
  })
  sheetFile!: InstanceType<
    typeof FileStorageCreateNestedOneWithoutSheetMusicsInput
  >;
  @Field(() => ComposerCreateNestedOneWithoutMusicSheetsInput, {
    nullable: false,
  })
  Composer!: InstanceType<
    typeof ComposerCreateNestedOneWithoutMusicSheetsInput
  >;
  @Field(() => UserCreateNestedOneWithoutFileUploadedInput, { nullable: false })
  UploadedBy!: InstanceType<typeof UserCreateNestedOneWithoutFileUploadedInput>;
}

@ArgsType()
export class SheetMusicGroupByArgs {
  @Field(() => SheetMusicWhereInput, { nullable: true })
  @Type(() => SheetMusicWhereInput)
  where?: InstanceType<typeof SheetMusicWhereInput>;
  @Field(() => [SheetMusicOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<SheetMusicOrderByWithAggregationInput>;
  @Field(() => [SheetMusicScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof SheetMusicScalarFieldEnum>;
  @Field(() => SheetMusicScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof SheetMusicScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => SheetMusicCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof SheetMusicCountAggregateInput>;
  @Field(() => SheetMusicAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof SheetMusicAvgAggregateInput>;
  @Field(() => SheetMusicSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof SheetMusicSumAggregateInput>;
  @Field(() => SheetMusicMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof SheetMusicMinAggregateInput>;
  @Field(() => SheetMusicMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof SheetMusicMaxAggregateInput>;
}

@ObjectType()
export class SheetMusicGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  fileId!: string;
  @Field(() => String, { nullable: false })
  thumbnailId!: string;
  @Field(() => Int, { nullable: false })
  numberOfDownloads!: number;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => String, { nullable: false })
  uploadedById!: string;
  @Field(() => SheetMusicCountAggregate, { nullable: true })
  _count?: InstanceType<typeof SheetMusicCountAggregate>;
  @Field(() => SheetMusicAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof SheetMusicAvgAggregate>;
  @Field(() => SheetMusicSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof SheetMusicSumAggregate>;
  @Field(() => SheetMusicMinAggregate, { nullable: true })
  _min?: InstanceType<typeof SheetMusicMinAggregate>;
  @Field(() => SheetMusicMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof SheetMusicMaxAggregate>;
}

@InputType()
export class SheetMusicListRelationFilter {
  @Field(() => SheetMusicWhereInput, { nullable: true })
  every?: InstanceType<typeof SheetMusicWhereInput>;
  @Field(() => SheetMusicWhereInput, { nullable: true })
  some?: InstanceType<typeof SheetMusicWhereInput>;
  @Field(() => SheetMusicWhereInput, { nullable: true })
  none?: InstanceType<typeof SheetMusicWhereInput>;
}

@InputType()
export class SheetMusicMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  slug?: true;
  @Field(() => Boolean, { nullable: true })
  composerId?: true;
  @Field(() => Boolean, { nullable: true })
  arranger?: true;
  @Field(() => Boolean, { nullable: true })
  instrument?: true;
  @Field(() => Boolean, { nullable: true })
  genre?: true;
  @Field(() => Boolean, { nullable: true })
  difficulty?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  year?: true;
  @Field(() => Boolean, { nullable: true })
  fileId?: true;
  @Field(() => Boolean, { nullable: true })
  thumbnailId?: true;
  @Field(() => Boolean, { nullable: true })
  numberOfDownloads?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  uploadedById?: true;
}

@ObjectType()
export class SheetMusicMaxAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: true })
  composerId?: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: true })
  instrument?: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: true })
  fileId?: string;
  @Field(() => String, { nullable: true })
  thumbnailId?: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  uploadedById?: string;
}

@InputType()
export class SheetMusicMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  slug?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  composerId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  arranger?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  instrument?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  genre?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  difficulty?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  year?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  thumbnailId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberOfDownloads?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  uploadedById?: keyof typeof SortOrder;
}

@InputType()
export class SheetMusicMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  slug?: true;
  @Field(() => Boolean, { nullable: true })
  composerId?: true;
  @Field(() => Boolean, { nullable: true })
  arranger?: true;
  @Field(() => Boolean, { nullable: true })
  instrument?: true;
  @Field(() => Boolean, { nullable: true })
  genre?: true;
  @Field(() => Boolean, { nullable: true })
  difficulty?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  year?: true;
  @Field(() => Boolean, { nullable: true })
  fileId?: true;
  @Field(() => Boolean, { nullable: true })
  thumbnailId?: true;
  @Field(() => Boolean, { nullable: true })
  numberOfDownloads?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  uploadedById?: true;
}

@ObjectType()
export class SheetMusicMinAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: true })
  composerId?: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: true })
  instrument?: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: true })
  fileId?: string;
  @Field(() => String, { nullable: true })
  thumbnailId?: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  uploadedById?: string;
}

@InputType()
export class SheetMusicMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  slug?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  composerId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  arranger?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  instrument?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  genre?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  difficulty?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  year?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fileId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  thumbnailId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberOfDownloads?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  uploadedById?: keyof typeof SortOrder;
}

@InputType()
export class SheetMusicOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class SheetMusicOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  slug?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  composerId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  arranger?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  instrument?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  genre?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  difficulty?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  description?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  year?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  fileId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  thumbnailId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberOfDownloads?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  uploadedById?: keyof typeof SortOrder;
  @Field(() => SheetMusicCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof SheetMusicCountOrderByAggregateInput>;
  @Field(() => SheetMusicAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof SheetMusicAvgOrderByAggregateInput>;
  @Field(() => SheetMusicMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof SheetMusicMaxOrderByAggregateInput>;
  @Field(() => SheetMusicMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof SheetMusicMinOrderByAggregateInput>;
  @Field(() => SheetMusicSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof SheetMusicSumOrderByAggregateInput>;
}

@InputType()
export class SheetMusicOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  slug?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  composerId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  arranger?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  instrument?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  genre?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  difficulty?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  description?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  year?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  fileId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  thumbnailId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberOfDownloads?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  uploadedById?: keyof typeof SortOrder;
  @Field(() => FavoritesOrderByRelationAggregateInput, { nullable: true })
  favorites?: InstanceType<typeof FavoritesOrderByRelationAggregateInput>;
  @Field(() => FileStorageOrderByWithRelationInput, { nullable: true })
  thumbnail?: InstanceType<typeof FileStorageOrderByWithRelationInput>;
  @Field(() => FileStorageOrderByWithRelationInput, { nullable: true })
  sheetFile?: InstanceType<typeof FileStorageOrderByWithRelationInput>;
  @Field(() => ComposerOrderByWithRelationInput, { nullable: true })
  Composer?: InstanceType<typeof ComposerOrderByWithRelationInput>;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  UploadedBy?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class SheetMusicRelationFilter {
  @Field(() => SheetMusicWhereInput, { nullable: true })
  is?: InstanceType<typeof SheetMusicWhereInput>;
  @Field(() => SheetMusicWhereInput, { nullable: true })
  isNot?: InstanceType<typeof SheetMusicWhereInput>;
}

@InputType()
export class SheetMusicScalarWhereWithAggregatesInput {
  @Field(() => [SheetMusicScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<SheetMusicScalarWhereWithAggregatesInput>;
  @Field(() => [SheetMusicScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<SheetMusicScalarWhereWithAggregatesInput>;
  @Field(() => [SheetMusicScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<SheetMusicScalarWhereWithAggregatesInput>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  slug?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  composerId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  arranger?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  instrument?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  genre?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  difficulty?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  year?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  fileId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  thumbnailId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  uploadedById?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class SheetMusicScalarWhereInput {
  @Field(() => [SheetMusicScalarWhereInput], { nullable: true })
  AND?: Array<SheetMusicScalarWhereInput>;
  @Field(() => [SheetMusicScalarWhereInput], { nullable: true })
  OR?: Array<SheetMusicScalarWhereInput>;
  @Field(() => [SheetMusicScalarWhereInput], { nullable: true })
  NOT?: Array<SheetMusicScalarWhereInput>;
  @Field(() => IntFilter, { nullable: true })
  id?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  slug?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  composerId?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  arranger?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  instrument?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  genre?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  difficulty?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  description?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  year?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  uploadedById?: InstanceType<typeof StringFilter>;
}

@InputType()
export class SheetMusicSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  numberOfDownloads?: true;
}

@ObjectType()
export class SheetMusicSumAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
}

@InputType()
export class SheetMusicSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberOfDownloads?: keyof typeof SortOrder;
}

@InputType()
export class SheetMusicUncheckedCreateNestedManyWithoutComposerInput {
  @Field(() => [SheetMusicCreateWithoutComposerInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutComposerInput)
  create?: Array<SheetMusicCreateWithoutComposerInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutComposerInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutComposerInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutComposerInput>;
  @Field(() => SheetMusicCreateManyComposerInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyComposerInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyComposerInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
}

@InputType()
export class SheetMusicUncheckedCreateNestedManyWithoutSheetFileInput {
  @Field(() => [SheetMusicCreateWithoutSheetFileInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutSheetFileInput)
  create?: Array<SheetMusicCreateWithoutSheetFileInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutSheetFileInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutSheetFileInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutSheetFileInput>;
  @Field(() => SheetMusicCreateManySheetFileInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManySheetFileInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManySheetFileInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
}

@InputType()
export class SheetMusicUncheckedCreateNestedManyWithoutThumbnailInput {
  @Field(() => [SheetMusicCreateWithoutThumbnailInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutThumbnailInput)
  create?: Array<SheetMusicCreateWithoutThumbnailInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutThumbnailInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutThumbnailInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutThumbnailInput>;
  @Field(() => SheetMusicCreateManyThumbnailInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyThumbnailInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyThumbnailInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
}

@InputType()
export class SheetMusicUncheckedCreateNestedManyWithoutUploadedByInput {
  @Field(() => [SheetMusicCreateWithoutUploadedByInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutUploadedByInput)
  create?: Array<SheetMusicCreateWithoutUploadedByInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutUploadedByInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutUploadedByInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutUploadedByInput>;
  @Field(() => SheetMusicCreateManyUploadedByInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyUploadedByInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyUploadedByInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
}

@InputType()
export class SheetMusicUncheckedCreateWithoutComposerInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  fileId!: string;
  @Field(() => String, { nullable: false })
  thumbnailId!: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  uploadedById!: string;
  @Field(() => FavoritesUncheckedCreateNestedManyWithoutSheetMusicInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedCreateNestedManyWithoutSheetMusicInput
  >;
}

@InputType()
export class SheetMusicUncheckedCreateWithoutFavoritesInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  fileId!: string;
  @Field(() => String, { nullable: false })
  thumbnailId!: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  uploadedById!: string;
}

@InputType()
export class SheetMusicUncheckedCreateWithoutSheetFileInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  thumbnailId!: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  uploadedById!: string;
  @Field(() => FavoritesUncheckedCreateNestedManyWithoutSheetMusicInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedCreateNestedManyWithoutSheetMusicInput
  >;
}

@InputType()
export class SheetMusicUncheckedCreateWithoutThumbnailInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  fileId!: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  uploadedById!: string;
  @Field(() => FavoritesUncheckedCreateNestedManyWithoutSheetMusicInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedCreateNestedManyWithoutSheetMusicInput
  >;
}

@InputType()
export class SheetMusicUncheckedCreateWithoutUploadedByInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  fileId!: string;
  @Field(() => String, { nullable: false })
  thumbnailId!: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FavoritesUncheckedCreateNestedManyWithoutSheetMusicInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedCreateNestedManyWithoutSheetMusicInput
  >;
}

@InputType()
export class SheetMusicUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug?: string;
  @Field(() => String, { nullable: false })
  composerId!: string;
  @Field(() => String, { nullable: true })
  arranger?: string;
  @Field(() => String, { nullable: false })
  instrument!: string;
  @Field(() => String, { nullable: true })
  genre?: string;
  @Field(() => String, { nullable: true })
  difficulty?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  year?: string;
  @Field(() => String, { nullable: false })
  fileId!: string;
  @Field(() => String, { nullable: false })
  thumbnailId!: string;
  @Field(() => Int, { nullable: true })
  numberOfDownloads?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false })
  uploadedById!: string;
  @Field(() => FavoritesUncheckedCreateNestedManyWithoutSheetMusicInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedCreateNestedManyWithoutSheetMusicInput
  >;
}

@InputType()
export class SheetMusicUncheckedUpdateManyWithoutComposerNestedInput {
  @Field(() => [SheetMusicCreateWithoutComposerInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutComposerInput)
  create?: Array<SheetMusicCreateWithoutComposerInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutComposerInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutComposerInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutComposerInput>;
  @Field(() => [SheetMusicUpsertWithWhereUniqueWithoutComposerInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpsertWithWhereUniqueWithoutComposerInput)
  upsert?: Array<SheetMusicUpsertWithWhereUniqueWithoutComposerInput>;
  @Field(() => SheetMusicCreateManyComposerInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyComposerInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyComposerInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  set?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicUpdateWithWhereUniqueWithoutComposerInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateWithWhereUniqueWithoutComposerInput)
  update?: Array<SheetMusicUpdateWithWhereUniqueWithoutComposerInput>;
  @Field(() => [SheetMusicUpdateManyWithWhereWithoutComposerInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateManyWithWhereWithoutComposerInput)
  updateMany?: Array<SheetMusicUpdateManyWithWhereWithoutComposerInput>;
  @Field(() => [SheetMusicScalarWhereInput], { nullable: true })
  @Type(() => SheetMusicScalarWhereInput)
  deleteMany?: Array<SheetMusicScalarWhereInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateManyWithoutComposerInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uploadedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateManyWithoutSheetFileNestedInput {
  @Field(() => [SheetMusicCreateWithoutSheetFileInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutSheetFileInput)
  create?: Array<SheetMusicCreateWithoutSheetFileInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutSheetFileInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutSheetFileInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutSheetFileInput>;
  @Field(() => [SheetMusicUpsertWithWhereUniqueWithoutSheetFileInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpsertWithWhereUniqueWithoutSheetFileInput)
  upsert?: Array<SheetMusicUpsertWithWhereUniqueWithoutSheetFileInput>;
  @Field(() => SheetMusicCreateManySheetFileInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManySheetFileInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManySheetFileInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  set?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicUpdateWithWhereUniqueWithoutSheetFileInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateWithWhereUniqueWithoutSheetFileInput)
  update?: Array<SheetMusicUpdateWithWhereUniqueWithoutSheetFileInput>;
  @Field(() => [SheetMusicUpdateManyWithWhereWithoutSheetFileInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateManyWithWhereWithoutSheetFileInput)
  updateMany?: Array<SheetMusicUpdateManyWithWhereWithoutSheetFileInput>;
  @Field(() => [SheetMusicScalarWhereInput], { nullable: true })
  @Type(() => SheetMusicScalarWhereInput)
  deleteMany?: Array<SheetMusicScalarWhereInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateManyWithoutSheetFileInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  composerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uploadedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateManyWithoutThumbnailNestedInput {
  @Field(() => [SheetMusicCreateWithoutThumbnailInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutThumbnailInput)
  create?: Array<SheetMusicCreateWithoutThumbnailInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutThumbnailInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutThumbnailInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutThumbnailInput>;
  @Field(() => [SheetMusicUpsertWithWhereUniqueWithoutThumbnailInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpsertWithWhereUniqueWithoutThumbnailInput)
  upsert?: Array<SheetMusicUpsertWithWhereUniqueWithoutThumbnailInput>;
  @Field(() => SheetMusicCreateManyThumbnailInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyThumbnailInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyThumbnailInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  set?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicUpdateWithWhereUniqueWithoutThumbnailInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateWithWhereUniqueWithoutThumbnailInput)
  update?: Array<SheetMusicUpdateWithWhereUniqueWithoutThumbnailInput>;
  @Field(() => [SheetMusicUpdateManyWithWhereWithoutThumbnailInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateManyWithWhereWithoutThumbnailInput)
  updateMany?: Array<SheetMusicUpdateManyWithWhereWithoutThumbnailInput>;
  @Field(() => [SheetMusicScalarWhereInput], { nullable: true })
  @Type(() => SheetMusicScalarWhereInput)
  deleteMany?: Array<SheetMusicScalarWhereInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateManyWithoutThumbnailInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  composerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uploadedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateManyWithoutUploadedByNestedInput {
  @Field(() => [SheetMusicCreateWithoutUploadedByInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutUploadedByInput)
  create?: Array<SheetMusicCreateWithoutUploadedByInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutUploadedByInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutUploadedByInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutUploadedByInput>;
  @Field(() => [SheetMusicUpsertWithWhereUniqueWithoutUploadedByInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpsertWithWhereUniqueWithoutUploadedByInput)
  upsert?: Array<SheetMusicUpsertWithWhereUniqueWithoutUploadedByInput>;
  @Field(() => SheetMusicCreateManyUploadedByInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyUploadedByInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyUploadedByInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  set?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicUpdateWithWhereUniqueWithoutUploadedByInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateWithWhereUniqueWithoutUploadedByInput)
  update?: Array<SheetMusicUpdateWithWhereUniqueWithoutUploadedByInput>;
  @Field(() => [SheetMusicUpdateManyWithWhereWithoutUploadedByInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateManyWithWhereWithoutUploadedByInput)
  updateMany?: Array<SheetMusicUpdateManyWithWhereWithoutUploadedByInput>;
  @Field(() => [SheetMusicScalarWhereInput], { nullable: true })
  @Type(() => SheetMusicScalarWhereInput)
  deleteMany?: Array<SheetMusicScalarWhereInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateManyWithoutUploadedByInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  composerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateManyInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  composerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uploadedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateWithoutComposerInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uploadedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FavoritesUncheckedUpdateManyWithoutSheetMusicNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedUpdateManyWithoutSheetMusicNestedInput
  >;
}

@InputType()
export class SheetMusicUncheckedUpdateWithoutFavoritesInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  composerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uploadedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateWithoutSheetFileInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  composerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uploadedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FavoritesUncheckedUpdateManyWithoutSheetMusicNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedUpdateManyWithoutSheetMusicNestedInput
  >;
}

@InputType()
export class SheetMusicUncheckedUpdateWithoutThumbnailInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  composerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uploadedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FavoritesUncheckedUpdateManyWithoutSheetMusicNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedUpdateManyWithoutSheetMusicNestedInput
  >;
}

@InputType()
export class SheetMusicUncheckedUpdateWithoutUploadedByInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  composerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FavoritesUncheckedUpdateManyWithoutSheetMusicNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedUpdateManyWithoutSheetMusicNestedInput
  >;
}

@InputType()
export class SheetMusicUncheckedUpdateInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  composerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uploadedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => FavoritesUncheckedUpdateManyWithoutSheetMusicNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedUpdateManyWithoutSheetMusicNestedInput
  >;
}

@InputType()
export class SheetMusicUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUpdateManyWithWhereWithoutComposerInput {
  @Field(() => SheetMusicScalarWhereInput, { nullable: false })
  @Type(() => SheetMusicScalarWhereInput)
  where!: InstanceType<typeof SheetMusicScalarWhereInput>;
  @Field(() => SheetMusicUpdateManyMutationInput, { nullable: false })
  @Type(() => SheetMusicUpdateManyMutationInput)
  data!: InstanceType<typeof SheetMusicUpdateManyMutationInput>;
}

@InputType()
export class SheetMusicUpdateManyWithWhereWithoutSheetFileInput {
  @Field(() => SheetMusicScalarWhereInput, { nullable: false })
  @Type(() => SheetMusicScalarWhereInput)
  where!: InstanceType<typeof SheetMusicScalarWhereInput>;
  @Field(() => SheetMusicUpdateManyMutationInput, { nullable: false })
  @Type(() => SheetMusicUpdateManyMutationInput)
  data!: InstanceType<typeof SheetMusicUpdateManyMutationInput>;
}

@InputType()
export class SheetMusicUpdateManyWithWhereWithoutThumbnailInput {
  @Field(() => SheetMusicScalarWhereInput, { nullable: false })
  @Type(() => SheetMusicScalarWhereInput)
  where!: InstanceType<typeof SheetMusicScalarWhereInput>;
  @Field(() => SheetMusicUpdateManyMutationInput, { nullable: false })
  @Type(() => SheetMusicUpdateManyMutationInput)
  data!: InstanceType<typeof SheetMusicUpdateManyMutationInput>;
}

@InputType()
export class SheetMusicUpdateManyWithWhereWithoutUploadedByInput {
  @Field(() => SheetMusicScalarWhereInput, { nullable: false })
  @Type(() => SheetMusicScalarWhereInput)
  where!: InstanceType<typeof SheetMusicScalarWhereInput>;
  @Field(() => SheetMusicUpdateManyMutationInput, { nullable: false })
  @Type(() => SheetMusicUpdateManyMutationInput)
  data!: InstanceType<typeof SheetMusicUpdateManyMutationInput>;
}

@InputType()
export class SheetMusicUpdateManyWithoutComposerNestedInput {
  @Field(() => [SheetMusicCreateWithoutComposerInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutComposerInput)
  create?: Array<SheetMusicCreateWithoutComposerInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutComposerInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutComposerInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutComposerInput>;
  @Field(() => [SheetMusicUpsertWithWhereUniqueWithoutComposerInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpsertWithWhereUniqueWithoutComposerInput)
  upsert?: Array<SheetMusicUpsertWithWhereUniqueWithoutComposerInput>;
  @Field(() => SheetMusicCreateManyComposerInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyComposerInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyComposerInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  set?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicUpdateWithWhereUniqueWithoutComposerInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateWithWhereUniqueWithoutComposerInput)
  update?: Array<SheetMusicUpdateWithWhereUniqueWithoutComposerInput>;
  @Field(() => [SheetMusicUpdateManyWithWhereWithoutComposerInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateManyWithWhereWithoutComposerInput)
  updateMany?: Array<SheetMusicUpdateManyWithWhereWithoutComposerInput>;
  @Field(() => [SheetMusicScalarWhereInput], { nullable: true })
  @Type(() => SheetMusicScalarWhereInput)
  deleteMany?: Array<SheetMusicScalarWhereInput>;
}

@InputType()
export class SheetMusicUpdateManyWithoutSheetFileNestedInput {
  @Field(() => [SheetMusicCreateWithoutSheetFileInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutSheetFileInput)
  create?: Array<SheetMusicCreateWithoutSheetFileInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutSheetFileInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutSheetFileInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutSheetFileInput>;
  @Field(() => [SheetMusicUpsertWithWhereUniqueWithoutSheetFileInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpsertWithWhereUniqueWithoutSheetFileInput)
  upsert?: Array<SheetMusicUpsertWithWhereUniqueWithoutSheetFileInput>;
  @Field(() => SheetMusicCreateManySheetFileInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManySheetFileInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManySheetFileInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  set?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicUpdateWithWhereUniqueWithoutSheetFileInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateWithWhereUniqueWithoutSheetFileInput)
  update?: Array<SheetMusicUpdateWithWhereUniqueWithoutSheetFileInput>;
  @Field(() => [SheetMusicUpdateManyWithWhereWithoutSheetFileInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateManyWithWhereWithoutSheetFileInput)
  updateMany?: Array<SheetMusicUpdateManyWithWhereWithoutSheetFileInput>;
  @Field(() => [SheetMusicScalarWhereInput], { nullable: true })
  @Type(() => SheetMusicScalarWhereInput)
  deleteMany?: Array<SheetMusicScalarWhereInput>;
}

@InputType()
export class SheetMusicUpdateManyWithoutThumbnailNestedInput {
  @Field(() => [SheetMusicCreateWithoutThumbnailInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutThumbnailInput)
  create?: Array<SheetMusicCreateWithoutThumbnailInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutThumbnailInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutThumbnailInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutThumbnailInput>;
  @Field(() => [SheetMusicUpsertWithWhereUniqueWithoutThumbnailInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpsertWithWhereUniqueWithoutThumbnailInput)
  upsert?: Array<SheetMusicUpsertWithWhereUniqueWithoutThumbnailInput>;
  @Field(() => SheetMusicCreateManyThumbnailInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyThumbnailInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyThumbnailInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  set?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicUpdateWithWhereUniqueWithoutThumbnailInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateWithWhereUniqueWithoutThumbnailInput)
  update?: Array<SheetMusicUpdateWithWhereUniqueWithoutThumbnailInput>;
  @Field(() => [SheetMusicUpdateManyWithWhereWithoutThumbnailInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateManyWithWhereWithoutThumbnailInput)
  updateMany?: Array<SheetMusicUpdateManyWithWhereWithoutThumbnailInput>;
  @Field(() => [SheetMusicScalarWhereInput], { nullable: true })
  @Type(() => SheetMusicScalarWhereInput)
  deleteMany?: Array<SheetMusicScalarWhereInput>;
}

@InputType()
export class SheetMusicUpdateManyWithoutUploadedByNestedInput {
  @Field(() => [SheetMusicCreateWithoutUploadedByInput], { nullable: true })
  @Type(() => SheetMusicCreateWithoutUploadedByInput)
  create?: Array<SheetMusicCreateWithoutUploadedByInput>;
  @Field(() => [SheetMusicCreateOrConnectWithoutUploadedByInput], {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutUploadedByInput)
  connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutUploadedByInput>;
  @Field(() => [SheetMusicUpsertWithWhereUniqueWithoutUploadedByInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpsertWithWhereUniqueWithoutUploadedByInput)
  upsert?: Array<SheetMusicUpsertWithWhereUniqueWithoutUploadedByInput>;
  @Field(() => SheetMusicCreateManyUploadedByInputEnvelope, { nullable: true })
  @Type(() => SheetMusicCreateManyUploadedByInputEnvelope)
  createMany?: InstanceType<typeof SheetMusicCreateManyUploadedByInputEnvelope>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  set?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicWhereUniqueInput], { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
  @Field(() => [SheetMusicUpdateWithWhereUniqueWithoutUploadedByInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateWithWhereUniqueWithoutUploadedByInput)
  update?: Array<SheetMusicUpdateWithWhereUniqueWithoutUploadedByInput>;
  @Field(() => [SheetMusicUpdateManyWithWhereWithoutUploadedByInput], {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateManyWithWhereWithoutUploadedByInput)
  updateMany?: Array<SheetMusicUpdateManyWithWhereWithoutUploadedByInput>;
  @Field(() => [SheetMusicScalarWhereInput], { nullable: true })
  @Type(() => SheetMusicScalarWhereInput)
  deleteMany?: Array<SheetMusicScalarWhereInput>;
}

@InputType()
export class SheetMusicUpdateOneRequiredWithoutFavoritesNestedInput {
  @Field(() => SheetMusicCreateWithoutFavoritesInput, { nullable: true })
  @Type(() => SheetMusicCreateWithoutFavoritesInput)
  create?: InstanceType<typeof SheetMusicCreateWithoutFavoritesInput>;
  @Field(() => SheetMusicCreateOrConnectWithoutFavoritesInput, {
    nullable: true,
  })
  @Type(() => SheetMusicCreateOrConnectWithoutFavoritesInput)
  connectOrCreate?: InstanceType<
    typeof SheetMusicCreateOrConnectWithoutFavoritesInput
  >;
  @Field(() => SheetMusicUpsertWithoutFavoritesInput, { nullable: true })
  @Type(() => SheetMusicUpsertWithoutFavoritesInput)
  upsert?: InstanceType<typeof SheetMusicUpsertWithoutFavoritesInput>;
  @Field(() => SheetMusicWhereUniqueInput, { nullable: true })
  @Type(() => SheetMusicWhereUniqueInput)
  connect?: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicUpdateToOneWithWhereWithoutFavoritesInput, {
    nullable: true,
  })
  @Type(() => SheetMusicUpdateToOneWithWhereWithoutFavoritesInput)
  update?: InstanceType<
    typeof SheetMusicUpdateToOneWithWhereWithoutFavoritesInput
  >;
}

@InputType()
export class SheetMusicUpdateToOneWithWhereWithoutFavoritesInput {
  @Field(() => SheetMusicWhereInput, { nullable: true })
  @Type(() => SheetMusicWhereInput)
  where?: InstanceType<typeof SheetMusicWhereInput>;
  @Field(() => SheetMusicUpdateWithoutFavoritesInput, { nullable: false })
  @Type(() => SheetMusicUpdateWithoutFavoritesInput)
  data!: InstanceType<typeof SheetMusicUpdateWithoutFavoritesInput>;
}

@InputType()
export class SheetMusicUpdateWithWhereUniqueWithoutComposerInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicUpdateWithoutComposerInput, { nullable: false })
  @Type(() => SheetMusicUpdateWithoutComposerInput)
  data!: InstanceType<typeof SheetMusicUpdateWithoutComposerInput>;
}

@InputType()
export class SheetMusicUpdateWithWhereUniqueWithoutSheetFileInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicUpdateWithoutSheetFileInput, { nullable: false })
  @Type(() => SheetMusicUpdateWithoutSheetFileInput)
  data!: InstanceType<typeof SheetMusicUpdateWithoutSheetFileInput>;
}

@InputType()
export class SheetMusicUpdateWithWhereUniqueWithoutThumbnailInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicUpdateWithoutThumbnailInput, { nullable: false })
  @Type(() => SheetMusicUpdateWithoutThumbnailInput)
  data!: InstanceType<typeof SheetMusicUpdateWithoutThumbnailInput>;
}

@InputType()
export class SheetMusicUpdateWithWhereUniqueWithoutUploadedByInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicUpdateWithoutUploadedByInput, { nullable: false })
  @Type(() => SheetMusicUpdateWithoutUploadedByInput)
  data!: InstanceType<typeof SheetMusicUpdateWithoutUploadedByInput>;
}

@InputType()
export class SheetMusicUpdateWithoutComposerInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FavoritesUpdateManyWithoutSheetMusicNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUpdateManyWithoutSheetMusicNestedInput
  >;
  @Field(() => FileStorageUpdateOneRequiredWithoutThumbnailsNestedInput, {
    nullable: true,
  })
  thumbnail?: InstanceType<
    typeof FileStorageUpdateOneRequiredWithoutThumbnailsNestedInput
  >;
  @Field(() => FileStorageUpdateOneRequiredWithoutSheetMusicsNestedInput, {
    nullable: true,
  })
  sheetFile?: InstanceType<
    typeof FileStorageUpdateOneRequiredWithoutSheetMusicsNestedInput
  >;
  @Field(() => UserUpdateOneRequiredWithoutFileUploadedNestedInput, {
    nullable: true,
  })
  UploadedBy?: InstanceType<
    typeof UserUpdateOneRequiredWithoutFileUploadedNestedInput
  >;
}

@InputType()
export class SheetMusicUpdateWithoutFavoritesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FileStorageUpdateOneRequiredWithoutThumbnailsNestedInput, {
    nullable: true,
  })
  thumbnail?: InstanceType<
    typeof FileStorageUpdateOneRequiredWithoutThumbnailsNestedInput
  >;
  @Field(() => FileStorageUpdateOneRequiredWithoutSheetMusicsNestedInput, {
    nullable: true,
  })
  sheetFile?: InstanceType<
    typeof FileStorageUpdateOneRequiredWithoutSheetMusicsNestedInput
  >;
  @Field(() => ComposerUpdateOneRequiredWithoutMusicSheetsNestedInput, {
    nullable: true,
  })
  Composer?: InstanceType<
    typeof ComposerUpdateOneRequiredWithoutMusicSheetsNestedInput
  >;
  @Field(() => UserUpdateOneRequiredWithoutFileUploadedNestedInput, {
    nullable: true,
  })
  UploadedBy?: InstanceType<
    typeof UserUpdateOneRequiredWithoutFileUploadedNestedInput
  >;
}

@InputType()
export class SheetMusicUpdateWithoutSheetFileInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FavoritesUpdateManyWithoutSheetMusicNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUpdateManyWithoutSheetMusicNestedInput
  >;
  @Field(() => FileStorageUpdateOneRequiredWithoutThumbnailsNestedInput, {
    nullable: true,
  })
  thumbnail?: InstanceType<
    typeof FileStorageUpdateOneRequiredWithoutThumbnailsNestedInput
  >;
  @Field(() => ComposerUpdateOneRequiredWithoutMusicSheetsNestedInput, {
    nullable: true,
  })
  Composer?: InstanceType<
    typeof ComposerUpdateOneRequiredWithoutMusicSheetsNestedInput
  >;
  @Field(() => UserUpdateOneRequiredWithoutFileUploadedNestedInput, {
    nullable: true,
  })
  UploadedBy?: InstanceType<
    typeof UserUpdateOneRequiredWithoutFileUploadedNestedInput
  >;
}

@InputType()
export class SheetMusicUpdateWithoutThumbnailInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FavoritesUpdateManyWithoutSheetMusicNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUpdateManyWithoutSheetMusicNestedInput
  >;
  @Field(() => FileStorageUpdateOneRequiredWithoutSheetMusicsNestedInput, {
    nullable: true,
  })
  sheetFile?: InstanceType<
    typeof FileStorageUpdateOneRequiredWithoutSheetMusicsNestedInput
  >;
  @Field(() => ComposerUpdateOneRequiredWithoutMusicSheetsNestedInput, {
    nullable: true,
  })
  Composer?: InstanceType<
    typeof ComposerUpdateOneRequiredWithoutMusicSheetsNestedInput
  >;
  @Field(() => UserUpdateOneRequiredWithoutFileUploadedNestedInput, {
    nullable: true,
  })
  UploadedBy?: InstanceType<
    typeof UserUpdateOneRequiredWithoutFileUploadedNestedInput
  >;
}

@InputType()
export class SheetMusicUpdateWithoutUploadedByInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FavoritesUpdateManyWithoutSheetMusicNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUpdateManyWithoutSheetMusicNestedInput
  >;
  @Field(() => FileStorageUpdateOneRequiredWithoutThumbnailsNestedInput, {
    nullable: true,
  })
  thumbnail?: InstanceType<
    typeof FileStorageUpdateOneRequiredWithoutThumbnailsNestedInput
  >;
  @Field(() => FileStorageUpdateOneRequiredWithoutSheetMusicsNestedInput, {
    nullable: true,
  })
  sheetFile?: InstanceType<
    typeof FileStorageUpdateOneRequiredWithoutSheetMusicsNestedInput
  >;
  @Field(() => ComposerUpdateOneRequiredWithoutMusicSheetsNestedInput, {
    nullable: true,
  })
  Composer?: InstanceType<
    typeof ComposerUpdateOneRequiredWithoutMusicSheetsNestedInput
  >;
}

@InputType()
export class SheetMusicUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  genre?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  difficulty?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FavoritesUpdateManyWithoutSheetMusicNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUpdateManyWithoutSheetMusicNestedInput
  >;
  @Field(() => FileStorageUpdateOneRequiredWithoutThumbnailsNestedInput, {
    nullable: true,
  })
  thumbnail?: InstanceType<
    typeof FileStorageUpdateOneRequiredWithoutThumbnailsNestedInput
  >;
  @Field(() => FileStorageUpdateOneRequiredWithoutSheetMusicsNestedInput, {
    nullable: true,
  })
  sheetFile?: InstanceType<
    typeof FileStorageUpdateOneRequiredWithoutSheetMusicsNestedInput
  >;
  @Field(() => ComposerUpdateOneRequiredWithoutMusicSheetsNestedInput, {
    nullable: true,
  })
  Composer?: InstanceType<
    typeof ComposerUpdateOneRequiredWithoutMusicSheetsNestedInput
  >;
  @Field(() => UserUpdateOneRequiredWithoutFileUploadedNestedInput, {
    nullable: true,
  })
  UploadedBy?: InstanceType<
    typeof UserUpdateOneRequiredWithoutFileUploadedNestedInput
  >;
}

@InputType()
export class SheetMusicUpsertWithWhereUniqueWithoutComposerInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicUpdateWithoutComposerInput, { nullable: false })
  @Type(() => SheetMusicUpdateWithoutComposerInput)
  update!: InstanceType<typeof SheetMusicUpdateWithoutComposerInput>;
  @Field(() => SheetMusicCreateWithoutComposerInput, { nullable: false })
  @Type(() => SheetMusicCreateWithoutComposerInput)
  create!: InstanceType<typeof SheetMusicCreateWithoutComposerInput>;
}

@InputType()
export class SheetMusicUpsertWithWhereUniqueWithoutSheetFileInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicUpdateWithoutSheetFileInput, { nullable: false })
  @Type(() => SheetMusicUpdateWithoutSheetFileInput)
  update!: InstanceType<typeof SheetMusicUpdateWithoutSheetFileInput>;
  @Field(() => SheetMusicCreateWithoutSheetFileInput, { nullable: false })
  @Type(() => SheetMusicCreateWithoutSheetFileInput)
  create!: InstanceType<typeof SheetMusicCreateWithoutSheetFileInput>;
}

@InputType()
export class SheetMusicUpsertWithWhereUniqueWithoutThumbnailInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicUpdateWithoutThumbnailInput, { nullable: false })
  @Type(() => SheetMusicUpdateWithoutThumbnailInput)
  update!: InstanceType<typeof SheetMusicUpdateWithoutThumbnailInput>;
  @Field(() => SheetMusicCreateWithoutThumbnailInput, { nullable: false })
  @Type(() => SheetMusicCreateWithoutThumbnailInput)
  create!: InstanceType<typeof SheetMusicCreateWithoutThumbnailInput>;
}

@InputType()
export class SheetMusicUpsertWithWhereUniqueWithoutUploadedByInput {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicUpdateWithoutUploadedByInput, { nullable: false })
  @Type(() => SheetMusicUpdateWithoutUploadedByInput)
  update!: InstanceType<typeof SheetMusicUpdateWithoutUploadedByInput>;
  @Field(() => SheetMusicCreateWithoutUploadedByInput, { nullable: false })
  @Type(() => SheetMusicCreateWithoutUploadedByInput)
  create!: InstanceType<typeof SheetMusicCreateWithoutUploadedByInput>;
}

@InputType()
export class SheetMusicUpsertWithoutFavoritesInput {
  @Field(() => SheetMusicUpdateWithoutFavoritesInput, { nullable: false })
  @Type(() => SheetMusicUpdateWithoutFavoritesInput)
  update!: InstanceType<typeof SheetMusicUpdateWithoutFavoritesInput>;
  @Field(() => SheetMusicCreateWithoutFavoritesInput, { nullable: false })
  @Type(() => SheetMusicCreateWithoutFavoritesInput)
  create!: InstanceType<typeof SheetMusicCreateWithoutFavoritesInput>;
  @Field(() => SheetMusicWhereInput, { nullable: true })
  @Type(() => SheetMusicWhereInput)
  where?: InstanceType<typeof SheetMusicWhereInput>;
}

@InputType()
export class SheetMusicWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => [SheetMusicWhereInput], { nullable: true })
  AND?: Array<SheetMusicWhereInput>;
  @Field(() => [SheetMusicWhereInput], { nullable: true })
  OR?: Array<SheetMusicWhereInput>;
  @Field(() => [SheetMusicWhereInput], { nullable: true })
  NOT?: Array<SheetMusicWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  slug?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  composerId?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  arranger?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  instrument?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  genre?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  difficulty?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  description?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  year?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  uploadedById?: InstanceType<typeof StringFilter>;
  @Field(() => FavoritesListRelationFilter, { nullable: true })
  favorites?: InstanceType<typeof FavoritesListRelationFilter>;
  @Field(() => FileStorageRelationFilter, { nullable: true })
  thumbnail?: InstanceType<typeof FileStorageRelationFilter>;
  @Field(() => FileStorageRelationFilter, { nullable: true })
  sheetFile?: InstanceType<typeof FileStorageRelationFilter>;
  @Field(() => ComposerRelationFilter, { nullable: true })
  Composer?: InstanceType<typeof ComposerRelationFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  UploadedBy?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class SheetMusicWhereInput {
  @Field(() => [SheetMusicWhereInput], { nullable: true })
  AND?: Array<SheetMusicWhereInput>;
  @Field(() => [SheetMusicWhereInput], { nullable: true })
  OR?: Array<SheetMusicWhereInput>;
  @Field(() => [SheetMusicWhereInput], { nullable: true })
  NOT?: Array<SheetMusicWhereInput>;
  @Field(() => IntFilter, { nullable: true })
  id?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  slug?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  composerId?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  arranger?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  instrument?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  genre?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  difficulty?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  description?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  year?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  fileId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  thumbnailId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  numberOfDownloads?: InstanceType<typeof IntFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  uploadedById?: InstanceType<typeof StringFilter>;
  @Field(() => FavoritesListRelationFilter, { nullable: true })
  favorites?: InstanceType<typeof FavoritesListRelationFilter>;
  @Field(() => FileStorageRelationFilter, { nullable: true })
  thumbnail?: InstanceType<typeof FileStorageRelationFilter>;
  @Field(() => FileStorageRelationFilter, { nullable: true })
  sheetFile?: InstanceType<typeof FileStorageRelationFilter>;
  @Field(() => ComposerRelationFilter, { nullable: true })
  Composer?: InstanceType<typeof ComposerRelationFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  UploadedBy?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class SheetMusic {
  @Field(() => ID, { nullable: false })
  id!: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  slug!: string | null;
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
  @Field(() => String, { nullable: false })
  fileId!: string;
  @Field(() => String, { nullable: false })
  thumbnailId!: string;
  @Field(() => Int, { nullable: false, defaultValue: 0 })
  numberOfDownloads!: number;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => String, { nullable: false })
  uploadedById!: string;
  @Field(() => [Favorites], { nullable: true })
  favorites?: Array<Favorites>;
  @Field(() => FileStorage, { nullable: false })
  thumbnail?: InstanceType<typeof FileStorage>;
  @Field(() => FileStorage, { nullable: false })
  sheetFile?: InstanceType<typeof FileStorage>;
  @Field(() => Composer, { nullable: false })
  Composer?: InstanceType<typeof Composer>;
  @Field(() => User, { nullable: false })
  UploadedBy?: InstanceType<typeof User>;
  @Field(() => SheetMusicCount, { nullable: false })
  _count?: InstanceType<typeof SheetMusicCount>;
}

@ArgsType()
export class UpdateManySheetMusicArgs {
  @Field(() => SheetMusicUpdateManyMutationInput, { nullable: false })
  @Type(() => SheetMusicUpdateManyMutationInput)
  data!: InstanceType<typeof SheetMusicUpdateManyMutationInput>;
  @Field(() => SheetMusicWhereInput, { nullable: true })
  @Type(() => SheetMusicWhereInput)
  where?: InstanceType<typeof SheetMusicWhereInput>;
}

@ArgsType()
export class UpdateOneSheetMusicArgs {
  @Field(() => SheetMusicUpdateInput, { nullable: false })
  @Type(() => SheetMusicUpdateInput)
  data!: InstanceType<typeof SheetMusicUpdateInput>;
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneSheetMusicArgs {
  @Field(() => SheetMusicWhereUniqueInput, { nullable: false })
  @Type(() => SheetMusicWhereUniqueInput)
  where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
  @Field(() => SheetMusicCreateInput, { nullable: false })
  @Type(() => SheetMusicCreateInput)
  create!: InstanceType<typeof SheetMusicCreateInput>;
  @Field(() => SheetMusicUpdateInput, { nullable: false })
  @Type(() => SheetMusicUpdateInput)
  update!: InstanceType<typeof SheetMusicUpdateInput>;
}

@ObjectType()
export class AggregateUser {
  @Field(() => UserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregate>;
  @Field(() => UserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregate>;
  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
  @Field(() => [UserCreateManyInput], { nullable: false })
  @Type(() => UserCreateManyInput)
  data!: Array<UserCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
}

@ArgsType()
export class FindUniqueUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
}

@ArgsType()
export class UpdateManyUserArgs {
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  data!: InstanceType<typeof UserUpdateManyMutationInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  data!: InstanceType<typeof UserUpdateInput>;
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
}

@ArgsType()
export class UpsertOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  create!: InstanceType<typeof UserCreateInput>;
  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregateInput>;
  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregateInput>;
  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
  @Field(() => Boolean, { nullable: true })
  biography?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  phoneNumber!: number;
  @Field(() => Int, { nullable: false })
  password!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @Field(() => Int, { nullable: false })
  role!: number;
  @Field(() => Int, { nullable: false })
  biography!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  biography?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
  @Field(() => Int, { nullable: false })
  FileUploaded?: number;
  @Field(() => Int, { nullable: false })
  favorites?: number;
}

@InputType()
export class UserCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Roles, { nullable: true })
  role?: keyof typeof Roles;
  @Field(() => String, { nullable: false })
  biography!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutFavoritesInput {
  @Field(() => UserCreateWithoutFavoritesInput, { nullable: true })
  @Type(() => UserCreateWithoutFavoritesInput)
  create?: InstanceType<typeof UserCreateWithoutFavoritesInput>;
  @Field(() => UserCreateOrConnectWithoutFavoritesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFavoritesInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutFavoritesInput
  >;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
}

@InputType()
export class UserCreateNestedOneWithoutFileUploadedInput {
  @Field(() => UserCreateWithoutFileUploadedInput, { nullable: true })
  @Type(() => UserCreateWithoutFileUploadedInput)
  create?: InstanceType<typeof UserCreateWithoutFileUploadedInput>;
  @Field(() => UserCreateOrConnectWithoutFileUploadedInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFileUploadedInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutFileUploadedInput
  >;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
}

@InputType()
export class UserCreateOrConnectWithoutFavoritesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
  @Field(() => UserCreateWithoutFavoritesInput, { nullable: false })
  @Type(() => UserCreateWithoutFavoritesInput)
  create!: InstanceType<typeof UserCreateWithoutFavoritesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutFileUploadedInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
  @Field(() => UserCreateWithoutFileUploadedInput, { nullable: false })
  @Type(() => UserCreateWithoutFileUploadedInput)
  create!: InstanceType<typeof UserCreateWithoutFileUploadedInput>;
}

@InputType()
export class UserCreateWithoutFavoritesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Roles, { nullable: true })
  role?: keyof typeof Roles;
  @Field(() => String, { nullable: false })
  biography!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicCreateNestedManyWithoutUploadedByInput, {
    nullable: true,
  })
  FileUploaded?: InstanceType<
    typeof SheetMusicCreateNestedManyWithoutUploadedByInput
  >;
}

@InputType()
export class UserCreateWithoutFileUploadedInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Roles, { nullable: true })
  role?: keyof typeof Roles;
  @Field(() => String, { nullable: false })
  biography!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FavoritesCreateNestedManyWithoutUserInput, { nullable: true })
  favorites?: InstanceType<typeof FavoritesCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Roles, { nullable: true })
  role?: keyof typeof Roles;
  @Field(() => String, { nullable: false })
  biography!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicCreateNestedManyWithoutUploadedByInput, {
    nullable: true,
  })
  FileUploaded?: InstanceType<
    typeof SheetMusicCreateNestedManyWithoutUploadedByInput
  >;
  @Field(() => FavoritesCreateNestedManyWithoutUserInput, { nullable: true })
  favorites?: InstanceType<typeof FavoritesCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithAggregationInput>;
  @Field(() => [UserScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserScalarFieldEnum>;
  @Field(() => UserScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregateInput>;
  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregateInput>;
  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Roles, { nullable: false })
  role!: keyof typeof Roles;
  @Field(() => String, { nullable: false })
  biography!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => UserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregate>;
  @Field(() => UserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregate>;
  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
  @Field(() => Boolean, { nullable: true })
  biography?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @Field(() => String, { nullable: true })
  password?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Roles, { nullable: true })
  role?: keyof typeof Roles;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  biography?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
  @Field(() => Boolean, { nullable: true })
  biography?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @Field(() => String, { nullable: true })
  password?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Roles, { nullable: true })
  role?: keyof typeof Roles;
  @Field(() => String, { nullable: true })
  biography?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  biography?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  name?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  biography?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => UserCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
  @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
  @Field(() => UserMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  name?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  biography?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SheetMusicOrderByRelationAggregateInput, { nullable: true })
  FileUploaded?: InstanceType<typeof SheetMusicOrderByRelationAggregateInput>;
  @Field(() => FavoritesOrderByRelationAggregateInput, { nullable: true })
  favorites?: InstanceType<typeof FavoritesOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  is?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => EnumRolesWithAggregatesFilter, { nullable: true })
  role?: InstanceType<typeof EnumRolesWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  biography?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutFavoritesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Roles, { nullable: true })
  role?: keyof typeof Roles;
  @Field(() => String, { nullable: false })
  biography!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicUncheckedCreateNestedManyWithoutUploadedByInput, {
    nullable: true,
  })
  FileUploaded?: InstanceType<
    typeof SheetMusicUncheckedCreateNestedManyWithoutUploadedByInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutFileUploadedInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Roles, { nullable: true })
  role?: keyof typeof Roles;
  @Field(() => String, { nullable: false })
  biography!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => FavoritesUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Roles, { nullable: true })
  role?: keyof typeof Roles;
  @Field(() => String, { nullable: false })
  biography!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SheetMusicUncheckedCreateNestedManyWithoutUploadedByInput, {
    nullable: true,
  })
  FileUploaded?: InstanceType<
    typeof SheetMusicUncheckedCreateNestedManyWithoutUploadedByInput
  >;
  @Field(() => FavoritesUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => EnumRolesFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutFavoritesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => EnumRolesFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUncheckedUpdateManyWithoutUploadedByNestedInput, {
    nullable: true,
  })
  FileUploaded?: InstanceType<
    typeof SheetMusicUncheckedUpdateManyWithoutUploadedByNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutFileUploadedInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => EnumRolesFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FavoritesUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => EnumRolesFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUncheckedUpdateManyWithoutUploadedByNestedInput, {
    nullable: true,
  })
  FileUploaded?: InstanceType<
    typeof SheetMusicUncheckedUpdateManyWithoutUploadedByNestedInput
  >;
  @Field(() => FavoritesUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  favorites?: InstanceType<
    typeof FavoritesUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => EnumRolesFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutFavoritesNestedInput {
  @Field(() => UserCreateWithoutFavoritesInput, { nullable: true })
  @Type(() => UserCreateWithoutFavoritesInput)
  create?: InstanceType<typeof UserCreateWithoutFavoritesInput>;
  @Field(() => UserCreateOrConnectWithoutFavoritesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFavoritesInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutFavoritesInput
  >;
  @Field(() => UserUpsertWithoutFavoritesInput, { nullable: true })
  @Type(() => UserUpsertWithoutFavoritesInput)
  upsert?: InstanceType<typeof UserUpsertWithoutFavoritesInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
  @Field(() => UserUpdateToOneWithWhereWithoutFavoritesInput, {
    nullable: true,
  })
  @Type(() => UserUpdateToOneWithWhereWithoutFavoritesInput)
  update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutFavoritesInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutFileUploadedNestedInput {
  @Field(() => UserCreateWithoutFileUploadedInput, { nullable: true })
  @Type(() => UserCreateWithoutFileUploadedInput)
  create?: InstanceType<typeof UserCreateWithoutFileUploadedInput>;
  @Field(() => UserCreateOrConnectWithoutFileUploadedInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFileUploadedInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutFileUploadedInput
  >;
  @Field(() => UserUpsertWithoutFileUploadedInput, { nullable: true })
  @Type(() => UserUpsertWithoutFileUploadedInput)
  upsert?: InstanceType<typeof UserUpsertWithoutFileUploadedInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
  @Field(() => UserUpdateToOneWithWhereWithoutFileUploadedInput, {
    nullable: true,
  })
  @Type(() => UserUpdateToOneWithWhereWithoutFileUploadedInput)
  update?: InstanceType<
    typeof UserUpdateToOneWithWhereWithoutFileUploadedInput
  >;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutFavoritesInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutFavoritesInput, { nullable: false })
  @Type(() => UserUpdateWithoutFavoritesInput)
  data!: InstanceType<typeof UserUpdateWithoutFavoritesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutFileUploadedInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutFileUploadedInput, { nullable: false })
  @Type(() => UserUpdateWithoutFileUploadedInput)
  data!: InstanceType<typeof UserUpdateWithoutFileUploadedInput>;
}

@InputType()
export class UserUpdateWithoutFavoritesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => EnumRolesFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUpdateManyWithoutUploadedByNestedInput, {
    nullable: true,
  })
  FileUploaded?: InstanceType<
    typeof SheetMusicUpdateManyWithoutUploadedByNestedInput
  >;
}

@InputType()
export class UserUpdateWithoutFileUploadedInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => EnumRolesFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => FavoritesUpdateManyWithoutUserNestedInput, { nullable: true })
  favorites?: InstanceType<typeof FavoritesUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => EnumRolesFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SheetMusicUpdateManyWithoutUploadedByNestedInput, {
    nullable: true,
  })
  FileUploaded?: InstanceType<
    typeof SheetMusicUpdateManyWithoutUploadedByNestedInput
  >;
  @Field(() => FavoritesUpdateManyWithoutUserNestedInput, { nullable: true })
  favorites?: InstanceType<typeof FavoritesUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithoutFavoritesInput {
  @Field(() => UserUpdateWithoutFavoritesInput, { nullable: false })
  @Type(() => UserUpdateWithoutFavoritesInput)
  update!: InstanceType<typeof UserUpdateWithoutFavoritesInput>;
  @Field(() => UserCreateWithoutFavoritesInput, { nullable: false })
  @Type(() => UserCreateWithoutFavoritesInput)
  create!: InstanceType<typeof UserCreateWithoutFavoritesInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutFileUploadedInput {
  @Field(() => UserUpdateWithoutFileUploadedInput, { nullable: false })
  @Type(() => UserUpdateWithoutFileUploadedInput)
  update!: InstanceType<typeof UserUpdateWithoutFileUploadedInput>;
  @Field(() => UserCreateWithoutFileUploadedInput, { nullable: false })
  @Type(() => UserCreateWithoutFileUploadedInput)
  create!: InstanceType<typeof UserCreateWithoutFileUploadedInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  name?: InstanceType<typeof StringNullableFilter>;
  @Field(() => EnumRolesFilter, { nullable: true })
  role?: InstanceType<typeof EnumRolesFilter>;
  @Field(() => StringFilter, { nullable: true })
  biography?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => SheetMusicListRelationFilter, { nullable: true })
  FileUploaded?: InstanceType<typeof SheetMusicListRelationFilter>;
  @Field(() => FavoritesListRelationFilter, { nullable: true })
  favorites?: InstanceType<typeof FavoritesListRelationFilter>;
}

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  name?: InstanceType<typeof StringNullableFilter>;
  @Field(() => EnumRolesFilter, { nullable: true })
  role?: InstanceType<typeof EnumRolesFilter>;
  @Field(() => StringFilter, { nullable: true })
  biography?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => SheetMusicListRelationFilter, { nullable: true })
  FileUploaded?: InstanceType<typeof SheetMusicListRelationFilter>;
  @Field(() => FavoritesListRelationFilter, { nullable: true })
  favorites?: InstanceType<typeof FavoritesListRelationFilter>;
}

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @Field(() => String, { nullable: true })
  name!: string | null;
  @Field(() => Roles, { nullable: false, defaultValue: 'USER' })
  role!: keyof typeof Roles;
  @Field(() => String, { nullable: false })
  biography!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => [SheetMusic], { nullable: true })
  FileUploaded?: Array<SheetMusic>;
  @Field(() => [Favorites], { nullable: true })
  favorites?: Array<Favorites>;
  @Field(() => UserCount, { nullable: false })
  _count?: InstanceType<typeof UserCount>;
}
