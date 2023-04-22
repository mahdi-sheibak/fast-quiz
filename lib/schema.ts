import * as z from "zod"

export const masterSchema = z.object({
  email: z.string().email(),
  fullName: z.string(),
  password: z.string(),
  university: z.string(),
})
