import {UseGuards} from "@nestjs/common"
import {Query, Resolver} from "@nestjs/graphql"

import {CurrentUser} from "./user.decorator"
import {User} from "./user.entity"
import {AuthGuard} from "src/auth/auth.guard"

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  @UseGuards(AuthGuard)
  user(@CurrentUser() user: User): User {
    return user
  }
}
