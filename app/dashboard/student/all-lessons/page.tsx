import { joinLessonAction, leaveLessonAction } from "@/actions/student";
import { JoinLessonButton } from "@/components/misc/join-lesson-button";
import { LeaveLessonButton } from "@/components/misc/leave-lesson-button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TypographyMuted } from "@/components/ui/typography";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface ButtonProps {
	lessonId: string;
	studentId?: string;
}

function JoinButton({ lessonId, studentId }: ButtonProps) {
	const joinLesson = async () => {
		"use server";

		await joinLessonAction(lessonId, studentId);

		revalidatePath("/dashboard/student/all-lessons");
	};

	return <JoinLessonButton action={joinLesson} />;
}

function LeaveButton({ lessonId, studentId }: ButtonProps) {
	const joinLesson = async () => {
		"use server";

		await leaveLessonAction(lessonId, studentId);

		revalidatePath("/dashboard/student/all-lessons");
	};

	return <LeaveLessonButton action={joinLesson} />;
}

export default async function AllLessons() {
	const studentId = cookies().get("id")?.value;

	const allLessons = await db.lesson.findMany({
		include: {
			master: true,
			students: true,
		},
	});

	return (
		<div className="flex flex-wrap gap-5">
			{allLessons.map((lesson) => (
				<Card key={lesson.id} className="w-[250px]">
					<CardHeader className="flex gap-3">
						<CardTitle>{lesson.name}</CardTitle>
						<CardDescription>{lesson.master.fullName}</CardDescription>
						<TypographyMuted>
							{"تعداد دانشجو: "}
							{lesson.students.length}
						</TypographyMuted>
					</CardHeader>
					<CardFooter>
						{lesson.students.some((student) => student.id === studentId) ? (
							<LeaveButton studentId={studentId} lessonId={lesson.id} />
						) : (
							<JoinButton studentId={studentId} lessonId={lesson.id} />
						)}
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
