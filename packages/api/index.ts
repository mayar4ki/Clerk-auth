import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";

import { type AppRouter } from "./src/_app";

export { appRouter, type AppRouter } from "./src/_app";
export { createExpressContext, createNextContext } from "./src/contexts/createContext";

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;