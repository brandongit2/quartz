import {RedisModule} from "@brandonnpm2/nestjs-redis"
import {Module} from "@nestjs/common"
import {ConfigModule, ConfigService} from "@nestjs/config"
import {GraphQLModule} from "@nestjs/graphql"
import IORedis from "ioredis"
import path from "path"

import {UuidScalar} from "./uuid.scalar"
import {AuthModule} from "src/auth/auth.module"
import {PrismaModule} from "src/prisma/prisma.module"
import {UserModule} from "src/user/user.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(process.cwd(), `.env`),
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: path.resolve(process.cwd(), `schema.gql`),
      sortSchema: true,
      context: ({request, reply}) => ({request, reply}),
      cors: {
        origin: [`http://localhost:3000`, `https://studio.apollographql.com`],
        credentials: true,
      },
    }),
    PrismaModule,
    RedisModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        const redisOptions: IORedis.RedisOptions = {
          host: configService.get<string>(`REDIS_HOSTNAME`),
          port: configService.get<number>(`REDIS_PORT`),
        }
        return redisOptions
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
  ],
  providers: [UuidScalar],
})
export class AppModule {}
