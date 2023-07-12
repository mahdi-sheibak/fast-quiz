import { z } from "zod";

import { messages } from "@/messages";

export const userSchema = z.object({
	email: z
		.string()
		.nonempty(messages.register.master.validation.email.require)
		.email("ایمیل نامعتبر است"),
	password: z
		.string()
		.nonempty(messages.register.master.validation.password.require),
});

export type User = z.infer<typeof userSchema>;
