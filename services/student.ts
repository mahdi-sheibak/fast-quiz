import { z } from "zod";

import { api } from "./api";
import { validation } from "@/locals";

export const studentSchema = z.object({
	fullName: z
		.string({
			required_error: validation.fullName.require,
		})
		.nonempty(validation.fullName.require),
	university: z
		.string({
			required_error: validation.university.require,
		})
		.nonempty(),
	email: z
		.string({
			required_error: validation.email.require,
		})
		.nonempty(validation.email.require)
		.email(validation.email.wrong),
	password: z
		.string({
			required_error: validation.password.require,
		})
		.nonempty(validation.password.require),
});

export type Student = z.infer<typeof studentSchema>;

export const createStudent = (student: Student) => {
	return api
		.post("register/student", {
			json: student,
		})
		.json();
};
