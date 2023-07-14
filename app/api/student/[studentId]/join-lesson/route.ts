import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import isEmpty from "lodash/isEmpty";

import { db } from "@/lib/db";

interface Params {
	studentId: string;
}

const schema = z.object({
	lessonId: z.string().nonempty(),
});

export const POST = async (
	request: NextRequest,
	{ params }: { params: Params }
) => {
	try {
		const { studentId } = params;

		const body = await request.json();
		const validateData = schema.parse(body);

		const updatedLesson = await db.lesson.update({
			where: {
				id: validateData.lessonId,
			},
			data: {
				students: {
					connect: {
						id: studentId,
					},
				},
			},
			include: {
				students: true,
			},
		});

		return NextResponse.json({
			status: 200,
			lesson: updatedLesson,
		});
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: isEmpty(e) ? "body not found" : e,
		});
	}
};
