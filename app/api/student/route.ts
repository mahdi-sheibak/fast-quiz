import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import isEmpty from "lodash/isEmpty";

import { db } from "@/lib/db";

const studentSchema = z.object({
	email: z.string().nonempty().email(),
	fullName: z.string().nonempty(),
	password: z.string().nonempty(),
	university: z.string().nonempty(),
});

export const POST = async (request: NextRequest) => {
	try {
		const studentBody = await request.json();
		const validateStudent = studentSchema.parse(studentBody);

		const student = await db.student.create({
			data: validateStudent,
		});

		return NextResponse.json({
			status: 200,
			student,
		});
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: isEmpty(e) ? "body not found" : e,
		});
	}
};

export const GET = async () => {
	const students = await db.student.findMany({
		include: {
			lessons: true,
		},
	});

	return NextResponse.json({
		status: 200,
		students,
	});
};
