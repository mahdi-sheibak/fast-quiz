import { NextResponse } from "next/server"

import { db } from "@/lib/db"

export const GET = async () => {
	try {
		const masters = await db.master.findMany()
		return NextResponse.json({
			status: "Masters",
			masters,
		})
	} catch (error) {
		return NextResponse.json({
			status: "Error Masters",
			error,
		})
	}
}
