import { NextRequest, NextResponse } from "next/server";
import _isEmpty from "lodash/isEmpty";

import { db } from "@/lib/db";
import { validation } from "@/locals";
import { z } from "zod";

const loginSchema = z.object({
	email: z
		.string({
			required_error: validation.required,
		})
		.nonempty(validation.required)
		.email("ایمیل نامعتبر است"),
	password: z
		.string({
			required_error: validation.required,
		})
		.nonempty(validation.required),
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
