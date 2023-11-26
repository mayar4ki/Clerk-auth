import { TRPCError } from "@trpc/server";
import type { Middleware } from "../trpc";


export const enforceUserIsAuthed = (middleware: Middleware) => middleware(({ ctx, next }) => {
    if (!ctx.auth.userId) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" });
    }

    return next({
        ctx: {
            auth: ctx.auth,
        },
    });
});