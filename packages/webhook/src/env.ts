import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    WEBHOOK_SECRET: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    WEBHOOK_SECRET: process.env.WEBHOOK_SECRET,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
