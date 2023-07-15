import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export const DELETE = async () => {
	await db.student.deleteMany();

	return NextResponse.json({
		message: "clean students as database",
	});
};
