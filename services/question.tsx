import * as z from "zod"

export const questionSchema = z.object({
	text: z.string().min(1),
	option1: z.string().min(1),
	option2: z.string().min(1),
	option3: z.string().min(1),
	option4: z.string().min(1),
})

export type Question = z.infer<typeof questionSchema>
