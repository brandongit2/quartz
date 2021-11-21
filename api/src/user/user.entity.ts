import {ObjectType} from "@nestjs/graphql"

@ObjectType()
export class User {
  id!: string
  firstName!: string
  lastName!: string
  email!: string
}

export class UserWithPassword extends User {
  password!: string
}
