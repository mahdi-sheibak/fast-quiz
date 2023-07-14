import { DeleteQuestionButton } from "@/components/misc/delete-question-button";
import {
	TypographyH3,
	TypographyH4,
	TypographyMuted,
} from "@/components/ui/typography";
import { db } from "@/lib/db";
import { redirect } from "@/lib/misc";
import { revalidatePath } from "next/cache";

interface Props {
	params: {
		questionId: string;
	};
}

export default async function QuestionPage({ params }: Props) {
	const { questionId } = params;

	const question = await db.question.findFirst({
		where: {
			id: questionId,
		},
		include: {
			options: true,
		},
	});

	const deleteQuestion = async () => {
		"use server";

		await db.question.delete({
			where: {
				id: questionId,
			},
		});

		revalidatePath("/dashboard/master/questions");
		redirect("/dashboard/master/questions");
	};

	if (!question) {
		return (
			<div>
				<TypographyH3 className="text-red-700">
					{"سوالی یافت نشد!"}
				</TypographyH3>
			</div>
		);
	}

	return (
		<section className="flex flex-col gap-5">
			<div className="flex items-center justify-between">
				<TypographyH4>{question.text}</TypographyH4>
				<DeleteQuestionButton action={deleteQuestion} />
			</div>
			<TypographyMuted>{"گزینه ها:"}</TypographyMuted>
			<ul className="mr-6 list-disc [&>li]:mt-2">
				{question.options.map((option) => (
					<li
						key={option.id}
						className={
							option.id === question.correctOptionId ? "text-green-700" : ""
						}>
						{option.text}
					</li>
				))}
			</ul>
		</section>
	);
}
