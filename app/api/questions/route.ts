import { NextResponse } from "next/server"

import { db } from "@/lib/db"

export const GET = async () => {
	const questions = await db.question.findMany()
	return NextResponse.json({ questions })
}
