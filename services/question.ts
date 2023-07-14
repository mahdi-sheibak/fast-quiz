import { z } from "zod";

import { validation } from "@/locals";

export const questionSchema = z.object({
	text: z
		.string({
			required_error: validation.required,
		})
		.nonempty(validation.required),
	correctOption: z
		.string({
			required_error: validation.required,
		})
		.nonempty(validation.required),
	option1: z
		.string({
			required_error: validation.required,
		})
		.nonempty(validation.required),
	option2: z
		.string({
			required_error: validation.required,
		})
		.nonempty(validation.required),
	option3: z
		.string({
			required_error: validation.required,
		})
		.nonempty(validation.required),
	masterId: z
		.string({
			required_error: validation.required,
		})
		.nonempty(validation.required),
});

export type Question = z.infer<typeof questionSchema>;
