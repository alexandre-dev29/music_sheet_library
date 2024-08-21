import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './types/@generated';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';
import path from 'path';
import { DocumentsService } from '@/music_sheet/documents/documents.service';
import { userStub } from '@/music_sheet/auth/Tests/stubs/userStub';

@Resolver(() => User)
export class AppResolver {
  constructor(private readonly documentService: DocumentsService) {}

  @Query(() => String, { nullable: false })
  workingStatus() {
    return 'Working';
  }

  @Mutation(() => User)
  async uploadFile(
    @Args({ name: 'files', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<User> {
    const fileUpload = await file;
    const response = await this.documentService.uploadSingleFile(fileUpload);

    console.log(response);
    return userStub();
  }
}
