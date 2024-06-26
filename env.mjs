import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // Environment variables available on the server.
  // 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
  server: {
    DATABASE_URL: z.string().url().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
    GENERATED_BY_API_KEY: z.string().optional(),
    OPENAI_API_KEY: z.string().optional(),
    REPLICATE_API_TOKEN: z.string().optional(),
    STRIPE_API_KEY: z.string().optional(),
    STRIPE_WEBHOOK_SECRET: z.string().optional(),
  },
  // Environment variables available on the client.
  // 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().min(1),
    NEXT_PUBLIC_CRISP_WEBSITE_ID: z.string().optional(),
    NEXT_PUBLIC_STRIPE_PAYMENT_PAGE_URL: z.string().optional(),
  },
  // Environment variables available on both the server and the client.
  // 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    GENERATED_BY_API_KEY: process.env.GENERATED_BY_API_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CRISP_WEBSITE_ID: process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID,
    NEXT_PUBLIC_STRIPE_PAYMENT_PAGE_URL:
      process.env.NEXT_PUBLIC_STRIPE_PAYMENT_PAGE_URL,
  },
});
