import {KnexModule} from "@brandonnpm2/nestjs-knex"
import {RedisModule} from "@brandonnpm2/nestjs-redis"
import {Module} from "@nestjs/common"
import {ConfigModule, ConfigService} from "@nestjs/config"
import {GraphQLModule} from "@nestjs/graphql"
import IORedis from "ioredis"
import {Knex} from "knex"
import path from "path"

import {AuthModule} from "src/auth/auth.module"
import {UserModule} from "src/user/user.module"

import {UuidScalar} from "./uuid.scalar"

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(process.cwd(), `.env`),
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: path.resolve(process.cwd(), `schema.gql`),
      sortSchema: true,
      cors: {
        origin: [`http://localhost:3000`, `https://studio.apollographql.com`],
        credentials: true,
      },
    }),
    KnexModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        const knexConfig: Knex.Config = {
          client: `pg`,
          connection: {
            host: configService.get<string>(`POSTGRES_HOSTNAME`),
            port: configService.get<number>(`POSTGRES_PORT`),
            user: configService.get<string>(`POSTGRES_USER`),
            database: configService.get<string>(`POSTGRES_DB_NAME`),
            password: configService.get<string>(`POSTGRES_PASSWORD`),
          },
        }
        return knexConfig
      },
      inject: [ConfigService],
    }),
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
