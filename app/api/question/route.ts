import { NextRequest, NextResponse } from "next/server";
import _isEmpty from "lodash/isEmpty";

import { createQuestionAction } from "@/actions/question";
import { questionSchema } from "@/services/question";
import { db } from "@/lib/db";

export const POST = async (request: NextRequest) => {
	try {
		const body = await request.json();

		const validateQuestion = questionSchema.parse(body);

		// cspell:ignore clhku1esr0000vbh2g05v7fbg
		await createQuestionAction(
			validateQuestion,
			validateQuestion.masterId,
			"clhku1esr0000vbh2g05v7fbg"
		);

		return NextResponse.json({
			status: 200,
			message: "Question Created",
		});
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: _isEmpty(e) ? "body not found" : e,
		});
	}
};

export const GET = async () => {
	const questions = await db.question.findMany({
		include: {
			options: true,
		},
	});

	return NextResponse.json({
		status: 200,
		questions,
	});
};
