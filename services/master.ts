import { z } from "zod";

import { api } from "./api";
import { validation } from "@/locals";

export const masterSchema = z.object({
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

export type Master = z.infer<typeof masterSchema>;

export const createMaster = (master: Master) => {
	return api
		.post("register/master/master", {
			json: master,
		})
		.json();
};
