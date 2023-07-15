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

	const question = await db.question.findFirst({
		where: {
			id: questionId,
		},
	});

	if (!question)
		return (
			<div>
				<TypographyH3 className="text-red-700">{"سوال یافت نشد!"}</TypographyH3>
			</div>
		);

	return (
		<div>
			<TypographyH3>{question.text}</TypographyH3>
		</div>
	);
}
