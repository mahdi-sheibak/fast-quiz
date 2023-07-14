import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import isEmpty from "lodash/isEmpty";

import { db } from "@/lib/db";

const masterSchema = z.object({
	email: z.string().nonempty().email(),
	fullName: z.string().nonempty(),
	password: z.string().nonempty(),
	university: z.string().nonempty(),
});

export const POST = async (request: NextRequest) => {
	try {
		const masterBody = await request.json();
		const validateMaster = masterSchema.parse(masterBody);

		const master = await db.master.create({
			data: validateMaster,
		});

		return NextResponse.json({
			status: 200,
			master,
		});
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: isEmpty(e) ? "body not found" : e,
		});
	}
};

export const GET = async () => {
	const masters = await db.master.findMany({
		include: {
			lessons: true,
		},
	});

	return NextResponse.json({
		status: 200,
		masters,
	});
};
