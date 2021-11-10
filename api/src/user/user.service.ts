import {Injectable} from "@nestjs/common"
import {User} from "@prisma/client"
import bcrypt from "bcrypt"
import {v4} from "uuid"

import {PrismaService} from "src/prisma/prisma.service"

export type SanitizedUser = Omit<User, `passwordHash` | `passwordResetHash`>

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(firstName: string, lastName: string, email: string, password: string): Promise<User> {
    const userId = v4()

    const user = await this.prisma.user.create({
      data: {
        id: userId,
        email: email,
        firstName: firstName,
        lastName: lastName,
        passwordHash: bcrypt.hashSync(password, 10),
      },
    })

    return user
  }

  async findOneById(id: string): Promise<SanitizedUser | null> {
    const user = await this.prisma.user.findUnique({where: {id}})
    return user && this.sanitizeUser(user)
  }

  // Used only to validate a user by email and password. For any other use, use `findOneById`.
  async findOneByEmail(email: string): Promise<User> {
    const dbRes = await this.prisma.user.findUnique({where: {email}})
    return dbRes!
  }

  sanitizeUser(user: User): SanitizedUser {
    const {passwordHash, passwordResetHash, ...userWithoutSensitiveData} = user
    return userWithoutSensitiveData
  }
}
