import {ArgsType, PartialType} from "@nestjs/graphql"
import {IsString} from "class-validator"

import {CreateUserArgs} from "./createUser.input"

@ArgsType()
export class UpdateUserArgs extends PartialType(CreateUserArgs) {
  /**
   * The ID of the user.
   */
  @IsString()
  id!: string

  /**
   * The user's first name.
   */
  @IsString()
  firstName!: string

  /**
   * The user's last name.
   */
  @IsString()
  lastName!: string

  /**
   * The user's email address.
   */
  @IsString()
  email!: string
}
