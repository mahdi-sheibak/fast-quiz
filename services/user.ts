import { z } from "zod";

import { validation } from "@/locals";

export const userSchema = z.object({
	email: z.string().nonempty(validation.required).email(validation.email.wrong),
	password: z.string().nonempty(validation.required),
});

export type User = z.infer<typeof userSchema>;
