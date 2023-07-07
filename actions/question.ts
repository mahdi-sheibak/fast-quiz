"use server";

import { db } from "@/lib/db";
import { Question } from "@/services/question";

export const createQuestionAction = async (
	question: Question,
	masterId: string
) => {
	const option1 = await db.option.create({
		data: { text: question.option1 },
	});

	const option2 = await db.option.create({
		data: { text: question.option2 },
	});

	const option3 = await db.option.create({
		data: { text: question.option3 },
	});

	const option4 = await db.option.create({
		data: { text: question.option4 },
	});

	await db.question.create({
		data: {
			masterId: masterId,
			text: question.text,
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
	});
};

export const deleteQuestionAction = async (
	questionId: string,
	optionIds: string[]
) => {
	await db.question.delete({
		where: {
			id: questionId,
		},
	});

	await db.option.deleteMany({
		where: {
			id: {
				in: optionIds,
			},
		},
	});
};
