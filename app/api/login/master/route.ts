import { NextRequest, NextResponse } from "next/server";
import _isEmpty from "lodash/isEmpty";

import { db } from "@/lib/db";
import { messages } from "@/messages";
import { z } from "zod";

const loginSchema = z.object({
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

export type Master = z.infer<typeof loginSchema>;

export const POST = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const validateMaster = loginSchema.parse(body);
		const user = await db.master.findFirst({
			where: {
				email: {
					equals: validateMaster.email,
				},
				password: {
					equals: validateMaster.password,
				},
			},
		});

		return NextResponse.json({
			status: "success",
			user,
		});
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: _isEmpty(e) ? "body not found" : e,
		});
	}
};
