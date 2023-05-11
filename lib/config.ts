import { z } from "zod";

const Config = z.object({
	databaseUrl: z.string().url().optional(),
	baseApiUrl: z.string().url().optional(),
});

export type Config = z.infer<typeof Config>;

export const config = Config.parse({
	databaseUrl: process.env.DATABASE_URL,
	baseApiUrl: process.env.BASE_API_URL,
} satisfies Config);
