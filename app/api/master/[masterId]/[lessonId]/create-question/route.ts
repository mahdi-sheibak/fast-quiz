import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import isEmpty from "lodash/isEmpty";

import { db } from "@/lib/db";

interface Params {
	masterId: string;
	lessonId: string;
}

const schema = z.object({
	text: z.string().nonempty(),
	correctOption: z.string().nonempty(),
	option1: z.string().nonempty(),
	option2: z.string().nonempty(),
	option3: z.string().nonempty(),
});

export const POST = async (
	request: NextRequest,
	{ params }: { params: Params }
) => {
	try {
		const { masterId, lessonId } = params;

		const body = await request.json();

		const validateData = schema.parse(body);

		const correctOption = await db.option.create({
			data: {
				text: validateData.correctOption,
			},
		});
		const option2 = await db.option.create({
			data: {
				text: validateData.option1,
			},
		});
		const option3 = await db.option.create({
			data: {
				text: validateData.option2,
			},
		});
		const option4 = await db.option.create({
			data: {
				text: validateData.option3,
			},
		});

		const question = await db.question.create({
			data: {
				masterId,
				lessonId,
				text: validateData.text,
				correctOptionId: correctOption.id,
				options: {
					connect: [correctOption, option2, option3, option4],
				},
			},
		});

		await db.option.updateMany({
			data: {
				questionId: question.id,
			},
			where: {
				OR: [
					{ id: correctOption.id },
					{ id: option2.id },
					{ id: option3.id },
					{ id: option4.id },
				],
			},
		});

		const lessonQuestion = await db.question.findFirst({
			where: {
				id: question.id,
			},
			include: {
				options: true,
			},
		});

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
