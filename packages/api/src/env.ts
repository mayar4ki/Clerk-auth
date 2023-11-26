import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CLERK_SUPER_ADMIN_ORG_ID: z.string().min(1),
    WEBHOOK_SECRET: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    CLERK_SUPER_ADMIN_ORG_ID: process.env.CLERK_SUPER_ADMIN_ORG_ID,
    WEBHOOK_SECRET: process.env.WEBHOOK_SECRET,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
