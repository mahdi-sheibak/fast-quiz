import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { PlusSquareIcon } from "lucide-react";

import { TypographyH3, TypographyH4 } from "@/components/ui/typography";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { LinkButton } from "@/components/ui/link-button";
import { CreateQuestionForm } from "@/components/create-question";
import { db } from "@/lib/db";
import { createQuestionAction } from "@/actions/question";
import { Question } from "@/services/question";
import { redirect } from "@/lib/misc";
import { deleteLessonAction } from "@/actions/lesson";
import { DeleteLessonButton } from "@/components/misc/delete-lesson-button";
import { IconButton } from "@/components/ui/icon-button";

export const fetchCache = "force-no-store";

interface Props {
	params: {
		lessonId: string;
	};
}

export default async function LessonPage({ params }: Props) {
	const { lessonId } = params;

	const masterId = cookies().get("id")?.value;

	const lesson = await db.lesson.findFirst({
		where: {
			id: lessonId,
		},
		include: {
			questions: true,
		},
	});

	const createQuestion = async (question: Question) => {
		"use server";

		await createQuestionAction(question, question.masterId, lessonId);

		revalidatePath(`/dashboard/master/lessons/${lessonId}`);
		redirect(`/dashboard/master/lessons/${lessonId}`);
	};

	const deleteLesson = async () => {
		"use server";

		await deleteLessonAction(lessonId);
		redirect("/dashboard/master");
	};

	if (!lesson) {
		return (
			<div>
				<TypographyH3 className="text-red-700">{"درسی یافت نشد!"}</TypographyH3>
			</div>
		);
	}

	return (
		<main className="flex flex-col gap-10">
			<div className="flex flex-wrap items-center justify-between gap-4">
				<TypographyH3>نام درس: {lesson.name}</TypographyH3>
				<div className="flex gap-4">
					<DeleteLessonButton action={deleteLesson} />
					<Dialog>
						<DialogTrigger asChild>
							<IconButton icon={<PlusSquareIcon />} className="w-32">
								{"ایجاد سوال"}
							</IconButton>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>{"ایجاد سوال"}</DialogTitle>
							</DialogHeader>
							<CreateQuestionForm
								onSubmit={createQuestion}
								masterId={masterId}
							/>
						</DialogContent>
					</Dialog>
				</div>
			</div>
			{!lesson.questions.length && (
				<TypographyH3 className="text-red-700">
					{"هنوز سوالی ایجاد نشده!"}
				</TypographyH3>
			)}
			{Boolean(lesson.questions.length) && (
				<div className="flex flex-col gap-4">
					<TypographyH4>لیست سوالات:</TypographyH4>
					<div className="flex flex-wrap gap-5 py-3">
						{lesson.questions.map((question) => {
							return (
								<LinkButton
									href={`/dashboard/master/lessons/${lessonId}/${question.id}`}
									key={question.id}
									variant="secondary"
									className="p-10">
									{question.text}
								</LinkButton>
							);
						})}
					</div>
				</div>
			)}
		</main>
	);
}
