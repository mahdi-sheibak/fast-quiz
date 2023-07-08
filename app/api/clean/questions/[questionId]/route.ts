import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";

export const GET = async (
	_request: NextRequest,
	{ params }: { params: { questionId: string } }
) => {
	const questionId = params.questionId;

	const questionExist = await db.question.findFirst({
		where: {
			id: questionId,
		},
	});

	if (questionExist) {
		await db.question.delete({
			where: {
				id: questionId,
			},
		});
	}

	return NextResponse.json({
		message: "clean question",
	});
};
