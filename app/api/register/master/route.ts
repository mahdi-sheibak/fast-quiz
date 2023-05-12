import { NextRequest, NextResponse } from "next/server"
import { masterSchema } from "@/services/master"
import { z } from "zod"

import { db } from "@/lib/db"

const resolveSchemaError = (errors: z.ZodError) => {
	return errors.issues.map((issue) => ({
		felid: issue.path.join("."),
		message: issue.message,
	}))
}

export const POST = async (request: NextRequest) => {
	let body = null

	try {
		body = await request.json()
	} catch (e) {
		body = null
	}

	try {
		const validateMaster = masterSchema.parse(body)
		const master = await db.master.create({
			data: validateMaster,
		})

		return NextResponse.json({
			status: "success",
			master,
		})
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: resolveSchemaError(e as z.ZodError),
		})
	}
}
