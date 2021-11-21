import {InjectRedis} from "@brandonnpm2/nestjs-redis"
import {Injectable, UnauthorizedException} from "@nestjs/common"
import bcrypt from "bcrypt"
import {Redis} from "ioredis"
import {nanoid} from "nanoid"

import {User} from "src/user/user.entity"
import {UserService} from "src/user/user.service"

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, @InjectRedis() private readonly redis: Redis) {}

  async validateUserLocal(email: string, password: string): Promise<User> {
    const user = await this.userService.findOneByEmail(email)
    if (!user) throw new UnauthorizedException()

    if (user.passwordHash && bcrypt.compareSync(password, user.passwordHash)) {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }
    } else {
      throw new UnauthorizedException()
    }
  }

  async genSessionToken(userId: string, sessionId?: string): Promise<{sessionId: string; token: string}> {
    const token = nanoid()
    const encryptedToken = bcrypt.hashSync(token, 10)

    if (!sessionId) sessionId = nanoid()

    await Promise.all([
      this.redis.hset(`sess:${sessionId}`, `userId`, userId),
      this.redis.hset(`sess:${sessionId}`, `token`, encryptedToken),
    ])

    return {sessionId, token}
  }

  async removeToken(sessionId: string): Promise<void> {
    await this.redis.del(`sess:${sessionId}`)
  }
}
