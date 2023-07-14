import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Params {
	masterId: string;
}

export const GET = async (
	_request: NextRequest,
	{ params }: { params: Params }
) => {
	const masterId = params.masterId;

	const master = await db.master.findFirst({
		where: {
			id: masterId,
		},
	});

	const masterLessons = await db.lesson.findMany({
		where: {
			masterId: masterId,
		},
	});

	return NextResponse.json({
		status: 200,
		master: {
			...master,
			lessons: masterLessons,
		},
	});
};
