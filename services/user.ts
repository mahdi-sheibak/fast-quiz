import { z } from "zod";

import { validation } from "@/locals";

export const userSchema = z.object({
	email: z
		.string()
		.nonempty(validation.email.require)
		.email(validation.email.wrong),
	password: z.string().nonempty(validation.password.require),
});

export type User = z.infer<typeof userSchema>;
