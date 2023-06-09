import { z } from "zod"

import { messages } from "@/messages"

export const userSchema = z.object({
	email: z
		.string()
		.min(1, { message: messages.register.master.validation.email.min })
		.email("ایمیل نامعتبر است"),
	password: z
		.string()
		.min(1, { message: messages.register.master.validation.password.min }),
})

export type User = z.infer<typeof userSchema>
