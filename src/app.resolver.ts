import { Query, Resolver } from '@nestjs/graphql';
import { User } from './types/@generated';

@Resolver(() => User)
export class AppResolver {
  @Query(() => String, { nullable: false })
  workingStatus() {
    return 'Working';
  }
}
