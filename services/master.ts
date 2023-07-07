import * as z from "zod";

import { messages } from "@/messages";
import { api } from "./api";

export const masterSchema = z.object({
	fullName: z
		.string()
		.min(1, { message: messages.register.master.validation.fullName.min }),
	university: z
		.string()
		.min(1, { message: messages.register.master.validation.fullName.min }),
	email: z
		.string()
		.min(1, { message: messages.register.master.validation.email.min })
		.email("ایمیل نامعتبر است"),
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
