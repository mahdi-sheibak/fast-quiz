import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import isEmpty from "lodash/isEmpty";

import { db } from "@/lib/db";

interface Params {
	masterId: string;
}

const createLessonSchema = z.object({
	name: z.string().nonempty(),
});

export const POST = async (
	request: NextRequest,
	{ params }: { params: Params }
) => {
	try {
		const masterId = params.masterId;

		const body = await request.json();
		const validateData = createLessonSchema.parse(body);

		const lesson = await db.lesson.create({
			data: {
				name: validateData.name,
				masterId,
			},
		});

		return NextResponse.json({
			status: 200,
			lesson,
		});
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: isEmpty(e) ? "body not found" : e,
		});
	}
};
