import { cookies } from "next/headers";

import { Question } from "@/components/question";
import { TypographyH3 } from "@/components/ui/typography";
import { db } from "@/lib/db";

export const fetchCache = "force-no-store";

interface Props {
	params: {
		lessonId: string;
		questionId: string;
	};
}

export default async function QuestionPage({ params }: Props) {
	const { questionId } = params;

	const studentId = cookies().get("id")?.value;

	if (!studentId)
		return (
			<div>
				<TypographyH3 className="text-red-700">
					{"کد دانشجو وجود ندارد، لطفا وارد شوید."}
				</TypographyH3>
			</div>
		);

	const question = await db.question.findFirst({
		where: {
			id: questionId,
		},
		include: {
			options: true,
			answerers: {
				where: {
					studentId: studentId,
				},
			},
		},
	});

	const answerToQuestion = async (chooseOption: string) => {
		"use server";
		const isCorrectOption = Boolean(chooseOption === question?.correctOptionId);
		await db.answerer.create({
			data: {
				correct: isCorrectOption,
				optionId: chooseOption,
				questionId,
				studentId,
			},
		});
	};

	if (!question)
		return (
			<div>
				<TypographyH3 className="text-red-700">{"سوال یافت نشد!"}</TypographyH3>
			</div>
		);

	return (
		<section className="flex flex-col gap-5">
			<Question
				text={question.text}
				options={question.options}
				action={answerToQuestion}
				defaultValue={
					question.answerers[question.answerers.length - 1]?.optionId || ""
				}
			/>
		</section>
	);
}
