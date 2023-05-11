import * as z from "zod";

import { api } from "./api";
import { messages } from "@/messages";

export const masterSchema = z.object({
	fullName: z
		.string()
		.min(1, { message: messages.register.master.validation.fullName.min }),
	university: z
		.string()
		.min(1, { message: messages.register.master.validation.fullName.min }),
	email: z
		.string()
		.min(1, { message: messages.register.master.validation.email.min }),
	password: z
		.string()
		.min(1, { message: messages.register.master.validation.password.min }),
});

export type Master = z.infer<typeof masterSchema>;

export const createMaster = (master: Master) => {
	return api
		.post("register/master", {
			json: master,
		})
		.json();
};
