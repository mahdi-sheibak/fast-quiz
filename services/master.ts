import * as z from "zod";

import { messages } from "@/messages";
import { api } from "./api";

export const masterSchema = z.object({
	fullName: z
		.string({
			required_error: messages.register.master.validation.fullName.require,
		})
		.nonempty(messages.register.master.validation.fullName.require),
	university: z
		.string({
			required_error: messages.register.master.validation.university.require,
		})
		.nonempty(),
	email: z
		.string({
			required_error: messages.register.master.validation.email.require,
		})
		.nonempty(messages.register.master.validation.email.require)
		.email("ایمیل نامعتبر است"),
	password: z
		.string({
			required_error: messages.register.master.validation.password.require,
		})
		.nonempty(messages.register.master.validation.password.require),
});

export type Master = z.infer<typeof masterSchema>;

export const createMaster = (master: Master) => {
	return api
		.post("register/master", {
			json: master,
		})
		.json();
};
