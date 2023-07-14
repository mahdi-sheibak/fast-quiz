import { z } from "zod";

import { api } from "./api";
import { validation } from "@/locals";

export const studentSchema = z.object({
	fullName: z
		.string({
			required_error: validation.required,
		})
		.nonempty(validation.required),
	university: z
		.string({
			required_error: validation.required,
		})
		.nonempty(),
	email: z
		.string({
			required_error: validation.required,
		})
		.nonempty(validation.required)
		.email(validation.email.wrong),
	password: z
		.string({
			required_error: validation.required,
		})
		.nonempty(validation.required),
});

export type Student = z.infer<typeof studentSchema>;

export const createStudent = (student: Student) => {
	return api
		.post("register/student", {
			json: student,
		})
		.json();
};
