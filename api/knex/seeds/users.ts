import {Knex} from "knex"

import users from "../seedData/users.json"
import {User} from "src/user/user.entity"

export async function seed(knex: Knex): Promise<void> {
  await knex.table(`users`).del()

  await knex.table<User>(`users`).insert(users)
}
