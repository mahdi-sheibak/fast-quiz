import { NextRequest, NextResponse } from "next/server"
import _ from "lodash"

import { db } from "@/lib/db"
import { masterSchema } from "@/services/master"

export const POST = async (request: NextRequest) => {
	try {
		const body = await request.json()
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
			error: _.isEmpty(e) ? "body not found" : e,
		})
	}
}
