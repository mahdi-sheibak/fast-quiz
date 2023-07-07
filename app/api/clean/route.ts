import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export const DELETE = async () => {
	console.log("clean a data");

	await db.master.deleteMany();
	await db.question.deleteMany();
	await db.option.deleteMany();

	NextResponse.json({
		message: "clean database",
	});
};
