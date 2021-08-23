import {ArgsType} from "@nestjs/graphql"
import {IsString} from "class-validator"

@ArgsType()
export class CreateUserArgs {
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

  /**
   * The user's password.
   */
  @IsString()
  password!: string
}
