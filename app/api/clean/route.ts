import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export const DELETE = async () => {
	await db.master.deleteMany();
	await db.student.deleteMany();
	await db.lesson.deleteMany();
	await db.question.deleteMany();
	await db.option.deleteMany();

	return NextResponse.json({
		message: "clean database",
	});
};

export const GET = () => {
	return NextResponse.json({
		message: "this api doe's not exist",
	});
};
