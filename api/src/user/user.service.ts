import {InjectKnex} from "@brandonnpm2/nestjs-knex"
import {Injectable} from "@nestjs/common"
import {Knex} from "knex"
import {v4} from "uuid"

import {User, UserWithPassword} from "./user.entity"

@Injectable()
export class UserService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(firstName: string, lastName: string, email: string, password: string): Promise<User> {
    const userId = v4()

    const user = {
      id: userId,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    }
    await this.knex.table<User>(`users`).insert(user)

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    }
  }

  async findOneById(id: string): Promise<User> {
    const dbRes = await this.knex.table<User>(`users`).first(`*`).where({id})
    return {
      id: dbRes!.id,
      firstName: dbRes!.firstName,
      lastName: dbRes!.lastName,
      email: dbRes!.email,
    }
  }

  // Used only to validate a user by email and password. For any other use, use `findOneById`.
  async findOneByEmail(email: string): Promise<UserWithPassword> {
    const dbRes = await this.knex.table<UserWithPassword>(`users`).first(`*`).where({email})
    return dbRes!
  }
}
