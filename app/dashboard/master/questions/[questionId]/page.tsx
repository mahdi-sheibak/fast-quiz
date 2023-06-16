import { db } from "@/lib/db"
import { TypographyH2, TypographyLarge } from "@/components/ui/typography"

interface Props {
	params: {
		questionId: string
	}
}

export default async function QuestionItem({ params }: Props) {
	const question = await db.question.findFirst({
		where: {
			id: params.questionId,
		},
	})

	const questionOptions = await db.option.findMany({
		where: {
			questionId: question?.id,
		},
	})

	if (!question)
		return (
			<div>
				<TypographyH2 className="text-red-500">
					سوال مورد نظر شما یافت نشد!
				</TypographyH2>
			</div>
		)

	return (
		<section>
			<TypographyH2>{question.text}</TypographyH2>
			<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
				{questionOptions.map((option) => (
					<li key={option.id}>
						<TypographyLarge
							className={
								option.id === question.answererId ? "text-green-500" : ""
							}>
							{option.text}
						</TypographyLarge>
					</li>
				))}
			</ul>
		</section>
	)
}
