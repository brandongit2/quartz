import {ArgsType} from "@nestjs/graphql"
import {IsString} from "class-validator"

@ArgsType()
export class SignInInput {
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
