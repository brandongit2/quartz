import {Field, ObjectType} from "@nestjs/graphql"

import {UuidScalar} from "src/uuid.scalar"

@ObjectType()
export class User {
  @Field(() => UuidScalar)
  id!: string
  firstName!: string
  lastName!: string
  email!: string
}

export class UserWithPassword extends User {
  password!: string
}
