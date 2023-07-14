import { z } from "zod";

import { validation } from "@/locals";

export const lessonSchema = z.object({
	name: z
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

export type Lesson = z.infer<typeof lessonSchema>;
