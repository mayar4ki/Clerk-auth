import { initTRPC } from "@trpc/server";
import superjson from 'superjson';
import { ZodError } from "zod";
import { type createNextContext } from "./contexts/createContext";
import { enforceUserIsAuthed } from "./middlewares/enforceUserIsAuthed";


const t = initTRPC.context<typeof createNextContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },

});


export const router = t.router;

const middleware = t.middleware
export type Middleware = typeof middleware;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed(middleware));
