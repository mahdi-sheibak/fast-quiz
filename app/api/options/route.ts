import { NextResponse } from "next/server"

import { db } from "@/lib/db"

export const GET = async () => {
	const options = await db.option.findMany()

	return NextResponse.json({ options })
}
