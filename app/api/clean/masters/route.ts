import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export const GET = async () => {
	await db.master.deleteMany();

	return NextResponse.json({
		message: "clean masters as database",
	});
};
