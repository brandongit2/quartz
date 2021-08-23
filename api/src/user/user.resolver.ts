import {UseGuards} from "@nestjs/common"
import {Args, Mutation, Query, Resolver} from "@nestjs/graphql"

import {AuthGuard} from "#/auth/auth.guard"
import {UpdateUserArgs} from "./dto/updateUser.input"
import {CurrentUser} from "./user.decorator"
import {User} from "./user.entity"
import {UserService} from "./user.service"

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  @UseGuards(AuthGuard)
  user(@CurrentUser() user: User) {
    return user
  }

  @Mutation(() => User)
  updateUser(@Args() updateUserArgs: UpdateUserArgs) {
    return this.userService.update(updateUserArgs.id, updateUserArgs)
  }

  @Mutation(() => User)
  removeUser(@Args(`id`) id: string) {
    return this.userService.remove(id)
  }
}
