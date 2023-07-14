import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";

interface Params {
	studentId: string;
}

export const GET = async (
	_request: NextRequest,
	{ params }: { params: Params }
) => {
	const { studentId } = params;

	const student = await db.student.findFirst({
		where: {
			id: studentId,
		},
		include: {
			lessons: true,
		},
	});

	return NextResponse.json({
		status: 200,
		student,
	});
};
