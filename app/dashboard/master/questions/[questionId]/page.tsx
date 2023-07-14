import { redirect } from "next/navigation";

import { TypographyH2, TypographyLarge } from "@/components/ui/typography";
import { DeleteQuestionButton } from "@/components/misc/delete-question-button";
import { deleteQuestionAction } from "@/actions/question";
import { db } from "@/lib/db";

interface Props {
	params: {
		questionId: string;
	};
}

export default async function QuestionItem({ params }: Props) {
	const questionId = params.questionId;
	const question = await db.question.findFirst({
		where: {
			id: questionId,
		},
	});

	const questionOptions = await db.option.findMany({
		where: {
			questionId: question?.id,
		},
	});

	const optionIds = questionOptions.map((questionOption) => questionOption.id);

	async function deleteQuestion() {
		"use server";

		await deleteQuestionAction(questionId, optionIds);

		redirect("/dashboard/master/questions");
	}

	if (!question)
		return (
			<div>
				<TypographyH2 className="text-red-500">
					سوال مورد نظر شما یافت نشد!
				</TypographyH2>
			</div>
		);

	return (
		<section>
			<div className="flex justify-between border-b">
				<TypographyH2>{question.text}</TypographyH2>
				<DeleteQuestionButton action={deleteQuestion} />
			</div>
			<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
				{questionOptions.map((option) => (
					<li key={option.id}>
						<TypographyLarge
							className={
								option.id === question.correctOptionId ? "text-green-500" : ""
							}>
							{option.text}
						</TypographyLarge>
					</li>
				))}
			</ul>
		</section>
	);
}
