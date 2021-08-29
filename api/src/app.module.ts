import {Module} from "@nestjs/common"
import {ConfigModule} from "@nestjs/config"
import {GraphQLModule} from "@nestjs/graphql"
import path from "path"

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
      context: ({request, reply}) => ({request, reply}),
      cors: {
        origin: [`http://localhost:3000`, `https://studio.apollographql.com`],
        credentials: true,
      },
    }),
  ],
  providers: [UuidScalar],
})
export class AppModule {}
