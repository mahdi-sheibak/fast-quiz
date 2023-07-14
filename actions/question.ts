"use server";

import { db } from "@/lib/db";
import { Question } from "@/services/question";

export const createQuestionAction = async (
	question: Question,
	masterId: string,
	lessonId: string
) => {
	const correctOption = await db.option.create({
		data: {
			text: question.correctOption,
		},
	});
	const option2 = await db.option.create({
		data: {
			text: question.option1,
		},
	});
	const option3 = await db.option.create({
		data: {
			text: question.option2,
		},
	});
	const option4 = await db.option.create({
		data: {
			text: question.option3,
		},
	});

	const createdQuestion = await db.question.create({
		data: {
			masterId,
			lessonId,
			text: question.text,
			correctOptionId: correctOption.id,
			options: {
				connect: [correctOption, option2, option3, option4],
			},
		},
	});

	await db.option.updateMany({
		data: {
			questionId: createdQuestion.id,
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
			id: createdQuestion.id,
		},
		include: {
			options: true,
		},
	});
	return lessonQuestion;
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
