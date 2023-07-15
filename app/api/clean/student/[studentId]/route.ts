import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";

export const DELETE = async (
	_request: NextRequest,
	{ params }: { params: { studentId: string } }
) => {
	const studentId = params.studentId;

	const studentExist = await db.student.findFirst({
		where: {
			id: studentId,
		},
	});

	if (studentExist) {
		await db.student.delete({
			where: {
				id: studentId,
			},
		});
	}

	return NextResponse.json({
		message: "clean student",
	});
};
