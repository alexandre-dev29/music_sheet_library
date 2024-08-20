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
    id = "id",
    phoneNumber = "phoneNumber",
    password = "password",
    name = "name",
    biography = "biography",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum SheetMusicScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug",
    composer = "composer",
    arranger = "arranger",
    instrument = "instrument",
    genre = "genre",
    difficulty = "difficulty",
    description = "description",
    year = "year",
    fileId = "fileId",
    pdfUrl = "pdfUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum FileStorageScalarFieldEnum {
    id = "id",
    bucket = "bucket",
    fileKey = "fileKey",
    fileCompleteUrl = "fileCompleteUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum AuthTokenScalarFieldEnum {
    token = "token",
    userId = "userId",
    createdAt = "createdAt",
    validUntil = "validUntil"
}

registerEnumType(AuthTokenScalarFieldEnum, { name: 'AuthTokenScalarFieldEnum', description: undefined })
registerEnumType(FileStorageScalarFieldEnum, { name: 'FileStorageScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(SheetMusicScalarFieldEnum, { name: 'SheetMusicScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateAuthToken {
    @Field(() => AuthTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AuthTokenCountAggregate>;
    @Field(() => AuthTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AuthTokenMinAggregate>;
    @Field(() => AuthTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AuthTokenMaxAggregate>;
}

@ArgsType()
export class AuthTokenAggregateArgs {
    @Field(() => AuthTokenWhereInput, {nullable:true})
    @Type(() => AuthTokenWhereInput)
    where?: InstanceType<typeof AuthTokenWhereInput>;
    @Field(() => [AuthTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthTokenOrderByWithRelationInput>;
    @Field(() => AuthTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AuthTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AuthTokenCountAggregateInput>;
    @Field(() => AuthTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AuthTokenMinAggregateInput>;
    @Field(() => AuthTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AuthTokenMaxAggregateInput>;
}

@InputType()
export class AuthTokenCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    validUntil?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class AuthTokenCountAggregate {
    @Field(() => Int, {nullable:false})
    token!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    validUntil!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class AuthTokenCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    validUntil?: keyof typeof SortOrder;
}

@InputType()
export class AuthTokenCreateManyUserInputEnvelope {
    @Field(() => [AuthTokenCreateManyUserInput], {nullable:false})
    @Type(() => AuthTokenCreateManyUserInput)
    data!: Array<AuthTokenCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class AuthTokenCreateManyUserInput {
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    validUntil!: Date | string;
}

@InputType()
export class AuthTokenCreateManyInput {
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    validUntil!: Date | string;
}

@InputType()
export class AuthTokenCreateNestedManyWithoutUserInput {
    @Field(() => [AuthTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenCreateWithoutUserInput)
    create?: Array<AuthTokenCreateWithoutUserInput>;
    @Field(() => [AuthTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuthTokenCreateOrConnectWithoutUserInput>;
    @Field(() => AuthTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuthTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AuthTokenCreateManyUserInputEnvelope>;
    @Field(() => [AuthTokenWhereUniqueInput], {nullable:true})
    @Type(() => AuthTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>>;
}

@InputType()
export class AuthTokenCreateOrConnectWithoutUserInput {
    @Field(() => AuthTokenWhereUniqueInput, {nullable:false})
    @Type(() => AuthTokenWhereUniqueInput)
    where!: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
    @Field(() => AuthTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => AuthTokenCreateWithoutUserInput)
    create!: InstanceType<typeof AuthTokenCreateWithoutUserInput>;
}

@InputType()
export class AuthTokenCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    validUntil!: Date | string;
}

@InputType()
export class AuthTokenCreateInput {
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    validUntil!: Date | string;
    @Field(() => UserCreateNestedOneWithoutAuthTokensInput, {nullable:false})
    User!: InstanceType<typeof UserCreateNestedOneWithoutAuthTokensInput>;
}

@ArgsType()
export class AuthTokenGroupByArgs {
    @Field(() => AuthTokenWhereInput, {nullable:true})
    @Type(() => AuthTokenWhereInput)
    where?: InstanceType<typeof AuthTokenWhereInput>;
    @Field(() => [AuthTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AuthTokenOrderByWithAggregationInput>;
    @Field(() => [AuthTokenScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AuthTokenScalarFieldEnum>;
    @Field(() => AuthTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof AuthTokenScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AuthTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AuthTokenCountAggregateInput>;
    @Field(() => AuthTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AuthTokenMinAggregateInput>;
    @Field(() => AuthTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AuthTokenMaxAggregateInput>;
}

@ObjectType()
export class AuthTokenGroupBy {
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    validUntil!: Date | string;
    @Field(() => AuthTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AuthTokenCountAggregate>;
    @Field(() => AuthTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AuthTokenMinAggregate>;
    @Field(() => AuthTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AuthTokenMaxAggregate>;
}

@InputType()
export class AuthTokenListRelationFilter {
    @Field(() => AuthTokenWhereInput, {nullable:true})
    every?: InstanceType<typeof AuthTokenWhereInput>;
    @Field(() => AuthTokenWhereInput, {nullable:true})
    some?: InstanceType<typeof AuthTokenWhereInput>;
    @Field(() => AuthTokenWhereInput, {nullable:true})
    none?: InstanceType<typeof AuthTokenWhereInput>;
}

@InputType()
export class AuthTokenMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    validUntil?: true;
}

@ObjectType()
export class AuthTokenMaxAggregate {
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    validUntil?: Date | string;
}

@InputType()
export class AuthTokenMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    validUntil?: keyof typeof SortOrder;
}

@InputType()
export class AuthTokenMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    validUntil?: true;
}

@ObjectType()
export class AuthTokenMinAggregate {
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    validUntil?: Date | string;
}

@InputType()
export class AuthTokenMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    validUntil?: keyof typeof SortOrder;
}

@InputType()
export class AuthTokenOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class AuthTokenOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    validUntil?: keyof typeof SortOrder;
    @Field(() => AuthTokenCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AuthTokenCountOrderByAggregateInput>;
    @Field(() => AuthTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AuthTokenMaxOrderByAggregateInput>;
    @Field(() => AuthTokenMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AuthTokenMinOrderByAggregateInput>;
}

@InputType()
export class AuthTokenOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    validUntil?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class AuthTokenScalarWhereWithAggregatesInput {
    @Field(() => [AuthTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthTokenScalarWhereWithAggregatesInput>;
    @Field(() => [AuthTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthTokenScalarWhereWithAggregatesInput>;
    @Field(() => [AuthTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthTokenScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    validUntil?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class AuthTokenScalarWhereInput {
    @Field(() => [AuthTokenScalarWhereInput], {nullable:true})
    AND?: Array<AuthTokenScalarWhereInput>;
    @Field(() => [AuthTokenScalarWhereInput], {nullable:true})
    OR?: Array<AuthTokenScalarWhereInput>;
    @Field(() => [AuthTokenScalarWhereInput], {nullable:true})
    NOT?: Array<AuthTokenScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    validUntil?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class AuthTokenUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [AuthTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenCreateWithoutUserInput)
    create?: Array<AuthTokenCreateWithoutUserInput>;
    @Field(() => [AuthTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuthTokenCreateOrConnectWithoutUserInput>;
    @Field(() => AuthTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuthTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AuthTokenCreateManyUserInputEnvelope>;
    @Field(() => [AuthTokenWhereUniqueInput], {nullable:true})
    @Type(() => AuthTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>>;
}

@InputType()
export class AuthTokenUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    validUntil!: Date | string;
}

@InputType()
export class AuthTokenUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:false})
    validUntil!: Date | string;
}

@InputType()
export class AuthTokenUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [AuthTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenCreateWithoutUserInput)
    create?: Array<AuthTokenCreateWithoutUserInput>;
    @Field(() => [AuthTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuthTokenCreateOrConnectWithoutUserInput>;
    @Field(() => [AuthTokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AuthTokenUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => AuthTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuthTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AuthTokenCreateManyUserInputEnvelope>;
    @Field(() => [AuthTokenWhereUniqueInput], {nullable:true})
    @Type(() => AuthTokenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>>;
    @Field(() => [AuthTokenWhereUniqueInput], {nullable:true})
    @Type(() => AuthTokenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>>;
    @Field(() => [AuthTokenWhereUniqueInput], {nullable:true})
    @Type(() => AuthTokenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>>;
    @Field(() => [AuthTokenWhereUniqueInput], {nullable:true})
    @Type(() => AuthTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>>;
    @Field(() => [AuthTokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AuthTokenUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [AuthTokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AuthTokenUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [AuthTokenScalarWhereInput], {nullable:true})
    @Type(() => AuthTokenScalarWhereInput)
    deleteMany?: Array<AuthTokenScalarWhereInput>;
}

@InputType()
export class AuthTokenUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    validUntil?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AuthTokenUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    validUntil?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AuthTokenUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    validUntil?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AuthTokenUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    validUntil?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AuthTokenUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    validUntil?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AuthTokenUpdateManyWithWhereWithoutUserInput {
    @Field(() => AuthTokenScalarWhereInput, {nullable:false})
    @Type(() => AuthTokenScalarWhereInput)
    where!: InstanceType<typeof AuthTokenScalarWhereInput>;
    @Field(() => AuthTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => AuthTokenUpdateManyMutationInput)
    data!: InstanceType<typeof AuthTokenUpdateManyMutationInput>;
}

@InputType()
export class AuthTokenUpdateManyWithoutUserNestedInput {
    @Field(() => [AuthTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenCreateWithoutUserInput)
    create?: Array<AuthTokenCreateWithoutUserInput>;
    @Field(() => [AuthTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuthTokenCreateOrConnectWithoutUserInput>;
    @Field(() => [AuthTokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AuthTokenUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => AuthTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuthTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AuthTokenCreateManyUserInputEnvelope>;
    @Field(() => [AuthTokenWhereUniqueInput], {nullable:true})
    @Type(() => AuthTokenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>>;
    @Field(() => [AuthTokenWhereUniqueInput], {nullable:true})
    @Type(() => AuthTokenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>>;
    @Field(() => [AuthTokenWhereUniqueInput], {nullable:true})
    @Type(() => AuthTokenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>>;
    @Field(() => [AuthTokenWhereUniqueInput], {nullable:true})
    @Type(() => AuthTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>>;
    @Field(() => [AuthTokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AuthTokenUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [AuthTokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AuthTokenUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AuthTokenUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [AuthTokenScalarWhereInput], {nullable:true})
    @Type(() => AuthTokenScalarWhereInput)
    deleteMany?: Array<AuthTokenScalarWhereInput>;
}

@InputType()
export class AuthTokenUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => AuthTokenWhereUniqueInput, {nullable:false})
    @Type(() => AuthTokenWhereUniqueInput)
    where!: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
    @Field(() => AuthTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => AuthTokenUpdateWithoutUserInput)
    data!: InstanceType<typeof AuthTokenUpdateWithoutUserInput>;
}

@InputType()
export class AuthTokenUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    validUntil?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AuthTokenUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    validUntil?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutAuthTokensNestedInput, {nullable:true})
    User?: InstanceType<typeof UserUpdateOneRequiredWithoutAuthTokensNestedInput>;
}

@InputType()
export class AuthTokenUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => AuthTokenWhereUniqueInput, {nullable:false})
    @Type(() => AuthTokenWhereUniqueInput)
    where!: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
    @Field(() => AuthTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => AuthTokenUpdateWithoutUserInput)
    update!: InstanceType<typeof AuthTokenUpdateWithoutUserInput>;
    @Field(() => AuthTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => AuthTokenCreateWithoutUserInput)
    create!: InstanceType<typeof AuthTokenCreateWithoutUserInput>;
}

@InputType()
export class AuthTokenWhereUniqueInput {
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => [AuthTokenWhereInput], {nullable:true})
    AND?: Array<AuthTokenWhereInput>;
    @Field(() => [AuthTokenWhereInput], {nullable:true})
    OR?: Array<AuthTokenWhereInput>;
    @Field(() => [AuthTokenWhereInput], {nullable:true})
    NOT?: Array<AuthTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    validUntil?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    User?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class AuthTokenWhereInput {
    @Field(() => [AuthTokenWhereInput], {nullable:true})
    AND?: Array<AuthTokenWhereInput>;
    @Field(() => [AuthTokenWhereInput], {nullable:true})
    OR?: Array<AuthTokenWhereInput>;
    @Field(() => [AuthTokenWhereInput], {nullable:true})
    NOT?: Array<AuthTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    validUntil?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    User?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class AuthToken {
    @Field(() => ID, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    validUntil!: Date;
    @Field(() => User, {nullable:false})
    User?: InstanceType<typeof User>;
}

@ArgsType()
export class CreateManyAuthTokenArgs {
    @Field(() => [AuthTokenCreateManyInput], {nullable:false})
    @Type(() => AuthTokenCreateManyInput)
    data!: Array<AuthTokenCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneAuthTokenArgs {
    @Field(() => AuthTokenCreateInput, {nullable:false})
    @Type(() => AuthTokenCreateInput)
    data!: InstanceType<typeof AuthTokenCreateInput>;
}

@ArgsType()
export class DeleteManyAuthTokenArgs {
    @Field(() => AuthTokenWhereInput, {nullable:true})
    @Type(() => AuthTokenWhereInput)
    where?: InstanceType<typeof AuthTokenWhereInput>;
}

@ArgsType()
export class DeleteOneAuthTokenArgs {
    @Field(() => AuthTokenWhereUniqueInput, {nullable:false})
    @Type(() => AuthTokenWhereUniqueInput)
    where!: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
}

@ArgsType()
export class FindFirstAuthTokenOrThrowArgs {
    @Field(() => AuthTokenWhereInput, {nullable:true})
    @Type(() => AuthTokenWhereInput)
    where?: InstanceType<typeof AuthTokenWhereInput>;
    @Field(() => [AuthTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthTokenOrderByWithRelationInput>;
    @Field(() => AuthTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AuthTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthTokenScalarFieldEnum>;
}

@ArgsType()
export class FindFirstAuthTokenArgs {
    @Field(() => AuthTokenWhereInput, {nullable:true})
    @Type(() => AuthTokenWhereInput)
    where?: InstanceType<typeof AuthTokenWhereInput>;
    @Field(() => [AuthTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthTokenOrderByWithRelationInput>;
    @Field(() => AuthTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AuthTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthTokenScalarFieldEnum>;
}

@ArgsType()
export class FindManyAuthTokenArgs {
    @Field(() => AuthTokenWhereInput, {nullable:true})
    @Type(() => AuthTokenWhereInput)
    where?: InstanceType<typeof AuthTokenWhereInput>;
    @Field(() => [AuthTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthTokenOrderByWithRelationInput>;
    @Field(() => AuthTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AuthTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthTokenScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueAuthTokenOrThrowArgs {
    @Field(() => AuthTokenWhereUniqueInput, {nullable:false})
    @Type(() => AuthTokenWhereUniqueInput)
    where!: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
}

@ArgsType()
export class FindUniqueAuthTokenArgs {
    @Field(() => AuthTokenWhereUniqueInput, {nullable:false})
    @Type(() => AuthTokenWhereUniqueInput)
    where!: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
}

@ArgsType()
export class UpdateManyAuthTokenArgs {
    @Field(() => AuthTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => AuthTokenUpdateManyMutationInput)
    data!: InstanceType<typeof AuthTokenUpdateManyMutationInput>;
    @Field(() => AuthTokenWhereInput, {nullable:true})
    @Type(() => AuthTokenWhereInput)
    where?: InstanceType<typeof AuthTokenWhereInput>;
}

@ArgsType()
export class UpdateOneAuthTokenArgs {
    @Field(() => AuthTokenUpdateInput, {nullable:false})
    @Type(() => AuthTokenUpdateInput)
    data!: InstanceType<typeof AuthTokenUpdateInput>;
    @Field(() => AuthTokenWhereUniqueInput, {nullable:false})
    @Type(() => AuthTokenWhereUniqueInput)
    where!: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
}

@ArgsType()
export class UpsertOneAuthTokenArgs {
    @Field(() => AuthTokenWhereUniqueInput, {nullable:false})
    @Type(() => AuthTokenWhereUniqueInput)
    where!: Prisma.AtLeast<AuthTokenWhereUniqueInput, 'token'>;
    @Field(() => AuthTokenCreateInput, {nullable:false})
    @Type(() => AuthTokenCreateInput)
    create!: InstanceType<typeof AuthTokenCreateInput>;
    @Field(() => AuthTokenUpdateInput, {nullable:false})
    @Type(() => AuthTokenUpdateInput)
    update!: InstanceType<typeof AuthTokenUpdateInput>;
}

@ObjectType()
export class AggregateFileStorage {
    @Field(() => FileStorageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof FileStorageCountAggregate>;
    @Field(() => FileStorageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof FileStorageMinAggregate>;
    @Field(() => FileStorageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof FileStorageMaxAggregate>;
}

@ArgsType()
export class CreateManyFileStorageArgs {
    @Field(() => [FileStorageCreateManyInput], {nullable:false})
    @Type(() => FileStorageCreateManyInput)
    data!: Array<FileStorageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneFileStorageArgs {
    @Field(() => FileStorageCreateInput, {nullable:false})
    @Type(() => FileStorageCreateInput)
    data!: InstanceType<typeof FileStorageCreateInput>;
}

@ArgsType()
export class DeleteManyFileStorageArgs {
    @Field(() => FileStorageWhereInput, {nullable:true})
    @Type(() => FileStorageWhereInput)
    where?: InstanceType<typeof FileStorageWhereInput>;
}

@ArgsType()
export class DeleteOneFileStorageArgs {
    @Field(() => FileStorageWhereUniqueInput, {nullable:false})
    @Type(() => FileStorageWhereUniqueInput)
    where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FileStorageAggregateArgs {
    @Field(() => FileStorageWhereInput, {nullable:true})
    @Type(() => FileStorageWhereInput)
    where?: InstanceType<typeof FileStorageWhereInput>;
    @Field(() => [FileStorageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FileStorageOrderByWithRelationInput>;
    @Field(() => FileStorageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => FileStorageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof FileStorageCountAggregateInput>;
    @Field(() => FileStorageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof FileStorageMinAggregateInput>;
    @Field(() => FileStorageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof FileStorageMaxAggregateInput>;
}

@InputType()
export class FileStorageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bucket?: true;
    @Field(() => Boolean, {nullable:true})
    fileKey?: true;
    @Field(() => Boolean, {nullable:true})
    fileCompleteUrl?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class FileStorageCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    bucket!: number;
    @Field(() => Int, {nullable:false})
    fileKey!: number;
    @Field(() => Int, {nullable:false})
    fileCompleteUrl!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class FileStorageCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bucket?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileKey?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileCompleteUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class FileStorageCount {
    @Field(() => Int, {nullable:false})
    SheetsMusic?: number;
}

@InputType()
export class FileStorageCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    bucket!: string;
    @Field(() => String, {nullable:false})
    fileKey!: string;
    @Field(() => String, {nullable:false})
    fileCompleteUrl!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FileStorageCreateNestedOneWithoutSheetsMusicInput {
    @Field(() => FileStorageCreateWithoutSheetsMusicInput, {nullable:true})
    @Type(() => FileStorageCreateWithoutSheetsMusicInput)
    create?: InstanceType<typeof FileStorageCreateWithoutSheetsMusicInput>;
    @Field(() => FileStorageCreateOrConnectWithoutSheetsMusicInput, {nullable:true})
    @Type(() => FileStorageCreateOrConnectWithoutSheetsMusicInput)
    connectOrCreate?: InstanceType<typeof FileStorageCreateOrConnectWithoutSheetsMusicInput>;
    @Field(() => FileStorageWhereUniqueInput, {nullable:true})
    @Type(() => FileStorageWhereUniqueInput)
    connect?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@InputType()
export class FileStorageCreateOrConnectWithoutSheetsMusicInput {
    @Field(() => FileStorageWhereUniqueInput, {nullable:false})
    @Type(() => FileStorageWhereUniqueInput)
    where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
    @Field(() => FileStorageCreateWithoutSheetsMusicInput, {nullable:false})
    @Type(() => FileStorageCreateWithoutSheetsMusicInput)
    create!: InstanceType<typeof FileStorageCreateWithoutSheetsMusicInput>;
}

@InputType()
export class FileStorageCreateWithoutSheetsMusicInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    bucket!: string;
    @Field(() => String, {nullable:false})
    fileKey!: string;
    @Field(() => String, {nullable:false})
    fileCompleteUrl!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FileStorageCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    bucket!: string;
    @Field(() => String, {nullable:false})
    fileKey!: string;
    @Field(() => String, {nullable:false})
    fileCompleteUrl!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => SheetMusicCreateNestedManyWithoutFileInput, {nullable:true})
    SheetsMusic?: InstanceType<typeof SheetMusicCreateNestedManyWithoutFileInput>;
}

@ArgsType()
export class FileStorageGroupByArgs {
    @Field(() => FileStorageWhereInput, {nullable:true})
    @Type(() => FileStorageWhereInput)
    where?: InstanceType<typeof FileStorageWhereInput>;
    @Field(() => [FileStorageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FileStorageOrderByWithAggregationInput>;
    @Field(() => [FileStorageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FileStorageScalarFieldEnum>;
    @Field(() => FileStorageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof FileStorageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => FileStorageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof FileStorageCountAggregateInput>;
    @Field(() => FileStorageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof FileStorageMinAggregateInput>;
    @Field(() => FileStorageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof FileStorageMaxAggregateInput>;
}

@ObjectType()
export class FileStorageGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    bucket!: string;
    @Field(() => String, {nullable:false})
    fileKey!: string;
    @Field(() => String, {nullable:false})
    fileCompleteUrl!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => FileStorageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof FileStorageCountAggregate>;
    @Field(() => FileStorageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof FileStorageMinAggregate>;
    @Field(() => FileStorageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof FileStorageMaxAggregate>;
}

@InputType()
export class FileStorageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bucket?: true;
    @Field(() => Boolean, {nullable:true})
    fileKey?: true;
    @Field(() => Boolean, {nullable:true})
    fileCompleteUrl?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class FileStorageMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    bucket?: string;
    @Field(() => String, {nullable:true})
    fileKey?: string;
    @Field(() => String, {nullable:true})
    fileCompleteUrl?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FileStorageMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bucket?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileKey?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileCompleteUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class FileStorageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bucket?: true;
    @Field(() => Boolean, {nullable:true})
    fileKey?: true;
    @Field(() => Boolean, {nullable:true})
    fileCompleteUrl?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class FileStorageMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    bucket?: string;
    @Field(() => String, {nullable:true})
    fileKey?: string;
    @Field(() => String, {nullable:true})
    fileCompleteUrl?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FileStorageMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bucket?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileKey?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileCompleteUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class FileStorageOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bucket?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileKey?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileCompleteUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => FileStorageCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof FileStorageCountOrderByAggregateInput>;
    @Field(() => FileStorageMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof FileStorageMaxOrderByAggregateInput>;
    @Field(() => FileStorageMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof FileStorageMinOrderByAggregateInput>;
}

@InputType()
export class FileStorageOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bucket?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileKey?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileCompleteUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SheetMusicOrderByRelationAggregateInput, {nullable:true})
    SheetsMusic?: InstanceType<typeof SheetMusicOrderByRelationAggregateInput>;
}

@InputType()
export class FileStorageRelationFilter {
    @Field(() => FileStorageWhereInput, {nullable:true})
    is?: InstanceType<typeof FileStorageWhereInput>;
    @Field(() => FileStorageWhereInput, {nullable:true})
    isNot?: InstanceType<typeof FileStorageWhereInput>;
}

@InputType()
export class FileStorageScalarWhereWithAggregatesInput {
    @Field(() => [FileStorageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FileStorageScalarWhereWithAggregatesInput>;
    @Field(() => [FileStorageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FileStorageScalarWhereWithAggregatesInput>;
    @Field(() => [FileStorageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FileStorageScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bucket?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fileKey?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fileCompleteUrl?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class FileStorageUncheckedCreateWithoutSheetsMusicInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    bucket!: string;
    @Field(() => String, {nullable:false})
    fileKey!: string;
    @Field(() => String, {nullable:false})
    fileCompleteUrl!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FileStorageUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    bucket!: string;
    @Field(() => String, {nullable:false})
    fileKey!: string;
    @Field(() => String, {nullable:false})
    fileCompleteUrl!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => SheetMusicUncheckedCreateNestedManyWithoutFileInput, {nullable:true})
    SheetsMusic?: InstanceType<typeof SheetMusicUncheckedCreateNestedManyWithoutFileInput>;
}

@InputType()
export class FileStorageUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileStorageUncheckedUpdateWithoutSheetsMusicInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileStorageUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => SheetMusicUncheckedUpdateManyWithoutFileNestedInput, {nullable:true})
    SheetsMusic?: InstanceType<typeof SheetMusicUncheckedUpdateManyWithoutFileNestedInput>;
}

@InputType()
export class FileStorageUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileStorageUpdateOneRequiredWithoutSheetsMusicNestedInput {
    @Field(() => FileStorageCreateWithoutSheetsMusicInput, {nullable:true})
    @Type(() => FileStorageCreateWithoutSheetsMusicInput)
    create?: InstanceType<typeof FileStorageCreateWithoutSheetsMusicInput>;
    @Field(() => FileStorageCreateOrConnectWithoutSheetsMusicInput, {nullable:true})
    @Type(() => FileStorageCreateOrConnectWithoutSheetsMusicInput)
    connectOrCreate?: InstanceType<typeof FileStorageCreateOrConnectWithoutSheetsMusicInput>;
    @Field(() => FileStorageUpsertWithoutSheetsMusicInput, {nullable:true})
    @Type(() => FileStorageUpsertWithoutSheetsMusicInput)
    upsert?: InstanceType<typeof FileStorageUpsertWithoutSheetsMusicInput>;
    @Field(() => FileStorageWhereUniqueInput, {nullable:true})
    @Type(() => FileStorageWhereUniqueInput)
    connect?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
    @Field(() => FileStorageUpdateToOneWithWhereWithoutSheetsMusicInput, {nullable:true})
    @Type(() => FileStorageUpdateToOneWithWhereWithoutSheetsMusicInput)
    update?: InstanceType<typeof FileStorageUpdateToOneWithWhereWithoutSheetsMusicInput>;
}

@InputType()
export class FileStorageUpdateToOneWithWhereWithoutSheetsMusicInput {
    @Field(() => FileStorageWhereInput, {nullable:true})
    @Type(() => FileStorageWhereInput)
    where?: InstanceType<typeof FileStorageWhereInput>;
    @Field(() => FileStorageUpdateWithoutSheetsMusicInput, {nullable:false})
    @Type(() => FileStorageUpdateWithoutSheetsMusicInput)
    data!: InstanceType<typeof FileStorageUpdateWithoutSheetsMusicInput>;
}

@InputType()
export class FileStorageUpdateWithoutSheetsMusicInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FileStorageUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bucket?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileCompleteUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => SheetMusicUpdateManyWithoutFileNestedInput, {nullable:true})
    SheetsMusic?: InstanceType<typeof SheetMusicUpdateManyWithoutFileNestedInput>;
}

@InputType()
export class FileStorageUpsertWithoutSheetsMusicInput {
    @Field(() => FileStorageUpdateWithoutSheetsMusicInput, {nullable:false})
    @Type(() => FileStorageUpdateWithoutSheetsMusicInput)
    update!: InstanceType<typeof FileStorageUpdateWithoutSheetsMusicInput>;
    @Field(() => FileStorageCreateWithoutSheetsMusicInput, {nullable:false})
    @Type(() => FileStorageCreateWithoutSheetsMusicInput)
    create!: InstanceType<typeof FileStorageCreateWithoutSheetsMusicInput>;
    @Field(() => FileStorageWhereInput, {nullable:true})
    @Type(() => FileStorageWhereInput)
    where?: InstanceType<typeof FileStorageWhereInput>;
}

@InputType()
export class FileStorageWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [FileStorageWhereInput], {nullable:true})
    AND?: Array<FileStorageWhereInput>;
    @Field(() => [FileStorageWhereInput], {nullable:true})
    OR?: Array<FileStorageWhereInput>;
    @Field(() => [FileStorageWhereInput], {nullable:true})
    NOT?: Array<FileStorageWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    bucket?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    fileKey?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    fileCompleteUrl?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => SheetMusicListRelationFilter, {nullable:true})
    SheetsMusic?: InstanceType<typeof SheetMusicListRelationFilter>;
}

@InputType()
export class FileStorageWhereInput {
    @Field(() => [FileStorageWhereInput], {nullable:true})
    AND?: Array<FileStorageWhereInput>;
    @Field(() => [FileStorageWhereInput], {nullable:true})
    OR?: Array<FileStorageWhereInput>;
    @Field(() => [FileStorageWhereInput], {nullable:true})
    NOT?: Array<FileStorageWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    bucket?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    fileKey?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    fileCompleteUrl?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => SheetMusicListRelationFilter, {nullable:true})
    SheetsMusic?: InstanceType<typeof SheetMusicListRelationFilter>;
}

@ObjectType()
export class FileStorage {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    bucket!: string;
    @Field(() => String, {nullable:false})
    fileKey!: string;
    @Field(() => String, {nullable:false})
    fileCompleteUrl!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [SheetMusic], {nullable:true})
    SheetsMusic?: Array<SheetMusic>;
    @Field(() => FileStorageCount, {nullable:false})
    _count?: InstanceType<typeof FileStorageCount>;
}

@ArgsType()
export class FindFirstFileStorageOrThrowArgs {
    @Field(() => FileStorageWhereInput, {nullable:true})
    @Type(() => FileStorageWhereInput)
    where?: InstanceType<typeof FileStorageWhereInput>;
    @Field(() => [FileStorageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FileStorageOrderByWithRelationInput>;
    @Field(() => FileStorageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [FileStorageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FileStorageScalarFieldEnum>;
}

@ArgsType()
export class FindFirstFileStorageArgs {
    @Field(() => FileStorageWhereInput, {nullable:true})
    @Type(() => FileStorageWhereInput)
    where?: InstanceType<typeof FileStorageWhereInput>;
    @Field(() => [FileStorageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FileStorageOrderByWithRelationInput>;
    @Field(() => FileStorageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [FileStorageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FileStorageScalarFieldEnum>;
}

@ArgsType()
export class FindManyFileStorageArgs {
    @Field(() => FileStorageWhereInput, {nullable:true})
    @Type(() => FileStorageWhereInput)
    where?: InstanceType<typeof FileStorageWhereInput>;
    @Field(() => [FileStorageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FileStorageOrderByWithRelationInput>;
    @Field(() => FileStorageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [FileStorageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FileStorageScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueFileStorageOrThrowArgs {
    @Field(() => FileStorageWhereUniqueInput, {nullable:false})
    @Type(() => FileStorageWhereUniqueInput)
    where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueFileStorageArgs {
    @Field(() => FileStorageWhereUniqueInput, {nullable:false})
    @Type(() => FileStorageWhereUniqueInput)
    where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyFileStorageArgs {
    @Field(() => FileStorageUpdateManyMutationInput, {nullable:false})
    @Type(() => FileStorageUpdateManyMutationInput)
    data!: InstanceType<typeof FileStorageUpdateManyMutationInput>;
    @Field(() => FileStorageWhereInput, {nullable:true})
    @Type(() => FileStorageWhereInput)
    where?: InstanceType<typeof FileStorageWhereInput>;
}

@ArgsType()
export class UpdateOneFileStorageArgs {
    @Field(() => FileStorageUpdateInput, {nullable:false})
    @Type(() => FileStorageUpdateInput)
    data!: InstanceType<typeof FileStorageUpdateInput>;
    @Field(() => FileStorageWhereUniqueInput, {nullable:false})
    @Type(() => FileStorageWhereUniqueInput)
    where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneFileStorageArgs {
    @Field(() => FileStorageWhereUniqueInput, {nullable:false})
    @Type(() => FileStorageWhereUniqueInput)
    where!: Prisma.AtLeast<FileStorageWhereUniqueInput, 'id'>;
    @Field(() => FileStorageCreateInput, {nullable:false})
    @Type(() => FileStorageCreateInput)
    create!: InstanceType<typeof FileStorageCreateInput>;
    @Field(() => FileStorageUpdateInput, {nullable:false})
    @Type(() => FileStorageUpdateInput)
    update!: InstanceType<typeof FileStorageUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateSheetMusic {
    @Field(() => SheetMusicCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SheetMusicCountAggregate>;
    @Field(() => SheetMusicAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof SheetMusicAvgAggregate>;
    @Field(() => SheetMusicSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof SheetMusicSumAggregate>;
    @Field(() => SheetMusicMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SheetMusicMinAggregate>;
    @Field(() => SheetMusicMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SheetMusicMaxAggregate>;
}

@ArgsType()
export class CreateManySheetMusicArgs {
    @Field(() => [SheetMusicCreateManyInput], {nullable:false})
    @Type(() => SheetMusicCreateManyInput)
    data!: Array<SheetMusicCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneSheetMusicArgs {
    @Field(() => SheetMusicCreateInput, {nullable:false})
    @Type(() => SheetMusicCreateInput)
    data!: InstanceType<typeof SheetMusicCreateInput>;
}

@ArgsType()
export class DeleteManySheetMusicArgs {
    @Field(() => SheetMusicWhereInput, {nullable:true})
    @Type(() => SheetMusicWhereInput)
    where?: InstanceType<typeof SheetMusicWhereInput>;
}

@ArgsType()
export class DeleteOneSheetMusicArgs {
    @Field(() => SheetMusicWhereUniqueInput, {nullable:false})
    @Type(() => SheetMusicWhereUniqueInput)
    where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstSheetMusicOrThrowArgs {
    @Field(() => SheetMusicWhereInput, {nullable:true})
    @Type(() => SheetMusicWhereInput)
    where?: InstanceType<typeof SheetMusicWhereInput>;
    @Field(() => [SheetMusicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SheetMusicOrderByWithRelationInput>;
    @Field(() => SheetMusicWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SheetMusicScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SheetMusicScalarFieldEnum>;
}

@ArgsType()
export class FindFirstSheetMusicArgs {
    @Field(() => SheetMusicWhereInput, {nullable:true})
    @Type(() => SheetMusicWhereInput)
    where?: InstanceType<typeof SheetMusicWhereInput>;
    @Field(() => [SheetMusicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SheetMusicOrderByWithRelationInput>;
    @Field(() => SheetMusicWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SheetMusicScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SheetMusicScalarFieldEnum>;
}

@ArgsType()
export class FindManySheetMusicArgs {
    @Field(() => SheetMusicWhereInput, {nullable:true})
    @Type(() => SheetMusicWhereInput)
    where?: InstanceType<typeof SheetMusicWhereInput>;
    @Field(() => [SheetMusicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SheetMusicOrderByWithRelationInput>;
    @Field(() => SheetMusicWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SheetMusicScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SheetMusicScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSheetMusicOrThrowArgs {
    @Field(() => SheetMusicWhereUniqueInput, {nullable:false})
    @Type(() => SheetMusicWhereUniqueInput)
    where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueSheetMusicArgs {
    @Field(() => SheetMusicWhereUniqueInput, {nullable:false})
    @Type(() => SheetMusicWhereUniqueInput)
    where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class SheetMusicAggregateArgs {
    @Field(() => SheetMusicWhereInput, {nullable:true})
    @Type(() => SheetMusicWhereInput)
    where?: InstanceType<typeof SheetMusicWhereInput>;
    @Field(() => [SheetMusicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SheetMusicOrderByWithRelationInput>;
    @Field(() => SheetMusicWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SheetMusicCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SheetMusicCountAggregateInput>;
    @Field(() => SheetMusicAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SheetMusicAvgAggregateInput>;
    @Field(() => SheetMusicSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SheetMusicSumAggregateInput>;
    @Field(() => SheetMusicMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SheetMusicMinAggregateInput>;
    @Field(() => SheetMusicMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SheetMusicMaxAggregateInput>;
}

@InputType()
export class SheetMusicAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class SheetMusicAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class SheetMusicAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class SheetMusicCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    composer?: true;
    @Field(() => Boolean, {nullable:true})
    arranger?: true;
    @Field(() => Boolean, {nullable:true})
    instrument?: true;
    @Field(() => Boolean, {nullable:true})
    genre?: true;
    @Field(() => Boolean, {nullable:true})
    difficulty?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    year?: true;
    @Field(() => Boolean, {nullable:true})
    fileId?: true;
    @Field(() => Boolean, {nullable:true})
    pdfUrl?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SheetMusicCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    slug!: number;
    @Field(() => Int, {nullable:false})
    composer!: number;
    @Field(() => Int, {nullable:false})
    arranger!: number;
    @Field(() => Int, {nullable:false})
    instrument!: number;
    @Field(() => Int, {nullable:false})
    genre!: number;
    @Field(() => Int, {nullable:false})
    difficulty!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    year!: number;
    @Field(() => Int, {nullable:false})
    fileId!: number;
    @Field(() => Int, {nullable:false})
    pdfUrl!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SheetMusicCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    composer?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    arranger?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    instrument?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genre?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    difficulty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    year?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pdfUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SheetMusicCreateManyFileInputEnvelope {
    @Field(() => [SheetMusicCreateManyFileInput], {nullable:false})
    @Type(() => SheetMusicCreateManyFileInput)
    data!: Array<SheetMusicCreateManyFileInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SheetMusicCreateManyFileInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    composer!: string;
    @Field(() => String, {nullable:true})
    arranger?: string;
    @Field(() => String, {nullable:false})
    instrument!: string;
    @Field(() => String, {nullable:false})
    genre!: string;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    year?: string;
    @Field(() => String, {nullable:false})
    pdfUrl!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SheetMusicCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    composer!: string;
    @Field(() => String, {nullable:true})
    arranger?: string;
    @Field(() => String, {nullable:false})
    instrument!: string;
    @Field(() => String, {nullable:false})
    genre!: string;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    year?: string;
    @Field(() => String, {nullable:false})
    fileId!: string;
    @Field(() => String, {nullable:false})
    pdfUrl!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SheetMusicCreateNestedManyWithoutFileInput {
    @Field(() => [SheetMusicCreateWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicCreateWithoutFileInput)
    create?: Array<SheetMusicCreateWithoutFileInput>;
    @Field(() => [SheetMusicCreateOrConnectWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicCreateOrConnectWithoutFileInput)
    connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutFileInput>;
    @Field(() => SheetMusicCreateManyFileInputEnvelope, {nullable:true})
    @Type(() => SheetMusicCreateManyFileInputEnvelope)
    createMany?: InstanceType<typeof SheetMusicCreateManyFileInputEnvelope>;
    @Field(() => [SheetMusicWhereUniqueInput], {nullable:true})
    @Type(() => SheetMusicWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
}

@InputType()
export class SheetMusicCreateOrConnectWithoutFileInput {
    @Field(() => SheetMusicWhereUniqueInput, {nullable:false})
    @Type(() => SheetMusicWhereUniqueInput)
    where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
    @Field(() => SheetMusicCreateWithoutFileInput, {nullable:false})
    @Type(() => SheetMusicCreateWithoutFileInput)
    create!: InstanceType<typeof SheetMusicCreateWithoutFileInput>;
}

@InputType()
export class SheetMusicCreateWithoutFileInput {
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    composer!: string;
    @Field(() => String, {nullable:true})
    arranger?: string;
    @Field(() => String, {nullable:false})
    instrument!: string;
    @Field(() => String, {nullable:false})
    genre!: string;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    year?: string;
    @Field(() => String, {nullable:false})
    pdfUrl!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SheetMusicCreateInput {
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    composer!: string;
    @Field(() => String, {nullable:true})
    arranger?: string;
    @Field(() => String, {nullable:false})
    instrument!: string;
    @Field(() => String, {nullable:false})
    genre!: string;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    year?: string;
    @Field(() => String, {nullable:false})
    pdfUrl!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FileStorageCreateNestedOneWithoutSheetsMusicInput, {nullable:false})
    file!: InstanceType<typeof FileStorageCreateNestedOneWithoutSheetsMusicInput>;
}

@ArgsType()
export class SheetMusicGroupByArgs {
    @Field(() => SheetMusicWhereInput, {nullable:true})
    @Type(() => SheetMusicWhereInput)
    where?: InstanceType<typeof SheetMusicWhereInput>;
    @Field(() => [SheetMusicOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SheetMusicOrderByWithAggregationInput>;
    @Field(() => [SheetMusicScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SheetMusicScalarFieldEnum>;
    @Field(() => SheetMusicScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SheetMusicScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SheetMusicCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SheetMusicCountAggregateInput>;
    @Field(() => SheetMusicAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SheetMusicAvgAggregateInput>;
    @Field(() => SheetMusicSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SheetMusicSumAggregateInput>;
    @Field(() => SheetMusicMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SheetMusicMinAggregateInput>;
    @Field(() => SheetMusicMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SheetMusicMaxAggregateInput>;
}

@ObjectType()
export class SheetMusicGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    composer!: string;
    @Field(() => String, {nullable:true})
    arranger?: string;
    @Field(() => String, {nullable:false})
    instrument!: string;
    @Field(() => String, {nullable:false})
    genre!: string;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    year?: string;
    @Field(() => String, {nullable:false})
    fileId!: string;
    @Field(() => String, {nullable:false})
    pdfUrl!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => SheetMusicCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SheetMusicCountAggregate>;
    @Field(() => SheetMusicAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof SheetMusicAvgAggregate>;
    @Field(() => SheetMusicSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof SheetMusicSumAggregate>;
    @Field(() => SheetMusicMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SheetMusicMinAggregate>;
    @Field(() => SheetMusicMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SheetMusicMaxAggregate>;
}

@InputType()
export class SheetMusicListRelationFilter {
    @Field(() => SheetMusicWhereInput, {nullable:true})
    every?: InstanceType<typeof SheetMusicWhereInput>;
    @Field(() => SheetMusicWhereInput, {nullable:true})
    some?: InstanceType<typeof SheetMusicWhereInput>;
    @Field(() => SheetMusicWhereInput, {nullable:true})
    none?: InstanceType<typeof SheetMusicWhereInput>;
}

@InputType()
export class SheetMusicMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    composer?: true;
    @Field(() => Boolean, {nullable:true})
    arranger?: true;
    @Field(() => Boolean, {nullable:true})
    instrument?: true;
    @Field(() => Boolean, {nullable:true})
    genre?: true;
    @Field(() => Boolean, {nullable:true})
    difficulty?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    year?: true;
    @Field(() => Boolean, {nullable:true})
    fileId?: true;
    @Field(() => Boolean, {nullable:true})
    pdfUrl?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class SheetMusicMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
    @Field(() => String, {nullable:true})
    composer?: string;
    @Field(() => String, {nullable:true})
    arranger?: string;
    @Field(() => String, {nullable:true})
    instrument?: string;
    @Field(() => String, {nullable:true})
    genre?: string;
    @Field(() => String, {nullable:true})
    difficulty?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    year?: string;
    @Field(() => String, {nullable:true})
    fileId?: string;
    @Field(() => String, {nullable:true})
    pdfUrl?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SheetMusicMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    composer?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    arranger?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    instrument?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genre?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    difficulty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    year?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pdfUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SheetMusicMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    composer?: true;
    @Field(() => Boolean, {nullable:true})
    arranger?: true;
    @Field(() => Boolean, {nullable:true})
    instrument?: true;
    @Field(() => Boolean, {nullable:true})
    genre?: true;
    @Field(() => Boolean, {nullable:true})
    difficulty?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    year?: true;
    @Field(() => Boolean, {nullable:true})
    fileId?: true;
    @Field(() => Boolean, {nullable:true})
    pdfUrl?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class SheetMusicMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
    @Field(() => String, {nullable:true})
    composer?: string;
    @Field(() => String, {nullable:true})
    arranger?: string;
    @Field(() => String, {nullable:true})
    instrument?: string;
    @Field(() => String, {nullable:true})
    genre?: string;
    @Field(() => String, {nullable:true})
    difficulty?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    year?: string;
    @Field(() => String, {nullable:true})
    fileId?: string;
    @Field(() => String, {nullable:true})
    pdfUrl?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SheetMusicMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    composer?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    arranger?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    instrument?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genre?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    difficulty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    year?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pdfUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SheetMusicOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class SheetMusicOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    composer?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    arranger?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    instrument?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genre?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    difficulty?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    year?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pdfUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SheetMusicCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SheetMusicCountOrderByAggregateInput>;
    @Field(() => SheetMusicAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SheetMusicAvgOrderByAggregateInput>;
    @Field(() => SheetMusicMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SheetMusicMaxOrderByAggregateInput>;
    @Field(() => SheetMusicMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SheetMusicMinOrderByAggregateInput>;
    @Field(() => SheetMusicSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SheetMusicSumOrderByAggregateInput>;
}

@InputType()
export class SheetMusicOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    composer?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    arranger?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    instrument?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genre?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    difficulty?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    year?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pdfUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => FileStorageOrderByWithRelationInput, {nullable:true})
    file?: InstanceType<typeof FileStorageOrderByWithRelationInput>;
}

@InputType()
export class SheetMusicScalarWhereWithAggregatesInput {
    @Field(() => [SheetMusicScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SheetMusicScalarWhereWithAggregatesInput>;
    @Field(() => [SheetMusicScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SheetMusicScalarWhereWithAggregatesInput>;
    @Field(() => [SheetMusicScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SheetMusicScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    composer?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    arranger?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    instrument?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    genre?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    difficulty?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    year?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fileId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pdfUrl?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class SheetMusicScalarWhereInput {
    @Field(() => [SheetMusicScalarWhereInput], {nullable:true})
    AND?: Array<SheetMusicScalarWhereInput>;
    @Field(() => [SheetMusicScalarWhereInput], {nullable:true})
    OR?: Array<SheetMusicScalarWhereInput>;
    @Field(() => [SheetMusicScalarWhereInput], {nullable:true})
    NOT?: Array<SheetMusicScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    composer?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    arranger?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    instrument?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    genre?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    difficulty?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    year?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    fileId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pdfUrl?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class SheetMusicSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class SheetMusicSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class SheetMusicSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class SheetMusicUncheckedCreateNestedManyWithoutFileInput {
    @Field(() => [SheetMusicCreateWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicCreateWithoutFileInput)
    create?: Array<SheetMusicCreateWithoutFileInput>;
    @Field(() => [SheetMusicCreateOrConnectWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicCreateOrConnectWithoutFileInput)
    connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutFileInput>;
    @Field(() => SheetMusicCreateManyFileInputEnvelope, {nullable:true})
    @Type(() => SheetMusicCreateManyFileInputEnvelope)
    createMany?: InstanceType<typeof SheetMusicCreateManyFileInputEnvelope>;
    @Field(() => [SheetMusicWhereUniqueInput], {nullable:true})
    @Type(() => SheetMusicWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
}

@InputType()
export class SheetMusicUncheckedCreateWithoutFileInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    composer!: string;
    @Field(() => String, {nullable:true})
    arranger?: string;
    @Field(() => String, {nullable:false})
    instrument!: string;
    @Field(() => String, {nullable:false})
    genre!: string;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    year?: string;
    @Field(() => String, {nullable:false})
    pdfUrl!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SheetMusicUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    composer!: string;
    @Field(() => String, {nullable:true})
    arranger?: string;
    @Field(() => String, {nullable:false})
    instrument!: string;
    @Field(() => String, {nullable:false})
    genre!: string;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    year?: string;
    @Field(() => String, {nullable:false})
    fileId!: string;
    @Field(() => String, {nullable:false})
    pdfUrl!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SheetMusicUncheckedUpdateManyWithoutFileNestedInput {
    @Field(() => [SheetMusicCreateWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicCreateWithoutFileInput)
    create?: Array<SheetMusicCreateWithoutFileInput>;
    @Field(() => [SheetMusicCreateOrConnectWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicCreateOrConnectWithoutFileInput)
    connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutFileInput>;
    @Field(() => [SheetMusicUpsertWithWhereUniqueWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicUpsertWithWhereUniqueWithoutFileInput)
    upsert?: Array<SheetMusicUpsertWithWhereUniqueWithoutFileInput>;
    @Field(() => SheetMusicCreateManyFileInputEnvelope, {nullable:true})
    @Type(() => SheetMusicCreateManyFileInputEnvelope)
    createMany?: InstanceType<typeof SheetMusicCreateManyFileInputEnvelope>;
    @Field(() => [SheetMusicWhereUniqueInput], {nullable:true})
    @Type(() => SheetMusicWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
    @Field(() => [SheetMusicWhereUniqueInput], {nullable:true})
    @Type(() => SheetMusicWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
    @Field(() => [SheetMusicWhereUniqueInput], {nullable:true})
    @Type(() => SheetMusicWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
    @Field(() => [SheetMusicWhereUniqueInput], {nullable:true})
    @Type(() => SheetMusicWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
    @Field(() => [SheetMusicUpdateWithWhereUniqueWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicUpdateWithWhereUniqueWithoutFileInput)
    update?: Array<SheetMusicUpdateWithWhereUniqueWithoutFileInput>;
    @Field(() => [SheetMusicUpdateManyWithWhereWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicUpdateManyWithWhereWithoutFileInput)
    updateMany?: Array<SheetMusicUpdateManyWithWhereWithoutFileInput>;
    @Field(() => [SheetMusicScalarWhereInput], {nullable:true})
    @Type(() => SheetMusicScalarWhereInput)
    deleteMany?: Array<SheetMusicScalarWhereInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateManyWithoutFileInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    composer?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    genre?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pdfUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    composer?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    genre?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pdfUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateWithoutFileInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    composer?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    genre?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pdfUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    composer?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    genre?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pdfUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    composer?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    genre?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pdfUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUpdateManyWithWhereWithoutFileInput {
    @Field(() => SheetMusicScalarWhereInput, {nullable:false})
    @Type(() => SheetMusicScalarWhereInput)
    where!: InstanceType<typeof SheetMusicScalarWhereInput>;
    @Field(() => SheetMusicUpdateManyMutationInput, {nullable:false})
    @Type(() => SheetMusicUpdateManyMutationInput)
    data!: InstanceType<typeof SheetMusicUpdateManyMutationInput>;
}

@InputType()
export class SheetMusicUpdateManyWithoutFileNestedInput {
    @Field(() => [SheetMusicCreateWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicCreateWithoutFileInput)
    create?: Array<SheetMusicCreateWithoutFileInput>;
    @Field(() => [SheetMusicCreateOrConnectWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicCreateOrConnectWithoutFileInput)
    connectOrCreate?: Array<SheetMusicCreateOrConnectWithoutFileInput>;
    @Field(() => [SheetMusicUpsertWithWhereUniqueWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicUpsertWithWhereUniqueWithoutFileInput)
    upsert?: Array<SheetMusicUpsertWithWhereUniqueWithoutFileInput>;
    @Field(() => SheetMusicCreateManyFileInputEnvelope, {nullable:true})
    @Type(() => SheetMusicCreateManyFileInputEnvelope)
    createMany?: InstanceType<typeof SheetMusicCreateManyFileInputEnvelope>;
    @Field(() => [SheetMusicWhereUniqueInput], {nullable:true})
    @Type(() => SheetMusicWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
    @Field(() => [SheetMusicWhereUniqueInput], {nullable:true})
    @Type(() => SheetMusicWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
    @Field(() => [SheetMusicWhereUniqueInput], {nullable:true})
    @Type(() => SheetMusicWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
    @Field(() => [SheetMusicWhereUniqueInput], {nullable:true})
    @Type(() => SheetMusicWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>>;
    @Field(() => [SheetMusicUpdateWithWhereUniqueWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicUpdateWithWhereUniqueWithoutFileInput)
    update?: Array<SheetMusicUpdateWithWhereUniqueWithoutFileInput>;
    @Field(() => [SheetMusicUpdateManyWithWhereWithoutFileInput], {nullable:true})
    @Type(() => SheetMusicUpdateManyWithWhereWithoutFileInput)
    updateMany?: Array<SheetMusicUpdateManyWithWhereWithoutFileInput>;
    @Field(() => [SheetMusicScalarWhereInput], {nullable:true})
    @Type(() => SheetMusicScalarWhereInput)
    deleteMany?: Array<SheetMusicScalarWhereInput>;
}

@InputType()
export class SheetMusicUpdateWithWhereUniqueWithoutFileInput {
    @Field(() => SheetMusicWhereUniqueInput, {nullable:false})
    @Type(() => SheetMusicWhereUniqueInput)
    where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
    @Field(() => SheetMusicUpdateWithoutFileInput, {nullable:false})
    @Type(() => SheetMusicUpdateWithoutFileInput)
    data!: InstanceType<typeof SheetMusicUpdateWithoutFileInput>;
}

@InputType()
export class SheetMusicUpdateWithoutFileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    composer?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    genre?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pdfUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SheetMusicUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    composer?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    arranger?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    instrument?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    genre?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    year?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pdfUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => FileStorageUpdateOneRequiredWithoutSheetsMusicNestedInput, {nullable:true})
    file?: InstanceType<typeof FileStorageUpdateOneRequiredWithoutSheetsMusicNestedInput>;
}

@InputType()
export class SheetMusicUpsertWithWhereUniqueWithoutFileInput {
    @Field(() => SheetMusicWhereUniqueInput, {nullable:false})
    @Type(() => SheetMusicWhereUniqueInput)
    where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
    @Field(() => SheetMusicUpdateWithoutFileInput, {nullable:false})
    @Type(() => SheetMusicUpdateWithoutFileInput)
    update!: InstanceType<typeof SheetMusicUpdateWithoutFileInput>;
    @Field(() => SheetMusicCreateWithoutFileInput, {nullable:false})
    @Type(() => SheetMusicCreateWithoutFileInput)
    create!: InstanceType<typeof SheetMusicCreateWithoutFileInput>;
}

@InputType()
export class SheetMusicWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [SheetMusicWhereInput], {nullable:true})
    AND?: Array<SheetMusicWhereInput>;
    @Field(() => [SheetMusicWhereInput], {nullable:true})
    OR?: Array<SheetMusicWhereInput>;
    @Field(() => [SheetMusicWhereInput], {nullable:true})
    NOT?: Array<SheetMusicWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    composer?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    arranger?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    instrument?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    genre?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    difficulty?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    year?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    fileId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pdfUrl?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => FileStorageRelationFilter, {nullable:true})
    file?: InstanceType<typeof FileStorageRelationFilter>;
}

@InputType()
export class SheetMusicWhereInput {
    @Field(() => [SheetMusicWhereInput], {nullable:true})
    AND?: Array<SheetMusicWhereInput>;
    @Field(() => [SheetMusicWhereInput], {nullable:true})
    OR?: Array<SheetMusicWhereInput>;
    @Field(() => [SheetMusicWhereInput], {nullable:true})
    NOT?: Array<SheetMusicWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    composer?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    arranger?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    instrument?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    genre?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    difficulty?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    year?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    fileId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    pdfUrl?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => FileStorageRelationFilter, {nullable:true})
    file?: InstanceType<typeof FileStorageRelationFilter>;
}

@ObjectType()
export class SheetMusic {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    composer!: string;
    @Field(() => String, {nullable:true})
    arranger!: string | null;
    @Field(() => String, {nullable:false})
    instrument!: string;
    @Field(() => String, {nullable:false})
    genre!: string;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => String, {nullable:true})
    year!: string | null;
    @Field(() => String, {nullable:false})
    fileId!: string;
    @Field(() => String, {nullable:false})
    pdfUrl!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => FileStorage, {nullable:false})
    file?: InstanceType<typeof FileStorage>;
}

@ArgsType()
export class UpdateManySheetMusicArgs {
    @Field(() => SheetMusicUpdateManyMutationInput, {nullable:false})
    @Type(() => SheetMusicUpdateManyMutationInput)
    data!: InstanceType<typeof SheetMusicUpdateManyMutationInput>;
    @Field(() => SheetMusicWhereInput, {nullable:true})
    @Type(() => SheetMusicWhereInput)
    where?: InstanceType<typeof SheetMusicWhereInput>;
}

@ArgsType()
export class UpdateOneSheetMusicArgs {
    @Field(() => SheetMusicUpdateInput, {nullable:false})
    @Type(() => SheetMusicUpdateInput)
    data!: InstanceType<typeof SheetMusicUpdateInput>;
    @Field(() => SheetMusicWhereUniqueInput, {nullable:false})
    @Type(() => SheetMusicWhereUniqueInput)
    where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneSheetMusicArgs {
    @Field(() => SheetMusicWhereUniqueInput, {nullable:false})
    @Type(() => SheetMusicWhereUniqueInput)
    where!: Prisma.AtLeast<SheetMusicWhereUniqueInput, 'id'>;
    @Field(() => SheetMusicCreateInput, {nullable:false})
    @Type(() => SheetMusicCreateInput)
    create!: InstanceType<typeof SheetMusicCreateInput>;
    @Field(() => SheetMusicUpdateInput, {nullable:false})
    @Type(() => SheetMusicUpdateInput)
    update!: InstanceType<typeof SheetMusicUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    biography?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    phoneNumber!: number;
    @Field(() => Int, {nullable:false})
    password!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    biography!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    biography?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    AuthTokens?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:false})
    biography!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutAuthTokensInput {
    @Field(() => UserCreateWithoutAuthTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutAuthTokensInput)
    create?: InstanceType<typeof UserCreateWithoutAuthTokensInput>;
    @Field(() => UserCreateOrConnectWithoutAuthTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAuthTokensInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAuthTokensInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
}

@InputType()
export class UserCreateOrConnectWithoutAuthTokensInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
    @Field(() => UserCreateWithoutAuthTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutAuthTokensInput)
    create!: InstanceType<typeof UserCreateWithoutAuthTokensInput>;
}

@InputType()
export class UserCreateWithoutAuthTokensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:false})
    biography!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:false})
    biography!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => AuthTokenCreateNestedManyWithoutUserInput, {nullable:true})
    AuthTokens?: InstanceType<typeof AuthTokenCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:false})
    biography!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    biography?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    phoneNumber?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    biography?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    biography?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    biography?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    phoneNumber?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    biography?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    biography?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    biography?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    biography?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => AuthTokenOrderByRelationAggregateInput, {nullable:true})
    AuthTokens?: InstanceType<typeof AuthTokenOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phoneNumber?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    biography?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutAuthTokensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:false})
    biography!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:false})
    biography!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => AuthTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    AuthTokens?: InstanceType<typeof AuthTokenUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutAuthTokensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => AuthTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    AuthTokens?: InstanceType<typeof AuthTokenUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutAuthTokensNestedInput {
    @Field(() => UserCreateWithoutAuthTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutAuthTokensInput)
    create?: InstanceType<typeof UserCreateWithoutAuthTokensInput>;
    @Field(() => UserCreateOrConnectWithoutAuthTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAuthTokensInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAuthTokensInput>;
    @Field(() => UserUpsertWithoutAuthTokensInput, {nullable:true})
    @Type(() => UserUpsertWithoutAuthTokensInput)
    upsert?: InstanceType<typeof UserUpsertWithoutAuthTokensInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phoneNumber'>;
    @Field(() => UserUpdateToOneWithWhereWithoutAuthTokensInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAuthTokensInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAuthTokensInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutAuthTokensInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutAuthTokensInput, {nullable:false})
    @Type(() => UserUpdateWithoutAuthTokensInput)
    data!: InstanceType<typeof UserUpdateWithoutAuthTokensInput>;
}

@InputType()
export class UserUpdateWithoutAuthTokensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    biography?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => AuthTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    AuthTokens?: InstanceType<typeof AuthTokenUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithoutAuthTokensInput {
    @Field(() => UserUpdateWithoutAuthTokensInput, {nullable:false})
    @Type(() => UserUpdateWithoutAuthTokensInput)
    update!: InstanceType<typeof UserUpdateWithoutAuthTokensInput>;
    @Field(() => UserCreateWithoutAuthTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutAuthTokensInput)
    create!: InstanceType<typeof UserCreateWithoutAuthTokensInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    phoneNumber?: string;
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    biography?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => AuthTokenListRelationFilter, {nullable:true})
    AuthTokens?: InstanceType<typeof AuthTokenListRelationFilter>;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    biography?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => AuthTokenListRelationFilter, {nullable:true})
    AuthTokens?: InstanceType<typeof AuthTokenListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @Field(() => String, {nullable:false})
    biography!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [AuthToken], {nullable:true})
    AuthTokens?: Array<AuthToken>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}
