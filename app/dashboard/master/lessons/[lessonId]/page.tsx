import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyH4 } from "@/components/ui/typography";
import { db } from "@/lib/db";

interface Props {
	params: {
		lessonId: string;
	};
}

export default async function LessonPage({ params }: Props) {
	const { lessonId } = params;

	const lesson = await db.lesson.findFirst({
		where: {
			id: lessonId,
		},
		include: {
			questions: true,
		},
	});

	return (
		<main className="flex flex-col gap-10">
			<div className="flex items-center justify-between">
				<TypographyH3>نام درس: {lesson?.name}</TypographyH3>
				<Button className="w-1/6">{"ایجاد سوال"}</Button>
			</div>
			{!lesson?.questions.length && (
				<TypographyH3 className="text-red-700">
					{"هنوز سوالی ایجاد نشده!"}
				</TypographyH3>
			)}
			{Boolean(lesson?.questions.length) && (
				<div>
					<TypographyH4>لیست سوالات</TypographyH4>
					<div>
						{lesson?.questions.map((question) => {
							return <span key={question.id}>{question.text}</span>;
						})}
					</div>
				</div>
			)}
		</main>
	);
}
