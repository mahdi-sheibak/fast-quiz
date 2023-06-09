import { NextRequest, NextResponse } from "next/server"
import _ from "lodash"

import "zod"

import { db } from "@/lib/db"
import { questionSchema } from "@/services/question"

export const POST = async (request: NextRequest) => {
	try {
		const body = await request.json()

		const validateQuestion = questionSchema.parse(body)

		const option1 = await db.option.create({
			data: { text: validateQuestion.option1 },
		})

		const option2 = await db.option.create({
			data: { text: validateQuestion.option2 },
		})

		const option3 = await db.option.create({
			data: { text: validateQuestion.option3 },
		})

		const option4 = await db.option.create({
			data: { text: validateQuestion.option4 },
		})

		await db.question.create({
			data: {
				text: validateQuestion.text,
				options: {
					connect: [
						{ id: option1.id },
						{ id: option2.id },
						{ id: option3.id },
						{ id: option4.id },
					],
				},
				answererId: option1.id,
			},
		})

		return NextResponse.json({
			status: 200,
			message: "Question Created",
		})
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: _.isEmpty(e) ? "body not found" : e,
		})
	}
}
