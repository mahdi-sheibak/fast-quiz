import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export const DELETE = async () => {
	await db.question.deleteMany();
	await db.option.deleteMany();

	return NextResponse.json({
		message: "clean questions and options as database",
	});
};
