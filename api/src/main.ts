import {ValidationPipe} from "@nestjs/common"
import {NestFactory} from "@nestjs/core"
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify"
import dotenv from "dotenv"
import fastifyCookie from "fastify-cookie"
import fastifyHelmet from "fastify-helmet"
import path from "path"

import {AppModule} from "./app.module"

dotenv.config({path: path.resolve(process.cwd(), `.env`)})
//
;(async () => {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
  app.register(fastifyCookie)
  app.register(fastifyHelmet)
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.API_PORT!)
})()
