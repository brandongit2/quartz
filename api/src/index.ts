import * as trpc from "@trpc/server"

const appRouter = trpc.router()

export type AppRouter = typeof appRouter
