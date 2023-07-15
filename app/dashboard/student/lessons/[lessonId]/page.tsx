import { LinkButton } from "@/components/ui/link-button";
import { TypographyH3, TypographyMuted } from "@/components/ui/typography";
import { db } from "@/lib/db";

export const fetchCache = "force-no-store";

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
			master: true,
		},
	});

	if (!lesson)
		return (
			<div>
				<TypographyH3 className="text-red-700">{"درسی یافت نشد!"}</TypographyH3>
			</div>
		);

	return (
		<section className="flex flex-col gap-5">
			<div>
				<TypographyH3>{lesson.name}</TypographyH3>
				<TypographyMuted>{lesson.master.fullName}</TypographyMuted>
			</div>
			{!lesson.questions.length && (
				<TypographyH3 className="text-red-700">
					{"هنوز سوالی برای درس وجود ندارد!"}
				</TypographyH3>
			)}
			<div className="flex flex-wrap gap-5">
				{lesson.questions.map((question) => (
					<LinkButton
						key={question.id}
						href={`/dashboard/student/lessons/${lessonId}/${question.id}`}
						variant="secondary"
						className="w-60 p-10">
						{question.text}
					</LinkButton>
				))}
			</div>
		</section>
	);
}
