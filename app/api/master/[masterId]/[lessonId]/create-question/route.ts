import { NextRequest, NextResponse } from "next/server";
import isEmpty from "lodash/isEmpty";

import { questionSchema } from "@/services/question";
import { createQuestionAction } from "@/actions/question";

interface Params {
	masterId: string;
	lessonId: string;
}

export const POST = async (
	request: NextRequest,
	{ params }: { params: Params }
) => {
	try {
		const { masterId, lessonId } = params;

		const body = await request.json();

		const validateData = questionSchema.parse(body);

		const lessonQuestion = await createQuestionAction(
			validateData,
			masterId,
			lessonId
		);

		return NextResponse.json({
			status: 200,
			question: lessonQuestion,
		});
	} catch (e) {
		return NextResponse.json({
			status: "Error",
			error: isEmpty(e) ? "body not found" : e,
		});
	}
};
