import { AppService } from './app.service';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from './types/@generated';

@Resolver(() => User)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Query(() => [User], { nullable: false })
  getData() {
    console.log('sdfsdf asdasda sdfsdf');
    return this.appService.getData();
  }
}
