import * as z from "zod"

export const masterSchema = z.object({
  fullName: z.string().min(1, { message: "نام و نام خانوادگی اجباری است" }),
  university: z.string().min(1, { message: "نام دانشگاه اجباری است" }),
  email: z.string().min(1, { message: "ایمیل اجباری است" }),
  password: z.string().min(1, { message: "رمز عبور اجباری است" }),
})

export type Master = z.infer<typeof masterSchema>
