import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";

export const DELETE = async (
	_request: NextRequest,
	{ params }: { params: { masterId: string } }
) => {
	const masterId = params.masterId;

	const masterExist = await db.master.findFirst({
		where: {
			id: masterId,
		},
	});

	if (masterExist) {
		await db.master.delete({
			where: {
				id: masterId,
			},
		});
	}

	return NextResponse.json({
		message: "clean master",
	});
};
