import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";

interface Params {
	masterId: string;
	lessonId: string;
}

export const GET = async (
	request: NextRequest,
	{ params }: { params: Params }
) => {
	const { masterId, lessonId } = params;

	const questions = await db.question.findMany({
		where: {
			masterId,
			lessonId,
		},
		include: {
			options: true,
		},
	});

	return NextResponse.json({
		status: 200,
		questions,
	});
};
