import { NextRequest, NextResponse } from "next/server";

import _isEmpty from "lodash/isEmpty";

import { db } from "@/lib/db";
import { masterSchema } from "@/services/master";

export const POST = async (request: NextRequest) => {
	try {
		const body = await request.json();
		const validateMaster = masterSchema.parse(body);
		const master = await db.master.create({
			data: validateMaster,
		});

		return NextResponse.json({
			status: "success",
			master,
		});
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: _isEmpty(e) ? "body not found" : e,
		});
	}
};
