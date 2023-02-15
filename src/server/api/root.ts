import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { goalsCRUDRouter } from "./routers/goals";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  goalsCrud: goalsCRUDRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
