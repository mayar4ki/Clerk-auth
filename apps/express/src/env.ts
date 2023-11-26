import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    EXPRESS_PORT: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    EXPRESS_PORT: process.env.EXPRESS_PORT,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
