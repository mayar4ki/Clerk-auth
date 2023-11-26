import { authRouter } from "./routers/auth/auth.router";
import { taskRouter } from "./routers/task/task.router";
import { publicProcedure, router } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = router({
  health: publicProcedure.query(({ ctx }) => ({ message: "I'm Working Fine Fella." + ctx.auth.userId, })),
  task: taskRouter,
  auth: authRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
