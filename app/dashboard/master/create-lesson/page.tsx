import { CreateLessonForm } from "@/components/create-lesson";
import { createLessonAction } from "@/actions/lesson";
import { Lesson } from "@/services/lesson";
import { redirect } from "@/lib/misc";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export default function CreateLesson() {
	const masterId = cookies().get("id")?.value;

	const onSubmit = async (lessonData: Lesson) => {
		"use server";
		await createLessonAction(lessonData);

		revalidatePath("/dashboard/master");
		redirect("/dashboard/master");
	};

	return (
		<div>
			<CreateLessonForm onSubmit={onSubmit} masterId={masterId} />
		</div>
	);
}
