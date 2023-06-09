import { NextResponse } from "next/server"

export const POST = () => {
	return NextResponse.json({
		status: 200,
		message: "message",
	})
}
