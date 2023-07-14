import { NextRequest, NextResponse } from "next/server";
import isEmpty from "lodash/isEmpty";

import { db } from "@/lib/db";
import { createMasterAction } from "@/actions/master";
import { masterSchema } from "@/services/master";

export const POST = async (request: NextRequest) => {
	try {
		const masterBody = await request.json();
		const validateMaster = masterSchema.parse(masterBody);

		const master = await createMasterAction(validateMaster);

		return NextResponse.json({
			status: 200,
			master,
		});
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: isEmpty(e) ? "body not found" : e,
		});
	}
};

export const GET = async () => {
	const masters = await db.master.findMany({
		include: {
			lessons: true,
		},
	});

	return NextResponse.json({
		status: 200,
		masters,
	});
};
