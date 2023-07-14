import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import _isEmpty from "lodash/isEmpty";

import { db } from "@/lib/db";

const lessenSchema = z.object({
	name: z.string().nonempty(),
	masterId: z.string().nonempty(),
});

export const POST = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const validateLessen = lessenSchema.parse(body);
		const lesson = await db.lesson.create({
			data: validateLessen,
		});

		return NextResponse.json({
			status: "success",
			lesson,
		});
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: _isEmpty(e) ? "body not found" : e,
		});
	}
};

export const GET = async () => {
	const lessons = await db.lesson.findMany({
		include: {
			master: true,
			students: true,
			questions: true,
		},
	});

	return NextResponse.json({
		status: 200,
		lessons,
	});
};
